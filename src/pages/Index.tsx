
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ExperienceShowcase from '../components/ExperienceShowcase';
import AboutSection from '../components/AboutSection';

import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FlightBookingSection from '@/components/FlightBookingSection';
// import ServicesSection from '../components/ServicesSection'; // Uncomment if you want to use the ServicesSection
const Index = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />
      <ExperienceShowcase />
      {/* <ServicesSection /> */}
      <FlightBookingSection/>
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
