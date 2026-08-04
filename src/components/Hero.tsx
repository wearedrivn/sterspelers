import React from 'react';
import { ChevronRight, ShieldCheck, Star, Users, CheckCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE, TRUST_PARTNERS } from '../data/mockData';

interface HeroProps {
  onOpenContact: (role?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-slate-100/80 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#F4B400] animate-pulse" />
            <span className="text-xs font-semibold text-slate-800 tracking-wide">
              Dé Partner voor Scholen & Besturen in Nederland
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
            <span>Persoonlijke & Snelle Aanpak</span>
          </div>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
            Professionele Pauzebegeleiding voor een{' '}
            <span className="relative inline-block text-[#0F172A] bg-gradient-to-r from-amber-200/80 via-amber-100/60 to-amber-200/80 bg-no-repeat bg-[length:100%_35%] bg-bottom px-1">
              Veilig & Energiek
            </span>{' '}
            Schoolplein
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Sterspelers ontzorgt schoolbesturen en leerkrachten met ervaren sport- en TSO-begeleiders. Een doordacht pauzeklimaat waar ieder kind telt.
          </p>

          {/* Target Audience Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Schooldirecties', 'Schoolbesturen', 'Gemeenten', 'Ouders'].map((role, idx) => (
              <button
                key={idx}
                onClick={() => onOpenContact(role)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#0F172A] transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#F4B400]" />
                <span>Voor {role}</span>
              </button>
            ))}
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0F172A] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
            >
              <span>Vraag Vrijblijvend Advies Aan</span>
              <div className="w-7 h-7 rounded-full bg-[#F4B400] text-[#0F172A] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            <a
              href="#diensten"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200/80 text-[#0F172A] font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Bekijk Onze Diensten</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F4B400]" />
              <span>100% VOG-Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F4B400]" />
              <span>Vaste, Persoonlijke Begeleiders</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F4B400]" />
              <span>Gegarandeerde Bezetting</span>
            </div>
          </div>
        </div>

        {/* Full-width Lifestyle Image Feature */}
        <div className="mt-12 md:mt-16 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 bg-slate-900 group">
            
            <img
              src={HERO_IMAGE}
              alt="Kinderen spelen buiten op schoolplein onder begeleiding van Sterspelers"
              referrerPolicy="no-referrer"
              className="w-full h-[380px] sm:h-[480px] md:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />

            {/* Floating Image Badge - Bottom Left */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Pauzeklimaat in Actie
                </span>
                <span className="text-xs text-slate-500 font-medium">Utrecht & Amsterdam</span>
              </div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                “Met georganiseerde spelzones en vaste begeleiders daalt het aantal incidenten met meer dan 60%.”
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Direct inzetbaar op uw basisschool</span>
              </div>
            </div>

            {/* Floating Badge - Top Right */}
            <div className="hidden sm:flex absolute top-6 right-6 bg-[#0F172A]/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl border border-slate-700/60 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4B400] text-[#0F172A] flex items-center justify-center font-bold text-lg">
                ★
              </div>
              <div>
                <div className="text-sm font-bold">VOG-Gecertificeerd</div>
                <div className="text-xs text-slate-300">Veilig & betrouwbaar team</div>
              </div>
            </div>
          </div>

          {/* Trust Partner Logos Bar below image */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Vertrouwd door vooraanstaande besturen & gemeenten:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-80">
              {TRUST_PARTNERS.map((partner, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold text-xs md:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400]"></span>
                  <span>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
