import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { STEPS } from '../data/mockData';

interface HowItWorksProps {
  onOpenContact: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="hoe-het-werkt" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-950 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
            <span>Stappenplan voor Scholen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            In 3 eenvoudige stappen naar een zorgeloze schoolpauze
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Van de eerste vrijblijvende kennismaking tot de dagelijkse begeleiding op het schoolplein: wij regelen alles.
          </p>
        </div>

        {/* Interactive Step Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-2xl font-black px-3.5 py-1 rounded-xl ${
                        isActive ? 'bg-[#F4B400] text-[#0F172A]' : 'bg-slate-100 text-[#0F172A]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        isActive ? 'bg-slate-800 text-amber-300' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold leading-snug">
                    {step.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/20 flex items-center justify-between text-xs font-bold">
                  <span>{isActive ? 'Bekijk details' : 'Klik voor stappen'}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F4B400]' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Focus Box */}
        <div className="bg-[#F8F9FB] rounded-3xl p-8 md:p-10 border border-slate-200/90 shadow-sm">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 text-left flex-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F4B400]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Fase {STEPS[activeStep].number} in Detail
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                {STEPS[activeStep].title}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed">
                {STEPS[activeStep].description}
              </p>

              <div className="pt-2 space-y-2.5">
                {STEPS[activeStep].details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex flex-col items-center justify-center bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0F172A]">
                <Calendar className="w-6 h-6 text-[#0F172A]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">Doorlooptijd</div>
                <div className="text-xs text-slate-500 font-medium">{STEPS[activeStep].duration} na akkoord</div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full px-6 py-3 rounded-full bg-[#0F172A] text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
              >
                Start met Stap 1 →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
