"use client";

import { ArrowRight, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DoodleArrow, Starburst, WaveDivider } from "@/components/animations/Doodles";

/**
 * Compact homepage hook for the supply side — the full vendor story
 * (benefits, dashboard, earnings calculator, FAQ) lives on /vendors.
 */
export function ForVendors() {
  return (
    <section id="for-vendors" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A6C] via-vendoh-orange to-[#D4612F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.08),transparent_50%)]" />
      <WaveDivider className="absolute top-0 left-0 right-0 text-white" />
      <Starburst size={34} className="absolute top-10 right-[8%] text-white/30 hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Hook */}
          <div className="flex-1">
            <ScrollReveal>
              <span className="inline-block text-sm font-extrabold text-white/60 uppercase tracking-wider mb-3">
                For Vendors
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight">
                Turn your skills into steady income
              </h2>
              <p className="mt-3 text-lg text-white/75 leading-relaxed max-w-xl">
                Clients within 5km, secure same-day payouts, and a verified
                reputation that compounds — no shop required.
              </p>
            </ScrollReveal>
          </div>

          {/* Actions */}
          <DoodleArrow className="hidden lg:block w-16 h-12 text-white/50 -rotate-12 shrink-0" />
          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="/vendors"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-vendoh-orange shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-px transition-all duration-200"
              >
                Become a Founding Vendor
                <ArrowRight size={16} />
              </a>
              <a
                href="/vendors#earnings"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <TrendingUp size={16} />
                See what you could earn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
