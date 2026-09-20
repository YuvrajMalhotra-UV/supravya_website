import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sparkles, ShoppingBag } from 'lucide-react';
import { NavTab, ProductCategory } from '../types';
import supravyaLogo from '../assets/images/supravya_logo_transparent.png';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onSelectCategory?: (category: ProductCategory) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onSelectCategory,
  onOpenOrderModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const productCategories: { name: ProductCategory; label: string; desc: string }[] = [
    { name: 'New Launches', label: 'New Launches', desc: 'Fresh seasonal artisanal batches' },
    { name: 'Healthy Snacks', label: 'Healthy Snacks', desc: 'Nutrient-rich seed crunches & chutneys' },
    { name: 'Pickles', label: 'Pickles', desc: 'Traditional slow sun-cured achaar' },
    { name: 'Nutrition', label: 'Nutrition', desc: 'Vedic wellness & restorative jars' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    onSelectTab('products');
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="site-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-b from-[#761E1E] via-[#852525] to-[#8E2929] border-b-[2.5px] border-[#D4A76A] w-full max-w-full ${
        isScrolled
          ? 'shadow-[0_8px_28px_rgba(0,0,0,0.35),0_3px_10px_rgba(0,0,0,0.22)] py-2 sm:py-2.5'
          : 'shadow-[0_6px_20px_rgba(0,0,0,0.28),0_2px_6px_rgba(0,0,0,0.18)] py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo inside Ivory/Cream Contrast Badge */}
        <button
          id="nav-logo-button"
          onClick={() => handleNavClick('home')}
          className="group flex items-center text-left focus:outline-none cursor-pointer"
          aria-label="SUPRAVYA Homepage"
        >
          <div
            id="nav-logo-badge"
            className="flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-gradient-to-b from-[#FFFDF0] via-[#FFFBD6] to-[#FAF2E2] border-2 border-[#D4A76A] shadow-[0_3px_12px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.95)] group-hover:border-[#E5C07B] group-hover:shadow-[0_4px_18px_rgba(229,192,123,0.45)] transition-all duration-300 group-hover:scale-[1.02]"
          >
            <img
              src={supravyaLogo}
              alt="SUPRAVYA - Because You Matter"
              className="h-[58px] sm:h-[64px] lg:h-[68px] w-auto max-w-[190px] sm:max-w-[230px] object-contain transition-transform duration-300"
              style={{ imageRendering: 'auto' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-sans font-semibold text-xs lg:text-sm tracking-[0.14em] uppercase">
          {/* HOME */}
          <button
            id="nav-link-home"
            onClick={() => handleNavClick('home')}
            className={`relative py-1.5 transition-colors duration-200 text-[#FAF2E2] hover:text-[#E5C07B] group cursor-pointer ${
              currentTab === 'home' ? 'font-bold text-[#E5C07B]' : ''
            }`}
          >
            HOME
            <span
              className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E5C07B] rounded-full transition-all duration-300 ${
                currentTab === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>

          {/* OUR STORY */}
          <button
            id="nav-link-our-story"
            onClick={() => handleNavClick('our-story')}
            className={`relative py-1.5 transition-colors duration-200 text-[#FAF2E2] hover:text-[#E5C07B] group cursor-pointer ${
              currentTab === 'our-story' ? 'font-bold text-[#E5C07B]' : ''
            }`}
          >
            OUR STORY
            <span
              className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E5C07B] rounded-full transition-all duration-300 ${
                currentTab === 'our-story' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>

          {/* PRODUCTS WITH DROPDOWN */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              id="nav-link-products"
              onClick={() => handleNavClick('products')}
              className={`flex items-center gap-1.5 py-1.5 transition-colors duration-200 text-[#FAF2E2] hover:text-[#E5C07B] group cursor-pointer ${
                currentTab === 'products' ? 'font-bold text-[#E5C07B]' : ''
              }`}
              aria-expanded={productsDropdownOpen}
            >
              PRODUCTS
              <ChevronDown
                className={`w-4 h-4 text-[#E5C07B] transition-transform duration-200 ${
                  productsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E5C07B] rounded-full transition-all duration-300 ${
                  currentTab === 'products' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {productsDropdownOpen && (
              <div
                id="products-dropdown-menu"
                className="absolute left-0 mt-2 w-72 rounded-2xl bg-[#721E1E] border-2 border-[#B48448] shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="px-4 py-2 border-b border-[#B48448]/40 bg-[#5E1818]/60">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E5C07B]">
                    Traditional Jars & Pantry
                  </p>
                </div>
                {productCategories.map((item) => (
                  <button
                    key={item.name}
                    id={`nav-category-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleCategoryClick(item.name)}
                    className="w-full text-left px-4 py-3 hover:bg-[#8E2929] transition-colors flex flex-col group/item cursor-pointer border-b border-[#B48448]/20 last:border-0"
                  >
                    <span className="font-fraunces font-bold text-[#FAF2E2] group-hover/item:text-[#E5C07B] text-sm flex items-center justify-between">
                      {item.label}
                      <Sparkles className="w-3.5 h-3.5 text-[#E5C07B] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-[11px] text-[#FAF2E2]/75 font-normal mt-0.5">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* NEWSLETTER */}
          <button
            id="nav-link-newsletter"
            onClick={() => handleNavClick('newsletter')}
            className={`relative py-1.5 transition-colors duration-200 text-[#FAF2E2] hover:text-[#E5C07B] group cursor-pointer ${
              currentTab === 'newsletter' ? 'font-bold text-[#E5C07B]' : ''
            }`}
          >
            NEWSLETTER
            <span
              className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E5C07B] rounded-full transition-all duration-300 ${
                currentTab === 'newsletter' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3.5">
          <button
            id="nav-order-cta"
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5E6C8] hover:bg-[#FFFBD6] text-[#8E2929] font-sans text-xs tracking-wider uppercase font-bold transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer border-2 border-[#B48448] active:scale-95 hover:scale-[1.03]"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#8E2929]" />
            <span>Order a Jar</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            id="nav-hamburger-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#FAF2E2] hover:bg-[#721E1E] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#E5C07B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden px-4 pt-3 pb-6 border-t-2 border-[#B48448] bg-[#721E1E] space-y-3 font-sans animate-in slide-in-from-top-3 duration-200 shadow-2xl"
        >
          <button
            id="mobile-nav-home"
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 px-3.5 rounded-xl text-base font-semibold tracking-wide transition-colors ${
              currentTab === 'home'
                ? 'bg-[#8E2929] text-[#E5C07B] border border-[#B48448]'
                : 'text-[#FAF2E2] hover:bg-[#8E2929]/70'
            }`}
          >
            HOME
          </button>

          <button
            id="mobile-nav-our-story"
            onClick={() => handleNavClick('our-story')}
            className={`w-full text-left py-2.5 px-3.5 rounded-xl text-base font-semibold tracking-wide transition-colors ${
              currentTab === 'our-story'
                ? 'bg-[#8E2929] text-[#E5C07B] border border-[#B48448]'
                : 'text-[#FAF2E2] hover:bg-[#8E2929]/70'
            }`}
          >
            OUR STORY
          </button>

          {/* Products with subcategories accordion */}
          <div className="rounded-xl border border-[#B48448]/40 p-2.5 bg-[#5E1818]">
            <button
              id="mobile-nav-products-main"
              onClick={() => handleNavClick('products')}
              className="w-full text-left py-2 px-2 text-base font-bold text-[#E5C07B] flex items-center justify-between"
            >
              <span>PRODUCTS</span>
              <span className="text-xs text-[#FAF2E2]/70 font-normal uppercase">View All</span>
            </button>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#B48448]/30">
              {productCategories.map((item) => (
                <button
                  key={item.name}
                  id={`mobile-cat-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleCategoryClick(item.name)}
                  className="text-left px-2.5 py-1.5 text-xs text-[#FAF2E2] hover:text-[#E5C07B] hover:bg-[#8E2929] rounded-lg font-medium"
                >
                  • {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            id="mobile-nav-newsletter"
            onClick={() => handleNavClick('newsletter')}
            className={`w-full text-left py-2.5 px-3.5 rounded-xl text-base font-semibold tracking-wide transition-colors ${
              currentTab === 'newsletter'
                ? 'bg-[#8E2929] text-[#E5C07B] border border-[#B48448]'
                : 'text-[#FAF2E2] hover:bg-[#8E2929]/70'
            }`}
          >
            NEWSLETTER
          </button>

          <div className="pt-2">
            <button
              id="mobile-order-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#F5E6C8] text-[#8E2929] font-bold text-sm tracking-wider uppercase border-2 border-[#B48448] shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-[#8E2929]" />
              <span>Order Handcrafted Jars</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
