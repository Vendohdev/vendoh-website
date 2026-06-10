"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const VOICES = [
  {
    name: "Ngozi O.",
    role: "Joining as a client",
    area: "Lekki",
    text: "Last December I needed a makeup artist for owambe — spent 3 days asking on WhatsApp groups. With Vendoh I'll just say what I need and get matched instantly.",
    avatar: "N",
    color: "bg-vendoh-blue",
    chip: "bg-vendoh-blue-light text-vendoh-blue",
  },
  {
    name: "Emeka K.",
    role: "Joining as a vendor",
    area: "Surulere",
    text: "I'm a tiler and I lose jobs to guys who know people, not because they're better. Vendoh lets my ratings and work speak for itself — no more begging for referrals.",
    avatar: "E",
    color: "bg-vendoh-orange",
    chip: "bg-vendoh-orange-light text-vendoh-orange-dark",
  },
  {
    name: "Fatima A.",
    role: "Joining as a client",
    area: "Abuja",
    text: "I've been scammed twice by 'recommended' cleaners. The verification system means I can trust who I'm booking. Plus the escrow — you only pay when satisfied.",
    avatar: "F",
    color: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-600",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-2xl font-extrabold text-vendoh-blue uppercase tracking-wider mb-3">
              Voices from the waitlist
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Why people are joining
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Real reasons shared by early waitlist members across Nigeria
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {VOICES.map((voice, i) => (
            <ScrollReveal key={voice.name} delay={i * 0.1}>
              <motion.div
                className="bg-elevated rounded-2xl p-7 border border-border-light h-full flex flex-col"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Quote size={28} className="text-vendoh-blue/15 mb-5" />

                <p className="text-foreground leading-[1.75] flex-1 text-[15px]">
                  &ldquo;{voice.text}&rdquo;
                </p>

                <div className="flex items-center justify-between mt-7 pt-5 border-t border-border-light">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${voice.color} flex items-center justify-center`}
                    >
                      <span className="text-white font-semibold text-sm">
                        {voice.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {voice.name}
                      </p>
                      <p className="text-xs text-text-tertiary">{voice.area}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-bold rounded-full px-2.5 py-1 ${voice.chip}`}
                  >
                    {voice.role}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
