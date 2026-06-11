"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mic,
  ShieldCheck,
  CreditCard,
  Radio,
  ArrowLeftRight,
  MapPinned,
  Check,
  Phone,
  BadgeCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { Squiggle, Starburst } from "@/components/animations/Doodles";
import { VoiceOrb } from "@/components/animations/VoiceOrb";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const VOICE_PHRASES = [
  { lang: "English", phrase: "“I need a plumber near Ikeja”" },
  { lang: "Pidgin", phrase: "“Abeg, who fit fix generator for Yaba?”" },
  { lang: "English", phrase: "“Find me a makeup artist for Saturday”" },
  { lang: "Pidgin", phrase: "“I wan barb hair for house this evening”" },
];

const TIERS = [
  {
    icon: Phone,
    name: "Basic",
    color: "border-border bg-white",
    badge: "bg-vendoh-blue-light text-vendoh-blue",
    requirements: ["Phone number confirmed", "Profile completed"],
    note: "Every vendor starts here — visible, but clearly labelled.",
  },
  {
    icon: BadgeCheck,
    name: "Verified",
    color: "border-vendoh-blue/30 bg-vendoh-blue-50",
    badge: "bg-vendoh-blue text-white",
    requirements: [
      "NIN/BVN identity verification",
      "At least one booking rated 4.0★ or higher",
    ],
    note: "Identity confirmed against national records.",
  },
  {
    icon: Award,
    name: "Certified",
    color: "border-vendoh-orange/40 bg-vendoh-orange-light",
    badge: "bg-vendoh-orange text-white",
    requirements: [
      "Trade credentials on file",
      "10+ completed bookings",
      "4.5★ average from 5+ reviews",
    ],
    note: "The highest tier — proven professionals with a track record.",
  },
];

const PAYMENT_STEPS = [
  {
    step: "01",
    title: "Agree the price",
    desc: "Clear, upfront pricing before you book — no haggling surprises when the job is done.",
  },
  {
    step: "02",
    title: "Book in seconds",
    desc: "Confirm your booking in the app and your vendor is notified instantly.",
  },
  {
    step: "03",
    title: "Job gets done",
    desc: "The vendor arrives, does the work, and marks the job complete in the app.",
  },
  {
    step: "04",
    title: "Pay & rate",
    desc: "Pay as agreed — vendors set the model that fits their service, and most are paid on completion. Then rate your experience.",
  },
];

const TRACKING_STAGES = [
  "Booking confirmed",
  "Vendor on the way",
  "Job in progress",
  "Completed & confirmed",
];

const LAUNCH_AREAS = [
  "Lekki",
  "Surulere",
  "Ikeja",
  "Victoria Island",
  "Yaba",
];

