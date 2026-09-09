import React from 'react';
import { Armchair, CheckCircle2, Lock, Clock } from 'lucide-react';

export const SeatCard = ({ seat, onSelect }) => {
  const isAvailable = seat.status === 'available';
  const isOccupied = seat.status === 'occupied';
  const isReserved = seat.status === 'reserved';

  const statusStyles = {
    available: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 hover:bg-emerald-900/90 hover:border-emerald-400 hover:shadow-glow-cyan cursor-pointer shadow-lg shadow-emerald-950/40',
    occupied: 'bg-slate-900/90 text-indigo-200 border-slate-800 cursor-pointer hover:bg-slate-800/90 hover:border-indigo-500/40 shadow-sm',
    reserved: 'bg-amber-950/80 text-amber-300 border-amber-500/60 cursor-pointer hover:bg-amber-900/90 hover:border-amber-400 shadow-lg shadow-amber-950/40',
  };

  return (
    <div
      onClick={() => onSelect(seat)}
      className={`p-3.5 rounded-2xl border transition-all duration-200 text-center relative group flex flex-col items-center justify-between min-h-[115px] ${statusStyles[seat.status]}`}
    >
      <div className="flex items-center justify-between w-full mb-1">
        <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
          isAvailable ? 'text-emerald-400' : isReserved ? 'text-amber-400' : 'text-indigo-300/80'
        }`}>{seat.type}</span>
        {isAvailable && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-glow-cyan"></span>}
        {isOccupied && <Lock className="w-3.5 h-3.5 text-indigo-400/80" />}
        {isReserved && <Clock className="w-3.5 h-3.5 text-amber-400" />}
      </div>

      <div className="my-1 flex flex-col items-center">
        <Armchair className={`w-7 h-7 mb-1 transition-transform group-hover:scale-110 ${
          isAvailable ? 'text-emerald-400' : isReserved ? 'text-amber-400' : 'text-indigo-300'
        }`} />
        <span className="text-base font-black tracking-tight font-display text-white">{seat.code}</span>
      </div>

      <div className="w-full pt-1.5 text-[10px] font-extrabold uppercase tracking-wider border-t border-white/10">
        {isAvailable ? (
          <span className="text-emerald-400 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Available
          </span>
        ) : isOccupied ? (
          <span className="text-indigo-300/90 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-indigo-400" /> Occupied
          </span>
        ) : (
          <span className="text-amber-400 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" /> Reserved
          </span>
        )}
      </div>
    </div>
  );
};
