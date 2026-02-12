import React from 'react';
import { Star, User, Quote } from 'lucide-react';

const reviews = [
  {
    author: "바비",
    stats: "리뷰 50 · 평균별점 4.6",
    rating: 5,
    date: "일주일전",
    text: "낮술먹기 좋은날~~\n항상 족발사관학교에서 족발을 먹어유 ㅎㅎ\n요청사항도 잘 들어주시고 맛은 말하기 입아파유\n너무너무 맛있어요 ㅎㅎ 번창하세용 ㅎㅎ",
    menu: "[매콤매콤]매운족발",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfNSAg/MDAxNzcwNzIzNjk3NDkw.-aJp9b_ZycsRuKLVthvJT6aieEGRvAIT8-AVlIaSDrog.A4wXLmQl5XSIsxL2SyEZ6dZs0c0a7Wi4CF4cXdeH84Mg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_39_46.png?type=w773"
  },
  {
    author: "limh",
    stats: "리뷰 1 · 평균별점 5.0",
    rating: 5,
    date: "지난 달",
    text: "이세상족발맛이아닙니다 세상에서가장맛있고 가장쫄깃탱탱한 막국수가 가장감칠맛있는 족발을파는곳이라 자부합니다 개쌉맛있습니다 이족발안드셔보셨으면 말을마세요 ㄹㅇ때깔부터 다른족발집들 싹버릅니다 이족발집없어지면 저웁니다",
    menu: "[쫄깃쫄깃]구운족발",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfNiAg/MDAxNzcwNzIzNjk3NDgx.SZXc98VjpsR8XleQJrAzAvI6zwAAP9cwMrSRlCDr_Msg.y9zmmfeBT0WCReM71ODJ4jaAiXys2gjdX-BmtUtnDnAg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_40_47.png?type=w773"
  },
  {
    author: "싱싱어엉",
    stats: "리뷰 16 · 평균별점 4.7",
    rating: 5,
    date: "지난 주",
    text: "매일 지나다니면서 언제 먹지 생각만하다가\n오늘 드디어 시켜먹었어요! 진짜 맛있네요\n양도 엄청 많고 앞으로 자주 시켜먹을게요",
    menu: "족발, 보쌈 SET",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfMTI1/MDAxNzcwNzIzNzIyNzM3.WXRGejTtyD0NkHnybQzRB_O7hGcx0iGpcLBuYGB-0s4g.MbxpCWvez3JVte4xgwmMemKGf4owkOa8DXldlU-fliIg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_41_57.png?type=w773"
  },
  {
    author: "효래83",
    stats: "리뷰 4 · 평균별점 5.0",
    rating: 5,
    date: "이번 주",
    text: "이 집은 매번 주문할때마다 만족도가 최상입니다.\n이 가격에 양에 맛에 전부 별 5개이상입니다\n특히 어머니께서 막국수가 당감동 어디밀면집들보다 맛있다고 여름에 단독으로 팔기만하면 계속 사먹고싶다고 하실만큼 맛이 좋네요 최곱니다!",
    menu: "[쫄깃쫄깃]정통족발",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfMTE4/MDAxNzcwNzI0NDIzNjk1.cxP5kw-ygOP8-OoyzDuc9K7cSW2QWBfOg-9LFZkYzlwg.8I6jTqayzjrUrou327MSFTiOO9Wpn2B5BfL2bopNHrYg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_53_27.png?type=w773"
  },
  {
    author: "이건안이지예",
    stats: "리뷰 55 · 평균별점 5.0",
    rating: 5,
    date: "지난 주",
    text: "양도 많고 진짜 너무 맛있어요...! 매운족발 많이 매울까봐 걱정했는데 정말 딱 버틸 수 있을 만큼만 매워서 너무 좋았어요!\n밑반찬도 넉넉하게 주셔서 야식으로 너무 맛있게 먹었습니다 감사합니다~",
    menu: "반반족발",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfMjYw/MDAxNzcwNzI0NzUxMjEz.OWJmQuOu8ZiBR_vXeMZpizOs1p6t9db_IwOJz2H4N-cg.tTBObU9jQpcwYQVtX8HUh-BOSThVw_r1bQ78WaOVzuUg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_58_56.png?type=w773"
  },
  {
    author: "sy83",
    stats: "리뷰 88 · 평균별점 4.7",
    rating: 5,
    date: "지난 달",
    text: "인생족발이 될거같아요 !! 넘 맛있어요~\n지난번에 포장해서 먹고 넘 맛있어서 또 주문했어요♡\n양도 넉넉하고 촉촉하니 쫄깃하고 부드럽고~~~~ ^^\n오늘도 맛있게 잘 먹을께요^^",
    menu: "[쫄깃쫄깃]반반(매운)족발",
    img: "https://postfiles.pstatic.net/MjAyNjAyMTBfMyAg/MDAxNzcwNzI0NzUxMjI0.n0bVMjb0C4C2VI5lFxmUWS1WMJ5qNaPpZDz_HPVBh5og.Go8so2gdahy6906l5YIZr4fOID_-do4oQsMyFX4HeKMg.PNG/ChatGPT_Image_2026%EB%85%84_2%EC%9B%94_10%EC%9D%BC_%EC%98%A4%ED%9B%84_08_57_33.png?type=w773"
  }
];

