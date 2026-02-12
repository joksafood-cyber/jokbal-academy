import React from 'react';
import { CheckCircle2, Info, ChevronRight } from 'lucide-react';

const costData = [
    { 
        size: '10평', 
        items: [
            { name: '가맹비', price: '1,000만원' },
            { name: '교육비', price: '500만원' },
            { name: '계약이행보증금', price: '300만원' },
            { name: '인테리어(평당)', price: '200만원' },
            { name: '익스테리어(평당)', price: '150만원' },
            { name: '간판/디스플레이', price: '700만원' },
            { name: '주방설비', price: '850만원' },
            { name: '주방/홀 집기', price: '850만원' },
            { name: '광고홍보비', price: '500만원', note: '(부가세별도)' }
        ], 
        price: '상담문의 1600-8769' 
    },
    { 
        size: '20평', 
        items: [
            { name: '가맹비', price: '1,000만원' },
            { name: '교육비', price: '500만원' },
            { name: '계약이행보증금', price: '300만원' },
            { name: '인테리어(평당)', price: '200만원' },
            { name: '익스테리어(평당)', price: '150만원' },
            { name: '간판/디스플레이', price: '750만원' },
            { name: '주방설비', price: '950만원' },
            { name: '주방/홀 집기', price: '1,050만원' },
            { name: '광고홍보비', price: '550만원', note: '(부가세별도)' }
        ], 
        price: '상담문의 1600-8769' 
    },
    { 
        size: '30평', 
        items: [
            { name: '가맹비', price: '1,000만원' },
            { name: '교육비', price: '500만원' },
            { name: '계약이행보증금', price: '300만원' },
            { name: '인테리어(평당)', price: '200만원' },
            { name: '익스테리어(평당)', price: '150만원' },
            { name: '간판/디스플레이', price: '800만원' },
            { name: '주방설비', price: '1,050만원' },
            { name: '주방/홀 집기', price: '1,150만원' },
            { name: '광고홍보비', price: '600만원', note: '(부가세별도)' }
        ], 
        price: '상담문의 1600-8769' 
    },
    { 
        size: '40평', 
        items: [
            { name: '가맹비', price: '1,000만원' },
            { name: '교육비', price: '500만원' },
            { name: '계약이행보증금', price: '300만원' },
            { name: '인테리어(평당)', price: '200만원' },
            { name: '익스테리어(평당)', price: '150만원' },
            { name: '간판/디스플레이', price: '850만원' },
            { name: '주방설비', price: '1,150만원' },
            { name: '주방/홀 집기', price: '1,250만원' },
            { name: '광고홍보비', price: '650만원', note: '(부가세별도)' }
        ], 
        price: '상담문의 1600-8769' 
    },
];

const revenueData = [
    {
        size: '10평',
        items: [
            { label: '테이블수', value: '5개' },
            { label: '평균단가/회전율', value: '44,000원 / 2회' },
            { label: '예상 일매출', value: '1,550,000' },
            { label: '예상 월매출', value: '46,500,000', isTotal: true },
            { label: '재료비(38%)', value: '17,670,000' },
            { label: '인건비(15%)', value: '6,975,000' },
            { label: '임대료/관리비(5.5%)', value: '2,557,500' },
            { label: '포장배달운영비(13%)', value: '4,017,000' },
            { label: '제세공과금(4.5%)', value: '2,092,500' },
        ],
        netProfit: '13,188,000'
    },
    {
        size: '20평',
        items: [
            { label: '테이블수', value: '10개' },
            { label: '평균단가/회전율', value: '44,000원 / 2회' },
            { label: '예상 일매출', value: '2,600,000' },
            { label: '예상 월매출', value: '78,000,000', isTotal: true },
            { label: '재료비(38%)', value: '29,640,000' },
            { label: '인건비(15%)', value: '11,700,000' },
            { label: '임대료/관리비(5.5%)', value: '4,290,000' },
            { label: '포장배달운영비(13%)', value: '6,084,000' },
            { label: '제세공과금(4.5%)', value: '3,510,000' },
        ],
        netProfit: '22,776,000'
    },
    {
        size: '30평',
        items: [
            { label: '테이블수', value: '15개' },
            { label: '평균단가/회전율', value: '44,000원 / 2회' },
            { label: '예상 일매출', value: '3,650,000' },
            { label: '예상 월매출', value: '109,500,000', isTotal: true },
            { label: '재료비(38%)', value: '41,610,000' },
            { label: '인건비(15%)', value: '16,425,000' },
            { label: '임대료/관리비(5.5%)', value: '6,022,500' },
            { label: '포장배달운영비(13%)', value: '8,151,000' },
            { label: '제세공과금(4.5%)', value: '4,927,500' },
        ],
        netProfit: '32,364,000'
    },
    {
        size: '40평',
        items: [
            { label: '테이블수', value: '20개' },
            { label: '평균단가/회전율', value: '44,000원 / 2회' },
            { label: '예상 일매출', value: '5,200,000' },
            { label: '예상 월매출', value: '156,000,000', isTotal: true },
            { label: '재료비(38%)', value: '59,280,000' },
            { label: '인건비(15%)', value: '23,400,000' },
            { label: '임대료/관리비(5.5%)', value: '8,580,000' },
            { label: '포장배달운영비(13%)', value: '12,168,000' },
            { label: '제세공과금(4.5%)', value: '7,020,000' },
        ],
        netProfit: '45,552,000'
    },
];

