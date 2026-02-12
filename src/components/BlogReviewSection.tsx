import React from 'react';
import { ArrowUpRight, ScanBarcode, Sparkles } from 'lucide-react';

const mediaNews = [
    {
        type: "COVER STORY",
        source: "MONTHLY DINING",
        date: "MAR 2025",
        title: "장림동의 기적,\n족발사관학교를 만나다",
        desc: "동네 작은 가게에서 시작해 지역 매출 1위를 달성하기까지. 점주가 직접 밝히는 성공의 비밀.",
        author: "EDITOR. K",
        image: "/inter view.png"
    },
    {
        type: "EXCLUSIVE",
        source: "FOOD DAILY",
        title: "맛집 랭킹 1위, 맛의 철학을 묻다",
        desc: "촉촉하고 야들야들한 식감의 정석. 깐깐한 재료 선별부터 당일 조리 원칙까지.",
    },
    {
        type: "TREND",
        source: "STARTUP FOCUS",
        title: "배달과 홀을 동시에, 하이브리드 매장",
        desc: "불경기에도 끄떡없는 매출 구조. 안정적인 수익 창출의 노하우를 공개한다.",
    },
    {
        type: "COLUMN",
        source: "TASTE BUSAN",
        title: "족발, 이제는 하나의 요리다",
        desc: "단순한 야식 메뉴를 넘어 요리로 자리잡은 프리미엄 족발의 시대.",
    },
    {
        type: "REPORT",
        source: "CONSUMER DATA",
        title: "고객이 꼽은 재주문율 1위 메뉴는?",
        desc: "만족도 4.9점. 빅데이터가 증명하는 압도적인 맛의 차이.",
    }
];

export const BlogReviewSection: React.FC = () => {
    const mainStory = mediaNews[0];
    const sideStories = mediaNews.slice(1);

    return (
        <section className="py-24 bg-[#E3E1DC] relative overflow-hidden flex justify-center">
            <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
                
                {/* Magazine Masthead */}
                <div className="border-b-[3px] border-black mb-6 flex flex-col md:flex-row justify-between items-end pb-2">
                    <h2 className="font-eng text-5xl md:text-8xl font-bold tracking-tighter leading-none text-black">
                        THE JOKBAL
                    </h2>
                    <div className="flex items-center gap-6 md:mb-2 mt-4 md:mt-0 font-bold text-xs md:text-sm tracking-widest">
                        <span>VOL. 24</span>
                        <span>ISSUE. MAR</span>
                        <span>2025 EDITION</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[700px]">
                    
                    {/* Left: Cover Image (Main Story) */}
                    <div className="lg:col-span-7 relative group cursor-pointer">
                        <div className="absolute inset-0 border-[3px] border-black z-20 pointer-events-none"></div>
                        
                        <div className="h-full w-full relative overflow-hidden bg-black">
                            <img 
                                src={mainStory.image} 
                                alt="Magazine Cover" 
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#C5A059] text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                        {mainStory.type}
                                    </span>
                                    <span className="font-eng text-sm tracking-widest opacity-80">{mainStory.source}</span>
                                </div>
                                <h3 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
                                    {mainStory.title}
                                </h3>
                                <p className="text-gray-300 text-lg font-serif max-w-lg leading-relaxed border-l-2 border-[#C5A059] pl-4 mb-8">
                                    {mainStory.desc}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C5A059]">
                                    Read Full Story <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute top-8 right-8 z-30 bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-center p-2 shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <Sparkles className="w-5 h-5 text-[#C5A059] mb-1" />
                                <span className="font-bold text-black text-xs leading-tight">SPECIAL<br/>FEATURE</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Headlines (Side Stories) */}
                    <div className="lg:col-span-5 flex flex-col justify-between py-2">
                        
                        <div className="mb-8">
                            <div className="font-eng text-xl font-bold border-b border-black pb-2 mb-8 flex justify-between items-center">
                                <span>HEADLINES</span>
                                <span className="text-xs bg-black text-white px-2 py-0.5">EXCLUSIVE</span>
                            </div>

                            <div className="space-y-8">
                                {sideStories.map((news, idx) => (
                                    <div key={idx} className="group cursor-pointer border-b border-gray-300 pb-8 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest border border-[#C5A059] px-1.5 py-0.5">
                                                {news.type}
                                            </span>
                                            <span className="text-gray-400 text-[10px] font-bold uppercase">{news.source}</span>
                                        </div>
                                        <h4 className="font-display text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#C5A059] transition-colors leading-snug">
                                            {news.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed font-serif line-clamp-2">
                                            {news.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer / Barcode */}
                        <div className="mt-8 pt-8 border-t-[3px] border-black flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none">9,800 KRW</span>
                                <span className="text-[10px] text-gray-500 uppercase mt-1">S.Korea / Japan / USA</span>
                            </div>
                            <div className="flex items-center gap-2 opacity-80">
                                <ScanBarcode className="w-12 h-12" strokeWidth={1} />
                                <div className="flex flex-col text-[8px] font-mono leading-tight tracking-widest">
                                    <span>ISSN 2025-0320</span>
                                    <span>9 772025 032001</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
