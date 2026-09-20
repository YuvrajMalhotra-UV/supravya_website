/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { WorthKnowing } from './components/WorthKnowing';
import { ScrollingMarquee } from './components/ScrollingMarquee';
import { OurProducts } from './components/OurProducts';
import { StoryOfEveryJar } from './components/StoryOfEveryJar';
import { Testimonials } from './components/Testimonials';
import { FooterOrders } from './components/FooterOrders';
import { OurStoryView } from './components/OurStoryView';
import { ProductsView } from './components/ProductsView';
import { ProductDetailView } from './components/ProductDetailView';
import { NewsletterView } from './components/NewsletterView';
import { OrderModal } from './components/OrderModal';
import { SplashScreen } from './components/SplashScreen';
import { NavTab, ProductCategory, Product } from './types';
import { FEATURED_PRODUCTS } from './data/mockData';

const productPaths: Record<string, string> = {
  'mango-classic': 'heirloom-aam-ka-achaar',
  'lemon-ginger': 'sun-cured-nimbu-adrak',
  'banarasi-red-chilli': 'stuffed-banarasi-mirch',
};

const productIdFromPath = (pathname: string) => {
  const slug = pathname.match(/^\/products\/([^/]+)$/)?.[1];
  return FEATURED_PRODUCTS.find((product) => productPaths[product.id] === slug)?.id || null;
};

const pathForTab = (tab: NavTab) => (tab === 'home' ? '/' : `/${tab}`);

export default function App() {
  const initialProductId = productIdFromPath(window.location.pathname);
  const [currentTab, setCurrentTab] = useState<NavTab>(
    initialProductId || window.location.pathname === '/products' ? 'products' : 'home'
  );
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(() => productIdFromPath(window.location.pathname));
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    setSelectedProductId(null);
    window.history.pushState({}, '', pathForTab(tab));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setCurrentTab('products');
    setSelectedProductId(product.id);
    window.history.pushState({}, '', `/products/${productPaths[product.id]}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setSelectedProductId(null);
    setCurrentTab('products');
    window.history.pushState({}, '', '/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    setCurrentTab('products');
    setSelectedProductId(null);
    window.history.pushState({}, '', '/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (product?: Product) => {
    setModalProduct(product || null);
    setIsOrderModalOpen(true);
  };

  useEffect(() => {
    const handlePopState = () => {
      const productId = productIdFromPath(window.location.pathname);
      setSelectedProductId(productId);
      setCurrentTab(productId ? 'products' : window.location.pathname === '/products' ? 'products' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const selectedProduct = selectedProductId
    ? FEATURED_PRODUCTS.find((product) => product.id === selectedProductId)
    : null;

  // Section reveal animation configuration
  const sectionAnimation = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: 'easeOut' as const },
  };

  return (
    <div className="min-h-screen bg-transparent text-[#24140D] flex flex-col font-sans selection:bg-[#B48448]/40 selection:text-[#8E2929] relative w-full max-w-full overflow-x-hidden">
      {/* Branded Loading / Splash Screen on Initial Page Load */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Top Sticky Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onSelectCategory={handleSelectCategory}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      {/* Main Content Area based on Tab */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentTab === 'home' && (
          <div className="w-full max-w-full overflow-x-hidden">
            {/* SECTION 0 — Hero Banner Carousel */}
            <motion.div {...sectionAnimation}>
              <HeroCarousel
                onCtaClick={() => handleSelectTab('products')}
              />
            </motion.div>

            {/* SECTION 1 — About Supravya */}
            <motion.div {...sectionAnimation}>
              <AboutSection
                onNavigateOurStory={() => handleSelectTab('our-story')}
              />
            </motion.div>

            {/* SECTION 2 — Worth Knowing */}
            <motion.div {...sectionAnimation}>
              <WorthKnowing
                onFindOutMore={() => handleSelectTab('newsletter')}
              />
            </motion.div>

            {/* SECTION 3 — Scrolling Marquee */}
            <div className="w-full">
              <ScrollingMarquee />
            </div>

            {/* SECTION 4 — Our Products */}
            <motion.div {...sectionAnimation}>
              <OurProducts
                onRedirectProducts={() => handleSelectTab('products')}
              />
            </motion.div>

            {/* SECTION 5 — Story of Every Jar */}
            <motion.div {...sectionAnimation}>
              <StoryOfEveryJar />
            </motion.div>

            {/* SECTION 6 — Testimonials */}
            <motion.div {...sectionAnimation}>
              <Testimonials />
            </motion.div>

            {/* SECTION 7 — For Orders (Acts as site footer) */}
            <motion.div {...sectionAnimation}>
              <FooterOrders
                onOpenOrderModal={() => handleOpenOrderModal()}
                onNavigateTab={handleSelectTab}
                onReplayIntro={() => setShowSplash(true)}
              />
            </motion.div>
          </div>
        )}

        {currentTab === 'our-story' && (
          <div>
            <OurStoryView
              onBackToHome={() => handleSelectTab('home')}
              onExploreProducts={() => handleSelectTab('products')}
            />
            {/* Consistent Footer */}
            <FooterOrders
              onOpenOrderModal={() => handleOpenOrderModal()}
              onNavigateTab={handleSelectTab}
              onReplayIntro={() => setShowSplash(true)}
            />
          </div>
        )}

        {currentTab === 'products' && (
          <div>
            {selectedProduct ? (
              <ProductDetailView
                product={selectedProduct}
                onBackToProducts={handleBackToProducts}
              />
            ) : (
              <ProductsView
                initialCategory={selectedCategory}
                onBackToHome={() => handleSelectTab('home')}
                onSelectProduct={handleSelectProduct}
              />
            )}
            {/* Consistent Footer */}
            <FooterOrders
              onOpenOrderModal={() => handleOpenOrderModal()}
              onNavigateTab={handleSelectTab}
              onReplayIntro={() => setShowSplash(true)}
            />
          </div>
        )}

        {currentTab === 'newsletter' && (
          <div>
            <NewsletterView
              onBackToHome={() => handleSelectTab('home')}
              onExploreProducts={() => handleSelectTab('products')}
            />
            {/* Consistent Footer */}
            <FooterOrders
              onOpenOrderModal={() => handleOpenOrderModal()}
              onNavigateTab={handleSelectTab}
              onReplayIntro={() => setShowSplash(true)}
            />
          </div>
        )}
      </main>

      {/* Quick Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        preselectedProduct={modalProduct}
      />
    </div>
  );
}
