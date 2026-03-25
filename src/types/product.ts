export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  origin: string;
  healthBenefits: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  
  // Sensory Gap & Educational Features
  flavorProfile?: { aroma: number; freshness: number; spiciness: number; notes: string[] };
  recipe?: { name: string; ingredients: { name: string; quantity: string }[] };
  storageTips?: string;
  traceability?: { batchNo: string; harvestDate: string; farmName: string };
  grindingVideoUrl?: string;
  
  // Navigation Filters
  cuisine?: string[];
  dietary?: string[];
  
  subscribeAndSaveDiscount?: number;
}
