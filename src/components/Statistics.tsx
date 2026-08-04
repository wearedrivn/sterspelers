import React from 'react';
import { School, Smile, Trophy, Star, ShieldCheck, TrendingUp, Zap, Users } from 'lucide-react';
import { STATS } from '../data/mockData';

export const Statistics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'School':
        return <School className="w-6 h-6 text-[#0F172A]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#0F172A]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#0F172A]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#0F172A] fill-[#F4B400]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#0F172A]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#0F172A]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0F172A]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-950 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Waar Wij Voor Staan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Onze belofte aan elke school
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We bouwen aan een veilige, beweegrijke en plezierige schoolomgeving — met een persoonlijke aanpak en korte lijnen.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F4B400] transition-colors duration-300" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-100/60 transition-colors">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                  Onze belofte
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight group-hover:text-[#0F172A]">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-slate-900 leading-snug">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Guarantee Banner */}
        <div className="mt-12 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B400]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-1 text-center md:text-left relative z-10">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Gegarandeerd Kwaliteitskader
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Klaar om het pauzeklimaat op uw school te transformeren?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Onze audit brengt binnen 1 week in kaart hoe we uw leerkrachten ontlasten en de speelvreugde verhogen.
            </p>
          </div>

          <a
            href="#rekentool"
            className="whitespace-nowrap px-6 py-3.5 rounded-full bg-[#F4B400] text-[#0F172A] font-bold text-sm hover:bg-amber-400 transition-colors shadow-md relative z-10"
          >
            Bereken Effect voor Uw School →
          </a>
        </div>

      </div>
    </section>
  );
};
