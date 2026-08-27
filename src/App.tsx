import React from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './sections/footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#D7E2EA] selection:bg-[#B600A8] selection:text-white overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}