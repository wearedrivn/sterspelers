import React from 'react';
import { ArrowRight, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-400/20 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 text-amber-400 text-xs font-bold border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
              <span>Vrijblijvende Kennismaking</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Klaar voor een energiek, veilig en ontspannen pauzeklimaat?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Laat ons u laten zien hoe we uw leerkrachten ontlasten en de speelvreugde verhogen. Vraag vandaag nog onze informatiemap aan of plan een adviesgesprek op uw school.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400]" />
                <span>Gratis adviesgesprek op locatie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400]" />
                <span>Maatwerk voorstel binnen 24 uur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400]" />
                <span>Geen administratieve rompslomp</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4B400] text-[#0F172A] font-extrabold text-base hover:bg-amber-400 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group active:scale-95"
              >
                <span>Vraag Vrijblijvende Brochure Aan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:0851234567"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-base transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#F4B400]" />
                <span>085 - 123 4567</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Liever direct mailen? Stuur een bericht naar{' '}
              <a href="mailto:info@sterspelers.nl" className="text-amber-300 underline">
                info@sterspelers.nl
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
