# Yassaha Ali Portfolio

React portfolio with a server-side OpenAI-powered CV assistant.

## Set up

1. Copy `.env.example` to `.env` and add a newly created OpenAI API key.
2. Export the values in `.env` through your hosting environment or process manager.
3. Run `pnpm install`, then `pnpm build` and `pnpm start`.

The browser calls `/api/chat`; the API key remains on the server. The assistant is grounded in `server/cv-context.mjs`. Update that file whenever the CV changes.

For production, proxy the site through Nginx to the configured `PORT`. Do not commit `.env`.
