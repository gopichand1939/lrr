import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { imageAssets } from '../../assets/images/imageAssets';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-24 bg-slate-950 text-white overflow-hidden">
      
      {/* FULL-BLEED HD HERO BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={imageAssets.hero}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80';
          }}
          alt="Loukya's Reading Room 24/7 Interior Visakhapatnam"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Sleek Dark Vignette Mask for Readable Text Without Hiding Background Photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-2xl space-y-5 sm:space-y-6 text-left">
          
          {/* Subtle Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>24/7 Quiet Study Hall • Vizag</span>
          </div>

          {/* Clean Marketing Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-display drop-shadow-md">
            Your Dedicated Space to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Focus, Study &amp; Succeed.
            </span>
          </h1>

          {/* Simple Clean Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal drop-shadow-xs max-w-xl">
            A quiet, fully air-conditioned 24/7 study environment in Visakhapatnam designed for competitive exam aspirants, GATE/UPSC candidates, and working professionals.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              to="/register"
              className="px-7 py-3.5 rounded-xl orange-gradient-btn text-white font-extrabold text-sm tracking-wider uppercase shadow-glow-orange transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>BOOK YOUR SEAT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/seats"
              className="px-7 py-3.5 rounded-xl border border-white/30 hover:border-white/70 bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-sm backdrop-blur-xs transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Available Seats</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Minimal Key Points Row */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High-Speed Wi-Fi
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AC Reading Hall
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Personal Charging Desk
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Power Backup
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
