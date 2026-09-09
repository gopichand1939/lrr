import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { readingRoomData } from '../../data/siteData';
import { Toast } from '../../components/Toast/Toast';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastMessage('Thank you for reaching out! Our manager will call you shortly regarding seat availability.');
    setFormState({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-t border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="GET IN TOUCH"
          title="Visit Loukya's Reading Room"
          subtitle="Drop by our Srinagar branch on Rama Talkies Road or give us a call to inspect the reading hall in person."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-200 space-y-6 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 pb-4 border-b border-amber-200 font-display">
                Contact & Location Details
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Address & Landmark:</strong>
                    <p className="text-slate-600 text-xs leading-relaxed">{readingRoomData.address}</p>
                    <p className="text-xs text-orange-600 font-semibold mt-1">Landmark: {readingRoomData.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Mobile Contact:</strong>
                    <a href={`tel:${readingRoomData.phone}`} className="text-orange-600 hover:underline font-bold block">
                      {readingRoomData.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Direct manager line for desk booking & fee details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Operating Hours:</strong>
                    <p className="text-emerald-700 font-bold">{readingRoomData.openingHours}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Open 365 Days a year (Including Sundays & Holidays)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Instagram Channel:</strong>
                    <a 
                      href={readingRoomData.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-orange-600 hover:underline flex items-center gap-1 font-semibold text-xs"
                    >
                      @loukyas_reading_room <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-4 border-t border-amber-200 flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href={readingRoomData.googleMapsUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl orange-gradient-btn text-white font-extrabold text-xs tracking-wider uppercase text-center block shadow-glow-orange"
                >
                  GET DIRECTIONS ↗
                </a>

                <a 
                  href={`tel:${readingRoomData.phone}`} 
                  className="w-full py-3 rounded-xl bg-white hover:bg-amber-100 text-slate-800 font-bold text-xs border border-amber-300 text-center block"
                >
                  CALL NOW
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-amber-200 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-display">Send Quick Inquiry</h3>
              <p className="text-xs text-slate-500 mb-6">Have questions regarding shifts, lockers, or female candidate safety? Drop us a message.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-amber-50/40 border border-amber-200 focus:border-orange-500 text-slate-900 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8688768597"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-amber-50/40 border border-amber-200 focus:border-orange-500 text-slate-900 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-amber-50/40 border border-amber-200 focus:border-orange-500 text-slate-900 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Message / Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your target exam and preferred shift timing..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-amber-50/40 border border-amber-200 focus:border-orange-500 text-slate-900 text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl orange-gradient-btn text-white font-extrabold text-xs tracking-wider uppercase text-center block shadow-glow-orange transition-all cursor-pointer"
                >
                  Submit Inquiry ↗
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </section>
  );
};
