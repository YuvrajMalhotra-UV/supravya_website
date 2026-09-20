export type NavTab = 'home' | 'our-story' | 'products' | 'newsletter';

export type ProductCategory = 'All' | 'New Launches' | 'Healthy Snacks' | 'Pickles' | 'Nutrition';

export interface Product {
  id: string;
  name: string;
  category: 'New Launches' | 'Healthy Snacks' | 'Pickles' | 'Nutrition';
  categoryBadge: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  price: number;
  weight: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot' | 'Extra Fiery';
  ingredients: string[];
  imageUrl: string;
  isBestseller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  feedback: string;
  imageUrl: string;
  favoriteJar: string;
  rating: number;
}

export interface HeroSlide {
  id: number;
  imageUrl: string;
  alt: string;
  hasOverlay?: boolean;
  title?: string;
  tagline?: string;
  ctaText?: string;
}
