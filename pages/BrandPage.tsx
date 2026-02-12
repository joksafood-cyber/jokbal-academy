import React, { useEffect } from 'react';
import { Intro } from '../components/Intro';
import { InteriorSection } from '../components/InteriorSection';
import { SuccessPoints } from '../components/SuccessPoints';

export const BrandPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-bg-stone min-h-screen">
       {/* Brand Header */}
       <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=3840&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              alt="Brand Header" 
           />
           <div className="relative z-10 text-center text-white px-4">
               <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">BRAND STORY</h1>
               <p className="text-xl md:text-2xl font-light text-[#C5A059]">족발의 기준을 새로 쓰다</p>
           </div>
       </div>

       {/* Reuse Intro for detailed story */}
       <div className="py-10">
           <Intro />
       </div>

       {/* Additional Brand Content */}
       <div className="bg-[#1a1510] py-32 text-center text-white px-6">
           <div className="max-w-4xl mx-auto">
               <span className="text-[#C5A059] font-bold text-sm tracking-[0.3em] uppercase mb-6 block">Our Philosophy</span>
               <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">타협하지 않는 원칙</h2>
               <div className="grid md:grid-cols-3 gap-12">
                   <div className="flex flex-col items-center">
                       <div className="w-20 h-20 border border-[#C5A059] rounded-full flex items-center justify-center text-2xl font-bold text-[#C5A059] mb-6">01</div>
                       <h3 className="text-xl font-bold mb-4">당일 조리</h3>
                       <p className="text-gray-400 font-light leading-relaxed">최상의 맛과 신선함을 위해<br/>하루 두 번, 직접 삶아냅니다.</p>
                   </div>
                   <div className="flex flex-col items-center">
                       <div className="w-20 h-20 border border-[#C5A059] rounded-full flex items-center justify-center text-2xl font-bold text-[#C5A059] mb-6">02</div>
                       <h3 className="text-xl font-bold mb-4">국내산 생족</h3>
                       <p className="text-gray-400 font-light leading-relaxed">엄격한 기준으로 선별된<br/>100% 프리미엄 국내산 생족만 사용합니다.</p>
                   </div>
                   <div className="flex flex-col items-center">
                       <div className="w-20 h-20 border border-[#C5A059] rounded-full flex items-center justify-center text-2xl font-bold text-[#C5A059] mb-6">03</div>
                       <h3 className="text-xl font-bold mb-4">씨육수</h3>
                       <p className="text-gray-400 font-light leading-relaxed">30년 전통의 비법이 담긴 씨육수로<br/>깊고 진한 풍미를 완성합니다.</p>
                   </div>
               </div>
           </div>
       </div>

       <InteriorSection />
       <SuccessPoints />
    </div>
  );
};