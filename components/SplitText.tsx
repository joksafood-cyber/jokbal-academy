import React, { ReactNode } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  wordClass?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ children, className = '', wordClass = 'word-inner' }) => {
  if (!children) return null;
  
  const words = children.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className="word-wrap">
            <span className={wordClass}>{word}</span>
          </span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};