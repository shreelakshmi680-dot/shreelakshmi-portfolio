import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  return (
    <p className={className} style={style}>
      {text}
    </p>
  );
}