import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MarqueeSection from './sections/MarqueeSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen relative flex flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}