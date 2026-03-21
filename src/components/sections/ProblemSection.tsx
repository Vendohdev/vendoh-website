"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import { Phone, Clock, AlertTriangle, ArrowDown } from "lucide-react";
import Image from "next/image";

const PAIN_POINTS = [
  {
    icon: Phone,
    problem: "Endless WhatsApp broadcasts",
    detail: "\"Anyone know a good plumber in Lekki?\" — sound familiar?",
  },
  {
    icon: Clock,
    problem: "Vendors who ghost you",
    detail: "You pay upfront, they show up late — or not at all.",
  },
  {
    icon: AlertTriangle,
    problem: "Zero accountability",
    detail: "No ratings, no verification, no way to know who you're hiring.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — pain points */}
          <div>
            <ScrollReveal>
              <p className="text-lg font-extrabold text-vendoh-orange uppercase tracking-wider mb-4">
                The problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                Finding reliable service providers in Nigeria shouldn&apos;t be this hard.
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-lg">
                Over 41 million informal businesses power Nigeria&apos;s economy — but
                there&apos;s no trusted way to find, vet, and pay them.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-5">
              {PAIN_POINTS.map((point, i) => (
                <ScrollReveal key={point.problem} delay={i * 0.1}>
                  <motion.div
                    className="flex gap-4 items-start rounded-xl bg-red-50/60 border border-red-100 p-5"
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <point.icon size={20} className="text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{point.problem}</p>
                      <p className="text-sm text-text-secondary mt-0.5">{point.detail}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.35}>
              <div className="mt-8 flex items-center gap-3">
                <ArrowDown size={18} className="text-vendoh-blue animate-bounce" />
                <p className="text-base font-semibold text-vendoh-blue">
                  Vendoh fixes all of this.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — scenario image */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-vendoh-orange/5 rounded-full blur-3xl pointer-events-none" />
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/mockups/midnight-plumbing.png"
                  alt="The struggle of finding reliable vendors in Nigeria"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
