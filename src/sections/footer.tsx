import React from 'react';
import FadeIn from '../components/FadeIn';

export default function Footer() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'shreelakshmi680@gmail.com';
    const subject = encodeURIComponent("Let's Connect / Engineering Opportunities");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="relative bg-[#060709] text-[#D7E2EA] px-6 md:px-12 pt-20 pb-12 z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <FadeIn delay={0} y={20}>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8]">
              Get In Touch
            </span>
            <h2
              className="font-black uppercase tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 80px)',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 10px 30px rgba(0,0,0,0.8)',
              }}
            >
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/75 max-w-lg mt-2">
              Open to Backend Engineering, Machine Learning, and SDET / QA opportunities.
            </p>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-row items-center justify-center gap-4">
            <a
              href="mailto:shreelakshmi680@gmail.com"
              onClick={handleEmailClick}
              className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-xs sm:text-sm transition-transform duration-200 hover:scale-[1.04] cursor-pointer"
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
              className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-xs sm:text-sm border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              GitHub Profile
            </a>
          </div>
        </FadeIn>

        <a
          href="mailto:shreelakshmi680@gmail.com"
          onClick={handleEmailClick}
          className="text-xs font-mono text-[#D7E2EA]/50 hover:text-white transition-colors cursor-pointer"
        >
          shreelakshmi680@gmail.com
        </a>

        {/* Bottom Metadata Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#D7E2EA]/40 uppercase tracking-widest pt-8 border-t border-white/5 gap-3">
          <span>Bengaluru, Karnataka</span>
          <span>©️ 2026 Shree Lakshmi. All rights reserved.</span>
          <a
            href="https://github.com/shreelakshmi680-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors lowercase"
          >
            github.com/shreelakshmi680-dot
          </a>
        </div>
      </div>
    </footer>
  );
}