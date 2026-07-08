export interface Treatment {
  id: string;
  name: { en: string; ru: string };
  tagline: { en: string; ru: string };
  description: { en: string; ru: string };
  costUkUs: { en: string; ru: string };
  costOurClinic: { en: string; ru: string };
  savingsPercent: number;
  durationDays: number;
  guaranteeYears: string;
  benefits: { en: string[]; ru: string[] };
  imageBefore: string;
  imageAfter: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  flag: string;
  age: number;
  treatment: { en: string; ru: string };
  rating: number;
  text: { en: string; ru: string };
  savings: { en: string; ru: string };
  image: string;
}

export interface FAQItem {
  id: string;
  question: { en: string; ru: string };
  answer: { en: string; ru: string };
  category: 'travel' | 'medical' | 'pricing' | 'warranty';
}

export interface LanguageCopy {
  navLogo: string;
  navSlogan: string;
  navHome: string;
  navServices: string;
  navSimulator: string;
  navEstimator: string;
  navSteps: string;
  navReviews: string;
  navFaq: string;
  navBookBtn: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroSub: string;
  heroBtnMain: string;
  heroBtnSub: string;
  heroStat1Num: string;
  heroStat1Lbl: string;
  heroStat2Num: string;
  heroStat2Lbl: string;
  heroStat3Num: string;
  heroStat3Lbl: string;
  heroTrustText: string;
}
