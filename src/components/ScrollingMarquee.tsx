import React from 'react';
import { Sparkles } from 'lucide-react';
import { RevealItem } from './ScrollReveal';

export const ScrollingMarquee: React.FC = () => {
  const marqueeItems = [
    '100% HOMEMADE',
    'NO PRESERVATIVES',
    'SUNDRIED WITH LOVE',
    'TRADITIONAL RECIPES',
    'MADE IN SMALL BATCHES',
    'PURE & NATURAL INGREDIENTS',
    'PACKED WITH FLAVOR',
    'A TASTE OF HOME',
  ];

  // Render text sequence with ornate gold spice flourishes
  const renderSequence = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center shrink-0 space-x-6 sm:space-x-10">
      {marqueeItems.map((text, idx) => (
        <React.Fragment key={`${keyPrefix}-${idx}`}>
          <span className="font-fraunces font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.08em] text-[#FAF2E2] uppercase whitespace-nowrap drop-shadow-xs">
            {text}
          </span>
          <span className="inline-flex items-center justify-center shrink-0">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#B48448]/30 border border-[#E5C07B]/50">
              <Sparkles className="w-3 h-3 text-[#E5C07B]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5C07B] rounded-[1px]" />
            </span>
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-full overflow-hidden min-w-0 relative">
      <RevealItem standalone delay={0} duration={700} className="w-full max-w-full overflow-hidden min-w-0">
        <div
          id="section-scrolling-marquee"
          className="w-full max-w-full bg-gradient-to-r from-[#721E1E] via-[#8E2929] to-[#721E1E] border-y-2 border-[#E5C07B] py-4 sm:py-4.5 overflow-hidden relative shadow-[0_10px_25px_rgba(70,15,15,0.35)] z-20 min-w-0"
          aria-label="Brand promises marquee"
        >
          {/* Edge gradient fades */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-16 bg-gradient-to-r from-[#721E1E] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-16 bg-gradient-to-l from-[#721E1E] to-transparent z-10 pointer-events-none" />

          {/* Infinite scrolling track */}
          <div className="flex w-max space-x-6 sm:space-x-10 animate-marquee">
            {renderSequence('seq-1')}
            {renderSequence('seq-2')}
            {renderSequence('seq-3')}
          </div>
        </div>
      </RevealItem>
    </div>
  );
};
