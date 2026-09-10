export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'men' | 'women' | 'kids' | 'unisex' | 'new';
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  photoLabel: string;
  badge?: string;
  description: string;
  sizes: number[];
  colors: {
    name: string;
    hex: string;
    bgClass?: string;
  }[];
  features: string[];
  specs: {
    material: string;
    sole: string;
    origin: string;
    factoryCode: string;
  };
  inStock: boolean;
  stockCount?: number;
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  location?: string;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  category: 'all' | 'men' | 'women' | 'kids' | 'new';
  photoTag: string;
}
