"use client";

import Link from "next/link";
import {
  Mic,
  ShieldCheck,
  CreditCard,
  Radio,
  ArrowLeftRight,
  MapPinned,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Mic,
    title: "Voice Search",
    description:
      "Say it how you'd say it — \"I need a plumber near Ikeja\" — in English or Pidgin. No typing, no keyword guessing.",
    gradient: "from-vendoh-blue to-vendoh-plum-400",
    bgLight: "bg-vendoh-blue-light",
  },
  {
    icon: ShieldCheck,
    title: "Verified Vendors",
    description:
      "Three-tier verification — Basic, Verified, and Certified — backed by real ID checks. Know exactly who's coming to your door.",
    gradient: "from-emerald-500 to-green-400",
    bgLight: "bg-emerald-50",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Escrow protection on every booking — your money is held safely and only released when the job is done. No more paying upfront and praying.",
    gradient: "from-vendoh-orange to-vendoh-orange-400",
    bgLight: "bg-vendoh-orange-light",
  },
  {
    icon: Radio,
    title: "Real-Time Tracking",
    description:
      "Live updates from booking to completion. Know exactly where things stand.",
    gradient: "from-vendoh-plum-400 to-vendoh-plum-300",
    bgLight: "bg-vendoh-blue-light",
  },
  {
    icon: ArrowLeftRight,
    title: "Dual-Role Platform",
    description:
      "The teacher who does makeup on weekends. The banker who caters events. One tap switches you between Client and Vendor.",
    gradient: "from-vendoh-orange to-vendoh-orange-300",
    bgLight: "bg-vendoh-orange-light",
  },
  {
    icon: MapPinned,
    title: "Nearby Matching",
    description:
      "Matched with vendors within 5km — from Lekki to Surulere to Yaba. Less travel time, faster arrivals, hyperlocal trust.",
    gradient: "from-vendoh-blue to-vendoh-plum-300",
    bgLight: "bg-vendoh-blue-light",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 section-glow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xl sm:text-2xl font-extrabold text-vendoh-orange uppercase tracking-wider mb-3">
              Platform features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-text-secondary font-bold">
              Built for Nigeria. Designed for trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-2xl border border-border-light bg-elevated p-7 h-full overflow-hidden"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Hover gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <feature.icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-vendoh-blue/25 bg-vendoh-blue-50 px-7 py-3 text-sm font-semibold text-vendoh-blue hover:bg-vendoh-blue-light hover:gap-3 transition-all"
            >
              Explore all features in depth <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
