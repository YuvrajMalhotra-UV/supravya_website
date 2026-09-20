import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

interface OurProductsProps {
  onRedirectProducts: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const OurProducts: React.FC<OurProductsProps> = ({
  onRedirectProducts,
}) => {
  const floatClasses = ['animate-float-1', 'animate-float-2', 'animate-float-3'];

  return (
    <ScrollSection
      id="section-our-products"
      className="w-full max-w-full py-16 md:py-26 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center space-y-3.5 mb-14 sm:mb-18">
          <RevealItem delay={0}>
            <div>
              <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
                  Handcrafted in Small Batches
                </span>
              </div>
            </div>

            <h2
              id="our-products-heading"
              className="heading-shimmer-red block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight mt-3.5"
            >
              <HeadingUnderline>OUR PRODUCTS</HeadingUnderline>
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
              Sun-dried, cold-pressed, and hand-tossed with heirloom spices. Taste the difference of patience in every bite.
            </p>
          </RevealItem>
        </div>

        {/* 3 product cards in a row, uniform size (~380-420px wide, ~550-600px tall) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center items-stretch">
          {FEATURED_PRODUCTS.map((product, index) => {
            const floatAnimClass = floatClasses[index % floatClasses.length];

            return (
              <RevealItem
                key={product.id}
                delay={(index % 3) * 140}
                className="w-full max-w-[395px] flex justify-center items-stretch"
              >
                <div
                  id={`product-card-${product.id}`}
                  className={`group/product-card w-full min-h-[580px] flex flex-col justify-between rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_15px_35px_rgba(142,41,41,0.18),0_5px_15px_rgba(36,20,13,0.08)] hover:shadow-[0_25px_50px_rgba(142,41,41,0.28),0_10px_20px_rgba(180,132,72,0.2)] transition-all duration-300 hover:-translate-y-2 p-6 ${floatAnimClass}`}
                >
                  {/* Top: Product Image with category badge */}
                  <div>
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#24140D] border-2 border-[#B48448]/60 group">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Gradient shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/70 via-transparent to-transparent pointer-events-none" />

                      {/* Category pill badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-sans font-bold tracking-[0.14em] uppercase bg-[#8E2929] text-[#FAF2E2] border border-[#E5C07B] shadow-md">
                          {product.categoryBadge}
                        </span>
                      </div>

                      {/* Hover CTA overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#24140D]/55 opacity-0 transition-opacity duration-300 ease-out group-hover/product-card:opacity-100">
                        <button
                          id={`product-read-more-${product.id}`}
                          onClick={onRedirectProducts}
                          className="flex items-center justify-center gap-2 rounded-full border-2 border-[#E5C07B] bg-[#8E2929]/95 px-5 py-3 text-xs font-sans font-bold tracking-[0.15em] text-[#FAF2E2] uppercase opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.35)] scale-90 transition-all duration-300 ease-out group-hover/product-card:scale-100 group-hover/product-card:opacity-100 cursor-pointer"
                        >
                          <span>READ MORE</span>
                          <ArrowRight className="w-4 h-4 text-[#FAF2E2]" />
                        </button>
                      </div>
                    </div>

                    {/* Middle: Product Name and Tags */}
                    <div className="pt-5 space-y-3">
                      <h3 className="font-fraunces text-2xl font-bold text-[#8E2929] leading-snug">
                        {product.name}
                      </h3>

                      {/* Small tag pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-0.5 rounded-full text-[11px] font-sans font-bold text-[#721E1E] bg-[#B48448]/25 border border-[#B48448]/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Discounted price and weight */}
                  <div className="pt-6 border-t border-[#B48448]/40 mt-4">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans">
                      <span className="text-sm text-[#24140D]/55 line-through">₹{product.price}</span>
                      <span className="font-fraunces text-2xl font-bold text-[#8E2929]">
                        ₹{Math.round(product.price * 0.95)}
                      </span>
                      <span className="rounded-full bg-[#5F8A4B]/15 px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] text-[#4C713C]">
                        5% OFF
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-sans text-[#24140D]/60">{product.weight}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>

        {/* Explore Full Catalog Link */}
        <RevealItem delay={480} className="mt-14 text-center">
          <button
            id="view-all-products-link"
            onClick={onRedirectProducts}
            className="inline-flex items-center gap-2 text-[#8E2929] hover:text-[#B22D30] font-sans font-bold text-sm tracking-[0.14em] uppercase group border-b-2 border-[#B48448] pb-1 cursor-pointer transition-colors"
          >
            <span>View All Pickles & Jars ({FEATURED_PRODUCTS.length}+ Variations)</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
        </RevealItem>
      </div>
    </ScrollSection>
  );
};
