import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
            containerRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    tl.to(barRef.current, { 
      width: '100%', 
      duration: 1.2, 
      ease: 'power2.inOut' 
    })
    .to(textRef.current, { 
      y: -30, 
      opacity: 0, 
      duration: 0.5 
    })
    .to(containerRef.current, { 
      yPercent: -100, 
      duration: 0.8, 
      ease: 'power4.inOut' 
    });

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 bg-black z-[10000] flex justify-center items-center text-white">
      <div ref={textRef} className="font-display text-[5vw] font-extrabold tracking-tighter text-accent-gold">
        족발사관학교
      </div>
      <div ref={barRef} className="absolute bottom-0 left-0 h-1 bg-accent-gold w-0"></div>
    </div>
  );
};