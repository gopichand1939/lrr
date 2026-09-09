import React from 'react';
import { Play, Heart, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  const isVideo = item.type === 'video';

  return (
    <div 
      onClick={() => onClick(item)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-amber-200 hover:border-orange-500 transition-all duration-300 shadow-xs hover:shadow-card-warm flex flex-col h-full"
    >
      {/* Top Media Cover Container */}
      <div className="relative h-48 w-full overflow-hidden bg-amber-950 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
          loading="lazy"
          onError={(e) => {
            // Fallback to SVG data URL if any image fails to load
            e.target.onerror = null;
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white orange-gradient-btn px-2.5 py-1 rounded-full shadow-md">
            <Instagram className="w-3 h-3" />
            <span>{isVideo ? 'REEL 🎥' : 'POST 📸'}</span>
          </span>

          {isVideo && (
            <span className="text-[10px] font-bold text-white bg-amber-950/80 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-xs">
              {item.duration}
            </span>
          )}
        </div>

        {/* Center Play Button for Videos */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full orange-gradient-btn text-white flex items-center justify-center shadow-glow-orange transform group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 stroke-[3] translate-x-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Card Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white border-t border-amber-100">
        <div>
          <h4 className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors font-display line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-normal leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-amber-100 text-xs text-slate-500 font-semibold">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-rose-500">
              <Heart className="w-3.5 h-3.5 fill-rose-500" /> {item.likes}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <MessageCircle className="w-3.5 h-3.5" /> {item.comments}
            </span>
          </div>
          <span className="text-orange-600 flex items-center gap-1 font-extrabold group-hover:underline text-xs">
            View <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