function SectionLabel({ icon: Icon, text, color = "text-vendoh-orange" }: {
  icon: React.ElementType;
  text: string;
  color?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider ${color}`}>
      <Icon size={16} />
      {text}
    </span>
  );
}

export function FeaturesContent() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#3F2E6E] pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-vendoh-blue/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-vendoh-orange/10 rounded-full blur-3xl pointer-events-none" />
        <Starburst size={32} className="absolute top-28 left-[12%] text-white/25 hidden lg:block" />
        <Starburst size={20} className="absolute bottom-16 right-[15%] text-vendoh-orange-300/50 hidden lg:block" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
              Platform features
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Everything you need, from
              <span className="text-vendoh-orange-300"> “hello”</span> to
              <span className="text-vendoh-orange-300 relative inline-block ml-2">
                job done
                <Squiggle className="absolute -bottom-2.5 left-0 w-full h-3 text-vendoh-orange-300/80" />
              </span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Six features, one goal: make finding and booking trusted services
              as easy as saying what you need.
            </p>
          </motion.div>

          {/* In-page nav chips */}
          <motion.div {...fadeUp} className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              ["#voice-search", "Voice Search"],
              ["#verification", "Verification"],
              ["#payments", "Payments"],
              ["#tracking", "Tracking"],
              ["#dual-role", "Dual-Role"],
              ["#nearby", "Nearby Matching"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1 — VOICE SEARCH */}
      <section id="voice-search" className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <SectionLabel icon={Mic} text="Voice Search" color="text-vendoh-blue" />
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                Say it how you&apos;d say it to a friend
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                No keyword guessing, no endless filters. Vendoh&apos;s voice AI
                understands natural Nigerian English and Pidgin — the way 78%
                of Nigerians already communicate every day. Speak, and verified
                results appear in seconds. Prefer typing? That works too.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Natural English and Nigerian Pidgin at launch",
                  "Yoruba, Igbo, Hausa and Swahili on the roadmap",
                  "Works hands-free — perfect mid-task or on the move",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-text-secondary">
                    <Check size={18} className="text-vendoh-blue mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <div className="rounded-3xl bg-[#3F2E6E] p-8 sm:p-10 shadow-[0_12px_40px_rgba(42,31,92,0.25)]">
                <div className="flex items-center gap-3 mb-7">
                  <VoiceOrb size={40} />
                  <span className="text-white/80 font-semibold">Hello Vendoh…</span>
                </div>
                <div className="space-y-3">
                  {VOICE_PHRASES.map((p) => (
                    <div
                      key={p.phrase}
                      className="flex items-start justify-between gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-3"
                    >
                      <p className="text-[15px] font-medium text-white leading-snug">
                        {p.phrase}
                      </p>
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-vendoh-orange-300 bg-white/10 rounded-full px-2 py-1">
                        {p.lang}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[13px] text-white/50 text-center">
                  Verified results in seconds — matched by rating, distance and availability
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2 — VERIFICATION */}
      <section id="verification" className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={ShieldCheck} text="Verified Vendors" />
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Know exactly who&apos;s coming to your door
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Every vendor on Vendoh carries a verification badge you can see
              before you book. Three tiers, real ID checks, earned — never bought.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`rounded-3xl border ${tier.color} p-7 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full ${tier.badge} px-3.5 py-1.5 text-sm font-bold`}>
                    <tier.icon size={15} />
                    {tier.name}
                  </span>
                  <span className="text-xs font-bold text-text-tertiary">
                    Tier {i + 1}
                  </span>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check size={16} className="text-vendoh-blue mt-0.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-border-light text-[13px] text-text-tertiary leading-relaxed">
                  {tier.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — SECURE PAYMENTS */}
      <section id="payments" className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={CreditCard} text="Secure Payments" />
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              No more paying upfront and praying
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Transparent pricing and secure payments on every booking — for
              most services, you simply pay when the job is done.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PAYMENT_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative rounded-3xl border border-border-light bg-white p-7"
              >
                <span className="text-3xl font-extrabold text-vendoh-blue-light select-none">
                  {s.step}
                </span>
                <h3 className="mt-3 font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {s.desc}
                </p>
                {i < PAYMENT_STEPS.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="hidden lg:block absolute top-1/2 -right-[21px] -translate-y-1/2 text-vendoh-plum-200"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — REAL-TIME TRACKING */}
      <section id="tracking" className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <div className="rounded-3xl bg-white border border-border-light p-8 shadow-[0_8px_30px_rgba(42,31,92,0.08)]">
                <p className="text-sm font-bold text-text-tertiary uppercase tracking-wider mb-6">
                  Live booking status
                </p>
                <div className="space-y-0">
                  {TRACKING_STAGES.map((stage, i) => (
                    <div key={stage} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            i < 2
                              ? "bg-vendoh-blue text-white"
                              : i === 2
                              ? "bg-vendoh-orange text-white animate-pulse"
                              : "bg-border-light text-text-tertiary"
                          }`}
                        >
                          {i < 2 ? <Check size={14} /> : i + 1}
                        </div>
                        {i < TRACKING_STAGES.length - 1 && (
                          <div className={`w-0.5 h-8 ${i < 2 ? "bg-vendoh-blue" : "bg-border-light"}`} />
                        )}
                      </div>
                      <p
                        className={`text-[15px] pt-1.5 font-medium ${
                          i <= 2 ? "text-foreground" : "text-text-tertiary"
                        }`}
                      >
                        {stage}
                        {i === 2 && (
                          <span className="ml-2 text-xs font-bold text-vendoh-orange">
                            • happening now
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <SectionLabel icon={Radio} text="Real-Time Tracking" color="text-vendoh-blue" />
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                Know exactly where things stand
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                From the moment you book to the moment you confirm, every stage
                is visible in the app. No more “he said he&apos;s on his way”
                for three hours — you see the status, live.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Live status updates at every stage of the booking",
                  "In-app notifications, not endless phone calls",
                  "A clear record of every booking, start to finish",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-text-secondary">
                    <Check size={18} className="text-vendoh-blue mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5 — DUAL-ROLE */}
      <section id="dual-role" className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel icon={ArrowLeftRight} text="Dual-Role Platform" />
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Client today. Vendor tomorrow. One app.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              The teacher who does makeup on weekends. The banker who caters
              events. Nigerians don&apos;t fit in one box — neither should
              your account. One tap switches sides.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <motion.div
              {...fadeUp}
              className="group relative rounded-3xl overflow-hidden h-72"
            >
              <Image
                src="/services/wi_fi_router_setup.webp"
                alt="A client getting their home Wi-Fi fixed"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vendoh-blue-dark/90 via-vendoh-blue-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Client mode
                </span>
                <p className="text-white font-semibold text-lg leading-snug">
                  Book trusted help for everything on your list
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden h-72"
            >
              <Image
                src="/services/natural_glam_makeup.webp"
                alt="A vendor doing makeup for a client at home"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vendoh-orange-dark/90 via-vendoh-orange-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Vendor mode
                </span>
                <p className="text-white font-semibold text-lg leading-snug">
                  Turn your skills into income — get discovered nearby
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p {...fadeUp} className="mt-8 text-center text-sm text-text-tertiary">
            One profile, one reputation — your ratings follow you on both sides.
          </motion.p>
        </div>
      </section>

      {/* 6 — NEARBY MATCHING */}
      <section id="nearby" className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <SectionLabel icon={MapPinned} text="Nearby Matching" color="text-vendoh-blue" />
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                Help that&apos;s already in your neighbourhood
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                Vendoh matches you with vendors within 5km — so the barber, the
                plumber, the caterer are minutes away, not across the bridge in
                Lagos traffic. Hyperlocal means faster arrivals, lower transport
                costs, and vendors who know your area.
              </p>
              <div className="mt-7">
                <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-3">
                  First launch areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {LAUNCH_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-vendoh-blue-light text-vendoh-blue px-4 py-1.5 text-sm font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="rounded-full border border-dashed border-border px-4 py-1.5 text-sm font-medium text-text-tertiary">
                    + Abuja & Port Harcourt next
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="relative flex justify-center">
              {/* Radius visual */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-vendoh-blue/30" />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-vendoh-blue/40" />
                <div className="absolute inset-16 rounded-full bg-vendoh-blue/5 border border-vendoh-blue/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-vendoh-ink flex items-center justify-center shadow-lg">
                  <MapPinned size={24} className="text-white" />
                </div>
                {/* Vendor dots */}
                {[
                  ["top-6", "left-16"],
                  ["top-16", "right-8"],
                  ["bottom-10", "left-8"],
                  ["bottom-4", "right-20"],
                  ["top-1/2", "right-2"],
                ].map(([a, b], i) => (
                  <div
                    key={i}
                    className={`absolute ${a} ${b} w-3.5 h-3.5 rounded-full bg-vendoh-orange shadow-[0_0_0_4px_rgba(240,125,74,0.2)]`}
                  />
                ))}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-text-tertiary bg-surface px-2">
                  5km radius
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="rounded-3xl bg-vendoh-ink px-8 py-12 sm:px-14 text-center relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-vendoh-blue/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to try it for yourself?
              </h2>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                Vendoh launches in Lagos in 2026. Join the waitlist — founding
                members get priority onboarding and early vendor verification.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:bg-[#FF8A58] transition-colors"
                >
                  Get Early Access
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Read the FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
