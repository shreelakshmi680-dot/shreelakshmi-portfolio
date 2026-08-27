import React, { useEffect, useRef, useState } from 'react';

const TECH_ROW_1 = [
  'Python',
  'PostgreSQL',
  'Flask',
  'Streamlit',
  'REST APIs',
  'NLP & TF-IDF',
  'Scikit-learn',
  'Cosine Similarity',
];

const TECH_ROW_2 = [
  'SQLite',
  'HMAC-SHA256',
  'Razorpay API',
  'PyTest & Unit Testing',
  'Data Structures & Algorithms',
  'Git & GitHub',
  'NLTK',
  'Power BI & Pandas',
];

const ROW_1_TRIPLED = [...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1];
const ROW_2_TRIPLED = [...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2];

function SkillBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-5 rounded-2xl bg-[#141414] border border-white/10 text-[#D7E2EA] font-semibold text-lg sm:text-xl md:text-2xl uppercase tracking-wider flex-shrink-0 select-none shadow-md">
      <span className="text-[#B600A8] mr-3">◆</span>
      {label}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] py-16 sm:py-24 md:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="flex flex-col gap-5 sm:gap-6">
        <div
          className="flex gap-4 sm:gap-6"
          style={{
            transform: `translateX(${offset - 300}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_1_TRIPLED.map((skill, i) => (
            <SkillBadge key={`row1-${i}`} label={skill} />
          ))}
        </div>

        <div
          className="flex gap-4 sm:gap-6"
          style={{
            transform: `translateX(${-(offset - 300)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_2_TRIPLED.map((skill, i) => (
            <SkillBadge key={`row2-${i}`} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}