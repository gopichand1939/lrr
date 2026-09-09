import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Calendar, MapPin, BookOpen, Armchair, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../../shared/components/Card';
import { Button } from '../../shared/components/Button';
import { Modal } from '../../shared/components/Modal';
import { readingRoomData } from '../data/siteData';
import { shiftTimings } from '../data/pricing';

export const RegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    dob: '',
    address: '',
    occupation: 'UPSC Civil Services',
    preferredPlan: searchParams.get('plan') || 'premium',
    preferredShift: 'full',
    preferredSeat: searchParams.get('seat') || 'Desk 04',
    joiningDate: new Date().toISOString().split('T')[0],
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.joiningDate) newErrors.joiningDate = 'Joining date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const randomRef = `LRR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(randomRef);
      setSuccessModalOpen(true);
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            CANDIDATE DESK RESERVATION
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reserve Your Study Seat at Loukya
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
            Fill out the form below to lock your preferred study desk at our Srinagar, Rama Talkies Road branch.
          </p>
        </div>

        {/* Main Form Card */}
        <Card className="p-6 sm:p-10 border-slate-200 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Candidate Personal Info */}
            <div>
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-100">
                <User className="w-5 h-5 text-brand-600" />
                <h3 className="text-lg font-bold text-slate-900">1. Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Kumar"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-colors ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1 font-medium">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 8688768597"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-colors ${
                      errors.mobileNumber ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                    }`}
                  />
                  {errors.mobileNumber && <p className="text-xs text-rose-600 mt-1 font-medium">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@gmail.com"
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm transition-colors ${
                      errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Residential Address (City/Local Area)
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. MVP Colony, Visakhapatnam"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                />
              </div>
            </div>

            {/* Section 2: Study Profile & Exam Goal */}
            <div>
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-100">
                <BookOpen className="w-5 h-5 text-brand-600" />
                <h3 className="text-lg font-bold text-slate-900">2. Study Profile & Target Exam</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Occupation / Exam Preparing For *
                  </label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                  >
                    <option value="UPSC Civil Services">UPSC Civil Services</option>
                    <option value="APPSC Group 1 & 2">APPSC Group 1 & 2</option>
                    <option value="GATE / ESE">GATE / ESE Engineering</option>
                    <option value="Banking & Insurance (IBPS/SBI)">Banking & Insurance (IBPS/SBI)</option>
                    <option value="SSC (CGL/CHSL)">SSC (CGL/CHSL)</option>
                    <option value="CA / CS / CMA Aspirant">CA / CS / CMA Aspirant</option>
                    <option value="Medical / NEET PG">Medical / NEET PG</option>
                    <option value="Software / IT Professional">Software / IT Professional</option>
                    <option value="College Student / Other">College Student / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Expected Joining Date *
                  </label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${
                      errors.joiningDate ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'
                    }`}
                  />
                  {errors.joiningDate && <p className="text-xs text-rose-600 mt-1 font-medium">{errors.joiningDate}</p>}
                </div>
              </div>
            </div>

            {/* Section 3: Desk & Plan Preferences */}
            <div>
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-100">
                <Armchair className="w-5 h-5 text-brand-600" />
                <h3 className="text-lg font-bold text-slate-900">3. Membership Plan & Desk Preference</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Fee Plan
                  </label>
                  <select
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white font-semibold text-brand-700"
                  >
                    <option value="standard">Standard Plan (₹1,500 / month)</option>
                    <option value="premium">Premium AC Plan (₹2,000 / month)</option>
                    <option value="flexible">Flexible Shift (Contact Manager)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Shift Timing
                  </label>
                  <select
                    name="preferredShift"
                    value={formData.preferredShift}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                  >
                    {shiftTimings.map((shift) => (
                      <option key={shift.id} value={shift.id}>
                        {shift.name} ({shift.hours})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Seat Number
                  </label>
                  <input
                    type="text"
                    name="preferredSeat"
                    value={formData.preferredSeat}
                    onChange={handleChange}
                    placeholder="e.g. A-12, B-05, P-03"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm font-mono uppercase"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Leave as default or enter from floor map</p>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Notes / Special Requirements (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention if you prefer a window seat, near RO water, female focus hall, etc..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm resize-none"
                />
              </div>
            </div>

            {/* Submission CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero deposit required today. Pay desk fee upon branch visit.</span>
              </div>

              <Button type="submit" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Submit Registration
              </Button>
            </div>

          </form>
        </Card>

      </div>

      {/* Success Confirmation Modal */}
      <Modal
        isOpen={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          navigate('/');
        }}
        title="Registration Received!"
        subtitle={`Booking Reference: ${bookingRef}`}
      >
        <div className="space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Welcome to Loukya's Reading Room!
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Your desk reservation request has been successfully registered.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Candidate Name:</span>
              <strong className="text-slate-900">{formData.fullName}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Contact Number:</span>
              <strong className="text-slate-900">{formData.mobileNumber}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Selected Desk:</span>
              <strong className="text-brand-600 font-mono">{formData.preferredSeat}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Selected Plan:</span>
              <strong className="text-slate-900 capitalize">{formData.preferredPlan} Plan</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Joining Date:</span>
              <strong className="text-slate-900">{formData.joiningDate}</strong>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200">
              <span className="text-slate-500">Branch Address:</span>
              <strong className="text-slate-900 text-right">Rama Talkies Road, Visakhapatnam</strong>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Our reading room manager will contact you at <strong className="text-slate-900">{formData.mobileNumber}</strong> within 1 hour to complete seat assignment and key handover.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={() => navigate('/seats')}>
              View Available Seats
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
