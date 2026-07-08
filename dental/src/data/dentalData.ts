import { Treatment, Testimonial, FAQItem, LanguageCopy } from '../types';

export const languageCopy: Record<'en' | 'ru', LanguageCopy> = {
  en: {
    navLogo: 'DENTAL.UK',
    navSlogan: 'Elite Smile Hub',
    navHome: 'Overview',
    navServices: 'Treatments',
    navSimulator: 'Smile Vision',
    navEstimator: 'Savings Estimator',
    navSteps: 'Journey',
    navReviews: 'Patient Stories',
    navFaq: 'FAQ',
    navBookBtn: 'Request VIP Consultation',
    heroBadge: '✨ Premium European Dental Care for UK & USA Patients',
    heroTitle1: 'A Million-Dollar Smile',
    heroTitleHighlight: 'For up to 70% Less',
    heroTitle2: 'Than in London or NY',
    heroSub: 'Experience elite European aesthetic dentistry. World-class E-Max veneers, elite implants, and award-winning prosthodontics combined with five-star VIP travel concierge logistics.',
    heroBtnMain: 'Design Your Custom Smile',
    heroBtnSub: 'Calculate Potential Savings',
    heroStat1Num: '12,500+',
    heroStat1Lbl: 'Perfect Smiles Crafted',
    heroStat2Num: '25 Year',
    heroStat2Lbl: 'Lifetime Warranty Provided',
    heroStat3Num: '72 Hours',
    heroStat3Lbl: 'Full Makeover Timeframe',
    heroTrustText: 'Rated 4.9/5 by 1,200+ British & American patients',
  },
  ru: {
    navLogo: 'DENTAL.UK',
    navSlogan: 'Элитный Центр Улыбки',
    navHome: 'Обзор',
    navServices: 'Услуги',
    navSimulator: 'Симулятор Улыбки',
    navEstimator: 'Калькулятор Выгоды',
    navSteps: 'Этапы',
    navReviews: 'Отзывы пациентов',
    navFaq: 'Вопросы',
    navBookBtn: 'Заказать VIP Консультацию',
    heroBadge: '✨ Премиум Стоматология для Пациентов из Великобритании и США',
    heroTitle1: 'Улыбка на миллион',
    heroTitleHighlight: 'со скидкой до 70%',
    heroTitle2: 'от цен Лондона или Нью-Йорка',
    heroSub: 'Элитная эстетическая стоматология европейского уровня. Виниры E-Max, импланты премиум-класса и высокотехнологичное протезирование с полным VIP-консьержем (отель 5*, трансфер, переводчик).',
    heroBtnMain: 'Смоделировать улыбку',
    heroBtnSub: 'Рассчитать экономию',
    heroStat1Num: '12,500+',
    heroStat1Lbl: 'Созданных Идеальных Улыбок',
    heroStat2Num: '25 Лет',
    heroStat2Lbl: 'Официальной Гарантии',
    heroStat3Num: '72 Часа',
    heroStat3Lbl: 'Время полной трансформации',
    heroTrustText: 'Оценка 4.9/5 от более 1,200 пациентов из UK и USA',
  }
};

