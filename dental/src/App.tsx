import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Award, 
  Plane, 
  Tv, 
  Lock,
  Compass,
  Coins
} from 'lucide-react';
import Navbar from './components/Navbar';
import InteractiveSmileSimulator from './components/InteractiveSmileSimulator';
import InteractiveEstimator from './components/InteractiveEstimator';
import LiveInteractiveScheduler from './components/LiveInteractiveScheduler';
import { languageCopy, faqData, testimonialsData, journeySteps } from './data/dentalData';

export default function App() {
  const [currentLang, setLang] = useState<'en' | 'ru'>('en');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [prefilledTreatment, setPrefilledTreatment] = useState<string>('veneers');
  const [urgentCoupons, setUrgentCoupons] = useState(3);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const copy = languageCopy[currentLang];

  // Dynamic countdown-ticker simulation for conversion focus urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgentCoupons(prev => (prev > 1 ? prev - 1 : 3));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  const triggerBookingModal = (treatmentName?: string) => {
    if (treatmentName) {
      setPrefilledTreatment(treatmentName);
    }
    setIsSchedulerOpen(true);
  };

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 scroll-smooth">
      
      {/* Dynamic Background Noise and Ambient Light Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[60%] bg-cyan-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] right-[-10%] w-[70%] h-[70%] bg-indigo-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Sticky Premium Navbar */}
      <Navbar 
        currentLang={currentLang} 
        setLang={setLang} 
        onOpenBooking={() => triggerBookingModal()} 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Grid Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Premium Top Badge */}
              <div className="inline-flex items-center space-x-2.5 bg-slate-900/95 border border-cyan-400/30 px-4 py-2 rounded-full shadow-lg shadow-cyan-500/5 animate-fade-in">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-xs font-semibold text-slate-200 tracking-wide">
                  {copy.heroBadge}
                </span>
              </div>

              {/* Breathtaking Main Titles */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                  {copy.heroTitle1} <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                    {copy.heroTitleHighlight}
                  </span> <br />
                  <span className="text-3xl sm:text-5xl font-extrabold text-slate-200">
                    {copy.heroTitle2}
                  </span>
                </h1>
                
                <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light">
                  {copy.heroSub}
                </p>
              </div>

              {/* Conversion urgency indicator element */}
              <div className="p-4 bg-slate-900/80 border border-white/5 rounded-2xl flex items-center space-x-4 max-w-xl shadow-md">
                <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-400/20 text-cyan-400">
                  <Plane className="h-5 w-5 animate-pulse" />
                </div>
                <div className="text-xs">
                  <p className="text-white font-bold">
                    {currentLang === 'en' 
                      ? '🎯 Flash Airfare Reimbursement Promo Active' 
                      : '🎯 Акция: Компенсация авиабилета активна'}
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    {currentLang === 'en' 
                      ? `Only ${urgentCoupons} luxury travel packages remaining for UK/US entries this week.` 
                      : `Осталось всего ${urgentCoupons} VIP-пакета с оплатой билета на эту неделю.`}
                  </p>
                </div>
              </div>

              {/* Elegant Call to action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => triggerBookingModal('General Smile Consultation')}
                  className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-cyan-400/20 hover:shadow-cyan-400/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span>{copy.heroBtnMain}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('estimator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer"
                >
                  <span>{copy.heroBtnSub}</span>
                </button>
              </div>

              {/* Trust Badge Social Proof */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white text-xs font-black ml-2">4.9/5</span>
                </div>
                <span className="text-xs text-slate-400">
                  {copy.heroTrustText}
                </span>
                <div className="flex items-center space-x-3 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <span>Trustpilot</span>
                  <span>•</span>
                  <span>Nobel Biocare Certified</span>
                  <span>•</span>
                  <span>E-Max Partner</span>
                </div>
              </div>

            </div>

            {/* Right Hero Grid Content (Beautiful Live Widget Preview Panel) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-3xl blur-[30px] opacity-20 animate-pulse pointer-events-none" />
              
              {/* Premium Floating Trust Cards */}
              <div className="absolute -top-6 -left-6 bg-slate-900/90 border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 z-20 backdrop-blur-md">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">WARRANTY</span>
                  <span className="text-xs text-white font-extrabold block">25 Year Guarantee</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 bg-slate-900/90 border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 z-20 backdrop-blur-md">
                <div className="h-9 w-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">VIP SERVICE</span>
                  <span className="text-xs text-white font-extrabold block">Chauffeur & 5★ Hotel</span>
                </div>
              </div>

              {/* Main Visual Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900/80 backdrop-blur-md p-6 shadow-2xl space-y-6">
                
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Perfect Aesthetic Smile Results" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-slate-950/75 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-400 block">PATIENT REALITY</span>
                      <span className="text-xs font-bold text-white">Sarah J. (New York) • After Veneers</span>
                    </div>
                    <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md">
                      SAVED $24,500
                    </span>
                  </div>
                </div>

                {/* Quick stats mini-counter grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-lg md:text-xl font-black text-cyan-400 block">
                      12,500+
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block mt-0.5">
                      {copy.heroStat1Lbl}
                    </span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-lg md:text-xl font-black text-indigo-400 block">
                      {copy.heroStat2Num}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block mt-0.5">
                      {copy.heroStat2Lbl}
                    </span>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-lg md:text-xl font-black text-teal-400 block">
                      72 Hours
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider block mt-0.5">
                      {copy.heroStat3Lbl}
                    </span>
                  </div>
                </div>

                {/* Instant action block */}
                <button
                  onClick={() => triggerBookingModal('Free Smile Assessment')}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-4 rounded-xl border border-white/10 text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>{currentLang === 'en' ? 'Simulate Your Perfect Face Harmony' : 'Начать цифровой анализ лица'}</span>
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-8 bg-slate-900/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-4">
            {currentLang === 'en' ? 'OUR INTERNATIONAL TRUST CREDENTIALS' : 'НАШИ МЕЖДУНАРОДНЫЕ СЕРТИФИКАТЫ И ПАРТНЕРЫ'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-100 transition-all duration-300">
            <span className="text-sm font-bold text-white tracking-widest">NOBEL BIOCARE™</span>
            <span className="text-sm font-bold text-white tracking-widest">IPS E.MAX® GERMANY</span>
            <span className="text-sm font-bold text-white tracking-widest">PHILIPS ZOOM™</span>
            <span className="text-sm font-bold text-white tracking-widest">ISO 9001 COMPLIANT</span>
            <span className="text-sm font-bold text-white tracking-widest">EU HEALTH REGISTER</span>
          </div>
        </div>
      </section>

      {/* Interactive Smile Simulator Section */}
      <InteractiveSmileSimulator 
        currentLang={currentLang} 
        onBookTreatment={triggerBookingModal} 
      />

      {/* Premium Treatment Cards & Included Services Showcase */}
      <section id="services" className="py-24 relative overflow-hidden bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              {currentLang === 'en' ? 'Premium Aesthetic Procedures' : 'Услуги эстетической медицины'}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              {currentLang === 'en' ? 'Crafting Iconic Smiling Profiles' : 'Создание безупречного контура'}
            </h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base">
              {currentLang === 'en' 
                ? 'We specialize in custom medical dentistry using robotic CAD/CAM milling & original Western certified implants.' 
                : 'Мы специализируемся на высокотехнологичной медицине с использованием роботизированного оборудования и швейцарских материалов.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
                  <img src="https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Veneers Treatment" className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">IPS E.MAX®</span>
                  <span className="text-xs text-emerald-400 font-bold">15-Year Warranty</span>
                </div>
                <h3 className="text-xl font-bold text-white">{currentLang === 'en' ? 'Porcelain Veneers' : 'Фарфоровые виниры'}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {currentLang === 'en' 
                    ? 'Individually sculpted porcelain shells designed via 3D AI modeling. Perfect color tone integration.' 
                    : 'Индивидуально смоделированные тончайшие пластинки из оригинального немецкого фарфора E-Max.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">{currentLang === 'en' ? 'From £280/tooth' : 'От £280 за зуб'}</span>
                <button onClick={() => triggerBookingModal('IPS E-Max Porcelain Veneers')} className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:underline cursor-pointer">
                  <span>{currentLang === 'en' ? 'Learn More' : 'Подробнее'}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
                  <img src="https://images.pexels.com/photos/5355837/pexels-photo-5355837.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Implants Treatment" className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">NOBEL BIOCARE®</span>
                  <span className="text-xs text-emerald-400 font-bold">Lifetime Warranty</span>
                </div>
                <h3 className="text-xl font-bold text-white">{currentLang === 'en' ? 'All-on-4 / All-on-6 Implants' : 'Имплантация All-on-4 / All-on-6'}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {currentLang === 'en' 
                    ? 'Swiss full-jaw permanent prosthetics over Nobel implants. Complete smile restoration in 1 single day.' 
                    : 'Швейцарское полное протезирование за 1 день с пожизненной международной гарантией.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">{currentLang === 'en' ? 'From £3,500/jaw' : 'От £3,500 челюсть'}</span>
                <button onClick={() => triggerBookingModal('All-on-4/6 Nobel Implants')} className="text-xs font-bold text-indigo-400 flex items-center gap-1 group-hover:underline cursor-pointer">
                  <span>{currentLang === 'en' ? 'Learn More' : 'Подробнее'}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
                  <img src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Whitening Treatment" className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-teal-500/10 text-teal-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">PHILIPS ZOOM™</span>
                  <span className="text-xs text-emerald-400 font-bold">Zero Sensitivity</span>
                </div>
                <h3 className="text-xl font-bold text-white">{currentLang === 'en' ? 'Philips Laser Whitening' : 'Лазерное отбеливание'}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {currentLang === 'en' 
                    ? 'Get 8 shades whiter enamel. Fast 45 minutes therapy using customized cold-light LED protection gels.' 
                    : 'Осветление эмали до 8 тонов по шкале Vita за один комфортный 45-минутный сеанс.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">{currentLang === 'en' ? 'Special: £280 Package' : 'Акция: £280 пакет'}</span>
                <button onClick={() => triggerBookingModal('Philips Zoom Laser Whitening')} className="text-xs font-bold text-teal-400 flex items-center gap-1 group-hover:underline cursor-pointer">
                  <span>{currentLang === 'en' ? 'Learn More' : 'Подробнее'}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Included VIP services list */}
          <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-8 rounded-3xl border border-white/5 text-center space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {currentLang === 'en' ? '🎁 Premium Travel Package Included Free with Treatments Over £3,500' : '🎁 Премиальный тур-пакет бесплатно при лечении от £3,500'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="block font-bold text-white">5★ Boutique Hotel</span>
                <span className="text-slate-400 block">{currentLang === 'en' ? 'Luxury single/double room' : 'Роскошный бутик-отель'}</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white">{currentLang === 'en' ? 'Private Chauffeur' : 'Личный водитель'}</span>
                <span className="text-slate-400 block">{currentLang === 'en' ? 'Mercedes Airport pickup' : 'Трансфер на представительском авто'}</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white">24/7 Coordinator</span>
                <span className="text-slate-400 block">{currentLang === 'en' ? 'Native speaking companion' : 'Личный координатор 24/7'}</span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white">{currentLang === 'en' ? 'Airfare Voucher' : 'Компенсация перелета'}</span>
                <span className="text-slate-400 block">{currentLang === 'en' ? 'Up to £250 credit applied' : 'Скидка на билет до £250'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Savings Estimator */}
      <InteractiveEstimator 
        currentLang={currentLang} 
        onBookSelectedPlan={triggerBookingModal} 
      />

      {/* 3-Step Journey Timeline */}
      <section id="journey" className="py-24 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{currentLang === 'en' ? 'How it Works' : 'Как проходит поездка'}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              {currentLang === 'en' ? 'Your Perfect Smile in 3 Steps' : 'Новая улыбка за 3 шага'}
            </h2>
            <p className="text-slate-400 mt-4 text-sm">
              {currentLang === 'en' 
                ? 'We handle all medical dental planning and travel logistics from start to finish.' 
                : 'Мы берем на себя планирование стоматологического лечения и организацию поездки.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Connecting visual line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-teal-500/20 z-0" />

            {journeySteps.map((step, index) => (
              <div key={step.id} className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 relative z-10 space-y-6 hover:border-white/10 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                      0{step.id}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      {index === 0 && <Tv className="h-5 w-5" />}
                      {index === 1 && <Plane className="h-5 w-5" />}
                      {index === 2 && <Sparkles className="h-5 w-5" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white">{step.title[currentLang]}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.description[currentLang]}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                    {step.highlight[currentLang]}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Patient Testimonials and Before/After slider stories */}
      <section id="reviews" className="py-24 bg-slate-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{currentLang === 'en' ? 'Verified Success Stories' : 'Истории наших пациентов'}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              {currentLang === 'en' ? 'Loved by UK & USA Patients' : 'Нам доверяют пациенты из Великобритании и США'}
            </h2>
          </div>

          {/* Testimonial slider / showcase */}
          <div className="max-w-4xl mx-auto bg-slate-950 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-8 relative">
            <div className="absolute top-4 right-4 text-slate-700 font-serif text-8xl leading-none select-none">“</div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              <img 
                src={testimonialsData[activeTestimonialIndex].image} 
                alt={testimonialsData[activeTestimonialIndex].name} 
                className="w-24 h-24 rounded-2xl object-cover border border-cyan-400/30"
              />

              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                  <span className="text-lg font-bold text-white">{testimonialsData[activeTestimonialIndex].name}</span>
                  <span className="text-xs text-slate-400">{testimonialsData[activeTestimonialIndex].location} {testimonialsData[activeTestimonialIndex].flag}</span>
                </div>

                <div className="flex justify-center md:justify-start items-center space-x-1">
                  {[...Array(testimonialsData[activeTestimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-emerald-400 font-bold ml-2">({testimonialsData[activeTestimonialIndex].savings[currentLang]})</span>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed italic">
                  "{testimonialsData[activeTestimonialIndex].text[currentLang]}"
                </p>

                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  {currentLang === 'en' ? 'Procedure performed:' : 'Выполненное лечение:'} {testimonialsData[activeTestimonialIndex].treatment[currentLang]}
                </div>
              </div>

            </div>

            {/* Slider arrows */}
            <div className="flex justify-between items-center pt-6 border-t border-white/5">
              <span className="text-xs text-slate-500">
                Patient {activeTestimonialIndex + 1} of {testimonialsData.length}
              </span>
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded-xl border border-white/5 text-white cursor-pointer"
                >
                  ←
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-900 hover:bg-slate-800 rounded-xl border border-white/5 text-white cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="py-24 relative overflow-hidden bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{currentLang === 'en' ? 'FAQ' : 'Ответы на вопросы'}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              {currentLang === 'en' ? 'Patient FAQ & Warranties' : 'Медицинские и Юридические детали'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-slate-900/60 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm md:text-base pr-4">
                    {faq.question[currentLang]}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {activeFaq === faq.id && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer[currentLang]}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium CTA & Interactive Lead Capture Block */}
      <section className="py-20 relative overflow-hidden bg-slate-900 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="h-3.5 w-3.5" />
            <span>{currentLang === 'en' ? 'ISO 9001 CERTIFIED CLINIC' : 'СЕРТИФИЦИРОВАННАЯ КЛИНИКА ISO 9001'}</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {currentLang === 'en' ? 'Get Your Premium Smile Consultation' : 'Закажите полный просчёт улыбки'}
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {currentLang === 'en' 
              ? 'Our coordinator provides a free comprehensive 3D Smile mockup and a complete quotation including flights and luxury accommodation.' 
              : 'Наш координатор подготовит бесплатный ИИ-анализ улыбки и полный расчет поездки с учетом билетов и проживания.'}
          </p>

          <div className="max-w-xl mx-auto">
            <LiveInteractiveScheduler 
              currentLang={currentLang} 
              prefilledTreatment={prefilledTreatment} 
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-400 text-xs pt-8 border-t border-white/5">
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-cyan-400" />
              {currentLang === 'en' ? 'HIPAA & GDPR Secure' : '100% Конфиденциально'}
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              {currentLang === 'en' ? 'Written Contract Guarantee' : 'Официальный договор'}
            </span>
            <span className="flex items-center gap-1">
              <Coins className="h-3.5 w-3.5 text-cyan-400" />
              {currentLang === 'en' ? 'No Hidden Charges' : 'Цены фиксируются в договоре'}
            </span>
          </div>

        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="py-16 bg-slate-950 border-t border-white/10 relative z-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <span className="text-lg font-bold text-white tracking-tight">{copy.navLogo}</span>
              <p className="text-[11px] leading-relaxed">
                {currentLang === 'en' 
                  ? 'Providing celebrity-grade restorative and cosmetic dentistry services to European standards with luxury travel concierges.' 
                  : 'Предоставление стоматологических услуг премиального уровня по европейским стандартам с VIP-сопровождением.'}
              </p>
              <div className="flex space-x-3 text-slate-400">
                <a href="#" className="hover:text-white">Twitter</a>
                <span>•</span>
                <a href="#" className="hover:text-white">Instagram</a>
                <span>•</span>
                <a href="#" className="hover:text-white">YouTube</a>
              </div>
            </div>

            {/* Column 2 - British line */}
            <div className="space-y-3">
              <span className="block text-white font-bold uppercase tracking-wider">{currentLang === 'en' ? 'UK Patient Desk' : 'Для пациентов из Великобритании'}</span>
              <p className="text-[11px]">VIP Harley Street Support Line:</p>
              <a href="tel:+442079460012" className="block text-slate-300 hover:text-white font-bold">+44 20 7946 0012</a>
              <p className="text-[10px] text-slate-600">London, United Kingdom</p>
            </div>

            {/* Column 3 - USA line */}
            <div className="space-y-3">
              <span className="block text-white font-bold uppercase tracking-wider">{currentLang === 'en' ? 'US Patient Desk' : 'Для пациентов из США'}</span>
              <p className="text-[11px]">VIP Manhattan Support Line:</p>
              <a href="tel:+12125550199" className="block text-slate-300 hover:text-white font-bold">+1 212 555 0199</a>
              <p className="text-[10px] text-slate-600">New York, NY, USA</p>
            </div>

            {/* Column 4 - Medical Credentials */}
            <div className="space-y-3">
              <span className="block text-white font-bold uppercase tracking-wider">Certifications</span>
              <div className="space-y-1.5">
                <span className="block">✓ ADA Certified Surgeons</span>
                <span className="block">✓ General Dental Council UK Registered</span>
                <span className="block">✓ ISO 9001 Clinic Standards</span>
                <span className="block">✓ Nobel Biocare Diamond Partner</span>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
            <p>© 2026 DENTAL.UK Dental Tourism LLC. All Rights Reserved. General Dental Council reg #84910.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Medical Disclaimer</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Scheduler Modal Popup */}
      {isSchedulerOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="relative w-full max-w-xl my-8">
            <button 
              onClick={() => setIsSchedulerOpen(false)}
              className="absolute -top-3 -right-3 md:top-4 md:right-4 h-8 w-8 bg-slate-900 border border-white/20 text-white rounded-full flex items-center justify-center font-bold hover:bg-slate-800 transition-all cursor-pointer z-50"
            >
              ✕
            </button>
            <LiveInteractiveScheduler 
              currentLang={currentLang} 
              prefilledTreatment={prefilledTreatment}
              onClose={() => setIsSchedulerOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}
