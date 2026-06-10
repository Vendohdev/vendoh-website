"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type Service = {
  name: string;
  category: string;
  image: string;
};

const ROW_1: Service[] = [
  { name: "Owambe Glam Makeup", category: "Beauty & Grooming", image: "/services/owambe_glam_makeup.webp" },
  { name: "Party Jollof Catering", category: "Food & Catering", image: "/services/party_jollof_50_guests.webp" },
  { name: "Verified Nannies", category: "Childcare", image: "/services/daytime_nanny_8hrs.webp" },
  { name: "AC Repair", category: "Home Services", image: "/services/ac_repair_fault_diagnosis.webp" },
  { name: "Weekly Deep Clean", category: "Cleaning", image: "/services/weekly_deep_clean.webp" },
  { name: "Wedding Planning", category: "Events & Lifestyle", image: "/services/full_wedding_planning.webp" },
  { name: "Mobile Mechanic", category: "Auto & Transport", image: "/services/brake_pad_replacement.webp" },
  { name: "Private Chef", category: "Food & Catering", image: "/services/dinner_party_chef_8_guests.webp" },
  { name: "Gele Tying at Home", category: "Beauty & Grooming", image: "/services/gele_tying_home_service.webp" },
  { name: "Home Painting", category: "Artisans", image: "/services/room_painting_12x12ft.webp" },
];

const ROW_2: Service[] = [
  { name: "Same-City Delivery", category: "Logistics & Errands", image: "/services/same_city_delivery.webp" },
  { name: "Barber on Demand", category: "Beauty & Grooming", image: "/services/skin_fade.webp" },
  { name: "Agbada Tailoring", category: "Fashion & Tailoring", image: "/services/agbada_sewing.webp" },
  { name: "Plumbing Repairs", category: "Home Services", image: "/services/pipe_leak_fix.webp" },
  { name: "Electrician", category: "Artisans", image: "/services/construction_wiring.webp" },
  { name: "Bridal Makeup at Home", category: "Beauty & Grooming", image: "/services/bridal_makeup_home_service.webp" },
  { name: "Fumigation", category: "Cleaning", image: "/services/fumigation_3_bedroom.webp" },
  { name: "Floor Tiling", category: "Artisans", image: "/services/floor_tiling.webp" },
  { name: "Cornrow Braids", category: "Beauty & Grooming", image: "/services/cornrow_braids.webp" },
  { name: "Event Photography", category: "Events & Lifestyle", image: "/services/event_coverage_full_day.webp" },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative w-56 sm:w-64 shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(42,31,92,0.12)] hover:shadow-[0_8px_28px_rgba(42,31,92,0.22)] transition-shadow duration-300 cursor-default select-none">
      <div className="relative aspect-[4/3]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 224px, 256px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-vendoh-ink/85 via-vendoh-ink/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
            {service.category}
          </p>
          <p className="text-sm sm:text-base font-bold text-white leading-snug mt-0.5">
            {service.name}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Service[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-track relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        <div className="flex gap-5 w-max px-2 py-1">
          {doubled.map((service, i) => (
            <ServiceCard key={`${service.name}-${i}`} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PopularServices() {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xl sm:text-2xl font-extrabold text-vendoh-orange uppercase tracking-wider mb-3">
              Trending now
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What Nigerians are searching for
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              Real services, real vendors — from owambe glam to same-day repairs,
              321+ services across 13 categories.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-5">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}
