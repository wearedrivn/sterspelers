import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import './index.css';

const isDashboard = window.location.pathname.replace(/\/$/, '') === '/dashboard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isDashboard ? <Dashboard /> : <App />}
  </StrictMode>,
);
