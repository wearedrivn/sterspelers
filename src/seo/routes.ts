import { CONTENT_PAGES, ContentPageData } from '../data/pages';

export const SITE_URL = 'https://sterspelers.com';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  page?: ContentPageData;
  noindex?: boolean;
}

export const HOME_ROUTE: RouteMeta = {
  path: '/',
  title: 'Pleincoaches voor basisscholen | Sterspelers',
  description:
    'Vaste, VOG-gescreende pleincoaches voor een veilig en actief schoolplein in Zaanstad en Amsterdam. Ontlast je leerkrachten. Vraag een gratis kennismaking aan.',
};

export const NOT_FOUND_ROUTE: RouteMeta = {
  path: '/404',
  title: 'Pagina niet gevonden | Sterspelers',
  description: 'Deze pagina bestaat niet (meer). Ga terug naar de homepage of bekijk de diensten van Sterspelers.',
  noindex: true,
};

/** Alle indexeerbare routes. Deze lijst voedt ook de sitemap. */
export const ROUTES: RouteMeta[] = [
  HOME_ROUTE,
  ...CONTENT_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    page,
  })),
];

export function normalizePath(pathname: string): string {
  let p = pathname.replace(/\.html$/, '').replace(/\/index$/, '');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p || '/';
}

export function resolveRoute(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  return ROUTES.find((r) => r.path === path) ?? NOT_FOUND_ROUTE;
}

export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
