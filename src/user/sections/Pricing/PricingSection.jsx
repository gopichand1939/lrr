import React from 'react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { PricingCard } from '../../components/PricingCard/PricingCard';
import { pricingPlans } from '../../data/pricing';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-amber-50/40 text-slate-900 border-t border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="TRANSPARENT PRICING"
          title="Simple, Affordable Monthly Membership Fees"
          subtitle="Choose the study plan that fits your preparation routine. No hidden security deposits or unexpected extra charges."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          <p>* Prices are subject to seat availability. Fees are billed monthly. Discounts available for 3-month and 6-month upfront exam pass bookings.</p>
        </div>

      </div>
    </section>
  );
};
