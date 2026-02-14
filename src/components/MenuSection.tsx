import React from 'react';
import { ChefHat, TrendingUp, Wallet, Truck } from 'lucide-react';

const menuItems = [
    { 
      name: '정통 족발', 
      eng: 'Original Jokbal',
      desc: '30년 씨육수의 깊은 풍미가 스며든 족발사관학교의 대표 메뉴입니다.', 
      img: '/menu-7.png' 
    },
    { 
      name: '반반 족발', 
      eng: 'Half & Half',
      desc: '담백한 오리지널과 매콤한 불족발을 한번에 즐기는 실속 메뉴입니다.', 
      img: '/menu-5.png' 
    },
    { 
      name: '직화 불족발', 
      eng: 'Spicy Fire Jokbal',
      desc: '중독성 있는 매운맛과 은은한 불향의 조화가 일품인 메뉴입니다.', 
      img: '/menu-8.png' 
    },
    { 
      name: '냉채 족발', 
      eng: 'Bossam Set',
      desc: '잡내 없이 부드럽게 삶아낸 수육과 매일 담그는 김치의 만남입니다.', 
      img: '/menu-9.png' 
    },
];

const strategies = [
    { title: "메뉴 단순화", desc: "조리 안정성 확보", icon: ChefHat },
    { title: "회전율 증가", desc: "빠른 조리 시스템", icon: TrendingUp },
    { title: "객단가 상승", desc: "세트 구성 최적화", icon: Wallet },
    { title: "3WAY 최적화", desc: "홀·포장·배달", icon: Truck },
];

export const MenuSection: React.FC = () => {
    return (
        <section id="menu" className="py-20 md:py-32 bg-[#1a1510] relative overflow-hidden">
             {/* Background Texture Effect */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
                  }}>
             </div>
            
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
                        <div className="h-px w-8 bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-bold text-xs md:text-sm tracking-[0.3em] uppercase">Premium Menu Strategy</span>
                        <div className="h-px w-8 bg-[#C5A059]"></div>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-white leading-tight">
                        불필요한 메뉴는 없습니다<br/>
                        <span className="text-[#C5A059]">잘 팔리는 족발</span>만 남겼습니다
                    </h2>

                    {/* Strategy Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto border-t border-b border-[#C5A059]/20 py-8 md:py-10 bg-[#C5A059]/5 backdrop-blur-sm">
                        {strategies.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className={`flex flex-col items-center p-2 md:p-4 text-center ${idx % 2 !== 0 ? '' : 'border-r md:border-r-0'} md:border-r border-[#C5A059]/20 last:border-r-0`}>
                                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059] mb-3" strokeWidth={1.5} />
                                    <h3 className="text-white font-bold text-base md:text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light break-keep">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Menu Grid - 2 cols on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className="group relative bg-[#221c16] border border-[#C5A059]/30 transition-all duration-500 hover:border-[#C5A059] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(197,160,89,0.1)] overflow-hidden">
                            {/* Inner Border for 'Frame' effect */}
                            <div className="absolute inset-1 border border-[#C5A059]/10 pointer-events-none z-20"></div>

                            {/* Image Container */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                />
                                {/* Stronger gradient on mobile for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510] via-black/20 to-transparent opacity-80 md:opacity-90"></div>
                                
                                {/* Text Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-10 text-center flex flex-col justify-end h-full">
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1 font-display tracking-tight drop-shadow-lg leading-tight break-keep">{item.name}</h3>
                                    <p className="text-[#C5A059] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3 drop-shadow-md">{item.eng}</p>
                                    
                                    <div className="w-8 h-px bg-[#C5A059] mx-auto mb-2 md:mb-3 opacity-50 md:opacity-100"></div>
                                    
                                    {/* Description: Hidden on mobile to keep the grid clean, visible on desktop hover */}
                                    <p className="hidden md:block text-gray-300 text-sm font-light break-keep leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
