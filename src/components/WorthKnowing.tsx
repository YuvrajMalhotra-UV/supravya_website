import React, { useState, useEffect } from 'react';
import { Sun, ShieldCheck, HeartPulse, Sparkles, ArrowRight, X, ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

interface WorthKnowingProps {
  onFindOutMore: () => void;
}

interface ActiveFactState {
  index: number;
  originX: number;
  originY: number;
}

export const WorthKnowing: React.FC<WorthKnowingProps> = ({ onFindOutMore }) => {
  const [activeFact, setActiveFact] = useState<ActiveFactState | null>(null);

  const healthFacts = [
    {
      icon: Sun,
      title: 'Solar Maturation (Dhoop Mein Pakna)',
      tagline: 'Vedic Solar Cooking • 21 Days of Sun-Curing',
      text: 'Sunlight naturally activates raw enzymes and caramelizes natural fruit sugars, creating nuanced flavor profiles without artificial heat or boiling.',
      inDepth:
        'In classical ayurvedic preparation, sun-cooking (Surya Paka) is prized above all artificial thermal processing. Over 21 uninterrupted days on open rooftops, natural ambient ultraviolet and infrared rays gently ripen raw hand-cut fruits, concentrating bioactive phytochemicals and tenderizing fiber without destroying sensitive micronutrients.',
      keyPoints: [
        'Gentle 35°C–42°C natural ambient warming avoids scorching delicate polyphenol antioxidants.',
        'Infuses aromatic essential oils from raw mustard seeds and wild fenugreek directly into the cold-pressed oil matrix.',
        'Preserved strictly in glazed ceramic martabans that breathe by day and cool naturally with nighttime breezes.',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Living Probiotics & Gut Balance',
      tagline: 'Microbiome Synergy • Traditional Wild Lacto-Fermentation',
      text: 'Natural wild lacto-fermentation cultivates beneficial gut microbiomes that aid digestion, reduce bloating, and boost nutrient assimilation.',
      inDepth:
        'Authentic Indian pickles were historically prepared as functional medicinal foods known as Pachak. Unpasteurized wild lacto-fermentation encourages dense colonies of beneficial lactic acid strains that survive gastric transit, fortifying gut biodiversity and reigniting the body’s innate digestive fire (Agni).',
      keyPoints: [
        'Rich in living beneficial bacteria like Lactobacillus plantarum that support healthy digestive flora.',
        'Consuming a single teaspoon alongside complex lentils and grains ignites natural salivary and gastric enzymes.',
        'Natural fermentation produces organic postbiotics and short-chain fatty acids that nourish the intestinal lining.',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Zero Chemical Preservatives',
      tagline: 'Purity Guarantee • No Synthetic Additives Ever',
      text: 'We rely solely on age-old natural preservation: pure cold-pressed mustard oil, Himalayan rock salt, and healing turmeric. No sodium benzoate, ever.',
      inDepth:
        'Commercial factory pickles rely heavily on sodium benzoate (INS 211), potassium sorbate, and synthetic glacial acetic acid to artificially extend shelf-life. Supravya adheres strictly to pure traditional pantry science: natural antimicrobial sulfur compounds from raw mustard oil, mineral osmotic draw from pink rock salt, and sun sterility.',
      keyPoints: [
        'Pure cold-pressed (Kachi Ghani) mustard oil forms an impenetrable natural oxygen barrier preventing microbial oxidation.',
        'Unrefined Himalayan pink rock salt provides balanced salinity and 84 trace minerals with zero chemical anti-caking agents.',
        '100% free of synthetic preservatives, artificial acidity regulators, artificial food dyes, and industrial vinegar.',
      ],
    },
  ];

  // Lock background scroll when modal is open and bind Escape key
  useEffect(() => {
    if (activeFact !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveFact(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeFact]);

  const handleCardClick = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    setActiveFact({
      index: idx,
      originX: cardCenterX - viewportCenterX,
      originY: cardCenterY - viewportCenterY,
    });
  };

  const selectedFactData = activeFact !== null ? healthFacts[activeFact.index] : null;
  const SelectedIcon = selectedFactData ? selectedFactData.icon : null;

  return (
    <ScrollSection
      id="section-worth-knowing"
      className="w-full py-18 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#8E2929] text-[#FAF2E2] border-y-4 border-[#B48448] relative overflow-hidden shadow-[0_20px_50px_rgba(70,15,15,0.4)]"
    >
      {/* Artisanal background texture accent */}
      <div className="absolute inset-0 artisan-texture-dark opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Science/Wisdom Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <RevealItem delay={0}>
              <div>
                <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/30 border border-[#E5C07B] shadow-xs backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#FAF2E2]">
                    Ancient Fermentation Wisdom
                  </span>
                </div>
              </div>

              <h2
                id="worth-knowing-heading"
                className="heading-shimmer-gold block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.15] tracking-tight mt-6"
              >
                <HeadingUnderline variant="gold">WORTH KNOWING</HeadingUnderline>
              </h2>
            </RevealItem>

            {/* Decorative gold separator */}
            <RevealItem delay={80}>
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-16 bg-[#E5C07B]" />
                <div className="w-2 h-2 rotate-45 bg-[#E5C07B]" />
                <div className="h-[1px] w-32 bg-[#E5C07B]/40" />
              </div>
            </RevealItem>

            <RevealItem delay={130}>
              <p className="font-sans text-base text-[#FAF2E2]/95 leading-relaxed font-medium">
                In traditional Indian gastronomy, an authentic pickle was never regarded as junk food or a salty afterthought — it was treasured as <em className="text-[#E5C07B] font-semibold">Pachak</em>, a medicinal digestive catalyst formulated to ignite our digestive fire (<em className="text-[#E5C07B] font-semibold">Agni</em>).
              </p>
            </RevealItem>

            {/* Benefit cards on deep burgundy canvas */}
            <div className="space-y-4 pt-2">
              {healthFacts.map((fact, idx) => {
                const IconComponent = fact.icon;
                return (
                  <RevealItem key={idx} delay={180 + idx * 100}>
                    <div
                      id={`worth-knowing-card-${idx}`}
                      onClick={(e) => handleCardClick(idx, e)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          const target = e.currentTarget;
                          const rect = target.getBoundingClientRect();
                          setActiveFact({
                            index: idx,
                            originX: rect.left + rect.width / 2 - window.innerWidth / 2,
                            originY: rect.top + rect.height / 2 - window.innerHeight / 2,
                          });
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Learn more about ${fact.title}`}
                      className="worth-knowing-info-box flex items-start justify-between gap-4 p-4.5 rounded-2xl bg-[#762020]/90 border-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#E5C07B]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-[#5E1818] border-2 border-[#E5C07B] flex items-center justify-center shrink-0 text-[#E5C07B] mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-fraunces text-lg font-bold text-[#FAF2E2] group-hover:text-[#E5C07B] transition-colors">
                            {fact.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-[#FAF2E2]/85 mt-1 leading-relaxed font-normal">
                            {fact.text}
                          </p>
                          <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-sans font-bold uppercase tracking-[0.12em] text-[#E5C07B]/80 group-hover:text-[#E5C07B] transition-colors">
                            <span>Read full insight</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </div>
          </div>

          {/* Right Column: Creative Graphic Masked into a Vertical Oval Shape with Gold Border & Glow + Floating Animation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            {/* The Floating Vertical Oval */}
            <RevealItem delay={250}>
              <div className="relative group animate-float-oval">
                {/* Gold glow halo */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#B48448]/50 via-[#E5C07B]/40 to-[#B48448]/50 rounded-[50%] blur-2xl opacity-85 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Vertical Oval Frame: aspect ratio approx 3:4 with 50% border radius for ellipse */}
                <div
                  id="worth-knowing-oval"
                  className="relative w-64 sm:w-72 md:w-80 h-88 sm:h-96 md:h-[420px] rounded-[50%] p-3 bg-gradient-to-b from-[#E5C07B] via-[#B48448] to-[#E5C07B] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#E5C07B]"
                >
                  <div className="w-full h-full rounded-[50%] overflow-hidden bg-[#24140D] relative border-2 border-[#E5C07B]/70 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                      alt="Traditional Indian spice fermentation and sun curing"
                      className="w-full h-full object-cover object-center transform scale-110 group-hover:scale-115 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/80 via-transparent to-[#8E2929]/30 pointer-events-none" />

                    {/* Overlay decorative badge */}
                    <div className="absolute bottom-6 inset-x-4 text-center">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF2E2] text-[#8E2929] font-fraunces font-bold text-xs uppercase tracking-wider border-2 border-[#B48448] shadow-lg">
                        21 Days Sun-Cured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>

            {/* Below the oval graphic: Gold/cream button labeled "FIND OUT MORE" */}
            <RevealItem delay={380} className="mt-10">
              <button
                id="worth-knowing-find-out-more-btn"
                onClick={onFindOutMore}
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F5E6C8] hover:bg-[#FFFBD6] text-[#8E2929] font-sans font-bold text-xs sm:text-sm tracking-[0.16em] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 border-2 border-[#E5C07B] cursor-pointer active:scale-95 group hover:scale-[1.03]"
              >
                <span>FIND OUT MORE</span>
                <ArrowRight className="w-4 h-4 text-[#8E2929] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </RevealItem>
          </div>
        </div>
      </div>

      {/* Expand-to-Fullscreen Focused Modal */}
      <AnimatePresence>
        {activeFact !== null && selectedFactData && SelectedIcon && (
          <motion.div
            id="worth-knowing-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
            onClick={() => setActiveFact(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              id="worth-knowing-modal-card"
              initial={{
                x: activeFact.originX,
                y: activeFact.originY,
                scale: 0.35,
                opacity: 0.7,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{
                x: activeFact.originX,
                y: activeFact.originY,
                scale: 0.35,
                opacity: 0,
                transition: {
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl lg:max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#7A2222] via-[#701E1E] to-[#601717] border-2 sm:border-3 border-[#E5C07B] shadow-[0_25px_70px_rgba(0,0,0,0.65),0_0_40px_rgba(229,192,123,0.25)] text-[#FAF2E2] p-6 sm:p-8 md:p-10"
            >
              {/* Subtle background texture */}
              <div className="absolute inset-0 artisan-texture-dark opacity-30 rounded-3xl pointer-events-none" />

              {/* Close Button at top right */}
              <button
                id="worth-knowing-modal-close-btn"
                onClick={() => setActiveFact(null)}
                aria-label="Close insight"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#5E1818] hover:bg-[#8E2929] border-2 border-[#E5C07B] text-[#FAF2E2] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-6">
                {/* Header with pill tag and Icon */}
                <div className="flex items-start gap-4 sm:gap-6 pr-10 sm:pr-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5E1818] border-2 border-[#E5C07B] flex items-center justify-center shrink-0 text-[#E5C07B] shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                    <SelectedIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#E5C07B] bg-[#5E1818]/80 px-3 py-1 rounded-full border border-[#E5C07B]/40 shadow-xs mb-2">
                      {selectedFactData.tagline}
                    </span>
                    <h2 className="font-fraunces text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF2E2] leading-tight">
                      {selectedFactData.title}
                    </h2>
                  </div>
                </div>

                {/* Gold separator */}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-[2px] w-16 bg-[#E5C07B]" />
                  <div className="w-2 h-2 rotate-45 bg-[#E5C07B]" />
                  <div className="h-[1px] flex-1 bg-[#E5C07B]/30" />
                </div>

                {/* Lead Summary */}
                <p className="font-sans text-base sm:text-lg text-[#FAF2E2]/95 font-medium leading-relaxed bg-[#5E1818]/60 p-4 sm:p-5 rounded-2xl border border-[#B48448]/50 shadow-inner">
                  {selectedFactData.text}
                </p>

                {/* Deep-Dive Paragraph */}
                <div className="space-y-3">
                  <h4 className="font-fraunces text-lg sm:text-xl font-bold text-[#E5C07B]">
                    Artisanal & Scientific Rationale
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#FAF2E2]/85 leading-relaxed">
                    {selectedFactData.inDepth}
                  </p>
                </div>

                {/* Key Pillars Bullet Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-fraunces text-lg sm:text-xl font-bold text-[#E5C07B]">
                    Core Traditional Pillars
                  </h4>
                  <div className="space-y-2.5">
                    {selectedFactData.keyPoints.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#5E1818]/40 border border-[#B48448]/30"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#8E2929] border border-[#E5C07B] flex items-center justify-center text-[#E5C07B] shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-[#FAF2E2]/90 leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer with Back Button */}
                <div className="pt-6 border-t border-[#B48448]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#FAF2E2]/70 font-sans tracking-wide text-center sm:text-left">
                    Press <span className="text-[#E5C07B] font-semibold">ESC</span> or click outside to return
                  </p>
                  <button
                    id="worth-knowing-modal-back-btn"
                    onClick={() => setActiveFact(null)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F5E6C8] hover:bg-[#FFFBD6] text-[#8E2929] font-sans font-bold text-xs uppercase tracking-[0.16em] border-2 border-[#E5C07B] shadow-lg cursor-pointer active:scale-95 hover:scale-[1.02] transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Overview</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollSection>
  );
};

