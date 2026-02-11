
import React from 'react';

const DashboardPreview: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto z-10 px-4 group">
      <div className="dashboard-tilt glass-card rounded-2xl shadow-[0_50px_100px_-20px_rgba(244,106,37,0.15)] p-6 border-white/40 border-t-white/80 overflow-hidden transform perspective-1000 rotate-x-12 rotate-y--6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-1000 ease-out">
        <div className="flex gap-4 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4 hidden md:block">
            <div className="h-12 w-full bg-white/20 rounded-lg animate-pulse"></div>
            <div className="h-8 w-2/3 bg-white/10 rounded-lg"></div>
            <div className="h-8 w-3/4 bg-white/10 rounded-lg"></div>
            <div className="h-40 w-full bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-center p-4">
              <div className="w-full h-full flex flex-col justify-end gap-1">
                <div className="w-full h-[20%] bg-primary/30 rounded-sm"></div>
                <div className="w-full h-[40%] bg-primary/40 rounded-sm"></div>
                <div className="w-full h-[60%] bg-primary/50 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-9 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border-white/20">
                <div className="text-[10px] uppercase tracking-wider opacity-40 font-bold mb-1">Total Savings</div>
                <div className="text-xl md:text-2xl font-bold text-primary">$124.5k</div>
              </div>
              <div className="glass-card p-4 rounded-xl border-white/20">
                <div className="text-[10px] uppercase tracking-wider opacity-40 font-bold mb-1">Neural Uptime</div>
                <div className="text-xl md:text-2xl font-bold">99.98%</div>
              </div>
              <div className="glass-card p-4 rounded-xl border-white/20 hidden md:block">
                <div className="text-[10px] uppercase tracking-wider opacity-40 font-bold mb-1">Active Agents</div>
                <div className="text-xl md:text-2xl font-bold">42</div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border-white/20 h-48 md:h-64 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-sm">Efficiency Velocity</div>
                <div className="flex gap-2 text-[10px] font-bold opacity-40">
                  <span>7D</span><span className="text-primary">30D</span><span>90D</span>
                </div>
              </div>
              <svg className="w-full h-24 md:h-32 text-primary" fill="none" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path 
                  className="drop-shadow-lg" 
                  d="M0 80C50 70 80 90 120 60C160 30 200 40 240 20C280 0 320 30 400 10" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3"
                ></path>
                <path d="M0 80C50 70 80 90 120 60C160 30 200 40 240 20C280 0 320 30 400 10V100H0V80Z" fill="url(#paint0_linear)" fillOpacity="0.1"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="200" x2="200" y1="0" y2="100">
                    <stop stopColor="#f46a25"></stop>
                    <stop offset="1" stopColor="#f46a25" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between opacity-20 text-[10px] font-bold">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
    </div>
  );
};

export default DashboardPreview;