export const treatmentsData: Treatment[] = [
  {
    id: 'veneers',
    name: {
      en: 'Elite IPS e.max® Porcelain Veneers',
      ru: 'Керамические виниры IPS e.max® Премиум'
    },
    tagline: {
      en: 'Micro-thin custom porcelain shells handcrafted by master technicians.',
      ru: 'Сверхтонкие керамические пластинки ручной работы от лучших зубных техников.'
    },
    description: {
      en: 'Perfect for correcting discolored, crooked, chipped, or spaced teeth. Our ultra-durable, natural-looking porcelain veneers offer a flawless, celebrity-grade smile line designed specifically to harmonize with your facial structure.',
      ru: 'Идеально для исправления цвета, кривизны, сколов или промежутков. Сверхпрочные и естественно выглядящие виниры премиум-класса создают безупречную голливудскую улыбку, гармонирующую с чертами лица.'
    },
    costUkUs: { en: '£18,000 / $24,000', ru: '£18,000 / $24,000' },
    costOurClinic: { en: '£4,900 / $6,200', ru: '£4,900 / $6,200' },
    savingsPercent: 73,
    durationDays: 4,
    guaranteeYears: '15-Year Warranty',
    benefits: {
      en: [
        'Minimal tooth preparation (0.3mm micro-prep)',
        'Resistant to tea, coffee, wine, and smoking stains',
        'Individually customized translucency & shape',
        'Fully designed via AI Digital Smile Design beforehand'
      ],
      ru: [
        'Минимальная обточка зуба (всего 0.3 мм)',
        'Абсолютная стойкость к чаю, кофе, вину и курению',
        'Индивидуальный подбор прозрачности, рельефа и формы',
        'Предварительный 3D дизайн улыбки с помощью ИИ'
      ]
    },
    // Before/After visualization simulation colors/parameters can be set
    imageBefore: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600', // Natural yellowed
    imageAfter: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600'    // Bright white smile
  },
  {
    id: 'implants',
    name: {
      en: 'Full-Arch All-on-4 / All-on-6 Nobel Biocare™',
      ru: 'Имплантация All-on-4 / All-on-6 Nobel Biocare™'
    },
    tagline: {
      en: 'Permanent, full-jaw restoration in just 1 day with premium Swiss titanium.',
      ru: 'Постоянное восстановление зубов всей челюсти за 1 день швейцарским титаном.'
    },
    description: {
      en: 'The absolute gold standard in dental reconstruction. Replace missing teeth or old painful dentures with fully fixed premium prostheses supported by four or six strategically placed Nobel Biocare™ implants. Immediate function, high stability.',
      ru: 'Золотой стандарт реконструктивной стоматологии. Замените отсутствующие зубы или съемные протезы несъемным мостом премиум-класса на 4 или 6 оригинальных швейцарских имплантах Nobel Biocare™ с немедленной нагрузкой.'
    },
    costUkUs: { en: '£26,000 / $35,000', ru: '£26,000 / $35,000' },
    costOurClinic: { en: '£7,500 / $9,800', ru: '£7,500 / $9,800' },
    savingsPercent: 71,
    durationDays: 3,
    guaranteeYears: 'Lifetime Warranty',
    benefits: {
      en: [
        'Immediate fixed teeth on the exact same day',
        'Original Swiss Nobel Biocare™ implants & components',
        'No bone grafting required in 95% of clinical cases',
        'Fully restores natural chewing force and elegant facial profile'
      ],
      ru: [
        'Несъемные новые зубы в день операции',
        'Оригинальные швейцарские импланты и компоненты Nobel Biocare™',
        'Без костной пластики (синус-лифтинга) в 95% случаев',
        'Полное восстановление жевательной функции и контура лица'
      ]
    },
    imageBefore: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    imageAfter: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'whitening',
    name: {
      en: 'Philips Zoom WhiteSpeed™ Laser Therapy',
      ru: 'Лазерное отбеливание Philips Zoom WhiteSpeed™'
    },
    tagline: {
      en: 'Brighten your smile up to 8 shades in a single 45-minute premium session.',
      ru: 'Осветление улыбки до 8 тонов за один 45-минутный сеанс.'
    },
    description: {
      en: 'The safest, most requested professional laser whitening. Utilizing cold-light LED technology and post-treatment ACP relief gels to prevent any tooth sensitivity while achieving unmatched Hollywood radiance.',
      ru: 'Самое безопасное и популярное лазерное отбеливание. Использование технологии холодного светодиодного света и укрепляющих гелей ACP сводит чувствительность зубов к нулю, даря идеальную белизну.'
    },
    costUkUs: { en: '£950 / $1,250', ru: '£950 / $1,250' },
    costOurClinic: { en: '£280 / $360', ru: '£280 / $360' },
    savingsPercent: 70,
    durationDays: 1,
    guaranteeYears: 'Up to 3 Years Shine',
    benefits: {
      en: [
        'Clinical scale shift of up to 8 shades whiter',
        'Zero sensitivity formula with customized relief gels',
        'Takes less than an hour in our VIP spa lounge',
        'Includes bespoke take-home touch-up whitening kit'
      ],
      ru: [
        'Осветление по шкале Vita до 8 оттенков',
        'Формула с нулевой чувствительностью благодаря защитным гелям',
        'Занимает менее часа в нашей расслабляющей спа-стоматологии',
        'Включает индивидуальный домашний комплект для поддержания тона'
      ]
    },
    imageBefore: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    imageAfter: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600'
  }
];

