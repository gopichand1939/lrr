import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 orange-banner-gradient text-white relative overflow-hidden shadow-2xl">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-400/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-amber-100 text-xs font-extrabold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Limited Desks Available for This Month</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Ready to Reserve Your Study Space?
          </h2>

          <p className="text-base sm:text-lg text-amber-100 leading-relaxed font-normal">
            Choose your preferred seat and start studying in a focused, 24/7 climate-controlled, professional environment in Visakhapatnam.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-orange-700 hover:bg-amber-100 font-extrabold text-base tracking-wider uppercase shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3]" />
            </Link>

            <Link
              to="/seats"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/40 hover:bg-white/10 text-white font-extrabold text-base transition-all flex items-center justify-center gap-2"
            >
              <span>CHECK SEATS</span>
              <ArrowUpRight className="w-5 h-5 text-amber-200" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-amber-100">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> Instant Online Confirmation</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> Zero Security Deposit Required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-amber-300" /> 24/7 Access Included</span>
          </div>

        </div>
      </div>
    </section>
  );
};
