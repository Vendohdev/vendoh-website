"use client";

import { TypingEffect } from "@/components/animations/TypingEffect";
import { TiltCard } from "@/components/animations/TiltCard";
import { VoiceOrb } from "@/components/animations/VoiceOrb";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { FloatingElements } from "@/components/animations/FloatingElements";

const STATS = [
  { value: "321+", label: "Services Available" },
  { value: "13", label: "Service Categories" },
  { value: "5km", label: "Nearby Matching" },
  { value: "EN + Pidgin", label: "Voice Languages" },
];

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden grain">
      {/* Clean white base with drifting aurora mesh */}
      <div className="absolute inset-0 bg-white pointer-events-none" />
      <div className="aurora" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-vendoh-blue-50/40 to-transparent pointer-events-none" />

      {/* Floating 3D service elements */}
      <FloatingElements />

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

            {/* Brand Tagline */}
            <ScrollReveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
                All your <span className="text-vendoh-orange">vendors</span> and{" "}
                <span className="text-vendoh-blue">customers</span>{" "}
                <span className="gradient-text">in one place.</span>
              </h1>
            </ScrollReveal>

            {/* Voice search demo */}
            <ScrollReveal delay={0.14}>
              <div className="mt-6 text-2xl sm:text-3xl font-semibold leading-snug text-text-secondary/80">
                <TypingEffect />
              </div>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={0.20}>
              <p className="mt-5 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
                Nigeria&apos;s first voice-powered service marketplace. Find verified
                vendors near you — or get discovered by clients who need your skills.
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
              {/* Layered gradient blobs behind phone — depth illusion */}
              <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br from-vendoh-plum-200/25 to-vendoh-blue/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 -left-16 w-48 h-48 bg-gradient-to-tr from-vendoh-orange-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Dual phone mockup — Explore + Dashboard, tilts toward the cursor */}
              <motion.div
                className="relative w-[340px] sm:w-[420px] lg:w-[480px]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <TiltCard max={6} glare={false} className="rounded-3xl">
                  <Image
                    src="/screenshots/explore-dashboard-combo.png"
                    alt="Vendoh App — Client Explore and Vendor Dashboard"
                    width={960}
                    height={900}
                    className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    priority
                  />
                </TiltCard>
              </motion.div>

              {/* Floating card — launch countdown */}
              <motion.div
                className="absolute -left-6 sm:-left-10 bottom-28 glass-card rounded-2xl shadow-xl px-5 py-3.5"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Launching 2026
                  </span>
                </div>
                <p className="text-xs text-text-tertiary mt-0.5">Join the waitlist for early access</p>
              </motion.div>

              {/* Floating card — dual role */}
              <motion.div
                className="absolute -right-2 sm:-right-6 top-20 glass-card rounded-2xl shadow-xl px-5 py-3.5"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-vendoh-blue font-bold text-sm">Client</span>
                  <span className="text-text-tertiary text-xs">&amp;</span>
                  <span className="text-vendoh-orange font-bold text-sm">Vendor</span>
                </div>
                <p className="text-xs text-text-tertiary mt-0.5">Switch roles anytime</p>
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
