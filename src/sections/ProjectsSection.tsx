import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

// Direct Image Imports
import smarthire1 from '../assets/smarthire-1.png';
import smarthire2 from '../assets/smarthire-2.png';
import smarthire3 from '../assets/smarthire-3.png';
import razor1 from '../assets/razor-1.png';
import razor2 from '../assets/razor-2.png';
import razor3 from '../assets/razor-3.png';

interface Project {
  number: string;
  category: string;
  name: string;
  projectUrl: string;
  demoUrl?: string;
  metrics: string[];
  techStack: string[];
  images: [
    { src: string; caption: string },
    { src: string; caption: string },
    { src: string; caption: string }
  ];
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'NLP & ML / Python & Flask',
    name: 'SmartHire – AI Resume Screening System',
    projectUrl: 'https://github.com/shreelakshmi680-dot',
    metrics: [
      '85%+ matching accuracy using TF-IDF & cosine similarity scoring',
      '70% reduction in manual screening time (~2s per resume processing)',
      '98%+ parsing success rate across varied PDF/DOCX formats',
    ],
    techStack: ['Python', 'Flask', 'Scikit-learn', 'NLTK', 'PostgreSQL / SQLite'],
    images: [
      { src: smarthire1, caption: 'Volume Prediction Model' },
      { src: smarthire2, caption: 'NLP Resume Match Engine' },
      { src: smarthire3, caption: 'Analytics & Leaderboard' },
    ],
  },
  {
    number: '02',
    category: 'Fintech / Security & Recovery',
    name: 'RazorRecover AI – Autonomous Recovery Engine',
    projectUrl: 'https://github.com/shreelakshmi680-dot/razor-recover-ai',
    demoUrl: 'https://youtu.be/5_5FGsbxttk',
    metrics: [
      'HMAC-SHA256 signature verification preventing webhook spoofing/replay attacks',
      '10%/₹500 margin guardrails with immutable SQLite audit logging',
      '13 adversarial pytest test cases validating edge-case resilience',
    ],
    techStack: ['Python', 'Streamlit', 'SQLite', 'Razorpay API', 'HMAC-SHA256', 'SMTP'],
    images: [
      { src: razor1, caption: 'Recovery Analytics & Yield' },
      { src: razor2, caption: 'HMAC Webhook Ingestion' },
      { src: razor3, caption: 'Immutable Audit Ledger' },
    ],
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const cardScale = useTransform(progress, range, [1, targetScale]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] md:min-h-[90vh] sticky flex items-center justify-center"
      style={{
        top: `calc(12vh + ${index * 32}px)`,
        marginBottom: `${(TOTAL_CARDS - index) * 20}px`,
      }}
    >
      <motion.div
        style={{
          scale: cardScale,
          y: cardTranslateY,
        }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.6 }}
        className="w-full rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-white/15 bg-[#0D0E12] p-5 sm:p-7 md:p-9 flex flex-col gap-6 justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl will-change-transform"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 84px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#B600A8] uppercase tracking-widest text-xs sm:text-sm font-semibold">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-semibold uppercase tracking-wide"
                style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.7rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-white font-medium uppercase tracking-widest px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm border border-[#B600A8]/50 bg-[#B600A8]/20 hover:bg-[#B600A8]/30 hover:border-[#B600A8] transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(182,0,168,0.3)]"
              >
                <span>Watch Demo</span>
                <span className="text-xs">↗</span>
              </a>
            )}

            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full text-white font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-transform duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow:
                  '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid rgba(255,255,255,0.8)',
                outlineOffset: '-3px',
              }}
            >
              <span>GitHub Repo</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Deliverables & Stack Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#14151B] p-4 sm:p-5 rounded-2xl border border-white/5">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
              Key Deliverables
            </span>
            <ul className="text-xs sm:text-sm text-[#D7E2EA]/85 space-y-1.5">
              {project.metrics.map((metric, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#BE4C00] mt-0.5 font-bold">▪</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
              Core Stack
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-[#D7E2EA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Framing Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.images.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#161820] overflow-hidden shadow-lg group hover:border-[#B600A8]/50 transition-all duration-300"
            >
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#0E1015] border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/50">
                  {item.caption}
                </span>
              </div>

              {/* Responsive Image Display */}
              <div className="p-2 sm:p-3 bg-[#0A0B0E] flex items-center justify-center h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#08080A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col pb-16 relative">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (TOTAL_CARDS - 1 - i) * 0.05;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.45, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}