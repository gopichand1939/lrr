import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, Play, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { galleryCategories, galleryItems } from '../../data/gallery';
import { GalleryCard } from '../../components/GalleryCard/GalleryCard';
import { Modal } from '../../../shared/components/Modal';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMedia, setActiveMedia] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-amber-50/40 text-slate-900 border-t border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Channel Header Badge Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-600 text-white flex items-center justify-center shadow-md shrink-0">
              <Instagram className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">@loukyas_reading_room</h3>
                <CheckCircle2 className="w-5 h-5 text-orange-600 fill-orange-100" />
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Official Instagram Channel • <strong>736 Posts</strong> • <strong>105 Followers</strong> • Rama Talkies Road, Visakhapatnam
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/loukyas_reading_room/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl orange-gradient-btn text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-glow-orange shrink-0"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <SectionHeading
          badge="INSTAGRAM PHOTO & REELS FEED"
          title="Explore Photos & Videos From Our Branch"
          subtitle="Real-world study hall interior photos, aspirant reel highlights, and facility walkthroughs extracted directly from @loukyas_reading_room."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-extrabold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'orange-gradient-btn text-white shadow-glow-orange'
                  : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              onClick={(selected) => {
                setActiveMedia(selected);
                setIsPlaying(true);
              }} 
            />
          ))}
        </div>

      </div>

      {/* Instagram Media & Reel Video Player Modal */}
      <Modal
        isOpen={!!activeMedia}
        onClose={() => setActiveMedia(null)}
        title={activeMedia?.type === 'video' ? '🎥 Instagram Reel Preview' : '📸 Instagram Photo Post'}
        subtitle="@loukyas_reading_room • Visakhapatnam"
        maxWidth="max-w-3xl"
      >
        {activeMedia && (
          <div className="space-y-6">
            
            {/* Media Canvas / Player View */}
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative group aspect-16/10 flex items-center justify-center">
              <img
                src={activeMedia.image}
                alt={activeMedia.title}
                className="w-full h-full object-contain"
              />

              {activeMedia.type === 'video' && (
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full orange-gradient-btn text-white flex items-center justify-center shadow-glow-orange hover:scale-110 transition-transform cursor-pointer"
                  >
                    {isPlaying ? <Play className="w-8 h-8 stroke-[3] translate-x-0.5" /> : <Play className="w-8 h-8 opacity-60" />}
                  </button>
                </div>
              )}
            </div>

            {/* Post Information & Instagram Controls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {activeMedia.type === 'video' ? 'INSTAGRAM REEL' : 'INSTAGRAM POST'}
                </span>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5 text-rose-500">
                    <Heart className="w-4 h-4 fill-rose-500" /> {activeMedia.likes} Likes
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <MessageCircle className="w-4 h-4" /> {activeMedia.comments} Comments
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-slate-900">{activeMedia.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{activeMedia.description}</p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <a
                href={activeMedia.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl orange-gradient-btn text-white font-bold text-xs flex items-center gap-2 shadow-md hover:opacity-95"
              >
                <Instagram className="w-4 h-4" />
                <span>View Full Post on Instagram ↗</span>
              </a>

              <button
                onClick={() => setActiveMedia(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Close Preview
              </button>
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
};
