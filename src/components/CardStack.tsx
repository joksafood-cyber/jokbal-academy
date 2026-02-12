import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stories = [
  {
    id: '01',
    title: '부산 하단본점',
    engTitle: 'Busan Hadan Main',
    desc: '본점에서 검증된 맛과 운영 시스템을 기반으로\n가맹점의 안정적인 성장을 완성하는 가맹시스템',
    img: 'https://postfiles.pstatic.net/MjAyNjAyMTBfOTAg/MDAxNzcwNzE2Nzk5OTQz.4fZORgmMyJW2qRSDhvDvlL-BcyHlJKJD45XfhcaNCR8g.jqz6zABYL0OL_wLG6DaNliLOGEEtIz0QzGAqAqinrfAg.PNG/%ED%95%98%EB%8B%A8%EB%A7%A4%EC%9E%A5_%EB%A7%91%EC%9D%80%EB%82%A0.png?type=w773',
    fallbackImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    alt: 'Busan Hadan Main Store'
  },
  {
    id: '02',
    title: '부산 장림점',
    engTitle: 'Busan Janglim',
    desc: '오픈 초기부터 지역 맛집 랭킹 1위 달성. 철저한 교육 시스템 덕분에 초보 창업자였음에도 안정적인 운영이 가능했습니다.',
    img: 'https://postfiles.pstatic.net/MjAyNjAyMTBfMTIx/MDAxNzcwNzIxODU2MzQ2.FsFLzvgx6Pf6ryGqTsqucMIFIQK17v7y30hU-L0B4rIg.LSoyCzBJdFQRx6jwcnBABR-iTTd7Mi3uzxNDuHUbgCgg.PNG/%EC%9E%A5%EB%A6%BC%EB%A7%A4%EC%9E%A5.png?type=w773',
    fallbackImg: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop',
    alt: 'Busan Janglim Store Exterior'
  },
  {
    id: '03',
    title: '부산 당감점',
    engTitle: 'Busan Danggam',
    desc: '주거 상권의 강자. 남녀노소 호불호 없는 맛으로 단골 고객 비율이 80% 이상입니다. 가족 외식의 명소로 자리잡았습니다.',
    img: 'https://postfiles.pstatic.net/MjAyNjAyMTBfMTI1/MDAxNzcwNzIxODY2NDU0.jv47AnJON8mCVwL3nBBB99FOaEBJ1xA6n1pwAYGpgG4g.Add0evR9d_M9w3wgM3uYJNQ5_ZuisEvINLXLlQfdHFwg.PNG/%EB%8B%B9%EA%B0%90%EB%A7%A4%EC%9E%A5.png?type=w773',
    fallbackImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Busan Danggam Store'
  },
  {
    id: '04',
    title: '부산 토곡점',
    engTitle: 'Busan Togok',
    desc: '최적의 상권 분석을 통한 입점 전략 성공 사례. 오픈 직후부터 꾸준한 매출 상승곡선을 그리며 지역 대표 맛집으로 자리잡았습니다.',
    img: 'https://postfiles.pstatic.net/MjAyNjAyMTBfOTgg/MDAxNzcwNzIxODYzNjI0.bfwdolnajuPHplpIdfDtPGUH_-aOBMdcEt2da_1po14g.3Cdox-xrv6yFyRLPIVk2DnyaW02w1KiE6AaaeUwaupog.PNG/%EC%97%B0%EC%82%B0%EB%A7%A4%EC%9E%A5.png?type=w773',
    fallbackImg: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Busan Togok Store'
  },
  {
    id: '05',
    title: '부산 명지점',
    engTitle: 'Busan Myeongji',
    desc: '신도시 가족 상권의 중심. 깔끔한 인테리어와 아이들도 좋아하는 맛으로 지역 맘카페 입소문 1위를 기록하며 오픈 3개월 만에 월 매출 1억원을 돌파했습니다.',
    img: 'https://postfiles.pstatic.net/MjAyNjAyMTBfMjU5/MDAxNzcwNzIxODc4Njkx.XCFyAez7BwtnGfRKI_2F5n40kIkPYuANaq3Viw_sLSYg.zVQxDgjIX6jkDQzsXOBOTkJT1Ohj4tCtm-r2h1IoPAwg.PNG/%EB%AA%85%EC%A7%80%EC%A0%90.png?type=w773',
    fallbackImg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    alt: 'Busan Myeongji Store'
  }
];

export const CardStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        const nextCard = cardRefs.current[i + 1];
        if (nextCard && card) {
          gsap.to(card.querySelector('.card-inner'), {
            scale: 0.9,
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top bottom', // When top of next card hits bottom of viewport
              end: 'top 10vh',     // When top of next card hits top of stacking area
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="success" ref={containerRef} className="py-[10vh] bg-dark-brown text-bg-stone relative">
      <div className="text-center mb-20 px-6">
        <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent-gold">Success Stories</div>
        <h2 className="font-display font-bold text-4xl md:text-6xl">가맹점 이야기</h2>
        <p className="mt-4 text-gray-400">현실적인 성공, 족발사관학교와 함께 만듭니다.</p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative pb-[10vh]">
        {stories.map((story, index) => (
          <div 
            key={story.id} 
            ref={el => { cardRefs.current[index] = el }}
            className="sticky top-[10vh] h-[80vh] w-full flex items-center justify-center mb-[5vh]"
          >
            <div className="card-inner w-[90%] h-full bg-card-bg border border-[#C5A059]/20 relative overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.2fr] shadow-2xl">
              
              {/* Content */}
              <div className="p-8 md:p-16 flex flex-col justify-between bg-card-bg z-10 order-2 md:order-1">
                <div>
                  <div className="text-5xl font-eng font-bold mb-2 text-accent-gold opacity-50">{story.id}</div>
                  <h3 className="text-3xl font-bold tracking-tight text-white font-display">{story.title}</h3>
                  <p className="text-sm mt-4 opacity-70 uppercase tracking-widest font-semibold text-accent-gold">{story.engTitle}</p>
                </div>
                <div className="text-gray-400 font-normal leading-relaxed text-lg mt-8 md:mt-0 whitespace-pre-line break-keep">
                  {story.desc}
                </div>
                <div className="mt-8 md:mt-0">
                     <span className="inline-block px-4 py-2 border border-accent-gold/50 text-accent-gold text-xs font-bold uppercase tracking-wider rounded-full">Success Story</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden order-1 md:order-2 h-[40vh] md:h-auto">
                <img 
                    src={story.img} 
                    className="card-img w-full h-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-110" 
                    alt={story.alt}
                    onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = (story as any).fallbackImg;
                        if (fallback && target.src !== fallback) {
                            target.src = fallback;
                            target.onerror = null; 
                        }
                    }} 
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
