import { useState, useRef, useEffect } from 'react';
import robotMascot from './assets/robot-mascot.png';
import azureLogo from './assets/azure-logo.png';
import ssiProject from './assets/project-ssi.jpg';
import jobAvaso from './assets/job-avaso.jpg';
import jobFordCredit from './assets/job-ford-credit.jpg';
import jobFordDagenham from './assets/job-ford-dagenham.jpg';
import jobFordDunton from './assets/job-ford-dunton.jpg';
import jobThreeRivers from './assets/job-three-rivers.jpg';
import charitySolar from './assets/charity-solar.jpg';

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Skills', 'Education', 'Experience', 'Charity', 'Chatbot'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#080d18]/95 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-white tracking-tight flex items-center gap-2">
          <span className="text-[#00d4ff]">{'>'}</span>
          <span>yassaha.ali</span>
          <span className="animate-blink text-[#00d4ff]">_</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-display text-sm text-slate-400 hover:text-[#00d4ff] px-4 py-2 rounded transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:yassahaali@gmail.com"
            className="ml-4 font-display text-sm bg-[#00d4ff] text-[#080d18] font-semibold px-5 py-2 rounded hover:bg-white transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-[#00d4ff] transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="16" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0e1525] border-t border-[rgba(0,212,255,0.1)] px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-display text-sm text-slate-300 hover:text-[#00d4ff] py-3 border-b border-[rgba(255,255,255,0.05)] transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:yassahaali@gmail.com"
            className="mt-2 font-display text-sm bg-[#00d4ff] text-[#080d18] font-semibold px-5 py-3 rounded text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <p className="font-display text-[#00d4ff] text-sm mb-3 tracking-widest">// Technical Project Manager</p>
          <h1 className="font-display font-bold leading-none mb-6">
            <span className="block text-slate-400 text-2xl font-normal mb-1">Hi, I'm</span>
            <span className="block text-5xl md:text-6xl text-white">Yassaha</span>
            <span className="block text-5xl md:text-6xl text-[#00d4ff] glow-text">Ali</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md font-body">
            IT Professional with expertise in Infrastructure, Project Management, and Software Development.
            PRINCE2 Practitioner &amp; Professional Scrum Master I (PSM I) — BSc Ergonomics, Loughborough University.
            <span className="text-slate-300"> Interested in web development &amp; project management.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Yassaha-Ali-CV.pdf"
              className="font-display text-sm bg-[#00d4ff] text-[#080d18] font-bold px-6 py-3 rounded hover:bg-white transition-all duration-200"
            >
              View Resume ↓
            </a>
            <a
              href="mailto:yassahaali@gmail.com"
              className="font-display text-sm border border-[rgba(0,212,255,0.4)] text-[#00d4ff] px-6 py-3 rounded hover:bg-[rgba(0,212,255,0.1)] transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yali5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-display text-xs">github/yali5</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yassahaali/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-[#00d4ff] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-display text-xs">linkedin/yassahaali</span>
            </a>
          </div>
        </div>

        {/* Robot mascot */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#00d4ff]/10 blur-2xl scale-110 animate-pulse-glow" />
            <img
              src={robotMascot}
              alt="AI Assistant"
              className="relative w-64 md:w-80 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-display text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

// ─── Tech Marquee ─────────────────────────────────────────────────────────────

const TECH_TAGS = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Next.js', 'Java', 'Kotlin', 'Spring Boot', 'Ruby', 'SQL',
  'Azure AI', 'OpenAI', 'Google Cloud', 'PRINCE2', 'PSM I', 'Agile',
  'Jira', 'Git', 'Tailwind CSS', 'REST APIs', 'WAMAS WMS', 'Network Engineering',
];

function TechMarquee() {
  const doubled = [...TECH_TAGS, ...TECH_TAGS];
  return (
    <div className="py-10 border-y border-[rgba(0,212,255,0.1)] overflow-hidden bg-[#0e1525]/60">
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{ animation: 'marquee 35s linear infinite' }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="font-display text-xs font-medium px-4 py-2 rounded border border-[rgba(0,212,255,0.2)] text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-colors duration-200 cursor-default flex-shrink-0"
          >
            {tag}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ─── Skills / About ───────────────────────────────────────────────────────────

const FRONTEND = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];
const BACKEND  = ['Node.js', 'Java', 'Kotlin', 'Spring Boot', 'Ruby', 'SQL', 'PostgreSQL', 'MongoDB', 'REST APIs'];
const INFRA    = ['Azure AI', 'OpenAI API', 'Google Cloud Platform', 'PRINCE2 Practitioner', 'PSM I', 'Jira', 'Network Engineering', 'WAMAS WMS'];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="font-display text-xs px-3 py-1.5 rounded border border-[rgba(0,212,255,0.25)] text-[#00d4ff] bg-[rgba(0,212,255,0.05)] hover:bg-[rgba(0,212,255,0.12)] transition-colors cursor-default">
      {label}
    </span>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-display text-[#00d4ff] text-xs tracking-widest mb-3">// ABOUT ME</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Skill columns */}
        <div className="bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl p-8 card-hover">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-[#00d4ff] text-xs font-semibold tracking-widest mb-3">FRONTEND</h3>
              <div className="flex flex-wrap gap-2">
                {FRONTEND.map(s => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="font-display text-[#00d4ff] text-xs font-semibold tracking-widest mb-3">BACKEND</h3>
              <div className="flex flex-wrap gap-2">
                {BACKEND.map(s => <SkillPill key={s} label={s} />)}
              </div>
            </div>
            <div>
              <h3 className="font-display text-[#00d4ff] text-xs font-semibold tracking-widest mb-3">INFRASTRUCTURE & AI</h3>
              <div className="flex flex-wrap gap-2">
                {INFRA.map(s => <SkillPill key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl p-8 card-hover">
          <h3 className="font-display text-white font-bold text-lg mb-5">A bit about me</h3>
          <p className="text-slate-400 leading-relaxed mb-4 font-body">
            With a comprehensive background in project management, software development, and business analysis,
            along with a proven track record of managing key projects with budgets of up to <span className="text-white font-semibold">£2.2 million</span>, I bring both technical depth and leadership experience.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6 font-body">
            I am a <span className="text-white font-semibold">PRINCE2 Practitioner</span> and hold the <span className="text-white font-semibold">Professional Scrum Master I (PSM I)</span> certification,
            with hands-on experience leading Agile and Waterfall methodologies. My <span className="text-white font-semibold">BSc in Ergonomics</span> from Loughborough University
            underpins my focus on human factors, UX, and system design.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0">
                <img src={azureLogo} alt="Azure" className="w-5 h-5 object-contain" />
              </div>
              <span className="font-display text-sm text-slate-300">Azure AI &amp; OpenAI Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0 text-[#00d4ff] text-xs font-display font-bold">P2</div>
              <span className="font-display text-sm text-slate-300">PRINCE2 Practitioner</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0 text-[#00d4ff] text-xs font-display font-bold">PSM</div>
              <span className="font-display text-sm text-slate-300">Professional Scrum Master I (PSM I)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Education ───────────────────────────────────────────────────────────────

const BSC_MODULES = [
  'Ergonomics & Design', 'Ergonomics of Human Computer Interaction',
  'Cognitive Ergonomics', 'Systems Ergonomics', 'Designing Products for People',
  'Experiment Design & Analysis', 'Organisational Behaviour',
  'Human Response to Noise & Vibration', 'Disability, Ageing & Inclusive Design',
  'Driver & Vehicle Ergonomics', 'The Body at Work', 'Qualitative Methods',
  'Human Performance at Environmental Extremes',
];

const MSC_MODULES = [
  { code: 'CI7240', name: 'IT and Entrepreneurship',       grade: 'A−', mark: 74  },
  { code: 'CI7320', name: 'Databases and Data Management', grade: 'A',  mark: 79  },
  { code: 'CI7350', name: 'Agile Project Development',     grade: 'A+', mark: 90  },
  { code: 'CI7600', name: 'Business in Practice',          grade: 'A−', mark: 73  },
  { code: 'CI7000', name: 'Project Dissertation',          grade: null, mark: null },
];

const CERTS = [
  { code: 'PSM', label: 'Professional Scrum Master I (PSM I)', body: 'Scrum.org · July 2024', color: '#7c3aed' },
  { code: 'P2P', label: 'PRINCE2 Practitioner', body: 'AXELOS / PeopleCert · July 2023', color: '#00d4ff' },
  { code: 'P2F', label: 'PRINCE2 Foundation', body: 'AXELOS / PeopleCert · March 2023', color: '#00d4ff' },
  { code: 'MKR', label: 'Makers Coding Course', body: 'Makers · November 2021', color: '#7c3aed' },
];

function Education() {
  const [bscOpen, setBscOpen] = useState(false);

  return (
    <section id="education" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-[#00d4ff] text-xs tracking-widest mb-3">// QUALIFICATIONS</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* BSc */}
          <div className="bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl p-8 card-hover">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.25)] flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[#00d4ff] text-xs font-bold">BSc</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base leading-tight">
                  BSc (Hons) Human Factors Engineering (Ergonomics)
                </h3>
                <p className="font-display text-[#00d4ff] text-xs mt-1">Loughborough University</p>
                <p className="font-display text-slate-500 text-xs mt-0.5">Oct 2011 – Jul 2014 · 2:2</p>
              </div>
            </div>
            <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
              Studied the intersection of human behaviour, system design, and technology — covering HCI,
              cognitive ergonomics, inclusive design, and experimental methods. Strong foundation for
              user-centred IT and software work.
            </p>

            {/* Expandable modules */}
            <button
              onClick={() => setBscOpen(!bscOpen)}
              className="flex items-center gap-2 font-display text-xs text-slate-500 hover:text-[#00d4ff] transition-colors mb-3"
            >
              <span>{bscOpen ? '▾' : '▸'}</span>
              {bscOpen ? 'Hide modules' : 'Show key modules'}
            </button>
            {bscOpen && (
              <div className="flex flex-wrap gap-2">
                {BSC_MODULES.map(m => (
                  <span key={m} className="font-display text-xs px-2.5 py-1 rounded border border-[rgba(0,212,255,0.15)] text-slate-400 bg-[rgba(0,212,255,0.03)]">
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* MSc */}
          <div className="bg-[#0e1525] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 card-hover relative overflow-hidden">
            {/* In-progress badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.4)] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
              <span className="font-display text-[#a78bfa] text-xs">In Progress</span>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.35)] flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[#a78bfa] text-xs font-bold">MSc</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base leading-tight">
                  Information Systems
                </h3>
                <p className="font-display text-[#a78bfa] text-xs mt-1">Kingston University London · Faculty of Engineering, Computing &amp; the Environment</p>
                <p className="font-display text-slate-500 text-xs mt-0.5">Sep 2025 – Present · Dissertation in progress</p>
              </div>
            </div>
            <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
              Postgraduate study combining IT strategy, data management, agile delivery, and entrepreneurship.
              Distinction-track average to date (~79%), with all four taught modules completed at A-range grades; dissertation currently underway.
            </p>

            {/* Module table */}
            <div className="rounded-lg overflow-hidden border border-[rgba(124,58,237,0.15)]">
              <div className="grid grid-cols-[1fr_auto_auto] bg-[rgba(124,58,237,0.08)] px-4 py-2 border-b border-[rgba(124,58,237,0.15)]">
                <span className="font-display text-xs text-slate-500 uppercase tracking-wider">Module</span>
                <span className="font-display text-xs text-slate-500 uppercase tracking-wider text-right pr-4">Mark</span>
                <span className="font-display text-xs text-slate-500 uppercase tracking-wider text-right">Grade</span>
              </div>
              {MSC_MODULES.map((m, i) => (
                <div
                  key={m.code}
                  className={`grid grid-cols-[1fr_auto_auto] px-4 py-2.5 items-center ${i < MSC_MODULES.length - 1 ? 'border-b border-[rgba(124,58,237,0.08)]' : ''}`}
                >
                  <div>
                    <span className="font-display text-[10px] text-slate-600 mr-2">{m.code}</span>
                    <span className="font-display text-xs text-slate-300">{m.name}</span>
                  </div>
                  <span className="font-display text-xs text-right pr-4">
                    {m.mark !== null ? (
                      <span className="text-slate-400">{m.mark}</span>
                    ) : (
                      <span className="text-slate-600 italic">pending</span>
                    )}
                  </span>
                  {m.grade ? (
                    <span className={`font-display text-xs font-bold text-right ${m.grade === 'A+' ? 'text-[#00d4ff]' : 'text-[#a78bfa]'}`}>
                      {m.grade}
                    </span>
                  ) : (
                    <span className="font-display text-xs text-slate-600 italic text-right">—</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="font-display text-slate-500 text-xs tracking-widest mb-4">PROFESSIONAL CERTIFICATIONS</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTS.map(cert => (
              <div
                key={cert.code}
                className="bg-[#0e1525] border rounded-xl p-5 card-hover flex items-center gap-4"
                style={{ borderColor: `${cert.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                  style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}33` }}
                >
                  {cert.code}
                </div>
                <div>
                  <p className="font-display text-white text-sm font-semibold leading-tight">{cert.label}</p>
                  <p className="font-display text-slate-500 text-xs mt-1">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Work Experience ──────────────────────────────────────────────────────────

const JOBS = [
  {
    title: 'IT Logistics Consultant / Systems Analyst',
    company: 'SSI Schaefer',
    period: 'Nov 2023 – May 2024',
    description: 'Analysed and optimised intralogistics processes for global clients including Marks & Spencer and H&M. Customer-facing SME covering As-Is/To-Be process documentation, Jira user stories and epics, SQL data analysis, and workshops.',
    img: ssiProject,
    imgAlt: 'SSI Schaefer warehouse automation',
    tag: 'WMS / Logistics',
  },
  {
    title: 'IT Consultant',
    company: 'Independent — Air Canada, NTT GN, AVASO Technology Solutions',
    period: 'Dec 2022 – Oct 2023',
    description: 'Consultancy for business change and IT transformation programmes. Managed end-to-end IMAC processes, supported procurement and vendor management, and applied ITIL practices across networking, routing, switching, and SD-WAN.',
    img: jobAvaso,
    imgAlt: 'Network engineering data centre',
    tag: 'Consultancy / Network',
  },
  {
    title: 'Software Application Developer',
    company: 'Ford Credit Europe',
    period: 'Sep 2021 – Nov 2022',
    description: 'Engineered production JavaScript in an Agile Scrum team delivering vehicle-leasing services, deploying micro-services to Google Cloud with Kotlin/Java, Spring Boot, React/TypeScript, PostgreSQL, and MongoDB.',
    img: jobFordCredit,
    imgAlt: 'Ford Mustang',
    tag: 'Software / Agile',
  },
  {
    title: 'IT Project Manager & Scrum Master',
    company: 'Ford Motor Company',
    period: 'Aug 2018 – Sep 2021',
    description: 'Led UK and European infrastructure and business-change programmes worth up to £2.2M per project — up to 4 concurrent projects across 4 sites with teams of 12+ — and oversaw a £5M+ portfolio of telephony and LAN hardware leases.',
    img: jobFordDagenham,
    imgAlt: 'Ford Dagenham Engine Plant interior',
    credit: 'Photo: Ashley Dace, CC BY-SA 2.0',
    tag: 'Infrastructure / PM',
  },
  {
    title: 'IT Business Analyst',
    company: 'Ford Motor Company',
    period: 'Apr 2017 – Aug 2018',
    description: 'On-site IT support and incident response as part of the Dunton Site management team. Supported Single Point of Failure remediation and 1GB-to-desk projects, and produced monthly Client Health, Shared Disk, and GPO metrics.',
    img: jobFordDunton,
    imgAlt: 'Ford Dunton Technical Centre',
    credit: 'Photo: Matthew Barker, CC BY-SA 2.0',
    tag: 'BA / Site Mgmt',
  },
  {
    title: 'IT Support',
    company: 'Three Rivers District Council',
    period: 'May 2016',
    description: 'Deployed new computers and Windows 7, rolled out MS Office 2013, and migrated legacy software to a new environment using SCCM 2012.',
    img: jobThreeRivers,
    imgAlt: 'IT deployment technician',
    tag: 'Deployment',
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-display text-[#00d4ff] text-xs tracking-widest mb-3">// WORK HISTORY</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Experience</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {JOBS.map((job) => (
          <article
            key={job.title + job.company}
            className="bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl overflow-hidden card-hover group"
          >
            <div className="relative h-44 overflow-hidden bg-slate-800">
              <img
                src={job.img}
                alt={job.imgAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1525] via-transparent to-transparent" />
              <span className="absolute top-3 right-3 font-display text-xs bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff] px-2 py-1 rounded">
                {job.tag}
              </span>
              {job.credit && (
                <span className="absolute bottom-1 right-2 font-display text-[10px] text-slate-400/80">
                  {job.credit}
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="font-display text-[#00d4ff] text-xs tracking-wider mb-1">{job.period}</p>
              <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">{job.title}</h3>
              <p className="font-display text-slate-500 text-xs mb-3">{job.company}</p>
              <p className="font-body text-slate-400 text-sm leading-relaxed">{job.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Charity ──────────────────────────────────────────────────────────────────

function Charity() {
  return (
    <section id="charity" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-[#00d4ff] text-xs tracking-widest mb-3">// GIVING BACK</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Charity</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div className="bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.4)] flex items-center justify-center text-2xl">
                ☀️
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">Mazhar Ali Foundation</h3>
                <p className="font-display text-slate-500 text-xs mt-0.5">Kashmir Solar Initiative</p>
              </div>
            </div>
            <p className="font-body text-slate-400 leading-relaxed mb-4">
              I set up a small charity in my father's name to install solar panels and generators in the Kashmir region.
              Through energy generation, the aim is to facilitate <span className="text-white font-semibold">energy independence</span> in underserved communities.
            </p>
            <p className="font-body text-slate-400 leading-relaxed mb-8">
              If you'd like to support this cause, you can donate via the JustGiving page below. Every contribution helps bring power to communities that need it.
            </p>
            <a
              href="https://www.justgiving.com/page/yassaha-ali-4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm bg-[#7c3aed] text-white font-bold px-6 py-3 rounded hover:bg-[#6d28d9] transition-all duration-200"
            >
              Donate on JustGiving ↗
            </a>
          </div>

          {/* Visual */}
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-full min-h-64 bg-slate-800">
            <img
              src={charitySolar}
              alt="Solar panels providing clean energy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[rgba(8,13,24,0.85)] backdrop-blur-sm border border-[rgba(124,58,237,0.3)] rounded-xl p-4">
                <p className="font-display text-xs text-[#a78bfa] tracking-wider mb-1">MISSION</p>
                <p className="font-display text-white text-sm font-semibold">Energy independence for Kashmir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Chatbot ──────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm an AI assistant that knows all about Yassaha's skills, work experience, and background. How can I help you learn more about him?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { role: 'user', content: input.trim(), timestamp: time };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const latestUserMessage =
        [...newMessages]
          .reverse()
          .find(({ role }) => role === 'user')
          ?.content?.trim() ?? '';

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: latestUserMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok || typeof data.response !== 'string') {
        throw new Error(
          data.error || 'The assistant could not respond.'
        );
      }

      const aiTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: data.response,
          timestamp: aiTime,
        },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            error instanceof Error
              ? error.message
              : 'The assistant is temporarily unavailable. Please try again shortly.',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section id="chatbot" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-display text-[#00d4ff] text-xs tracking-widest mb-3">// AI ASSISTANT</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Chatbot</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Info panel */}
        <div className="md:col-span-2 bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={robotMascot} alt="AI Assistant" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-display font-bold text-white text-lg">AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                  <span className="font-display text-[#00d4ff] text-xs">Online</span>
                </div>
              </div>
            </div>
            <p className="font-body text-slate-400 leading-relaxed mb-4">
              This chatbot has a full copy of Yassaha's CV, skills, and work experience. Ask it anything — from his technical skills to his project management background.
            </p>
            <p className="font-body text-slate-400 leading-relaxed mb-8">
              Yassaha is currently open to new opportunities. Get in touch after chatting to see if he is the right fit for your project.
            </p>
          </div>
          <a
            href="/Yassaha-Ali-CV.pdf"
            className="font-display text-sm border border-[rgba(0,212,255,0.4)] text-[#00d4ff] px-5 py-3 rounded hover:bg-[rgba(0,212,255,0.1)] transition-all duration-200 text-center"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Chat box */}
        <div className="md:col-span-3 bg-[#0e1525] border border-[rgba(0,212,255,0.12)] rounded-2xl flex flex-col overflow-hidden">
          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 min-h-80 max-h-96"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden ${
                  msg.role === 'user'
                    ? 'bg-[rgba(124,58,237,0.3)] border border-[rgba(124,58,237,0.5)]'
                    : 'bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)]'
                }`}>
                  {msg.role === 'user' ? (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-[#a78bfa]">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  ) : (
                    <img src={robotMascot} alt="AI" className="w-7 h-7 object-contain" />
                  )}
                </div>

                {/* Bubble */}
                <div className={`max-w-xs lg:max-w-sm ${msg.role === 'user' ? 'items-end' : ''}`}>
                  <div className={`rounded-2xl px-4 py-3 text-sm font-body leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[rgba(124,58,237,0.2)] border border-[rgba(124,58,237,0.3)] text-white rounded-tr-sm'
                      : 'bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] text-slate-300 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                  {msg.timestamp && (
                    <p className={`font-display text-xs text-slate-600 mt-1 px-1 ${msg.role === 'user' ? 'text-right' : ''}`}>
                      {msg.timestamp}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)]">
                  <img src={robotMascot} alt="AI" className="w-7 h-7 object-contain" />
                </div>
                <div className="bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map(n => (
                      <span
                        key={n}
                        className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] opacity-60"
                        style={{ animation: `blink 1.2s ${n * 0.2}s ease-in-out infinite` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={send} className="border-t border-[rgba(0,212,255,0.1)] p-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Yassaha's experience, skills, or projects…"
              className="flex-1 bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.15)] rounded-xl px-4 py-3 text-sm font-body text-white placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-[rgba(0,212,255,0.08)] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="font-display text-sm bg-[#00d4ff] text-[#080d18] font-bold px-5 py-3 rounded-xl hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.1)] py-10 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white text-sm">
            <span className="text-[#00d4ff]">{'>'}</span> yassaha.ali
          </span>
          <span className="font-display text-slate-600 text-xs">— Technical Project Manager</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yali5/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs text-slate-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yassahaali/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs text-slate-500 hover:text-[#00d4ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yassahaali@gmail.com"
            className="font-display text-xs text-slate-500 hover:text-white transition-colors"
          >
            yassahaali@gmail.com
          </a>
        </div>

        <p className="font-display text-xs text-slate-700">
          © {new Date().getFullYear()} Yassaha Ali
        </p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d18] text-white">
      <Nav />
      <Hero />
      <TechMarquee />
      <Skills />
      <Education />
      <Experience />
      <Charity />
      <Chatbot />
      <Footer />
    </div>
  );
}
