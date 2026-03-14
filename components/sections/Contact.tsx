"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface FormState {
  name: string;
  practice: string;
  email: string;
  phone: string;
  currentProvider: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    practice: "",
    email: "",
    phone: "",
    currentProvider: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Free Revenue Audit Request — ${form.practice || form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPractice: ${form.practice}\nEmail: ${form.email}\nPhone: ${form.phone}\nCurrent Provider: ${form.currentProvider}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@chirotechevolution.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#080C14] relative overflow-hidden noise">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(0,201,177,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-[#00C9B1] font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Let&apos;s Talk Revenue
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-tight mb-6"
            >
              Get Your Free
              <br />
              <span className="bg-gradient-to-r from-[#00C9B1] to-[#6366F1] bg-clip-text text-transparent">
                Revenue Audit.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#94A3B8] text-base leading-relaxed mb-8"
            >
              We&apos;ll review your current website and marketing, identify
              exactly how many new patients you&apos;re losing every month, and
              show you what a revenue-first strategy looks like for your practice.
              No pitch. No pressure. Just clarity.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {[
                "Free, no-obligation revenue audit",
                "Response within 24 hours",
                "No long-term contracts — ever",
                "Built for solo practitioners, not enterprise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                  <CheckCircle size={15} className="text-[#00C9B1] shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-[#00C9B1]/20 bg-[#00C9B1]/5 p-10 text-center">
                <CheckCircle size={48} className="text-[#00C9B1] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">
                  We&apos;ll be in touch within 24 hours.
                </h3>
                <p className="text-[#94A3B8] text-sm">
                  Check your email — your free revenue audit is on its way.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00C9B1]/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                      Practice Name *
                    </label>
                    <input
                      name="practice"
                      required
                      value={form.practice}
                      onChange={handleChange}
                      placeholder="Smith Family Chiropractic"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00C9B1]/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@yourdomain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00C9B1]/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00C9B1]/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                    Current Marketing Provider
                  </label>
                  <select
                    name="currentProvider"
                    value={form.currentProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00C9B1]/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#080C14]">Select one</option>
                    <option value="iMatrix" className="bg-[#080C14]">iMatrix</option>
                    <option value="ChiroMatrix" className="bg-[#080C14]">ChiroMatrix</option>
                    <option value="PerfectPatients" className="bg-[#080C14]">Perfect Patients</option>
                    <option value="Hibu" className="bg-[#080C14]">Hibu</option>
                    <option value="Other" className="bg-[#080C14]">Other legacy provider</option>
                    <option value="None" className="bg-[#080C14]">No current provider</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#94A3B8] font-medium mb-1.5">
                    What&apos;s your biggest marketing frustration right now?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's not working — or what you wish your marketing actually did for your practice..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#00C9B1]/50 focus:bg-white/8 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#00C9B1] text-[#080C14] font-bold text-base hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-[#00C9B1]/20"
                >
                  Get My Free Revenue Audit
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[#94A3B8] text-xs">
                  No contracts. We respond within 24 hours. You can leave anytime.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
