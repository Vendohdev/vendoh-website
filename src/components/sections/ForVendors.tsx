"use client";

import { Users, Wallet, ArrowRight, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: Users,
    title: "Clients find you — no cold calls",
    description:
      "Nearby clients within 5km are matched to you by your services, ratings, and availability.",
  },
  {
    icon: Wallet,
    title: "Get paid securely, same-day",
    description:
      "Escrow-protected payments, released on job completion, straight to your bank account.",
  },
];

export function ForVendors() {
  return (
    <section
      id="for-vendors"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A6C] via-vendoh-orange to-[#D4612F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.08),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-lg font-extrabold text-white/60 uppercase tracking-wider mb-5">
                For Vendors
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Your skills deserve more customers
              </h2>
              <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
                Stop depending on word-of-mouth alone. Vendoh connects you directly
                with clients who need your services — right in your area.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-5">
              {BENEFITS.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 0.12}>
                  <div className="flex gap-4 items-start group">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <benefit.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/65 mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <a
                href="/vendors#earnings"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/12 border border-white/20 backdrop-blur-sm px-5 py-4 hover:bg-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    See what your skills could earn
                  </p>
                  <p className="text-xs text-white/65">
                    Try the earnings estimator — pick your trade, slide your prices
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/70 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-6">
                <a
                  href="/vendors"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-vendoh-orange shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-px transition-all duration-200"
                >
                  Become a Founding Vendor
                  <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Screenshot */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative flex justify-center">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75 pointer-events-none" />

              <motion.div
                className="relative w-[300px] sm:w-[340px]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/screenshots/vendor-dashboard.png"
                  alt="Vendoh Vendor Dashboard"
                  width={680}
                  height={1200}
                  className="w-full h-auto rounded-2xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
