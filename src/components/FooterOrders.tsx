import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Heart, MapPin, Clock } from 'lucide-react';
import { ScrollSection, RevealItem } from './ScrollReveal';
import { HeadingUnderline } from './HeadingUnderline';

interface FooterOrdersProps {
  onOpenOrderModal: () => void;
  onNavigateTab: (tab: 'home' | 'our-story' | 'products' | 'newsletter') => void;
  onReplayIntro?: () => void;
}

export const FooterOrders: React.FC<FooterOrdersProps> = ({
  onOpenOrderModal,
  onNavigateTab,
  onReplayIntro,
}) => {
  return (
    <ScrollSection
      id="section-for-orders"
      className="w-full bg-[#751E1E] text-[#FAF2E2] pt-18 md:pt-24 pb-9 px-4 sm:px-6 lg:px-8 border-t-4 border-[#B48448] relative overflow-hidden shadow-[0_-15px_40px_rgba(70,15,15,0.4)]"
    >
      {/* Background subtle decorative spice motif glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B48448]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B22D30]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 artisan-texture-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Header & CTA Banner */}
        <RevealItem delay={0}>
          <div className="text-center space-y-4 mb-16">
            <div>
              <span className="badge-bounce inline-block px-4 py-1.5 rounded-full bg-[#B48448]/30 border border-[#E5C07B] text-xs font-sans uppercase tracking-[0.2em] text-[#FAF2E2] font-bold shadow-xs">
                Fresh Batches Shipped Pan-India
              </span>
            </div>

            <h2
              id="orders-heading"
              className="heading-shimmer-gold block font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm"
            >
              <HeadingUnderline variant="gold">Let's Get You a Jar</HeadingUnderline>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#FAF2E2]/90 max-w-xl mx-auto leading-relaxed font-medium">
              Need custom spice levels, bulk festival gifting packages, or advice on the perfect jar for your home? We are just a message away.
            </p>

            <div className="pt-3">
              <button
                id="footer-instant-order-btn"
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#FAF2E2] hover:bg-[#FFFBD6] text-[#8E2929] font-sans font-bold text-sm tracking-[0.14em] uppercase shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-200 border-2 border-[#E5C07B] cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Quick Order Inquiry</span>
                <span className="text-base font-sans">→</span>
              </button>
            </div>
          </div>
        </RevealItem>

        {/* Middle: Contact Details & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-t-2 border-[#B48448]/40">
          {/* Column 1: Brand & Craft */}
          <RevealItem delay={120}>
            <div className="space-y-3.5 text-left">
              <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#FAF2E2] tracking-tight">
                SUPRAVYA
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#FAF2E2]/85 leading-relaxed font-normal">
                Preserving India's culinary heritage through unhurried sun-maturation, cold-pressed oils, and family love. Handcrafted in micro-batches with zero chemical additives.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#E5C07B] font-sans pt-1 font-medium">
                <MapPin className="w-4 h-4 shrink-0 text-[#E5C07B]" />
                <span>Amritsar & New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E5C07B] font-sans font-medium">
                <Clock className="w-4 h-4 shrink-0 text-[#E5C07B]" />
                <span>Small Batch Dispatch: Mon - Sat</span>
              </div>
            </div>
          </RevealItem>

          {/* Column 2: Direct Contact Details */}
          <RevealItem delay={220}>
            <div className="space-y-4 text-left">
              <h3 className="font-fraunces text-xl font-bold text-[#FAF2E2] border-b-2 border-[#B48448]/50 pb-2">
                Contact:
              </h3>

              <div className="space-y-3.5 font-sans text-sm">
                {/* Phone */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#5E1818] border-2 border-[#E5C07B] flex items-center justify-center shrink-0 group-hover:bg-[#8E2929] transition-colors shadow-sm">
                    <Phone className="w-4 h-4 text-[#E5C07B]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FAF2E2]/70 block font-normal">Phone / Helpline</span>
                    <a
                      href="tel:+919818083505"
                      className="font-bold text-[#FAF2E2] hover:text-[#E5C07B] transition-colors text-base"
                    >
                      +91 9818083505
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#5E1818] border-2 border-[#E5C07B] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#8E2929] transition-colors shadow-sm">
                    <Mail className="w-4 h-4 text-[#E5C07B]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FAF2E2]/70 block font-normal">Email Address</span>
                    <a
                      href="mailto:yuvrajmalhotra.chainchapter@gmail.com"
                      className="font-semibold text-[#FAF2E2] hover:text-[#E5C07B] transition-colors break-all text-xs sm:text-sm"
                    >
                      yuvrajmalhotra.chainchapter@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>

          {/* Column 3: Social Icons & Community */}
          <RevealItem delay={320}>
            <div className="space-y-4 text-left md:text-right">
              <h3 className="font-fraunces text-xl font-bold text-[#FAF2E2] border-b-2 border-[#B48448]/50 pb-2">
                Connect With Us
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#FAF2E2]/85 leading-relaxed font-normal">
                Follow our daily sun-drying diaries, seasonal batch launches, and secret recipe pairings.
              </p>

              {/* Three social icons — WhatsApp, Instagram, Facebook — in gold/cream circular buttons with continuous floating animation */}
              <div className="flex items-center justify-start md:justify-end gap-3.5 pt-2">
                {/* WhatsApp: links to https://wa.me/919818083505 */}
                <a
                  id="social-whatsapp-link"
                  href="https://wa.me/919818083505?text=Hello%20Supravya%20Team!%20I%20would%20like%20to%20order%20handcrafted%20pickle%20jars."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-13 h-13 rounded-full bg-[#FAF2E2] text-[#8E2929] border-2 border-[#E5C07B] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:bg-white hover:scale-110 transition-all duration-300 animate-float-icon cursor-pointer"
                  aria-label="Order and chat on WhatsApp (+91 9818083505)"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 fill-[#8E2929]/25" />
                </a>

                {/* Instagram: links to placeholder URL (#) */}
                <a
                  id="social-instagram-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Supravya Instagram coming soon! Stay tuned for reel updates.');
                  }}
                  className="w-13 h-13 rounded-full bg-[#FAF2E2] text-[#8E2929] border-2 border-[#E5C07B] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:bg-white hover:scale-110 transition-all duration-300 animate-float-icon [animation-delay:0.6s] cursor-pointer"
                  aria-label="Instagram page"
                  title="Instagram (Coming Soon)"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                {/* Facebook: links to placeholder URL (#) */}
                <a
                  id="social-facebook-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Supravya Facebook community page coming soon!');
                  }}
                  className="w-13 h-13 rounded-full bg-[#FAF2E2] text-[#8E2929] border-2 border-[#E5C07B] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:bg-white hover:scale-110 transition-all duration-300 animate-float-icon [animation-delay:1.2s] cursor-pointer"
                  aria-label="Facebook page"
                  title="Facebook (Coming Soon)"
                >
                  <Facebook className="w-6 h-6 fill-[#8E2929]" />
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11.5px] font-sans text-[#E5C07B] block font-medium">
                  Direct WhatsApp Hotline: <strong className="text-[#FAF2E2] font-bold">+91 9818083505</strong>
                </span>
              </div>
            </div>
          </RevealItem>
        </div>

        {/* Quick Nav Links on Footer */}
        <RevealItem delay={400}>
          <div className="py-5 border-t border-[#B48448]/40 flex flex-wrap justify-center gap-6 font-sans text-xs tracking-[0.16em] uppercase font-semibold">
            <button
              onClick={() => onNavigateTab('home')}
              className="text-[#FAF2E2]/85 hover:text-[#E5C07B] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#E5C07B]">•</span>
            <button
              onClick={() => onNavigateTab('our-story')}
              className="text-[#FAF2E2]/85 hover:text-[#E5C07B] transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <span className="text-[#E5C07B]">•</span>
            <button
              onClick={() => onNavigateTab('products')}
              className="text-[#FAF2E2]/85 hover:text-[#E5C07B] transition-colors cursor-pointer"
            >
              Products
            </button>
            <span className="text-[#E5C07B]">•</span>
            <button
              onClick={() => onNavigateTab('newsletter')}
              className="text-[#FAF2E2]/85 hover:text-[#E5C07B] transition-colors cursor-pointer"
            >
              Newsletter
            </button>
            {onReplayIntro && (
              <>
                <span className="text-[#E5C07B]">•</span>
                <button
                  id="footer-replay-intro-btn"
                  onClick={onReplayIntro}
                  className="text-[#FAF2E2]/85 hover:text-[#E5C07B] transition-colors cursor-pointer inline-flex items-center gap-1"
                  title="Replay intro animation"
                >
                  <span>Replay Intro</span>
                  <span className="text-[11px]">↻</span>
                </button>
              </>
            )}
          </div>

          {/* Standard footer elements below: thin gold divider line, copyright text */}
          <div className="pt-6 border-t border-[#B48448]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF2E2]/80 font-sans space-y-2 sm:space-y-0 font-normal">
            <p id="footer-copyright" className="text-center sm:text-left">
              © 2026 Supravya. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-center sm:text-right">
              <span>Handmade with</span>
              <Heart className="w-3.5 h-3.5 text-[#B22D30] fill-[#B22D30] inline mx-0.5" />
              <span>in traditional family kitchens</span>
            </div>
          </div>
        </RevealItem>
      </div>
    </ScrollSection>
  );
};
