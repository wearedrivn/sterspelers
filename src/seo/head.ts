import { FAQS } from '../data/mockData';
import { RouteMeta, SITE_URL, absoluteUrl, HOME_ROUTE } from './routes';

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const AREA_SERVED = [
  { '@type': 'City', name: 'Zaanstad' },
  { '@type': 'City', name: 'Amsterdam' },
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const ldScript = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Sterspelers',
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        email: 'info@sterspelers.nl',
        telephone: '+31752340345',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'info@sterspelers.nl',
          telephone: '+31752340345',
          areaServed: 'NL',
          availableLanguage: 'nl',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': BUSINESS_ID,
        name: 'Sterspelers',
        description:
          'Vaste, VOG-gescreende pleincoaches en pauzebegeleiding voor basisscholen, schoolbesturen en gemeenten in Zaanstad en Amsterdam.',
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        image: OG_IMAGE,
        email: 'info@sterspelers.nl',
        telephone: '+31752340345',
        areaServed: AREA_SERVED,
        parentOrganization: { '@id': ORG_ID },
      },
    ],
  };
}

function faqLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function breadcrumbLd(route: RouteMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: route.page!.navLabel, item: absoluteUrl(route.path) },
    ],
  };
}

function serviceLd(route: RouteMeta) {
  const s = route.page!.service!;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: route.description,
    url: absoluteUrl(route.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: s.areaServed.map((name) => ({ '@type': 'City', name })),
    audience: { '@type': 'EducationalAudience', educationalRole: 'Basisschool' },
  };
}

/** Alle head-tags voor een route, als HTML-string (gebruikt bij het prerenderen). */
export function buildHead(route: RouteMeta): string {
  const url = absoluteUrl(route.path);
  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
  ];
  if (route.noindex) {
    tags.push('<meta name="robots" content="noindex, follow" />');
  } else {
    tags.push(`<link rel="canonical" href="${url}" />`);
  }
  tags.push(
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Sterspelers" />',
    '<meta property="og:locale" content="nl_NL" />',
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    ldScript(organizationLd()),
  );

  if (route === HOME_ROUTE) tags.push(ldScript(faqLd(FAQS)));
  if (route.page) {
    tags.push(ldScript(breadcrumbLd(route)));
    if (route.page.service) tags.push(ldScript(serviceLd(route)));
    if (route.page.faq.length) tags.push(ldScript(faqLd(route.page.faq)));
  }
  return tags.join('\n    ');
}
