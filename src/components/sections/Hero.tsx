"use client";

import { TypingEffect } from "@/components/animations/TypingEffect";
import { VoiceOrb } from "@/components/animations/VoiceOrb";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const STATS = [
  { value: "5,800+", label: "Users" },
  { value: "1,800+", label: "Verified Vendors" },
  { value: "13", label: "Service Categories" },
  { value: "321", label: "Service Options" },
];

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-vendoh-blue-50/60 via-vendoh-blue-light/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-vendoh-orange-light/20 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            {/* Voice badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-vendoh-blue-light/60 border border-vendoh-blue/10 px-4 py-2 mb-8">
                <VoiceOrb size={28} />
                <span className="text-sm font-medium text-vendoh-blue">
                  Voice-powered search
                </span>
                <Mic size={14} className="text-vendoh-blue/50" />
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
                <TypingEffect />
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={0.16}>
              <p className="mt-7 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
                Find trusted vendors near you — just say what you need.
                Verified professionals, secure payments, real-time tracking.
              </p>
            </ScrollReveal>

            {/* Waitlist */}
            <ScrollReveal delay={0.24}>
              <div className="mt-10">
                <WaitlistForm variant="hero" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Phone Mockup */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative gradient blob behind phone */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-vendoh-blue/10 to-vendoh-orange/5 rounded-full blur-3xl pointer-events-none" />

              {/* Phone frame */}
              <motion.div
                className="relative w-[280px] sm:w-[300px] phone-glow"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="rounded-[2.5rem] border-[6px] border-foreground/8 bg-foreground/5 overflow-hidden shadow-2xl">
                  {/* Status bar notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/8 rounded-b-2xl z-10" />
                  <Image
                    src="/screenshots/home-screen.png"
                    alt="Vendoh App — Home Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating card — active vendors */}
              <motion.div
                className="absolute -left-6 sm:-left-10 bottom-28 glass-card rounded-2xl shadow-xl px-5 py-3.5"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    14+ vendors online
                  </span>
                </div>
                <p className="text-xs text-text-tertiary mt-0.5">within 5km of you</p>
              </motion.div>

              {/* Floating card — rating */}
              <motion.div
                className="absolute -right-2 sm:-right-6 top-20 glass-card rounded-2xl shadow-xl px-5 py-3.5"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-400 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="text-sm font-semibold text-foreground">4.8</span>
                </div>
                <p className="text-xs text-text-tertiary mt-0.5">avg. vendor rating</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.35}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border/60 pt-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary mt-1.5 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