export const ReviewSection: React.FC = () => {
    return (
        <section id="reviews" className="py-20 md:py-32 bg-[#F9F8F6] relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
             
             {/* Gradient overlay for softness */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F6] via-transparent to-[#F9F8F6] z-0"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                     <span className="text-[#C5A059] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-3 block">Real Reviews</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#1a1510]">고객이 먼저 인정한 맛집</h2>
                    <p className="text-gray-500 text-sm md:text-base break-keep">배달 앱 실제 리뷰가 증명하는<br className="md:hidden"/> 압도적인 맛의 차이를 경험하세요.</p>
                </div>
                
                {/* 
                   Mobile: Horizontal Scroll Snap (Carousel)
                   Desktop: Grid
                */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 md:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.03)] rounded-2xl flex flex-col items-start text-left border border-[#C5A059]/10 hover:border-[#C5A059]/30 hover:shadow-[0_10px_30px_rgba(197,160,89,0.1)] transition-all duration-300 relative group">
                            
                            {/* Quote Icon Background */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C5A059]/10 fill-[#C5A059]/10 group-hover:scale-110 transition-transform" />

                            {/* Header */}
                            <div className="flex items-center gap-3 w-full mb-4">
                                 <div className="w-10 h-10 rounded-full bg-[#1a1510] flex items-center justify-center shrink-0">
                                    <User className="w-5 h-5 text-[#C5A059]" />
                                 </div>
                                 <div>
                                    <div className="font-bold text-sm text-[#1a1510]">{review.author}</div>
                                    <div className="text-[10px] text-gray-400 font-medium">{review.date}</div>
                                 </div>
                            </div>
                            
                            {/* Stars & Stats */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex gap-0.5 text-[#FFB300]">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <span className="text-[10px] text-gray-400 font-light border-l border-gray-200 pl-2 ml-1">{review.stats}</span>
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6 whitespace-pre-wrap break-keep font-medium">
                                {review.text}
                            </p>

                            {/* Review Image */}
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-gray-100 relative">
                                <img 
                                    src={review.img} 
                                    alt="Review Food" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            
                            {/* Menu Tag */}
                            <div className="mt-auto w-full pt-4 border-t border-dashed border-gray-100">
                                <span className="inline-flex items-center text-[#C5A059] text-[11px] font-bold bg-[#C5A059]/5 px-3 py-1.5 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-2"></span>
                                    {review.menu}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Mobile Scroll Hint Dots */}
                <div className="flex justify-center gap-1.5 mt-2 md:hidden">
                    {reviews.map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#C5A059]' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};