import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, Building, Users, Sparkles, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  initialDetails?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'Schooldirecteur',
  initialDetails = ''
}) => {
  const [role, setRole] = useState(initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [pupilsCount, setPupilsCount] = useState('150-300');
  const [servicePreference, setServicePreference] = useState('Buitenspelen & TSO');
  const [notes, setNotes] = useState(initialDetails);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialRole) setRole(initialRole);
    if (initialDetails) setNotes(initialDetails);
  }, [initialRole, initialDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        
        {/* Modal Top Header */}
        <div className="bg-[#0F172A] text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B400]" />
              <span>Vrijblijvende Brochure & Adviesgesprek</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Ontvang maatwerk informatie voor uw school
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Vul onderstaande gegevens in en wij sturen u binnen 24 uur onze uitgebreide informatiemap en adviesvoorstel toe.
            </p>
          </div>
        </div>

        {/* Modal Body Form */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-700" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-[#0F172A]">
                  Aanvraag Succesvol Ontvangen!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Bedankt {name}. Onze onderwijsadviseur neemt binnen 24 uur persoonlijk contact met u op. De informatiemap voor <strong>{schoolName || 'uw school'}</strong> is naar {email} verstuurd.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 rounded-full bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
                >
                  Sluiten & Terug naar Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Role Selection Tabs */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Ik ben werkzaam als:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Schooldirecteur',
                    'Schoolbestuurder',
                    'Gemeente / Beleid',
                    'Ouder / MR-Lid',
                    'Overig'
                  ].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        role === r
                          ? 'bg-[#0F172A] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="input-name" className="text-xs font-bold text-slate-700">
                    Naam & Achternaam *
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="bijv. Margreet van de Berg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="input-email" className="text-xs font-bold text-slate-700">
                    Zakelijk E-mailadres *
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="m.vandeberg@school.nl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="input-phone" className="text-xs font-bold text-slate-700">
                    Telefoonnummer *
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="06 - 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {/* School Name */}
                <div className="space-y-1">
                  <label htmlFor="input-school" className="text-xs font-bold text-slate-700">
                    Naam van School / Organisatie
                  </label>
                  <input
                    id="input-school"
                    type="text"
                    placeholder="Basisschool De Zevenster"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label htmlFor="input-city" className="text-xs font-bold text-slate-700">
                    Plaats / Gemeente
                  </label>
                  <input
                    id="input-city"
                    type="text"
                    placeholder="Utrecht"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  />
                </div>

                {/* Pupils Count */}
                <div className="space-y-1">
                  <label htmlFor="input-pupils" className="text-xs font-bold text-slate-700">
                    Aantal Leerlingen
                  </label>
                  <select
                    id="input-pupils"
                    value={pupilsCount}
                    onChange={(e) => setPupilsCount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                  >
                    <option value="< 150">&lt; 150 leerlingen</option>
                    <option value="150-300">150 - 300 leerlingen</option>
                    <option value="300-500">300 - 500 leerlingen</option>
                    <option value="500+">500+ leerlingen</option>
                  </select>
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-1">
                <label htmlFor="input-service" className="text-xs font-bold text-slate-700">
                  Interesse in Dienst:
                </label>
                <select
                  id="input-service"
                  value={servicePreference}
                  onChange={(e) => setServicePreference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                >
                  <option value="Buitenspelen & TSO">Actief Buitenspelen & TSO Begeleiding</option>
                  <option value="Alleen Buitenspelen">Alleen Spelbegeleiding op het schoolplein</option>
                  <option value="Alleen TSO">Alleen TSO Kinderbegeleiding</option>
                  <option value="Na-schoolse Clinics">Na-schoolse Sport & Spel Clinics</option>
                  <option value="Adviesgesprek">Vrijblijvende Audit op locatie</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1">
                <label htmlFor="input-notes" className="text-xs font-bold text-slate-700">
                  Aanvullende Wensen of Vragen
                </label>
                <textarea
                  id="input-notes"
                  rows={3}
                  placeholder="Typ hier eventuele specifieke wensen, gewenste startdatum of vragen..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#F4B400]" />
                  <span>Geen verplichtingen. Uw data is 100% veilig.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0F172A] text-white font-extrabold text-sm hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#F4B400]" />
                  <span>Verstuur Aanvraag</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
