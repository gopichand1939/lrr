import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { readingRoomData } from '../../data/siteData';
import { Modal } from '../../../shared/components/Modal';

export const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-amber-950 text-amber-100 pt-20 pb-12 border-t border-amber-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-amber-900/80">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-md">
                  <BookOpen className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-white block font-display">
                    {readingRoomData.name}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-orange-400 uppercase">
                    24/7 STUDY HALL • VIZAG
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-200/80 leading-relaxed">
                Visakhapatnam’s top-rated 24/7 quiet reading room designed for UPSC, GATE, Banking, SSC, and medical aspirants seeking 100% focus.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={readingRoomData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-amber-900/80 hover:bg-orange-600 text-amber-100 hover:text-white flex items-center justify-center transition-colors border border-amber-800"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={readingRoomData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-amber-900/80 hover:bg-orange-600 text-amber-100 hover:text-white flex items-center justify-center transition-colors border border-amber-800"
                  aria-label="Google Maps Location"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Quick Links</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/" className="text-amber-200/80 hover:text-orange-400 transition-colors">Home Page</Link></li>
                <li><a href="/#about" className="text-amber-200/80 hover:text-orange-400 transition-colors">About Reading Room</a></li>
                <li><a href="/#facilities" className="text-amber-200/80 hover:text-orange-400 transition-colors">Facilities & Amenities</a></li>
                <li><a href="/#gallery" className="text-amber-200/80 hover:text-orange-400 transition-colors">Visual Photo Gallery</a></li>
                <li><Link to="/seats" className="text-amber-200/80 hover:text-orange-400 transition-colors">Seat Availability Grid</Link></li>
                <li><a href="/#pricing" className="text-amber-200/80 hover:text-orange-400 transition-colors">Monthly Fee Plans</a></li>
                <li><Link to="/register" className="text-orange-400 font-bold transition-colors">Register Candidate Desk ↗</Link></li>
              </ul>
            </div>

            {/* Column 3: Key Amenities */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Key Amenities</h4>
              <ul className="space-y-2.5 text-xs text-amber-200/80">
                <li className="flex items-center gap-2">✓ Central Air Conditioned Halls</li>
                <li className="flex items-center gap-2">✓ High-Speed 5G Wi-Fi</li>
                <li className="flex items-center gap-2">✓ Personal Partition Desks</li>
                <li className="flex items-center gap-2">✓ Ergonomic Mesh Swivel Chairs</li>
                <li className="flex items-center gap-2">✓ 24/7 Power Generator Backup</li>
                <li className="flex items-center gap-2">✓ Individual Lockable Storage</li>
                <li className="flex items-center gap-2">✓ UV+RO Cold Drinking Water</li>
              </ul>
            </div>

            {/* Column 4: Contact Details */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Visit Loukya</h4>
              <div className="space-y-3 text-xs text-amber-200/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{readingRoomData.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`tel:${readingRoomData.phone}`} className="hover:text-white font-bold">{readingRoomData.phone}</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{readingRoomData.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold pt-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{readingRoomData.openingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/70">
            <p>© {new Date().getFullYear()} {readingRoomData.name}. All rights reserved. Visakhapatnam, AP.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => setTermsOpen(true)} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
        subtitle="Loukya's Reading Room - Candidate Data Safety"
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>At Loukya's Reading Room, candidate privacy and security are top priorities.</p>
          <h4 className="font-bold text-slate-900">1. Information We Collect</h4>
          <p>We collect basic candidate details including full name, contact number, email, address, and study preferences exclusively for desk reservation and identity validation.</p>
          <h4 className="font-bold text-slate-900">2. CCTV Monitoring</h4>
          <p>For candidate security, our premise is monitored 24/7 by CCTV cameras. Footage is securely stored and restricted to management personnel only.</p>
          <h4 className="font-bold text-slate-900">3. Data Protection</h4>
          <p>Your contact information is strictly used for study hall communications, payment receipts, and membership updates. We do not sell or share candidate data with third parties.</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Reading Room Rules & Terms"
        subtitle="Maintain a Discipline & Silent Atmosphere"
      >
        <div className="space-y-4 text-sm text-slate-600">
          <h4 className="font-bold text-slate-900">1. Strict Silent Zone Policy</h4>
          <p>Zero noise, loud conversations, or phone calls are permitted inside the reading halls. Mobile phones must remain on silent or vibrate mode at all times.</p>
          <h4 className="font-bold text-slate-900">2. Assigned Desk Usage</h4>
          <p>Candidates must use only their allocated seat number. Swapping seats without prior manager approval is prohibited.</p>
          <h4 className="font-bold text-slate-900">3. Monthly Fee Timings</h4>
          <p>Monthly fees must be paid on or before the due date. Receipts are issued digitally upon fee clearance.</p>
        </div>
      </Modal>
    </>
  );
};
