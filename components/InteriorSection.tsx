import React from 'react';

export const InteriorSection: React.FC = () => {
    return (
        <section className="relative py-24 md:py-40 flex items-center justify-center overflow-hidden">
            {/* Background Image - Standard approach for better mobile support than bg-fixed */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=2600&auto=format&fit=crop" 
                    alt="Interior Background" 
                    className="w-full h-full object-cover object-center"
                />
                {/* Darker overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header Group */}
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-[#C5A059] font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 inline-block border border-[#C5A059]/30 px-3 py-1 rounded-full bg-[#C5A059]/10 backdrop-blur-sm">
                            Interior Concept
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl">
                            족발의 품격을<br className="md:hidden" /> 높이다
                        </h2>
                    </div>

                    {/* Content Box */}
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
                        {/* Decorative Line: Horizontal on Mobile, Vertical (Stretched) on Desktop */}
                        <div className="w-16 h-[2px] md:w-[2px] md:h-auto bg-[#C5A059] shrink-0 opacity-80"></div>
                        
                        <div className="text-gray-200 text-base md:text-xl font-light leading-relaxed text-center md:text-left break-keep drop-shadow-md space-y-4 flex flex-col justify-center">
                            <p>
                                족발집의 편견을 깬 <span className="text-white font-medium">고급스러운 인테리어</span>로<br className="md:hidden" /> 외식의 품격을 한 단계 높였습니다.
                            </p>
                            <p>
                                <span className="text-[#C5A059]">골드(금색)</span>와 딥그린 컬러를 중심으로<br className="md:hidden" /> 따뜻하면서도 품격 있는 공간을 완성했습니다.
                            </p>
                            <p>
                                다시 찾고 싶은 기억을 남기는 곳,<br className="md:hidden" /> 그것이 <span className="text-white font-medium">족발사관학교</span>의 인테리어 철학입니다.
                            </p>
                            <p>
                                회식부터 가족 외식까지,<br className="md:hidden" /> <span className="text-[#C5A059]">고객의 경험</span>을 디자인합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};