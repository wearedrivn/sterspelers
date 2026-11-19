import React from 'react';
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Users, Clock } from 'lucide-react';
import { ContentPageData, findPage } from '../data/pages';
import { CtaSection } from '../components/CtaSection';

interface ContentPageProps {
  page: ContentPageData;
  onOpenContact: (role?: string, details?: string) => void;
}

export const ContentPage: React.FC<ContentPageProps> = ({ page, onOpenContact }) => {
  const related = page.related
    .map((path) => findPage(path))
    .filter((p): p is ContentPageData => Boolean(p));

  return (
    <>
      {/* Intro */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Kruimelpad" className="text-xs font-semibold text-slate-500 mb-6">
            <ol className="flex items-center gap-1.5">
              <li>
                <a href="/" className="hover:text-[#0F172A]">Home</a>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li aria-current="page" className="text-slate-700">{page.navLabel}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-[#F4B400]" />
                <span>{page.eyebrow}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
                {page.h1}
              </h1>
              {page.intro.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onOpenContact('Schooldirecteur', `Interesse via pagina: ${page.navLabel}`)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F172A] text-white font-semibold text-sm shadow-lg hover:bg-slate-800 transition-colors"
                >
                  <span>Plan een gratis kennismaking</span>
                  <ArrowRight className="w-4 h-4 text-[#F4B400]" />
                </button>
                <a
                  href="tel:+31752340345"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 text-[#0F172A] font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>075 234 0345</span>
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-semibold text-slate-600">
                <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#F4B400]" />VOG-gescreend</li>
                <li className="flex items-center gap-2"><Users className="w-4 h-4 text-[#F4B400]" />Vaste begeleiders</li>
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#F4B400]" />Vervanging binnen 60 minuten</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <img
                src={page.image}
                alt={page.imageAlt}
                width={1000}
                height={746}
                loading="eager"
                className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lopende tekst */}
      <section className="py-16 md:py-20 bg-[#F8F9FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {page.sections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 pt-1">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 text-[#0F172A]" />
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections?.map((sub) => (
                <div key={sub.heading} className="space-y-2 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">{sub.heading}</h3>
                  {sub.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {page.faq.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-8">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {page.faq.map((f) => (
                <div key={f.question} className="p-6 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-[#0F172A]">{f.question}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interne links */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F8F9FB]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-6">Lees ook</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <li key={p.path}>
                  <a
                    href={p.path}
                    className="group block h-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <span className="flex items-center justify-between font-bold text-[#0F172A]">
                      {p.navLabel}
                      <ArrowRight className="w-4 h-4 text-[#F4B400] group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="block text-sm text-slate-600 mt-2 leading-relaxed">{p.teaser}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/"
                  className="group block h-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <span className="flex items-center justify-between font-bold text-[#0F172A]">
                    Sterspelers home
                    <ArrowRight className="w-4 h-4 text-[#F4B400] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="block text-sm text-slate-600 mt-2 leading-relaxed">
                    Alles over onze pleincoaches, werkwijze en de rekentool voor jouw school.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      )}

      <CtaSection
        onOpenContact={() => onOpenContact('Schooldirecteur', `Interesse via pagina: ${page.navLabel}`)}
        title={page.ctaTitle}
        text={page.ctaText}
      />
    </>
  );
};
