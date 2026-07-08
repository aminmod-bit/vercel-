import React, { useState } from 'react';
import { Video, Clock, Check, Plane, ShieldAlert, Sparkles } from 'lucide-react';

interface LiveInteractiveSchedulerProps {
  currentLang: 'en' | 'ru';
  prefilledTreatment?: string;
  onClose?: () => void;
}

export default function LiveInteractiveScheduler({ currentLang, prefilledTreatment, onClose }: LiveInteractiveSchedulerProps) {
  const [treatment, setTreatment] = useState<string>(prefilledTreatment || 'veneers');
  const [bookingType, setBookingType] = useState<'video' | 'clinic'>('video');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'call' | 'email'>('whatsapp');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isPassportReady, setIsPassportReady] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const labels = {
    en: {
      title: 'Schedule Your VIP Consult',
      sub: 'Book your free online diagnostic review or premium clinic reservation. Your private host coordinates all travel aspects.',
      treatmentLbl: 'Select Dental Care Objective:',
      typeLbl: 'Select Meeting Format:',
      typeVideo: 'Free AI Smile Video Call (15 min)',
      typeVideoSub: 'Discuss custom 3D model options',
      typeClinic: 'Book Luxury Clinic Treatment Slot',
      typeClinicSub: 'Confirm your flight dates & VIP hotel',
      dateLbl: 'Select Your Preferred Date:',
      contactLbl: 'Preferred Communication Channel:',
      passportLbl: 'I hold an active passport ready for travel',
      passportAlert: 'No visa required for UK/US citizens to our clinical zones.',
      submitBtn: 'Confirm Premium Booking',
      successTitle: '🎉 VIP Booking Initiated!',
      successSub: 'A senior dental coordinator will contact you on WhatsApp/Phone within 15 minutes with flight coupons and 3D preview options.',
      fieldPlaceholderName: 'Your Full Name',
      fieldPlaceholderPhone: 'Your WhatsApp / Phone (e.g., +44... / +1...)',
      closeBtn: 'Close Window'
    },
    ru: {
      title: 'Запись на VIP Консультацию',
      sub: 'Забронируйте бесплатный онлайн-разбор улыбки или зарезервируйте даты лечения. Мы полностью организуем вашу поездку.',
      treatmentLbl: 'Цель вашего обращения:',
      typeLbl: 'Выберите формат консультации:',
      typeVideo: 'Видеовызов с ИИ-моделированием (15 мин)',
      typeVideoSub: 'Обсуждение 3D модели улыбки',
      typeClinic: 'Запись на очное лечение в клинику',
      typeClinicSub: 'Подтверждение дат перелета и отеля',
      dateLbl: 'Выберите желаемую дату:',
      contactLbl: 'Удобный способ связи:',
      passportLbl: 'У меня есть действующий загранпаспорт',
      passportAlert: 'Для граждан Великобритании и США виза не требуется.',
      submitBtn: 'Подтвердить премиальную запись',
      successTitle: '🎉 Запись успешно создана!',
      successSub: 'Старший медицинский координатор свяжется с вами по WhatsApp/телефону в течение 15 минут для согласования деталей и купонов на перелет.',
      fieldPlaceholderName: 'Ваше имя',
      fieldPlaceholderPhone: 'Ваш WhatsApp / телефон (например, +44... / +1...)',
      closeBtn: 'Закрыть окно'
    }
  };

  const l = labels[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-950 p-8 rounded-3xl border border-cyan-400/30 text-center space-y-6 max-w-lg mx-auto my-8 animate-in zoom-in-95 duration-300">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
          <Sparkles className="h-8 w-8 animate-bounce" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">{l.successTitle}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{l.successSub}</p>
        </div>
        <div className="bg-slate-900/90 p-4 rounded-xl text-left border border-white/5 space-y-2">
          <div className="flex items-center text-xs text-slate-300 gap-2">
            <span className="font-semibold text-cyan-400">Patient:</span> <span>{name}</span>
          </div>
          <div className="flex items-center text-xs text-slate-300 gap-2">
            <span className="font-semibold text-cyan-400">Phone:</span> <span>{phone}</span>
          </div>
          <div className="flex items-center text-xs text-slate-300 gap-2">
            <span className="font-semibold text-cyan-400">Format:</span> <span>{bookingType === 'video' ? 'Virtual AI Diagnostic Call' : 'Luxury Clinic Treatment'}</span>
          </div>
        </div>
        {onClose && (
          <button 
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl text-sm hover:bg-slate-100 transition-all cursor-pointer"
          >
            {l.closeBtn}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 border border-white/10 p-6 md:p-8 rounded-3xl max-w-xl mx-auto shadow-2xl relative">
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">{l.title}</h3>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{l.sub}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Treatment Objective selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            {l.treatmentLbl}
          </label>
          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 text-white text-sm rounded-xl py-2.5 px-3 focus:border-cyan-400 focus:outline-none transition-colors"
          >
            <option value="veneers">{currentLang === 'en' ? 'Elite Porcelain Veneers Makeover' : 'Керамические виниры (Голливудская улыбка)'}</option>
            <option value="implants">{currentLang === 'en' ? 'Full-Jaw Nobel Implants' : 'Имплантация All-on-4 / All-on-6'}</option>
            <option value="whitening">{currentLang === 'en' ? 'Philips Laser Whitening' : 'Лазерное отбеливание Philips Zoom'}</option>
            <option value="consult">{currentLang === 'en' ? 'General Diagnostic Consultation' : 'Общая премиум-консультация'}</option>
          </select>
        </div>

        {/* Booking Format Toggle */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            {l.typeLbl}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setBookingType('video')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                bookingType === 'video'
                  ? 'bg-slate-950 border-cyan-400 text-white'
                  : 'bg-slate-950/40 border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold block">{l.typeVideo}</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">{l.typeVideoSub}</span>
            </button>
            
            <button
              type="button"
              onClick={() => setBookingType('clinic')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                bookingType === 'clinic'
                  ? 'bg-slate-950 border-cyan-400 text-white'
                  : 'bg-slate-950/40 border-white/10 text-slate-400 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-2">
                <Plane className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold block">{l.typeClinic}</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">{l.typeClinicSub}</span>
            </button>
          </div>
        </div>

        {/* Date and Contact Channel Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              {l.dateLbl}
            </label>
            <input
              type="date"
              required
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-slate-950 border border-white/10 text-white text-sm rounded-xl py-2.5 px-3 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              {l.contactLbl}
            </label>
            <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-white/10">
              {(['whatsapp', 'call', 'email'] as const).map((channel) => (
                <button
                  key={channel}
                  type="button"
                  onClick={() => setPreferredContact(channel)}
                  className={`py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                    preferredContact === channel
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Personal details inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder={l.fieldPlaceholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 text-white text-sm rounded-xl py-2.5 px-3 focus:border-cyan-400 focus:outline-none transition-colors"
          />
          <input
            type="tel"
            required
            placeholder={l.fieldPlaceholderPhone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 text-white text-sm rounded-xl py-2.5 px-3 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Passport / Travel Logistics Confirmation Checkbox */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsPassportReady(!isPassportReady)}
            className="flex items-start text-left space-x-2.5 cursor-pointer"
          >
            <div className={`mt-0.5 h-4 w-4 rounded border flex items-center justify-center transition-all shrink-0 ${
              isPassportReady ? 'bg-cyan-500 border-cyan-500 text-slate-950' : 'border-white/20 bg-slate-950'
            }`}>
              {isPassportReady && <Check className="h-3 w-3 stroke-[3]" />}
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-300 block">{l.passportLbl}</span>
              <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                <ShieldAlert className="h-3 w-3 text-cyan-500/70 shrink-0" />
                {l.passportAlert}
              </span>
            </div>
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 text-slate-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/10 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Clock className="h-4 w-4" />
          <span>{l.submitBtn}</span>
        </button>

      </form>
    </div>
  );
}
