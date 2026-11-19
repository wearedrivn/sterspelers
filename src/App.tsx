import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingCta } from './components/FloatingCta';
import { HomePage } from './pages/HomePage';
import { ContentPage } from './pages/ContentPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HOME_ROUTE, resolveRoute } from './seo/routes';

interface AppProps {
  /** Huidig pad; komt bij het prerenderen van de server en in de browser van window.location. */
  path: string;
}

export default function App({ path }: AppProps) {
  const route = resolveRoute(path);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState('Schooldirecteur');
  const [modalDetails, setModalDetails] = useState('');

  const handleOpenContact = (role?: string, details?: string) => {
    if (role) setModalRole(role);
    if (details) setModalDetails(details);
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
    setModalDetails('');
  };

  let page: React.ReactNode;
  if (route === HOME_ROUTE) page = <HomePage onOpenContact={handleOpenContact} />;
  else if (route.page) page = <ContentPage page={route.page} onOpenContact={handleOpenContact} />;
  else page = <NotFoundPage />;

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#F4B400] selection:text-[#0F172A]">
      <Navbar onOpenContact={handleOpenContact} />

      <main>{page}</main>

      <Footer onOpenContact={() => handleOpenContact('Schooldirecteur')} />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        initialRole={modalRole}
        initialDetails={modalDetails}
      />

      <FloatingCta onOpenContact={() => handleOpenContact('Schooldirecteur')} />
    </div>
  );
}
