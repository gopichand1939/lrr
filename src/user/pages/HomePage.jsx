import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
