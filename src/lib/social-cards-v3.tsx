/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from "react";

/**
 * V2 social cards — photo-forward, Naija-flavoured (heavy Pidgin mix).
 * Real service photos top, brand colour block bottom (square/story); side-by-side
 * on OG. Client = cool indigo/violet/purple, Vendor = warm orange.
 */
export type SizeKey = "square" | "og" | "story";
export type Mode = "client" | "vendor";

export const SIZES: Record<SizeKey, {
  width: number; height: number; photo: number; pad: number; eyebrow: number;
  headline: number; sub: number; chip: number; tag: number; mark: number; footer: number;
}> = {
  square: { width: 1080, height: 1080, photo: 560, pad: 60, eyebrow: 27, headline: 82, sub: 33, chip: 26, tag: 23, mark: 60, footer: 31 },
  og: { width: 1200, height: 630, photo: 470, pad: 58, eyebrow: 24, headline: 62, sub: 29, chip: 24, tag: 21, mark: 54, footer: 27 },
  story: { width: 1080, height: 1920, photo: 940, pad: 84, eyebrow: 32, headline: 102, sub: 40, chip: 31, tag: 27, mark: 76, footer: 36 },
};

export const dims = (k: SizeKey, scale = 1) => ({ width: SIZES[k].width * scale, height: SIZES[k].height * scale });

type Variant = { l1: string; l2: string; sub: string; chip: string; tag: string };
type Category = { key: string; name: string; emoji: string; client: [Variant, Variant]; vendor: [Variant, Variant] };

