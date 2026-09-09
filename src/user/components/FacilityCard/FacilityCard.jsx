import React from 'react';

export const FacilityCard = ({ facility }) => {
  const Icon = facility.icon;

  return (
    <div className="p-6 rounded-2xl bg-white border border-amber-200/80 hover:border-orange-400 hover:shadow-card-warm transition-all duration-300 group flex flex-col justify-between h-full shadow-xs">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white flex items-center justify-center transition-all duration-300 border border-orange-200">
            <Icon className="w-6 h-6" />
          </div>
          {facility.tag && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              {facility.tag}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2 font-display">
          {facility.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {facility.description}
        </p>
      </div>
    </div>
  );
};
