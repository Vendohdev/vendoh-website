/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from "react";

/**
 * V1 social cards — category-targeted, culturally-flavoured, more colourful.
 * Brand rule: client = cool indigo/violet/purple; vendor = warm orange.
 * Each category gets its own gradient, emoji symbol, voice/hustle chip and a
 * cultural tag. Rendered via next/og (Satori) with twemoji for emoji.
 */

export type SizeKey = "square" | "og" | "story";
export type Mode = "client" | "vendor";

export const SIZES: Record<SizeKey, {
  width: number; height: number; pad: number; eyebrow: number; headline: number;
  sub: number; chip: number; tag: number; mark: number; emoji: number; footer: number;
}> = {
  square: { width: 1080, height: 1080, pad: 96, eyebrow: 32, headline: 100, sub: 38, chip: 29, tag: 26, mark: 78, emoji: 300, footer: 34 },
  og: { width: 1200, height: 630, pad: 70, eyebrow: 26, headline: 72, sub: 31, chip: 26, tag: 22, mark: 62, emoji: 210, footer: 28 },
  story: { width: 1080, height: 1920, pad: 112, eyebrow: 36, headline: 118, sub: 44, chip: 34, tag: 30, mark: 92, emoji: 400, footer: 38 },
};

export const dims = (k: SizeKey, scale = 1) => ({ width: SIZES[k].width * scale, height: SIZES[k].height * scale });

type Variant = { l1: string; l2: string; sub: string; chip: string; tag: string };
type Category = {
  key: string; name: string; emoji: string;
  client: [Variant, Variant]; vendor: [Variant, Variant];
};

