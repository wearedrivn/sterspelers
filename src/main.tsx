import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { normalizePath } from './seo/routes';
import './index.css';

const container = document.getElementById('root')!;
const path = normalizePath(window.location.pathname);

if (path === '/dashboard') {
  // Dashboard is alleen client-side (achter login, niet geïndexeerd).
  createRoot(container).render(
    <StrictMode>
      <Dashboard />
    </StrictMode>,
  );
} else {
  const app = (
    <StrictMode>
      <App path={path} />
    </StrictMode>
  );
  // In productie is de HTML vooraf gerenderd: hydrateren. In dev (lege root) gewoon renderen.
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
}