export const CATEGORIES: Category[] = [
  { key: "beauty", name: "Beauty & Grooming", emoji: "💄",
    client: [
      { l1: "Make your face", l2: "shine well well.", sub: "Verified makeup, gele & braids wey go set — sharp-sharp.", chip: "Hello Vendoh, find makeup artist wey sabi for Lekki", tag: "Detty December ready" },
      { l1: "Owambe glam,", l2: "on demand.", sub: "Top-rated makeup artists & stylists near you.", chip: "Hello Vendoh, book a glam team for Saturday", tag: "Verified pros" } ],
    vendor: [
      { l1: "Turn Detty December", l2: "into steady income.", sub: "Owambe clients near you — booked and paid, no chasing.", chip: "Fill your weekends with bookings", tag: "Free to join" },
      { l1: "Make your chair", l2: "no dey empty.", sub: "Clients wey want your glam dey within 5km. Carry go.", chip: "No more empty Saturdays", tag: "Founding vendor" } ] },
  { key: "home-services", name: "Home Services", emoji: "🔧",
    client: [
      { l1: "Light don go?", l2: "We dey your back.", sub: "Verified AC, gen & inverter pros wey go fix am sharp.", chip: "Hello Vendoh, my gen no gree start", tag: "Same-day fixes" },
      { l1: "Leaks & sparks,", l2: "sorted today.", sub: "Plumbers & electricians near you, price agreed upfront.", chip: "Hello Vendoh, I need a plumber in Surulere", tag: "No surprise bills" } ],
    vendor: [
      { l1: "Every fault", l2: "na money.", sub: "Repair jobs near you dey land for your phone. No stress.", chip: "Stop waiting for referrals", tag: "Free to join" },
      { l1: "Get paid for", l2: "what you fix.", sub: "Verified badge, secure payouts, clients within 5km.", chip: "Turn skills into steady jobs", tag: "Founding vendor" } ] },
  { key: "artisans", name: "Artisans", emoji: "🛠️",
    client: [
      { l1: "Real artisans,", l2: "really verified.", sub: "Electricians, tilers & welders you can trust.", chip: "Hello Vendoh, find a tiler near me", tag: "ID-checked" },
      { l1: "Person wey sabi", l2: "the work.", sub: "Verified hands near you wey go do am correct.", chip: "Hello Vendoh, I need welder for Ikeja", tag: "Verified pros" } ],
    vendor: [
      { l1: "Your handwork", l2: "fit pay well.", sub: "Jobs near you dey — no need to dey beg for referral.", chip: "Win work beyond word-of-mouth", tag: "Free to join" },
      { l1: "From hustle", l2: "to booked solid.", sub: "A verified badge that wins trust — and bigger jobs.", chip: "Build a reputation that pays", tag: "Founding vendor" } ] },
  { key: "auto-transport", name: "Auto & Transport", emoji: "🚗",
    client: [
      { l1: "Motor don knock?", l2: "Help dey near.", sub: "Mobile mechanics & car wash wey go come meet you.", chip: "Hello Vendoh, my motor no dey start for Yaba", tag: "Mobile service" },
      { l1: "Keep your ride", l2: "road-ready.", sub: "Verified mechanics, tyres & detailing nearby.", chip: "Hello Vendoh, find a mechanic near me", tag: "Trusted hands" } ],
    vendor: [
      { l1: "More cars,", l2: "more cash.", sub: "Drivers near you need fixes — grab the jobs first.", chip: "Fill your garage with bookings", tag: "Free to join" },
      { l1: "Use your spanner,", l2: "collect your money.", sub: "Secure payout + verified badge wey clients trust.", chip: "Turn tools into steady income", tag: "Founding vendor" } ] },
  { key: "cleaning", name: "Cleaning", emoji: "🧹",
    client: [
      { l1: "Party done?", l2: "We go clear am.", sub: "Post-owambe deep clean & fumigation, sharp-sharp.", chip: "Hello Vendoh, I need cleaners after my party", tag: "Detty December ready" },
      { l1: "A spotless home,", l2: "zero stress.", sub: "Verified cleaners near you — weekly or one-off.", chip: "Hello Vendoh, book a deep clean in Lekki", tag: "Vetted & trusted" } ],
    vendor: [
      { l1: "Every home", l2: "is a booking.", sub: "Steady cleaning jobs near you, paid on completion.", chip: "Turn elbow grease into income", tag: "Free to join" },
      { l1: "Clean house,", l2: "clean money.", sub: "Clients within 5km wey need you. Make I show you.", chip: "Fill your week with jobs", tag: "Founding vendor" } ] },
  { key: "food-catering", name: "Food & Catering", emoji: "🍲",
    client: [
      { l1: "Party jollof wey", l2: "go burst brain.", sub: "Caterers & small chops for any crowd — book on time.", chip: "Hello Vendoh, I wan book small chops for my party", tag: "Owambe season" },
      { l1: "Dinner for 6,", l2: "sorted tonight.", sub: "Private chefs & caterers near you, on demand.", chip: "Hello Vendoh, get me dinner for 6 in Surulere", tag: "Last-minute ok" } ],
    vendor: [
      { l1: "Cook more,", l2: "earn more.", sub: "Owambe & party orders near you — booked ahead.", chip: "Fill your kitchen calendar", tag: "Free to join" },
      { l1: "Your pot of soup,", l2: "na gold.", sub: "Clients dey crave your cooking. Make money dey enter.", chip: "Turn your pot into profit", tag: "Founding vendor" } ] },
  { key: "events-lifestyle", name: "Events & Lifestyle", emoji: "🎉",
    client: [
      { l1: "From aso-ebi", l2: "to after-party.", sub: "Decor, MC, DJ & ushers — just talk am, e go set.", chip: "Hello Vendoh, plan my owambe for Saturday", tag: "Owambe season" },
      { l1: "Make your day", l2: "unforgettable.", sub: "Verified event pros & photographers near you.", chip: "Hello Vendoh, book a photographer for my event", tag: "Trusted teams" } ],
    vendor: [
      { l1: "Own the", l2: "owambe season.", sub: "Event clients near you, booked and paid. No wahala.", chip: "Book out your calendar", tag: "Free to join" },
      { l1: "Your craft,", l2: "centre stage.", sub: "Get discovered by clients planning their big day.", chip: "Turn events into income", tag: "Founding vendor" } ] },
  { key: "logistics-errands", name: "Logistics & Errands", emoji: "🛵",
    client: [
      { l1: "Send am", l2: "sharp-sharp.", sub: "Dispatch riders & market runs across your area.", chip: "Hello Vendoh, carry this package go Ikeja", tag: "Same-day" },
      { l1: "Errands done,", l2: "hands-free.", sub: "Trusted riders for deliveries & market runs nearby.", chip: "Hello Vendoh, help me do market run", tag: "Live tracking" } ],
    vendor: [
      { l1: "Every trip", l2: "na better money.", sub: "Delivery jobs near you dey land for your phone.", chip: "Ride more, earn more", tag: "Free to join" },
      { l1: "Your bike,", l2: "your business.", sub: "Get matched to clients who need fast delivery.", chip: "Turn trips into steady pay", tag: "Founding vendor" } ] },
  { key: "childcare", name: "Childcare", emoji: "👶",
    client: [
      { l1: "Trusted nannies,", l2: "by 4pm today.", sub: "Verified, background-checked childcare near you.", chip: "Hello Vendoh, I need a nanny in Lekki by 4pm", tag: "NIN-verified" },
      { l1: "Focus on work,", l2: "we hold am.", sub: "Weekend & live-in nannies wey you fit trust.", chip: "Hello Vendoh, get me weekend nanny", tag: "For the corporate mum" } ],
    vendor: [
      { l1: "Your care", l2: "earns more.", sub: "Families near you need trusted hands — get booked.", chip: "Turn nurturing into income", tag: "Free to join" },
      { l1: "Weekend care,", l2: "weekend money.", sub: "Flexible jobs near you, secure pay. Soft life.", chip: "Earn around your schedule", tag: "Founding vendor" } ] },
  { key: "education-lessons", name: "Education & Lessons", emoji: "📚",
    client: [
      { l1: "Top grades", l2: "start at home.", sub: "Verified lesson teachers & tutors near you.", chip: "Hello Vendoh, find a maths tutor in Yaba", tag: "Vetted educators" },
      { l1: "Make your pikin", l2: "sabi book.", sub: "Lesson teachers wey go teach am well, near you.", chip: "Hello Vendoh, I want lesson teacher for my pikin", tag: "1-on-1 lessons" } ],
    vendor: [
      { l1: "Teach more,", l2: "earn more.", sub: "Students near you, booked around your schedule.", chip: "Fill your timetable", tag: "Free to join" },
      { l1: "Your sense,", l2: "na correct money.", sub: "Learners wey need your knowledge dey near you.", chip: "Turn lessons into earnings", tag: "Founding vendor" } ] },
  { key: "fashion-tailoring", name: "Fashion & Tailoring", emoji: "🧵",
    client: [
      { l1: "Aso-ebi ready,", l2: "no 'come tomorrow'.", sub: "Tailors wey go deliver — agbada, gown, ankara.", chip: "Hello Vendoh, sew my aso-ebi for Saturday", tag: "On time, every time" },
      { l1: "Your style,", l2: "perfectly stitched.", sub: "Verified designers & tailors near you.", chip: "Hello Vendoh, find a tailor in Surulere", tag: "Owambe season" } ],
    vendor: [
      { l1: "Sew more,", l2: "stress less.", sub: "Organized orders & deadlines — clients near you.", chip: "Fill your order book", tag: "Free to join" },
      { l1: "Your needle", l2: "na money machine.", sub: "Clients wey value your handwork dey find you.", chip: "Turn fabric into profit", tag: "Founding vendor" } ] },
  { key: "business-services", name: "Business Services", emoji: "💼",
    client: [
      { l1: "Grow your brand,", l2: "the right way.", sub: "Designers, web & social pros near you, verified.", chip: "Hello Vendoh, I need a logo for my business", tag: "Vetted talent" },
      { l1: "Make your business", l2: "shine online.", sub: "Branding, website & social wey go move am.", chip: "Hello Vendoh, build me website wey go sell", tag: "Pro results" } ],
    vendor: [
      { l1: "Your talent,", l2: "more clients.", sub: "Business owners near you need your skills.", chip: "Win briefs, not cold DMs", tag: "Free to join" },
      { l1: "Your skill,", l2: "na correct hustle.", sub: "Get hired for wetin you sabi do well.", chip: "Turn skills into contracts", tag: "Founding vendor" } ] },
  { key: "health-wellness", name: "Health & Wellness", emoji: "💆",
    client: [
      { l1: "Wellness", l2: "at your door.", sub: "Massage, physio & home nurses — verified & near.", chip: "Hello Vendoh, book a home massage in VI", tag: "Certified pros" },
      { l1: "Rest your body,", l2: "for your house.", sub: "Home care & therapy wey go reach you. Soft life.", chip: "Hello Vendoh, I need a home nurse", tag: "Vetted carers" } ],
    vendor: [
      { l1: "Your care", l2: "reaches more.", sub: "Clients near you need wellness — booked securely.", chip: "Grow your practice", tag: "Free to join" },
      { l1: "Healing hands,", l2: "steady money.", sub: "Clients within 5km wey need you. Make I connect you.", chip: "Turn care into income", tag: "Founding vendor" } ] },
];

