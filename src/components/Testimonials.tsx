import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Leaf, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = TESTIMONIALS.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 4500); // 4.5s interval auto-scroll
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  return (
    <ScrollSection
      id="section-testimonials"
      className="w-full max-w-full pt-10 pb-18 md:pt-14 md:pb-26 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
      aria-label="Customer Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 testimonials-texture opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="testimonials-glow testimonials-glow-left pointer-events-none" aria-hidden="true" />
      <div className="testimonials-glow testimonials-glow-right pointer-events-none" aria-hidden="true" />
      <div className="testimonials-quote-mark pointer-events-none" aria-hidden="true">&quot;</div>
      <Leaf className="testimonials-decor testimonials-decor-leaf testimonials-decor-one pointer-events-none" aria-hidden="true" />
      <Sparkles className="testimonials-decor testimonials-decor-sparkle testimonials-decor-two pointer-events-none" aria-hidden="true" />
      <Leaf className="testimonials-decor testimonials-decor-leaf testimonials-decor-three pointer-events-none" aria-hidden="true" />
      <Sparkles className="testimonials-decor testimonials-decor-sparkle testimonials-decor-four pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Heading in Bodoni Moda */}
        <div className="text-center space-y-3.5 mb-14 sm:mb-18">
          <RevealItem delay={0}>
            <div>
              <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
                <Heart className="w-3.5 h-3.5 text-[#8E2929] fill-[#8E2929]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
                  Cherished Across 15,000+ Homes
                </span>
              </div>
            </div>

            <h2
              id="testimonials-heading"
              className="heading-shimmer-red block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight mt-3.5"
            >
              <HeadingUnderline>From Our Pickle Family</HeadingUnderline>
            </h2>
          </RevealItem>

          <RevealItem delay={80}>
            {/* Decorative gold flourish */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="h-[2px] w-12 bg-[#B48448]" />
              <div className="w-2 h-2 rotate-45 bg-[#B48448]" />
              <div className="h-[2px] w-12 bg-[#B48448]" />
            </div>

            <p className="font-sans text-sm sm:text-base text-[#24140D]/90 max-w-xl mx-auto font-medium mt-3.5">
              Real stories, heartwarming dining table memories, and genuine reviews from homes who cherish pure handcrafted achaar.
            </p>
          </RevealItem>
        </div>

        {/* Carousel Container with Left/Right Buttons */}
        <RevealItem delay={180}>
          <div className="relative">
            {/* Active Card / Sliding track */}
            <div className="overflow-hidden px-2 py-4">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.id}
                    className="w-full shrink-0 px-2 sm:px-4 flex justify-center"
                  >
                    {/* Rectangular Card: warm cream background, 2px gold border, elevated soft shadow */}
                    <div
                      id={`testimonial-card-${item.id}`}
                      className="w-full max-w-2xl bg-[#FAF2E2] border-2 border-[#B48448] rounded-3xl shadow-[0_15px_35px_rgba(142,41,41,0.15),0_5px_15px_rgba(36,20,13,0.08),0_0_30px_rgba(180,132,72,0.12)] p-6 sm:p-9 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 hover:shadow-[0_20px_45px_rgba(142,41,41,0.22),0_0_34px_rgba(180,132,72,0.2)] transition-all duration-300"
                    >
                      {/* Vertical Portrait Placeholder Image of customer with product */}
                      <div className="relative w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden bg-[#24140D] border-2 border-[#B48448] shrink-0 shadow-md">
                        <img
                          src={item.imageUrl}
                          alt={`Customer ${item.name} enjoying Supravya pickle`}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/70 to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 inset-x-1.5 text-center">
                          <span className="text-[10px] font-sans font-bold text-[#FAF2E2] px-2 py-0.5 rounded-full bg-[#8E2929] border border-[#E5C07B] shadow-xs">
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex flex-col justify-between text-left space-y-3.5">
                        {/* Star Rating & Jar Tag */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[#E5C07B]">
                            {[...Array(item.rating)].map((_, starIdx) => (
                              <Star
                                key={starIdx}
                                className="w-4 h-4 fill-[#E5C07B] text-[#E5C07B]"
                              />
                            ))}
                          </div>
                          <span className="text-[11px] font-sans font-bold px-3 py-1 rounded-full bg-[#B48448]/25 text-[#721E1E] border border-[#B48448]">
                            {item.favoriteJar}
                          </span>
                        </div>

                        {/* Name: Customer name in bold */}
                        <div className="font-sans text-base sm:text-lg">
                          <span className="text-[#8E2929] font-semibold">Name: </span>
                          <strong className="font-fraunces font-bold text-[#8E2929] text-xl sm:text-2xl">
                            {item.name}
                          </strong>
                        </div>

                        {/* Feedback: testimonial text in Poppins italics */}
                        <div className="font-sans text-sm sm:text-base text-[#24140D] leading-relaxed">
                          <span className="text-[#8E2929] font-bold not-italic">Feedback: </span>
                          <span className="italic font-medium">
                            "{item.feedback}"
                          </span>
                        </div>

                        <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#B48448] font-semibold">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#B48448]" />
                          <span>Verified Family Purchase • Amritsar Batch</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Left/Right Burgundy Circular Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-9">
              <button
                id="testimonial-prev-button"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center border-2 border-[#B48448] shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Indicator dots */}
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF2E2] border-2 border-[#B48448]/60 shadow-xs">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    id={`testimonial-dot-${dotIdx}`}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      dotIdx === currentIndex
                        ? 'w-7 h-2.5 bg-[#8E2929]'
                        : 'w-2.5 h-2.5 bg-[#B48448]/40 hover:bg-[#8E2929]/60'
                    }`}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                id="testimonial-next-button"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center border-2 border-[#B48448] shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </RevealItem>
      </div>
    </ScrollSection>
  );
};
