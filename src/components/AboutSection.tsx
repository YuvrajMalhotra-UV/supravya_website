import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

interface AboutSectionProps {
  onNavigateOurStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateOurStory }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <ScrollSection
      id="section-about-supravya"
      className="w-full max-w-full py-14 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <RevealItem delay={0}>
              <div>
                <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
                    Homely • Pure • Generational
                  </span>
                </div>
              </div>

              <h2
                id="about-heading"
                className="heading-shimmer-red block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight mt-6"
              >
                <HeadingUnderline>ABOUT SUPRAVYA</HeadingUnderline>
              </h2>
            </RevealItem>

            {/* Decorative gold line */}
            <RevealItem delay={80}>
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-16 bg-[#B48448]" />
                <div className="w-2 h-2 rotate-45 bg-[#B48448]" />
                <div className="h-[1px] w-32 bg-[#B48448]/40" />
              </div>
            </RevealItem>

            <RevealItem delay={150}>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#24140D] leading-relaxed font-medium">
                <p>
                  At <strong className="text-[#8E2929] font-bold">SUPRAVYA</strong>, we believe the truest flavors of home are born not in industrial factories, but on sun-drenched family terraces with patience, warm laughter, and time-honored grandmother wisdom. What began as a humble kitchen ritual — chopping fresh raw mangoes at dawn and laying them out under the Punjabi summer sun — has blossomed into our lifelong devotion to reviving authentic Indian pickle-making.
                </p>
                <p>
                  Every single jar is handmade in micro-batches with zero chemical preservatives, no synthetic food colors, and no artificial acidity regulators. We source unrefined cold-pressed mustard oil, whole indigenous spices ground gently in stone mortars, and raw produce harvested directly from trusted local farmers.
                </p>
                <p>
                  Slow-fermented inside traditional white-and-brown ceramic martabans under real natural sunlight, our pickles develop deep, gut-friendly complexities and the unmistakable warmth of maternal care. Supravya is more than a condiment — it is an edible heirloom connecting you to the heart of your grandmother's kitchen.
                </p>
              </div>
            </RevealItem>
          </div>

          {/* Right Column: Decorative Screen Frame with Gold Border & Deep Shadow */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealItem delay={280} className="w-full max-w-[480px]">
              <div className="relative w-full">
                {/* Outer decorative gold bezel and corner accents */}
                <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#B48448] via-[#F5E6C8] to-[#B48448] shadow-[0_20px_45px_rgba(142,41,41,0.22),0_10px_20px_rgba(36,20,13,0.12)]">
                  <div className="relative rounded-2xl overflow-hidden bg-[#24140D] aspect-[16/9] border-2 border-[#B48448] shadow-inner group">
                    {/* Founder / Artisan Video Preview */}
                    <img
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                      alt="Founder handcrafting authentic pickles in the family kitchen"
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 brightness-90'
                      }`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/90 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Badge: "Founder's Journal" */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24140D]/85 border border-[#B48448] backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#B22D30] animate-pulse" />
                      <span className="text-[10.5px] font-sans uppercase tracking-widest text-[#FAF2E2] font-semibold">
                        Founder's Story
                      </span>
                    </div>

                    {/* Interactive Play/Pause Controls Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <button
                        id="about-video-play-btn"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center border-2 border-[#E5C07B] shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                        aria-label={isPlaying ? 'Pause founder message' : 'Play founder message'}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-[#FAF2E2]" />
                        ) : (
                          <Play className="w-6 h-6 text-[#FAF2E2] ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Bottom Video Meta Strip */}
                    <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between text-[#FAF2E2] text-xs font-sans">
                      <div className="flex flex-col">
                        <span className="font-fraunces font-bold text-sm text-[#FAF2E2]">
                          Mrs. Sunita Malhotra
                        </span>
                        <span className="text-[11px] text-[#E5C07B] font-medium">Master Recipe Curator</span>
                      </div>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 rounded-full bg-[#24140D]/80 hover:bg-[#24140D] text-[#FAF2E2] border border-[#B48448] transition-colors cursor-pointer"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative subtle caption below screen frame */}
                <p className="text-center text-xs text-[#24140D]/80 font-sans mt-3.5 italic font-medium">
                  "We don't count minutes; we count days of warm sunlight."
                </p>
              </div>
            </RevealItem>
          </div>
        </div>

        {/* Below both columns, centered: Burgundy button labeled "OUR STORY" */}
        <RevealItem delay={380} className="mt-14 md:mt-18 text-center">
          <button
            id="about-our-story-btn"
            onClick={onNavigateOurStory}
            className="inline-flex items-center justify-center px-9 sm:px-11 py-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm tracking-[0.15em] uppercase shadow-[0_12px_25px_rgba(142,41,41,0.35)] hover:shadow-[0_16px_35px_rgba(142,41,41,0.45)] transition-all duration-200 border-2 border-[#B48448] cursor-pointer active:scale-95 group"
          >
            <span>OUR STORY</span>
            <span className="ml-2.5 transition-transform duration-200 group-hover:translate-x-1 font-sans">→</span>
          </button>
        </RevealItem>
      </div>
    </ScrollSection>
  );
};
