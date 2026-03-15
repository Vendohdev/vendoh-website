"use client";

import { ShieldCheck, Lock, Star } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const TIERS = [
  {
    name: "Basic",
    description: "Account created + phone confirmed",
    badgeGradient: "from-gray-400 to-gray-500",
    borderColor: "border-gray-200",
    bgColor: "bg-gray-50",
    textColor: "text-gray-700",
  },
  {
    name: "Verified",
    description: "NIN/BVN verified + 1 booking with 4.0+ stars",
    badgeGradient: "from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    featured: true,
  },
  {
    name: "Certified",
    description: "Trade certified + 10 bookings + 4.5 avg rating",
    badgeGradient: "from-amber-400 to-amber-600",
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
];

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Every vendor is verified",
    description:
      "ID verification, phone confirmation, and progressive trust badges ensure quality.",
  },
  {
    icon: Lock,
    title: "Escrow-protected payments",
    description:
      "Your payment is held securely until the service is completed to your satisfaction.",
  },
  {
    icon: Star,
    title: "Community-driven ratings",
    description:
      "Real reviews from real customers. See ratings, response time, and completed jobs.",
  },
];

export function Trust() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-semibold text-success uppercase tracking-wider mb-3">
              Safety first
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Built on trust
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Three-tier verification, secure payments, and honest reviews
            </p>
          </div>
        </ScrollReveal>

        {/* Verification Tiers */}
        <ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-5 mb-20">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                className={`rounded-2xl border-2 ${tier.borderColor} ${tier.bgColor} p-7 text-center relative overflow-hidden`}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {tier.featured && (
                  <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-white px-2.5 py-1 rounded-full">
                    Most common
                  </div>
                )}

                <div
                  className={`inline-flex w-12 h-12 rounded-full bg-gradient-to-br ${tier.badgeGradient} items-center justify-center mb-4 shadow-sm`}
                >
                  <ShieldCheck size={22} className="text-white" />
                </div>
                <h3 className={`font-bold text-xl ${tier.textColor}`}>{tier.name}</h3>
                <p className="text-sm mt-2.5 text-text-secondary leading-relaxed">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-10">
          {TRUST_POINTS.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-vendoh-blue-light flex items-center justify-center mb-5">
                  <point.icon size={24} className="text-vendoh-blue" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2.5">
                  {point.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 text-center">
            <p className="text-xs text-text-tertiary font-medium">
              Vendoh Technologies Ltd &middot; RC 1815446 &middot; Registered in
              Nigeria
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
