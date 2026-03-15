"use client";

import {
  Wrench,
  Scissors,
  ChefHat,
  PartyPopper,
  Truck,
  Baby,
  GraduationCap,
  Shirt,
  Car,
  Briefcase,
  SprayCan,
  Hammer,
  Heart,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const CATEGORIES = [
  { icon: Wrench, name: "Home Services", count: "45+", gradient: "from-blue-500 to-blue-400" },
  { icon: Scissors, name: "Beauty & Grooming", count: "38+", gradient: "from-pink-500 to-pink-400" },
  { icon: ChefHat, name: "Food & Catering", count: "32+", gradient: "from-amber-500 to-amber-400" },
  { icon: PartyPopper, name: "Events & Lifestyle", count: "28+", gradient: "from-purple-500 to-purple-400" },
  { icon: Truck, name: "Logistics & Errands", count: "18+", gradient: "from-emerald-500 to-emerald-400" },
  { icon: Baby, name: "Childcare", count: "12+", gradient: "from-rose-500 to-rose-400" },
  { icon: GraduationCap, name: "Education & Lessons", count: "15+", gradient: "from-indigo-500 to-indigo-400" },
  { icon: Shirt, name: "Fashion & Tailoring", count: "22+", gradient: "from-violet-500 to-violet-400" },
  { icon: Car, name: "Auto & Transport", count: "16+", gradient: "from-slate-500 to-slate-400" },
  { icon: Briefcase, name: "Business Services", count: "20+", gradient: "from-cyan-500 to-cyan-400" },
  { icon: SprayCan, name: "Cleaning", count: "25+", gradient: "from-teal-500 to-teal-400" },
  { icon: Hammer, name: "Artisans", count: "30+", gradient: "from-orange-500 to-orange-400" },
  { icon: Heart, name: "Health & Wellness", count: "20+", gradient: "from-red-500 to-red-400" },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-vendoh-blue uppercase tracking-wider mb-3">
              Service marketplace
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              321+ services across 13 categories
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              From plumbers to makeup artists, chefs to electricians — find exactly who you need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={Math.min(i * 0.04, 0.4)}>
              <motion.div
                className="group rounded-2xl border border-border-light bg-elevated p-5 cursor-pointer overflow-hidden relative"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {/* Hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`} />

                <div className="relative">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-3.5 shadow-sm`}
                  >
                    <cat.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-tertiary mt-1.5 font-medium">
                    {cat.count} vendors
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
