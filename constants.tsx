
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

export const SERVICES_DATA: import('./types').ServiceSectionData = {
  mainHeader: "Beyond Development. We Build Digital Growth.",
  subHeader: "AITrios combines cutting-edge AI automation with enterprise-grade software to scale your business while you focus on what matters.",
  sections: [
    {
      head: "Autonomous AI Workforce",
      subHead: "Replace repetitive tasks with 24/7 intelligent agents.",
      points: [
        { title: "Custom AI Agents", desc: "Specialized agents for Sales, HR, and Customer Support." },
        { title: "Workflow Automation", desc: "End-to-end integration (Zapier/Make/Custom) to connect your apps." },
        { title: "AI Knowledge Bases", desc: "Interactive \"Company Brains\" powered by your own data." }
      ]
    },
    {
      head: "Next-Gen Enterprise Ecosystems",
      subHead: "Industry-specific software designed to recover lost revenue.",
      points: [
        { title: "Smart School ERP", desc: "Complete management with AI-powered attendance and fee tracking." },
        { title: "FoodKing QR Systems", desc: "Contactless ordering and AI-driven inventory management for restaurants." },
        { title: "Custom SaaS & PWAs", desc: "High-performance web apps built for speed and scalability." }
      ]
    },
    {
      head: "AI-Driven Brand Acceleration",
      subHead: "High-fidelity content and elite web presence.",
      points: [
        { title: "Dynamic Landing Pages", desc: "Conversion-optimized sites with AI-generated copy and visuals." },
        { title: "AI Video Production", desc: "Viral Shorts and promotional videos using the latest Veo technology." },
        { title: "Google Business Growth", desc: "Automated GMB management to dominate local search results." }
      ]
    },
    {
      head: "AI Readiness & Audits",
      subHead: "Identifying 'Profit Leaks' in your current business model.",
      points: [
        { title: "Process Mapping", desc: "We analyze your workflow and show you where AI can save time." },
        { title: "Technical Consulting", desc: "Career and business audits for scaling digital infrastructure." }
      ]
    }
  ]
};
