import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Sparkles, Check } from 'lucide-react';
import { VALUES } from '../data/mockData';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0F172A]" />;
      case 'Award':
        return <Award className="w-7 h-7 text-[#0F172A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#0F172A]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-[#0F172A]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#0F172A]" />;
    }
  };

  return (
    <section id="waarom-ons" className="py-20 md:py-32 bg-[#F8F9FB] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Onze Beloftes & Pijlers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Waarom scholen kiezen voor Sterspelers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Geen losse krachten of ingewikkelde contracten, maar een volwaardige partner die de kwaliteit van de schooldag geborgd verhoogt.
          </p>
        </div>

        {/* 4 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100/70 flex items-center justify-center group-hover:bg-[#F4B400] transition-colors duration-300 shadow-2xs">
                    {getIcon(val.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                    {val.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-600">
                    {val.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {val.description}
                </p>

                {/* Bullet Points */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {val.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 text-slate-600 text-xs font-semibold flex items-center gap-1 group-hover:text-[#0F172A]">
                <span>100% Geborgd Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner Footer */}
        <div className="mt-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#0F172A]" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#0F172A]">
                Erkend Pedagogisch & Sportief Kwaliteitskader
              </h4>
              <p className="text-xs text-slate-500">
                Onze medewerkers volgen jaarlijks bijscholing aan de Sterspelers Academie.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-600">Certificeringen:</span>
            <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full border border-slate-200">
              VOG Geverifieerd
            </span>
            <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full border border-slate-200">
              Kinder-EHBO
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