export const CATEGORIES: Category[] = [
  { key: "beauty", name: "Beauty & Grooming", emoji: "💄",
    client: [
      { l1: "Owambe glam,", l2: "on demand.", sub: "Verified makeup, gele & braids — booked in seconds.", chip: "Hello Vendoh, book a glam team for Saturday owambe", tag: "Detty December ready" },
      { l1: "Your face card", l2: "never declines.", sub: "Top-rated makeup artists & barbers near you.", chip: "Hello Vendoh, find a makeup artist in Lekki", tag: "Verified pros" },
    ],
    vendor: [
      { l1: "Turn Detty December", l2: "into steady income.", sub: "Owambe clients near you — booked and paid, no chasing.", chip: "Fill your weekends with bookings", tag: "Free to join" },
      { l1: "Keep your chair", l2: "fully booked.", sub: "Get discovered by clients within 5km who want your glam.", chip: "No more empty Saturdays", tag: "Founding vendor" },
    ] },
  { key: "home-services", name: "Home Services", emoji: "🔧",
    client: [
      { l1: "Light don go?", l2: "We get your back.", sub: "Verified AC, generator & inverter pros, fast.", chip: "Hello Vendoh, my generator no dey start", tag: "Same-day fixes" },
      { l1: "Leaks, sparks —", l2: "sorted today.", sub: "Plumbers & electricians near you, price agreed upfront.", chip: "Hello Vendoh, I need a plumber in Surulere", tag: "No surprise bills" },
    ],
    vendor: [
      { l1: "Every fault", l2: "is a booking.", sub: "Nearby repair jobs sent straight to your phone.", chip: "Stop waiting for referrals", tag: "Free to join" },
      { l1: "Get paid for", l2: "what you fix.", sub: "Verified badge, secure payouts, clients within 5km.", chip: "Turn skills into steady jobs", tag: "Founding vendor" },
    ] },
  { key: "artisans", name: "Artisans", emoji: "🛠️",
    client: [
      { l1: "Real artisans,", l2: "really verified.", sub: "Electricians, tilers, welders & POP pros you can trust.", chip: "Hello Vendoh, find a tiler near me", tag: "ID-checked" },
      { l1: "Build it right", l2: "the first time.", sub: "Skilled hands near you — rated by real clients.", chip: "Hello Vendoh, I need a welder in Ikeja", tag: "Verified pros" },
    ],
    vendor: [
      { l1: "Your skill", l2: "deserves more jobs.", sub: "Get matched to projects near you — no cold calls.", chip: "Win work beyond word-of-mouth", tag: "Free to join" },
      { l1: "From hustle", l2: "to booked solid.", sub: "A verified badge that wins trust — and bigger jobs.", chip: "Build a reputation that pays", tag: "Founding vendor" },
    ] },
  { key: "auto-transport", name: "Auto & Transport", emoji: "🚗",
    client: [
      { l1: "Car don knock?", l2: "Help dey near.", sub: "Mobile mechanics & car wash that come to you.", chip: "Hello Vendoh, my car no dey start for Yaba", tag: "Mobile service" },
      { l1: "Keep your ride", l2: "road-ready.", sub: "Verified mechanics, tyres & detailing nearby.", chip: "Hello Vendoh, find a mechanic near me", tag: "Trusted hands" },
    ],
    vendor: [
      { l1: "More cars,", l2: "more cash.", sub: "Drivers near you need fixes — get the jobs first.", chip: "Fill your garage with bookings", tag: "Free to join" },
      { l1: "Get paid", l2: "per repair.", sub: "Secure payouts and a verified badge clients trust.", chip: "Turn tools into steady income", tag: "Founding vendor" },
    ] },
  { key: "cleaning", name: "Cleaning", emoji: "🧹",
    client: [
      { l1: "Party done.", l2: "We'll clean up.", sub: "Post-owambe deep clean & fumigation, on demand.", chip: "Hello Vendoh, I need cleaners after my party", tag: "Detty December ready" },
      { l1: "A spotless home,", l2: "zero stress.", sub: "Verified cleaners near you — weekly or one-off.", chip: "Hello Vendoh, book a deep clean in Lekki", tag: "Vetted & trusted" },
    ],
    vendor: [
      { l1: "Every home", l2: "is a booking.", sub: "Steady cleaning jobs near you, paid on completion.", chip: "Turn elbow grease into income", tag: "Free to join" },
      { l1: "Clean up —", l2: "literally.", sub: "Get matched to clients within 5km who need you.", chip: "Fill your week with jobs", tag: "Founding vendor" },
    ] },
  { key: "food-catering", name: "Food & Catering", emoji: "🍲",
    client: [
      { l1: "Party jollof", l2: "that slaps.", sub: "Caterers & small chops for any crowd, booked early.", chip: "Hello Vendoh, I wan book small chops for my party", tag: "Owambe season" },
      { l1: "Dinner for 6,", l2: "sorted tonight.", sub: "Private chefs & caterers near you, on demand.", chip: "Hello Vendoh, get me dinner for 6 in Surulere", tag: "Last-minute ok" },
    ],
    vendor: [
      { l1: "Cook more,", l2: "earn more.", sub: "Owambe & party orders near you — booked ahead.", chip: "Fill your kitchen calendar", tag: "Free to join" },
      { l1: "Your jollof,", l2: "in demand.", sub: "Get discovered by clients craving your cooking.", chip: "Turn your pot into profit", tag: "Founding vendor" },
    ] },
  { key: "events-lifestyle", name: "Events & Lifestyle", emoji: "🎉",
    client: [
      { l1: "From aso-ebi", l2: "to after-party.", sub: "Decor, MC, DJ & ushers — one voice command away.", chip: "Hello Vendoh, plan my owambe for Saturday", tag: "Owambe season" },
      { l1: "Make your day", l2: "unforgettable.", sub: "Verified event pros & photographers near you.", chip: "Hello Vendoh, book a photographer for my event", tag: "Trusted teams" },
    ],
    vendor: [
      { l1: "Own the", l2: "owambe season.", sub: "Event clients near you, booked and paid on time.", chip: "Book out your calendar", tag: "Free to join" },
      { l1: "Your craft,", l2: "centre stage.", sub: "Get discovered by clients planning their big day.", chip: "Turn events into income", tag: "Founding vendor" },
    ] },
  { key: "logistics-errands", name: "Logistics & Errands", emoji: "🛵",
    client: [
      { l1: "Send am", l2: "sharp-sharp.", sub: "Dispatch riders & market runs across your city.", chip: "Hello Vendoh, send this package to Ikeja", tag: "Same-day" },
      { l1: "Errands done,", l2: "hands-free.", sub: "Trusted riders for deliveries & market runs nearby.", chip: "Hello Vendoh, help me do market run", tag: "Real-time tracking" },
    ],
    vendor: [
      { l1: "Every trip", l2: "is money.", sub: "Delivery jobs near you, straight to your phone.", chip: "Ride more, earn more", tag: "Free to join" },
      { l1: "Your bike,", l2: "your business.", sub: "Get matched to clients who need fast delivery.", chip: "Turn trips into steady pay", tag: "Founding vendor" },
    ] },
  { key: "childcare", name: "Childcare", emoji: "👶",
    client: [
      { l1: "Trusted nannies,", l2: "by 4pm today.", sub: "Verified, background-checked childcare near you.", chip: "Hello Vendoh, I need a nanny in Lekki by 4pm", tag: "NIN-verified" },
      { l1: "Focus on work.", l2: "We've got home.", sub: "Weekend & live-in nannies you can trust.", chip: "Hello Vendoh, get me a weekend nanny", tag: "For the corporate mum" },
    ],
    vendor: [
      { l1: "Your care", l2: "earns more.", sub: "Families near you need trusted hands — get booked.", chip: "Turn nurturing into income", tag: "Free to join" },
      { l1: "Weekend care,", l2: "weekend pay.", sub: "Flexible childcare jobs near you, securely paid.", chip: "Earn around your schedule", tag: "Founding vendor" },
    ] },
  { key: "education-lessons", name: "Education & Lessons", emoji: "📚",
    client: [
      { l1: "Top grades", l2: "start at home.", sub: "Verified lesson teachers & tutors near you.", chip: "Hello Vendoh, find a maths tutor in Yaba", tag: "Vetted educators" },
      { l1: "Learn anything,", l2: "from a pro.", sub: "Music, coding & languages — taught one-on-one.", chip: "Hello Vendoh, I want a piano teacher", tag: "1-on-1 lessons" },
    ],
    vendor: [
      { l1: "Teach more,", l2: "earn more.", sub: "Students near you, booked around your schedule.", chip: "Fill your timetable", tag: "Free to join" },
      { l1: "Your knowledge,", l2: "your income.", sub: "Get matched to learners who need your expertise.", chip: "Turn lessons into earnings", tag: "Founding vendor" },
    ] },
  { key: "fashion-tailoring", name: "Fashion & Tailoring", emoji: "🧵",
    client: [
      { l1: "Aso-ebi ready,", l2: "on time.", sub: "Tailors who deliver — agbada, gowns, ankara.", chip: "Hello Vendoh, sew my aso-ebi for Saturday", tag: "No 'come tomorrow'" },
      { l1: "Your style,", l2: "perfectly stitched.", sub: "Verified fashion designers & tailors near you.", chip: "Hello Vendoh, find a tailor in Surulere", tag: "Owambe season" },
    ],
    vendor: [
      { l1: "Sew more,", l2: "stress less.", sub: "Organized orders & deadlines — clients near you.", chip: "Fill your order book", tag: "Free to join" },
      { l1: "Your needle,", l2: "in demand.", sub: "Get discovered by clients who value your craft.", chip: "Turn fabric into profit", tag: "Founding vendor" },
    ] },
  { key: "business-services", name: "Business Services", emoji: "💼",
    client: [
      { l1: "Grow your brand,", l2: "the right way.", sub: "Designers, web & social pros near you, verified.", chip: "Hello Vendoh, I need a logo for my business", tag: "Vetted talent" },
      { l1: "Look the part,", l2: "win the deal.", sub: "Branding, websites & printing — booked easily.", chip: "Hello Vendoh, build me a website", tag: "Pro results" },
    ],
    vendor: [
      { l1: "Your talent,", l2: "more clients.", sub: "Business owners near you need your skills.", chip: "Win briefs, not cold DMs", tag: "Free to join" },
      { l1: "Get hired", l2: "for what you do.", sub: "A verified profile that wins trust and projects.", chip: "Turn skills into contracts", tag: "Founding vendor" },
    ] },
  { key: "health-wellness", name: "Health & Wellness", emoji: "💆",
    client: [
      { l1: "Wellness", l2: "at your door.", sub: "Massage, physio & home nurses — verified & near.", chip: "Hello Vendoh, book a home massage in VI", tag: "Certified pros" },
      { l1: "Feel better,", l2: "at home.", sub: "Trusted home-care & therapy when you need it.", chip: "Hello Vendoh, I need a home nurse", tag: "Vetted carers" },
    ],
    vendor: [
      { l1: "Your care", l2: "reaches more.", sub: "Clients near you need wellness — booked securely.", chip: "Grow your practice", tag: "Free to join" },
      { l1: "Healing hands,", l2: "steady pay.", sub: "Get matched to clients within 5km who need you.", chip: "Turn care into income", tag: "Founding vendor" },
    ] },
];

