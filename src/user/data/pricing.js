export const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard Plan',
    price: '1,500',
    period: 'month',
    badge: 'Essential',
    description: 'Perfect for candidates looking for a dedicated quiet desk with non-AC shift options.',
    popular: false,
    features: [
      'Dedicated Wooden Study Desk',
      'High-Speed 5G Wi-Fi Access',
      'Individual Power Socket & Light',
      'Purified RO Drinking Water',
      '24/7 CCTV Surveillance Security',
      '24/7 Generator Power Backup',
      '12 Hours Fixed Shift Access',
    ],
    ctaText: 'Reserve Standard Desk',
    ctaLink: '/register?plan=standard'
  },
  {
    id: 'premium',
    name: 'Premium AC Plan',
    price: '2,000',
    period: 'month',
    badge: 'MOST POPULAR',
    description: 'Our flagship plan with full 24/7 AC access, ergonomic mesh chair, and personal locker.',
    popular: true,
    features: [
      'Dedicated Premium Desk with Privacy Partition',
      '24/7 Full Air-Conditioned Comfort',
      'Ergonomic Mesh High-Back Chair',
      'Personal Lockable Storage Cabinet',
      'High-Speed 5G Wi-Fi Access',
      'Individual Power Socket at Desk',
      'Purified RO Water (Hot/Cold/Normal)',
      '24/7 Unlimited Round-the-Clock Access'
    ],
    ctaText: 'Reserve Premium Desk',
    ctaLink: '/register?plan=premium'
  },
  {
    id: 'flexible',
    name: 'Flexible Shift Plan',
    price: 'Custom',
    period: 'shift / part-time',
    badge: 'Flexible Shifts',
    description: 'Tailored shift timings for working professionals, night owls, or part-time students.',
    popular: false,
    features: [
      'Morning Shift (6:00 AM – 2:00 PM)',
      'Evening Shift (2:00 PM – 10:00 PM)',
      'Night Shift (10:00 PM – 6:00 AM)',
      'High-Speed Wi-Fi & Charging',
      'AC Study Hall Access During Shift',
      'Ideal for Short-Term Exam Sprints',
      'Custom Flexible Billing Available'
    ],
    ctaText: 'Inquire Flexible Shift',
    ctaLink: '/register?plan=flexible'
  }
];

export const shiftTimings = [
  { id: 'full', name: 'Full Day & Night (24 Hours)', hours: '24/7 Access' },
  { id: 'day', name: 'Day Shift', hours: '6:00 AM – 10:00 PM' },
  { id: 'morning', name: 'Morning Shift', hours: '6:00 AM – 2:00 PM' },
  { id: 'evening', name: 'Evening Shift', hours: '2:00 PM – 10:00 PM' },
  { id: 'night', name: 'Night Owl Shift', hours: '10:00 PM – 6:00 AM' },
];
