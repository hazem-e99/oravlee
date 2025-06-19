import React, { useState } from 'react';
import HeroSection from '../home/HeroSection';
import ServicesSection from '../home/ServicesSection';
import CoreFeaturesSection from '../home/CoreFeaturesSection';
import KeyBenefitsSection from '../home/KeyBenefitsSection';
import TestimonialsSection from '../home/TestimonialsSection';
import IntegrationSection from '../home/IntegrationSection';
import IndustriesSection from '../home/IndustriesSection';
import SolutionsSection from '../home/SolutionsSection';
import CTASection from '../home/CTASection';
import ContactFormModal from '../common/ContactFormModal';

const HomePage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="bg-secondary-bg">
      <HeroSection onContactClick={handleContactClick} />
      <ServicesSection />
      <CoreFeaturesSection />
      <KeyBenefitsSection />
      <TestimonialsSection />
      <IntegrationSection />
      <IndustriesSection />
      <SolutionsSection />
      <CTASection onContactClick={handleContactClick} />
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactModalClose} 
      />
    </div>
  );
};

export default HomePage;
