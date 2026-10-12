export interface ProductModule {
  id: string;
  name: string;
  category: 'thung-tu' | 'canh-tu' | 'phu-kien';
  title: string;
  shortDesc: string;
  badge: string;
  specs: { label: string; value: string }[];
  features: string[];
  illustrationType: string;
}

export interface SolutionModel {
  id: string;
  code: string;
  name: string;
  style: 'modern' | 'minimalist' | 'classic' | 'luxury';
  styleName: string;
  colorName: string;
  colorHex: string;
  secondaryColorHex?: string;
  handleType: 'gola-j' | 'bar-brushed' | 'knob-minimal' | 'edge-bevel';
  handleName: string;
  kitchenLayout: 'i-shape' | 'l-shape' | 'u-shape' | 'island';
  kitchenLayoutName: string;
  surfaceTexture: 'glass' | 'acrylic' | 'wood-matte' | 'metal-nano';
  popularBadge?: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  content: string[];
  keyTakeaway: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  area: string;
  cabinetType: string;
  lengthMeters: number;
  selectedModel: string;
  notes: string;
  fileName?: string;
}
