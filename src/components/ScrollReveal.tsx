import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * ScrollSection provides a semantic container for page sections.
 */
export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  id,
  className = '',
  ...rest
}) => {
  return (
    <section id={id} className={`w-full max-w-full overflow-x-hidden ${className}`} {...rest}>
      {children}
    </section>
  );
};

interface RevealItemProps {
  children: React.ReactNode;
  delay?: number; // Milliseconds delay (e.g. 0, 120, 240)
  duration?: number; // Milliseconds duration (default 750ms)
  yOffset?: number; // Pixels to slide from (default 50px for distinct visibility)
  className?: string;
  standalone?: boolean;
}

/**
 * RevealItem animates smoothly with a prominent fade + slide effect
 * triggered both ways: when scrolling down (slides up into view)
 * and when scrolling up (slides down into view).
 * Continuous bidirectional observation ensures animations re-trigger smoothly in both directions.
 */
export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  delay = 0,
  duration = 750,
  yOffset = 50,
  className = '',
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentYOffset, setCurrentYOffset] = useState<number>(yOffset);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Check if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          // Determine whether the element exited out the top or bottom of viewport
          const rect = entry.boundingClientRect;
          if (rect.top < 0) {
            // Exited above the viewport -> will re-enter from top when scrolling up
            setCurrentYOffset(-Math.abs(yOffset));
          } else {
            // Exited below the viewport -> will re-enter from bottom when scrolling down
            setCurrentYOffset(Math.abs(yOffset));
          }
        }
      },
      {
        threshold: 0.05,
        // -25px margin ensures the element enters 25px into view before animating,
        // making the animation clearly and attractively visible to the user
        rootMargin: '-25px 0px -25px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [yOffset]);

  return (
    <div
      ref={itemRef}
      className={`scroll-reveal-item ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${currentYOffset}px)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: isVisible ? `${duration}ms` : '200ms',
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

