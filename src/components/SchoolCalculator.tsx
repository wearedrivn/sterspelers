import React, { useState } from 'react';
import { Calculator, Users, Clock, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SchoolCalculatorProps {
  onOpenContactWithDetails: (details: string) => void;
}

export const SchoolCalculator: React.FC<SchoolCalculatorProps> = ({ onOpenContactWithDetails }) => {
  const [pupils, setPupils] = useState<number>(250);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [serviceType, setServiceType] = useState<'buitenspelen' | 'tso' | 'combi'>('combi');

  // Calculation Logic
  const ratio = serviceType === 'tso' ? 25 : 30;
  const recommendedSupervisors = Math.max(2, Math.ceil(pupils / ratio));
  const teacherHoursSavedPerMonth = Math.round(pupils * 0.8 * (daysPerWeek / 5));
  const incidentReduction = Math.min(75, Math.round(55 + (daysPerWeek * 3)));

  const handleApply = () => {
    const details = `Rekentool Uitkomst: ${pupils} leerlingen, ${daysPerWeek} dagen/week, Type: ${serviceType.toUpperCase()} (Advies: ${recommendedSupervisors} begeleiders, ${teacherHoursSavedPerMonth} uur bespaard voor docenten/maand).`;
    onOpenContactWithDetails(details);
  };

  return (
    <section id="rekentool" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4B400]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold border border-slate-700">
                  <Calculator className="w-3.5 h-3.5 text-[#F4B400]" />
                  <span>Interactieve Rekentool voor Schooldirecties</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Bereken de impact voor uw school
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Vul de gegevens van uw school in en bekijk direct het geadviseerde aantal begeleiders, tijdswinst voor leerkrachten en verwachte kwaliteitsstijging.
                </p>
              </div>

              {/* Slider: Number of Pupils */}
              <div className="space-y-3 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="pupils-range" className="text-slate-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F4B400]" />
                    <span>Aantal leerlingen op school</span>
                  </label>
                  <span className="text-xl font-black text-[#F4B400] bg-slate-900 px-3 py-1 rounded-xl">
                    {pupils} leerlingen
                  </span>
                </div>
                <input
                  id="pupils-range"
                  type="range"
                  min="50"
                  max="700"
                  step="10"
                  value={pupils}
                  onChange={(e) => setPupils(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F4B400]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>50 leerlingen</span>
                  <span>350</span>
                  <span>700+ leerlingen</span>
                </div>
              </div>

              {/* Days Per Week Selection */}
              <div className="space-y-3 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60">
                <label className="text-sm font-bold text-slate-200 block">
                  Aantal dagen per week begeleiding
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[3, 4, 5].map((days) => (
                    <button
                      key={days}
                      onClick={() => setDaysPerWeek(days)}
                      className={`py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                        daysPerWeek === days
                          ? 'bg-[#F4B400] text-[#0F172A] shadow-md'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {days} Dagen / week
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Buttons */}
              <div className="space-y-3 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60">
                <label className="text-sm font-bold text-slate-200 block">
                  Gewenste Dienst
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'buitenspelen', label: 'Buitenspelen' },
                    { id: 'tso', label: 'TSO Begeleiding' },
                    { id: 'combi', label: 'Totaalpakket' }
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setServiceType(srv.id as any)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        serviceType === srv.id
                          ? 'bg-[#F4B400] text-[#0F172A]'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Results Column */}
            <div className="lg:col-span-6 bg-slate-800/90 p-8 sm:p-10 rounded-3xl border border-slate-700 space-y-6 shadow-xl">
              
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">
                  Geadviseerd Kwaliteitsprofiel
                </span>
                <h3 className="text-2xl font-black mt-1">
                  Mogelijke Resultaten voor Uw School
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Result 1 */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Geadviseerd Team</span>
                  <div className="text-3xl font-extrabold text-amber-400">
                    {recommendedSupervisors} Begeleiders
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Inclusief 1 vaste Sterspelers coördinator
                  </p>
                </div>

                {/* Result 2 */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Tijdswinst Leerkrachten</span>
                  <div className="text-3xl font-extrabold text-emerald-400">
                    ~{teacherHoursSavedPerMonth} Uur / Maand
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Directe verlichting van de werkdruk
                  </p>
                </div>

                {/* Result 3 */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Incidenten Vermindering</span>
                  <div className="text-3xl font-extrabold text-sky-400">
                    -{incidentReduction}%
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Minder conflicten op het plein
                  </p>
                </div>

                {/* Result 4 */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Bezetting & VOG</span>
                  <div className="text-3xl font-extrabold text-amber-300">
                    100%
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Invalgarantie bij ziekte of uitval
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={handleApply}
                  className="w-full py-4 rounded-full bg-[#F4B400] text-[#0F172A] font-extrabold text-sm hover:bg-amber-400 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Ontvang maatwerk offertes voor {pupils} leerlingen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-slate-400">
                  ✓ Binnen 24 uur een gespecificeerd voorstel in uw mailbox.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
