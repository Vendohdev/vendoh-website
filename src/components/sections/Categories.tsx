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
import Image from "next/image";

const CATEGORIES = [
  { icon: Scissors, name: "Beauty & Grooming", image: "/categories/beauty-grooming.jpg", gradient: "from-vendoh-orange to-vendoh-orange-400" },
  { icon: Wrench, name: "Home Services", image: "/categories/home-services.jpg", gradient: "from-vendoh-blue to-vendoh-plum-400" },
  { icon: Hammer, name: "Artisans", image: "/categories/artisans.jpg", gradient: "from-vendoh-orange-dark to-vendoh-orange" },
  { icon: Car, name: "Auto & Transport", image: "/categories/auto-transport.jpg", gradient: "from-vendoh-blue-dark to-vendoh-blue" },
  { icon: SprayCan, name: "Cleaning", image: "/categories/cleaning.jpg", gradient: "from-teal-500 to-teal-400" },
  { icon: ChefHat, name: "Food & Catering", image: "/categories/food-catering.jpg", gradient: "from-vendoh-orange-400 to-vendoh-orange-300" },
  { icon: PartyPopper, name: "Events & Lifestyle", image: "/categories/events-lifestyle.jpg", gradient: "from-vendoh-plum-400 to-vendoh-plum-300" },
  { icon: Truck, name: "Logistics & Errands", image: "/categories/logistics-errands.jpg", gradient: "from-emerald-500 to-emerald-400" },
  { icon: Baby, name: "Childcare", image: "/categories/childcare.jpg", gradient: "from-vendoh-orange to-vendoh-orange-300" },
  { icon: GraduationCap, name: "Education & Lessons", image: "/categories/education-lessons.jpg", gradient: "from-vendoh-blue to-vendoh-plum-300" },
  { icon: Shirt, name: "Fashion & Tailoring", image: "/categories/fashion-tailoring.jpg", gradient: "from-vendoh-plum-500 to-vendoh-plum-400" },
  { icon: Briefcase, name: "Business Services", image: "/categories/business-services.jpg", gradient: "from-vendoh-plum-300 to-vendoh-plum-200" },
  { icon: Heart, name: "Health & Wellness", image: "/categories/health-wellness.jpg", gradient: "from-vendoh-orange to-vendoh-plum-400" },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xl sm:text-2xl font-extrabold text-[#6B4A8A] uppercase tracking-wider mb-3">
              Service marketplace
            </p>
            <h2 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              13 categories, 321+ services — launching soon
            </h2>
            <p className="mt-4 text-lg text-text-secondary font-bold italic">
              From plumbers to makeup artists, chefs to electricians — find exactly who you need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={Math.min(i * 0.04, 0.4)}>
              <motion.div
                className="group rounded-2xl overflow-hidden relative cursor-pointer h-44 sm:h-52"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-2 shadow-sm`}
                  >
                    <cat.icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug drop-shadow-sm">
                    {cat.name}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
