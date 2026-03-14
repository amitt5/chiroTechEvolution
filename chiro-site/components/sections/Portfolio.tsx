"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Smartphone, Calendar, TrendingUp } from "lucide-react";

const features = [
  { icon: <Zap size={14} />, label: "98 PageSpeed Score" },
  { icon: <Smartphone size={14} />, label: "Mobile-First Design" },
  { icon: <Calendar size={14} />, label: "Integrated Booking" },
  { icon: <TrendingUp size={14} />, label: "Conversion Optimized" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-[#080C14] relative overflow-hidden noise">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-tight mb-5"
          >
            Built to Convert,{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              Not Just Look Good.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg"
          >
            This is what your practice deserves — a website that books patients
            while you focus on delivering exceptional care.
          </motion.p>
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Browser chrome */}
          <div className="bg-[#0d1220] border-b border-white/5 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 max-w-sm mx-auto h-6 rounded-full bg-[#00C9B1]/10 border border-[#00C9B1]/20 flex items-center justify-center">
              <span className="text-[11px] text-[#00C9B1]/70">
                drpremiumchiropractic.com
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded bg-white/5" />
              <div className="w-4 h-4 rounded bg-white/5" />
            </div>
          </div>

          {/* Site preview */}
          <div className="bg-[#050810] min-h-[480px] relative overflow-hidden">
            {/* Simulated hero */}
            <div className="relative h-72 bg-gradient-to-br from-[#080C14] via-[#0d1525] to-[#0a0f1a] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
              {/* Glow blobs */}
              <div
                className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(0,201,177,0.15) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                }}
              />
              <p className="text-[#00C9B1] text-xs font-semibold uppercase tracking-widest mb-3 relative z-10">
                Spine & Sport Chiropractic
              </p>
              <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4 relative z-10">
                Pain Relief. Peak Performance.
                <br />
                <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
                  Better Life.
                </span>
              </h3>
              <div className="flex gap-3 relative z-10">
                <div className="px-5 py-2.5 rounded-full bg-[#00C9B1] text-[#080C14] font-bold text-sm">
                  Book Online — Free First Visit
                </div>
                <div className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm">
                  Our Services
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-b border-white/5">
              {[
                { v: "2,400+", l: "Patients Helped" },
                { v: "4.9★", l: "Google Rating" },
                { v: "Same Day", l: "Appointments" },
              ].map((s) => (
                <div key={s.l} className="py-4 text-center">
                  <p className="text-white font-extrabold text-lg">{s.v}</p>
                  <p className="text-[#94A3B8] text-xs">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Service cards row */}
            <div className="grid grid-cols-3 gap-3 p-4">
              {["Auto Injury", "Sports Rehab", "Family Care"].map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00C9B1]/10 mx-auto mb-2" />
                  <p className="text-white text-xs font-semibold">{s}</p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5">
                    Learn more →
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature chips + CTA below */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00C9B1]/20 bg-[#00C9B1]/5 text-[#00C9B1] text-xs font-medium"
              >
                {f.icon}
                {f.label}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00C9B1] font-semibold text-sm hover:underline"
          >
            Get a site like this for your practice
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
