export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  sortOrder: number | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  shortDescription: string | null;
  description?: string;
  price: string;
  compareAtPrice: string | null;
  categoryId: number | null;
  categoryName: string | null;
  categorySlug: string | null;
  images: string[] | null;
  duration: string | null;
  featured: boolean | null;
  bestSeller: boolean | null;
  inStock: boolean | null;
  avgRating: number;
  reviewCount: number;
  reviews?: Review[];
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  title: string | null;
  body: string | null;
  verified: boolean | null;
  createdAt: string | Date | null;
}

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
}
