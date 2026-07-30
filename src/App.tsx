import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { SchoolCalculator } from './components/SchoolCalculator';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
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

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#F4B400] selection:text-[#0F172A]">
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 2: Statistics */}
        <Statistics />

        {/* Section 3: Services (Buitenspelen, Kinderbegeleiding, Activiteiten) */}
        <Services onOpenContact={handleOpenContact} />

        {/* Section 4: Why Sterspelers (Veilig, Professioneel, Pedagogisch sterk, Betrouwbaar) */}
        <WhyUs />

        {/* Section 5: How it works (3-step timeline) */}
        <HowItWorks onOpenContact={() => handleOpenContact('Schooldirecteur')} />

        {/* Interactive Impact & Capacity Calculator */}
        <SchoolCalculator
          onOpenContactWithDetails={(details) => handleOpenContact('Schooldirecteur', details)}
        />

        {/* Section 6: Testimonials */}
        <Testimonials />

        {/* Section 7: FAQ */}
        <Faq onOpenContact={() => handleOpenContact('Schooldirecteur')} />

        {/* Section 8: Final CTA */}
        <CtaSection onOpenContact={() => handleOpenContact('Schooldirecteur')} />
      </main>

      {/* Section 9: Footer */}
      <Footer onOpenContact={() => handleOpenContact('Schooldirecteur')} />

      {/* Modal for Brochures & Consultations */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
        initialRole={modalRole}
        initialDetails={modalDetails}
      />

      {/* Floating CTA Button */}
      <FloatingCta onOpenContact={() => handleOpenContact('Schooldirecteur')} />

    </div>
  );
}
