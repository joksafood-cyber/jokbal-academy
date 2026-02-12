import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { MenuSection } from './components/MenuSection';
import { CostSection } from './components/CostSection';
import { ReviewSection } from './components/ReviewSection';
import { BlogReviewSection } from './components/BlogReviewSection';
import { InteriorSection } from './components/InteriorSection';
import { CardStack } from './components/CardStack';
import { SuccessPoints } from './components/SuccessPoints';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle post-load animations
  useEffect(() => {
    if (loadingComplete) {
      setShowContent(true);
      // We trigger a refresh for ScrollTrigger after content is rendered
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [loadingComplete]);

  return (
    <div className="antialiased text-dark-base relative">
      <Loader onComplete={() => setLoadingComplete(true)} />
      <NoiseOverlay />
      <Navbar />

      {/* Main Content Wrapper with margin-bottom for footer reveal */}
      <div 
        ref={wrapperRef}
        className={`relative z-10 bg-bg-stone mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
         <Hero />
         <Intro /> 
         <MenuSection />
         <CostSection />
         <SuccessPoints />
         <ReviewSection />
         <BlogReviewSection />
         <InteriorSection />
         <CardStack />
         <InquirySection />
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
