import React from 'react';
import FadeIn from '../components/FadeIn';

interface Competency {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

const COMPETENCIES: Competency[] = [
  {
    number: '01',
    title: 'AI Engineering & Machine Learning Systems',
    description:
      'Designing intelligent end-to-end NLP and ML pipelines, text parsing architectures, and automated screening models with production guardrails.',
    skills: ['Python', 'Scikit-learn', 'TF-IDF / NLTK', 'Flask', 'Pandas & NumPy'],
  },
  {
    number: '02',
    title: 'Fintech, Secure APIs & Webhooks',
    description:
      'Building robust financial transaction engines, webhook signature verification pipelines (HMAC-SHA256), and immutable audit databases.',
    skills: ['HMAC-SHA256', 'Razorpay API', 'SQLite / PostgreSQL', 'Streamlit', 'Pytest'],
  },
  {
    number: '03',
    title: 'Cloud Infrastructure & Database Architecture',
    description:
      'Architecting relational schema constraints, automated stored procedures, triggers, and containerized backend services for modern cloud deployment.',
    skills: ['SQL & Relational DBs', 'Cloud Architectures', 'Docker', 'Git / GitHub CI/CD', 'RESTful APIs'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#0A0A0C] text-[#D7E2EA] px-6 md:px-12 py-24 sm:py-32 z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <FadeIn delay={0} y={30}>
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8]">
              Technical Arsenal
            </span>
            <h2
              className="font-black uppercase tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 96px)',
                background: 'linear-gradient(180deg, #FFFFFF 20%, #94A3B8 65%, #334155 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 10px 30px rgba(0,0,0,0.8)',
              }}
            >
              Services & Skills
            </h2>
          </div>
        </FadeIn>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPETENCIES.map((item, i) => (
            <FadeIn key={item.number} delay={0.1 * i} y={30}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-[32px] bg-[#101218] border border-white/10 hover:border-[#B600A8]/50 transition-all duration-300 shadow-xl group">
                <div className="flex flex-col gap-4">
                  <span className="text-3xl font-black text-[#B600A8]/80 font-mono">
                    {item.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#D7E2EA] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-[#D7E2EA]/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}