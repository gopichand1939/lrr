import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingCard = ({ plan }) => {
  return (
    <div 
      className={`rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between ${
        plan.popular 
          ? 'bg-white border-2 border-orange-500 shadow-glow-orange ring-4 ring-orange-100' 
          : 'bg-white border border-amber-200 hover:border-amber-400 shadow-xs'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="orange-gradient-btn text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-extrabold text-slate-900 font-display">{plan.name}</h3>
          {!plan.popular && plan.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
              {plan.badge}
            </span>
          )}
        </div>

        <p className="text-xs text-slate-500 mb-6">{plan.description}</p>

        <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-amber-100">
          <span className="text-4xl font-extrabold text-slate-900 font-display">
            {plan.price === 'Custom' ? 'Contact' : `₹${plan.price}`}
          </span>
          <span className="text-sm font-medium text-slate-500">
            / {plan.period}
          </span>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-800">Included Amenities:</p>
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Link 
          to={plan.ctaLink} 
          className={`w-full py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-all ${
            plan.popular
              ? 'orange-gradient-btn text-white shadow-glow-orange'
              : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
};
