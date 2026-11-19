import React from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { SchoolCalculator } from '../components/SchoolCalculator';
import { Faq } from '../components/Faq';
import { CtaSection } from '../components/CtaSection';

// Zet op true zodra er echte reviews in TESTIMONIALS staan.
const SHOW_TESTIMONIALS = false;

interface HomePageProps {
  onOpenContact: (role?: string, details?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => (
  <>
    <Hero onOpenContact={onOpenContact} />
    <Statistics />
    <Services onOpenContact={onOpenContact} />
    <WhyUs />
    <HowItWorks onOpenContact={() => onOpenContact('Schooldirecteur')} />
    <SchoolCalculator
      onOpenContactWithDetails={(details) => onOpenContact('Schooldirecteur', details)}
    />
    {SHOW_TESTIMONIALS && <Testimonials />}
    <Faq onOpenContact={() => onOpenContact('Schooldirecteur')} />
    <CtaSection onOpenContact={() => onOpenContact('Schooldirecteur')} />
  </>
);
