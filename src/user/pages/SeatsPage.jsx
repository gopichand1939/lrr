import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Armchair, CheckCircle2, Lock, Clock, Filter, ArrowLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../../shared/components/SectionHeading';
import { SeatCard } from '../components/SeatCard/SeatCard';
import { seatsData, seatStats } from '../data/seats';
import { Button } from '../../shared/components/Button';
import { Modal } from '../../shared/components/Modal';

export const SeatsPage = () => {
  const [activeZone, setActiveZone] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSeats = seatsData.filter((seat) => {
    const matchesZone = activeZone === 'ALL' || seat.zoneKey === activeZone;
    const matchesStatus = statusFilter === 'all' || seat.status === statusFilter;
    return matchesZone && matchesStatus;
  });

  const handleBookDesk = () => {
    if (selectedSeat) {
      const code = selectedSeat.code;
      setSelectedSeat(null);
      navigate(`/register?seat=${code}`);
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation & Header */}
        <div className="mb-8 flex items-center justify-between">
          <Button to="/" variant="ghost" size="sm" icon={ArrowLeft}>
            Back to Home
          </Button>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Visakhapatnam Reading Room Floor Map
          </span>
        </div>

        <SectionHeading
          badge="SEAT MANAGEMENT PREVIEW"
          title="Complete Reading Room Seat Availability Grid"
          subtitle="Explore all 36 dedicated desks across Central AC Hall, Silent Focus Hall, and Premium Cabins at Loukya's Reading Room."
        />

        {/* Top Summary Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">{seatStats.total}</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">Total Desks</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-300 block">{seatStats.occupied}</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">Occupied</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block">{seatStats.available}</span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mt-1">Available Now</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block">{seatStats.reserved}</span>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mt-1">Reserved</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          {/* Zone Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Zones:</span>
            {seatStats.zones.map((zone) => (
              <button
                key={zone.key}
                onClick={() => setActiveZone(zone.key)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeZone === zone.key
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Status Filter Selector */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Status:</span>
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
                statusFilter === 'all' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              All Desks
            </button>
            <button
              onClick={() => setStatusFilter('available')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
                statusFilter === 'available' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}
            >
              Available ({seatStats.available})
            </button>
            <button
              onClick={() => setStatusFilter('occupied')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
                statusFilter === 'occupied' ? 'bg-slate-700 text-white border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              Occupied ({seatStats.occupied})
            </button>
          </div>
        </div>

        {/* Seat Grid View */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
          {filteredSeats.map((seat) => (
            <SeatCard key={seat.id} seat={seat} onSelect={(s) => setSelectedSeat(s)} />
          ))}
        </div>

      </div>

      {/* Selected Seat Modal */}
      <Modal
        isOpen={!!selectedSeat}
        onClose={() => setSelectedSeat(null)}
        title={selectedSeat ? `Desk ${selectedSeat.code} Configuration` : ''}
        subtitle={selectedSeat?.zone}
      >
        {selectedSeat && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Status</span>
                <p className="text-lg font-extrabold capitalize text-slate-900 mt-0.5">
                  {selectedSeat.status}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Monthly Plan</span>
                <p className="text-lg font-extrabold text-brand-600 mt-0.5">
                  {selectedSeat.price}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Included Desk Amenities</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {selectedSeat.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setSelectedSeat(null)}>
                Cancel
              </Button>
              {selectedSeat.status === 'available' ? (
                <Button variant="primary" size="sm" onClick={handleBookDesk}>
                  Reserve Desk {selectedSeat.code}
                </Button>
              ) : (
                <Button variant="dark" size="sm" disabled>
                  Desk Currently Occupied
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
