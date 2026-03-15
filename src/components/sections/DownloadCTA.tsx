"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { motion } from "framer-motion";

export function DownloadCTA() {
  return (
    <section id="waitlist" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D5CFF] via-vendoh-blue to-[#2A45CC]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.12),transparent_50%)]" />

      {/* Decorative dots pattern */}
      <div className="absolute top-8 left-8 w-32 h-32 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
        backgroundSize: "16px 16px",
      }} />
      <div className="absolute bottom-8 right-8 w-32 h-32 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
        backgroundSize: "16px 16px",
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Ready to find your next vendor?
            </h2>
            <p className="mt-5 text-lg text-white/75 max-w-lg mx-auto">
              Join thousands of Nigerians who trust Vendoh for home services,
              beauty, food, events, and more.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <WaitlistForm variant="footer" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <motion.a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store (Coming Soon)
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/>
                </svg>
                Google Play (Coming Soon)
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
