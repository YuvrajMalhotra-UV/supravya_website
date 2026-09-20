import React, { useState } from 'react';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onBackToProducts: () => void;
}

interface ProductStory {
  gallery: string[];
  bullets: string[];
  shelfLife: string;
  storage: string;
  type: string;
  bestBefore: string;
  madeIn: string;
}

const productStories: Record<string, ProductStory> = {
  'mango-classic': {
    gallery: [
      'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=700&q=85',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=85',
    ],
    bullets: [
      'Raw Ramkela mangoes are selected at sunrise for a firm, naturally tangy bite.',
      'Cold-pressed kachi ghani mustard oil carries fennel, fenugreek, and kalonji through every layer.',
      'A 21-day sun-maturation brings a deep, savory-sour taste without boiling or artificial vinegar.',
      'Made in small batches with no synthetic preservatives or added food colors.',
      'Best enjoyed with dal-chawal, stuffed parathas, and fresh rotis.',
    ],
    shelfLife: '12 months unopened',
    storage: 'Keep sealed in a cool, dry place; use a dry spoon.',
    type: 'Sun-matured mango pickle',
    bestBefore: '12 months from packing',
    madeIn: 'Amritsar, Punjab',
  },
  'lemon-ginger': {
    gallery: [
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=85',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85',
    ],
    bullets: [
      'Thin-skinned Kagzi lemons soften slowly in their own bright, tangy juices.',
      'Fresh ginger slivers and ajwain add a warm, gently spicy finish to each bite.',
      'Naturally aged without oil, refined sugar, or artificial acidity regulators.',
      'Live fermentation notes make it a refreshing, traditional digestive accompaniment.',
      'Pairs beautifully with khichdi, dal-chawal, and simple home-style meals.',
    ],
    shelfLife: '12 months unopened',
    storage: 'Refrigerate after opening and always use a dry spoon.',
    type: 'Oil-free lemon and ginger pickle',
    bestBefore: '12 months from packing',
    madeIn: 'Amritsar, Punjab',
  },
  'banarasi-red-chilli': {
    gallery: [
      'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=700&q=85',
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=85',
    ],
    bullets: [
      'Plump winter Banarasi chillies are slit and deseeded by hand for a generous filling.',
      'Roasted amchur, coriander, fennel, and mustard create a fragrant, layered masala.',
      'Cold-pressed mustard oil gives the pickle its rounded warmth and long finish.',
      'Naturally cured in glazed ceramic martabans without synthetic preservatives.',
      'Extra-fiery but balanced, it turns plain rotis and curd rice into a full meal.',
    ],
    shelfLife: '12 months unopened',
    storage: 'Store away from heat and sunlight; refrigerate after opening.',
    type: 'Stuffed red chilli pickle',
    bestBefore: '12 months from packing',
    madeIn: 'Varanasi, Uttar Pradesh',
  },
};

const sizePrices = (product: Product) => ({
  '150g Jar': Math.round(product.price * 0.6 / 10) * 10,
  '300g Jar': product.price,
});

type ProductSize = '150g Jar' | '300g Jar';

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBackToProducts,
}) => {
  const story = productStories[product.id];
  const prices = sizePrices(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize>('300g Jar');
  const [selectedImage, setSelectedImage] = useState(story.gallery[0]);
  const originalPrice = prices[selectedSize];
  const discountedPrice = Math.round(originalPrice * 0.95);
  const whatsappText = encodeURIComponent(
    `Hi, I'd like to order ${product.name} - ${selectedSize}.`
  );

  return (
    <div id={`page-product-detail-${product.id}`} className="w-full bg-transparent py-10 sm:py-16 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        <button
          onClick={onBackToProducts}
          className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#8E2929] hover:text-[#B22D30] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-4 lg:sticky lg:top-8">
            <div className="rounded-3xl overflow-hidden bg-[#24140D] border-2 border-[#B48448] shadow-[0_20px_45px_rgba(142,41,41,0.2)] aspect-square">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {story.gallery.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                    selectedImage === image
                      ? 'border-[#8E2929] shadow-md scale-[1.03]'
                      : 'border-[#B48448]/50 hover:border-[#B48448]'
                  }`}
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex px-3.5 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-[0.14em] bg-[#8E2929] text-[#FAF2E2] border border-[#E5C07B] shadow-md">
                {product.categoryBadge}
              </span>
              <h1 className="font-fraunces text-4xl sm:text-5xl font-bold leading-tight text-[#8E2929]">
                {product.name}
              </h1>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-0.5 rounded-full text-[11px] font-sans font-bold text-[#721E1E] bg-[#B48448]/25 border border-[#B48448]/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-y border-[#B48448]/40 py-5">
              <h2 className="font-fraunces text-xl font-bold text-[#8E2929]">Choose your jar size</h2>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(prices) as ProductSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl border-2 p-3 text-left cursor-pointer transition-all ${
                      selectedSize === size
                        ? 'border-[#8E2929] bg-[#B48448]/20 shadow-md'
                        : 'border-[#B48448]/60 bg-[#FAF2E2] hover:border-[#B48448]'
                    }`}
                  >
                    <span className="block text-sm font-sans font-bold text-[#24140D]">{size}</span>
                    <span className="block mt-1 text-xs font-sans text-[#8E2929]">₹{prices[size]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans">
              <span className="text-sm text-[#24140D]/55 line-through">₹{originalPrice}</span>
              <span className="font-fraunces text-3xl font-bold text-[#8E2929]">₹{discountedPrice}</span>
              <span className="rounded-full bg-[#5F8A4B]/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[#4C713C]">5% OFF</span>
            </div>

            <a
              href={`https://wa.me/919818083505?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-5 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm tracking-[0.14em] uppercase transition-all duration-200 shadow-[0_10px_25px_rgba(142,41,41,0.35)] border-2 border-[#B48448]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>

            <section className="space-y-3 pt-2">
              <h2 className="font-fraunces text-2xl font-bold text-[#8E2929]">About This Product</h2>
              <ul className="space-y-2.5">
                {story.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm font-sans leading-relaxed text-[#24140D]/90">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#8E2929]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3 pt-3">
              <h2 className="font-fraunces text-2xl font-bold text-[#8E2929]">Product Details</h2>
              <div className="rounded-2xl overflow-hidden border border-[#B48448]/60">
                {[
                  ['Weight Options', '150g Jar, 300g Jar'],
                  ['Ingredients', product.ingredients.join(', ')],
                  ['Shelf Life', story.shelfLife],
                  ['Storage Instructions', story.storage],
                  ['Type', story.type],
                  ['Spice Level', product.spiceLevel],
                  ['Best Before', story.bestBefore],
                  ['Made In', story.madeIn],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(7.5rem,0.8fr)_1.2fr] border-b last:border-b-0 border-[#B48448]/30 text-xs sm:text-sm font-sans">
                    <span className="bg-[#B48448]/15 px-3 py-2.5 font-bold text-[#8E2929]">{label}</span>
                    <span className="bg-[#FAF2E2] px-3 py-2.5 text-[#24140D]/85">{value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
