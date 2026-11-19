// Inhoud van de losse SEO-pagina's (dienstpagina's en lokale pagina's).
// Alles wordt bij de build vooraf gerenderd naar statische HTML.

export interface ContentSubsection {
  heading: string;
  paragraphs: string[];
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: ContentSubsection[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface ContentPageData {
  path: string;
  /** Korte naam voor navigatie, breadcrumbs en interne links. */
  navLabel: string;
  /** Eén zin die in interne linkkaarten wordt getoond. */
  teaser: string;
  kind: 'service' | 'local';
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  faq: PageFaq[];
  service?: {
    name: string;
    serviceType: string;
    areaServed: string[];
  };
  related: string[];
  ctaTitle: string;
  ctaText: string;
}

export const CONTENT_PAGES: ContentPageData[] = [];

export const SERVICE_PAGES = () => CONTENT_PAGES.filter((p) => p.kind === 'service');
export const LOCAL_PAGES = () => CONTENT_PAGES.filter((p) => p.kind === 'local');
export const findPage = (path: string) => CONTENT_PAGES.find((p) => p.path === path);
