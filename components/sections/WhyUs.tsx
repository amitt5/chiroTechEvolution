"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Cpu, Lock } from "lucide-react";

const differentiators = [
  {
    icon: <Cpu size={24} />,
    title: "AI-Native, Not AI-Bolted",
    description:
      "We didn't slap 'AI' onto a legacy platform. Our entire stack — from content to local SEO to patient reactivation — is built on modern AI technology. Because AI search IS search now.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Revenue Metrics, Not Vanity Metrics",
    description:
      "We don't report impressions. We report new patients booked, cost-per-acquisition, and revenue generated. If we can't tie it to your bottom line, we don't do it.",
  },
  {
    icon: <Lock size={24} />,
    title: "No Contracts. No Lock-In.",
    description:
      "Month-to-month only. If we stop performing, you leave. Our business model is built on keeping you happy — not trapping you with 18-month agreements.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "You Own Everything",
    description:
      "Your website runs on open platforms. Your domain, your content, your data. When you work with us, you're building an asset — not renting one on our proprietary system.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-[#F1F5F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Why ChiroTech Evolution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#080C14] leading-tight mb-5"
          >
            The Old Guard Built For{" "}
            <span className="line-through text-[#94A3B8]">2012.</span>
            <br />
            We Built For{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              Now.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg"
          >
            Patient behavior has changed. AI search is here. Your marketing
            should reflect that — not drag you back to a decade-old playbook.
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[#080C14]/5 bg-white p-8 shadow-sm hover:shadow-md hover:border-[#00C9B1]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C9B1]/15 to-[#6366F1]/10 flex items-center justify-center text-[#00C9B1] mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-[#080C14] font-bold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-[#080C14] border border-white/5 overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-white/5">
            <div className="p-5 text-[#94A3B8] text-xs uppercase tracking-wider font-semibold">
              Area
            </div>
            <div className="p-5 text-red-400 text-xs uppercase tracking-wider font-semibold border-l border-white/5">
              Legacy Providers
            </div>
            <div className="p-5 text-[#00C9B1] text-xs uppercase tracking-wider font-semibold border-l border-white/5">
              ChiroTech Evolution
            </div>
          </div>
          {[
            ["Technology", "Proprietary CMS from 2010s", "AI-native, open platform"],
            ["Reporting", "Impressions & clicks", "Patients booked & ROI"],
            ["Contracts", "12–18 month lock-in", "Month-to-month"],
            ["AI Search (GEO)", "Expensive add-on", "Built into everything"],
            ["Support", "Ticket-based, 48hr wait", "Direct, proactive access"],
          ].map(([area, legacy, ours], i) => (
            <div
              key={area}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
            >
              <div className="p-4 text-white text-sm font-medium">{area}</div>
              <div className="p-4 text-red-400/70 text-sm border-l border-white/5">
                {legacy}
              </div>
              <div className="p-4 text-[#00C9B1] text-sm border-l border-white/5 font-medium">
                {ours}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
