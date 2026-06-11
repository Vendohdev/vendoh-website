"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Info } from "lucide-react";

/**
 * Interactive earnings estimator for prospective vendors.
 * Typical booking prices reflect common market rates per category (in NGN),
 * converted to the selected currency. Shows gross earnings only.
 *
 * Slider ranges per user spec: NGN ₦1,000–₦500,000; USD/GBP/CAD/EUR 10–2,000;
 * other currencies use the rough equivalent of that span, rounded to clean
 * numbers. ngnPerUnit rates snapshot: open.er-api.com, 10 Jun 2026.
 */
const CATEGORIES = [
  { name: "Beauty & Grooming", example: "makeup, braids, barbing", typicalNgn: 15_000 },
  { name: "Cleaning", example: "home & office cleaning", typicalNgn: 25_000 },
  { name: "Home Services", example: "AC repair, plumbing", typicalNgn: 18_000 },
  { name: "Food & Catering", example: "small chops, party jollof", typicalNgn: 80_000 },
  { name: "Fashion & Tailoring", example: "agbada, gowns, ankara", typicalNgn: 35_000 },
  { name: "Auto & Transport", example: "mechanic, car wash", typicalNgn: 20_000 },
  { name: "Events & Lifestyle", example: "decor, photography, DJ", typicalNgn: 100_000 },
  { name: "Childcare", example: "nannies, babysitting", typicalNgn: 12_000 },
];

type Currency = {
  code: string;
  flag: string;
  name: string;
  ngnPerUnit: number;
  min: number;
  max: number;
  step: number;
};

const CURRENCIES: Currency[] = [
  { code: "NGN", flag: "🇳🇬", name: "Nigeria", ngnPerUnit: 1, min: 1_000, max: 500_000, step: 1_000 },
  { code: "GHS", flag: "🇬🇭", name: "Ghana", ngnPerUnit: 116.65, min: 100, max: 25_000, step: 100 },
  { code: "KES", flag: "🇰🇪", name: "Kenya", ngnPerUnit: 10.51, min: 1_000, max: 250_000, step: 1_000 },
  { code: "RWF", flag: "🇷🇼", name: "Rwanda", ngnPerUnit: 0.926, min: 10_000, max: 3_000_000, step: 10_000 },
  { code: "ETB", flag: "🇪🇹", name: "Ethiopia", ngnPerUnit: 8.52, min: 1_500, max: 320_000, step: 500 },
  { code: "EGP", flag: "🇪🇬", name: "Egypt", ngnPerUnit: 26.29, min: 500, max: 100_000, step: 500 },
  { code: "MAD", flag: "🇲🇦", name: "Morocco", ngnPerUnit: 147.08, min: 100, max: 20_000, step: 100 },
  { code: "DZD", flag: "🇩🇿", name: "Algeria", ngnPerUnit: 10.18, min: 1_500, max: 270_000, step: 500 },
  { code: "ZAR", flag: "🇿🇦", name: "South Africa", ngnPerUnit: 82.38, min: 150, max: 35_000, step: 150 },
  { code: "USD", flag: "🇺🇸", name: "United States", ngnPerUnit: 1359.62, min: 10, max: 2_000, step: 10 },
  { code: "GBP", flag: "🇬🇧", name: "United Kingdom", ngnPerUnit: 1819.18, min: 10, max: 2_000, step: 10 },
  { code: "CAD", flag: "🇨🇦", name: "Canada", ngnPerUnit: 975.07, min: 10, max: 2_000, step: 10 },
  { code: "EUR", flag: "🇪🇺", name: "Europe", ngnPerUnit: 1570.24, min: 10, max: 2_000, step: 10 },
  { code: "QAR", flag: "🇶🇦", name: "Qatar", ngnPerUnit: 373.52, min: 30, max: 7_500, step: 30 },
  { code: "AED", flag: "🇦🇪", name: "UAE", ngnPerUnit: 370.22, min: 30, max: 7_500, step: 30 },
  { code: "AUD", flag: "🇦🇺", name: "Australia", ngnPerUnit: 956.04, min: 10, max: 3_000, step: 10 },
];

const WEEKS_PER_MONTH = 4.33;

function snapToRange(value: number, c: Currency) {
  const clamped = Math.min(Math.max(value, c.min), c.max);
  return Math.round(clamped / c.step) * c.step;
}

function typicalPrice(catIndex: number, c: Currency) {
  return snapToRange(CATEGORIES[catIndex].typicalNgn / c.ngnPerUnit, c);
}

export function EarningsCalculator() {
  const [catIndex, setCatIndex] = useState(0);
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0]);
  const [price, setPrice] = useState(typicalPrice(0, CURRENCIES[0]));
  const [bookingsPerWeek, setBookingsPerWeek] = useState(5);

  const monthly = price * bookingsPerWeek * WEEKS_PER_MONTH;
  const yearly = monthly * 12;

  const fmt = new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency.code,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  });

  const selectCategory = (i: number) => {
    setCatIndex(i);
    setPrice(typicalPrice(i, currency));
  };

  const selectCurrency = (code: string) => {
    const next = CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
    setCurrency(next);
    setPrice(typicalPrice(catIndex, next));
  };

  return (
    <div className="rounded-3xl bg-vendoh-ink p-7 sm:p-10 relative overflow-hidden grain">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-vendoh-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 bg-vendoh-blue/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center">
        {/* Controls */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider">
              Estimate your earnings
            </p>
            {/* Currency selector */}
            <select
              value={currency.code}
              onChange={(e) => selectCurrency(e.target.value)}
              aria-label="Currency"
              className="rounded-full bg-white/10 border border-white/20 text-white text-[13px] font-semibold pl-3 pr-8 py-2 outline-none cursor-pointer focus:border-white/50 backdrop-blur-sm"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code} className="text-foreground bg-white">
                  {c.flag} {c.name} ({c.code})
                </option>
              ))}
            </select>
          </div>

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
                {fmt.format(price)}
              </span>
            </div>
            <input
              id="price-slider"
              type="range"
              min={currency.min}
              max={currency.max}
              step={currency.step}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#FF9A6C] cursor-pointer"
            />
            <div className="mt-1 flex justify-between text-[11px] text-white/45">
              <span>{fmt.format(currency.min)}</span>
              <span>e.g. {CATEGORIES[catIndex].example}</span>
              <span>{fmt.format(currency.max)}</span>
            </div>
          </div>

          {/* Bookings slider */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label htmlFor="bookings-slider" className="text-xs font-bold text-white/60 uppercase tracking-wider">
                Bookings per week
              </label>
              <span className="text-sm font-bold text-white tabular-nums">
                {bookingsPerWeek.toLocaleString()}{" "}
                {bookingsPerWeek === 1 ? "service order" : "service orders"}
              </span>
            </div>
            <input
              id="bookings-slider"
              type="range"
              min={1}
              max={5000}
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
              key={`${currency.code}-${Math.round(monthly)}`}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums"
            >
              {fmt.format(monthly)}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1.5 text-white/60 text-sm font-medium">
            potential gross earnings per month
          </p>

          <div className="mt-5 inline-block rounded-2xl bg-white/8 border border-white/10 px-5 py-3">
            <p className="text-lg font-bold text-vendoh-orange-300 tabular-nums">
              {fmt.format(yearly)}
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
            Non-naira figures are indicative, based on recent exchange rates.
          </p>
        </div>
      </div>
    </div>
  );
}
