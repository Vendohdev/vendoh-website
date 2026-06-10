"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Users,
  ShieldCheck,
  TrendingUp,
  Building2,
  Heart,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { FounderAvatar } from "@/components/ui/FounderAvatar";

const HERO_PHOTOS = [
  { src: "/services/owambe_glam_makeup.webp", alt: "Makeup artist at work during an owambe" },
  { src: "/services/pipe_leak_fix.webp", alt: "Verified plumber fixing a kitchen leak" },
  { src: "/services/party_jollof_50_guests.webp", alt: "Caterer serving party jollof" },
  { src: "/services/agbada_sewing.webp", alt: "Tailor sewing an agbada" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const VALUES = [
  {
    icon: Mic,
    title: "Voice Is How We're Built",
    desc: "We're not a search engine with a microphone button. Voice-first discovery is how we're built, designed around the way Nigerians actually communicate.",
  },
  {
    icon: Heart,
    title: "Vendors Are Partners, Not Commodities",
    desc: "Their dignity, income, and success are core to our mission. We build tools that help vendors grow. When vendors thrive, everyone wins.",
  },
  {
    icon: Zap,
    title: "Speed Over Perfection",
    desc: "We ship fast, learn fast, and fix fast. Lagos doesn't wait, and neither do we.",
  },
  {
    icon: Globe,
    title: "Emerging Markets First, World-Class Always",
    desc: "Built for Lagos street realities with world-class engineering. Not a Western app reskinned for Africa, but a platform engineered for how Africa works.",
  },
  {
    icon: Sparkles,
    title: "Every User Is an Entrepreneur",
    desc: "We believe the millions of Nigerians working in the informal service economy aren't a problem to be solved. They're a force to be empowered, formalised, and unleashed.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Is Earned, Never Assumed",
    desc: "Every vendor is verified. Every transaction is protected. We're building the trust infrastructure Nigeria's service sector has always needed.",
  },
];

const VISION_PILLARS = [
  {
    icon: Building2,
    title: "Formalise the Informal",
    desc: "Give every service provider the digital tools, verified profiles, and structured booking systems that turn informal hustle into professional businesses.",
  },
  {
    icon: TrendingUp,
    title: "Grow Without Gatekeeping",
    desc: "Fair pricing, transparent commissions, and business analytics that help vendors scale on their own terms, not ours.",
  },
  {
    icon: ShieldCheck,
    title: "Build Trust at Scale",
    desc: "Our three-tier verification system and escrow payments create the trust layer the entire sector has been missing.",
  },
  {
    icon: Users,
    title: "Create a Dual-Role Economy",
    desc: "In Nigeria, the teacher does makeup on weekends. The banker caters events. One tap switches between client and vendor, because Nigerians don't fit in one box.",
  },
];

const NUMBERS = [
  { value: "~60%", desc: "of Nigeria's GDP comes from the informal economy" },
  { value: "80%", desc: "of Nigeria's workforce operates informally" },
  {
    value: "41M+",
    desc: "small businesses across Nigeria, most without formal structure",
  },
  {
    value: "95%",
    desc: "of service transactions still happen via WhatsApp, Instagram & word-of-mouth",
  },
  { value: "78%", desc: "of Nigerians send voice messages daily" },
  { value: "30s", desc: "average time from search to booking on Vendoh" },
];

export function AboutContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-vendoh-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-vendoh-blue/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-vendoh-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
              About Vendoh
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Empowering Vendors.{" "}
              <span className="text-vendoh-orange-300">Elevating an Industry.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Vendoh is building Africa&apos;s first voice-powered service
              marketplace, connecting clients with trusted, verified
              vendors through the power of voice, technology, and trust.
            </p>
          </motion.div>
        </div>

        {/* Photo strip — the people Vendoh is built for */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="relative mx-auto max-w-5xl px-4 sm:px-6 mt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {HERO_PHOTOS.map((photo, i) => (
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
              </div>
            ))}
          </div>
        </motion.div>
        <div className="h-8 sm:h-14" />
      </section>

      {/* OUR STORY */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <motion.div {...fadeUp} className="lg:col-span-2">
              <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15]">
                Built from the streets, not borrowed from a template
              </h2>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-3">
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Vendoh wasn&apos;t adapted from a Western marketplace playbook.
                It started with a simple observation from years of living the
                problem: in Nigeria, finding trusted help runs on WhatsApp
                broadcasts, second-hand referrals, and luck — while millions of
                skilled vendors stay invisible to the customers who need them.
              </p>
              <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                So we designed for Nigerian realities from day one: voice
                before text, Pidgin as a first-class language, verification
                built on national identity systems, and payments that protect
                both sides. Nigerian-founded, Lagos-headquartered, built by an
                African team for African users.
              </p>
              <Link
                href="/blog/built-from-the-streets"
                className="mt-6 inline-flex items-center gap-2 text-vendoh-blue font-semibold hover:gap-3 transition-all"
              >
                Read the founding story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              Meet the Founder
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              From crisis maps to marketplace trust
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Founder card */}
            <motion.div
              {...fadeUp}
              className="lg:col-span-2 rounded-3xl bg-vendoh-ink p-8 text-center lg:sticky lg:top-24"
            >
              <FounderAvatar size={176} />
              <h3 className="mt-5 text-xl font-bold text-white">Alex Nwoko</h3>
              <p className="text-sm text-vendoh-orange-300 font-semibold mt-1">
                Founder &amp; CEO
              </p>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                A decade building development sector data systems with UN
                agencies and international organisations across six countries.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Geospatial intelligence", "Trust infrastructure", "Low-connectivity design"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-white/10 flex justify-center gap-4 text-sm">
                <a
                  href="https://alexnwoko.com/founder-journey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-medium transition-colors"
                >
                  Founder journey ↗
                </a>
                <a
                  href="https://www.makket.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-medium transition-colors"
                >
                  MAKKET ↗
                </a>
              </div>
            </motion.div>

            {/* Founder story */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Before Vendoh, Alex spent a decade building data systems for
                the development sector, working with UN agencies and
                international organisations across six countries. He led teams
                that turned human behavioural data, socio-economic insight,
                and geospatial intelligence into early warnings — predicting
                development needs, anticipating crisis scenarios, and powering
                the real-time systems that coordinated emergency responses
                across more than 200 organisations.
              </p>
              <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                Everywhere that work took him, the same three problems kept
                surfacing: fragmented information, broken trust, and invisible
                supply chains. They are the very problems holding back
                Africa&apos;s informal economy today. Vendoh began as an answer
                to those three problems — and a single question:{" "}
                <em>
                  how can Africans build the system that lets a young,
                  fast-growing continent discover and book trusted services
                  faster, on the infrastructure communities already have, while
                  raising the standard of the entire sector?
                </em>
              </p>
              <blockquote className="mt-7 border-l-4 border-vendoh-orange pl-5 py-1">
                <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
                  &ldquo;Build for the world as it actually is, not as we wish
                  it were.&rdquo;
                </p>
                <cite className="mt-2 block text-sm text-text-tertiary not-italic">
                  — the operating principle behind Vendoh&apos;s voice-first,
                  3G-friendly, trust-first design
                </cite>
              </blockquote>
              <p className="mt-7 text-text-secondary text-base sm:text-lg leading-relaxed">
                That principle shows up everywhere in Vendoh: voice before
                text for how Nigerians actually communicate, verification
                anchored to national identity systems, escrow because trust
                must be engineered — not assumed — and density in one
                neighbourhood before breadth across a continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              The Problem
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              A Broken System Hiding in Plain Sight
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="bg-surface rounded-2xl border border-border-light p-8 sm:p-10"
          >
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Nigeria&apos;s service economy employs over 80% of the workforce
              and generates roughly 60% of GDP. Yet almost all of it operates
              informally with no verified reviews, no guaranteed pricing, no
              booking systems. Finding a trusted plumber, makeup artist, or
              caterer still means a WhatsApp scavenger hunt, second-hand
              referrals, and blind hope.
            </p>
            <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
              Meanwhile, over 41 million small businesses and talented vendors
              across the country have no structured way to reach the customers
              who need them. Their skills are real. Their visibility isn&apos;t.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
              The Solution
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Just Say What You Need
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Vendoh replaces the chaos with a single voice command. Speak
              naturally in English or Pidgin, and we connect you
              with the closest verified vendors, instantly.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-border-light bg-white p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-vendoh-blue/10 flex items-center justify-center mb-4">
                <Users size={20} className="text-vendoh-blue" />
              </div>
              <h3 className="font-bold text-foreground text-lg">
                For Clients
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                Search by voice, browse verified vendors, compare prices, book
                instantly, and pay securely. All within a single app.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-border-light bg-white p-7"
            >
              <div className="w-10 h-10 rounded-xl bg-vendoh-orange/10 flex items-center justify-center mb-4">
                <TrendingUp size={20} className="text-vendoh-orange" />
              </div>
              <h3 className="font-bold text-foreground text-lg">
                For Vendors
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                Get discovered by nearby clients, manage bookings, track
                earnings, build your reputation, and switch between client
                and vendor mode with one tap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              Our Vision
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Empowering Vendors, Elevating an Industry
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Vendoh doesn&apos;t compete with vendors. We empower them.
              Our vision is to elevate Nigeria&apos;s service sector from its
              informal roots into a trusted, professional industry where small
              businesses and entrepreneurs can grow and scale to global
              standards.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VISION_PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-border-light bg-surface p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-vendoh-blue/10 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-vendoh-blue" />
                </div>
                <h3 className="font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE-FIRST */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
              Voice That Truly Understands
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Built for How Nigerians Communicate
            </h2>
            <p className="mt-5 text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              78% of Nigerians send voice messages daily. Vendoh is built around
              that reality. Our voice AI understands Nigerian English, Pidgin,
              and the way people naturally describe what they need.
              &ldquo;I need someone to fix my AC in Lekki&rdquo; returns
              verified results in seconds.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-vendoh-blue/10 px-6 py-3">
              <Mic size={20} className="text-vendoh-blue" />
              <span className="text-sm font-medium text-vendoh-blue">
                &ldquo;I need a plumber near Ikeja&rdquo;
              </span>
              <ArrowRight size={16} className="text-vendoh-blue" />
              <span className="text-sm font-medium text-vendoh-blue">
                3 verified results in 2 seconds
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28 section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              What We Believe
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Our Values
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="rounded-2xl border border-border-light bg-white p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-vendoh-blue/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-vendoh-blue" />
                </div>
                <h3 className="font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-20 sm:py-28 bg-surface section-glow">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-blue">
              The Opportunity
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Vendoh in Numbers
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {NUMBERS.map((n, i) => (
              <motion.div
                key={n.value}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="rounded-2xl border border-border-light bg-white p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text">
                  {n.value}
                </div>
                <p className="mt-2 text-text-secondary text-sm">{n.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-20 sm:py-28 section-glow" id="join">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="text-lg font-extrabold uppercase tracking-wider text-vendoh-orange">
              Get Early Access
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Be the First to Experience Vendoh
            </h2>
            <p className="mt-4 text-text-secondary">
              Join our waitlist and we&apos;ll notify you as soon as Vendoh
              launches in your area.
            </p>
            <div className="mt-8">
              <LeadCaptureForm source="waitlist" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="text-text-secondary text-sm">
            Questions? Reach us at{" "}
            <a
              href="mailto:hello@vendoh.io"
              className="text-vendoh-blue font-medium hover:underline"
            >
              hello@vendoh.io
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
