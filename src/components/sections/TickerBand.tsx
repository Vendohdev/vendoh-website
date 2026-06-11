import { WaveDivider } from "@/components/animations/Doodles";

const TICKER_ITEMS = [
  "Owambe Makeup",
  "Party Jollof",
  "Verified Nannies",
  "AC Repair",
  "Gele Tying",
  "Mobile Mechanic",
  "Deep Cleaning",
  "Agbada Tailoring",
  "Event Photography",
  "Plumbing",
  "Barbing",
  "Small Chops",
];

/**
 * Glovo/DoorDash-style promo ribbon — an orange band with scrolling
 * service words, capped by wavy tears against the white sections around it.
 */
export function TickerBand() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative bg-gradient-to-r from-vendoh-orange via-[#FF8C52] to-vendoh-orange overflow-hidden">
      <WaveDivider className="text-white" />
      <div className="marquee-track py-3.5 overflow-hidden">
        <div className="animate-marquee">
          <div className="flex items-center gap-6 w-max pr-6">
            {doubled.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-6 text-white font-display text-lg sm:text-xl tracking-wide whitespace-nowrap select-none"
              >
                {item}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-white/70">
                  <path d="M12 0c.6 4.8 1.7 7.3 3.4 8.8C17 10.2 19.4 11 24 11.6v.8c-4.6.6-7 1.4-8.6 2.8-1.7 1.5-2.8 4-3.4 8.8h-.8c-.6-4.8-1.7-7.3-3.4-8.8C6.2 13.8 3.8 13 0 12.4v-.8c3.8-.6 6.2-1.4 7.8-2.8C9.5 7.3 10.6 4.8 11.2 0h.8z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider flip className="text-white" />
    </div>
  );
}
