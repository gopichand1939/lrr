import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { readingRoomData } from '../../data/siteData';
import { imageAssets } from '../../assets/images/imageAssets';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-t border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="ABOUT LOUKYA"
          title="More Than Just a Place to Study"
          subtitle="Designed with meticulous attention to silence, comfort, and student ergonomics — providing the perfect launchpad for your competitive exam success."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Interior Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-amber-200 group bg-slate-900">
              <img
                src={imageAssets.readingHall}
                alt="Loukya's Reading Room Main Hall Visakhapatnam"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 shadow-xl border border-amber-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl orange-gradient-btn text-white flex items-center justify-center font-extrabold text-xl shrink-0 shadow-md">
                    24/7
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base font-display">Round-the-Clock Operational Access</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Located at Rama Talkies Road, Srinagar, Visakhapatnam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Value Narrative & Target Audience Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                An Ecosystem Built Specifically for Serious Exam Preparation
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Preparing for competitive examinations requires sustained focus, zero distractions, and an inspiring environment surrounded by like-minded aspirants.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Loukya's Reading Room in Visakhapatnam, we provide dedicated wooden partition desks, ergonomic mesh chairs, climate-controlled AC halls, 24/7 power generator backup, and high-speed Wi-Fi to ensure your study routine never suffers an interruption.
              </p>
            </div>

            {/* Target Audience List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {readingRoomData.targetAudiences.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 hover:border-orange-400 transition-colors">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1">
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
