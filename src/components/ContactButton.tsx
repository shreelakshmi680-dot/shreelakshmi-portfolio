import React, { useState } from 'react';

interface ContactButtonProps {
  label?: string;
  className?: string;
}

export default function ContactButton({
  label = 'Email Me',
  className = '',
}: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'shreelakshmi680@gmail.com';
  const subject = encodeURIComponent('Opportunity / Collaboration Inquiry');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const providers = [
    {
      name: 'Open in Gmail',
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
      bg: 'bg-red-500/20 hover:bg-red-500/30 text-red-300 border-red-500/40',
    },
    {
      name: 'Open in Outlook',
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}`,
      bg: 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/40',
    },
    {
      name: 'Default Mail Client (mailto)',
      url: `mailto:${email}?subject=${subject}`,
      bg: 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10',
    },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`rounded-full text-white font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer ${className}`}
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <span>{label}</span>
        <span className="text-xs">↗</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/15 bg-[#0D0E12] p-6 shadow-2xl flex flex-col gap-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-[#D7E2EA]">Get in Touch</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white text-xl leading-none px-2"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs sm:text-sm font-mono text-[#D7E2EA]/90 truncate">
                {email}
              </span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#B600A8] hover:bg-[#8e0283] text-white transition-colors"
              >
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {providers.map((p, idx) => (
                <a
                  key={idx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`w-full py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${p.bg}`}
                >
                  <span>{p.name}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}