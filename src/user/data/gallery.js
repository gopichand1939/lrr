import { imageAssets } from '../assets/images/imageAssets';

export const galleryCategories = [
  { id: 'all', name: 'All Media' },
  { id: 'reels', name: 'Instagram Reels & Videos 🎥' },
  { id: 'hall', name: 'Main Reading Hall 🏛️' },
  { id: 'desks', name: 'Individual Cubicles 🪑' },
  { id: 'facilities', name: 'Facilities & Lockers 💧' },
  { id: 'community', name: 'Student Aspirants 🎓' }
];

export const galleryItems = [
  {
    id: 1,
    category: 'reels',
    type: 'video',
    title: '24/7 Night Owl Focus Session — Reels',
    description: 'A glimpse into the quiet late-night study atmosphere at Loukya Reading Room, Rama Talkies Road, Visakhapatnam.',
    image: imageAssets.reelThumb,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '1.2k',
    comments: '142',
    duration: '0:45',
    featured: true
  },
  {
    id: 2,
    category: 'hall',
    type: 'photo',
    title: 'Main Central AC Reading Hall',
    description: 'Spacious, climate-controlled reading hall featuring high privacy partition desks and bright LED ceiling lighting.',
    image: imageAssets.galleryMainHall,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '854',
    comments: '64',
    featured: true
  },
  {
    id: 3,
    category: 'desks',
    type: 'photo',
    title: 'Dedicated Individual Study Desk',
    description: 'Every desk comes with high wooden privacy walls, personal LED desk light, and 5A laptop charging socket.',
    image: imageAssets.galleryIndividualDesk,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '930',
    comments: '88',
    featured: true
  },
  {
    id: 4,
    category: 'reels',
    type: 'video',
    title: 'Aspirants Exam Preparation Sprint 🎥',
    description: 'UPSC, APPSC & GATE candidates sharing their experience preparing at Loukya 24/7 quiet study hall.',
    image: imageAssets.studentAspirants,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '2.4k',
    comments: '310',
    duration: '1:12',
    featured: true
  },
  {
    id: 5,
    category: 'desks',
    type: 'photo',
    title: 'Premium Solo Executive Cabin Desk',
    description: 'Extra spacious desk with sound-dampening acoustic partitions, lockable drawer, and ergonomic high-back mesh chair.',
    image: imageAssets.premiumCabin,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '720',
    comments: '45',
    featured: true
  },
  {
    id: 6,
    category: 'facilities',
    type: 'photo',
    title: 'RO Drinking Water & Storage Lockers',
    description: 'Multi-stage UV+RO purified drinking water dispenser and personal lockable steel lockers for candidate belongings.',
    image: imageAssets.facilities,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '610',
    comments: '32',
    featured: false
  },
  {
    id: 7,
    category: 'community',
    type: 'photo',
    title: 'Front Reception & Information Desk',
    description: 'Friendly on-site management reception at Srinagar, Rama Talkies Road, Visakhapatnam.',
    image: imageAssets.reception,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '490',
    comments: '29',
    featured: false
  },
  {
    id: 8,
    category: 'community',
    type: 'photo',
    title: 'Focused Candidate Community',
    description: 'Aspirants preparing for competitive exams in a zero-noise, 100% disciplined academic atmosphere.',
    image: imageAssets.hero,
    instagramUrl: 'https://www.instagram.com/loukyas_reading_room/?hl=en',
    likes: '1.1k',
    comments: '95',
    featured: true
  }
];
