import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Parallax
    if (imgRef.current) {
        gsap.to(imgRef.current, {
            yPercent: 30,
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Entrance Animation
    const ctx = gsap.context(() => {
        // Fade in elements
        gsap.to('.hero-fade', { 
            opacity: 1, 
            y: 0,
            stagger: 0.2,
            duration: 1.2, 
            delay: 0.6,
            ease: 'power2.out'
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
            <img 
                ref={imgRef}
                src="/main bg.png"
                onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null; 
                    target.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=3460&auto=format&fit=crop";
                }}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.1] origin-center opacity-80" 
                alt="Main Background" 
            />
        </div>
        
        {/* Dark Overlay for Text Readability - Stronger on Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 md:from-black/30 md:via-black/10 md:to-black/60 z-0 pointer-events-none"></div>

        {/* Mobile Decorative Frame - Adds Premium Feel */}
        <div className="absolute inset-4 border border-[#C5A059]/30 z-10 md:hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C5A059]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C5A059]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C5A059]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C5A059]"></div>
            
            {/* Top Center Label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] px-2 py-0.5">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">Premium Franchise</span>
            </div>
        </div>

        <div className="relative z-10 text-center text-white flex flex-col items-center w-full px-4 justify-center h-full pt-10 gap-6 md:gap-10">
            
            {/* Logo Label */}
            <div className="opacity-0 hero-fade flex flex-col items-center gap-4">
                <img 
                    src="/logo.png" 
                    alt="Jokbal Academy Logo" 
                    className="w-80 md:w-[32rem] h-auto object-contain drop-shadow-lg max-w-full"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </div>

            {/* Headline Replacement Image - Reduced size */}
            <div className="opacity-0 hero-fade w-full flex justify-center py-2 md:py-4">
                <img 
                    src="/main text.png" 
                    alt="족발, 그 이상의 가치" 
                    className="w-[85%] md:w-[50%] max-w-3xl h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Subtitle - More readable on mobile */}
            <p className="opacity-0 hero-fade max-w-2xl text-base md:text-xl font-light leading-relaxed text-[#F3E0B5] drop-shadow-lg px-4 break-keep">
                족발 창업, 하나부터 열까지<br className="block"/>
                <span className="font-medium text-white border-b border-[#C5A059]/50 pb-0.5">전문 족발사관학교</span>에서 알려드립니다
            </p>

            {/* CTA */}
            <div className="opacity-0 hero-fade mt-6 md:mt-4">
                <a 
                    href="tel:1600-8769" 
                    className="relative group inline-flex items-center gap-3 md:gap-5 px-8 md:px-10 py-3.5 md:py-4 bg-[#1a120b]/90 backdrop-blur-sm md:bg-gradient-to-b md:from-[#3E2B22] md:to-[#1a120b] border-[1px] md:border-[2px] border-[#B8860B] rounded-sm md:rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(184,134,11,0.2)] transition-all duration-300"
                >
                    {/* Inner Frame Line */}
                    <div className="absolute inset-1 border border-[#E6C075]/30 rounded-[2px] md:rounded-[4px] pointer-events-none"></div>
                    
                    {/* Content */}
                    <Phone className="w-5 h-5 md:w-8 md:h-8 text-[#E6C075] fill-[#E6C075] drop-shadow-lg" />
                    
                    <div className="flex items-center gap-2 md:gap-3 text-[#E6C075] drop-shadow-md whitespace-nowrap">
                        <span className="font-serif font-bold text-base md:text-2xl tracking-wide pt-1">창업문의</span>
                        <span className="font-serif font-bold text-xl md:text-4xl tracking-widest leading-none">1600-8769</span>
                    </div>
                </a>
            </div>

        </div>
    </section>
  );
};
