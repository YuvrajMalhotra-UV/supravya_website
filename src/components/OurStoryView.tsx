import React from 'react';
import { ArrowLeft, Sparkles, Heart, Sun, Flame, Clock } from 'lucide-react';

interface OurStoryViewProps {
  onBackToHome: () => void;
  onExploreProducts: () => void;
}

export const OurStoryView: React.FC<OurStoryViewProps> = ({
  onBackToHome,
  onExploreProducts,
}) => {
  return (
    <div id="page-our-story" className="w-full bg-transparent py-12 sm:py-18 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between border-b-2 border-[#B48448]/40 pb-4">
          <button
            id="story-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#8E2929] hover:text-[#B22D30] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-[#B48448] font-bold">
            The Supravya Heritage
          </span>
        </div>

        {/* Hero Title Section */}
        <div className="text-center space-y-4">
          <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
              Generations of Love & Spices
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold text-[#8E2929] leading-tight tracking-tight">
            Our Story: Born on a Sunlit Terrace
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#24140D]/90 max-w-2xl mx-auto leading-relaxed font-medium">
            How a yellowed 1964 notebook, white cotton muslin cloths, and a grandmother's unwavering stubbornness for purity gave birth to SUPRAVYA.
          </p>
        </div>

        {/* Featured Story Image with Gold Frame */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#B48448] shadow-[0_20px_50px_rgba(142,41,41,0.2)] p-2.5 bg-gradient-to-r from-[#B48448] via-[#FAF2E2] to-[#B48448]">
          <div className="rounded-2xl overflow-hidden aspect-[16/9] relative bg-[#24140D]">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80"
              alt="Traditional pickle making family preparation"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-[#FAF2E2]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E5C07B] font-bold block mb-1">
                Amritsar, Punjab
              </span>
              <p className="font-fraunces text-xl sm:text-2xl font-bold">
                "Real achaar takes time. If you hurry, you lose the soul."
              </p>
            </div>
          </div>
        </div>

        {/* Story Paragraphs */}
        <div className="space-y-6 font-sans text-base text-[#24140D] leading-relaxed bg-[#FAF2E2] p-6 sm:p-10 rounded-3xl border-2 border-[#B48448] shadow-[0_15px_35px_rgba(142,41,41,0.12)] font-medium">
          <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#8E2929] tracking-tight">
            The Yellowed Recipe Notebook
          </h2>
          <p>
            Every summer in the 1960s, our family terrace transformed into a fragrant sea of gold and green. Hundreds of kilograms of raw green Ramkela mangoes were hand-washed, dried with hand-loomed khadi towels, and spread out on white muslin sheets. Our grandmother, Mataji, would sit with her brass spice box and stone mortar, tasting every batch of whole spices before giving her approval.
          </p>
          <p>
            When modern grocery store shelves began filling with commercial pickles laden with synthetic acetic acid, artificial colors, and chemical preservatives to guarantee 3-year shelf lives, we realized that an entire generation was growing up without ever tasting what genuine, sun-cured achaar actually feels like.
          </p>
          <p>
            In 2024, our family decided to reclaim that heritage. We brought out Mataji's handwritten notebook, partnered with local heritage mustard-seed crushers in Rajasthan, and began handcrafting small batches for neighbors and friends. The response was overwhelming — people wept at the first taste, saying it tasted exactly like their mother's and grandmother's cooking.
          </p>
        </div>

        {/* The 4 Core Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_10px_25px_rgba(142,41,41,0.1)] hover:shadow-lg transition-all">
            <Sun className="w-8 h-8 text-[#8E2929] mb-3" />
            <h3 className="font-fraunces text-xl font-bold text-[#8E2929] mb-2">
              100% Sun-Matured (Dhoop)
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#24140D]/85 leading-relaxed font-normal">
              We never boil or quick-cook our ingredients in steam kettles. Sunlight cures each jar slowly, preserving crunch and natural micro-nutrients.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_10px_25px_rgba(142,41,41,0.1)] hover:shadow-lg transition-all">
            <Flame className="w-8 h-8 text-[#8E2929] mb-3" />
            <h3 className="font-fraunces text-xl font-bold text-[#8E2929] mb-2">
              Wood-Pressed Mustard Oil
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#24140D]/85 leading-relaxed font-normal">
              Only authentic cold-pressed Kachi Ghani mustard oil that carries that natural pungent kick and forms a sterile organic barrier.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_10px_25px_rgba(142,41,41,0.1)] hover:shadow-lg transition-all">
            <Clock className="w-8 h-8 text-[#8E2929] mb-3" />
            <h3 className="font-fraunces text-xl font-bold text-[#8E2929] mb-2">
              Micro-Batch Philosophy
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#24140D]/85 leading-relaxed font-normal">
              Never mass-produced in giant vats. We make small batches of only 60-80 jars at a time so quality and spice balance remain immaculate.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_10px_25px_rgba(142,41,41,0.1)] hover:shadow-lg transition-all">
            <Heart className="w-8 h-8 text-[#8E2929] mb-3" />
            <h3 className="font-fraunces text-xl font-bold text-[#8E2929] mb-2">
              Zero Synthetic Chemistry
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#24140D]/85 leading-relaxed font-normal">
              No sodium benzoate, no synthetic vinegar, no artificial colors or added flavor enhancers. Pure honesty in every single spoonful.
            </p>
          </div>
        </div>

        {/* CTA to explore products */}
        <div className="text-center py-6 border-t-2 border-[#B48448]/40">
          <button
            onClick={onExploreProducts}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm tracking-[0.15em] uppercase shadow-[0_12px_25px_rgba(142,41,41,0.35)] transition-all hover:scale-105 border-2 border-[#B48448] cursor-pointer"
          >
            <span>Explore Handcrafted Jars</span>
            <span className="font-sans">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