const storeTypes = [
    {
        title: "복합형 매장",
        subtitle: "안정적인 운영과 높은 매출 가능",
        desc: "홀, 포장, 배달 판매가 가능하여 안정적인 매출을 확보된 상태에서 상권에 따른 타겟팅으로 매출을 극대화할 수 있습니다."
    },
    {
        title: "배달포장전문 매장",
        subtitle: "소자본창업 가능 투자대비 높은 수익",
        desc: "1인~2인 운영이 가능한 소규모 포장, 배달 전문점 형태로 임대료, 인건비 등 비용부담을 줄여 투자대비 높은 수익을 얻을 수 있습니다."
    }
];

const processSteps = [
    { 
        step: 1, 
        title: "창업신청", 
        desc: "가맹 상담 신청 및\n브랜드 소개",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 2, 
        title: "상권분석", 
        desc: "전문 점포 개발팀의\n철저한 상권 분석",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 3, 
        title: "점포/가맹계약", 
        desc: "점포 선정 및\n가맹 계약 체결",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 4, 
        title: "인테리어시공", 
        desc: "효율적인 동선 설계 및\n인테리어 시공",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 5, 
        title: "교육", 
        desc: "본사 조리 교육 및\n운영 노하우 전수",
        img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 6, 
        title: "오픈준비", 
        desc: "최종 리허설 및\n오픈 바이징",
        img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1600&auto=format&fit=crop"
    },
    { 
        step: 7, 
        title: "그랜드오픈", 
        desc: "오픈 이벤트 및\n초기 마케팅 지원",
        img: "https://postfiles.pstatic.net/MjAyNjAyMTBfOTAg/MDAxNzcwNzE2Nzk5OTQz.4fZORgmMyJW2qRSDhvDvlL-BcyHlJKJD45XfhcaNCR8g.jqz6zABYL0OL_wLG6DaNliLOGEEtIz0QzGAqAqinrfAg.PNG/%ED%95%98%EB%8B%A8%EB%A7%A4%EC%9E%A5_%EB%A7%91%EC%9D%80%EB%82%A0.png?type=w773"
    },
    { 
        step: 8, 
        title: "사후관리", 
        desc: "담당 슈퍼바이저 배정\n지속적인 관리",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
    }
];

