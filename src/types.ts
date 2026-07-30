export type AudienceRole = 'all' | 'scholen' | 'besturen' | 'gemeenten' | 'ouders';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  audience: string;
  badge: string;
  details: {
    overview: string;
    targetAge: string;
    keyBenefits: string[];
    certification: string;
  };
}

export interface ValueProp {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  badge: string;
}

export interface StepItem {
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  category: 'scholen' | 'besturen' | 'ouders';
  quote: string;
  rating: number;
  location: string;
  highlightText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'scholen' | 'begeleiders' | 'ouders' | 'algemeen';
}

export interface StatItem {
  value: string;
  numericValue: number;
  label: string;
  sublabel: string;
  icon: string;
}
