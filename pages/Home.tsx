import React from 'react';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { MenuSection } from '../components/MenuSection';
import { CostSection } from '../components/CostSection';
import { ReviewSection } from '../components/ReviewSection';
import { BlogReviewSection } from '../components/BlogReviewSection';
import { InteriorSection } from '../components/InteriorSection';
import { CardStack } from '../components/CardStack';
import { SuccessPoints } from '../components/SuccessPoints';
import { FinalSection } from '../components/FinalSection';
import { InquirySection } from '../components/InquirySection';

export const Home: React.FC = () => {
  return (
    <>
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