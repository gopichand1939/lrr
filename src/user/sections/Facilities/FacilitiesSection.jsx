import React from 'react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { FacilityCard } from '../../components/FacilityCard/FacilityCard';
import { facilitiesData } from '../../data/facilities';

export const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-24 bg-amber-50/50 text-slate-900 border-t border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="WORLD-CLASS AMENITIES"
          title="Designed for Long, Productive Study Hours"
          subtitle="Every facility at Loukya Reading Room is thoughtfully selected to maximize candidate productivity, comfort, and focus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

      </div>
    </section>
  );
};
