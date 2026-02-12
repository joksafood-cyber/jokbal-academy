import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for the footer content as it reveals
    if (footerRef.current && contentRef.current) {
        gsap.fromTo(contentRef.current, 
            { y: 100, opacity: 0.5, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom', // When footer comes into view (which happens as main content scrolls up)
                    end: 'bottom bottom',
                    scrub: true
                }
            }
        );
    }
  }, []);

  return (
    <footer ref={footerRef} className="fixed bottom-0 left-0 w-full h-screen z-0 bg-[#0f0d0b] text-white flex flex-col justify-center items-center overflow-hidden">
        <div ref={contentRef} className="relative z-10 text-center px-4 flex flex-col items-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-accent-gold">Contact Us</div>
            <a href="tel:1600-8769" className="font-display font-bold text-[10vw] md:text-[8vw] leading-none hover:text-accent-gold transition-colors duration-500">
                1600-8769
            </a>
            <p className="mt-8 text-gray-400 text-lg font-light">평일 11:00 - 21:00 (주말/공휴일 휴무)</p>
            
            <div className="mt-20 text-[10px] text-gray-700 font-eng">
                © 2025 JOKBAL ACADEMY. ALL RIGHTS RESERVED.
            </div>
        </div>
        
        {/* Footer Background */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=3840&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
                alt="Footer background"
             />
        </div>
    </footer>
  );
};