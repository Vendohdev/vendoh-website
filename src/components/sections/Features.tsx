"use client";

import {
  Mic,
  ShieldCheck,
  CreditCard,
  Radio,
  ArrowLeftRight,
  MapPinned,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Mic,
    title: "Voice Search",
    description:
      "Just speak. Vendoh understands English and Pidgin — find vendors without typing.",
    gradient: "from-vendoh-blue to-blue-400",
    bgLight: "bg-vendoh-blue-light",
  },
  {
    icon: ShieldCheck,
    title: "Verified Vendors",
    description:
      "Three-tier verification: Basic, Verified, and Certified. Know who you're hiring.",
    gradient: "from-emerald-500 to-green-400",
    bgLight: "bg-emerald-50",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Escrow protection on every booking. Your money is held safely until the job is done.",
    gradient: "from-vendoh-orange to-amber-400",
    bgLight: "bg-vendoh-orange-light",
  },
  {
    icon: Radio,
    title: "Real-Time Tracking",
    description:
      "Live updates from booking to completion. Know exactly where things stand.",
    gradient: "from-violet-500 to-purple-400",
    bgLight: "bg-violet-50",
  },
  {
    icon: ArrowLeftRight,
    title: "Dual-Role Platform",
    description:
      "Client today, vendor tomorrow. One app, both sides. Switch roles with a swipe.",
    gradient: "from-vendoh-orange to-rose-400",
    bgLight: "bg-vendoh-orange-light",
  },
  {
    icon: MapPinned,
    title: "Nearby Matching",
    description:
      "Find vendors within 5km of you. No more long waits or distant providers.",
    gradient: "from-vendoh-blue to-cyan-400",
    bgLight: "bg-vendoh-blue-light",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-vendoh-orange uppercase tracking-wider mb-3">
              Platform features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
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
      </div>
    </section>
  );
}
