export interface Restaurant {
  slug: string;

  // Basic information
  name: string;
  tagline: string;
  description: string;
  cuisine: string;
  priceRange?: string;

  timezone: string;

  // Branding
  logo?: string;
  heroImage?: string;
  reservationImage?: string;

  primaryAction?: RestaurantAction;

  ratingLabel?: string;

  design: {
    heroPosition?: string;
    heroAlign?: "left" | "center" | "right";
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor?: string;
    textColor?: string;
  };
  // Contact
  phone: string;
  email?: string;
  address: Address;

  // Business hours
  hours: BusinessHours[];

  // Menu
  featuredDishes: Dish[];
  menu: MenuCategory[];

  // Images
  gallery: GalleryImage[];

  // External conversion links
  reservationUrl?: string;
  orderingUrl?: string;
  orderingServices?: RestaurantAction[];
  cateringUrl?: string;

  // Social media
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  // Reputation
  rating?: number;
  reviewCount?: number;
  googleReviewsUrl?: string;
  reviews?: Review[];

  // Restaurant story
  about?: {
    heading: string;
    description: string;
    image?: string;
  };

  // Private events / catering
  events?: {
    enabled: boolean;
    heading: string;
    description: string;
    image?: string;
    url?: string;
  };

  // SEO
  seo?: {
    title: string;
    description: string;
    image?: string;
  };

  copy?: {
    featuredHeading?: string;
    featuredDescription?: string;

    menuHeading?: string;
    menuDescription?: string;

    galleryHeading?: string;
    galleryDescription?: string;

    reservationHeading?: string;
    reservationDescription?: string;
  };
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  mapsUrl?: string;

  latitude?: number;
  longitude?: number;

  parkingNote?: string;
}

export interface RestaurantAction {
  label: string;
  url: string;
  compactLabel?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;

  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;

  image?: string;

  tags?: string[];

  dietary?: {
    vegetarian?: boolean;
    vegan?: boolean;
    glutenFree?: boolean;
    spicy?: boolean;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;

  category?: "food" | "interior" | "drinks" | "people" | "other";
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;

  source?: "Google" | "Yelp" | "Tripadvisor" | "Other";
}
