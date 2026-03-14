"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Full bleed gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C9B1] via-[#00a897] to-[#6366F1]" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#080C14]/70 font-semibold text-sm uppercase tracking-widest mb-5">
            The Decision Is Simple
          </p>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-extrabold text-[#080C14] leading-tight mb-6">
            Ready to Stop Losing Patients
            <br />
            to a Better-Looking Website?
          </h2>
          <p className="text-[#080C14]/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;ll audit your current site, show you exactly what&apos;s
            costing you new patients, and build a plan to fix it. Free. No
            obligation. No 18-month contracts to sign.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-[#080C14] text-white font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-2xl shadow-black/30"
          >
            Get Your Free Revenue Audit
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <p className="mt-6 text-[#080C14]/60 text-sm">
            No contracts · No setup fees · Month-to-month only
          </p>
        </motion.div>
      </div>
    </section>
  );
}
