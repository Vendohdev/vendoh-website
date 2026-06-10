"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  UserPlus,
  BadgeCheck,
  CalendarCheck,
  Wallet,
  Phone,
  CreditCard,
  Award,
  Check,
  Smartphone,
  ArrowLeftRight,
} from "lucide-react";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { EarningsCalculator } from "@/components/ui/EarningsCalculator";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const STEPS = [
  {
    icon: UserPlus,
    title: "Create your profile",
    desc: "List your services, set your prices, add photos of your work. Takes minutes, from your phone.",
  },
  {
    icon: BadgeCheck,
    title: "Get verified",
    desc: "Confirm your phone to start, then verify your identity with NIN/BVN to earn your Verified badge.",
  },
  {
    icon: CalendarCheck,
    title: "Get booked",
    desc: "Nearby clients are matched to you automatically — by rating, distance, and availability. No cold calls.",
  },
  {
    icon: Wallet,
    title: "Get paid",
    desc: "Escrow-protected payments released straight to your bank account when the client confirms the job.",
  },
];

const VENDOR_PHOTOS = [
  { src: "/services/skin_fade.webp", alt: "Barber giving a skin fade", label: "Barbers" },
  { src: "/services/gown_design.webp", alt: "Fashion designer fitting a gown", label: "Tailors & Designers" },
  { src: "/services/construction_wiring.webp", alt: "Electrician wiring a building", label: "Electricians" },
  { src: "/services/dinner_party_chef_8_guests.webp", alt: "Private chef plating dinner", label: "Chefs & Caterers" },
];

const NEEDS = [
  {
    icon: Smartphone,
    title: "A smartphone",
    desc: "Vendoh is designed for everyday Android phones and real Nigerian network conditions.",
  },
  {
    icon: Phone,
    title: "A phone number",
    desc: "Phone confirmation gets you listed at the Basic tier and visible to clients.",
  },
  {
    icon: CreditCard,
    title: "NIN or BVN",
    desc: "Identity verification unlocks your Verified badge — clients book verified vendors first.",
  },
  {
    icon: Award,
    title: "Your skills",
    desc: "Trade credentials are optional, but they put you on the path to the Certified tier.",
  },
];

const FAQS = [
  {
    q: "How much does it cost to join?",
    a: "Nothing. No signup fees, no monthly fees, no listing fees. Vendoh only takes a small service fee on completed bookings — if you don't earn, we don't earn.",
  },
  {
    q: "How do I get paid?",
    a: "Clients pay into escrow when they book. The moment they confirm the job is complete, the money is released directly to your bank account. No chasing payments, no \"I'll send it later.\"",
  },
  {
    q: "Can I be a client too?",
    a: "Yes — every Vendoh account is dual-role. Hire a plumber on Monday, take makeup bookings on Saturday. One tap switches sides, and your reputation follows you on both.",
  },
  {
    q: "Where is Vendoh launching first?",
    a: "Lagos first — Lekki, Surulere, Ikeja, Victoria Island, and Yaba — followed by Abuja and Port Harcourt. Joining the waitlist now puts you in the founding vendor group for priority onboarding.",
  },
];

export function VendorsContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-vendoh-ink pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-vendoh-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-vendoh-blue/25 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
              For vendors
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Your skills deserve{" "}
              <span className="text-vendoh-orange-300">more customers</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Stop depending on word-of-mouth alone. Vendoh puts your work in
              front of clients within 5km who are ready to book — and makes
              sure you get paid for every job.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#vendor-waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:bg-[#FF8A58] transition-colors"
              >
                Join as a founding vendor
              </a>
              <Link
                href="/features#verification"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                How verification works
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Vendor photo strip */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="relative mx-auto max-w-5xl px-4 sm:px-6 mt-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {VENDOR_PHOTOS.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${
                  i % 2 === 1 ? "sm:translate-y-6" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vendoh-ink/80 to-transparent" />
                <p className="absolute bottom-3 left-3.5 right-3.5 text-sm font-bold text-white">
                  {photo.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="h-8 sm:h-14" />
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              How it works
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              From signup to first payout
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-3xl border border-border-light bg-white p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-vendoh-orange-light flex items-center justify-center">
                    <step.icon size={22} className="text-vendoh-orange" />
                  </div>
                  <span className="text-3xl font-extrabold text-vendoh-orange-light select-none">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EARNINGS POTENTIAL */}
      <section id="earnings" className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              The opportunity
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              See what your skills could earn
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Pick your trade, set your price, slide your weekly bookings —
              and see the size of the opportunity waiting in your area.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <EarningsCalculator />
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
                What you need
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                If you have the skills, you&apos;re already qualified
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                No shop required. No CAC registration required to start. Vendoh
                is built for the way Nigeria&apos;s 41 million informal
                businesses actually operate — you bring the skills, we bring
                the structure.
              </p>
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-vendoh-blue-light/60 border border-vendoh-blue/10 px-5 py-4">
                <ArrowLeftRight size={20} className="text-vendoh-blue shrink-0" />
                <p className="text-sm text-vendoh-blue font-medium leading-snug">
                  Already a client on Vendoh? Switch to vendor mode with one
                  tap — same account, same reputation.
                </p>
              </div>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {NEEDS.map((need, i) => (
                <motion.div
                  key={need.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                  className="rounded-2xl border border-border-light bg-white p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-vendoh-blue/10 flex items-center justify-center mb-4">
                    <need.icon size={20} className="text-vendoh-blue" />
                  </div>
                  <h3 className="font-bold text-foreground text-[15px]">
                    {need.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                    {need.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VENDOR FAQ */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              Vendor questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              The things vendors ask us first
            </h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <motion.details
                key={faq.q}
                {...fadeUp}
                className="group rounded-2xl border border-border-light bg-white shadow-[0_2px_12px_rgba(42,31,92,0.05)]"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden
                    className="shrink-0 w-8 h-8 rounded-full bg-vendoh-orange-light text-vendoh-orange flex items-center justify-center text-xl font-medium transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-[15px] text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* VENDOR WAITLIST */}
      <section id="vendor-waitlist" className="py-20 sm:py-24 bg-vendoh-ink relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-vendoh-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Become a founding vendor
            </h2>
            <p className="mt-4 text-white/70">
              Founding vendors get priority onboarding, early verification, and
              first access to clients in their area when Vendoh launches.
            </p>
            <ul className="mt-6 space-y-2 text-left inline-block">
              {[
                "Free to join — no signup or monthly fees",
                "Priority verification at launch",
                "Founding vendor badge on your profile",
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-[15px] text-white/80">
                  <Check size={18} className="text-vendoh-orange-300 mt-0.5 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <WaitlistForm variant="footer" defaultRole="vendor" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