export const findCategory = (key: string) => CATEGORIES.find((c) => c.key === key);
// Each creative (category × mode × variant) has its own distinct photo.
export const photoFile = (catKey: string, mode: Mode, variant: 0 | 1) =>
  `/ads/v3/${catKey}-${mode}-${variant + 1}.jpg`;

const CLIENT_GRADIENTS = [["#2A1F5C", "#3F2E6E"], ["#3F2E6E", "#6354B8"], ["#241B4F", "#4A419A"], ["#4A419A", "#2A1F5C"], ["#3A2C66", "#6354B8"]];
const VENDOR_GRADIENTS = [["#F07D4A", "#D4612F"], ["#FF9A6C", "#F07D4A"], ["#E86A3A", "#B8430F"], ["#F0834A", "#9C3A12"], ["#FF8A58", "#D4612F"]];
const INK = "#2A1F5C";
const MARK_ASPECT = 333 / 306;

function theme(mode: Mode, gi: number) {
  const dark = mode === "client";
  const [c1, c2] = (dark ? CLIENT_GRADIENTS : VENDOR_GRADIENTS)[gi % 5];
  return {
    dark,
    block: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
    headline: dark ? "#FFFFFF" : INK,
    accent: dark ? "#FF9A6C" : "#FFFFFF",
    eyebrow: dark ? "#FFC9A8" : "rgba(42,31,92,0.82)",
    sub: dark ? "rgba(255,255,255,0.85)" : "rgba(42,31,92,0.88)",
    chipBg: dark ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.40)",
    chipText: dark ? "#FFFFFF" : INK,
    pillBg: dark ? "#F07D4A" : INK,
    tagBorder: dark ? "rgba(255,255,255,0.5)" : "rgba(42,31,92,0.5)",
    tagText: dark ? "#FFFFFF" : INK,
    ankara: dark ? "rgba(255,255,255,0.16)" : "rgba(42,31,92,0.18)",
  };
}

