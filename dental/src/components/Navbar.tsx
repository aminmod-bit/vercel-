import { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { languageCopy } from '../data/dentalData';

interface NavbarProps {
  currentLang: 'en' | 'ru';
  setLang: (lang: 'en' | 'ru') => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentLang, setLang, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = languageCopy[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 shadow-lg shadow-indigo-500/20">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">
                {copy.navLogo}
              </span>
              <span className="text-[10px] tracking-wider text-cyan-400 font-semibold block uppercase">
                {copy.navSlogan}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navHome}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navServices}
            </button>
            <button onClick={() => scrollToSection('simulator')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navSimulator}
            </button>
            <button onClick={() => scrollToSection('estimator')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navEstimator}
            </button>
            <button onClick={() => scrollToSection('journey')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navSteps}
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navReviews}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
              {copy.navFaq}
            </button>
          </div>

          {/* Right Action side: Hotlines, Language, Button */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Quick hotlines */}
            <div className="flex flex-col text-right text-xs text-slate-400 border-r border-white/10 pr-4">
              <a href="tel:+442079460012" className="hover:text-white transition-colors flex items-center justify-end space-x-1">
                <span className="text-[10px] text-slate-500">London:</span>
                <span className="font-semibold text-slate-300">+44 20 7946 0012</span>
              </a>
              <a href="tel:+12125550199" className="hover:text-white transition-colors flex items-center justify-end space-x-1">
                <span className="text-[10px] text-slate-500">New York:</span>
                <span className="font-semibold text-slate-300">+1 212 555 0199</span>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="bg-slate-800/80 p-0.5 rounded-lg border border-white/10 flex">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
                  currentLang === 'en' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
                  currentLang === 'ru' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇷🇺</span>
                <span>RU</span>
              </button>
            </div>

            {/* Premium Button */}
            <button 
              onClick={onOpenBooking}
              className="relative group overflow-hidden bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 text-slate-950 text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-1">
                {copy.navBookBtn}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile elements (lang and menu) */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Quick lang switch for mobile */}
            <button
              onClick={() => setLang(currentLang === 'en' ? 'ru' : 'en')}
              className="bg-slate-800/80 border border-white/10 px-2 py-1 rounded-lg text-xs font-semibold text-slate-300 flex items-center space-x-1 cursor-pointer"
            >
              <Globe className="h-3 w-3 text-cyan-400" />
              <span>{currentLang === 'en' ? '🇬🇧 EN' : '🇷🇺 RU'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-slate-800/80 p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-white/10 py-6 px-4 space-y-4 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navHome}
            </button>
            <button 
              onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navServices}
            </button>
            <button 
              onClick={() => { scrollToSection('simulator'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navSimulator}
            </button>
            <button 
              onClick={() => { scrollToSection('estimator'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navEstimator}
            </button>
            <button 
              onClick={() => { scrollToSection('journey'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navSteps}
            </button>
            <button 
              onClick={() => { scrollToSection('reviews'); setMobileMenuOpen(false); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-sm font-medium text-slate-300 cursor-pointer"
            >
              {copy.navReviews}
            </button>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-3">
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex justify-between">
                <span>🇬🇧 London:</span>
                <a href="tel:+442079460012" className="text-white font-semibold hover:underline">+44 20 7946 0012</a>
              </p>
              <p className="flex justify-between">
                <span>🇺🇸 New York:</span>
                <a href="tel:+12125550199" className="text-white font-semibold hover:underline">+1 212 555 0199</a>
              </p>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <span>{copy.navBookBtn}</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
