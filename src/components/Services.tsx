import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface ServicesProps {
  onOpenContact: (role?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  return (
    <section id="diensten" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
              <span>Onze Kerndiensten</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Maatwerk oplossingen voor school & gemeente
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Drie gespecialiseerde pijlers ontworpen voor optimale rust, veiligheid en beweging tijdens en rondom de schooldag.
            </p>
          </div>

          <button
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-amber-600 transition-colors group self-start md:self-auto"
          >
            <span>Vraag maatwerk brochure aan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F4B400]" />
          </button>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_4px_25px_rgba(15,23,42,0.04)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={1000}
                  height={746}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                
                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0F172A] shadow-sm">
                  {service.badge}
                </div>

                {/* Target Audience Pill Bottom Left */}
                <div className="absolute bottom-4 left-4 text-xs font-medium text-slate-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
                  <span>{service.audience}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="pt-3 space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-amber-100 text-[#0F172A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0F172A]" />
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card CTA buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={service.pagePath}
                    className="text-xs font-bold text-slate-800 hover:text-[#0F172A] underline underline-offset-4 decoration-amber-400 decoration-2"
                  >
                    Lees volledige specificaties<span className="sr-only"> over {service.title}</span>
                  </a>
                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    Aanvragen
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
