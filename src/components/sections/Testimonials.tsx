"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Chioma A.",
    role: "Client, Lekki",
    text: "I said 'Hello Vendoh, I need a plumber' and within minutes I had three verified options. The one I booked fixed my kitchen sink the same day.",
    rating: 5,
    avatar: "C",
    color: "bg-vendoh-blue",
  },
  {
    name: "Kabiru M.",
    role: "Electrician, Surulere",
    text: "Since joining Vendoh, I get 3-4 bookings a week without having to hustle for clients. The payments are always on time.",
    rating: 5,
    avatar: "K",
    color: "bg-vendoh-orange",
  },
  {
    name: "Aisha B.",
    role: "Client, Abuja",
    text: "The verification badges give me confidence. I know the makeup artist coming to my house has been vetted. That peace of mind is priceless.",
    rating: 5,
    avatar: "A",
    color: "bg-emerald-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-vendoh-blue uppercase tracking-wider mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What people are saying
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Real stories from Lagos, Abuja, and Port Harcourt
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <motion.div
                className="bg-elevated rounded-2xl p-7 border border-border-light h-full flex flex-col"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="text-vendoh-blue/15 mb-5"
                />

                {/* Text */}
                <p className="text-foreground leading-[1.75] flex-1 text-[15px]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-border-light">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center`}>
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-tertiary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
