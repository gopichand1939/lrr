import React from 'react';
import { Armchair, CheckCircle2, Lock, Clock } from 'lucide-react';

export const SeatCard = ({ seat, onSelect }) => {
  const isAvailable = seat.status === 'available';
  const isOccupied = seat.status === 'occupied';
  const isReserved = seat.status === 'reserved';

  const statusStyles = {
    available: 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60 hover:bg-emerald-900/80 hover:border-emerald-500 hover:shadow-glow-cyan cursor-pointer',
    occupied: 'bg-slate-900/60 text-slate-500 border-slate-800 cursor-not-allowed opacity-60',
    reserved: 'bg-amber-950/70 text-amber-300 border-amber-700/60 cursor-pointer hover:bg-amber-900/80',
  };

  return (
    <div
      onClick={() => onSelect(seat)}
      className={`p-3 rounded-xl border transition-all duration-200 text-center relative group flex flex-col items-center justify-between ${statusStyles[seat.status]}`}
    >
      <div className="flex items-center justify-between w-full mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">{seat.type}</span>
        {isAvailable && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
        {isOccupied && <Lock className="w-3 h-3 text-slate-500" />}
        {isReserved && <Clock className="w-3 h-3 text-amber-400" />}
      </div>

      <div className="my-1.5 flex flex-col items-center">
        <Armchair className={`w-6 h-6 mb-1 ${
          isAvailable ? 'text-emerald-400' : isReserved ? 'text-amber-400' : 'text-slate-600'
        }`} />
        <span className="text-sm font-extrabold tracking-tight font-display">{seat.code}</span>
      </div>

      <div className="w-full pt-1 text-[10px] font-bold uppercase tracking-wider border-t border-slate-800">
        {isAvailable ? (
          <span className="text-emerald-400 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Available
          </span>
        ) : isOccupied ? (
          <span className="text-slate-500">Occupied</span>
        ) : (
          <span className="text-amber-400">Reserved</span>
        )}
      </div>
    </div>
  );
};
