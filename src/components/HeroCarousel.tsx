import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';
import { RevealItem } from './ScrollReveal';

interface HeroCarouselProps {
  onCtaClick: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // 4 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  return (
    <section
      id="section-hero-carousel"
      className="w-full max-w-full pt-4 sm:pt-8 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 flex justify-center bg-transparent overflow-hidden"
      aria-label="Hero Banner Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container: Inset from browser edges (~90% max width), rounded corners, prominent gold border and deep artisanal shadow */}
      <RevealItem standalone delay={0} duration={800} className="w-full max-w-full sm:max-w-[95%] xl:max-w-7xl">
        <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#B48448] shadow-[0_20px_50px_rgba(142,41,41,0.22),0_10px_20px_rgba(36,20,13,0.1)] bg-[#24140D]">
          {/* Slides Viewport */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.4/1] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] overflow-hidden">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  id={`hero-slide-${index}`}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.imageUrl}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* ONLY FIRST IMAGE (index 0) has the text overlay */}
                  {slide.hasOverlay && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#24140D]/90 via-[#24140D]/60 to-transparent flex items-center p-6 sm:p-10 md:p-16 lg:p-20">
                      <div className="max-w-xl text-[#FAF2E2] space-y-4 sm:space-y-6">
                        <div>
                          <div className="badge-bounce inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B48448]/35 border border-[#E5C07B] backdrop-blur-md shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
                            <span className="text-xs uppercase tracking-[0.2em] font-semibold font-sans text-[#FAF2E2]">
                              Pure Sunlight & Stone-Ground Spices
                            </span>
                          </div>
                        </div>

                        <h1
                          id="hero-heading"
                          className="heading-shimmer-gold block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight drop-shadow-md"
                        >
                          {slide.title}
                        </h1>

                        <p
                          id="hero-tagline"
                          className="font-sans text-sm sm:text-base md:text-lg text-[#FAF2E2]/95 max-w-lg leading-relaxed font-medium"
                        >
                          {slide.tagline}
                        </p>

                        <div className="pt-2">
                          <button
                            id="hero-cta-button"
                            onClick={onCtaClick}
                            className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm sm:text-base tracking-[0.12em] uppercase shadow-[0_10px_25px_rgba(142,41,41,0.4)] hover:shadow-[0_15px_30px_rgba(142,41,41,0.5)] transition-all duration-200 border-2 border-[#B48448] cursor-pointer active:scale-95 group"
                          >
                            <span>{slide.ctaText}</span>
                            <span className="ml-2.5 transition-transform duration-200 group-hover:translate-x-1 font-sans">→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Manual Left/Right Navigation Arrows (Burgundy circular buttons with gold border and deep shadow) */}
          <button
            id="hero-arrow-prev"
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-[#8E2929]/90 hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] border-2 border-[#B48448] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            id="hero-arrow-next"
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-[#8E2929]/90 hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] border-2 border-[#B48448] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dot Indicators */}
          <div
            id="hero-dot-indicators"
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#24140D]/75 backdrop-blur-md border border-[#B48448]/50 shadow-md"
          >
            {HERO_SLIDES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                id={`hero-dot-${dotIdx}`}
                onClick={() => goToSlide(dotIdx)}
                className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-8 h-2.5 bg-[#E5C07B] shadow-[0_0_8px_rgba(229,192,123,0.8)]'
                    : 'w-2.5 h-2.5 bg-[#FAF2E2]/40 hover:bg-[#FAF2E2]'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealItem>
    </section>
  );
};
