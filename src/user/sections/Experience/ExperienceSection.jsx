import React from 'react';
import { LogIn, Armchair, Brain, Wifi, Coffee, Repeat, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';

export const ExperienceSection = () => {
  const steps = [
    {
      step: '01',
      title: 'ARRIVE ANYTIME',
      desc: 'Seamless 24/7 entry to the study hall at Rama Talkies Road, Visakhapatnam.',
      icon: LogIn,
    },
    {
      step: '02',
      title: 'TAKE YOUR SEAT',
      desc: 'Settle into your dedicated personal partition desk with your assigned locker.',
      icon: Armchair,
    },
    {
      step: '03',
      title: 'FOCUS & STUDY',
      desc: 'Immerse in an uninterrupted, 100% silent AC study hall environment.',
      icon: Brain,
    },
    {
      step: '04',
      title: 'ACCESS WI-FI & POWER',
      desc: 'Connect to high-speed 5G Wi-Fi and power laptop/phone at your personal desk outlet.',
      icon: Wifi,
    },
    {
      step: '05',
      title: 'TAKE FRESH BREAKS',
      desc: 'Refresh with cold RO water or step into the clean break area.',
      icon: Coffee,
    },
    {
      step: '06',
      title: 'RETURN & SUCCEED',
      desc: 'Resume your study routine daily until exam goals are triumphantly achieved.',
      icon: Repeat,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 navy-gradient opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="STUDY WORKFLOW"
          title="The Loukya Daily Study Experience"
          subtitle="A disciplined, effortless daily routine engineered to maximize study hours without fatigue."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-500/80 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-brand-400 font-mono tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-brand-400 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors border border-slate-700">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 tracking-wide group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-600">
                    <ArrowRight className="w-5 h-5 opacity-40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
