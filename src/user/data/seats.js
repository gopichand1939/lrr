// Generate 36 static seats with detailed properties for visual floor map

const generateSeats = () => {
  const seats = [];
  const zones = [
    { prefix: 'A', hall: 'Main Central AC Hall', count: 15, type: 'Standard' },
    { prefix: 'B', hall: 'Silent Focus Hall', count: 12, type: 'Focus' },
    { prefix: 'P', hall: 'Premium Solo Cabins', count: 9, type: 'Premium' },
  ];

  // Specific 8 available seats for static preview match
  const availableSeatCodes = new Set([
    'A-04', 'A-11', 'A-15',
    'B-03', 'B-08', 'B-12',
    'P-02', 'P-07'
  ]);

  // Reserved seats
  const reservedSeatCodes = new Set([
    'A-07', 'B-05', 'P-04'
  ]);

  zones.forEach(zone => {
    for (let i = 1; i <= zone.count; i++) {
      const num = i < 10 ? `0${i}` : `${i}`;
      const code = `${zone.prefix}-${num}`;
      
      let status = 'occupied';
      if (availableSeatCodes.has(code)) {
        status = 'available';
      } else if (reservedSeatCodes.has(code)) {
        status = 'reserved';
      }

      seats.push({
        id: code,
        code: code,
        zone: zone.hall,
        zoneKey: zone.prefix,
        type: zone.type,
        status: status, // 'available' | 'occupied' | 'reserved'
        features: [
          'Personal LED Desk Light',
          'Laptop Charging Socket',
          zone.type === 'Premium' ? 'Lockable Cabinet & Cushion Chair' : 'High Privacy Wooden Partition',
          'Ergonomic Swivel Chair'
        ],
        price: zone.type === 'Premium' ? '₹2,000 / mo' : '₹1,500 / mo'
      });
    }
  });

  return seats;
};

export const seatsData = generateSeats();

export const seatStats = {
  total: 36,
  occupied: 25,
  available: 8,
  reserved: 3,
  zones: [
    { key: 'ALL', name: 'All Desks (36)' },
    { key: 'A', name: 'Main Central AC Hall (15)' },
    { key: 'B', name: 'Silent Focus Hall (12)' },
    { key: 'P', name: 'Premium Solo Cabins (9)' },
  ]
};
