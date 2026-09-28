export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  originalPrice?: number;
  originalPriceFormatted?: string;
  category?: 'combo' | 'pupuk' | 'pakan';
  weight: string;
  unit: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  usageGuide: string[];
  specs: { label: string; value: string }[];
  image: string;
  badge?: string;
  isPopular?: boolean;
}

export interface WorkflowStep {
  stepNumber: number;
  code: string;
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  input: string;
  output: string;
  description: string;
  highlights: string[];
  ecoBenefit: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: 'Inovasi Sirkular' | 'Tips Tani & Ternak' | 'Kisah Inspiratif' | 'Teknologi BSF';
  tags: string[];
  coverImage: string;
  likes: number;
  shares: number;
  viralQuote: string;
  keyTakeaways: string[];
  trendingRank?: number;
  audioDuration?: string;
  readCount?: string;
  recommendedProductId?: string;
  statHighlights?: { label: string; value: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
