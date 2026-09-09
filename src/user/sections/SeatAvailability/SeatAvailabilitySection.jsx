import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { SeatCard } from '../../components/SeatCard/SeatCard';
import { seatsData, seatStats } from '../../data/seats';
import { Button } from '../../../shared/components/Button';
import { Modal } from '../../../shared/components/Modal';

export const SeatAvailabilitySection = () => {
  const [activeZone, setActiveZone] = useState('ALL');
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  const filteredSeats = activeZone === 'ALL' 
    ? seatsData.slice(0, 30)
    : seatsData.filter(s => s.zoneKey === activeZone);

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const handleBookSelected = () => {
    if (selectedSeat) {
      const seatCode = selectedSeat.code;
      setSelectedSeat(null);
      navigate(`/register?seat=${seatCode}`);
    }
  };

  return (
    <section id="seats-preview" className="py-24 bg-slate-950 text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="LIVE FLOOR MAP PREVIEW"
          title="Real-Time Seat Availability Preview"
          subtitle="Explore desk layout zones and reserve your preferred study desk. All seat numbers are strictly dedicated to individual candidates."
          dark={true}
        />

        {/* Top Summary Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block font-display">120</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">Total Capacity</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-300 block font-display">102</span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">Occupied</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block font-display">18</span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mt-1">Available Now</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block font-display">5</span>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mt-1">Reserved</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Legend */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
          {/* Zone Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {seatStats.zones.map((zone) => (
              <button
                key={zone.key}
                onClick={() => setActiveZone(zone.key)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeZone === zone.key
                    ? 'bg-accent-cyan text-slate-950 shadow-glow-cyan'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Color Legend */}
          <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-emerald-500"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-slate-700"></span>
              <span>Occupied</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-md bg-amber-500"></span>
              <span>Reserved</span>
            </div>
          </div>
        </div>

        {/* Seat Grid Preview */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 mb-10">
          {filteredSeats.map((seat) => (
            <SeatCard key={seat.id} seat={seat} onSelect={handleSeatClick} />
          ))}
        </div>

        {/* View Full Interactive Seat Layout CTA */}
        <div className="text-center bg-slate-900/80 p-6 rounded-2xl border border-slate-800 max-w-xl mx-auto">
          <p className="text-xs text-slate-400 font-medium mb-3">
            Showing partial layout preview. View all 120 seats across Hall A, Hall B, Hall C & Cabins.
          </p>
          <Button to="/seats" variant="cyan" size="md" icon={ArrowUpRight} iconPosition="right">
            View All 120 Seats & Floor Layout
          </Button>
        </div>

      </div>

      {/* Seat Details Modal */}
      <Modal
        isOpen={!!selectedSeat}
        onClose={() => setSelectedSeat(null)}
        title={selectedSeat ? `Desk ${selectedSeat.code} Details` : ''}
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
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Fee Tier</span>
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
                Close
              </Button>
              {selectedSeat.status === 'available' ? (
                <Button variant="cyan" size="sm" onClick={handleBookSelected}>
                  Book Desk {selectedSeat.code}
                </Button>
              ) : (
                <Button variant="dark" size="sm" disabled>
                  Seat Not Available
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
