import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Building2, User, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'scholen' | 'besturen' | 'ouders'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const current = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section id="ervaringen" className="py-20 md:py-32 bg-[#F8F9FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Referenties & Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Wat directeuren, besturen en ouders zeggen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Echte ervaringen van partners die dagelijks vertrouwen op de begeleiders van Sterspelers.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Alle Ervaringen' },
              { id: 'scholen', label: 'Schooldirecties' },
              { id: 'besturen', label: 'Schoolbesturen' },
              { id: 'ouders', label: 'Ouders' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] relative">
            
            <Quote className="w-16 h-16 text-amber-100/80 absolute top-8 right-8 pointer-events-none" />

            <div className="space-y-8 relative z-10">
              
              {/* Highlight Badge & Star Rating */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  {current.highlightText}
                </span>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F4B400] fill-[#F4B400]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-[#0F172A] leading-relaxed italic">
                “{current.quote}”
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#F4B400] shadow-xs"
                  />
                  <div>
                    <h4 className="text-base font-extrabold text-[#0F172A]">{current.name}</h4>
                    <p className="text-xs font-semibold text-amber-600">{current.role}</p>
                    <p className="text-xs text-slate-500 font-medium">{current.organization}</p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 hover:bg-[#0F172A] hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-slate-400">
                    {currentIndex + 1} / {filteredTestimonials.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 hover:bg-[#0F172A] hover:text-white transition-colors flex items-center justify-center shadow-2xs"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
