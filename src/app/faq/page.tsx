import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Vendoh | Voice-Powered Service Marketplace",
  description:
    "Frequently asked questions about Vendoh — how voice search works, how vendors are verified, how payments work, and where Vendoh is launching.",
  openGraph: {
    title: "Vendoh FAQ — Everything you need to know",
    description:
      "How voice search works, how vendors are verified, and how secure payments keep every booking safe.",
    url: "https://www.vendoh.io/faq",
  },
};

const FAQS = [
  {
    question: "What is Vendoh?",
    answer:
      "Vendoh is Africa's first voice-powered service marketplace, Nigerian-founded and Africa-focused. Clients speak naturally in English or Nigerian Pidgin to find and book verified local vendors — plumbers, electricians, makeup artists, chefs, nannies and more — with secure payments.",
  },
  {
    question: "How does voice search work?",
    answer:
      "Just say what you need, the way you'd say it to a friend: \"I need a plumber near Ikeja\" or \"abeg, who fit fix generator for Yaba?\" Vendoh understands natural English and Pidgin, then matches you with verified vendors near you based on ratings, distance, and availability. You can always type instead if you prefer.",
  },
  {
    question: "Where is Vendoh available?",
    answer:
      "Vendoh launches first in Lagos (Lekki, Surulere, Ikeja, Victoria Island, Yaba), then Abuja and Port Harcourt, with nationwide expansion to follow. Planned African expansion markets include Accra, Nairobi, Kigali, Kampala, Dar es Salaam, Cape Town and Johannesburg.",
  },
  {
    question: "How are vendors verified?",
    answer:
      "Vendoh uses a three-tier verification system. Basic vendors complete phone confirmation. Verified vendors pass NIN/BVN identity verification and have at least one 4.0+ star booking. Certified vendors hold trade credentials and have at least 10 bookings averaging 4.5 stars from five or more reviews.",
  },
  {
    question: "Is payment on Vendoh safe?",
    answer:
      "Yes. Payments are processed by CBN-licensed payment providers, with prices agreed before you book and a full record of every transaction in the app. Vendors set the payment model that fits their service — for most services, you simply pay on completion.",
  },
  {
    question: "Can I be both a client and a vendor?",
    answer:
      "Absolutely — that's one of Vendoh's defining features. One account, two roles. The teacher who does makeup on weekends, the banker who caters events: switch between Client and Vendor mode with a single tap, and build your reputation on both sides.",
  },
  {
    question: "What languages does voice search support?",
    answer:
      "Vendoh's voice AI is designed around how Africans actually speak. It supports natural English and Nigerian Pidgin at launch, with roadmap support for Yoruba, Igbo, Hausa and Swahili as the platform expands across the continent.",
  },
  {
    question: "How much does Vendoh cost?",
    answer:
      "Vendoh is free to download and free to browse. You only pay for the services you book, at prices agreed upfront. Vendors keep the lion's share of every booking.",
  },
  {
    question: "When does Vendoh launch?",
    answer:
      "Vendoh launches in Lagos in 2026. Join the waitlist for early access — founding members get priority onboarding, early vendor verification, and exclusive launch perks.",
  },
  {
    question: "Is Vendoh an African startup?",
    answer:
      "Yes. Vendoh is a Nigerian-founded, African-native technology company headquartered in Lagos — built by an African team for African users, and designed around the realities of African informal commerce rather than adapted from a Western marketplace template.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-vendoh-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
            Got questions?
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Everything you need to know about voice search, verification,
            secure payments, and the Vendoh launch.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border-light bg-elevated shadow-[0_2px_12px_rgba(42,31,92,0.05)] open:shadow-[0_4px_20px_rgba(42,31,92,0.10)] transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-base sm:text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden
                    className="shrink-0 w-8 h-8 rounded-full bg-vendoh-blue-light text-vendoh-blue flex items-center justify-center text-xl font-medium transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-[15px] text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl bg-vendoh-ink px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              Still have a question?
            </h2>
            <p className="mt-2 text-white/70">
              We&apos;d love to hear from you — or join the waitlist and be
              first in line at launch.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="mailto:hello@vendoh.io"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Email us
              </a>
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:bg-[#FF8A58] transition-colors"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
