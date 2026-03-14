"use client";

import { motion } from "framer-motion";
import {
  Globe,
  SearchCheck,
  Bot,
  Megaphone,
  Star,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  revenueAngle: string;
  accent?: boolean;
}

const services: ServiceCardProps[] = [
  {
    icon: <Globe size={22} />,
    title: "Revenue-Optimized Websites",
    description:
      "Custom-designed, conversion-first websites built on open platforms. Integrated booking, click-to-call, and real-time patient acquisition tracking.",
    revenueAngle:
      "Your website should be your highest-performing employee.",
    accent: true,
  },
  {
    icon: <SearchCheck size={22} />,
    title: "SEO & Local Search",
    description:
      "AI-powered local SEO targeting your highest-revenue services. Monthly reporting tied to new patient inquiries — not rankings.",
    revenueAngle:
      "We optimize for revenue, not page-one vanity.",
  },
  {
    icon: <Bot size={22} />,
    title: "GEO — AI Search Visibility",
    description:
      "Your next patient will ask ChatGPT, not Google. We structure your entire web presence so AI systems recommend your practice.",
    revenueAngle:
      "AI search is the fastest-growing patient acquisition channel.",
    accent: true,
  },
  {
    icon: <Megaphone size={22} />,
    title: "Targeted Ads (Google & Meta)",
    description:
      "AI-optimized campaigns with full-funnel tracking from click to booked appointment. You see every dollar and what it produced.",
    revenueAngle:
      "Stop paying for clicks. We optimize for booked appointments.",
  },
  {
    icon: <Star size={22} />,
    title: "Reputation & Review Management",
    description:
      "AI-powered review generation timed to post-visit satisfaction signals. Smart response drafting and cross-platform monitoring.",
    revenueAngle:
      "Every 5-star review is a revenue asset.",
  },
  {
    icon: <UserCheck size={22} />,
    title: "AI Patient Reactivation",
    description:
      "Identify lapsed patients by service history and lifetime value. Deploy personalized re-engagement campaigns when they're most likely to rebook.",
    revenueAngle:
      "5 reactivated patients/month at $500 avg = $30K/year recovered.",
    accent: true,
  },
];

function ServiceCard({
  icon,
  title,
  description,
  revenueAngle,
  accent,
  index,
}: ServiceCardProps & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-2xl border p-7 flex flex-col gap-4 cursor-default transition-all duration-300",
        accent
          ? "border-[#00C9B1]/25 bg-[#00C9B1]/8"
          : "border-[#080C14]/8 bg-white shadow-sm",
        "hover:border-[#00C9B1]/50 hover:shadow-xl hover:shadow-[#00C9B1]/10"
      )}
    >
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          "bg-gradient-to-br from-[#00C9B1]/5 to-transparent"
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center",
          accent
            ? "bg-[#00C9B1]/15 text-[#00C9B1]"
            : "bg-[#00C9B1]/10 text-[#00C9B1] group-hover:bg-[#00C9B1]/20 transition-colors"
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#080C14] font-bold text-lg">{title}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Revenue angle */}
      <div className="mt-auto pt-4 border-t border-[#080C14]/8">
        <p className="text-[#00a897] text-xs font-semibold italic">
          &ldquo;{revenueAngle}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F1F5F9] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #00C9B1 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#080C14] leading-tight mb-5"
          >
            Every Service Is a{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              Revenue Lever.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-lg"
          >
            No feature packages. No bloated tiers. Every service we offer is
            designed around one metric: revenue generated for your practice.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
