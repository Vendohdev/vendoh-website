"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { Mic } from "lucide-react";

const PERSONAS = [
  {
    name: "The Owambe Queen",
    line: "Every weekend has a party — and every party needs glam.",
    voiceQuery: "“Makeup artist for a wedding, VI, Friday”",
    services: ["Owambe Makeup", "Gele Tying", "Catering", "Event Decor"],
    image: "/services/aso_oke_gele_styling.webp",
    accent: "from-vendoh-orange to-vendoh-orange-400",
  },
  {
    name: "The Corporate Mum",
    line: "Office by day, home running smoothly — without the stress.",
    voiceQuery: "“I need a nanny for weekends, in Surulere”",
    services: ["Verified Nannies", "Deep Cleaning", "Meal Prep", "Laundry"],
    image: "/services/3_hour_babysitting.webp",
    accent: "from-vendoh-blue to-vendoh-plum-400",
  },
  {
    name: "The Remote Pro",
    line: "Works from home. Needs everything around it to just work.",
    voiceQuery: "“Who can fix my Wi-Fi in Yaba today?”",
    services: ["Tech Support", "AC Repair", "Errands", "Generator Fix"],
    image: "/services/wi_fi_router_setup.webp",
    accent: "from-vendoh-plum-500 to-vendoh-blue",
  },
  {
    name: "The Dual-Role Hustler",
    line: "Client on Monday, vendor on Saturday. One app, both sides.",
    voiceQuery: "“Show me makeup bookings near Ajah”",
    services: ["Makeup Gigs", "Photography", "Tutoring", "Side Hustles"],
    image: "/services/natural_glam_makeup.webp",
    accent: "from-vendoh-orange-400 to-vendoh-plum-400",
  },
];

export function Personas() {
  return (
    <section className="py-24 sm:py-32 bg-surface section-glow overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xl sm:text-2xl font-extrabold text-vendoh-orange uppercase tracking-wider mb-3">
              Made for your life
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Built for how Nigerians actually live
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Whatever your week looks like, there&apos;s a verified vendor for it —
              just say the word.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PERSONAS.map((persona, i) => (
            <ScrollReveal key={persona.name} delay={i * 0.08}>
              <TiltCard
                className="group rounded-3xl overflow-hidden bg-elevated border border-border-light shadow-[0_4px_20px_rgba(42,31,92,0.08)] h-full flex flex-col"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={persona.image}
                    alt={persona.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vendoh-ink/70 to-transparent" />
                  <h3 className="absolute bottom-3.5 left-4 right-4 text-lg font-bold text-white">
                    {persona.name}
                  </h3>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {persona.line}
                  </p>

                  {/* Voice query chip */}
                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-vendoh-blue-light/60 border border-vendoh-blue/10 px-3.5 py-2.5">
                    <Mic size={14} className="text-vendoh-blue mt-0.5 shrink-0" />
                    <p className="text-[13px] font-semibold text-vendoh-blue leading-snug">
                      {persona.voiceQuery}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border-light flex flex-wrap gap-1.5">
                    {persona.services.map((service) => (
                      <span
                        key={service}
                        className={`text-[11px] font-semibold text-white rounded-full px-2.5 py-1 bg-gradient-to-r ${persona.accent}`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
