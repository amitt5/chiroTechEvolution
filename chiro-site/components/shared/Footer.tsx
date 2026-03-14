import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00C9B1] to-[#6366F1] flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">C</span>
              </div>
              <span className="font-extrabold text-white tracking-tight">
                ChiroTech<span className="text-[#00C9B1]">.</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Revenue-first digital marketing for solo chiropractors. Modern.
              Transparent. AI-native.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Get In Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:hello@chirotechevolution.com"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#00C9B1] transition-colors"
              >
                <Mail size={14} />
                hello@chirotechevolution.com
              </a>
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <Phone size={14} />
                Available by appointment
              </div>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center px-4 py-2 rounded-full bg-[#00C9B1]/10 border border-[#00C9B1]/20 text-[#00C9B1] text-xs font-semibold hover:bg-[#00C9B1]/20 transition-colors"
            >
              Free Revenue Audit →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} ChiroTech Evolution. All rights reserved.</p>
          <p className="text-center">
            Built for chiropractors who are done paying for marketing that
            doesn&apos;t produce patients.
          </p>
        </div>
      </div>
    </footer>
  );
}
