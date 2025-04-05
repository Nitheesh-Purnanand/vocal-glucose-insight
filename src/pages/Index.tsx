
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DemoSection from '../components/DemoSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
