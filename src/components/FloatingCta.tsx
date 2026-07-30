import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';

interface FloatingCtaProps {
  onOpenContact: () => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenContact }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fade-in">
      
      {/* Quick Phone Call Button */}
      <a
        href="tel:0851234567"
        className="w-12 h-12 rounded-full bg-white text-[#0F172A] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-slate-100 transition-transform active:scale-95"
        title="Direct bellen: 085 - 123 4567"
      >
        <Phone className="w-5 h-5 text-[#F4B400]" />
      </a>

      {/* Primary Floating CTA Pill */}
      <button
        onClick={onOpenContact}
        className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0F172A] text-white font-bold text-xs sm:text-sm shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-700"
      >
        <span className="flex h-2.5 w-2.5 rounded-full bg-[#F4B400] animate-pulse" />
        <span>Vraag Brochure Aan</span>
        <Sparkles className="w-4 h-4 text-[#F4B400] group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
};
