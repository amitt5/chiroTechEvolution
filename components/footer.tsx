'use client';

import Link from 'next/link';
import Image from 'next/image';

const treatment = [
  { label: 'Conditions', href: '#' },
  { label: 'Techniques', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services & Techniques', href: '#services' },
  { label: 'Payment Options', href: '#pricing' },
];

const info = [
  { label: 'New Patient Center', href: '#' },
  { label: 'Your First Visit', href: '#' },
  { label: 'Patient Forms', href: '#' },
  { label: 'Health Resources', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

interface FooterMeta {
  practiceName: string;
  practiceTagline: string;
  phone: string;
  phoneHref: string;
  whatsapp: string | null;
  address: string;
  email: string | null;
  hours: string;
}

export default function Footer({ meta, logo }: { meta?: FooterMeta; logo?: string }) {
  return (
    <footer className="bg-[#191919] text-white py-14 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            {logo ? (
              <Image src={logo} alt={`${meta?.practiceName ?? 'Practice'} logo`} width={320} height={60} className="h-12 w-auto object-contain" />
            ) : (
              <>
                <div className="w-9 h-9 rounded-full bg-[var(--accent,#45321A)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-base leading-tight">{meta?.practiceName ?? 'Health4Life'}</div>
                  <div className="text-[10px] text-[var(--accent,#45321A)] font-semibold uppercase tracking-widest leading-none">{meta?.practiceTagline ?? 'Chiropractic'}</div>
                </div>
              </>
            )}
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {meta ? `${meta.practiceName} ${meta.practiceTagline}. ${meta.address}.` : 'Chiropractic specialist in Amsterdam Zuid. Maasstraat 103, 1078 HH Amsterdam.'}
          </p>
        </div>

        {/* Treatment */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Treatment</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {treatment.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Information</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {info.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Contact</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(meta?.address ?? 'Maasstraat 103, 1078 HH Amsterdam')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {meta?.address ?? 'Maasstraat 103, 1078 HH Amsterdam'}
              </a>
            </li>
            <li><a href={meta?.phoneHref ?? 'tel:0206731800'} className="hover:text-white transition-colors">{meta?.phone ?? '020-673 1800'}</a></li>
            {meta ? (meta.whatsapp && (
              <li><a href={meta.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            )) : (
              <li><a href="https://wa.me/31618820000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">06-1882-0000 (WhatsApp)</a></li>
            )}
            <li className="pt-1">{meta?.hours ?? 'Mon – Fri: 10:00 – 17:00'}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>© 2026 {meta ? `${meta.practiceName} ${meta.practiceTagline}` : 'Health4Life Chiropractic Amsterdam'}. All rights reserved.</span>
        <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
