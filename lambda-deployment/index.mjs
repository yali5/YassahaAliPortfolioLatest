import {
  GetSecretValueCommand,
  SecretsManagerClient
} from "@aws-sdk/client-secrets-manager";

import { readFile } from "node:fs/promises";

const secretsClient = new SecretsManagerClient({});

const allowedOrigins = new Set([
  "https://www.yassahaali.com",
  "https://yassahaali.com"
]);

let cachedApiKey;
let cachedCv;

function createResponse(statusCode, body, origin) {
  const allowedOrigin = allowedOrigins.has(origin)
    ? origin
    : "https://www.yassahaali.com";

  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Vary": "Origin"
    },
    body: JSON.stringify(body)
  };
}

async function getApiKey() {
  if (cachedApiKey) {
    return cachedApiKey;
  }

  const secretName =
    process.env.OPENAI_SECRET_NAME || "portfolio/openai";

  const secretResponse = await secretsClient.send(
    new GetSecretValueCommand({
      SecretId: secretName
    })
  );

  if (!secretResponse.SecretString) {
    throw new Error("The OpenAI secret does not contain SecretString.");
  }

  const secret = JSON.parse(secretResponse.SecretString);
  const apiKey = secret.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY was not found in the Secrets Manager secret."
    );
  }

  cachedApiKey = apiKey;
  return cachedApiKey;
}

async function getCv() {
  if (!cachedCv) {
    cachedCv = await readFile(
      new URL("./cv-data.txt", import.meta.url),
      "utf8"
    );
  }

  return cachedCv;
}

function getRequestBody(event) {
  if (!event?.body) {
    return {};
  }

  if (typeof event.body === "object") {
    return event.body;
  }

  const bodyText = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  return JSON.parse(bodyText);
}

export const handler = async (event) => {
  const origin =
    event?.headers?.origin ||
    event?.headers?.Origin ||
    "https://www.yassahaali.com";

  const method =
    event?.requestContext?.http?.method ||
    event?.httpMethod ||
    "POST";

  if (method === "OPTIONS") {
    return createResponse(204, {}, origin);
  }

  if (method !== "POST") {
    return createResponse(
      405,
      { error: "Method not allowed." },
      origin
    );
  }

  try {
    const requestBody = getRequestBody(event);
    const message =
      typeof requestBody.message === "string"
        ? requestBody.message.trim()
        : "";

    if (!message) {
      return createResponse(
        400,
        { error: "A message is required." },
        origin
      );
    }

    if (message.length > 2000) {
      return createResponse(
        400,
        { error: "The message is too long." },
        origin
      );
    }

    const [apiKey, cv] = await Promise.all([
      getApiKey(),
      getCv()
    ]);

    const model = process.env.OPENAI_MODEL || "gpt-5-mini";
    const maxOutputTokens = Number(
      process.env.MAX_OUTPUT_TOKENS || 350
    );

    const openAiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
    body: JSON.stringify({
    model,
    reasoning: {
     effort: "low"
    },
    max_output_tokens: maxOutputTokens,
    instructions: `
You are the portfolio assistant for Yassaha Ali.

Answer questions using only the supplied CV information. Be concise,
professional and accurate. Speak about Yassaha in the third person unless
the user asks for a first-person answer.

If the requested information is not present in the CV, state that the
information is not available in the CV. Do not invent qualifications,
employment history, dates, skills or achievements.

CV DATA:
${cv}
          `.trim(),
          input: message
        })
      }
    );

    const responseData = await openAiResponse.json();

    if (!openAiResponse.ok) {
      console.error(
        "OpenAI request failed:",
        openAiResponse.status,
        responseData
      );

      throw new Error(
        responseData?.error?.message ||
        "The OpenAI request failed."
      );
    }

const outputText = (responseData.output || [])
  .filter((item) => item.type === "message")
  .flatMap((item) => item.content || [])
  .filter((content) => content.type === "output_text")
  .map((content) => content.text || "")
  .join("\n")
  .trim();

const answer =
  typeof responseData.output_text === "string"
    ? responseData.output_text.trim()
    : outputText;

if (!answer) {
  console.error(
    "OpenAI response metadata:",
    JSON.stringify({
      status: responseData.status,
      incompleteDetails: responseData.incomplete_details,
      outputTypes: responseData.output?.map((item) => ({
        type: item.type,
        contentTypes: item.content?.map(
          (content) => content.type
        )
      })),
      usage: responseData.usage
    })
  );

  if (
    responseData.status === "incomplete" &&
    responseData.incomplete_details?.reason ===
      "max_output_tokens"
  ) {
    throw new Error(
      "OpenAI exhausted the output-token allowance before producing an answer."
    );
  }

  throw new Error(
    "OpenAI returned a response without answer text."
  );
}

    return createResponse(
      200,
      { response: answer },
      origin
    );
  } catch (error) {
    console.error("Chatbot error:", error);

    return createResponse(
      500,
      {
        error:
          "The chatbot is temporarily unavailable. Please try again."
      },
      origin
    );
  }
};