import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../sections/Hero/HeroSection';
import { AboutSection } from '../sections/About/AboutSection';
import { FacilitiesSection } from '../sections/Facilities/FacilitiesSection';
import { ExperienceSection } from '../sections/Experience/ExperienceSection';
import { SeatAvailabilitySection } from '../sections/SeatAvailability/SeatAvailabilitySection';
import { GallerySection } from '../sections/Gallery/GallerySection';
import { WhyChooseUsSection } from '../sections/WhyChooseUs/WhyChooseUsSection';
import { PricingSection } from '../sections/Pricing/PricingSection';
import { CTASection } from '../sections/CTA/CTASection';
import { ContactSection } from '../sections/Contact/ContactSection';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const elem = document.getElementById(elementId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ExperienceSection />
      <SeatAvailabilitySection />
      <GallerySection />
      <WhyChooseUsSection />
      <PricingSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};
