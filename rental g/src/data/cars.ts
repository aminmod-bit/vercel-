export interface Car {
  id: string;
  name: string;
  brand: string;
  category: "Hypercars" | "Premium SUVs" | "Business Elite" | "Convertibles" | "Electric Elite";
  image: string;
  pricePerDay: number; // in USD
  acceleration: string; // 0-100 km/h
  power: string; // hp
  topSpeed: string; // km/h
  transmission: "Automatic" | "Dual-Clutch" | "Single-Speed" | "Manual";
  fuel: "Octane 100" | "Premium Electric" | "Twin-Turbo V8" | "Hybrid V12";
  seats: number;
  featured: boolean;
  colorOptions: string[]; // hex codes for color visualizer if selected
  accentColor: string; // CSS color class or hex
}

export interface RouteExperience {
  id: string;
  name: string;
  location: string;
  distance: string;
  duration: string;
  difficulty: "Scenic Cruise" | "High Speed Pass" | "Off-Road Adventure";
  bgImage: string;
  recommendedCarId: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  carRented: string;
  location: string;
}

export const FLEET_CARS: Car[] = [
  {
    id: "porsche-911",
    name: "911 GT3 RS",
    brand: "Porsche",
    category: "Hypercars",
    image: "https://images.pexels.com/photos/35737376/pexels-photo-35737376.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 850,
    acceleration: "3.2s",
    power: "525 HP",
    topSpeed: "296 km/h",
    transmission: "Dual-Clutch",
    fuel: "Octane 100",
    seats: 2,
    featured: true,
    colorOptions: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#1e1b4b"],
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "g-wagon",
    name: "G63 AMG Brabus",
    brand: "Mercedes-Benz",
    category: "Premium SUVs",
    image: "https://images.pexels.com/photos/20136034/pexels-photo-20136034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 950,
    acceleration: "4.5s",
    power: "800 HP",
    topSpeed: "240 km/h",
    transmission: "Automatic",
    fuel: "Twin-Turbo V8",
    seats: 5,
    featured: true,
    colorOptions: ["#111827", "#374151", "#9ca3af", "#d97706", "#7f1d1d"],
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: "lamborghini-urus",
    name: "Urus Performante",
    brand: "Lamborghini",
    category: "Premium SUVs",
    image: "https://images.pexels.com/photos/31574925/pexels-photo-31574925.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 1100,
    acceleration: "3.3s",
    power: "666 HP",
    topSpeed: "306 km/h",
    transmission: "Automatic",
    fuel: "Twin-Turbo V8",
    seats: 5,
    featured: true,
    colorOptions: ["#eab308", "#15803d", "#dc2626", "#0f172a", "#f97316"],
    accentColor: "from-yellow-400 to-yellow-600"
  },
  {
    id: "tesla-plaid",
    name: "Model S Plaid",
    brand: "Tesla",
    category: "Electric Elite",
    image: "https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 480,
    acceleration: "1.99s",
    power: "1020 HP",
    topSpeed: "322 km/h",
    transmission: "Single-Speed",
    fuel: "Premium Electric",
    seats: 5,
    featured: false,
    colorOptions: ["#991b1b", "#1e3a8a", "#111827", "#ffffff", "#4b5563"],
    accentColor: "from-red-600 to-rose-600"
  },
  {
    id: "aston-martin",
    name: "Vantage Roadster",
    brand: "Aston Martin",
    category: "Convertibles",
    image: "https://images.pexels.com/photos/35849576/pexels-photo-35849576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 720,
    acceleration: "3.7s",
    power: "510 HP",
    topSpeed: "306 km/h",
    transmission: "Automatic",
    fuel: "Twin-Turbo V8",
    seats: 2,
    featured: true,
    colorOptions: ["#064e3b", "#1e293b", "#7f1d1d", "#f59e0b", "#475569"],
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "bmw-m5",
    name: "M5 Competition",
    brand: "BMW",
    category: "Business Elite",
    image: "https://images.pexels.com/photos/31574915/pexels-photo-31574915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pricePerDay: 550,
    acceleration: "3.3s",
    power: "625 HP",
    topSpeed: "305 km/h",
    transmission: "Automatic",
    fuel: "Twin-Turbo V8",
    seats: 5,
    featured: false,
    colorOptions: ["#0f172a", "#1e3a8a", "#6b7280", "#ffffff", "#475569"],
    accentColor: "from-blue-600 to-sky-600"
  }
];

