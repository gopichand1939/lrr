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
    <div className="py-12 sm:py-16 bg-slate-950 text-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation & Header */}
        <div className="mb-8 flex items-center justify-between">
          <Button to="/" variant="ghost" size="sm" icon={ArrowLeft} className="text-slate-300 hover:text-white">
            Back to Home
          </Button>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Visakhapatnam Reading Room Floor Map
          </span>
        </div>

        <SectionHeading
          badge="SEAT MANAGEMENT PREVIEW"
          title="Complete Reading Room Seat Availability Grid"
          subtitle="Explore all 36 dedicated desks across Central AC Hall, Silent Focus Hall, and Premium Cabins at Loukya's Reading Room."
          dark={true}
        />

        {/* Top Summary Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block">{seatStats.total}</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">Total Desks</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-300 block">{seatStats.occupied}</span>
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-sm backdrop-blur-md">
          {/* Zone Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Zones:</span>
            {seatStats.zones.map((zone) => (
              <button
                key={zone.key}
                onClick={() => setActiveZone(zone.key)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeZone === zone.key
                    ? 'bg-orange-500 text-white shadow-glow-orange font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
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
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                statusFilter === 'all' ? 'bg-slate-800 text-white border-slate-700' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              All Desks
            </button>
            <button
              onClick={() => setStatusFilter('available')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                statusFilter === 'available' ? 'bg-emerald-950 text-emerald-300 border-emerald-500/60' : 'bg-slate-950 text-emerald-500/70 border-slate-800 hover:border-emerald-800'
              }`}
            >
              Available ({seatStats.available})
            </button>
            <button
              onClick={() => setStatusFilter('occupied')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                statusFilter === 'occupied' ? 'bg-indigo-950 text-indigo-300 border-indigo-700/60' : 'bg-slate-950 text-indigo-400/70 border-slate-800 hover:border-indigo-800'
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
