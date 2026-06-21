"use client";

import { useState } from "react";
import { Download } from "lucide-react";

const CATEGORIES: { key: string; name: string }[] = [
  { key: "beauty", name: "Beauty & Grooming" },
  { key: "home-services", name: "Home Services" },
  { key: "artisans", name: "Artisans" },
  { key: "auto-transport", name: "Auto & Transport" },
  { key: "cleaning", name: "Cleaning" },
  { key: "food-catering", name: "Food & Catering" },
  { key: "events-lifestyle", name: "Events & Lifestyle" },
  { key: "logistics-errands", name: "Logistics & Errands" },
  { key: "childcare", name: "Childcare" },
  { key: "education-lessons", name: "Education & Lessons" },
  { key: "fashion-tailoring", name: "Fashion & Tailoring" },
  { key: "business-services", name: "Business Services" },
  { key: "health-wellness", name: "Health & Wellness" },
];
type Mode = "client" | "vendor";

function Card({ mode, cat, variant }: { mode: Mode; cat: string; variant: 0 | 1 }) {
  const preview = `/share/v2?mode=${mode}&cat=${cat}&variant=${variant}&format=square`;
  const dl = (fmt: string, scale: number) => `/share/v2?mode=${mode}&cat=${cat}&variant=${variant}&format=${fmt}&scale=${scale}`;
  const file = (fmt: string) => `vendoh-${mode}-${cat}-v${variant + 1}-${fmt}.png`;
  return (
    <div className="rounded-2xl border border-border-light bg-elevated overflow-hidden">
      <div className="bg-surface p-3 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview} alt={`${mode} ${cat} v${variant + 1}`} className="rounded-lg w-full h-auto shadow-sm" loading="lazy" />
      </div>
      <div className="px-3 py-2.5">
        <p className="text-xs font-semibold text-foreground mb-1.5">Variant {variant + 1}</p>
        <div className="flex flex-wrap gap-1.5">
          {[["Square", dl("square", 3), file("square")], ["Story", dl("story", 3), file("story")], ["Link", dl("og", 2), file("og")]].map(([label, href, fname]) => (
            <a key={label} href={href} download={fname} className="inline-flex items-center gap-1 rounded-full bg-vendoh-blue px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-vendoh-blue-dark transition-colors">
              <Download size={11} />{label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShareKitV2Page() {
  const [mode, setMode] = useState<Mode>("client");
  return (
    <main className="bg-background">
      <section className="bg-vendoh-ink pt-32 pb-12 sm:pt-40 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">Internal · Share kit V2</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Photo Advert Carousels — V2</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">Real Nigerian service photos + Naija-flavoured copy (heavy Pidgin). 13 categories × client &amp; vendor × 2 variants.</p>
          <div className="mt-7 inline-flex gap-1 p-1 rounded-full bg-white/10 border border-white/10">
            {(["client", "vendor"] as Mode[]).map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)} className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${mode === m ? (m === "client" ? "bg-vendoh-blue text-white" : "bg-vendoh-orange text-white") : "text-white/60 hover:text-white"}`}>
                {m === "client" ? "Client-facing" : "Vendor-facing"}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {CATEGORIES.map((c) => (
            <div key={c.key}>
              <h2 className="text-xl font-bold text-foreground mb-4">{c.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card mode={mode} cat={c.key} variant={0} />
                <Card mode={mode} cat={c.key} variant={1} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
