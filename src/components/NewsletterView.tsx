import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Mail, CheckCircle, BookOpen, Gift, Bell } from 'lucide-react';

interface NewsletterViewProps {
  onBackToHome: () => void;
  onExploreProducts: () => void;
}

export const NewsletterView: React.FC<NewsletterViewProps> = ({
  onBackToHome,
  onExploreProducts,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [favoriteSpice, setFavoriteSpice] = useState('Mango Achaar');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  const recipeHighlights = [
    {
      title: 'The Secret To Crispy Sun-Dried Mango Rind',
      category: 'Pickling Guide',
      readTime: '4 min read',
      excerpt: 'Why soaking raw mango pieces in turmeric-brine before terrace sunning keeps the skin firm and crunchy all year round.',
    },
    {
      title: 'Stuffed Mirchi Parathas: A Sunday Winter Classic',
      category: 'Kitchen Recipe',
      readTime: '6 min read',
      excerpt: 'How to scoop a teaspoon of Banarasi red chilli pickle oil into your whole wheat dough for layered flaky parathas.',
    },
    {
      title: 'The Science of Earthen Martabans vs Plastic Jars',
      category: 'Fermentation Wisdom',
      readTime: '5 min read',
      excerpt: 'Understanding natural ceramic thermal buffering and how porous clay breathe micro-aerobically without spoiling.',
    },
  ];

  return (
    <div id="page-newsletter" className="w-full bg-transparent py-12 sm:py-18 px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b-2 border-[#B48448]/40 pb-4">
          <button
            id="newsletter-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#8E2929] hover:text-[#B22D30] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs uppercase tracking-[0.2em] text-[#B48448] font-bold">
            The Supravya Gazette
          </span>
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="badge-bounce inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B48448]/20 border border-[#B48448] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8E2929]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold font-sans text-[#8E2929]">
              Homely Recipes & Sun-Curing Chronicles
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold text-[#8E2929] leading-tight tracking-tight">
            The Pickle Family Newsletter
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#24140D]/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Join over 8,500 food lovers. Every Thursday morning, we send handwritten grandmother recipes, seasonal batch announcements, and traditional wellness tips straight to your inbox.
          </p>
        </div>

        {/* Subscription Card */}
        <div className="bg-[#FAF2E2] rounded-3xl border-2 border-[#B48448] shadow-[0_20px_50px_rgba(142,41,41,0.18)] p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B48448]/10 rounded-full blur-3xl pointer-events-none" />

          {isSubscribed ? (
            <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#8E2929] text-[#FAF2E2] flex items-center justify-center mx-auto border-2 border-[#E5C07B] shadow-lg">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h2 className="font-fraunces text-3xl font-bold text-[#8E2929] tracking-tight">
                Welcome to the Supravya Family!
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#24140D] max-w-md mx-auto font-medium">
                Thank you, <strong>{name || 'Friend'}</strong>. We have saved your preference for <em>{favoriteSpice}</em>. Check your inbox for our complimentary welcome booklet: <em>"Mataji’s 7 Lost Terrace Recipes"</em>.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={onExploreProducts}
                  className="px-7 py-3.5 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-xs uppercase tracking-[0.14em] shadow-md border-2 border-[#B48448] cursor-pointer"
                >
                  Explore Our Fresh Jars
                </button>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="px-7 py-3.5 rounded-full bg-transparent hover:bg-[#B48448]/20 text-[#8E2929] font-sans font-bold text-xs border-2 border-[#B48448]/60 cursor-pointer"
                >
                  Subscribe Another Email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <div className="flex items-center gap-3 border-b-2 border-[#B48448]/40 pb-3">
                <Mail className="w-6 h-6 text-[#8E2929]" />
                <div>
                  <h3 className="font-fraunces text-xl font-bold text-[#8E2929]">
                    Subscribe for Free Weekly Letters
                  </h3>
                  <p className="text-xs font-sans text-[#24140D]/75 font-medium">
                    No spam ever. Unsubscribe with 1-click anytime.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="priya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-1 font-sans">
                <label className="text-xs font-bold text-[#8E2929] block uppercase tracking-wider">
                  Favorite Pickle Flavor
                </label>
                <select
                  value={favoriteSpice}
                  onChange={(e) => setFavoriteSpice(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#B48448]/50 focus:border-[#8E2929] focus:outline-none text-sm text-[#24140D] font-medium shadow-xs"
                >
                  <option value="Mango Achaar">Traditional Spicy Mango (Aam Ka Achaar)</option>
                  <option value="Nimbu Adrak">Sun-Cured Lemon & Ginger (Oil-Free)</option>
                  <option value="Banarasi Red Chilli">Stuffed Banarasi Red Chilli</option>
                  <option value="Desi Garlic & Methi">Mountain Garlic & Sprouted Methi</option>
                  <option value="Sweet Mango Chutney">Gorkeri Sweet Mango Chutney</option>
                </select>
              </div>

              {/* Perks */}
              <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#24140D] pt-1 font-semibold">
                <span className="flex items-center gap-1">
                  <Gift className="w-4 h-4 text-[#B48448]" /> Free Recipe E-Book
                </span>
                <span className="flex items-center gap-1">
                  <Bell className="w-4 h-4 text-[#B48448]" /> Early Access to Limited Jars
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-[#B48448]" /> 100% Homemade Stories
                </span>
              </div>

              <button
                type="submit"
                id="newsletter-submit-btn"
                className="w-full py-4 rounded-full bg-[#8E2929] hover:bg-[#B22D30] text-[#FAF2E2] font-sans font-bold text-sm tracking-[0.14em] uppercase shadow-[0_12px_25px_rgba(142,41,41,0.35)] hover:shadow-[0_16px_35px_rgba(142,41,41,0.45)] transition-all duration-200 border-2 border-[#B48448] cursor-pointer"
              >
                Join the Supravya Family
              </button>
            </form>
          )}
        </div>

        {/* Featured Past Issues & Guides */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b-2 border-[#B48448]/40 pb-3">
            <h2 className="font-fraunces text-2xl font-bold text-[#8E2929] tracking-tight">
              Recent From The Terrace Gazette
            </h2>
            <span className="text-xs font-sans text-[#B48448] uppercase tracking-[0.14em] font-bold">
              Read & Savor
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipeHighlights.map((recipe, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAF2E2] border-2 border-[#B48448]/60 shadow-[0_10px_25px_rgba(142,41,41,0.08)] hover:shadow-lg hover:border-[#B48448] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B48448]/25 text-[#721E1E] font-bold border border-[#B48448]/50">
                      {recipe.category}
                    </span>
                    <span className="text-[#24140D]/70 font-medium">{recipe.readTime}</span>
                  </div>
                  <h3 className="font-fraunces text-lg font-bold text-[#8E2929] leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="font-sans text-xs text-[#24140D]/85 leading-relaxed font-normal">
                    {recipe.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B48448]/30 mt-4">
                  <span className="text-xs font-sans font-bold text-[#8E2929] hover:text-[#B22D30] inline-flex items-center gap-1 cursor-pointer">
                    Read Full Story →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
