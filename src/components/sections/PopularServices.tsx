"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ROW_1 = [
  { name: "Owambe Makeup", emoji: "💄", gradient: "from-[#F07D4A] to-[#FF8C52]" },
  { name: "Jollof Rice Catering", emoji: "🍚", gradient: "from-[#8250B0] to-[#9B6DC4]" },
  { name: "Verified Nannies", emoji: "👶", gradient: "from-[#D4612F] to-[#F07D4A]" },
  { name: "AC Repair", emoji: "❄️", gradient: "from-[#6354B8] to-[#8250B0]" },
  { name: "House Cleaning", emoji: "🧹", gradient: "from-[#FF8C52] to-[#FFA366]" },
  { name: "Wedding Planner", emoji: "💒", gradient: "from-[#9B6DC4] to-[#B08AD4]" },
  { name: "Mobile Mechanic", emoji: "🔧", gradient: "from-[#F07D4A] to-[#D4612F]" },
  { name: "Private Chef", emoji: "👨‍🍳", gradient: "from-[#4A419A] to-[#6354B8]" },
  { name: "Generator Repair", emoji: "⚡", gradient: "from-[#FF8C52] to-[#F07D4A]" },
  { name: "Home Painting", emoji: "🎨", gradient: "from-[#8250B0] to-[#6354B8]" },
];

const ROW_2 = [
  { name: "Delivery Agents", emoji: "📦", gradient: "from-[#6354B8] to-[#4A419A]" },
  { name: "Barber on Demand", emoji: "💈", gradient: "from-[#F07D4A] to-[#FF8C52]" },
  { name: "Ankara Tailor", emoji: "🧵", gradient: "from-[#9B6DC4] to-[#8250B0]" },
  { name: "Nannies on Demand", emoji: "🍼", gradient: "from-[#D4612F] to-[#F07D4A]" },
  { name: "Plumber", emoji: "🔩", gradient: "from-[#8250B0] to-[#9B6DC4]" },
  { name: "Electrician", emoji: "💡", gradient: "from-[#FF8C52] to-[#FFA366]" },
  { name: "Makeup at Home", emoji: "✨", gradient: "from-[#6354B8] to-[#8250B0]" },
  { name: "Event DJ", emoji: "🎧", gradient: "from-[#F07D4A] to-[#D4612F]" },
  { name: "Fumigation", emoji: "🛡️", gradient: "from-[#4A419A] to-[#6354B8]" },
  { name: "Tiling Expert", emoji: "🏠", gradient: "from-[#9B6DC4] to-[#B08AD4]" },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof ROW_1;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-track relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        <div className="flex gap-4 w-max">
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${item.gradient} px-6 py-3 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-default select-none`}
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                {item.name}
              </span>
            </div>
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
              Popular services on Vendoh — from owambe makeup to generator repair
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
