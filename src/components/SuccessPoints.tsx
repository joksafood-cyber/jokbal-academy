import React from 'react';
import { Check, Diamond } from 'lucide-react';

export const SuccessPoints: React.FC = () => {
    const points = [
        {
            title: "소규모 매장 가능",
            desc: "20평대 소형 매장에서도\n일 매출 200만원 달성 신화",
            img: "/store-2.png"
        },
        {
            title: "실전 중심 교육",
            desc: "이론이 아닌 칼질부터\n불조절까지 1:1 밀착 교육",
            img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "빠르고 쉬운 레시피",
            desc: "원팩 시스템과 표준화된\n레시피로 초보자도 OK",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "현실적인 운영 노하우",
            desc: "배달 앱 세팅부터\n리뷰 관리까지 완벽 케어",
            img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop"
        },
        {
            title: "혼자 하지 않는 창업",
            desc: "슈퍼바이저의 정기 방문으로\n매출 하락 방어 시스템",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#1a1510] relative overflow-hidden">
             {/* Dark Background with Luxurious Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#15110d] via-[#1a1510] to-[#15110d] z-0"></div>
             
             {/* Golden Glow Effects */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mb-5 border border-[#C5A059]/30 px-5 py-1.5 rounded-full bg-[#C5A059]/5 backdrop-blur-md">
                        <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                        <span className="text-[#C5A059] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">Core Value</span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
                        유행이 아닌<br className="md:hidden" /> 
                        <span className="text-[#C5A059] relative inline-block mx-2">
                            본질
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C5A059] opacity-70"></span>
                        </span>
                        로 승부합니다
                    </h2>
                    <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mx-auto break-keep leading-relaxed opacity-80">
                        족발사관학교는 화려한 마케팅보다 중요한<br className="md:hidden" /> '맛'과 '운영'의 기본을 지킵니다.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {points.map((point, idx) => (
                        <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-[#221c16] rounded-xl overflow-hidden border border-[#C5A059]/30 transition-all duration-500 hover:border-[#C5A059] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(197,160,89,0.2)] h-72 md:h-80 flex flex-col justify-end">
                            
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={point.img} 
                                    alt={point.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 md:opacity-60 group-hover:opacity-40"
                                />
                                {/* Dark Gradient Overlay for Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 md:to-transparent"></div>
                            </div>

                            {/* Mobile Numbering - Adds Structure */}
                            <div className="absolute top-4 left-4 md:hidden">
                                <span className="font-display text-4xl font-bold text-[#C5A059]/20 italic">0{idx + 1}</span>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6 md:p-8 text-left md:text-center flex flex-col items-start md:items-center">
                                {/* Icon */}
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#C5A059] flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-[#1a1510]" strokeWidth={3} />
                                </div>

                                {/* Text */}
                                <h3 className="text-white font-bold text-xl md:text-2xl mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">{point.title}</h3>
                                
                                {/* Mobile Divider */}
                                <div className="w-10 h-[2px] bg-[#C5A059] mb-3 md:hidden"></div>

                                <p className="text-gray-300 text-sm font-light whitespace-pre-line leading-relaxed opacity-90">{point.desc}</p>
                            </div>
                            
                            {/* Decorative Corner Lines */}
                            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C5A059]/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C5A059]/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
