import { useState } from 'react';
import { Sparkles, CheckCircle, Flame, HeartHandshake } from 'lucide-react';
import { treatmentsData } from '../data/dentalData';

interface InteractiveSmileSimulatorProps {
  currentLang: 'en' | 'ru';
  onBookTreatment: (treatmentName: string) => void;
}

export default function InteractiveSmileSimulator({ currentLang, onBookTreatment }: InteractiveSmileSimulatorProps) {
  const [activeTab, setActiveTab] = useState<string>('veneers');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [toothShade, setToothShade] = useState<'natural' | 'bleach1' | 'hollywood'>('bleach1');
  const [showShine, setShowShine] = useState<boolean>(true);

  const selectedTreatment = treatmentsData.find((t) => t.id === activeTab) || treatmentsData[0];

  // Simulated colors based on selection
  const shadeClasses = {
    natural: 'from-amber-100/90 to-yellow-50/80',
    bleach1: 'from-slate-50 to-white',
    hollywood: 'from-cyan-50 via-white to-sky-50'
  };

  const labels = {
    en: {
      title: 'AI Smile Vision Simulator',
      sub: 'Drag the slider to preview your instant smile reconstruction. Toggle the premium dental porcelain shade levels below.',
      before: 'Before',
      after: 'After (Simulated)',
      shadeLabel: 'Choose Premium Porcelain Shade:',
      naturalShade: 'Ivory (Natural)',
      bleachShade: 'E-Max Bleach 1',
      hollywoodShade: 'Hollywood Extra White',
      includedTitle: 'What’s Included in VIP Package',
      estimatedCost: 'UK / US Traditional Cost:',
      ourCost: 'Our VIP Package Price:',
      savings: 'Your Guaranteed Savings:',
      guarantee: 'Official Warranty:',
      duration: 'Treatment Duration:',
      bookBtn: 'Reserve My Smile Transformation'
    },
    ru: {
      title: 'Интерактивный симулятор улыбки с ИИ',
      sub: 'Перетащите ползунок для просмотра преображения. Выберите желаемый оттенок премиального фарфора ниже.',
      before: 'До начала',
      after: 'После (Результат)',
      shadeLabel: 'Выберите премиальный оттенок керамики:',
      naturalShade: 'Слоновая кость (Естественный)',
      bleachShade: 'E-Max Блич 1 (Элитный)',
      hollywoodShade: 'Голливудский ультрабелый',
      includedTitle: 'Что входит в VIP-пакет услуг',
      estimatedCost: 'Стоимость в Великобритании / США:',
      ourCost: 'Наша VIP-цена (под ключ):',
      savings: 'Ваша чистая выгода:',
      guarantee: 'Официальная гарантия:',
      duration: 'Срок выполнения:',
      bookBtn: 'Забронировать эту трансформацию'
    }
  };

  const l = labels[currentLang];

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-4 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>{l.title}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'en' ? 'Visualize Your Flawless New' : 'Увидьте свою новую безупречную'} <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Smile line</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            {l.sub}
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="flex justify-center p-1 bg-slate-900/90 rounded-2xl border border-white/10 max-w-2xl mx-auto mb-12">
          {treatmentsData.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                setShowShine(true);
              }}
              className={`flex-1 text-center py-3 px-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === t.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.name[currentLang]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Before/After Visualizer Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group">
              
              {/* Before Smile Side */}
              <div className="absolute inset-0 bg-cover bg-center select-none" style={{ backgroundImage: `url(${selectedTreatment.imageBefore})` }}>
                <div className="absolute bottom-4 left-4 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white font-medium border border-white/10">
                  {l.before}
                </div>
              </div>

              {/* After Smile Side (Clipped with state-driven slider) */}
              <div 
                className="absolute inset-0 bg-cover bg-center overflow-hidden select-none transition-all duration-75"
                style={{ 
                  backgroundImage: `url(${selectedTreatment.imageAfter})`,
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                
                {/* Visual Glow overlay simulation on After side to represent selected premium shades */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${shadeClasses[toothShade]} mix-blend-color opacity-70`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${shadeClasses[toothShade]} mix-blend-overlay opacity-30`} />

                {/* Sparkling shine element */}
                {showShine && (
                  <div className="absolute top-1/3 left-1/4 animate-bounce bg-white w-2 h-2 rounded-full blur-[1px] shadow-[0_0_12px_6px_rgba(255,255,255,0.9)]">
                    <span className="absolute -top-2 -left-2 text-cyan-300 text-sm">✦</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-lg text-xs text-white font-semibold shadow-lg">
                  {l.after} - {toothShade === 'natural' ? l.naturalShade : toothShade === 'bleach1' ? l.bleachShade : l.hollywoodShade}
                </div>
              </div>

              {/* Slider Drag Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-teal-300 to-indigo-500 cursor-ew-resize z-20 group-hover:w-1.5 transition-all"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-xl flex items-center justify-center text-white text-xs select-none">
                  ⇄
                </div>
              </div>

              {/* Hidden Range Input Layer covering the visualizer */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />
            </div>

            {/* Premium Shade Switcher Panel */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5 text-cyan-400" />
                {l.shadeLabel}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['natural', 'bleach1', 'hollywood'] as const).map((shade) => (
                  <button
                    key={shade}
                    onClick={() => {
                      setToothShade(shade);
                      setShowShine(true);
                      setSliderPosition(75); // Push slider to highlight "After" result
                    }}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      toothShade === shade
                        ? 'bg-white text-slate-950 border-white shadow-xl shadow-white/5'
                        : 'bg-slate-950/80 text-slate-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {shade === 'natural' ? l.naturalShade : shade === 'bleach1' ? l.bleachShade : l.hollywoodShade}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Treatment Details, ROI, and Cost comparison card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase">
                {selectedTreatment.guaranteeYears}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {selectedTreatment.name[currentLang]}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {selectedTreatment.description[currentLang]}
              </p>
            </div>

            {/* Savings & Guarantee Compare box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-cyan-500/20 space-y-4 shadow-xl">
              
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                <div>
                  <span className="text-[11px] text-slate-400 block">{l.estimatedCost}</span>
                  <span className="text-sm font-semibold text-slate-300 line-through">
                    {selectedTreatment.costUkUs[currentLang]}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-emerald-400 block font-semibold">★ {l.ourCost}</span>
                  <span className="text-xl font-black text-white bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    {selectedTreatment.costOurClinic[currentLang]}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider block">
                    {l.savings}
                  </span>
                  <span className="text-2xl font-black text-cyan-400">
                    -{selectedTreatment.savingsPercent}%
                  </span>
                </div>
                <div className="bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 text-right">
                  <span className="text-[10px] text-slate-400 block">{l.duration}</span>
                  <span className="text-xs font-bold text-white">{selectedTreatment.durationDays} {currentLang === 'en' ? 'Days' : 'Дня'}</span>
                </div>
              </div>

            </div>

            {/* What's included checklist */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <HeartHandshake className="h-4 w-4 text-cyan-400" />
                {l.includedTitle}
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {selectedTreatment.benefits[currentLang].map((benefit, i) => (
                  <li key={i} className="flex items-start text-xs text-slate-300 space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book simulation selection */}
            <button
              onClick={() => onBookTreatment(selectedTreatment.name[currentLang])}
              className="w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 text-slate-950 font-bold py-4 rounded-xl text-sm transition-all shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              <span>{l.bookBtn}</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
