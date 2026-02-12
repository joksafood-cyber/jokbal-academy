import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

export const InquirySection: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mvzbzown", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section id="inquiry" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
             {/* Background Effects - Adjusted sizes for mobile */}
             <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#C5A059]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#C5A059]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>
             
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
             </div>

            <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Brand Promise & Contact Info */}
                    <div className="lg:col-span-5 pt-0 lg:pt-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 border border-[#C5A059] rounded-full mb-6 md:mb-8">
                            <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Application</span>
                        </div>
                        
                        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                            성공을 향한<br />
                            <span className="text-[#C5A059] italic">첫 걸음</span>을<br />
                            시작하십시오.
                        </h2>
                        
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-light lg:border-l lg:border-[#C5A059]/30 lg:pl-6">
                            족발사관학교는 단순한 가맹점 늘리기에 급급하지 않습니다.<br className="hidden md:block"/>
                            우리는 함께 성장하고, 함께 성공할<br className="lg:hidden"/>
                            진정한 <span className="text-white font-medium">비즈니스 파트너</span>를 찾습니다.
                        </p>

                        <div className="space-y-6 md:space-y-8 w-fit mx-auto lg:mx-0 text-left">
                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1510] border border-[#C5A059]/30 flex items-center justify-center group-hover:border-[#C5A059] transition-colors shrink-0">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059]" />
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">Franchise Inquiry</p>
                                    <a href="tel:1600-8769" className="text-xl md:text-2xl font-display font-bold text-white hover:text-[#C5A059] transition-colors">1600-8769</a>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">평일 10:00 - 18:00 (주말/공휴일 휴무)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1510] border border-[#C5A059]/30 flex items-center justify-center group-hover:border-[#C5A059] transition-colors shrink-0">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059]" />
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">Email Support</p>
                                    <p className="text-base md:text-lg text-white">joksafood@gmail.com</p>
                                </div>
                            </div>
                            
                             <div className="flex items-start gap-4 md:gap-5 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1510] border border-[#C5A059]/30 flex items-center justify-center group-hover:border-[#C5A059] transition-colors shrink-0">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059]" />
                                </div>
                                <div>
                                    <p className="text-[10px] md:text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">Head Office</p>
                                    <p className="text-base md:text-lg text-white break-keep">부산광역시 사하구 낙동대로485번길9 1층</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-7 w-full">
                        <div className="bg-[#121212] p-6 md:p-12 rounded-sm border border-[#C5A059]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                            {/* Decorative Corner Lines - Adjusted size for mobile */}
                            <div className="absolute top-0 left-0 w-12 h-12 md:w-20 md:h-20 border-t border-l border-[#C5A059]/50"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 md:w-20 md:h-20 border-b border-r border-[#C5A059]/50"></div>

                            <div className="mb-8 md:mb-10 text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">가맹 상담 신청서</h3>
                                <p className="text-gray-500 text-xs md:text-sm">작성해주신 내용은 상담 목적 외에는 사용되지 않습니다.</p>
                            </div>

                            {formStatus === 'success' ? (
                                <div className="py-20 text-center space-y-4">
                                    <div className="w-16 h-16 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-[#C5A059]" />
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white">상담 신청이 완료되었습니다.</h4>
                                    <p className="text-gray-400">빠른 시일 내에 전문 상담원이 연락드리겠습니다.</p>
                                    <button 
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-8 px-8 py-3 bg-[#1a1510] border border-[#C5A059] text-[#C5A059] font-bold hover:bg-[#C5A059] hover:text-black transition-colors"
                                    >
                                        추가 문의하기
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="group">
                                            <label className="block text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">신청자 성함 *</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                required
                                                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-all placeholder:text-gray-700 font-light text-base md:text-lg" 
                                                placeholder="홍길동"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">연락처 *</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                required
                                                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-all placeholder:text-gray-700 font-light text-base md:text-lg" 
                                                placeholder="010-0000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">창업 희망 지역</label>
                                        <input 
                                            type="text" 
                                            name="area"
                                            className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-all placeholder:text-gray-700 font-light text-base md:text-lg" 
                                            placeholder="예) 부산 부산진구, 서울 강남구"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-2 group-focus-within:text-white transition-colors">문의 내용</label>
                                        <textarea 
                                            name="message"
                                            rows={3} 
                                            className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 md:py-3 focus:outline-none focus:border-[#C5A059] transition-all placeholder:text-gray-700 font-light text-base md:text-lg resize-none" 
                                            placeholder="궁금하신 점이나 현재 상황을 간략히 적어주세요."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2 justify-center md:justify-start">
                                        <div className="relative flex items-center">
                                            <input 
                                                type="checkbox" 
                                                id="privacy" 
                                                name="privacy"
                                                required
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-600 bg-[#1a1510] checked:border-[#C5A059] checked:bg-[#C5A059] transition-all" 
                                            />
                                            <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1a1510] opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <label htmlFor="privacy" className="text-xs md:text-sm text-gray-500 cursor-pointer select-none hover:text-gray-300">
                                            <span className="font-bold text-gray-400">개인정보 수집 및 이용</span>에 동의합니다.
                                        </label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-gradient-to-r from-[#C5A059] to-[#a3803d] text-[#121212] font-display font-bold text-lg md:text-xl py-4 md:py-5 hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(197,160,89,0.2)] mt-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <>
                                                <span>전송 중...</span>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                <span>상담 신청하기</span>
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    
                                    {formStatus === 'error' && (
                                        <p className="text-red-500 text-sm text-center mt-2">전송에 실패했습니다. 다시 시도해주세요.</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
