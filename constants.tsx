
import { Feature, Project, Testimonial, PricingPlan } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'workflow',
    title: 'Workflow Automator',
    description: 'Erase repetitive tasks from your daily operations with intelligent neural pipelines.',
    icon: 'auto_awesome',
    highlights: ['Zero-latency execution', 'Custom API bridges']
  },
  {
    id: 'llm',
    title: 'LLM Integration',
    description: 'Harness the power of GPT-4 and Claude customized for your private datasets.',
    icon: 'psychology',
    highlights: ['Vectorized Memory', 'Context Preservation']
  },
  {
    id: 'data',
    title: 'Data Intelligence',
    description: 'Predictive modeling that turns raw metrics into strategic business blueprints.',
    icon: 'insights',
    highlights: ['Real-time Dashboards', 'Trend Synthesis']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'neural-nexus',
    title: 'Neural Nexus',
    category: 'Artificial Intelligence / SaaS',
    description: 'A revolutionary predictive analytics suite that enables enterprise teams to forecast market volatility with 94% precision using proprietary transformer models.',
    image: 'https://picsum.photos/1200/800?random=1'
  },
  {
    id: 'visionary-ai',
    title: 'Visionary AI',
    category: 'Computer Vision / Retail',
    description: 'Implementing advanced computer vision systems for global retailers. Automated stock monitoring and customer flow heatmaps.',
    image: 'https://picsum.photos/1200/800?random=2',
    isReverse: true
  },
  {
    id: 'quantum-flow',
    title: 'Quantum Flow',
    category: 'Supply Chain / Logistics',
    description: 'Optimizing global logistics for mid-size manufacturers. Reduced redundant shipping cycles by 32% through real-time autonomous routing.',
    image: 'https://picsum.photos/1200/800?random=3'
  },
  {
    id: 'focus-board',
    title: 'FocusBoard',
    category: 'Productivity / SaaS',
    description: 'A minimalist yet powerful task management interface for creative teams. Features real-time collaboration and AI-driven priority sorting.',
    image: 'https://picsum.photos/1200/800?random=7',
    isReverse: true
  },
  {
    id: 'mallupur-doors',
    title: 'MalluPurDoors',
    category: 'E-commerce / Retail',
    description: 'Premium door retailer platform with AR visualization capabilities. Increased conversion rates by 45% through immersive product previews.',
    image: 'https://picsum.photos/1200/800?random=8'
  },
  {
    id: 'gva-library-db',
    title: 'GVA Library DB',
    category: 'Data Management / Education',
    description: 'A comprehensive digital archive system for a historic library. Digitized 50,000+ manuscripts with semantic search enabled by vector embeddings.',
    image: 'https://picsum.photos/1200/800?random=9',
    isReverse: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex Rivers',
    role: 'CEO, Flux Media',
    quote: "AiTrios didn't just automate our workflow; they reinvented how we think about our business growth.",
    avatar: 'https://picsum.photos/100/100?random=4'
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'CTO, DataNexus',
    quote: "The precision of their LLM integrations is unparalleled. Our response time dropped by 80%.",
    avatar: 'https://picsum.photos/100/100?random=5'
  },
  {
    id: 't3',
    name: 'Marcus Thorne',
    role: 'Founder, Peak Logic',
    quote: "They helped us transition from manual chaos to autonomous efficiency. ROI was clear within 60 days.",
    avatar: 'https://picsum.photos/100/100?random=6'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'startup',
    name: 'Startup',
    price: '$2,499',
    period: '/mo',
    features: ['2 Custom AI Agents', 'Workflow Basic Integration', 'Standard Support']
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$5,999',
    period: '/mo',
    features: ['5 Custom AI Agents', 'Advanced LLM Training', '24/7 Priority Support'],
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited Agents', 'Full Infrastructure Migration', 'Dedicated AI Engineer']
  }
];
