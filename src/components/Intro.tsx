import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Background Parallax
        if (bgRef.current) {
            gsap.fromTo(bgRef.current,
                { scale: 1.1, yPercent: -5 },
                {
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        }

        // Text Animation
        gsap.fromTo('.intro-text', 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%", // Trigger slightly earlier on mobile
            }
          }
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="brand" ref={containerRef} className="relative py-20 md:py-40 px-4 md:px-8 bg-[#1a1510] overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
                ref={bgRef}
                src="https://postfiles.pstatic.net/MjAyNjAyMTBfMTI1/MDAxNzcwNjUwNDE0NzA2.9wWtLJ2BPfElaQp9DvMxYOPLR8rftkMUaEPZ-NIipYog.ZZD_fmejMhegOm98mmOPlxT6U4_PtntI8ynxjk7DddYg.PNG/intro-bg.png?type=w773"
                onError={(e) => {
                    const target = e.currentTarget;
                    // Fallback to Unsplash if local file is missing
                    target.onerror = null; 
                    target.src = "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2400&auto=format&fit=crop";
                }}
                alt="Brand Background" 
                className="w-full h-full object-cover object-center md:object-bottom opacity-50 md:opacity-60" 
            />
            
            {/* Mobile specific dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/80 via-[#1a1510]/70 to-[#1a1510]/80 md:hidden"></div>
            
            {/* Desktop gradients */}
            <div className="hidden md:block absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1a1510] to-transparent opacity-90"></div>
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1a1510] via-[#1a1510]/60 to-transparent"></div>
            <div className="hidden md:block absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-20 w-full">
            
            <div ref={textRef} className="flex flex-col items-center text-center space-y-8 md:space-y-12">
                {/* Headline */}
                <div className="intro-text w-full">
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#E6C075] tracking-tight leading-snug md:leading-tight drop-shadow-2xl mb-4 md:mb-6 break-keep">
                        족발창업의<br className="md:hidden" /> 정석을 배운다
                    </h2>
                    <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto"></div>
                </div>

                {/* Body Text */}
                <div className="space-y-8 md:space-y-10 text-[#E3E1DC] font-serif leading-relaxed md:leading-loose text-base md:text-[1.15rem] break-keep font-light tracking-wide shadow-black drop-shadow-lg w-full">
                    <p className="intro-text">
                        족발사관학교는<br className="md:hidden"/> 단순한 프랜차이즈가 아닙니다.<br/>
                        이곳은 매일 반복되는 외식업,<br className="md:hidden" />
                        음식점 장사라는 전쟁터에서 살아남기 위해<br className="md:hidden" />
                        최고만을 양성하는 <span className="font-bold text-[#E6C075] whitespace-nowrap">"사관학교"</span>입니다.
                    </p>

                    <p className="intro-text">
                        사령관 또는 장교가 전쟁터에서<br className="md:hidden" />
                        본인만의 무기와 무수한 전략으로 맞서듯<br className="hidden md:block" />
                        외식업, 특히나 족발 장사는<br className="md:hidden" />
                        <span className="font-bold text-[#E6C075]">족발의 맛, 운영의 기술</span>이 중요합니다.
                    </p>

                    <p className="intro-text">
                        많은 노력으로 지켜온 전통의 맛에<br className="md:hidden" />
                        변화하는 트렌드에 맞춰 나아가는 혁신을 더해<br className="hidden md:block" />
                        나에게 맞는 교육과 사관에 걸맞는<br className="md:hidden" />
                        차별화된 전략을 가르쳐드립니다.
                    </p>

                    <div className="intro-text py-4 my-2 border-y border-[#C5A059]/20 md:border-none md:py-0 md:my-0">
                        <p className="text-[#E6C075]/90 font-medium">
                            족발 하나만큼은 정통으로 마스터한<br className="md:hidden"/> 전문가의 손맛,<br className="hidden md:block"/>
                            시간과 정성으로 다진<br className="md:hidden"/> 엄선된 족발의 품격을<br className="hidden md:block"/>
                            제대로 배우고 싶은 분들만을 찾습니다.
                        </p>
                    </div>

                    <p className="intro-text font-bold text-white text-lg md:text-2xl pt-2 md:pt-4">
                        외식업의 첫 단추,<br className="md:hidden"/> 족발에 대한 첫 걸음을<br/>
                        하나부터 열까지 족발사관학교에서<br/>
                        체계적으로 알려드리겠습니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};