export const findCategory = (key: string) => CATEGORIES.find((c) => c.key === key);

const CLIENT_GRADIENTS = [
  ["#2A1F5C", "#3F2E6E"], ["#3F2E6E", "#6354B8"], ["#241B4F", "#4A419A"],
  ["#4A419A", "#2A1F5C"], ["#3A2C66", "#6354B8"],
];
const VENDOR_GRADIENTS = [
  ["#F07D4A", "#D4612F"], ["#FF9A6C", "#F07D4A"], ["#E86A3A", "#B8430F"],
  ["#F0834A", "#9C3A12"], ["#FF8A58", "#D4612F"],
];
const INK = "#2A1F5C";
const MARK_ASPECT = 333 / 306;

function theme(mode: Mode, gradientIndex: number) {
  const dark = mode === "client";
  const grads = dark ? CLIENT_GRADIENTS : VENDOR_GRADIENTS;
  const [c1, c2] = grads[gradientIndex % grads.length];
  return {
    dark,
    bg: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
    headline: dark ? "#FFFFFF" : INK,
    accent: dark ? "#FF9A6C" : "#FFFFFF",
    eyebrow: dark ? "#FFC9A8" : "rgba(42,31,92,0.78)",
    sub: dark ? "rgba(255,255,255,0.82)" : "rgba(42,31,92,0.85)",
    chipBg: dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.38)",
    chipText: dark ? "#FFFFFF" : INK,
    pillBg: dark ? "#F07D4A" : INK,
    pillText: "#FFFFFF",
    tagBorder: dark ? "rgba(255,255,255,0.45)" : "rgba(42,31,92,0.45)",
    tagText: dark ? "#FFFFFF" : INK,
    spotlight: dark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.28)",
    ankara: dark ? "rgba(255,255,255,0.16)" : "rgba(42,31,92,0.16)",
    logo: dark ? "white" : "ink",
  };
}

