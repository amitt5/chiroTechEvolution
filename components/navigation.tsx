'use client';

import Link from 'next/link';
import Image from 'next/image';

const mainNav = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book', href: '#booking' },
];

const klachten = [
  { label: 'All Conditions', href: '#' },
  { label: 'Lower Back Pain', href: '#' },
  { label: 'Neck Pain', href: '#' },
  { label: 'Herniated Disc', href: '#' },
  { label: 'Whiplash', href: '#' },
  { label: 'Headache & Migraine', href: '#' },
  { label: 'Pregnancy', href: '#' },
  { label: 'Sports Injuries', href: '#' },
  { label: "Baby's", href: '#' },
  { label: 'Children', href: '#' },
  { label: 'Arthrosis / Wear', href: '#' },
];

const moreLinks = [
  { label: 'New Patient Center', href: '#' },
  { label: 'Your First Visit', href: '#' },
  { label: 'What to Expect', href: '#' },
  { label: 'Payment Options', href: '#' },
  { label: 'Meet Your Doctor', href: '#' },
  { label: 'Health Resources', href: '#' },
  { label: 'Patient Forms', href: '#' },
];

interface NavigationMeta {
  practiceName: string;
  practiceTagline: string;
}

export default function Navigation({ meta, showPricing = true, logo, logoHeight }: { meta?: NavigationMeta; showPricing?: boolean; logo?: string; logoHeight?: number }) {
  const navLinks = showPricing ? mainNav : mainNav.filter(({ label }) => label !== 'Pricing');

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
          {logo ? (
            <Image src={logo} alt={`${meta?.practiceName ?? 'Practice'} logo`} width={160} height={logoHeight ?? 40} className="w-auto object-contain" style={{ height: logoHeight ?? 40 }} />
          ) : (
            <>
              <div className="w-9 h-9 rounded-full bg-[var(--accent,#45321A)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-base text-[#191919] leading-tight">{meta?.practiceName ?? 'Health4Life'}</div>
                <div className="text-[10px] text-[var(--accent,#45321A)] font-semibold uppercase tracking-widest leading-none">{meta?.practiceTagline ?? 'Chiropractic'}</div>
              </div>
            </>
          )}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#403F3F]">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-[var(--accent,#45321A)] transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="#booking"
            className="bg-[var(--accent,#45321A)] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--accent-dark,#5a4228)] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
