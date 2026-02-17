
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  isReverse?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServicePoint {
  title: string;
  desc: string;
}

export interface ServiceItem {
  head: string;
  subHead: string;
  points: ServicePoint[];
}

export interface ServiceSectionData {
  mainHeader: string;
  subHeader: string;
  sections: ServiceItem[];
}
