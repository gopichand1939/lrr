import { 
  Armchair, 
  Wifi, 
  Wind, 
  Zap, 
  ShieldCheck, 
  Droplet, 
  Plug, 
  VolumeX, 
  Lock, 
  Clock 
} from 'lucide-react';

export const facilitiesData = [
  {
    id: 'desk',
    icon: Armchair,
    title: 'Personal Study Desk',
    description: 'Individual dedicated workspace with high wooden privacy partition panels for 100% focused study.',
    tag: 'Dedicated'
  },
  {
    id: 'wifi',
    icon: Wifi,
    title: 'High-Speed 5G Wi-Fi',
    description: 'Ultra-fast dual-band Wi-Fi connection for uninterrupted video lectures, online test series, and downloads.',
    tag: 'High Speed'
  },
  {
    id: 'ac',
    icon: Wind,
    title: 'Air Conditioned Halls',
    description: 'Climate-controlled study halls maintaining a pleasant and comfortable temperature all year round.',
    tag: 'Climate Control'
  },
  {
    id: 'power',
    icon: Zap,
    title: '24/7 Power Backup',
    description: 'Heavy-duty automatic generator backup ensuring continuous lighting and power without interruption.',
    tag: 'Uninterrupted'
  },
  {
    id: 'cctv',
    icon: ShieldCheck,
    title: '24/7 CCTV Security',
    description: 'Full HD IP camera surveillance throughout halls, entry points, and corridors for candidate safety.',
    tag: 'Monitored'
  },
  {
    id: 'water',
    icon: Droplet,
    title: 'Purified RO Water',
    description: 'Multi-stage UV+RO purified cold & normal drinking water station available round the clock.',
    tag: 'Hygienic'
  },
  {
    id: 'charging',
    icon: Plug,
    title: 'Individual Power Sockets',
    description: 'Dedicated 5A electrical power point at every individual desk to keep laptops and phones charged.',
    tag: 'At Every Desk'
  },
  {
    id: 'chair',
    icon: Armchair,
    title: 'Ergonomic Seating',
    description: 'Premium height-adjustable mesh chairs designed to support posture during long 12+ hour study sessions.',
    tag: 'Posture Support'
  },
  {
    id: 'silent',
    icon: VolumeX,
    title: 'Strict Silent Zone',
    description: 'Zero-tolerance noise policy strictly enforced to guarantee a peaceful, ambient learning environment.',
    tag: 'Quiet Atmosphere'
  },
  {
    id: 'lockers',
    icon: Lock,
    title: 'Personal Storage Lockers',
    description: 'Lockable personal storage cubicles to safely store books, bags, and personal study belongings.',
    tag: 'Secure Storage'
  }
];
