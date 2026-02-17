
import { useState, type FC, type FormEvent } from 'react';
import Navbar from './components/Navbar';
import DashboardPreview from './components/DashboardPreview';
import ChatWidget from './components/ChatWidget';
import ServiceSection from './components/ServiceSection';
import BookingCalendar from './components/BookingCalendar';
import { FEATURES, PROJECTS, TESTIMONIALS, PRICING_PLANS } from './constants';
import { generateAudit, AuditResult } from './services/geminiService';

const App: FC = () => {
  const [auditInput, setAuditInput] = useState('');
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleAuditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!auditInput.trim()) return;
    setAuditLoading(true);
    try {
      const result = await generateAudit(auditInput);
      setAuditResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setAuditLoading(false);
    }
  };

  return (
    <div className="relative selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen mesh-bg flex flex-col justify-center items-center px-4 md:px-6 pt-36 pb-32 md:pt-32 md:pb-40 relative overflow-hidden">
        <div className="max-w-5xl text-center z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full mb-10 md:mb-12 border-primary/20">
            <span className="flex h-3 w-3 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">Next Gen AI Solutions</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 md:mb-10 leading-[1.05] animate-reveal">
            Automating the Future <br />
            <span className="italic text-primary">of Business</span>
          </h1>
          <p className="text-lg md:text-2xl opacity-60 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Deployment-ready AI agents<br className="md:hidden" /> that scale with your vision.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 glow-hover"
            >
              Start Free Audit
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card px-10 py-5 rounded-full font-bold text-lg border-primary/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 glow-hover"
            >
              View Case Studies
            </button>
          </div>
        </div>

        <div className="w-full mt-12 md:mt-[100px]">
          <DashboardPreview />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto glass-card rounded-2xl p-6 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center border-primary/5">
          {[
            { n: '50+', l: 'Projects Live' },
            { n: '99%', l: 'Client Joy' },
            { n: '24h', l: 'Turnaround' },
            { n: '12M', l: 'Tokens Processed' }
          ].map((stat, i) => (
            <div key={i} className="squishy-card cursor-default group p-4 md:p-6 rounded-xl border border-transparent transition-all">
              <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2 animate-count-up">{stat.n}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 font-bold">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 px-4 md:px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">Strategic AI <br /><span className="text-primary italic">Pillars</span></h2>
              <p className="text-base md:text-xl opacity-70">Our framework integrates deep learning with human-centric design to solve the unsolvable.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all glow-hover">
                <span className="material-icons">west</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer glow-hover shadow-lg">
                <span className="material-icons">east</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat) => (
              <div key={feat.id} className="glass-card p-10 rounded-xl hover:bg-primary/5 transition-all group squishy-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{feat.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
                <p className="opacity-70 leading-relaxed mb-8">{feat.description}</p>
                <ul className="space-y-3">
                  {feat.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 opacity-80 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ServiceSection />

      {/* Projects Sticky Scroll */}
      <section className="py-20 md:py-32 px-4 md:px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">Selected <span className="text-primary italic">Works</span></h2>
            <p className="text-lg md:text-xl opacity-60">High-impact AI deployments across diverse industries.</p>
          </div>
          <div className="space-y-[10vh] pb-32">
            {PROJECTS.map((proj, i) => (
              <div key={proj.id} className={`sticky top-24 z-[${i + 1}]`}>
                <div className={`glass-card rounded-[2.5rem] overflow-hidden p-6 md:p-12 flex flex-col ${proj.isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 min-h-auto md:min-h-[500px] border-white/40 shadow-2xl`}>
                  <div className="md:w-1/2 rounded-2xl overflow-hidden h-[200px] md:h-auto border border-white/20">
                    <img alt={proj.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={proj.image} />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center items-start">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 md:mb-4">{proj.category}</span>
                    <h3 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6">{proj.title}</h3>
                    <p className="text-base md:text-lg opacity-70 mb-6 md:mb-10 leading-relaxed">{proj.description}</p>
                    {proj.link ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center overflow-hidden bg-background-dark text-white rounded-full h-[48px] w-[180px] md:h-[60px] md:w-[220px] glow-hover text-sm md:text-base"
                      >
                        <div className="flex animate-marquee-btn-slow whitespace-nowrap">
                          <span className="px-6 md:px-8 flex items-center h-full">View Case Study</span>
                          <span className="px-6 md:px-8 flex items-center h-full">View Case Study</span>
                        </div>
                        <span className="material-icons absolute right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">arrow_forward</span>
                      </a>
                    ) : (
                      <button className="group relative flex items-center overflow-hidden bg-background-dark text-white rounded-full h-[48px] w-[180px] md:h-[60px] md:w-[220px] glow-hover text-sm md:text-base">
                        <div className="flex animate-marquee-btn-slow whitespace-nowrap">
                          <span className="px-6 md:px-8 flex items-center h-full">View Case Study</span>
                          <span className="px-6 md:px-8 flex items-center h-full">View Case Study</span>
                        </div>
                        <span className="material-icons absolute right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">arrow_forward</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 md:py-32 overflow-hidden bg-background-light border-y border-primary/10">
        <div className="relative flex w-full">
          <div className="flex animate-marquee whitespace-nowrap py-12">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl w-[350px] md:w-[450px] mx-6 whitespace-normal flex-shrink-0">
                <div className="flex items-center gap-4 mb-6">
                  <img alt={t.name} className="w-12 h-12 rounded-full object-cover" src={t.avatar} />
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[10px] opacity-50 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <p className="italic opacity-80 leading-relaxed text-sm md:text-base">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Contact Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 mesh-bg" id="contact">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 glass-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <h3 className="font-serif text-3xl md:text-4xl mb-4">Free AI Audit</h3>
            <p className="mb-8 opacity-60 text-sm">Powered by Gemini. Describe your biggest business bottleneck.</p>

            {auditResult ? (
              <div className="space-y-6 animate-reveal">
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">summarize</span> Audit Summary
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed">{auditResult.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/40 rounded-xl">
                    <div className="text-[10px] uppercase opacity-40 font-bold">Complexity</div>
                    <div className="text-xl font-bold">{auditResult.complexity}</div>
                  </div>
                  <div className="p-4 bg-white/40 rounded-xl">
                    <div className="text-[10px] uppercase opacity-40 font-bold">Est. Savings</div>
                    <div className="text-xl font-bold text-primary">{auditResult.estimatedTimeSavings}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-sm">Automation Opportunities:</h4>
                  <ul className="space-y-2">
                    {auditResult.automationOpportunities.map((op, i) => (
                      <li key={i} className="text-xs flex items-center gap-2 opacity-70">
                        <span className="w-1 h-1 bg-primary rounded-full"></span> {op}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setAuditResult(null)}
                  className="w-full py-4 text-xs font-bold text-primary uppercase tracking-widest hover:bg-primary/5 transition-colors rounded-full"
                >
                  Start New Audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60 ml-2">Describe Your Challenge</label>
                  <textarea
                    value={auditInput}
                    onChange={(e) => setAuditInput(e.target.value)}
                    required
                    className="w-full bg-white/40 border-primary/10 rounded-2xl px-6 py-4 focus:ring-primary focus:border-primary placeholder:opacity-30 min-h-[150px] outline-none transition-all"
                    placeholder="Example: Our manual data entry takes 20 hours a week across 3 teams..."
                  />
                </div>
                <button
                  disabled={auditLoading}
                  className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg dot-expand-btn glow-hover disabled:opacity-50"
                >
                  {auditLoading ? 'Analyzing...' : 'Generate AI Audit'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center max-w-md mx-auto w-full">
            <BookingCalendar />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 px-4 md:px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-12 md:mb-16 text-center italic">Investment <span className="not-italic text-primary">Plans</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className={`glass-card p-10 rounded-3xl squishy-card flex flex-col h-full border-primary/10 shadow-sm transition-all ${plan.isPopular ? 'bg-white/60 ring-2 ring-primary relative scale-105' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-10">
                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.isPopular ? 'text-primary' : 'opacity-60'}`}>{plan.name}</h4>
                  <div className="text-5xl font-serif font-bold">{plan.price}<span className="text-base font-sans opacity-40">{plan.period}</span></div>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((f, k) => (
                    <li key={k} className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">done</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-all dot-expand-btn glow-hover ${plan.isPopular ? 'bg-primary text-white shadow-lg' : 'border-2 border-primary text-primary'}`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-cream backdrop-blur-[20px] rounded-[3rem] p-8 md:p-20 shadow-2xl border border-white/40 text-center group transition-all duration-700">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-6xl mb-6">Stay Ahead of <span className="text-primary italic">the Curve</span></h2>
              <p className="text-base md:text-lg opacity-70 mb-10">Get weekly AI strategy insights and early access to our neural automation frameworks.</p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input className="flex-grow bg-white/60 border border-primary/10 rounded-full px-8 py-4 focus:ring-1 focus:ring-primary outline-none text-background-dark placeholder:opacity-30" placeholder="Your best email address" type="email" />
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 glow-hover">
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-xs opacity-40 font-bold tracking-widest uppercase">No spam. Only high-value intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-primary/5 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">Ai</span>
            </div>
            <span className="font-bold text-xl tracking-tight">AiTrios</span>
          </div>
          <p className="text-sm opacity-50">© 2024 AiTrios Systems. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-bold opacity-50">
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Dribbble</a>
          </div>
        </div>
      </footer>

      {/* Sticky Call Button */}
      <a
        href="tel:+918090385242"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-3 bg-primary text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-105 transition-transform animate-bounce-subtle group"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
        <span className="hidden md:block font-bold text-lg tracking-wide uppercase">Call Now</span>
      </a>
    </div>
  );
};

export default App;