export const journeySteps = [
  {
    id: 1,
    title: {
      en: 'Online Video Consult & AI Design',
      ru: 'Онлайн Консультация и ИИ-Проект'
    },
    description: {
      en: 'Book a free HD video consultation with our Lead Surgeon. Send your photos/X-rays, and our AI design engine creates your future smile preview in 24 hours.',
      ru: 'Запишитесь на бесплатную видеоконсультацию с ведущим хирургом. Пришлите фото или рентген, и наш ИИ смоделирует вашу будущую улыбку за 24 часа.'
    },
    highlight: {
      en: '100% Free • No travel needed yet',
      ru: '100% Бесплатно • Поездка пока не требуется'
    },
    icon: 'Tv'
  },
  {
    id: 2,
    title: {
      en: 'VIP Arrival & Luxury Stay',
      ru: 'VIP Прибытие и Люкс Размещение'
    },
    description: {
      en: 'We take care of everything. A private chauffeur meets you at the airport. Check into your boutique 5-star hotel partners and enjoy absolute luxury from day one.',
      ru: 'Мы берем все хлопоты на себя. Персональный водитель встретит вас в аэропорту. Заселяйтесь в 5-звездочный бутик-отель и наслаждайтесь комфортом.'
    },
    highlight: {
      en: 'Free Airport Chauffeur & 5★ Hotel',
      ru: 'Личный водитель и 5★ отель включены'
    },
    icon: 'PlaneTakeoff'
  },
  {
    id: 3,
    title: {
      en: 'Precision Treatment & Celebration',
      ru: 'Высокоточное лечение и Триумф',
      
    },
    description: {
      en: 'Relax in our state-of-the-art clinic. Utilizing 3D CAD/CAM milling and painless dental lasers, our team crafts and fits your flawless new smile in just 3-4 days.',
      ru: 'Расслабьтесь в ультрасовременной клинике. Используя CAD/CAM-оборудование и безболезненный лазер, мы создаем и устанавливаем улыбку вашей мечты за 3-4 дня.'
    },
    highlight: {
      en: 'Lifetime Warranty • Sparkling Smile',
      ru: 'Пожизненная гарантия • Сияющая улыбка'
    },
    icon: 'Sparkles'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Dr. Alistair Vance',
    location: 'London, United Kingdom',
    flag: '🇬🇧',
    age: 46,
    treatment: {
      en: 'Full Jaw E-Max Veneers',
      ru: 'Полные виниры E-Max (обе челюсти)'
    },
    rating: 5,
    text: {
      en: 'Absolutely phenomenal service. In London, I was quoted £22,000 for this exact treatment plan. Here, I paid around £5,200 including my five-star hotel. The technology they use is superior to anything I saw in Harley Street. Truly world class.',
      ru: 'Абсолютно феноменальный сервис. В Лондоне мне насчитали £22,000 за этот план лечения. Здесь я заплатил около £5,200, включая роскошный отель. Оборудование лучше, чем на Харли-стрит. Мировой уровень.'
    },
    savings: {
      en: 'Saved £16,800',
      ru: 'Сэкономил £16,800'
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'review-2',
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    flag: '🇺🇸',
    age: 34,
    treatment: {
      en: 'Nobel All-on-4 Implants',
      ru: 'Импланты Nobel Biocare All-on-4'
    },
    rating: 5,
    text: {
      en: 'After searching for implants in Manhattan, I was shocked by the $32,000 quote. Coming here was the best decision of my life. From the chauffeur greeting me to the absolute pain-free dental procedure, I could not recommend them enough!',
      ru: 'Цены в Манхэттене меня шокировали — $32,000 за импланты. Поездка сюда стала лучшим решением в моей жизни. От встречи водителем до безболезненного лечения, рекомендую всем!'
    },
    savings: {
      en: 'Saved $24,500',
      ru: 'Сэкономила $24,500'
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'review-3',
    name: 'George Miller',
    location: 'Manchester, United Kingdom',
    flag: '🇬🇧',
    age: 52,
    treatment: {
      en: 'Premium Smile Reconstruction',
      ru: 'Премиум Реконструкция Улыбки'
    },
    rating: 5,
    text: {
      en: 'The level of hygiene, medical competence, and luxury concierge is flawless. They designed my custom digital smile model on the screen before they even touched my teeth. It looks and feels completely natural!',
      ru: 'Уровень гигиены, компетентности и консьерж-сервиса идеален. Они сначала смоделировали 3D улыбку на экране, прежде чем прикасаться к зубам. Смотрится невероятно естественно!'
    },
    savings: {
      en: 'Saved £11,200',
      ru: 'Сэкономил £11,200'
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: {
      en: 'Why is the price up to 70% lower than in the UK or US?',
      ru: 'Почему цена до 70% ниже, чем в Великобритании или США?'
    },
    answer: {
      en: 'Our clinical operational costs, staff tax rates, and premium rent are significantly lower than in central London or Manhattan. However, we use the exact same certified Swiss implants (Nobel Biocare) and German ceramics (IPS e.max) with cutting-edge CAD/CAM technology.',
      ru: 'Наши операционные расходы, налоги и аренда помещений значительно ниже, чем в центре Лондона или Манхэттене. При этом мы закупаем оригинальные швейцарские импланты (Nobel Biocare) и немецкую керамику (IPS e.max) напрямую у официальных дистрибьюторов.'
    }
  },
  {
    id: 'faq-2',
    category: 'travel',
    question: {
      en: 'What does your VIP Concierge Package include?',
      ru: 'Что входит в ваш премиальный пакет VIP-консьержа?'
    },
    answer: {
      en: 'Our VIP package is completely complementary for procedures exceeding £3,500. It includes: Airport luxury pickup, premium accommodation at a 5-star spa hotel, 24/7 personal coordinator who speaks native English, local high-speed SIM card, and tourist city guides.',
      ru: 'Наш VIP-пакет абсолютно бесплатен для планов лечения на сумму более £3,500. Он включает в себя: встречу представителем в аэропорту, проживание в 5-звездочном спа-отеле, личного 24/7 координатора, местную SIM-карту и организацию экскурсий.'
    }
  },
  {
    id: 'faq-3',
    category: 'medical',
    question: {
      en: 'What kind of warranties do you offer on dental work?',
      ru: 'Какую медицинскую и юридическую гарантию вы предоставляете?'
    },
    answer: {
      en: 'We provide an official written, legally-binding contract. Nobel Biocare Implants carry a lifetime international warranty. Our IPS e.max Porcelain Veneers include a 15-year comprehensive clinic warranty covering replacement, labor, and travel costs in case of issues.',
      ru: 'Мы предоставляем официальный письменный двуязычный юридический договор. Импланты Nobel Biocare застрахованы международной ПОЖИЗНЕННОЙ гарантией. На виниры IPS e.max предоставляется 15-летняя полная гарантия клиники, покрывающая замену.'
    }
  },
  {
    id: 'faq-4',
    category: 'travel',
    question: {
      en: 'How long does a full smile transformation take?',
      ru: 'Сколько дней занимает полная трансформация улыбки?'
    },
    answer: {
      en: 'Thanks to our in-house digital CAD/CAM dental laboratory, premium dental treatments like 20 E-max veneers or full Nobel restorations take only 3 to 5 business days, compared to weeks of waiting in traditional Western clinics.',
      ru: 'Благодаря наличию собственной цифровой зуботехнической лаборатории CAD/CAM, премиум-лечение (например, установка 20 виниров E-max) занимает всего от 3 до 5 рабочих дней.'
    }
  },
  {
    id: 'faq-5',
    category: 'medical',
    question: {
      en: 'Do you speak English and provide medication after surgery?',
      ru: 'Вы говорите по-английски и предоставляются ли медикаменты?'
    },
    answer: {
      en: 'Yes! Our entire clinical staff, surgeons, and nurses speak fluent English. We provide a complete premium post-operative care kit including pain relief medications, oral irrigators, specialized medical toothpastes, and antiseptic solutions.',
      ru: 'Да! Весь наш медицинский персонал, включая хирургов, свободно владеет английским языком. Мы предоставляем полный набор послеоперационного ухода, обезболивающие, ирригатор, специальные зубные пасты и ополаскиватели.'
    }
  }
];
