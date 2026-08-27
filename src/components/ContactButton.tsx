import React, { useState } from 'react';

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied'>('idle');
  const email = 'shreelakshmi680@gmail.com';

  const handleEmailAction = () => {
    // 1. Copy email to clipboard
    navigator.clipboard.writeText(email);
    setStatus('copied');
    setTimeout(() => setStatus('idle'), 3000);

    // 2. Open Gmail composer in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Active Email Button */}
        <button
          type="button"
          onClick={handleEmailAction}
          className="rounded-full text-white font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            background:
              'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow:
              '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          {status === 'copied' ? 'Opening & Copied!' : 'Email Me'}
        </button>

        {/* GitHub Profile Button */}
        <a
          href="https://github.com/shreelakshmi680-dot"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full text-white font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.03] text-center inline-block"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1.5px solid rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(8px)',
          }}
        >
          GitHub Profile
        </a>
      </div>

      {/* Direct visual confirmation text */}
      <span className="text-xs text-[#D7E2EA]/70 tracking-wide select-all">
        {status === 'copied' ? (
          <span className="text-green-400 font-semibold">
            ✓ Copied {email} to clipboard!
          </span>
        ) : (
          <span>{email}</span>
        )}
      </span>
    </div>
  );
}