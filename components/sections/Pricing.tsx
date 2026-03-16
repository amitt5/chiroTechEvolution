"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tier {
  name: string;
  description: string;
  highlighted: boolean;
}

interface Feature {
  label: string;
  tiers: [boolean, boolean, boolean];
}

const tiers: Tier[] = [
  {
    name: "Foundation",
    description: "Website + local presence essentials",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "Foundation + SEO, reputation & ads",
    highlighted: true,
  },
  {
    name: "Authority",
    description: "Everything — full revenue stack",
    highlighted: false,
  },
];

const features: Feature[] = [
  { label: "Professional Website (Unlimited Edits)", tiers: [true, true, true] },
  { label: "Mobile-First Optimization", tiers: [true, true, true] },
  { label: "Online Appointment Booking", tiers: [true, true, true] },
  { label: "Secure Lead Forms", tiers: [true, true, true] },
  { label: "Website Analytics Dashboard", tiers: [true, true, true] },
  { label: "U.S.-Based Direct Support", tiers: [true, true, true] },
  { label: "Local SEO & Google Business Profile", tiers: [false, true, true] },
  { label: "Monthly SEO Content", tiers: [false, true, true] },
  { label: "Review Automation & Monitoring", tiers: [false, true, true] },
  { label: "Social Media Posts", tiers: [false, true, true] },
  { label: "Email Marketing", tiers: [false, true, true] },
  { label: "Google Ads Management", tiers: [false, false, true] },
  { label: "Facebook / Instagram Ads", tiers: [false, false, true] },
  { label: "AI Search Optimization (GEO)", tiers: [false, false, true] },
  { label: "AI Patient Reactivation", tiers: [false, false, true] },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#080C14] py-28 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Plans & Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#F8FAFC] leading-tight mb-5"
          >
            Everything Your Practice Needs.{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              Nothing You Don&apos;t.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg"
          >
            No hidden fees. No long-term lock-ins. Custom plan options available
            — talk to us and we&apos;ll build the right stack for your practice.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="overflow-x-auto rounded-2xl border border-white/[0.08]"
        >
          <table className="w-full min-w-[640px] border-collapse">
            {/* Tier headers */}
            <thead>
              <tr>
                {/* Feature label column */}
                <th className="text-left px-6 py-5 text-[#94A3B8] text-sm font-medium w-[40%] bg-white/[0.02] border-b border-white/[0.06]">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={cn(
                      "px-6 py-5 text-center border-b border-white/[0.06] w-[20%]",
                      tier.highlighted
                        ? "bg-gradient-to-b from-[#00C9B1]/15 to-[#00C9B1]/5 border-t-2 border-t-[#00C9B1]"
                        : "bg-white/[0.02]"
                    )}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      {tier.highlighted && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#080C14] bg-[#00C9B1] px-2.5 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <span
                        className={cn(
                          "font-extrabold text-lg",
                          tier.highlighted ? "text-[#F8FAFC]" : "text-[#94A3B8]"
                        )}
                      >
                        {tier.name}
                      </span>
                      <span className="text-[#94A3B8]/70 text-xs font-normal">
                        {tier.description}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature rows */}
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.label}
                  className={cn(
                    "border-b border-white/[0.04] last:border-b-0",
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  )}
                >
                  <td className="px-6 py-4 text-[#94A3B8] text-sm">
                    {feature.label}
                  </td>
                  {feature.tiers.map((included, ti) => (
                    <td
                      key={ti}
                      className={cn(
                        "px-6 py-4 text-center",
                        tiers[ti].highlighted && "bg-[#00C9B1]/5"
                      )}
                    >
                      {included ? (
                        <Check
                          size={18}
                          className="text-[#00C9B1] mx-auto"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <span className="text-[#94A3B8]/30 text-base select-none">
                          &mdash;
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#94A3B8] mb-6">
            Not sure which plan fits your practice?{" "}
            <span className="text-[#F8FAFC]">We&apos;ll figure it out together.</span>
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#00C9B1] hover:bg-[#00b3a0] text-[#080C14] font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-colors duration-200 shadow-lg shadow-[#00C9B1]/25"
          >
            Get Your Free Audit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
