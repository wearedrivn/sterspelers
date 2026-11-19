import React from 'react';
import { ArrowRight, Home } from 'lucide-react';
import { SERVICE_PAGES } from '../data/pages';

export const NotFoundPage: React.FC = () => {
  const services = SERVICE_PAGES();
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Foutcode 404</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Deze pagina bestaat niet (meer)
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          De link die je volgde klopt niet, of de pagina is verplaatst. Ga terug naar de homepage of
          bekijk wat Sterspelers voor jouw school kan doen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            <Home className="w-4 h-4 text-[#F4B400]" />
            <span>Naar de homepage</span>
          </a>
          <a
            href="/#diensten"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-[#0F172A] font-semibold text-sm hover:bg-slate-200 transition-colors"
          >
            <span>Bekijk onze diensten</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        {services.length > 0 && (
          <div className="pt-10 text-left">
            <h2 className="text-xl font-extrabold text-[#0F172A] mb-4 text-center">Onze diensten</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((p) => (
                <li key={p.path}>
                  <a
                    href={p.path}
                    className="block p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all"
                  >
                    <span className="block font-bold text-[#0F172A]">{p.navLabel}</span>
                    <span className="block text-sm text-slate-600 mt-1">{p.teaser}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
