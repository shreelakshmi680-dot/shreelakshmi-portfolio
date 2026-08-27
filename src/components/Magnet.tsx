import React, { ReactNode, useRef, useState } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

/**
 * Magnet — makes its child follow the cursor with a magnetic pull
 * whenever the pointer comes within `padding` pixels of the element's
 * bounding box. Strength controls how strongly it follows (higher = weaker pull).
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = Math.abs(e.clientX - centerX);
    const distY = Math.abs(e.clientY - centerY);

    const withinX = distX < rect.width / 2 + padding;
    const withinY = distY < rect.height / 2 + padding;

    if (withinX && withinY) {
      const offsetX = (e.clientX - centerX) / strength;
      const offsetY = (e.clientY - centerY) / strength;
      setIsActive(true);
      setTranslate({ x: offsetX, y: offsetY });
    } else {
      setIsActive(false);
      setTranslate({ x: 0, y: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [padding, strength]);

  return (
    <div ref={wrapperRef} className={className}>
      <div
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
