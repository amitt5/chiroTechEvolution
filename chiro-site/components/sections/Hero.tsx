"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const headline = ["Still paying", "$200/Month", "for a website", "from 2003?"];

const stats = [
  { value: "73%", label: "of patients judge a practice by its website" },
  { value: "$0", label: "patients your old site books while you sleep" },
  { value: "2025", label: "is when your competitor's site was designed" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080C14]">
      {/* Animated glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 70%)",
          animation: "blob-drift 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          animation: "blob-drift-2 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,201,177,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00C9B1 1px, transparent 1px), linear-gradient(to right, #00C9B1 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 text-[#00C9B1] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00C9B1] animate-pulse" />
            AI-Native Chiropractic Marketing
          </motion.div>

          {/* Staggered headline */}
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mb-10 leading-relaxed"
          >
            Legacy chiropractic marketing companies sell you a package. We
            deliver a revenue engine. Modern websites, AI-powered SEO, and
            transparent reporting — all tied to one metric:{" "}
            <span className="text-white font-semibold">new patients booked.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#00C9B1] text-[#080C14] font-bold text-base hover:scale-105 transition-transform duration-200 shadow-xl shadow-[#00C9B1]/25"
            >
              Get Your Free Revenue Audit
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 text-white font-semibold text-base hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              <Play size={16} className="text-[#00C9B1]" />
              See Our Work
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-[#94A3B8]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#94A3B8] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00C9B1] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