export const CostSection: React.FC = () => {
    return (
        <section id="cost" className="relative">
             {/* Background */}
             <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#E3E1DC] via-[#F0EFEA] to-[#F9F8F6]"></div>

            {/* TOP PART: STARTUP COSTS */}
            {/* Reduced padding on mobile: pt-20 pb-20 */}
            <div className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 md:px-6 rounded-b-[30px] md:rounded-b-[50px] shadow-2xl z-10 overflow-hidden bg-[#1a1510]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-10 md:mb-16">
                        <p className="text-[#C5A059] font-bold text-sm md:text-xl lg:text-3xl mb-3 md:mb-6 tracking-wide drop-shadow-md">사장이 처음이어도 운영은 전문가처럼.</p>
                        <h2 className="font-display text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight break-keep">창업비용,<br className="md:hidden" /> 투명하게 공개합니다</h2>
                        <p className="text-gray-400 text-sm md:text-xl font-light">숨김 없는 비용 공개, 믿음의 시작입니다.</p>
                    </div>

                    {/* Cost Grid */}
                    {/* Mobile: grid-cols-1, small gap. Desktop: grid-cols-4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {costData.map((plan, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 border border-gray-200 shadow-lg flex flex-col items-center text-center rounded-lg md:rounded-none">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                                    <span className="font-bold text-accent-gold text-sm md:text-base">{plan.size}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">{plan.size} 기준</h3>
                                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 w-full">
                                    {plan.items.map((item, i) => (
                                        <li key={i} className="flex items-center justify-between text-gray-600 text-xs md:text-sm border-b border-dashed border-gray-100 pb-2">
                                            <span>{item.name}</span>
                                            {item.price ? (
                                                <div className="text-right">
                                                    <span className="font-bold text-gray-900">{item.price}</span>
                                                    {/* @ts-ignore */}
                                                    {item.note && <p className="text-[10px] text-gray-400 leading-none mt-0.5 font-light">{item.note}</p>}
                                                </div>
                                            ) : (
                                                <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-4 md:pt-6 border-t border-gray-100 w-full">
                                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Estimated Cost</p>
                                    <p className="text-lg md:text-xl font-bold text-gray-900 break-keep">{plan.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Costs Box */}
                    <div className="mt-8 md:mt-10 bg-white p-6 md:p-8 border-l-4 border-accent-gold shadow-lg flex flex-col md:flex-row gap-4 md:gap-6 items-start rounded-r-lg md:rounded-none">
                        <div className="shrink-0 flex items-center gap-2 mt-1">
                            <Info className="w-5 h-5 text-accent-gold" />
                            <span className="font-bold text-gray-900 text-base md:text-lg">별도 추가 비용</span>
                        </div>
                        <div className="grow border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-3 md:pt-0">
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2 break-keep">
                                철거, 소방, 가스증설 및 공사, 전기증설, 상하수도 증설, 닥트, 창고공사, 냉난방기, 식기세척기, 제빙기, 진공포장기, 포스, 음향시설, TV, 어닝, 테라스, 화장실, 인허가, 초도물류 등
                            </p>
                            <p className="text-[10px] md:text-xs text-gray-400">
                                * 별도 사항은 현장 상황에 따라 별도의 견적을 통해 추가 진행됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part: Revenue Analysis */}
            <div className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Revenue Section */}
                    <div>
                        <div className="text-center mb-10 md:mb-12">
                            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">예상 수익 분석</h2>
                            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto break-keep leading-relaxed">
                                예상수익 분석표는 일반적인 수익계산율로 산정되었습니다.<br className="md:hidden"/>
                                매장형태, 운영관리 여건, 식자재 시세변동 등에 따라 차이가 날 수 있습니다.
                            </p>
                        </div>

                        {/* Revenue Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
                            {revenueData.map((plan, idx) => (
                                <div key={idx} className="bg-[#221c16] text-white p-6 md:p-8 shadow-xl border border-[#C5A059]/30 flex flex-col relative overflow-hidden group rounded-lg md:rounded-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                                    <div className="mb-4 md:mb-6 flex items-center justify-between border-b border-white/10 pb-3 md:pb-4">
                                        <span className="font-bold text-lg md:text-xl">{plan.size}</span>
                                        <span className="text-[#C5A059] text-[10px] md:text-xs font-bold px-2 py-1 border border-[#C5A059] rounded-full">예상수익</span>
                                    </div>
                                    
                                    <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-xs md:text-sm text-gray-300">
                                        {plan.items.map((item, i) => (
                                            <li key={i} className={`flex justify-between items-center ${item.isTotal ? 'text-white font-bold pt-2 border-t border-white/10 mt-2' : ''}`}>
                                                <span className={item.isTotal ? 'text-sm md:text-base' : 'opacity-80'}>{item.label}</span>
                                                <span>{item.value}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-4 md:pt-6 border-t border-dashed border-white/20">
                                        <p className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">월 순수익 (28~29%)</p>
                                        <p className="text-xl md:text-3xl font-bold text-white tracking-tight">{plan.netProfit}</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 mt-1 text-right">원</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Box */}
                    <div className="mt-10 md:mt-16 bg-[#1a1510] text-white p-6 md:p-12 rounded-lg md:rounded-sm overflow-hidden relative shadow-2xl">
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-50"></div>
                        
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className="pt-4 md:pt-0">
                                <p className="text-accent-gold text-xs md:text-sm font-bold uppercase mb-2">High Margin</p>
                                <p className="text-2xl md:text-3xl font-display font-bold">순수익률 극대화</p>
                            </div>
                            <div className="pt-6 md:pt-0">
                                <p className="text-accent-gold text-xs md:text-sm font-bold uppercase mb-2">Turnover</p>
                                <p className="text-2xl md:text-3xl font-display font-bold">빠른 회전율</p>
                            </div>
                            <div className="pt-6 md:pt-0">
                                <p className="text-accent-gold text-xs md:text-sm font-bold uppercase mb-2">System</p>
                                <p className="text-2xl md:text-3xl font-display font-bold">인건비 절감</p>
                            </div>
                        </div>
                    </div>

                    {/* Store Type Comparison */}
                    <div className="mt-20 md:mt-32">
                        <div className="text-center mb-8 md:mb-12">
                            <div className="text-[#C5A059] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">Store Type Comparison</div>
                            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">매장 타입 비교</h2>
                            <p className="text-gray-600 text-xs md:text-base">매장 유형별로 최적화된 완벽한 맞춤창업을 교육합니다.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                            {storeTypes.map((type, idx) => (
                                <div key={idx} className="bg-white rounded-2xl md:rounded-[2.5rem] p-8 md:p-14 text-center border border-gray-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1a1510] mb-4 md:mb-6">{type.title}</h3>
                                    <p className="text-accent-gold font-bold text-base md:text-lg mb-6 md:mb-8 leading-snug break-keep">{type.subtitle}</p>
                                    <div className="w-10 h-px bg-[#1a1510]/10 mx-auto mb-6 md:mb-8"></div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep font-medium">
                                        {type.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Franchise Process */}
                    <div className="mt-20 md:mt-32 mb-10 md:mb-16">
                        <div className="text-center mb-10 md:mb-16">
                            <div className="text-[#C5A059] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">Franchise Process</div>
                            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">가맹 절차</h2>
                            <div className="w-12 h-1 bg-accent-gold mx-auto mt-3 md:mt-4"></div>
                        </div>

                        {/* Mobile: 2 cols, Desktop: 4 cols */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-6 md:gap-y-10 max-w-7xl mx-auto">
                            {processSteps.map((item, idx) => (
                                <div key={idx} className="group relative bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg md:rounded-none hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                                    <div className="relative h-28 md:h-40 overflow-hidden">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                                        
                                        <div className="absolute top-0 left-0 bg-[#1a1510] text-[#C5A059] text-[10px] md:text-xs font-serif font-bold px-2 py-1 md:px-3 md:py-1.5 shadow-md">
                                            STEP {String(item.step).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-6 relative">
                                        <div className="mb-2 md:mb-3">
                                            <h4 className="font-display font-bold text-base md:text-xl text-gray-900 mb-1 md:mb-2">{item.title}</h4>
                                            <div className="w-6 md:w-8 h-px bg-gray-200 group-hover:bg-[#C5A059] transition-colors"></div>
                                        </div>
                                        
                                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed whitespace-pre-line break-keep font-medium">
                                            {item.desc}
                                        </p>
                                        
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C5A059] transition-all duration-500 group-hover:w-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-[10px] md:text-xs text-gray-400 mt-10 md:mt-20 break-keep">* 상권 및 매장 상황에 따라 비용과 수익률은 상이할 수 있습니다.</p>
                </div>
            </div>
        </section>
    );
};
