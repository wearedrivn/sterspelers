import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/favicon-180.png" alt="Sterspelers logo" width={40} height={40} loading="lazy" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                  Sterspelers<span className="text-[#F4B400]">.</span>
                </span>
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">
                  Professionele Begeleiding
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Sterspelers levert vaste, VOG-gescreende pleincoaches aan basisscholen, schoolbesturen en gemeenten in Zaanstad en Amsterdam.
            </p>

            {/* Certifications Row */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Waarborgen:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                  100% VOG Geverifieerd
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                  Sterspelers Academie
                </span>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <nav aria-label="Diensten" className="space-y-4">
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#F4B400]">
              Diensten
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { name: 'Pleincoach basisschool', href: '/pleincoach' },
                { name: 'Pauzebegeleiding', href: '/pauzebegeleiding' },
                { name: 'TSO & overblijf', href: '/tso-overblijf' },
                { name: 'Rijke Schooldag & clinics', href: '/rijke-schooldag' },
                { name: 'Rekentool voor scholen', href: '/#rekentool' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-amber-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Regio & Sterspelers */}
          <nav aria-label="Regio en informatie" className="space-y-4">
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#F4B400]">
              Regio
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="/zaanstad" className="hover:text-amber-300 transition-colors">Pleincoach Zaanstad</a>
              </li>
              <li>
                <a href="/amsterdam" className="hover:text-amber-300 transition-colors">Pleincoach Amsterdam</a>
              </li>
            </ul>
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#F4B400] pt-2">
              Sterspelers
            </p>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="/" className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="/#hoe-het-werkt" className="hover:text-amber-300 transition-colors">Werkwijze</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-amber-300 transition-colors">Veelgestelde vragen</a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-amber-300 transition-colors text-left">
                  Contact & kennismaking
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact & Newsletter Column */}
          <div className="space-y-4">
            <p className="text-sm font-extrabold uppercase tracking-wider text-[#F4B400]">
              Contact & Locaties
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4B400] shrink-0" />
                <a href="mailto:info@sterspelers.nl" className="hover:underline">info@sterspelers.nl</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4B400] shrink-0" />
                <a href="tel:+31752340345" className="hover:underline">075 234 0345</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/31752340345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp ons
                </a>
              </div>
            </div>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-300 block mb-2">
                Onderwijsnieuwsbrief:
              </span>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Uw e-mailadres"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-l-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#F4B400] text-[#0F172A] font-bold text-xs rounded-r-xl hover:bg-amber-400 shrink-0"
                  >
                    OK
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Bedankt voor uw aanmelding!
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sterspelers V.O.F. Alle rechten voorbehouden.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie-instellingen</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
