import React from 'react';
import { ShieldCheck, VolumeX, Armchair, Clock, Sparkles, MapPin, Zap, UserCheck } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: VolumeX,
      title: 'Peaceful & Silent Atmosphere',
      desc: 'Strict zero-tolerance noise policy enforced to maintain pristine concentration for every candidate.'
    },
    {
      icon: Armchair,
      title: 'Dedicated Personal Desks',
      desc: 'Your assigned seat belongs exclusively to you. No daily desk-hunting or seat displacement.'
    },
    {
      icon: Clock,
      title: '24/7 Unrestricted Access',
      desc: 'Study according to your personal biological clock — early morning sprints or late-night sessions.'
    },
    {
      icon: UserCheck,
      title: 'Professional Management',
      desc: 'On-site staff available to quickly assist with Wi-Fi issues, cleanliness, or desk needs.'
    },
    {
      icon: Sparkles,
      title: 'Clean & Hygienic Premises',
      desc: 'Regular daily cleaning, sanitized desks, clean restrooms, and well-maintained study spaces.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Safe Environment',
      desc: 'Round-the-clock HD CCTV camera monitoring ensures safety for female and male aspirants alike.'
    },
    {
      icon: Zap,
      title: '100% Power Generator Backup',
      desc: 'Instant automatic generator backup so light, AC, and Wi-Fi stay on even during local power cuts.'
    },
    {
      icon: MapPin,
      title: 'Prime Visakhapatnam Location',
      desc: 'Conveniently located at Rama Talkies Road, Srinagar — easily accessible with nearby food & transit.'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="WHY CHOOSE LOUKYA"
          title="Built for Candidates Who Cannot Compromise"
          subtitle="Discover why top rankers in UPSC, GATE, Banking, and SSC choose Loukya's Reading Room in Visakhapatnam."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 mb-4 border border-slate-800">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-accent-cyan transition-colors mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
