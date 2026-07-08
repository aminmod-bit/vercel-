import { useState } from 'react';
import { DollarSign, Percent, Plane, Hotel, Landmark, BadgePercent, ShieldCheck } from 'lucide-react';

interface InteractiveEstimatorProps {
  currentLang: 'en' | 'ru';
  onBookSelectedPlan: (details: string) => void;
}

export default function InteractiveEstimator({ currentLang, onBookSelectedPlan }: InteractiveEstimatorProps) {
  const [currency, setCurrency] = useState<'GBP' | 'USD'>('GBP');
  const [treatmentType, setTreatmentType] = useState<'veneers_lite' | 'veneers_full' | 'all_on_4' | 'all_on_6'>('veneers_full');
  const [includeVipStay, setIncludeVipStay] = useState<boolean>(true);

  // Prices structured as: [Home Country Price, Our Clinic Price]
  const dataMap = {
    veneers_lite: {
      label: { en: 'Aesthetic Smile Line (8 IPS e.max Veneers)', ru: 'Зона улыбки (8 премиальных виниров IPS e.max)' },
      prices: { GBP: [7200, 2200], USD: [9600, 2800] },
      days: 3
    },
    veneers_full: {
      label: { en: 'Full Hollywood Makeover (20 IPS e.max Veneers)', ru: 'Полный Голливудский ряд (20 виниров IPS e.max)' },
      prices: { GBP: [18000, 4900], USD: [24000, 6200] },
      days: 4
    },
    all_on_4: {
      label: { en: 'All-on-4 Full Arch Nobel Implants (1 Jaw)', ru: 'Имплантация All-on-4 Nobel Biocare (1 челюсть)' },
      prices: { GBP: [19500, 5800], USD: [26000, 7500] },
      days: 3
    },
    all_on_6: {
      label: { en: 'All-on-6 Nobel Elite Restoration (Both Jaws)', ru: 'Элитное протезирование All-on-6 (обе челюсти)' },
      prices: { GBP: [38000, 11500], USD: [49000, 14800] },
      days: 5
    }
  };

  const selectedData = dataMap[treatmentType];
  const symbol = currency === 'GBP' ? '£' : '$';
  const homePrice = selectedData.prices[currency][0];
  let ourPrice = selectedData.prices[currency][1];

  // If VIP stay is disabled, subtract travel/accommodation voucher value (e.g., $350 or £300)
  if (!includeVipStay) {
    ourPrice -= (currency === 'GBP' ? 300 : 400);
  }

  const absoluteSavings = homePrice - ourPrice;
  const savingsPercent = Math.round((absoluteSavings / homePrice) * 100);

  const labels = {
    en: {
      sectionTitle: 'Luxury Treatment & Savings Estimator',
      title: 'Calculate Your Premium Package',
      sub: 'Compare Harley Street (London) & Manhattan (NY) elite pricing with our VIP comprehensive dental clinic plans.',
      treatmentTypeLabel: 'Select Your Custom Smile Package:',
      currencyLabel: 'Preferred Currency:',
      hotelInclusionLabel: 'Include 5-Star Boutique Spa Hotel Partner & VIP Chauffeur',
      hotelSlogan: 'Complimentary luxury stay and private airport transfers included',
      hotelExcludedSlogan: 'Deduct hotel stay from budget (save an additional £300/$400)',
      compareTitle: 'Detailed Financial Comparison',
      homePriceLabel: 'Average Local Cost (London / New York)',
      ourPriceLabel: 'Our Certified VIP Price',
      savingsLabel: 'Total Guaranteed Liquid Savings',
      reimbursementTitle: 'VIP Travel Perks Included Automatically:',
      perkFlight: 'Flight Ticket Voucher Reimbursement up to £250',
      perkHotel: 'Luxury Boutique 5-Star Accommodation (Single or Double room)',
      perkTransfers: 'Private Chauffeur Airport & Dental Clinic Transfers',
      perkAssistance: '24/7 VIP Personal Treatment Coordinator',
      bookBtn: 'Claim These Savings & Get Free Airfare Voucher'
    },
    ru: {
      sectionTitle: 'Калькулятор VIP-Услуг и Выгоды',
      title: 'Рассчитайте стоимость пакета',
      sub: 'Сравните средние цены элитных клиник Лондона (Harley Street) и Нью-Йорка (Manhattan) с нашей стоимостью под ключ.',
      treatmentTypeLabel: 'Выберите желаемый объем лечения:',
      currencyLabel: 'Валюта расчета:',
      hotelInclusionLabel: 'Включить бутик-отель 5★ и персонального водителя',
      hotelSlogan: 'Бесплатное премиальное проживание и комфортный трансфер',
      hotelExcludedSlogan: 'Вычесть отель из бюджета (минус £300/$400 от стоимости)',
      compareTitle: 'Детальное сравнение бюджета',
      homePriceLabel: 'Средняя цена на месте (Лондон / Нью-Йорк)',
      ourPriceLabel: 'Наша VIP-цена под ключ',
      savingsLabel: 'Ваша чистая гарантированная выгода',
      reimbursementTitle: 'Премиум-бонусы поездки (уже включены):',
      perkFlight: 'Компенсация стоимости авиабилета до £250',
      perkHotel: 'Проживание в элитном 5-звездочном спа-отеле',
      perkTransfers: 'Личный водитель (Аэропорт – Отель – Клиника)',
      perkAssistance: 'Круглосуточный личный VIP-координатор',
      bookBtn: 'Зафиксировать выгоду и получить авиабилет в подарок'
    }
  };

  const l = labels[currentLang];

  const planSummaryText = `${selectedData.label[currentLang]} (${symbol}${ourPrice.toLocaleString()} instead of ${symbol}${homePrice.toLocaleString()})`;

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute top-0 right-0 w-[600px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-4 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Landmark className="h-3.5 w-3.5" />
            <span>{l.sectionTitle}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {currentLang === 'en' ? 'Unmatched Pricing,' : 'Мировое качество,'} <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{currentLang === 'en' ? 'Flawless Quality' : 'доступные цены'}</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            {l.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Inputs */}
          <div className="lg:col-span-6 bg-slate-950/80 p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Currency Selector */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-cyan-400" />
                  {l.currencyLabel}
                </span>
                <div className="bg-slate-900 p-1 rounded-xl border border-white/10 flex">
                  <button
                    onClick={() => setCurrency('GBP')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currency === 'GBP' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🇬🇧 GBP (£)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currency === 'USD' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    🇺🇸 USD ($)
                  </button>
                </div>
              </div>

              {/* Treatment Type Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {l.treatmentTypeLabel}
                </label>
                <div className="space-y-2">
                  {(Object.keys(dataMap) as Array<keyof typeof dataMap>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setTreatmentType(key)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        treatmentType === key
                          ? 'bg-gradient-to-r from-slate-900 to-indigo-950/30 border-cyan-500/40 text-white shadow-lg'
                          : 'bg-slate-950/50 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <span className="block text-sm font-semibold text-white">
                          {dataMap[key].label[currentLang]}
                        </span>
                        <span className="block text-[11px] text-cyan-400 mt-0.5">
                          {dataMap[key].days} {currentLang === 'en' ? 'Days Stay Required' : 'Дня потребуется'}
                        </span>
                      </div>
                      <span className="text-xs font-bold bg-slate-900 px-3 py-1 rounded-lg border border-white/10 text-white">
                        {symbol}{dataMap[key].prices[currency][1].toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle Stay */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => setIncludeVipStay(!includeVipStay)}
                  className="w-full flex items-start text-left space-x-3 cursor-pointer"
                >
                  <div className={`mt-1 h-5 w-5 rounded-md border flex items-center justify-center transition-all ${
                    includeVipStay ? 'bg-cyan-500 border-cyan-500 text-slate-950' : 'border-white/20 bg-slate-900'
                  }`}>
                    {includeVipStay && <svg className="h-3 w-3 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" /></svg>}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">
                      {l.hotelInclusionLabel}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {includeVipStay ? l.hotelSlogan : l.hotelExcludedSlogan}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Travel perks checklist */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                {l.reimbursementTitle}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Plane className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{l.perkFlight}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hotel className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{l.perkHotel}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v11h3" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                  <span>{l.perkTransfers}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{l.perkAssistance}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Cost Visual Bars and Output */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-cyan-500/20 p-8 rounded-3xl flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-cyan-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
              <BadgePercent className="h-3 w-3" />
              <span>{savingsPercent}% {currentLang === 'en' ? 'CHEAPER' : 'ДЕШЕВЛЕ'}</span>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Percent className="h-5 w-5 text-cyan-400" />
                {l.compareTitle}
              </h3>

              {/* Cost bar for local country */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>{l.homePriceLabel}</span>
                  <span className="text-slate-200">{symbol}{homePrice.toLocaleString()}</span>
                </div>
                <div className="h-3.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Cost bar for our clinic */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-cyan-400">
                  <span>{l.ourPriceLabel}</span>
                  <span className="font-extrabold">{symbol}{ourPrice.toLocaleString()}</span>
                </div>
                <div className="h-3.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-500" style={{ width: `${(ourPrice / homePrice) * 100}%` }}></div>
                </div>
              </div>

              {/* Net Cash Savings Output Box */}
              <div className="mt-8 p-6 bg-slate-950/80 rounded-2xl border border-emerald-500/20 text-center space-y-2 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                  {l.savingsLabel}
                </span>
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 block tracking-tight">
                  {symbol}{absoluteSavings.toLocaleString()}
                </span>
                <p className="text-xs text-slate-400">
                  {currentLang === 'en' 
                    ? `*Fully guarantees direct savings of ${symbol}${absoluteSavings.toLocaleString()} over standard UK/US dentistry clinics.`
                    : `*Полностью гарантирует прямую выгоду ${symbol}${absoluteSavings.toLocaleString()} по сравнению со стандартными ценами.`}
                </p>
              </div>
            </div>

            {/* Direct Booking Link */}
            <div className="mt-8">
              <button
                onClick={() => onBookSelectedPlan(planSummaryText)}
                className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-slate-950 font-black py-4.5 rounded-2xl text-sm transition-all hover:scale-[1.01] shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{l.bookBtn}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