function Lockup({ size, logo }: { size: number; logo: string }) {
  const fontSize = size * 0.74;
  const logoH = fontSize * 0.73;
  const gap = size * 0.14;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} width={logoH * MARK_ASPECT} height={logoH} alt="Vendoh" />
      <div style={{ width: Math.max(2, size * 0.04), height: logoH * 1.04, backgroundColor: "#FFFFFF", borderRadius: 9999, marginLeft: gap, marginRight: gap }} />
      <div style={{ fontSize, fontWeight: 800, color: "#FFFFFF", letterSpacing: -1 }}>Vendoh</div>
    </div>
  );
}

function Ankara({ count, color, d }: { count: number; color: string; d: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ width: d, height: d, backgroundColor: color, transform: "rotate(45deg)", borderRadius: d * 0.18, marginRight: d * 0.9 }} />
      ))}
    </div>
  );
}

function Photo({ src, w, h, emoji, scale }: { src: string; w: number; h: number; emoji: string; scale: number }) {
  return (
    <div style={{ display: "flex", position: "relative", width: w, height: h, overflow: "hidden" }}>
      <img src={src} width={w} height={h} alt="" style={{ objectFit: "cover" }} />
      {/* top scrim for logo legibility */}
      <div style={{ position: "absolute", top: 0, left: 0, width: w, height: h * 0.4, backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0))", display: "flex" }} />
      {/* emoji bubble */}
      <div style={{ position: "absolute", right: 28 * scale, bottom: 28 * scale, width: 86 * scale, height: 86 * scale, borderRadius: 9999, backgroundColor: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 * scale }}>{emoji}</div>
    </div>
  );
}

