// Generate 120 static mock seats with detailed properties for visual floor map

const generateSeats = () => {
  const seats = [];
  const zones = [
    { prefix: 'A', hall: 'Hall A - Standard AC', count: 35, type: 'Standard' },
    { prefix: 'B', hall: 'Hall B - Silent Focus Zone', count: 40, type: 'Focus' },
    { prefix: 'C', hall: 'Hall C - Express Shift Hall', count: 25, type: 'Express' },
    { prefix: 'P', hall: 'Premium Cabins', count: 20, type: 'Premium' },
  ];

  // Specific 18 available seats for static preview match
  const availableSeatCodes = new Set([
    'A-04', 'A-12', 'A-18', 'A-27',
    'B-05', 'B-14', 'B-22', 'B-31', 'B-38',
    'C-02', 'C-09', 'C-15', 'C-21',
    'P-03', 'P-07', 'P-12', 'P-16', 'P-19'
  ]);

  // Reserved seats
  const reservedSeatCodes = new Set([
    'A-09', 'B-10', 'B-29', 'C-08', 'P-05'
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
          'Personal LED Light',
          'Charging Socket',
          zone.type === 'Premium' ? 'Lockable Cabinet' : 'High Partition',
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
  total: 120,
  occupied: 102,
  available: 18,
  reserved: 5,
  zones: [
    { key: 'ALL', name: 'All Zones (120)' },
    { key: 'A', name: 'Hall A - Standard (35)' },
    { key: 'B', name: 'Hall B - Silent Focus (40)' },
    { key: 'C', name: 'Hall C - Express (25)' },
    { key: 'P', name: 'Premium Cabins (20)' },
  ]
};
