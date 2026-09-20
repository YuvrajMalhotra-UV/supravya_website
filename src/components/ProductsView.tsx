import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Flame, MessageCircle, Info } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/mockData';
import { ProductCategory, Product } from '../types';

interface ProductsViewProps {
  initialCategory?: ProductCategory;
  onBackToHome: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  initialCategory = 'All',
  onBackToHome,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);

  const categories: ProductCategory[] = [
    'All',
    'New Launches',
    'Healthy Snacks',
    'Pickles',
    'Nutrition',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div id="page-products-catalog" className="w-full bg-transparent py-12 sm:py-18 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b-2 border-[#B48448]/40 pb-4">
          <button
            id="products-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#8E2929] hover:text-[#B22D30] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-[#B48448] font-bold">
            Handcrafted Catalog ({filteredProducts.length} Jars)
          </span>
        </div>

        {/* Catalog Header */}
        <div className="text-center space-y-3.5">
          <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
              Micro-Batch Sun Cured
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl font-bold text-[#8E2929] tracking-tight">
            The Supravya Pantry
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#24140D]/90 max-w-xl mx-auto font-medium">
            Choose from authentic sun-matured pickles crafted in small batches with 100% pure ingredients.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold tracking-[0.12em] uppercase transition-all duration-200 border-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#8E2929] text-[#FAF2E2] border-[#E5C07B] shadow-md scale-105'
                    : 'bg-[#FAF2E2] text-[#8E2929] border-[#B48448]/60 hover:bg-[#B48448]/25 hover:border-[#B48448]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`catalog-product-${product.id}`}
              onClick={() => onSelectProduct?.(product)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelectProduct?.(product);
              }}
              role={onSelectProduct ? 'link' : undefined}
              tabIndex={onSelectProduct ? 0 : undefined}
              className="w-full max-w-[395px] rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448] shadow-[0_15px_35px_rgba(142,41,41,0.15),0_5px_15px_rgba(36,20,13,0.08)] hover:shadow-[0_25px_50px_rgba(142,41,41,0.25)] transition-all duration-300 flex flex-col justify-between p-6 hover:-translate-y-2"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#24140D] border-2 border-[#B48448]/60 group">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3.5 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-[0.14em] bg-[#8E2929] text-[#FAF2E2] border border-[#E5C07B] shadow-md">
                      {product.categoryBadge}
                    </span>
                  </div>

                  {/* Spice Level Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24140D]/90 text-[#FAF2E2] text-[11px] font-sans font-bold border border-[#E5C07B]/80 backdrop-blur-xs">
                    <Flame className="w-3.5 h-3.5 text-[#E5C07B] fill-[#E5C07B]" />
                    <span>{product.spiceLevel}</span>
                  </div>

                  {/* Weight & Price */}
                  <div className="absolute bottom-3.5 right-3.5 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-sans font-bold bg-[#FAF2E2] text-[#8E2929] border-2 border-[#B48448] shadow-md">
                      ₹{product.price} • {product.weight}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="pt-5 space-y-2.5">
                  <h3 className="font-fraunces text-2xl font-bold text-[#8E2929] leading-tight">
                    {product.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#24140D]/90 line-clamp-2 leading-relaxed font-medium">
                    {product.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-bold text-[#721E1E] bg-[#B48448]/25 border border-[#B48448]/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#B48448]/40 mt-4 space-y-2.5">
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectProduct?.(product);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-200 shadow-[0_8px_20px_rgba(142,41,41,0.3)] hover:shadow-[0_12px_25px_rgba(142,41,41,0.45)] border-2 border-[#B48448] cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-[#FAF2E2]" />
                  <span>Order on WhatsApp (₹{product.price})</span>
                </button>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectProduct?.(product);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-transparent hover:bg-[#B48448]/20 text-[#8E2929] font-sans text-xs font-bold tracking-[0.12em] uppercase transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#B48448]" />
                  <span>View Recipe & Ingredients</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