export function cardElementV2(
  cat: Category, mode: Mode, variantIndex: 0 | 1, sizeKey: SizeKey, photoUrl: string, logo: string, scale = 1
): ReactElement {
  const base = SIZES[sizeKey];
  const s = Object.fromEntries(Object.entries(base).map(([k, v]) => [k, v * scale])) as typeof base;
  const t = theme(mode, CATEGORIES.indexOf(cat) + variantIndex);
  const v = cat[mode][variantIndex];
  const isOG = sizeKey === "og";

  const Block = (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", backgroundImage: t.block, padding: s.pad, position: "relative" }}>
      {/* lockup only here on OG (square/story carry it over the photo) */}
      {isOG && (
        <div style={{ display: "flex", marginBottom: s.pad * 0.5 }}><Lockup size={s.mark} logo={logo} /></div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: s.pad * 0.3 }}>
          <div style={{ width: s.eyebrow * 0.5, height: s.eyebrow * 0.5, backgroundColor: t.accent, borderRadius: 4, marginRight: s.eyebrow * 0.5, transform: "rotate(45deg)" }} />
          <div style={{ fontSize: s.eyebrow, fontWeight: 700, letterSpacing: 3, color: t.eyebrow, textTransform: "uppercase" }}>{cat.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.02 }}>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: t.headline, letterSpacing: -3 }}>{v.l1}</div>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: t.accent, letterSpacing: -3 }}>{v.l2}</div>
        </div>
        <div style={{ fontSize: s.sub, fontWeight: 500, color: t.sub, marginTop: s.pad * 0.36, lineHeight: 1.3, maxWidth: isOG ? "94%" : "98%" }}>{v.sub}</div>
        {!isOG && (
          <div style={{ display: "flex", alignItems: "center", alignSelf: "flex-start", marginTop: s.pad * 0.42, backgroundColor: t.chipBg, borderRadius: 9999, padding: `${s.chip * 0.5}px ${s.chip * 0.85}px`, maxWidth: "98%" }}>
            <div style={{ fontSize: s.chip * 1.05, marginRight: s.chip * 0.45, display: "flex" }}>{mode === "client" ? "🎙️" : "✨"}</div>
            <div style={{ fontSize: s.chip, fontWeight: 600, color: t.chipText }}>{mode === "client" ? `“${v.chip}”` : v.chip}</div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", marginBottom: s.pad * 0.34 }}>
          <Ankara count={isOG ? 16 : 11} color={t.ankara} d={s.footer * 0.5} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", backgroundColor: t.pillBg, color: "#FFFFFF", fontSize: s.footer, fontWeight: 700, padding: `${s.footer * 0.5}px ${s.footer * 0.9}px`, borderRadius: 9999 }}>
            {mode === "client" ? "vendoh.io" : "vendoh.io/vendors"}
          </div>
          <div style={{ display: "flex", alignItems: "center", border: `${Math.max(2, s.tag * 0.12)}px solid ${t.tagBorder}`, color: t.tagText, fontSize: s.tag, fontWeight: 700, padding: `${s.tag * 0.42}px ${s.tag * 0.78}px`, borderRadius: 9999, textTransform: "uppercase", letterSpacing: 1 }}>{v.tag}</div>
        </div>
      </div>
    </div>
  );

  if (isOG) {
    return (
      <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", fontFamily: "Inter", overflow: "hidden" }}>
        {Block}
        <Photo src={photoUrl} w={s.photo} h={s.height} emoji={cat.emoji} scale={scale} />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", fontFamily: "Inter", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "flex", position: "relative", width: s.width, height: s.photo }}>
        <Photo src={photoUrl} w={s.width} h={s.photo} emoji={cat.emoji} scale={scale} />
        <div style={{ position: "absolute", top: s.pad * 0.7, left: s.pad * 0.7, display: "flex" }}><Lockup size={s.mark} logo={logo} /></div>
      </div>
      {Block}
    </div>
  );
}
