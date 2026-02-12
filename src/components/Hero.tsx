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
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center text-white flex flex-col items-center w-full px-4 justify-center h-full pt-20 gap-8 md:gap-10">
            
            {/* Logo Label */}
            <div className="opacity-0 hero-fade flex flex-col items-center gap-4">
                <img 
                    src="https://postfiles.pstatic.net/MjAyNjAyMTBfMTgz/MDAxNzcwNjkxNjE2Mzk5.lhMPm4g9UV60zLADO_YAyO6gN2QaYgjSrwq7QA_VZDEg.wD_AdbEYhwqrLurOJ-f6dZamXWMzAoWEbcZ5k4WtHHYg.PNG/logo.png?type=w773" 
                    alt="Jokbal Academy Logo" 
                    className="w-96 md:w-[32rem] h-auto object-contain drop-shadow-lg max-w-full"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </div>

            {/* Headline Replacement Image - Reduced size */}
            <div className="opacity-0 hero-fade w-full flex justify-center py-2 md:py-4">
                <img 
                    src="https://postfiles.pstatic.net/MjAyNjAyMTBfMjE4/MDAxNzcwNzMzMzkxMjA0.kFORcKBloah7ozSk9x8VeaGir1ieT-7UYM-nrTTIR3kg.eEnfDQhB6qe0MXlNS6YmOglgzZ9iA8TFFEJnWFZLvzEg.PNG/1.png?type=w773" 
                    alt="족발, 그 이상의 가치" 
                    className="w-[70%] md:w-[50%] max-w-3xl h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* Subtitle */}
            <p className="opacity-0 hero-fade max-w-2xl text-lg md:text-xl font-light leading-relaxed text-[#F3E0B5] drop-shadow-lg">
                족발 창업, 하나부터 열까지<br className="hidden md:block"/>
                전문 족발사관학교에서 알려드립니다
            </p>

            {/* CTA */}
            <div className="opacity-0 hero-fade mt-4">
                <a 
                    href="tel:1600-8769" 
                    className="relative group inline-flex items-center gap-3 md:gap-5 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-b from-[#3E2B22] to-[#1a120b] border-[2px] border-[#B8860B] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(184,134,11,0.2)] transition-all duration-300"
                >
                    {/* Inner Frame Line */}
                    <div className="absolute inset-1 border border-[#E6C075]/30 rounded-[4px] pointer-events-none"></div>
                    
                    {/* Corner Ornaments */}
                    <div className="absolute top-[3px] left-[3px] w-3 h-3 border-t-2 border-l-2 border-[#E6C075] rounded-tl-[2px]"></div>
                    <div className="absolute top-[3px] right-[3px] w-3 h-3 border-t-2 border-r-2 border-[#E6C075] rounded-tr-[2px]"></div>
                    <div className="absolute bottom-[3px] left-[3px] w-3 h-3 border-b-2 border-l-2 border-[#E6C075] rounded-bl-[2px]"></div>
                    <div className="absolute bottom-[3px] right-[3px] w-3 h-3 border-b-2 border-r-2 border-[#E6C075] rounded-br-[2px]"></div>

                    {/* Content */}
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#E6C075] fill-[#E6C075] drop-shadow-lg" />
                    
                    <div className="flex items-center gap-2 md:gap-3 text-[#E6C075] drop-shadow-md whitespace-nowrap">
                        <span className="font-serif font-bold text-lg md:text-2xl tracking-wide pt-1">창업문의</span>
                        <span className="font-serif font-bold text-2xl md:text-4xl tracking-widest leading-none">1600-8769</span>
                    </div>
                </a>
            </div>

        </div>
    </section>
  );
};