function Lockup({ size, color, logo }: { size: number; color: string; logo: string }) {
  const fontSize = size * 0.74;
  const logoH = fontSize * 0.73;
  const logoW = logoH * MARK_ASPECT;
  const gap = size * 0.14;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} width={logoW} height={logoH} alt="Vendoh" />
      <div style={{ width: Math.max(2, size * 0.04), height: logoH * 1.04, backgroundColor: color, borderRadius: 9999, marginLeft: gap, marginRight: gap }} />
      <div style={{ fontSize, fontWeight: 800, color, letterSpacing: -1 }}>Vendoh</div>
    </div>
  );
}

/** Ankara-style diamond trim. */
function AnkaraBand({ count, color, dotSize }: { count: number; color: string; dotSize: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ width: dotSize, height: dotSize, backgroundColor: color, transform: "rotate(45deg)", borderRadius: dotSize * 0.18, marginRight: dotSize * 0.9 }} />
      ))}
    </div>
  );
}

export function cardElementV1(
  cat: Category, mode: Mode, variantIndex: 0 | 1, sizeKey: SizeKey, logo: string, scale = 1
): ReactElement {
  const base = SIZES[sizeKey];
  const s = Object.fromEntries(Object.entries(base).map(([k, v]) => [k, v * scale])) as typeof base;
  const t = theme(mode, CATEGORIES.indexOf(cat) + variantIndex);
  const v = cat[mode][variantIndex];
  const chipGlyph = mode === "client" ? "🎙️" : "✨";

  return (
    <div style={{
      display: "flex", flexDirection: "column", width: "100%", height: "100%",
      backgroundImage: t.bg, padding: s.pad, justifyContent: "space-between",
      fontFamily: "Inter", position: "relative", overflow: "hidden",
    }}>
      {/* Spotlight + giant emoji */}
      <div style={{ position: "absolute", top: -s.emoji * 0.28, right: -s.emoji * 0.22, width: s.emoji * 1.25, height: s.emoji * 1.25, borderRadius: 9999, backgroundColor: t.spotlight, display: "flex" }} />
      <div style={{ position: "absolute", top: s.emoji * 0.06, right: s.emoji * 0.12, fontSize: s.emoji, display: "flex" }}>{cat.emoji}</div>
      {/* Soft bottom-left blob */}
      <div style={{ position: "absolute", bottom: -s.width * 0.18, left: -s.width * 0.14, width: s.width * 0.5, height: s.width * 0.5, borderRadius: 9999, backgroundColor: t.dark ? "rgba(240,125,74,0.12)" : "rgba(42,31,92,0.08)", display: "flex" }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <Lockup size={s.mark} color={t.dark ? "#FFFFFF" : INK} logo={logo} />
      </div>

      {/* Middle */}
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: s.pad * 0.32 }}>
          <div style={{ width: s.eyebrow * 0.5, height: s.eyebrow * 0.5, backgroundColor: t.accent, borderRadius: 4, marginRight: s.eyebrow * 0.5, transform: "rotate(45deg)" }} />
          <div style={{ fontSize: s.eyebrow, fontWeight: 700, letterSpacing: 3, color: t.eyebrow, textTransform: "uppercase" }}>{cat.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.02 }}>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: t.headline, letterSpacing: -3 }}>{v.l1}</div>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: t.accent, letterSpacing: -3 }}>{v.l2}</div>
        </div>
        <div style={{ fontSize: s.sub, fontWeight: 500, color: t.sub, marginTop: s.pad * 0.4, lineHeight: 1.3, maxWidth: "92%" }}>{v.sub}</div>
        {/* Voice / hustle chip */}
        <div style={{ display: "flex", alignItems: "center", alignSelf: "flex-start", marginTop: s.pad * 0.5, backgroundColor: t.chipBg, borderRadius: 9999, padding: `${s.chip * 0.55}px ${s.chip * 0.9}px`, maxWidth: "94%" }}>
          <div style={{ fontSize: s.chip * 1.05, marginRight: s.chip * 0.5, display: "flex" }}>{chipGlyph}</div>
          <div style={{ fontSize: s.chip, fontWeight: 600, color: t.chipText }}>
            {mode === "client" ? `“${v.chip}”` : v.chip}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ display: "flex", marginBottom: s.pad * 0.4 }}>
          <AnkaraBand count={sizeKey === "og" ? 18 : 12} color={t.ankara} dotSize={s.footer * 0.5} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", backgroundColor: t.pillBg, color: t.pillText, fontSize: s.footer, fontWeight: 700, padding: `${s.footer * 0.5}px ${s.footer * 0.9}px`, borderRadius: 9999 }}>
            {mode === "client" ? "vendoh.io" : "vendoh.io/vendors"}
          </div>
          <div style={{ display: "flex", alignItems: "center", border: `${Math.max(2, s.tag * 0.12)}px solid ${t.tagBorder}`, color: t.tagText, fontSize: s.tag, fontWeight: 700, padding: `${s.tag * 0.45}px ${s.tag * 0.8}px`, borderRadius: 9999, textTransform: "uppercase", letterSpacing: 1 }}>
            {v.tag}
          </div>
        </div>
      </div>
    </div>
  );
}
