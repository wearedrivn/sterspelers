import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { FAQS } from '../data/mockData';

interface FaqProps {
  onOpenContact: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'scholen' | 'begeleiders' | 'ouders'>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#F8F9FB] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Veelgestelde Vragen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Antwoord op al uw vragen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Heeft u vragen over onze werkwijze, tarieven of pedagogische aanpak? Vind hier direct uw antwoord.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Zoek een vraag of trefwoord..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A] shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Alle Vragen' },
              { id: 'scholen', label: 'Voor Scholen & Besturen' },
              { id: 'begeleiders', label: 'Over Begeleiders' },
              { id: 'ouders', label: 'Voor Ouders' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F172A] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-amber-100 text-[#0F172A]' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/60 mt-2">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 text-center rounded-2xl border border-slate-200 space-y-2">
              <p className="text-slate-600 font-medium">Geen vragen gevonden voor deze zoekopdracht.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-amber-700 font-bold underline"
              >
                Wis zoekfilters
              </button>
            </div>
          )}
        </div>

        {/* Unanswered Question CTA */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="text-lg font-bold text-[#0F172A]">
            Staat uw vraag er niet tussen?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Onze onderwijsadviseurs staan voor u klaar om alle specifieke vragen direct te beantwoorden.
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Stel uw vraag aan ons team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
