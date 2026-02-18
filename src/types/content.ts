export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  ogImage: string;
  brand: {
    name: string;
    tagline: string;
    description: string;
    story: string;
    ceo: {
      name?: string;
      displayName?: string;
      title: string;
      message: string;
      image?: string;
    };
    values: Array<{
      title: string;
      description: string;
      badge?: string;
    }>;
  };
  applicationForm: {
    url: string;
    buttonText: string;
  };
  contact: {
    email: string;
    phone?: string;
    instagram?: string;
  };
  sns: {
    instagram?: string;
    blog?: string;
    youtube?: string;
    kakao?: string;
  };
  feedbackForm: {
    url: string;
    buttonText: string;
    description: string;
  };
}

export interface WorkbookItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  priceDisplay: string;
  discountPrice?: number;
  discountPriceDisplay?: string;
  features: string[];
  coverImage?: string;
  previewImages?: string[];
  applicationUrl: string;
  category: string;
}

export interface WorkbooksData {
  categories: string[];
  items: WorkbookItem[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ReviewsData {
  items: ReviewItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  items: FAQItem[];
}

export interface HomeContent {
  fitCheck: {
    title: string;
    recommendedTitle: string;
    notRecommendedTitle: string;
    recommended: string[];
    notRecommended: string[];
  };
  studyMethod: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  trustPolicy: {
    title: string;
    subtitle: string;
    notice: Array<{
      title: string;
      description: string;
    }>;
    details: Array<{
      question: string;
      answer: string;
    }>;
  };
  urgency: {
    title: string;
    tag: string;
    messages: string[];
    footnote: string;
  };
  preChecklist: {
    title: string;
    items: string[];
  };
  brandMessage: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
  visual: {
    title: string;
    headline: string;
    tag: string;
    tracks: string[];
    stats: Array<{
      label: string;
      value: string;
    }>;
  };
}
