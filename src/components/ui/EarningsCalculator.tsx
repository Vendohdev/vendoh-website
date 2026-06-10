"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Info } from "lucide-react";

/**
 * Interactive earnings estimator for prospective vendors.
 * Typical booking prices reflect common market rates for each category —
 * deliberately shows gross earnings only (no commission specifics).
 */
const CATEGORIES = [
  { name: "Beauty & Grooming", example: "makeup, braids, barbing", min: 5_000, max: 60_000, typical: 15_000 },
  { name: "Cleaning", example: "home & office cleaning", min: 8_000, max: 80_000, typical: 25_000 },
  { name: "Home Services", example: "AC repair, plumbing", min: 8_000, max: 70_000, typical: 18_000 },
  { name: "Food & Catering", example: "small chops, party jollof", min: 15_000, max: 400_000, typical: 80_000 },
  { name: "Fashion & Tailoring", example: "agbada, gowns, ankara", min: 10_000, max: 150_000, typical: 35_000 },
  { name: "Auto & Transport", example: "mechanic, car wash", min: 5_000, max: 100_000, typical: 20_000 },
  { name: "Events & Lifestyle", example: "decor, photography, DJ", min: 20_000, max: 500_000, typical: 100_000 },
  { name: "Childcare", example: "nannies, babysitting", min: 5_000, max: 50_000, typical: 12_000 },
];

const WEEKS_PER_MONTH = 4.33;

function formatNaira(n: number) {
  return `₦${Math.round(n).toLocaleString("en-NG")}`;
}

export function EarningsCalculator() {
  const [catIndex, setCatIndex] = useState(0);
  const [price, setPrice] = useState(CATEGORIES[0].typical);
  const [bookingsPerWeek, setBookingsPerWeek] = useState(5);

  const cat = CATEGORIES[catIndex];
  const monthly = price * bookingsPerWeek * WEEKS_PER_MONTH;
  const yearly = monthly * 12;

  const selectCategory = (i: number) => {
    setCatIndex(i);
    setPrice(CATEGORIES[i].typical);
  };

  return (
    <div className="rounded-3xl bg-vendoh-ink p-7 sm:p-10 relative overflow-hidden grain">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-vendoh-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 bg-vendoh-blue/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center">
        {/* Controls */}
        <div>
          <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-5">
            Estimate your earnings
          </p>

          {/* Category chips */}
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2.5">
            What do you do?
          </label>
          <div className="flex flex-wrap gap-2 mb-7">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => selectCategory(i)}
                aria-pressed={i === catIndex}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                  i === catIndex
                    ? "bg-[#FF9A6C] text-white"
                    : "bg-white/10 text-white/75 hover:bg-white/15 border border-white/10"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Price slider */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <label htmlFor="price-slider" className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Your typical price per booking
              </label>
              <span className="text-sm font-bold text-white tabular-nums">
                {formatNaira(price)}
              </span>
            </div>
            <input
              id="price-slider"
              type="range"
              min={cat.min}
              max={cat.max}
              step={1000}
              value={Math.min(Math.max(price, cat.min), cat.max)}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#FF9A6C] cursor-pointer"
            />
            <p className="mt-1 text-[11px] text-white/45">
              e.g. {cat.example}
            </p>
          </div>

          {/* Bookings slider */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label htmlFor="bookings-slider" className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Bookings per week
              </label>
              <span className="text-sm font-bold text-white tabular-nums">
                {bookingsPerWeek} {bookingsPerWeek === 1 ? "job" : "jobs"}
              </span>
            </div>
            <input
              id="bookings-slider"
              type="range"
              min={1}
              max={20}
              step={1}
              value={bookingsPerWeek}
              onChange={(e) => setBookingsPerWeek(Number(e.target.value))}
              className="w-full accent-[#FF9A6C] cursor-pointer"
            />
            <p className="mt-1 text-[11px] text-white/45">
              Vendoh matches you with clients within 5km — many vendors start
              part-time.
            </p>
          </div>
        </div>

        {/* Result */}
        <div className="text-center lg:border-l lg:border-white/10 lg:pl-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-4">
            <TrendingUp size={15} className="text-vendoh-orange-300" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
              Your earning potential
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={Math.round(monthly)}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums"
            >
              {formatNaira(monthly)}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1.5 text-white/60 text-sm font-medium">
            potential gross earnings per month
          </p>

          <div className="mt-5 inline-block rounded-2xl bg-white/8 border border-white/10 px-5 py-3">
            <p className="text-lg font-bold text-vendoh-orange-300 tabular-nums">
              {formatNaira(yearly)}
            </p>
            <p className="text-[11px] text-white/55 font-medium uppercase tracking-wider">
              per year
            </p>
          </div>

          <p className="mt-6 flex items-start gap-1.5 text-left text-[11px] text-white/45 leading-relaxed max-w-xs mx-auto">
            <Info size={13} className="shrink-0 mt-0.5" />
            Estimate before Vendoh&apos;s small service fee on completed
            bookings — there are no signup, listing, or monthly fees. Actual
            earnings depend on your prices, ratings, and demand in your area.
          </p>
        </div>
      </div>
    </div>
  );
}
