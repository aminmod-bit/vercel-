import React, { useState, useEffect } from "react";
import {
  Car as CarIcon,
  Calendar,
  MapPin,
  Clock,
  Gauge,
  Flame,
  Zap,
  Check,
  Shield,
  HelpCircle,
  Award,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Sliders,
  Briefcase,
  Star,
  Compass,
  X,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { FLEET_CARS, ROUTE_EXPERIENCES, CLIENT_REVIEWS, LIVE_BOOKING_FEEDS, Car } from "./data/cars";

export default function App() {
  // Navigation & UI States
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Search Engine Booking Parameters
  const [pickupLoc, setPickupLoc] = useState("Zurich Airport (ZRH)");
  const [returnLoc, setReturnLoc] = useState("Zurich Airport (ZRH)");
  const [pickupDate, setPickupDate] = useState("2026-06-15");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState("2026-06-18");
  const [returnTime, setReturnTime] = useState("10:00");
  const [searchCategory, setSearchCategory] = useState("All");

  // Dynamic Live Booking Feed Simulation State
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [showFeed, setShowFeed] = useState(true);

  // Paint Customizer Visualizer State
  const [customPaint, setCustomPaint] = useState("#ef4444"); // Red default
  const [customWheel, setCustomWheel] = useState("sport"); // sport, aero, platinum
  const [underglow, setUnderglow] = useState(true);
  const [tintLevel, setTintLevel] = useState(50); // percentage tint
  const customizerCarName = "Porsche 911 GT3 RS Special Edition";

  // Route Selector State
  const [selectedRouteId, setSelectedRouteId] = useState(ROUTE_EXPERIENCES[0].id);

  // Checkout Form State
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientLicense, setClientLicense] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Extras Customization States (with price impacts)
  const [extraInsurance, setExtraInsurance] = useState(true); // $45/day
  const [extraGPS, setExtraGPS] = useState(false); // $15/day
  const [extraChauffeur, setExtraChauffeur] = useState(false); // $250/day
  const [extraTrackMode, setExtraTrackMode] = useState(false); // $100/day
  const extraChildSeat = false;

  // FAQ Accordion Toggle Index
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Live currency switcher
  const [currency, setCurrency] = useState<"USD" | "EUR" | "RUB">("USD");
  const currencySymbols = { USD: "$", EUR: "€", RUB: "₽" };
  const currencyRates = { USD: 1, EUR: 0.92, RUB: 89 };

  // Feed simulation timer
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFeed(false);
      setTimeout(() => {
        setCurrentFeedIndex((prev) => (prev + 1) % LIVE_BOOKING_FEEDS.length);
        setShowFeed(true);
      }, 500); // fade out/in effect
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Filter cars based on chosen categories
  const categories = ["All", "Hypercars", "Premium SUVs", "Business Elite", "Convertibles", "Electric Elite"];
  const filteredCars = FLEET_CARS.filter((car) => {
    const catMatch = activeCategory === "All" || car.category === activeCategory;
    const searchMatch = searchCategory === "All" || car.category === searchCategory;
    return catMatch && searchMatch;
  });

  const getPrice = (usdAmount: number) => {
    const rate = currencyRates[currency];
    const raw = usdAmount * rate;
    return `${currencySymbols[currency]}${Math.round(raw).toLocaleString()}`;
  };

  // Duration computation
  const getDaysCount = () => {
    const date1 = new Date(pickupDate);
    const date2 = new Date(returnDate);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  // Total price calculator
  const calculateTotal = (basePrice: number) => {
    const days = getDaysCount();
    let dailyExtras = 0;
    if (extraInsurance) dailyExtras += 45;
    if (extraGPS) dailyExtras += 15;
    if (extraChauffeur) dailyExtras += 250;
    if (extraTrackMode) dailyExtras += 100;
    if (extraChildSeat) dailyExtras += 10;

    return (basePrice + dailyExtras) * days;
  };

  const handleOpenBooking = (car: Car) => {
    setSelectedCar(car);
    setIsBookingOpen(true);
    setBookingSuccess(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) {
      alert("Please fill in all primary fields.");
      return;
    }
    setBookingSuccess(true);
  };

  const triggerScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      
      {/* GLOWING AMBIENT BACKGROUNDS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-orange-600/5 blur-[180px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[2800px] left-10 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* TOP NOTIFICATION HEADER BAR */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-amber-600 text-black py-2.5 px-4 text-center text-xs md:text-sm font-semibold tracking-wide flex justify-center items-center gap-2 overflow-hidden shadow-md">
        <Sparkles className="w-4 h-4 animate-spin-slow" />
        <span>PREMIUM RUSSIAN & EUROPEAN FLEET AVAILABLE NOW WITH 0% SECURITY DEPOSIT — BOOK ONLINE IN 2 MINS</span>
        <button 
          onClick={() => triggerScroll("booking-widget")} 
          className="underline hover:text-white transition ml-2 font-bold focus:outline-none"
        >
          Check Rates
        </button>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-slate-900 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20 transform hover:scale-105 transition duration-300">
              <CarIcon className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="font-extrabold text-2xl tracking-tighter text-white font-syne flex items-center gap-1.5">
                VELOCE<span className="text-orange-500 font-sans">.</span>
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Elite Car Hire</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => triggerScroll("fleet")} className="hover:text-orange-500 transition-colors">Fleet</button>
            <button onClick={() => triggerScroll("customizer")} className="hover:text-orange-500 transition-colors flex items-center gap-1">
              Visualizer <span className="bg-orange-500/10 text-orange-400 px-1.5 py-0.5 rounded text-[10px] font-bold">New</span>
            </button>
            <button onClick={() => triggerScroll("experiences")} className="hover:text-orange-500 transition-colors">Experiences</button>
            <button onClick={() => triggerScroll("benefits")} className="hover:text-orange-500 transition-colors">Our Advantage</button>
            <button onClick={() => triggerScroll("testimonials")} className="hover:text-orange-500 transition-colors">Reviews</button>
            <button onClick={() => triggerScroll("faq")} className="hover:text-orange-500 transition-colors">FAQ</button>
          </nav>

          {/* Quick Controls: Currency Selector & VIP CTA */}
          <div className="flex items-center gap-4">
            {/* Currency switcher dropdown */}
            <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              {(["USD", "EUR", "RUB"] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    currency === curr ? "bg-orange-500 text-slate-950 font-bold shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            <button
              onClick={() => triggerScroll("fleet")}
              className="bg-white hover:bg-orange-500 hover:text-slate-950 text-slate-950 font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-orange-500 group-hover:text-slate-950" />
              <span>Rent Now</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-20 md:py-24 overflow-hidden">
        {/* Abstract grids and neon lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full text-xs text-orange-400 font-semibold tracking-wider uppercase">
                <Flame className="w-4 h-4" />
                <span>Premium Car Hire & VIP Chauffeurs</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-syne text-white">
                UNLIMITED <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">FREEDOM</span>. UNCOMPROMISED LUXURY.
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0">
                Drive legendary sports cars, executive sedans, and high-performance SUVs. Zero security deposit options, custom color configurations, and VIP door-to-door concierge delivery.
              </p>

              {/* Dynamic counters for social proof */}
              <div className="grid grid-cols-3 gap-6 pt-4 max-w-lg mx-auto lg:mx-0 border-t border-slate-900">
                <div>
                  <div className="text-3xl font-extrabold text-white font-syne">140+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Supercars</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-orange-500 font-syne">12K+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Rentals Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white font-syne">4.9★</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Average Rating</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => triggerScroll("booking-widget")}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Instant Rental
                </button>
                <button
                  onClick={() => triggerScroll("customizer")}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sliders className="w-5 h-5 text-orange-500" />
                  <span>Customize Paint</span>
                </button>
              </div>
            </div>

            {/* Hero Right Visual: Elegant car with color customizable element */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Floating active badge element */}
                <div className="absolute -top-4 -left-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl z-20 backdrop-blur-md animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-green-500/20 rounded-xl text-green-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">Available Now</p>
                      <p className="text-sm font-bold text-white">Porsche 911 GT3</p>
                    </div>
                  </div>
                </div>

                {/* Main Hero Car Frame with gold highlight backdrop */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 p-6 border border-slate-800/80 shadow-2xl">
                  {/* Decorative ambient color blur */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-80" />
                  
                  {/* Car Picture */}
                  <img
                    src="https://images.pexels.com/photos/35737376/pexels-photo-35737376.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Premium Rental Sports Car"
                    className="w-full h-56 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700 relative z-10"
                  />
                  
                  <div className="mt-6 space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Track Weapon</span>
                        <h3 className="text-xl font-bold text-white mt-1.5">911 GT3 RS</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Daily Charge</span>
                        <span className="text-2xl font-black text-white">{getPrice(850)}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-900/80">
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">0-100 km/h</span>
                        <span className="text-sm font-bold text-orange-500">3.2s</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">Power</span>
                        <span className="text-sm font-bold text-white">525 HP</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">V-Max</span>
                        <span className="text-sm font-bold text-white">296 km/h</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenBooking(FLEET_CARS[0])}
                      className="w-full bg-slate-900 hover:bg-orange-500 hover:text-slate-950 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Unlock Instant Key</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Absolute background decoration */}
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-amber-600/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING ENGINE CONTAINER */}
      <section id="booking-widget" className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-white font-syne">FIND YOUR CAR</h2>
              <p className="text-xs text-slate-400 mt-1">Real-time availability, guaranteed price matching & zero extra fees.</p>
            </div>
            
            {/* Fast category switcher inside booking card */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-slate-400 self-center mr-2 hidden lg:inline">Filters:</span>
              {["All", "Hypercars", "Premium SUVs", "Electric Elite"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                    searchCategory === cat 
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/40" 
                      : "bg-slate-950 text-slate-400 border border-slate-900 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pick-Up Location */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Pick-Up Station</span>
              </label>
              <div className="relative">
                <select
                  value={pickupLoc}
                  onChange={(e) => setPickupLoc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 appearance-none font-medium"
                >
                  <option>Zurich Airport (ZRH) - VIP Delivery</option>
                  <option>Moscow City (Federation Tower)</option>
                  <option>Monaco Port Yacht Harbor</option>
                  <option>Dubai Marina - Palm Jumeirah</option>
                  <option>Geneva Airport (GVA)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Return Station */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Return Station</span>
              </label>
              <div className="relative">
                <select
                  value={returnLoc}
                  onChange={(e) => setReturnLoc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 appearance-none font-medium"
                >
                  <option>Zurich Airport (ZRH) - VIP Delivery</option>
                  <option>Moscow City (Federation Tower)</option>
                  <option>Monaco Port Yacht Harbor</option>
                  <option>Dubai Marina - Palm Jumeirah</option>
                  <option>Geneva Airport (GVA)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Date Pick-Up */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-500" />
                <span>Pick-Up Date & Time</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-orange-500 font-semibold"
                />
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-orange-500 font-semibold"
                />
              </div>
            </div>

            {/* Date Return */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-500" />
                <span>Return Date & Time</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-orange-500 font-semibold"
                />
                <input
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-orange-500 font-semibold"
                />
              </div>
            </div>

          </form>

          {/* Quick stats on chosen schedule */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-slate-950/60 p-4 rounded-2xl gap-4 border border-slate-900">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-xs">
                Total Rental Period: <strong className="text-orange-500 font-bold">{getDaysCount()} Days</strong>
              </span>
              <span className="text-xs text-slate-500">|</span>
              <span className="text-xs text-slate-400">Unlimited Millage Included</span>
            </div>
            
            <button
              type="button"
              onClick={() => triggerScroll("fleet")}
              className="w-full sm:w-auto bg-orange-500 text-slate-950 hover:bg-orange-600 font-extrabold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Update Match Results ↓
            </button>
          </div>

        </div>
      </section>

      {/* ACTIVE BRAND PARTNERS SHOWCASE */}
      <section className="py-12 border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-6">Our Elite Partners & Automotive Fleet Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">PORSCHE</span>
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">BRABUS</span>
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">LAMBORGHINI</span>
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">TESLA</span>
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">ASTON MARTIN</span>
            <span className="text-slate-300 font-black tracking-widest font-syne text-xl">BENTLEY</span>
          </div>
        </div>
      </section>

      {/* UNUSUAL FEATURE: INTERACTIVE CAR CUSTOMIZER & PAINT PLAYGROUND */}
      <section id="customizer" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <Sliders className="w-4 h-4" />
              <span>Interactive 3D Visualizer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white tracking-tight">
              CUSTOMIZE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SPECIFICATION</span>
            </h2>
            <p className="text-slate-400">
              Interactive simulator to pick custom colors, underglow glow, and tints for your rental model before delivery. Feel what luxury looks like in your configuration.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visualizer Frame */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center relative">
              
              {/* The Car Container */}
              <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-3xl border border-slate-800 p-8 flex items-center justify-center overflow-hidden">
                
                {/* Virtual Neon Platform Grid */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(255,120,0,0.15),transparent_70%)]" />
                <div 
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 rounded-full blur-xl transition-all duration-500" 
                  style={{ 
                    backgroundColor: underglow ? customPaint : 'transparent',
                    opacity: underglow ? 0.75 : 0 
                  }}
                />

                {/* Digital Spec HUD display */}
                <div className="absolute top-6 left-6 text-left">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Visualizer Target</div>
                  <div className="text-lg font-bold text-white tracking-tight">{customizerCarName}</div>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: customPaint }} />
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Active Ambient Specs</span>
                  </div>
                </div>

                {/* Simulated Custom Car - Advanced Vector Graphic */}
                <div className="relative w-full max-w-lg z-10 transition-transform duration-500 transform hover:scale-105">
                  <svg viewBox="0 0 600 250" className="w-full h-auto drop-shadow-2xl">
                    {/* Shadow underneath */}
                    <ellipse cx="300" cy="225" rx="240" ry="15" fill="#000" opacity="0.8" />
                    
                    {/* Background Neon Aura Lines */}
                    {underglow && (
                      <g filter="url(#glow)">
                        <path d="M 50 220 L 550 220" stroke={customPaint} strokeWidth="12" strokeLinecap="round" opacity="0.8" />
                        <ellipse cx="300" cy="223" rx="200" ry="8" fill={customPaint} opacity="0.6" />
                      </g>
                    )}

                    {/* Car Body Outer Shell */}
                    <path
                      d="M 50 210 C 60 210, 80 205, 90 190 C 100 170, 110 145, 130 115 C 160 85, 230 65, 300 65 C 380 65, 430 85, 470 110 C 510 135, 520 160, 540 185 C 555 205, 565 210, 575 210 C 585 210, 590 195, 590 185 C 590 155, 555 125, 520 100 C 475 70, 420 50, 310 50 C 220 50, 150 70, 100 110 C 65 140, 40 170, 40 195 C 40 205, 45 210, 50 210 Z"
                      fill={customPaint}
                      className="transition-colors duration-500"
                    />

                    {/* Rear Spoiler Wings */}
                    <path d="M 40 140 L 25 110 L 15 110 L 20 140 Z" fill="#111" />
                    <path d="M 22 110 L 80 112 L 78 120 L 15 118 Z" fill="#222" />

                    {/* Window Glass & Custom Tint Levels */}
                    <path
                      d="M 210 110 C 230 85, 280 80, 310 80 C 370 80, 410 95, 435 110 Z"
                      fill="#000"
                      fillOpacity={(tintLevel / 100) + 0.1}
                      className="transition-all duration-300"
                    />
                    {/* Driver Seat Visual inside */}
                    <circle cx="280" cy="98" r="10" fill="#333" opacity="0.7" />

                    {/* Body Side Lines & Air Intakes */}
                    <path d="M 150 175 C 220 165, 300 165, 420 175" stroke="#111" strokeWidth="4" fill="none" />
                    <path d="M 120 190 C 200 185, 320 185, 460 190" stroke="#111" strokeWidth="3" fill="none" />
                    {/* Air Scoop */}
                    <path d="M 115 145 C 135 145, 145 155, 135 170 C 120 170, 110 160, 115 145 Z" fill="#111" />

                    {/* Wheel Arches */}
                    <path d="M 110 210 C 110 170, 180 170, 180 210 Z" fill="#000" />
                    <path d="M 420 210 C 420 170, 490 170, 490 210 Z" fill="#000" />

                    {/* Wheels custom selection */}
                    {customWheel === "sport" && (
                      <>
                        {/* Front Wheel */}
                        <circle cx="145" cy="205" r="32" fill="#222" stroke="#444" strokeWidth="3" />
                        <circle cx="145" cy="205" r="24" fill="#333" />
                        {/* Spokes */}
                        <path d="M 145 175 L 145 235 M 115 205 L 175 205 M 125 185 L 165 225 M 125 225 L 165 185" stroke="#999" strokeWidth="2.5" />
                        <circle cx="145" cy="205" r="8" fill="#111" />
                        
                        {/* Rear Wheel */}
                        <circle cx="455" cy="205" r="32" fill="#222" stroke="#444" strokeWidth="3" />
                        <circle cx="455" cy="205" r="24" fill="#333" />
                        <path d="M 455 175 L 455 235 M 425 205 L 485 205 M 435 185 L 475 225 M 435 225 L 475 185" stroke="#999" strokeWidth="2.5" />
                        <circle cx="455" cy="205" r="8" fill="#111" />
                      </>
                    )}

                    {customWheel === "aero" && (
                      <>
                        {/* Aero Disc Carbon Look */}
                        <circle cx="145" cy="205" r="32" fill="#111" stroke="#ff7300" strokeWidth="2" />
                        <circle cx="145" cy="205" r="25" fill="#222" />
                        <circle cx="145" cy="205" r="16" fill="#111" />
                        <circle cx="145" cy="205" r="6" fill="#ff7300" />
                        
                        <circle cx="455" cy="205" r="32" fill="#111" stroke="#ff7300" strokeWidth="2" />
                        <circle cx="455" cy="205" r="25" fill="#222" />
                        <circle cx="455" cy="205" r="16" fill="#111" />
                        <circle cx="455" cy="205" r="6" fill="#ff7300" />
                      </>
                    )}

                    {customWheel === "platinum" && (
                      <>
                        {/* Platinum Multi-spoke */}
                        <circle cx="145" cy="205" r="32" fill="#444" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="145" cy="205" r="24" fill="#1e293b" />
                        <circle cx="145" cy="205" r="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                        <circle cx="145" cy="205" r="6" fill="#cbd5e1" />

                        <circle cx="455" cy="205" r="32" fill="#444" stroke="#e2e8f0" strokeWidth="3" />
                        <circle cx="455" cy="205" r="24" fill="#1e293b" />
                        <circle cx="455" cy="205" r="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                        <circle cx="455" cy="205" r="6" fill="#cbd5e1" />
                      </>
                    )}

                    {/* Headlights and Taillights */}
                    <path d="M 550 120 L 575 140 L 565 145 Z" fill="#fbbf24" opacity="0.9" />
                    <path d="M 40 145 L 35 155 L 42 160 Z" fill="#ef4444" />

                    {/* Defs filter for Neon glow */}
                    <defs>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                  </svg>
                </div>

                {/* Visualizer Badge Info */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
                  <span className="text-slate-400">Exterior Spec:</span>
                  <strong className="text-white uppercase" style={{ color: customPaint }}>
                    {customPaint === "#ef4444" && "Acid Red"}
                    {customPaint === "#3b82f6" && "Electric Cobalt"}
                    {customPaint === "#10b981" && "Emerald Viper"}
                    {customPaint === "#f59e0b" && "Monaco Gold"}
                    {customPaint === "#7c3aed" && "Purple Nebula"}
                  </strong>
                </div>

              </div>

              {/* Reset to Default specs */}
              <div className="mt-4 flex gap-4 text-xs text-slate-500">
                <span>✓ High-Gloss Polyurethane Film Protective Coating applied</span>
                <span>• Live Render</span>
              </div>
            </div>

            {/* Customizer Panel Controls */}
            <div className="lg:col-span-5 space-y-8 bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800">
              
              <div className="border-b border-slate-900 pb-4">
                <h3 className="text-2xl font-bold text-white font-syne">Configurator</h3>
                <p className="text-xs text-slate-400 mt-1">Design your signature appearance and lock the reservation.</p>
              </div>

              {/* 1. Paint selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Exterior Paintwork</label>
                <div className="flex gap-3">
                  {[
                    { color: "#ef4444", name: "Acid Red" },
                    { color: "#3b82f6", name: "Cobalt Blue" },
                    { color: "#10b981", name: "Emerald Viper" },
                    { color: "#f59e0b", name: "Monaco Gold" },
                    { color: "#7c3aed", name: "Purple Nebula" }
                  ].map((item) => (
                    <button
                      key={item.color}
                      onClick={() => setCustomPaint(item.color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all relative ${
                        customPaint === item.color ? "border-white scale-110 shadow-lg" : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                    >
                      {customPaint === item.color && (
                        <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Wheels Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Wheel Rim Design</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "sport", label: "GT Sport Spoke" },
                    { id: "aero", label: "Aero Carbon Disc" },
                    { id: "platinum", label: "Platinum Elite" }
                  ].map((rim) => (
                    <button
                      key={rim.id}
                      onClick={() => setCustomWheel(rim.id)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${
                        customWheel === rim.id 
                          ? "bg-orange-500/10 text-orange-400 border-orange-500" 
                          : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                      }`}
                    >
                      {rim.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Underglow Neon Toggles */}
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dynamic Platform Underglow</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Atmospheric neon light emission from chassis</p>
                </div>
                <button
                  type="button"
                  onClick={() => setUnderglow(!underglow)}
                  className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                    underglow ? "bg-orange-500" : "bg-slate-800"
                  }`}
                >
                  <span className={`absolute top-1 left-1 bg-slate-950 w-4 h-4 rounded-full transition-transform ${
                    underglow ? "translate-x-6" : ""
                  }`} />
                </button>
              </div>

              {/* 4. Tint level slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold uppercase tracking-wider text-slate-400">Rear VIP Glass Tinting</label>
                  <span className="text-orange-400 font-bold">{tintLevel}% Opacity</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={tintLevel}
                  onChange={(e) => setTintLevel(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Light / Clear</span>
                  <span>Limousine Shadow</span>
                </div>
              </div>

              {/* Request customized reservation */}
              <button
                onClick={() => {
                  const targetCar = FLEET_CARS.find((c) => c.id === "porsche-911") || FLEET_CARS[0];
                  handleOpenBooking(targetCar);
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-extrabold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
              >
                <span>Reserve this Configured Spec</span>
                <Sparkles className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* RENTAL FLEET LIST SECTION */}
      <section id="fleet" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <Award className="w-4 h-4" />
              <span>Veloce Curated Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white tracking-tight">
              WORLD ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SUPER CARS</span>
            </h2>
            <p className="text-slate-400">
              Hand-picked sports cars, off-road beasts, and VIP executive vehicles maintained to perfection. Pick your machine of absolute power.
            </p>
          </div>

          {/* Large Screen Category filter bar */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-orange-500 text-slate-950 border-orange-500 shadow-lg shadow-orange-500/10"
                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl transform hover:-translate-y-1"
            >
              
              {/* Image & Category Tags */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-slate-900/90 text-white border border-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider backdrop-blur-md">
                    {car.category}
                  </span>
                  {car.featured && (
                    <span className="bg-gradient-to-r from-orange-500 to-amber-600 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest">
                      Hot Flagship
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-950/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">Per Day</span>
                  <strong className="text-lg font-extrabold text-orange-400">{getPrice(car.pricePerDay)}</strong>
                </div>
              </div>

              {/* Car details */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">{car.brand}</p>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">{car.name}</h3>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-6 p-4 bg-slate-950/50 rounded-2xl border border-slate-900">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-orange-500" />
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">0-100 km/h</span>
                        <strong className="text-xs text-slate-200">{car.acceleration}</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">Power Output</span>
                        <strong className="text-xs text-slate-200">{car.power}</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">Max Velocity</span>
                        <strong className="text-xs text-slate-200">{car.topSpeed}</strong>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">Fuel & Motor</span>
                        <strong className="text-xs text-slate-200 truncate block max-w-[100px]">{car.fuel}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer details & Book Button */}
                <div className="pt-4 border-t border-slate-950 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>0% Security Deposit Opt</span>
                  </div>
                  
                  <button
                    onClick={() => handleOpenBooking(car)}
                    className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    Rent Now
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Empty state if filtered out */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16 bg-slate-900 rounded-3xl border border-slate-800">
            <CarIcon className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No cars match your selection</h3>
            <p className="text-slate-500 text-sm mt-1">Please try choosing another category or clear search inputs.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchCategory("All");
              }}
              className="mt-4 bg-orange-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* ROAD EXPERIENCES SECTION */}
      <section id="experiences" className="py-24 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>Curated Route Plans</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white tracking-tight">
              ELITE ROAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">EXPERIENCES</span>
            </h2>
            <p className="text-slate-400">
              Select one of our signature road travel routes to match with your sports car. We provide fully loaded GPS navigation files, hotel reservations, and recommended stopovers.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Route list selectors */}
            <div className="lg:col-span-5 space-y-4">
              {ROUTE_EXPERIENCES.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setSelectedRouteId(route.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    selectedRouteId === route.id
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500/80 shadow-xl"
                      : "bg-slate-950/60 border-slate-900 hover:border-slate-800"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-orange-400 uppercase tracking-widest font-bold">
                      {route.location}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{route.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                      <span>Distance: <strong>{route.distance}</strong></span>
                      <span>•</span>
                      <span>Est. Duration: <strong>{route.duration}</strong></span>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl border transition-all ${
                    selectedRouteId === route.id ? "bg-orange-500 text-slate-950 border-orange-500" : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Route visual preview */}
            <div className="lg:col-span-7">
              {ROUTE_EXPERIENCES.map((route) => {
                if (route.id !== selectedRouteId) return null;
                const recommendedCar = FLEET_CARS.find(c => c.id === route.recommendedCarId) || FLEET_CARS[0];

                return (
                  <div key={route.id} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl animate-fade-in">
                    
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900">
                      <img
                        src={route.bgImage}
                        alt={route.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-orange-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-lg tracking-widest">
                          {route.difficulty}
                        </span>
                        <h4 className="text-2xl font-black text-white font-syne mt-2">{route.name}</h4>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {route.tagline}
                    </p>

                    {/* Recommended vehicle showcase segment */}
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={recommendedCar.image}
                          alt={recommendedCar.name}
                          className="w-24 h-16 object-cover rounded-xl"
                        />
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Recommended Weapon</span>
                          <strong className="text-base font-bold text-white">{recommendedCar.brand} {recommendedCar.name}</strong>
                          <span className="text-xs text-orange-400 block mt-0.5">{getPrice(recommendedCar.pricePerDay)} / Day</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenBooking(recommendedCar)}
                        className="w-full sm:w-auto bg-white hover:bg-orange-500 hover:text-slate-950 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all"
                      >
                        Book Package
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* CORE ADVANTAGES & BRAND VALUES */}
      <section id="benefits" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Premium Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
            WHY THE ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">TRUST VELOCE</span>
          </h2>
          <p className="text-slate-400">
            We are redefining how vehicle hire should feel—combining digital efficiency, high telemetry integration, and unparalleled luxury support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Security Deposit</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Skip traditional heavy lockup deposits. Verification takes 5 minutes via modern telemetry background checks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Doorstep VIP Delivery</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We drop off your supercar in showroom-ready pristine condition directly to your private jet terminal, hotel, or office.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Performance Telemetry</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Every rental is equipped with track-ready video telemetry, custom tire-pressure tracking, and electronic map guidance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl hover:border-orange-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Crypto Payment Ready</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Pay anonymously or instantly with major digital assets (USDT, BTC, ETH) alongside premium wire & card options.
            </p>
          </div>

        </div>

      </section>

      {/* DRIVER RENTAL REVIEWS TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
              Driver Diaries
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
              VERIFIED DRIVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">TESTIMONIALS</span>
            </h2>
            <p className="text-slate-400">
              Read real logs from our executive, celebrity, and high-net-worth clients who experience our rental packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-slate-950 border border-slate-850 p-8 rounded-3xl relative space-y-6 flex flex-col justify-between shadow-lg"
              >
                
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Verified Driver
                  </span>
                </div>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>

                <div className="pt-6 border-t border-slate-900 flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-800"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{review.role} • {review.location}</p>
                    <span className="text-[10px] text-orange-400 font-bold mt-1 block">Rented: {review.carRented}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            Help Desk
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-syne text-white">
            FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">QUESTIONS</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know about deposits, license criteria, airport custom drops, and dynamic insurance models.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What credentials do I need to rent a car?",
              a: "For all hypercars and premium SUVs, we require a valid passport, a state or international driving permit/license (held for at least 1.5 years), and driver age of 21+. High-end hypercars may require a age of 25+."
            },
            {
              q: "How does the 'Zero Deposit' policy function?",
              a: "Unlike common rental networks that block high sums on your credit cards, we evaluate clients securely via digital background checks. If accepted, you pay zero physical security deposit."
            },
            {
              q: "Can I receive the vehicle at the airport gate?",
              a: "Absolutely. We offer complete VIP gate delivery. Our dispatchers track your private or commercial flight status to deliver the vehicle directly at the terminal curb precisely as you step outside."
            },
            {
              q: "What payment systems does Veloce support?",
              a: "We accept Visa, Mastercard, American Express, direct corporate bank wires, Apple Pay, and secure digital currencies including Tether (USDT), Bitcoin (BTC), and Ethereum (ETH)."
            },
            {
              q: "Is unlimited mileage / gas included in the price?",
              a: "Every rental package includes completely unlimited mileage so you can travel unrestricted. The vehicle is provided with a full tank of premium high-octane fuel and should be returned matching."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center text-white font-bold hover:text-orange-400 transition"
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <HelpCircle className={`w-5 h-5 text-orange-500 transition-transform ${openFAQIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openFAQIndex === index ? "max-h-52 border-t border-slate-850" : "max-h-0"}`}>
                <div className="p-6 text-xs md:text-sm text-slate-400 leading-relaxed bg-slate-950/60">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CTA BLOCK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-amber-600 rounded-3xl p-8 md:p-16 text-slate-950 relative overflow-hidden shadow-2xl">
          
          {/* Ambient visuals behind */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="bg-black text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">
              Limited slots left
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tight leading-[1.05]">
              READY TO FEEL THE ABSOLUTE VELOCITY?
            </h2>
            <p className="text-black/85 font-medium text-sm md:text-base leading-relaxed">
              Book your elite vehicle within 2 minutes. Receive door-to-door VIP concierge drops, custom specifications, premium 24/7 client care, and complete track telemetry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => triggerScroll("fleet")}
                className="w-full sm:w-auto bg-black hover:bg-slate-900 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 text-center uppercase tracking-wider text-xs md:text-sm"
              >
                Instant Key Reservation
              </button>
              <button
                onClick={() => triggerScroll("customizer")}
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-black border border-black/10 font-bold px-8 py-4 rounded-xl transition text-center text-xs md:text-sm"
              >
                Launch Spec Customizer
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <CarIcon className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tighter text-white font-syne">VELOCE<span className="text-orange-500">.</span></span>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Elite Car Hire</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Veloce is a luxury car hiring platform providing unmatched performance vehicles, track testing, secure payments, and dynamic custom spec configurations.
            </p>
            <div className="text-[10px] text-slate-500">
              © 2026 VELOCE Luxury Rentals Ltd. All rights reserved.
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Our Fleet</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => { setActiveCategory("Hypercars"); triggerScroll("fleet"); }} className="hover:text-white transition">Hypercars & Speedsters</button></li>
              <li><button onClick={() => { setActiveCategory("Premium SUVs"); triggerScroll("fleet"); }} className="hover:text-white transition">Luxury SUVs & Brabus G-Class</button></li>
              <li><button onClick={() => { setActiveCategory("Convertibles"); triggerScroll("fleet"); }} className="hover:text-white transition">Premium Convertibles</button></li>
              <li><button onClick={() => { setActiveCategory("Business Elite"); triggerScroll("fleet"); }} className="hover:text-white transition">Business Sedans & VIP Chauffeurs</button></li>
              <li><button onClick={() => { setActiveCategory("Electric Elite"); triggerScroll("fleet"); }} className="hover:text-white transition">Electric Elite & Tesla Plaid</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company & Support</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#faq" className="hover:text-white transition">License Criteria & Rules</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Security Deposit Insurance</a></li>
              <li><a href="#experiences" className="hover:text-white transition">Scenic Coastal Routes</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Verified Testimonials</a></li>
              <li><span className="text-slate-600">Telegram VIP Support: @VeloceConcierge</span></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">VIP Newsletter</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Subscribe to unlock seasonal hypercar drop rates, private race-track access codes, and exclusive club updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert("Successfully subscribed!"); }}>
              <input
                type="email"
                placeholder="Enter elite email"
                className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 flex-1 text-xs"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
              >
                Join
              </button>
            </form>
            <div className="text-[10px] text-slate-600">
              *By joining, you consent to receive periodic promotional notifications.
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING SOCIAL PROOF NOTIFICATION TOAST */}
      {showFeed && (
        <div className="fixed bottom-6 left-6 z-30 bg-slate-900/95 border border-slate-800/80 p-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm transition-all duration-500 animate-slide-up flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Live Booking Alert</p>
            <p className="text-xs text-white font-semibold mt-0.5">
              <strong>{LIVE_BOOKING_FEEDS[currentFeedIndex].name}</strong> {LIVE_BOOKING_FEEDS[currentFeedIndex].action}
            </p>
            <div className="flex justify-between items-center text-[9px] text-slate-500 mt-1">
              <span>{LIVE_BOOKING_FEEDS[currentFeedIndex].location}</span>
              <span>{LIVE_BOOKING_FEEDS[currentFeedIndex].duration}</span>
            </div>
          </div>
        </div>
      )}

      {/* DYNAMIC BOOKING MODAL DRAWER */}
      {isBookingOpen && selectedCar && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Header info */}
            <div className="p-6 md:p-8 border-b border-slate-800 flex justify-between items-start">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
                  Instant Key Lock
                </span>
                <h3 className="text-2xl md:text-3xl font-black font-syne text-white tracking-tight mt-2">
                  RENT {selectedCar.brand} {selectedCar.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Guaranteed model, unlimited mileage, and VIP gate delivery.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                className="p-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            {!bookingSuccess ? (
              <form onSubmit={handleConfirmBooking} className="p-6 md:p-8 grid lg:grid-cols-12 gap-8">
                
                {/* Left side form elements */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-slate-950 pb-2">
                      1. Deliver & Return Schedule
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Pick-Up Station</span>
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs text-white mt-1 font-semibold">
                          {pickupLoc}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Return Station</span>
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs text-white mt-1 font-semibold">
                          {returnLoc}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Pick-Up</span>
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs text-white mt-1 font-semibold">
                          {pickupDate} • {pickupTime}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Return</span>
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs text-white mt-1 font-semibold">
                          {returnDate} • {returnTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-slate-950 pb-2">
                      2. Add Premium Protection & Options
                    </h4>

                    <div className="space-y-3">
                      {/* GPS */}
                      <label className="flex items-center justify-between p-3.5 bg-slate-950 hover:bg-slate-850 rounded-xl border border-slate-800 cursor-pointer transition select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={extraGPS}
                            onChange={(e) => setExtraGPS(e.target.checked)}
                            className="accent-orange-500 h-4 w-4"
                          />
                          <div>
                            <span className="text-xs font-bold text-white block">Full SatNav Map Integration</span>
                            <span className="text-[10px] text-slate-400 block">Preloaded tracks & regional points</span>
                          </div>
                        </div>
                        <span className="text-xs text-orange-400 font-bold">+{getPrice(15)} / Day</span>
                      </label>

                      {/* Insurance */}
                      <label className="flex items-center justify-between p-3.5 bg-slate-950 hover:bg-slate-850 rounded-xl border border-slate-800 cursor-pointer transition select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={extraInsurance}
                            onChange={(e) => setExtraInsurance(e.target.checked)}
                            className="accent-orange-500 h-4 w-4"
                          />
                          <div>
                            <span className="text-xs font-bold text-white block">Veloce VIP Cover (Full Protection)</span>
                            <span className="text-[10px] text-slate-400 block">0% liability, glass/wheel coverage</span>
                          </div>
                        </div>
                        <span className="text-xs text-orange-400 font-bold">+{getPrice(45)} / Day</span>
                      </label>

                      {/* Chauffeur */}
                      <label className="flex items-center justify-between p-3.5 bg-slate-950 hover:bg-slate-850 rounded-xl border border-slate-800 cursor-pointer transition select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={extraChauffeur}
                            onChange={(e) => setExtraChauffeur(e.target.checked)}
                            className="accent-orange-500 h-4 w-4"
                          />
                          <div>
                            <span className="text-xs font-bold text-white block">Professional VIP Chauffeur Driver</span>
                            <span className="text-[10px] text-slate-400 block">English-speaking concierge driver</span>
                          </div>
                        </div>
                        <span className="text-xs text-orange-400 font-bold">+{getPrice(250)} / Day</span>
                      </label>

                      {/* Telemetry Track mode */}
                      <label className="flex items-center justify-between p-3.5 bg-slate-950 hover:bg-slate-850 rounded-xl border border-slate-800 cursor-pointer transition select-none">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={extraTrackMode}
                            onChange={(e) => setExtraTrackMode(e.target.checked)}
                            className="accent-orange-500 h-4 w-4"
                          />
                          <div>
                            <span className="text-xs font-bold text-white block">Precision Telemetry & Video Log</span>
                            <span className="text-[10px] text-slate-400 block">Lap timers, tire temps, HD cameras</span>
                          </div>
                        </div>
                        <span className="text-xs text-orange-400 font-bold">+{getPrice(100)} / Day</span>
                      </label>

                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white border-b border-slate-950 pb-2">
                      3. Driver Contact Credentials
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Full Name</label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Artem Ivanov"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Driver Permit ID</label>
                        <input
                          type="text"
                          required
                          value={clientLicense}
                          onChange={(e) => setClientLicense(e.target.value)}
                          placeholder="DE-40292812"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email Address</label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="artem@example.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+7 (999) 123-4567"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 text-slate-400 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="accent-orange-500 h-4.5 w-4.5 mt-0.5"
                      />
                      <span className="text-[10px] leading-relaxed">
                        I agree to Veloce's terms of VIP car hire, agree to provide state permit during physical handover, and confirm my age is 21+.
                      </span>
                    </label>

                  </div>

                </div>

                {/* Right side Price Calculation & checkout panel */}
                <div className="lg:col-span-5 space-y-6">
                  
                  <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Price Calculation</h4>
                    
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Base Rental Rate ({getDaysCount()} Days)</span>
                        <strong className="text-white">{getPrice(selectedCar.pricePerDay * getDaysCount())}</strong>
                      </div>

                      {extraInsurance && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Veloce VIP Cover (Ins)</span>
                          <strong className="text-green-400">+{getPrice(45 * getDaysCount())}</strong>
                        </div>
                      )}

                      {extraGPS && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">SatNav Map GPS</span>
                          <strong className="text-green-400">+{getPrice(15 * getDaysCount())}</strong>
                        </div>
                      )}

                      {extraChauffeur && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">VIP Chauffeur</span>
                          <strong className="text-green-400">+{getPrice(250 * getDaysCount())}</strong>
                        </div>
                      )}

                      {extraTrackMode && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Telemetry Log</span>
                          <strong className="text-green-400">+{getPrice(100 * getDaysCount())}</strong>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-slate-400">Security Deposit Block</span>
                        <strong className="text-green-400 uppercase font-black">0% (Zero Lock)</strong>
                      </div>

                      <div className="pt-4 border-t border-slate-900 flex justify-between items-end">
                        <div>
                          <span className="text-xs text-slate-500 block">Calculated Total</span>
                          <span className="text-3xl font-black text-white font-syne">
                            {getPrice(calculateTotal(selectedCar.pricePerDay))}
                          </span>
                        </div>
                        <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded uppercase">All Tax Incl.</span>
                      </div>
                    </div>

                  </div>

                  <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl space-y-2">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-orange-400">Veloce Handover Guarantee</h5>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Your target model is guaranteed to match the layout visual. Fully detailing cleaned, sanitize-disinfected, and topped with premium Octane-100 petrol.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-black py-4 rounded-xl text-center uppercase tracking-widest text-sm shadow-xl"
                  >
                    Confirm Key Lock & Reserve
                  </button>

                </div>

              </form>
            ) : (
              // Success checkout screen
              <div className="p-12 text-center space-y-8 max-w-2xl mx-auto">
                
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-3xl font-black font-syne text-white tracking-tight">RESERVATION CONFIRMED</h4>
                  <p className="text-sm text-slate-400">
                    Congratulations, <strong>{clientName}</strong>! Your {selectedCar.brand} {selectedCar.name} is reserved successfully.
                  </p>
                </div>

                <div className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-4 text-left">
                  <div className="flex justify-between border-b border-slate-900 pb-3 text-xs">
                    <span className="text-slate-500">Contract Code:</span>
                    <strong className="text-white">VEL-902-8371</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-3 text-xs">
                    <span className="text-slate-500">Pick-Up Station:</span>
                    <strong className="text-white">{pickupLoc}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-3 text-xs">
                    <span className="text-slate-500">Pick-Up Time:</span>
                    <strong className="text-white">{pickupDate} at {pickupTime}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-3 text-xs">
                    <span className="text-slate-500">Vehicle:</span>
                    <strong className="text-orange-400">{selectedCar.brand} {selectedCar.name}</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Amount Paid:</span>
                    <strong className="text-green-400">{getPrice(calculateTotal(selectedCar.pricePerDay))}</strong>
                  </div>

                  {/* Generated QR Code for digital gate pickup */}
                  <div className="pt-4 flex flex-col items-center justify-center space-y-2 border-t border-slate-900">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Your Instant Handover pass QR</span>
                    {/* Simulated vector QR Code */}
                    <div className="bg-white p-3 rounded-xl">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        {/* Outer corners */}
                        <rect x="5" y="5" width="25" height="25" fill="#000" />
                        <rect x="10" y="10" width="15" height="15" fill="#fff" />
                        <rect x="13" y="13" width="9" height="9" fill="#000" />

                        <rect x="70" y="5" width="25" height="25" fill="#000" />
                        <rect x="75" y="10" width="15" height="15" fill="#fff" />
                        <rect x="78" y="13" width="9" height="9" fill="#000" />

                        <rect x="5" y="70" width="25" height="25" fill="#000" />
                        <rect x="10" y="75" width="15" height="15" fill="#fff" />
                        <rect x="13" y="78" width="9" height="9" fill="#000" />

                        {/* Random pixels */}
                        <rect x="40" y="15" width="5" height="15" fill="#000" />
                        <rect x="40" y="40" width="15" height="10" fill="#000" />
                        <rect x="70" y="40" width="10" height="20" fill="#000" />
                        <rect x="45" y="70" width="20" height="15" fill="#000" />
                        <rect x="80" y="80" width="10" height="10" fill="#000" />
                        <rect x="55" y="10" width="10" height="10" fill="#000" />
                      </svg>
                    </div>
                    <span className="text-[9px] text-slate-400">Present this QR to your dispatcher at curb</span>
                  </div>

                </div>

                <p className="text-xs text-slate-500">
                  Our dispatchers will call you via Telegram or Phone {clientPhone} to finalize delivery. Keep this window open or screenshot the code.
                </p>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black px-8 py-3.5 rounded-xl uppercase tracking-wider text-xs"
                >
                  Close & View Fleet
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
