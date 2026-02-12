import React from 'react';
import { Helmet } from "react-helmet-async";
import { Hero } from '../src/components/Hero';
import { Intro } from '../src/components/Intro';
import { MenuSection } from '../src/components/MenuSection';
import { CostSection } from '../src/components/CostSection';
import { ReviewSection } from '../src/components/ReviewSection';
import { BlogReviewSection } from '../src/components/BlogReviewSection';
import { InteriorSection } from '../src/components/InteriorSection';
import { CardStack } from '../src/components/CardStack';
import { SuccessPoints } from '../src/components/SuccessPoints';
import { FinalSection } from '../src/components/FinalSection';
import { InquirySection } from '../src/components/InquirySection';

export const Home: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>족발사관학교 | 프리미엄 족발 브랜드</title>
      <meta
        name="description"
        content="족발, 그 이상의 가치. 고급스러운 공간과 깊은 맛의 정통 족발."
      />
      <meta property="og:title" content="족발사관학교 | 프리미엄 족발 브랜드" />
      <meta
        property="og:description"
        content="족발, 그 이상의 가치. 고급스러운 공간과 깊은 맛의 정통 족발."
      />
    </Helmet>
        <Hero />
        {/* Short brand intro on home page */}
        <Intro /> 
        <MenuSection />
        <CostSection />
        <ReviewSection />
        <BlogReviewSection />
        <InteriorSection />
        <CardStack />
        <SuccessPoints />
        <FinalSection />
        <InquirySection />
    </>
  );
};