export const ROUTE_EXPERIENCES: RouteExperience[] = [
  {
    id: "monaco-run",
    name: "Monaco Coastal Run",
    location: "French Riviera, Monaco",
    distance: "74 km",
    duration: "2.5 Hours",
    difficulty: "Scenic Cruise",
    bgImage: "https://images.pexels.com/photos/20136034/pexels-photo-20136034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    recommendedCarId: "aston-martin",
    tagline: "Feel the Mediterranean breeze as you weave through iconic hairpin turns and world-famous yacht harbors."
  },
  {
    id: "alpine-pass",
    name: "Alpine High-Pass Overdrive",
    location: "Stelvio Pass, Italy",
    distance: "120 km",
    duration: "4 Hours",
    difficulty: "High Speed Pass",
    bgImage: "https://images.pexels.com/photos/31574915/pexels-photo-31574915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    recommendedCarId: "porsche-911",
    tagline: "Conquer 48 hairpins climbing to 2,757m. A dramatic high-altitude proving ground for active driver feedback."
  },
  {
    id: "dubai-night",
    name: "Dubai Skyline Cruise",
    location: "Sheik Zayed Road, Dubai",
    distance: "45 km",
    duration: "1.5 Hours",
    difficulty: "Scenic Cruise",
    bgImage: "https://images.pexels.com/photos/33804771/pexels-photo-33804771.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    recommendedCarId: "lamborghini-urus",
    tagline: "Glide past gravity-defying skyscrapers, hyper-illuminated boulevards, and premium lifestyle hubs."
  }
];

export const CLIENT_REVIEWS: Testimonial[] = [
  {
    id: "1",
    name: "Maximilian K.",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
    comment: "Simply spectacular. Booked the GT3 RS for my coastal anniversary drive. The zero-deposit option, VIP delivery directly to my jet hangar, and seamless app telemetry was unmatched. Veloce is the future of luxury rentals.",
    rating: 5,
    carRented: "Porsche 911 GT3 RS",
    location: "Zurich, Switzerland"
  },
  {
    id: "2",
    name: "Daria S.",
    role: "Executive Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
    comment: "The Brabus G63 was delivered in immaculate showroom condition with loaded premium additions and pre-cooled cabin. Fast, secure, and professional team. SIXT's luxury standard has a strong rival here.",
    rating: 5,
    carRented: "G63 AMG Brabus",
    location: "St. Moritz, Switzerland"
  },
  {
    id: "3",
    name: "Sarah L.",
    role: "Lifestyle Blogger",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150",
    comment: "Renting the Roadster was so simple. Booking was finalized in 2 minutes, and the dynamic color-visualizer on the site matches the real vehicle perfectly. Customer service answered instantly via Telegram.",
    rating: 5,
    carRented: "Aston Martin Roadster",
    location: "Nice, France"
  }
];

export const LIVE_BOOKING_FEEDS = [
  { name: "Artem S.", action: "reserved a G63 AMG Brabus", duration: "just now", location: "Vienna, Austria" },
  { name: "Michael V.", action: "booked a Porsche 911 GT3 RS", duration: "2 mins ago", location: "Geneva, Switzerland" },
  { name: "Sophia K.", action: "rented a Model S Plaid", duration: "5 mins ago", location: "Munich, Germany" },
  { name: "Andrey P.", action: "reserved an Urus Performante", duration: "8 mins ago", location: "Nice, France" },
  { name: "Nico R.", action: "booked an Aston Martin Vantage", duration: "12 mins ago", location: "Monaco Marina" }
];
