
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
    id: 'drishtency-by-bm',
    title: 'DristencyByBM',
    category: 'Digital Marketing / Content',
    description: 'Empowering brands to shine through creative content, influencer marketing, and expert social media management. We unleash organic growth by turning complex strategies into impactful, effortless digital engagement.',
    image: '/images/dristency01.png',
    link: 'https://drishtencybybm.com/'
  },
  {
    id: 'gva-library',
    title: 'GVA Library',
    category: 'Community / Education',
    description: 'A premier community resource in Mumbai offering a tranquil environment designed for focused learning and personal growth. We provide modern facilities and a diverse collection to empower residents in their pursuit of knowledge and excellence.',
    image: '/images/gvalib02.png',
    link: 'https://gva-library-app.web.app/',
    isReverse: true
  },
  {
    id: 'focus-board',
    title: 'FocusBoard',
    category: 'Productivity / SaaS',
    description: 'The ultimate productivity companion designed for students and creators to master consistency and visualize momentum. Seamlessly track your habits and build unbreakable streaks through an intuitive, data-driven dashboard.',
    image: '/images/focusboard03.png',
    link: 'https://focus-board-eight.vercel.app/'
  },

  {
    id: 'mallupur-doors',
    title: 'MalluPurDoors',
    category: 'E-commerce / Retail',
    description: 'Premium door retailer platform with AR visualization capabilities. Increased conversion rates by 45% through immersive product previews.',
    image: '/images/mallupurdooro3.png',
    link: 'https://mallupur-doors.web.app/'
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
    name: 'Aarav Sharma',
    role: 'CEO, Flux Media',
    quote: "AiTrios didn't just automate our workflow; they reinvented how we think about our business growth.",
    avatar: 'https://picsum.photos/100/100?random=4'
  },
  {
    id: 't2',
    name: 'Priya Patel',
    role: 'CTO, DataNexus',
    quote: "The precision of their LLM integrations is unparalleled. Our response time dropped by 80%.",
    avatar: 'https://picsum.photos/100/100?random=5'
  },
  {
    id: 't3',
    name: 'Vikram Singh',
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
