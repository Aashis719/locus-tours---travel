
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ExperienceShowcase from '../components/ExperienceShowcase';
import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FlightBookingSection from '@/components/FlightBookingSection';

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
