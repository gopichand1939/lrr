# Loukya's Reading Room 24/7 Management System — Phase 1

> **Phase 1 Deliverable**: Premium, fully responsive static public website for **Loukya's Reading Room 24/7** (Rama Talkies Road, Visakhapatnam, AP).

---

## 🚀 Quick Start (Local Development)

```bash
cd reading-room-management
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## 📁 Project Architecture & Clean Modular Structure

```text
reading-room-management/
│
├── public/
│   ├── favicon.svg
│   └── index.html
│
├── src/
│   │
│   ├── user/                   # Public Candidate / User Website Module
│   │   ├── assets/             # Photorealistic reading room image visualizers
│   │   ├── components/         # Navbar, Footer, FacilityCard, PricingCard, SeatCard, GalleryCard, Toast
│   │   ├── constants/          # Brand theme and visual configuration
│   │   ├── data/               # Centralized static data (siteData, facilities, pricing, gallery, seats)
│   │   ├── layouts/            # PublicLayout with responsive header & footer
│   │   ├── pages/              # HomePage, RegistrationPage, SeatsPage, NotFoundPage
│   │   ├── sections/           # Hero, About, Facilities, Experience, SeatAvailability, Gallery, WhyChooseUs, Pricing, CTA, Contact
│   │   └── styles/             # Custom utility styles
│   │
│   ├── admin/                  # Phase 2 Placeholder Isolation
│   │   └── README.md           # Exclusively reserved for Phase 2 Admin Dashboard
│   │
│   ├── shared/                 # Reusable UI Primitives & Utilities
│   │   ├── components/         # Button, Badge, Card, Modal, SectionHeading
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Helper utilities & formatters
│   │   └── constants/          # Global application constants
│   │
│   ├── App.jsx                 # React Router routing table
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Tailwind CSS base and theme directives
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + custom design tokens (Deep Navy, Royal Blue, Cyan accent, Warm Amber)
- **Routing**: React Router DOM (`/`, `/register`, `/seats`, `/*`)
- **Icons**: Lucide React icons (`lucide-react`)
- **Assets**: High-resolution photorealistic graphics generated specifically for Loukya Reading Room

---

## 📌 Phase 1 Features Implemented

1. **Hero Section**:
   - Headline: *"Your Perfect Space to Focus, Study & Succeed."*
   - Live-looking static availability card: **120 Total | 102 Occupied | 18 Available**
   - High resolution photorealistic study hall hero imagery with trust indicators.

2. **Loukya Reading Room Real-World Branding**:
   - Address: *48-2-1, First Floor, Rama Talkies Road, Srinagar, Visakhapatnam, AP 530016*
   - Landmark: *Near Reddy Hospital & Sai Baba Temple, Beside Meghana Ladies Hostel*
   - Direct Phone: *+91 86887 68597*
   - Timings: *24/7 Round the clock*
   - Direct links to Instagram page (`/loukyas_reading_room`) & Google Maps directions.

3. **Facilities Section**:
   - 10 core amenities with Lucide icons (Personal Desk, High-Speed 5G Wi-Fi, AC, 24/7 Power Backup, CCTV, RO Water, Individual Sockets, Ergonomic Seating, Silent Atmosphere, Personal Lockers).

4. **Candidate Registration (`/register`)**:
   - Complete candidate registration UI (Personal details, exam profile, preferred plan, shift, seat number, joining date, notes).
   - Client-side validation with polished success modal.

5. **Seat Availability Floor Map (`/seats`)**:
   - Interactive 120-seat grid preview categorized into Hall A, Hall B, Hall C, and Premium Cabins.
   - Status indicators: Available, Occupied, Reserved.
   - Clicking seat opens Desk Details modal with direct booking navigation.

6. **Gallery Lightbox**:
   - Filterable categories (All, Main Hall, Individual Desks, Premium Cabins, Reception, Facilities) with interactive image view modal.

7. **Pricing Plans**:
   - Standard Plan (₹1,500/mo), Premium AC Plan (₹2,000/mo - MOST POPULAR), and Flexible Shift options.

---

## 🛑 Phase 2 (Future Backend & Admin Integration)

As instructed, Phase 1 contains **0 backend code, 0 database queries, and 0 payment gateways**.
The frontend architecture in `src/user/data/` is strictly structured so that `fetch()` API calls can replace static data seamlessly in Phase 2.
