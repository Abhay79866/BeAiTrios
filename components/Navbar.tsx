
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="glass-card rounded-full px-8 py-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">Ai</span>
          </div>
          <span className="font-bold text-xl tracking-tight">AiTrios</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
          <a className="hover:text-primary transition-colors" href="#features">Features</a>
          <a className="hover:text-primary transition-colors" href="#services">Services</a>
          <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold dot-expand-btn glow-hover shadow-md"
        >
          Audit Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
