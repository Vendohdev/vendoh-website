"use client";

import { motion } from "framer-motion";
import {
  Users,
  Code2,
  Megaphone,
  Palette,
  Headphones,
  BrainCircuit,
  Calculator,
  Briefcase,
  Target,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const ROLES = [
  {
    icon: Users,
    title: "Vendor Onboarding & Community Lead",
    type: "Full-time \u00b7 Lagos / Abuja / PH",
    desc: "Lead vendor recruitment, onboarding, and retention. Build the community that powers Vendoh's supply side across Lagos and beyond.",
  },
  {
    icon: Code2,
    title: "Chief Technology Officer (CTO)",
    type: "Full-time \u00b7 Remote / Lagos",
    desc: "Own the technical vision. Lead architecture decisions across mobile, backend, and our voice AI pipeline. Build the engineering team from the ground up.",
  },
  {
    icon: Megaphone,
    title: "Growth & Marketing Lead",
    type: "Full-time \u00b7 Lagos",
    desc: "Drive user acquisition, brand strategy, social media, and content marketing. Own the growth funnel from awareness to first booking.",
  },
  {
    icon: Target,
    title: "Marketing & Activation Agents",
    type: "Contract \u00b7 Lagos / Abuja / PH",
    desc: "On-the-ground activation in key markets. Run vendor onboarding events, distribute marketing materials, and drive local adoption.",
  },
  {
    icon: Briefcase,
    title: "Junior Developer",
    type: "Full-time \u00b7 Remote / Lagos",
    desc: "Ship features on the mobile app and backend. Work directly with the CTO on the product, voice AI integration, and platform infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    type: "Full-time / Contract \u00b7 Remote",
    desc: "Design beautiful, intuitive mobile experiences for Nigeria's diverse user base. Own the design system, user research, and interaction design.",
  },
  {
    icon: Headphones,
    title: "Customer Support & Onboarding Rep",
    type: "Full-time \u00b7 Lagos",
    desc: "Be the voice of Vendoh. Handle support tickets, guide new users through onboarding, and resolve booking disputes with care.",
  },
  {
    icon: BrainCircuit,
    title: "Data & AI Engineer",
    type: "Full-time \u00b7 Remote",
    desc: "Improve our voice AI pipeline, build recommendation algorithms, and use data to drive platform intelligence and vendor matching.",
  },
  {
    icon: Calculator,
    title: "Finance & Operations Manager",
    type: "Full-time \u00b7 Lagos",
    desc: "Manage financial operations, commission reconciliation, vendor payouts, and regulatory compliance (CBN, NDPC, FIRS).",
  },
];

const ROLE_OPTIONS = ROLES.map((r) => ({
  value: r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  label: r.title,
}));

const PHILOSOPHY = [
  {
    title: "No bloated titles",
    desc: "Everyone is a builder. Titles come later; impact comes first.",
  },
  {
    title: "Skills over credentials",
    desc: "We care about what you can do, not where you went to school.",
  },
  {
    title: "Clear goals, clear rewards",
    desc: "Performance bonuses tied to outcomes, not activity.",
  },
  {
    title: "Diverse by default",
    desc: "Building for all of Africa means building with all of Africa.",
  },
];

export function CareersContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-vendoh-ink pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vendoh-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-vendoh-blue/25 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
              Hiring soon
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Build the Future of{" "}
              <span className="text-vendoh-orange-300">Service in Africa</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Vendoh is assembling a founding team of builders, operators, and
              dreamers who want to reshape how 200 million Nigerians find and
              deliver services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
              Roles — Opening Soon
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Building the Vendoh Talent Community
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              All roles are pre-launch positions. Early team members shape the
              product, culture, and future of the company.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROLES.map((role, i) => (
              <motion.div
                key={role.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="rounded-2xl border border-border-light bg-white p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-vendoh-blue/10 flex items-center justify-center mb-4">
                  <role.icon size={20} className="text-vendoh-blue" />
                </div>
                <h3 className="font-bold text-foreground">{role.title}</h3>
                <span className="text-xs text-vendoh-orange font-medium mt-1">
                  {role.type}
                </span>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              How We Hire
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Our Hiring Philosophy
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PHILOSOPHY.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-border-light bg-white p-7"
              >
                <h3 className="font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TALENT WAITLIST */}
      <section className="py-20 sm:py-28 section-glow" id="join">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
              Talent Waitlist
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Interested? Let Us Know
            </h2>
            <p className="mt-4 text-text-secondary">
              We&apos;re not actively hiring yet, but we&apos;re building our
              pipeline. Join the waitlist and we&apos;ll reach out when
              positions open.
            </p>
            <div className="mt-8">
              <LeadCaptureForm source="careers" interestOptions={ROLE_OPTIONS} />
            </div>
            <p className="mt-6 text-sm text-text-secondary">
              Or drop us a line:{" "}
              <a
                href="mailto:careers@vendoh.io"
                className="text-vendoh-blue font-medium hover:underline"
              >
                careers@vendoh.io
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
