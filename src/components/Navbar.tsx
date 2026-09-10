import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Sparkles, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import sterspelersLogo from '../assets/images/sterspelers-logo-500.png';

interface NavbarProps {
  onOpenContact: (role?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Waarom Sterspelers', href: '#waarom-ons' },
    { name: 'Hoe het werkt', href: '#hoe-het-werkt' },
    { name: 'Ervaringen', href: '#ervaringen' },
    { name: 'Rekentool', href: '#rekentool' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_25px_rgba(15,23,42,0.06)] border-b border-slate-100 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={sterspelersLogo}
              alt="Sterspelers"
              className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-slate-700 hover:text-[#0F172A] hover:bg-white transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+31752340345"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Bel Sterspelers"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/31752340345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              aria-label="WhatsApp Sterspelers"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-sm font-semibold shadow-sm hover:shadow-lg hover:bg-slate-800 transition-all duration-300 active:scale-95"
            >
              <span>Brochure & Advies</span>
              <ChevronRight className="w-4 h-4 text-[#F4B400] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact()}
              className="px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-semibold shadow-xs hover:bg-slate-800"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0F172A] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 mt-2 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-[#0F172A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+31752340345"
                className="py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Bel ons</span>
              </a>
              <a
                href="https://wa.me/31752340345"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Vraag Brochure Aan</span>
              <ChevronRight className="w-4 h-4 text-[#F4B400]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
