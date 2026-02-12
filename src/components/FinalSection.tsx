import React from 'react';

export const FinalSection: React.FC = () => {
  return (
    <section className="py-40 bg-bg-stone text-center flex flex-col items-center justify-center relative z-10 border-t border-gray-200">
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 tracking-tight text-gray-900 leading-tight">
        족발사관학교에서 배우면<br/>반드시 성공합니다
      </h2>
      <div className="max-w-xl text-gray-600 font-medium mb-12 leading-relaxed text-lg px-4">
        창업은 더 이상 두려움이 아닙니다.<br className="hidden md:block" />
        당신의 성공 스토리를 지금 시작하세요.
      </div>
      <a href="tel:1600-8769" className="inline-block px-10 py-4 bg-dark-base text-white font-bold text-lg rounded-sm hover:bg-accent-gold transition-colors duration-300">
        상담 신청하기
      </a>
      <div className="h-20 w-px bg-accent-gold mt-12"></div>
    </section>
  );
};
