import React, { useState } from 'react';
import { Play, Pause, Sparkles, QrCode, Instagram, Youtube } from 'lucide-react';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

export const StoryOfEveryJar: React.FC = () => {
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  const jarMilestones = [
    {
      step: '01',
      title: 'Dawn Farm Selection',
      desc: 'We pick raw, unblemished green Ramkela mangoes, Kagzi lemons, and Banarasi chillies at sunrise when natural essential oils are peaked.',
    },
    {
      step: '02',
      title: 'Terrace Sun-Basking',
      desc: 'Washed in pure water and hand-sliced, the pieces are laid over spotless cotton sheets on family terraces for days of gentle sun-dehydration.',
    },
    {
      step: '03',
      title: 'Cold-Pressed Spice Fusion',
      desc: 'Raw yellow mustard, saunf, and fenugreek are lightly dry-roasted, coarsely ground, and tossed in pungent wood-pressed kachi ghani mustard oil.',
    },
    {
      step: '04',
      title: '21 Days of Martaban Magic',
      desc: 'Sealed inside glazed ceramic jars and turned daily to soak in natural ultraviolet light until every layer softens into rich homeliness.',
    },
  ];

  return (
    <ScrollSection
      id="section-story-of-every-jar"
      className="w-full max-w-full pt-16 pb-10 md:pt-26 md:pb-14 px-4 sm:px-6 lg:px-8 bg-[#EFE0C2]/60 border-t-2 border-[#B48448]/40 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <RevealItem delay={0}>
              <div>
                <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
                    The Craftsmanship
                  </span>
                </div>
              </div>

              <h2
                id="story-jar-heading"
                className="heading-shimmer-red block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight mt-6"
              >
                <HeadingUnderline>STORY OF EVERY JAR</HeadingUnderline>
              </h2>
            </RevealItem>

            {/* Decorative gold flourish */}
            <RevealItem delay={80}>
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-14 bg-[#B48448]" />
                <div className="w-2 h-2 rotate-45 bg-[#B48448]" />
                <div className="h-[1px] w-28 bg-[#B48448]/50" />
              </div>
            </RevealItem>

            <RevealItem delay={140}>
              <p className="font-sans text-sm sm:text-base text-[#24140D] leading-relaxed font-medium">
                Before a Supravya jar arrives at your dining table, it completes an unhurried, month-long journey of care. There are no conveyor belts, high-speed heating ovens, or synthetic stabilizers. Every batch is tended by hands that carry decades of familial experience.
              </p>
            </RevealItem>

            {/* Step-by-step Journey Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {jarMilestones.map((milestone, mIdx) => (
                <RevealItem key={milestone.step} delay={200 + mIdx * 80}>
                  <div
                    className="story-jar-process-box p-4.5 rounded-2xl bg-[#FAF2E2] border-2 border-[#B48448]/60 shadow-[0_8px_20px_rgba(142,41,41,0.08)] hover:border-[#B48448] hover:shadow-md transition-all h-full"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="font-fraunces text-xl font-bold text-[#B48448]">
                        {milestone.step}.
                      </span>
                      <h3 className="font-fraunces text-base font-bold text-[#8E2929]">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#24140D]/85 leading-relaxed font-normal">
                      {milestone.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>

            <RevealItem delay={500}>
              <div className="p-4.5 rounded-2xl bg-[#8E2929]/10 border-l-4 border-[#8E2929] text-xs sm:text-sm font-sans text-[#24140D] italic font-medium shadow-xs">
                "We seal our jars with clean muslin cloth under the sun just like our grandmothers did in 1964. You cannot rush what nature perfects."
              </div>
            </RevealItem>
          </div>

          {/* Right Column: BOTH Portrait (9:16) Video Placeholder Framed in Gold AND QR Code Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            {/* Portrait 9:16 Video Player framed in Gold */}
            <RevealItem delay={250}>
              <div className="relative w-64 sm:w-72 aspect-[9/16] rounded-3xl p-3 bg-gradient-to-b from-[#B48448] via-[#FAF2E2] to-[#B48448] border-2 border-[#B48448] shadow-[0_20px_50px_rgba(142,41,41,0.25),0_10px_20px_rgba(36,20,13,0.1)] group">
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#24140D] relative border-2 border-[#B48448]/60 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=720&q=80"
                    alt="Artisan hand-mixing pickles with mustard oil and whole spices"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isPlayingReel ? 'scale-105' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/95 via-black/30 to-black/40 pointer-events-none" />

                  {/* Top status & Reel indicator */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8E2929] text-[10.5px] font-sans uppercase font-bold text-[#FAF2E2] border border-[#E5C07B] shadow-sm">
                      Reel #JarJourney
                    </span>
                    <div className="flex items-center gap-2 text-white">
                      <Instagram className="w-4 h-4 text-[#FAF2E2]" />
                      <Youtube className="w-4 h-4 text-[#E5C07B]" />
                    </div>
                  </div>

                  {/* Interactive Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      id="story-jar-play-button"
                      onClick={() => setIsPlayingReel(!isPlayingReel)}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] flex items-center justify-center border-2 border-[#E5C07B] shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                      aria-label={isPlayingReel ? 'Pause story reel' : 'Play story reel'}
                    >
                      {isPlayingReel ? (
                        <Pause className="w-6 h-6 text-[#FAF2E2]" />
                      ) : (
                        <Play className="w-6 h-6 text-[#FAF2E2] ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Video Meta */}
                  <div className="absolute bottom-4 inset-x-4 z-10 text-[#FAF2E2] space-y-1 text-left">
                    <p className="font-fraunces font-bold text-sm leading-tight text-[#FAF2E2]">
                      Terrace Sun-Drying & Clay Pot Curing
                    </p>
                    <p className="text-[11px] font-sans text-[#FAF2E2]/85 line-clamp-2">
                      Behind-the-scenes look at our 21-day fermentation cycle in Amritsar.
                    </p>
                  </div>
                </div>
              </div>
            </RevealItem>

            {/* Below/Beside: QR Code Placeholder Framed with note */}
            <RevealItem delay={380}>
              <div
                id="story-jar-qr-container"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_10px_25px_rgba(142,41,41,0.12)] max-w-sm w-full"
              >
                {/* QR Code Graphic */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl p-1.5 border border-[#B48448]/40 shrink-0 flex items-center justify-center shadow-inner">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-[#8E2929]"
                    fill="currentColor"
                  >
                    <rect x="0" y="0" width="30" height="30" rx="3" fill="#8E2929" />
                    <rect x="5" y="5" width="20" height="20" rx="2" fill="#FAF2E2" />
                    <rect x="10" y="10" width="10" height="10" fill="#8E2929" />

                    <rect x="70" y="0" width="30" height="30" rx="3" fill="#8E2929" />
                    <rect x="75" y="5" width="20" height="20" rx="2" fill="#FAF2E2" />
                    <rect x="80" y="10" width="10" height="10" fill="#8E2929" />

                    <rect x="0" y="70" width="30" height="30" rx="3" fill="#8E2929" />
                    <rect x="5" y="75" width="20" height="20" rx="2" fill="#FAF2E2" />
                    <rect x="10" y="80" width="10" height="10" fill="#8E2929" />

                    <rect x="36" y="8" width="6" height="6" fill="#B48448" />
                    <rect x="48" y="14" width="6" height="6" fill="#8E2929" />
                    <rect x="38" y="24" width="8" height="8" fill="#8E2929" />
                    <rect x="10" y="40" width="6" height="6" fill="#B48448" />
                    <rect x="22" y="46" width="6" height="6" fill="#8E2929" />
                    <rect x="36" y="40" width="10" height="10" fill="#8E2929" />
                    <rect x="54" y="38" width="8" height="6" fill="#B48448" />
                    <rect x="70" y="44" width="8" height="8" fill="#8E2929" />
                    <rect x="86" y="38" width="6" height="6" fill="#B48448" />
                    <rect x="40" y="60" width="6" height="6" fill="#8E2929" />
                    <rect x="54" y="58" width="8" height="8" fill="#8E2929" />
                    <rect x="74" y="66" width="6" height="6" fill="#B48448" />
                    <rect x="40" y="78" width="8" height="8" fill="#8E2929" />
                    <rect x="56" y="82" width="6" height="6" fill="#B48448" />
                    <rect x="78" y="84" width="12" height="6" fill="#8E2929" />
                  </svg>
                </div>

                {/* Text Note */}
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1.5 text-[#8E2929]">
                    <QrCode className="w-4 h-4 text-[#B48448]" />
                    <span className="font-fraunces font-bold text-xs sm:text-sm">
                      Watch in High-Definition
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#24140D]/85 leading-snug font-normal">
                    Scan to watch on <strong>YouTube/Instagram</strong> & witness how each jar is packed by hand.
                  </p>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};
