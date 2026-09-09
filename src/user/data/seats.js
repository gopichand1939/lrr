// Generate 36 static seats numbered 1 to 36 for visual floor map

const generateSeats = () => {
  const seats = [];

  // Available seats (8 total)
  const availableSeatNumbers = new Set([4, 11, 15, 19, 24, 27, 30, 35]);

  // Reserved seats (3 total)
  const reservedSeatNumbers = new Set([7, 21, 32]);

  for (let i = 1; i <= 36; i++) {
    const numStr = i < 10 ? `0${i}` : `${i}`;
    
    let hall = 'Main Central AC Hall';
    let zoneKey = 'A';
    let type = 'Standard';
    let price = '₹1,500 / mo';

    if (i >= 16 && i <= 27) {
      hall = 'Silent Focus Hall';
      zoneKey = 'B';
      type = 'Focus';
      price = '₹1,500 / mo';
    } else if (i >= 28) {
      hall = 'Premium Solo Cabins';
      zoneKey = 'P';
      type = 'Premium';
      price = '₹2,000 / mo';
    }

    let status = 'occupied';
    if (availableSeatNumbers.has(i)) {
      status = 'available';
    } else if (reservedSeatNumbers.has(i)) {
      status = 'reserved';
    }

    seats.push({
      id: `SEAT-${numStr}`,
      code: `Desk ${numStr}`,
      seatNumber: i,
      zone: hall,
      zoneKey: zoneKey,
      type: type,
      status: status, // 'available' | 'occupied' | 'reserved'
      features: [
        'Personal LED Desk Light',
        'Laptop Charging Socket',
        type === 'Premium' ? 'Lockable Cabinet & Cushion Chair' : 'High Privacy Wooden Partition',
        'Ergonomic Swivel Chair'
      ],
      price: price
    });
  }

  return seats;
};

export const seatsData = generateSeats();

export const seatStats = {
  total: 36,
  occupied: 25,
  available: 8,
  reserved: 3,
  zones: [
    { key: 'ALL', name: 'All Desks (1–36)' },
    { key: 'A', name: 'Main Central AC Hall (Desks 01–15)' },
    { key: 'B', name: 'Silent Focus Hall (Desks 16–27)' },
    { key: 'P', name: 'Premium Solo Cabins (Desks 28–36)' },
  ]
};
