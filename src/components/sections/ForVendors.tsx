"use client";

import { Users, Wallet, Award, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: Users,
    title: "Get discovered by nearby clients",
    description: "Clients within 5km find you automatically. No cold calls.",
  },
  {
    icon: Wallet,
    title: "Secure payments, fast payouts",
    description:
      "Money held in escrow. Released to you on completion. T+1 bank settlement.",
  },
  {
    icon: Award,
    title: "Build your reputation",
    description:
      "Verified badges, ratings, and reviews. Stand out from the crowd.",
  },
];

export function ForVendors() {
  return (
    <section
      id="for-vendors"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A1A] via-vendoh-orange to-[#E85D00]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.08),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold text-white/60 uppercase tracking-widest mb-5">
                For Vendors
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Turn your skills into daily bookings
              </h2>
              <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-lg">
                We bring the bookings. You bring the service. Join 1,800+
                vendors already growing on Vendoh.
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

            <ScrollReveal delay={0.35}>
              <div className="mt-10">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-vendoh-orange shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-px transition-all duration-200"
                >
                  Join as a Vendor
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
                className="relative w-[270px] sm:w-[290px]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="rounded-[2.5rem] border-[6px] border-white/20 bg-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <Image
                    src="/screenshots/vendor-dashboard.png"
                    alt="Vendoh Vendor Dashboard"
                    width={290}
                    height={580}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
