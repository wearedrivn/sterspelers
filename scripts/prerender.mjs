// Rendert elke route naar statische HTML in dist/, zodat zoekmachines direct volledige tekst zien.
// Draait na `vite build` (client) en `vite build --ssr` (server-entry).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render, ROUTES, NOT_FOUND_ROUTE, absoluteUrl } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const fill = (head, html) =>
  template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);

// /pleincoach -> dist/pleincoach.html (Netlify serveert dit als /pleincoach)
const fileFor = (routePath) => (routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`);

for (const route of [...ROUTES, NOT_FOUND_ROUTE]) {
  const { html, head } = render(route);
  const file = route === NOT_FOUND_ROUTE ? '404.html' : fileFor(route.path);
  fs.writeFileSync(path.join(dist, file), fill(head, html));
  console.log(`prerendered ${route.path.padEnd(18)} -> dist/${file}`);
}

// Dashboard: lege client-side shell, niet indexeren.
fs.writeFileSync(
  path.join(dist, 'dashboard.html'),
  fill('<title>Dashboard | Sterspelers</title>\n    <meta name="robots" content="noindex, nofollow" />', ''),
);

// Sitemap uit dezelfde routelijst, zodat nieuwe pagina's er automatisch in komen.
const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml met ${ROUTES.length} URL's`);

fs.rmSync(ssrDir, { recursive: true, force: true });
