import amsterdam from './amsterdam.json';
import advancedChiropractic from './advanced-chiropractic.json';
import backtalkChiropractic from './backtalk-chiropractic.json';
import beneskiChiropractic from './beneski-chiropractic.json';
import bodySolutions from './body-solutions.json';
import zimmermanChiropractic from './zimmerman-chiropractic.json';
import bayshoreChiropractic from './bayshore-chiropractic.json';
import bettendorfChiropractic from './bettendorf-chiropractic.json';
import holladayChiropractic from './holladay-chiropractic.json';
import mitchellChiropractic from './mitchell-chiropractic.json';
import villageChiropractic from './village-chiropractic.json';

export interface DemoMeta {
  practiceName: string;
  practiceTagline: string;
  phone: string;
  phoneHref: string;
  whatsapp: string | null;
  address: string;
  email: string | null;
  hours: string;
}

export interface DemoContent {
  meta: DemoMeta;
  doctorImage: string;
  reviews: Array<{ name: string; text: string; rating: number }>;
  badge: string;
  h1: string[];
  heroSub: string;
  bookBtn: string;
  callBtn: string;
  stats: Array<{ value: string; label: string }>;
  servicesLabel: string;
  servicesH2: string;
  services: Array<{ title: string; desc: string }>;
  comboTitle: string;
  comboDesc: string;
  conditionsLabel: string;
  conditionsH2: string;
  conditionsDesc: string;
  conditionsClick: string;
  conditionsNote: string;
  approachLabel: string;
  approachH2: string;
  approachDesc: string;
  phases: Array<{ step: string; title: string; desc: string }>;
  phaseLabel: string;
  phasesNote: string;
  firstVisitLabel: string;
  firstVisitH2: string;
  firstVisitDesc: string;
  firstVisitSteps: Array<{ step: string; title: string; desc: string }>;
  pricingLabel: string;
  pricingH2: string;
  pricingDesc: string;
  pricingHeaders: string[];
  pricingRows: Array<{ treatment: string; price: string }>;
  pricingPackageNote: string;
  paymentNote: string;
  insuranceH3: string;
  insuranceP1: string;
  insuranceP2: string;
  insuranceLinkPre: string;
  insuranceLink: string;
  ctaH2: string;
  ctaP: string;
  ctaBook: string;
  ctaCall: string;
  aboutLabel: string;
  aboutH2: string;
  aboutSubtitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutStats: Array<{ value: string; label: string }>;
  testimonialsLabel: string;
  testimonialsH2: string;
  reviewCount: string;
  faqLabel: string;
  faqH2: string;
  faqs: Array<{ q: string; a: string }>;
  bookingLabel: string;
  bookingH2: string;
  bookingDesc: string;
  bookingInfo: Array<{ label: string; value: string }>;
  heroRating: string;
  heroReviewLabel: string;
  heroReviews: Array<{ name: string; condition: string; text: string; rating: number }>;
  modalWhat: string;
  modalHow: string;
  modalCta: string;
  modalBook: string;
  modalCall: string;
  showPricing?: boolean;
  logo?: string;
  accentColor?: string;
  accentColorDark?: string;
}

export const demos: Record<string, DemoContent> = {
  'amsterdam': amsterdam as DemoContent,
  'advanced-chiropractic': advancedChiropractic as DemoContent,
  'backtalk-chiropractic': backtalkChiropractic as DemoContent,
  'beneski-chiropractic': beneskiChiropractic as DemoContent,
  'body-solutions': bodySolutions as DemoContent,
  'zimmerman-chiropractic': zimmermanChiropractic as DemoContent,
  'bayshore-chiropractic': bayshoreChiropractic as DemoContent,
  'bettendorf-chiropractic': bettendorfChiropractic as DemoContent,
  'holladay-chiropractic': holladayChiropractic as DemoContent,
  'mitchell-chiropractic': mitchellChiropractic as DemoContent,
  'village-chiropractic': villageChiropractic as DemoContent,
};

export type DemoSlug = keyof typeof demos;
