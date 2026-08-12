import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Clock, Sparkles, X, HeartHandshake } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenContact: (role?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
                  alt={service.title}
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
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-slate-800 hover:text-[#0F172A] underline underline-offset-4 decoration-amber-400 decoration-2"
                  >
                    Lees volledige specificaties
                  </button>
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

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            
            {/* Header Image */}
            <div className="relative h-56 sm:h-64 bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">
                  {selectedService.subtitle}
                </span>
                <h3 className="text-3xl font-black">{selectedService.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Overzicht</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.details.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase">Doelgroep</span>
                  <span className="text-sm font-bold text-[#0F172A]">{selectedService.details.targetAge}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block uppercase">Kwaliteit & Certificering</span>
                  <span className="text-sm font-bold text-[#0F172A]">{selectedService.details.certification}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Belangrijkste Voordelen</h4>
                <ul className="space-y-2">
                  {selectedService.details.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-[#0F172A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#0F172A]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  Sluiten
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenContact(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
                >
                  Offerte voor {selectedService.title} aanvragen
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
