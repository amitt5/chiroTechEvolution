"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-28 bg-[#080C14] relative overflow-hidden noise">
      {/* Gradient accent line top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, #6366F1, transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#00C9B1]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.445a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.953 2.875c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>

          {/* Quote icon */}
          <Quote
            size={48}
            className="text-[#6366F1]/30 mx-auto mb-6"
            strokeWidth={1}
          />

          {/* Pullquote */}
          <blockquote className="text-[clamp(1.4rem,4vw,2.5rem)] font-extrabold text-white leading-tight mb-8">
            &ldquo;I spent 4 years paying{" "}
            <span className="text-[#94A3B8] line-through">$450/month</span> for
            a website I couldn&apos;t even update myself. Within 90 days of
            switching to ChiroTech Evolution, I had more new patient calls than
            I&apos;d seen{" "}
            <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
              all of last year.
            </span>
            &rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C9B1] to-[#6366F1] flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div>
              <p className="text-white font-bold">Dr. David Mercer, DC</p>
              <p className="text-[#94A3B8] text-sm">
                Mercer Family Chiropractic · Austin, TX
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
