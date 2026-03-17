'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import footerContent from '@/content/footer.json';

export default function Footer() {
  const { language } = useLanguage();
  const l = language;

  const t = {
    en: {
      tagline: footerContent.en.tagline,
      treatmentLabel: footerContent.en.treatmentLabel,
      treatment: [
        { label: 'Conditions', href: `/${l}/klachten` },
        { label: 'Techniques', href: `/${l}/techniques` },
        { label: 'About Us', href: `/${l}/about` },
        { label: 'Services & Techniques', href: `/${l}/about/services-techniques` },
        { label: 'Payment Options', href: `/${l}/new-patient-center/payment-options` },
      ],
      infoLabel: footerContent.en.infoLabel,
      info: [
        { label: 'New Patient Center', href: `/${l}/new-patient-center` },
        { label: 'Your First Visit', href: `/${l}/new-patient-center/your-first-visit` },
        { label: 'Meet Dr. Jahani', href: `/${l}/about/meet-your-doctor` },
        { label: 'Patient Forms', href: `/${l}/patient-forms` },
        { label: 'Health Resources', href: `/${l}/health-resources` },
        { label: 'Privacy Policy', href: `/${l}/privacy` },
      ],
      contactLabel: footerContent.en.contactLabel,
      hours: [footerContent.en.hours1, footerContent.en.hours2],
      rights: footerContent.en.rights,
      legal: footerContent.en.legal,
    },
    nl: {
      tagline: footerContent.nl.tagline,
      treatmentLabel: footerContent.nl.treatmentLabel,
      treatment: [
        { label: 'Klachten', href: `/${l}/klachten` },
        { label: 'Technieken', href: `/${l}/techniques` },
        { label: 'Over Ons', href: `/${l}/about` },
        { label: 'Diensten & Technieken', href: `/${l}/about/services-techniques` },
        { label: 'Betalingsopties', href: `/${l}/new-patient-center/payment-options` },
      ],
      infoLabel: footerContent.nl.infoLabel,
      info: [
        { label: 'Nieuwe Patiënten', href: `/${l}/new-patient-center` },
        { label: 'Uw Eerste Bezoek', href: `/${l}/new-patient-center/your-first-visit` },
        { label: 'Ontmoet Dr. Jahani', href: `/${l}/about/meet-your-doctor` },
        { label: 'Patiëntformulieren', href: `/${l}/patient-forms` },
        { label: 'Gezondheidsinfo', href: `/${l}/health-resources` },
        { label: 'Privacybeleid', href: `/${l}/privacy` },
      ],
      contactLabel: footerContent.nl.contactLabel,
      hours: [footerContent.nl.hours1, footerContent.nl.hours2],
      rights: footerContent.nl.rights,
      legal: footerContent.nl.legal,
    },
  };

  const c = t[language];

  return (
    <footer className="bg-[#191919] text-white py-14 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-base leading-tight">Health4Life</div>
              <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">{c.tagline}</p>
        </div>

        {/* Treatment */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.treatmentLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {c.treatment.map(({ label, href }) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.infoLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {c.info.map(({ label, href }) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.contactLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>
              <a href="https://maps.google.com/?q=Maasstraat+103,+1078+HH+Amsterdam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Maasstraat 103<br />1078 HH Amsterdam
              </a>
            </li>
            <li><a href="tel:0206731800" className="hover:text-white transition-colors">020-673 1800</a></li>
            <li><a href="https://wa.me/31618820000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">06-1882-0000 (WhatsApp)</a></li>
            <li className="pt-1">{c.hours[0]}</li>
            <li>{c.hours[1]}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>{c.rights}</span>
        <Link href={`/${l}/privacy`} className="hover:text-white/70 transition-colors">
          {c.legal.split('·')[0].trim()}
        </Link>
      </div>
    </footer>
  );
}
