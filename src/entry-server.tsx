// Server-entry voor het prerenderen van alle routes naar statische HTML (zie scripts/prerender.mjs).
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { buildHead } from './seo/head';
import { NOT_FOUND_ROUTE, ROUTES, RouteMeta, absoluteUrl } from './seo/routes';

export { ROUTES, NOT_FOUND_ROUTE, absoluteUrl };

export function render(route: RouteMeta) {
  const html = renderToString(
    <StrictMode>
      <App path={route.path} />
    </StrictMode>,
  );
  return { html, head: buildHead(route) };
}
