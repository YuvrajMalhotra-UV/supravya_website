import React, { useEffect, useState } from 'react';
import supravyaLogo from '../assets/images/supravya_logo_transparent.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);

  const statusMessages = [
    'Handcrafting micro-batches with love...',
    'Sun-maturing slowly in ceramic martabans...',
    'Infusing pure cold-pressed oils & whole spices...',
    'Welcome to the grandmother\'s kitchen!',
  ];

  useEffect(() => {
    // Animate progress smoothly from 0 to 100 over ~2.2s
    const startTime = performance.now();
    const duration = 2200; // 2.2s total smooth loading sequence

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const fraction = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out cubic
      const eased = 1 - Math.pow(1 - fraction, 2.8);
      const currentVal = Math.min(100, Math.round(eased * 100));
      setProgress(currentVal);

      // Update status message based on progress percentage
      if (currentVal < 33) {
        setStatusMessageIndex(0);
      } else if (currentVal < 66) {
        setStatusMessageIndex(1);
      } else if (currentVal < 98) {
        setStatusMessageIndex(2);
      } else {
        setStatusMessageIndex(3);
      }

      if (fraction < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Complete progress, hold briefly at 100% (250ms), then trigger 550ms fade-out
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            onComplete();
          }, 550);
        }, 250);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      id="branded-splash-screen"
      aria-label="Loading SUPRAVYA"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed inset-0 z-[9999] w-full h-full max-w-full m-0 p-0 flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-600 ease-out box-border ${
        isFadingOut ? 'opacity-0 scale-[1.04] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(circle at 50% 50%, #6B1717 0%, #4D0E0E 45%, #290606 100%)',
      }}
    >
      {/* Ambient warm golden backlight aura - perfectly centered with translate */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[#E5C07B]/15 blur-3xl pointer-events-none animate-splash-glow"
        aria-hidden="true"
      />

      {/* Rotating Traditional Sunburst / Heritage Mandala in Background - perfectly centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[850px] sm:h-[850px] pointer-events-none opacity-[0.07] animate-slow-spin flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-[#E5C07B]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="250" cy="250" r="230" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="190" strokeWidth="1" />
          <circle cx="250" cy="250" r="140" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="90" strokeWidth="1" />
          {/* Radiating 24 decorative rays */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={250 + 230 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={250 + 230 * Math.sin((i * 15 * Math.PI) / 180)}
              strokeWidth="1"
              strokeDasharray="3 7"
            />
          ))}
          {/* Star polygon */}
          <polygon
            points="250,50 300,200 450,250 300,300 250,450 200,300 50,250 200,200"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      {/* Decorative Traditional Corner Filigree */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-9 h-9 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#E5C07B]/50 pointer-events-none flex items-start justify-start">
        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full -mt-1 -ml-1" />
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#E5C07B]/50 pointer-events-none flex items-start justify-end">
        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full -mt-1 -mr-1" />
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-9 h-9 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#E5C07B]/50 pointer-events-none flex items-end justify-start">
        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full -mb-1 -ml-1" />
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-9 h-9 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#E5C07B]/50 pointer-events-none flex items-end justify-end">
        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full -mb-1 -mr-1" />
      </div>

      {/* Main Content Centerpiece - explicitly centered flex container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-md w-full mx-auto box-border">
        {/* Ivory / Cream Logo Plaque with double golden border */}
        <div className="animate-plaque-float w-full flex justify-center items-center">
          <div
            id="splash-logo-plaque"
            className="relative overflow-hidden mx-auto px-5 py-3 sm:px-8 sm:py-5 rounded-3xl bg-gradient-to-b from-[#FFFEEA] via-[#FFFBD6] to-[#F7EECE] border-2 border-[#D4A76A] shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_60px_rgba(229,192,123,0.35),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all duration-300 max-w-[88vw]"
          >
            {/* Inner fine border line */}
            <div className="absolute inset-1.5 rounded-[22px] border border-[#D4A76A]/40 pointer-events-none" />

            {/* Official Supravya Logo Image */}
            <img
              src={supravyaLogo}
              alt="SUPRAVYA - Because You Matter"
              className="w-[185px] sm:w-[240px] md:w-[260px] h-auto object-contain mx-auto relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] block"
              referrerPolicy="no-referrer"
            />

            {/* Golden Shimmer sweep effect running diagonally across the plaque */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-20"
              aria-hidden="true"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#FFFFFF]/50 to-transparent animate-splash-shimmer" />
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="h-6 sm:h-9" />

        {/* Progress Bar Container with Percentage and Glowing Track */}
        <div className="w-[220px] sm:w-[280px] mx-auto flex flex-col items-center">
          {/* Rounded Gold Progress Track */}
          <div
            className="w-full h-2 rounded-full bg-[#1A0303]/70 border border-[#E5C07B]/50 overflow-hidden shadow-inner p-[1.5px]"
            title={`Loading ${progress}%`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#B48448] via-[#E5C07B] to-[#FFF4D0] shadow-[0_0_12px_rgba(229,192,123,0.95)] transition-all duration-75 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing sparkle head at the leading edge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF] -mr-1" />
            </div>
          </div>

          {/* Progress Percentage Counter & Status */}
          <div className="w-full flex items-center justify-between mt-2.5 px-0.5">
            <span className="text-[11px] sm:text-xs font-sans tracking-widest text-[#FAF2E2]/75 uppercase font-semibold">
              Handcrafting
            </span>
            <span
              id="splash-progress-number"
              className="font-fraunces text-xs sm:text-sm font-bold text-[#E5C07B] tracking-wider"
            >
              {progress}%
            </span>
          </div>
        </div>

        {/* Dynamic Culinary Stage Message */}
        <p className="mt-3 font-sans text-xs sm:text-sm text-[#FAF2E2]/90 font-medium tracking-wide min-h-[22px] transition-all duration-300">
          {statusMessages[statusMessageIndex]}
        </p>

        {/* Brand Heritage Subtitle */}
        <div className="mt-3.5 flex items-center justify-center gap-2">
          <span className="w-5 sm:w-6 h-[1px] bg-[#E5C07B]/40" />
          <span className="font-fraunces text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#E5C07B] font-semibold drop-shadow-sm whitespace-nowrap">
            Handmade with Love • Estd. Tradition
          </span>
          <span className="w-5 sm:w-6 h-[1px] bg-[#E5C07B]/40" />
        </div>
      </div>

      {/* Subtle Skip button in bottom-right corner for convenience */}
      <button
        onClick={handleSkip}
        className="absolute bottom-4 right-4 sm:bottom-5 sm:right-6 z-20 font-sans text-[11px] tracking-wider uppercase text-[#FAF2E2]/60 hover:text-[#E5C07B] hover:underline transition-colors px-2 py-1 cursor-pointer"
        aria-label="Skip loading animation"
      >
        Skip ➔
      </button>
    </div>
  );
};
