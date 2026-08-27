import React from 'react';
import profilePhoto from '../assets/profile.jpg';
import FadeIn from '../components/FadeIn';

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0A0C] text-[#D7E2EA] px-6 md:px-16 pt-6 pb-8"
      style={{ overflowX: 'clip' }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[550px] h-[550px] bg-[#7621B0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[650px] h-[650px] bg-[#B600A8]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between relative z-30 max-w-7xl mx-auto w-full gap-4 flex-wrap">
          <div className="flex items-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs md:text-sm uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Shree_Lakshmi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shree_Lakshmi_Resume.pdf"
              className="rounded-full text-white font-medium uppercase tracking-widest px-4 py-2 text-xs border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
            >
              <span>Resume</span>
              <span className="text-[10px] font-mono text-[#B600A8] font-bold">PDF</span>
            </a>

            <a
              href="mailto:shreelakshmi680@gmail.com"
              className="rounded-full text-white font-medium uppercase tracking-widest px-5 py-2 text-xs transition-transform duration-200 hover:scale-[1.04]"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow:
                  '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid rgba(255,255,255,0.8)',
                outlineOffset: '-3px',
              }}
            >
              Email Me
            </a>

            <a
              href="https://github.com/shreelakshmi680-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block rounded-full text-white font-medium uppercase tracking-widest px-5 py-2 text-xs border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-200 backdrop-blur-md"
            >
              GitHub
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Body */}
      <div className="relative my-auto z-10 w-full max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Stacked Name + Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#B600A8] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#D7E2EA]/85">
                  Software Engineer // AI & Cloud
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} y={25}>
              <div className="flex flex-col select-none leading-[0.88] tracking-tight font-black uppercase mb-6">
                <span
                  style={{
                    fontSize: 'clamp(3rem, 9.5vw, 125px)',
                    background:
                      'linear-gradient(180deg, #FFFFFF 20%, #94A3B8 65%, #334155 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  }}
                >
                  SHREE
                </span>
                <span
                  className="mt-2"
                  style={{
                    fontSize: 'clamp(3rem, 9.5vw, 125px)',
                    background:
                      'linear-gradient(180deg, #FFFFFF 20%, #94A3B8 65%, #334155 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  }}
                >
                  LAKSHMI
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} y={20}>
              <p className="text-sm sm:text-base text-[#D7E2EA]/75 max-w-lg leading-relaxed mb-8">
                Building resilient backend architectures, AI/NLP screening engines, and scalable cloud systems. Focused on verifiable metrics and production performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <a
                href="#projects"
                className="rounded-full text-white font-medium uppercase tracking-widest px-7 py-3.5 text-xs sm:text-sm border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-block text-center backdrop-blur-md"
              >
                View Projects ↓
              </a>
            </FadeIn>
          </div>

          {/* Right Column: Crisp, Clear Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pr-0 lg:pr-4">
            <FadeIn delay={0.2} y={30}>
              <div className="relative group flex items-center justify-center">
                
                {/* Thin 1px Cyber Border Frame */}
                <div className="relative rounded-[28px] p-[1px] bg-gradient-to-b from-white/30 via-[#B600A8]/40 to-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                  
                  {/* Clean Photo Container - No overlay fades */}
                  <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-[370px] rounded-[27px] overflow-hidden bg-[#0A0A0C]">
                    <img
                      src={profilePhoto}
                      alt="Shree Lakshmi"
                      className="w-full h-full object-cover object-top block"
                    />
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Hero Bottom Strip */}
      <FadeIn delay={0.35} y={15}>
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 uppercase tracking-widest max-w-7xl mx-auto w-full pt-4 border-t border-white/5 z-20 gap-2">
          <span>Software Engineer // AI & Cloud</span>
          <span>Open for Opportunities</span>
        </div>
      </FadeIn>
    </section>
  );
}