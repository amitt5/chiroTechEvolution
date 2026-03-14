"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWay = [
  "Template shared by 10,000+ other practices",
  "3D spine simulator nobody uses",
  "Bloated $300–$1,500/month invoices",
  "Dashboards showing 'impressions' — not patients",
  "18-month contracts you can't escape",
  "Call support: get a ticket number",
];

const newWay = [
  "Custom-designed, conversion-optimized",
  "Integrated appointment booking that actually works",
  "Transparent pricing tied to real outcomes",
  "Dashboard showing patients booked & cost-per-acquisition",
  "Month-to-month — we earn your trust every month",
  "Direct access to your strategist — no tickets",
];

export default function Problem() {
  return (
    <section className="relative py-28 bg-[#080C14] noise overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, #00C9B1, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            The Ugly Truth
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-tight mb-6"
          >
            Most Chiropractic Websites Look Like{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              They Were Built in 2003.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg leading-relaxed"
          >
            Legacy chiropractic marketing companies haven&apos;t evolved in a
            decade. Same templates. Same dashboards full of vanity metrics. Same
            excuse when results don&apos;t show up: &ldquo;SEO takes time.&rdquo;
          </motion.p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={18} className="text-red-400" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider">
                  The Old Guard
                </p>
                <p className="text-white font-bold text-lg">
                  iMatrix, ChiroMatrix & friends
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-[#94A3B8]"
                >
                  <X
                    size={16}
                    className="text-red-400 mt-0.5 shrink-0"
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Mock old website thumbnail */}
            <div className="mt-8 rounded-xl border border-red-500/10 bg-[#0a0f1a] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800/50 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                <div className="flex-1 mx-2 h-4 rounded bg-white/5 text-[9px] text-[#94A3B8] flex items-center px-2">
                  bestchiropractor2004.com
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="h-16 bg-blue-900/30 rounded flex items-center justify-center">
                  <span className="text-[10px] text-blue-300/50 font-mono">
                    WELCOME TO DR. SMITH CHIROPRACTIC — EST. 2001
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {["Home", "About Us", "Services", "Contact"].slice(0, 3).map(
                    (t) => (
                      <div
                        key={t}
                        className="h-5 bg-gray-600/40 rounded text-[8px] text-[#94A3B8]/60 flex items-center justify-center"
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>
                <div className="space-y-1">
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-4/5" />
                  <div className="h-2 bg-white/5 rounded w-3/5" />
                </div>
                <div className="h-8 bg-blue-700/40 rounded text-[9px] text-blue-300/60 flex items-center justify-center">
                  CLICK HERE TO LEARN ABOUT OUR SERVICES
                </div>
              </div>
            </div>
          </motion.div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#00C9B1]/20 bg-[#00C9B1]/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#00C9B1]/10 border border-[#00C9B1]/20 flex items-center justify-center">
                <Check size={18} className="text-[#00C9B1]" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider">
                  The New Way
                </p>
                <p className="text-white font-bold text-lg">ChiroTech Evolution</p>
              </div>
            </div>
            <ul className="space-y-4">
              {newWay.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-[#94A3B8]"
                >
                  <Check
                    size={16}
                    className="text-[#00C9B1] mt-0.5 shrink-0"
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Mock modern website thumbnail */}
            <div className="mt-8 rounded-xl border border-[#00C9B1]/10 bg-[#050810] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a0f1a]/80 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-2 h-4 rounded bg-[#00C9B1]/10 text-[9px] text-[#00C9B1]/70 flex items-center px-2">
                  drpremiumchiro.com
                </div>
              </div>
              <div className="p-4 space-y-2 bg-gradient-to-b from-[#080C14] to-[#0d1220]">
                <div className="h-16 rounded-lg bg-gradient-to-r from-[#00C9B1]/20 to-[#6366F1]/20 border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[10px] text-white font-bold">
                      Book Your Appointment Today
                    </p>
                    <p className="text-[8px] text-[#00C9B1] mt-0.5">
                      Online booking • Same-day available
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {["Home", "Services", "About", "Contact"].map((t) => (
                    <div
                      key={t}
                      className="h-5 bg-white/5 rounded text-[7px] text-[#94A3B8] flex items-center justify-center"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="h-7 bg-gradient-to-r from-[#00C9B1] to-[#6366F1] rounded text-[9px] text-white font-bold flex items-center justify-center">
                  → Book a Free Consultation
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#94A3B8] text-base">
            The chiropractor across town with the packed schedule?
          </p>
          <p className="text-white font-bold text-xl mt-1">
            Their website isn&apos;t better looking by accident.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
