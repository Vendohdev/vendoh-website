"use client";

import { Mic, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: Mic,
    title: "Say Hello",
    description:
      "Voice search or type what you need. Vendoh understands English and Pidgin.",
    gradient: "from-vendoh-blue to-vendoh-plum-400",
    bg: "bg-vendoh-blue-light",
  },
  {
    icon: MapPin,
    title: "Get Matched",
    description:
      "Instantly matched with verified vendors near you based on ratings, distance, and availability.",
    gradient: "from-vendoh-orange to-vendoh-orange-400",
    bg: "bg-vendoh-orange-light",
  },
  {
    icon: ShieldCheck,
    title: "Book & Pay",
    description:
      "Secure escrow payments. Real-time tracking. Pay only when you're satisfied.",
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-surface section-glow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-2xl font-extrabold text-vendoh-blue uppercase tracking-wider mb-3">
              Simple by design
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              How Vendoh Works
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              From search to service in three simple steps
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.12}>
              <div className="relative group">
                {/* Card */}
                <div className="rounded-2xl bg-elevated border border-border-light p-8 h-full hover:shadow-lg hover:border-vendoh-blue/15 hover:-translate-y-3 transition-all duration-300 cursor-default">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-sm`}
                    >
                      <step.icon size={24} className="text-white" />
                    </div>
                    <span className="text-5xl font-bold text-border/80 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 lg:-right-5 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                    >
                      <ArrowRight size={20} className="text-text-tertiary" />
                    </motion.div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
