/* eslint-disable @next/next/no-img-element */
import type { ReactElement } from "react";

/**
 * Shared renderer for Vendoh social share assets (carousels, OG link cards,
 * vertical stories). Pure flexbox + brand colors so it renders reliably in
 * Satori (next/og) with the default font — no external font fetch needed.
 */

export type SizeKey = "square" | "og" | "story";

export const SIZES: Record<
  SizeKey,
  {
    width: number;
    height: number;
    pad: number;
    eyebrow: number;
    headline: number;
    sub: number;
    footer: number;
    mark: number;
  }
> = {
  square: { width: 1080, height: 1080, pad: 88, eyebrow: 30, headline: 94, sub: 40, footer: 34, mark: 96 },
  og: { width: 1200, height: 630, pad: 72, eyebrow: 26, headline: 76, sub: 34, footer: 30, mark: 84 },
  story: { width: 1080, height: 1920, pad: 100, eyebrow: 34, headline: 108, sub: 46, footer: 38, mark: 106 },
};

export type CardEntry = {
  bg: string;
  /** true = dark background → light text + orange accent */
  dark: boolean;
  eyebrow: string;
  headline: string;
  accent: string;
  sub?: string;
  footer: string;
};

const INK = "#2A1F5C";
const VIOLET = "#3F2E6E";
const PURPLE = "#6354B8";
const ORANGE = "#F07D4A";
const ORANGE_SOFT = "#FF9A6C";
const ORANGE_300 = "#FFA366";

export const CLIENT_SLIDES: CardEntry[] = [
  {
    bg: INK,
    dark: true,
    eyebrow: "FOR EVERY NIGERIAN",
    headline: "No more WhatsApp",
    accent: "scavenger hunts.",
    sub: "Finding a trusted plumber, makeup artist or chef shouldn't take 3 days of asking around.",
    footer: "vendoh.io",
  },
  {
    bg: PURPLE,
    dark: true,
    eyebrow: "VOICE-FIRST",
    headline: "Just say",
    accent: "what you need.",
    sub: "“Hello Vendoh, I need a plumber in Lekki” — in English or Pidgin.",
    footer: "vendoh.io",
  },
  {
    bg: VIOLET,
    dark: true,
    eyebrow: "TRUST BUILT IN",
    headline: "Every vendor,",
    accent: "verified.",
    sub: "Phone, NIN/BVN and trade-checked tiers. Know exactly who's coming to your door.",
    footer: "vendoh.io",
  },
  {
    bg: ORANGE,
    dark: false,
    eyebrow: "HOW IT WORKS",
    headline: "Nearby. Secure.",
    accent: "Sorted.",
    sub: "Matched with vendors within 5km. Prices agreed upfront, pay as agreed.",
    footer: "vendoh.io",
  },
  {
    bg: INK,
    dark: true,
    eyebrow: "LAUNCHING IN LAGOS · 2026",
    headline: "Be first in line.",
    accent: "Join the waitlist.",
    sub: "Founding members get priority access when Vendoh lands.",
    footer: "Join free · vendoh.io",
  },
];

export const VENDOR_SLIDES: CardEntry[] = [
  {
    bg: VIOLET,
    dark: true,
    eyebrow: "FOR VENDORS",
    headline: "Your skills deserve",
    accent: "more customers.",
    sub: "Stop depending on word-of-mouth alone. No shop required.",
    footer: "vendoh.io/vendors",
  },
  {
    bg: INK,
    dark: true,
    eyebrow: "NO COLD CALLS",
    headline: "Clients",
    accent: "find you.",
    sub: "Matched automatically to nearby clients who are ready to book — within 5km.",
    footer: "vendoh.io/vendors",
  },
  {
    bg: ORANGE,
    dark: false,
    eyebrow: "GET PAID",
    headline: "Secure payouts.",
    accent: "Verified badge.",
    sub: "Money straight to your bank account. Build a reputation that compounds.",
    footer: "vendoh.io/vendors",
  },
  {
    bg: PURPLE,
    dark: true,
    eyebrow: "DUAL-ROLE",
    headline: "Client by day.",
    accent: "Vendor by weekend.",
    sub: "One account, one reputation. Switch sides with a single tap.",
    footer: "vendoh.io/vendors",
  },
  {
    bg: VIOLET,
    dark: true,
    eyebrow: "FOUNDING VENDORS",
    headline: "Turn your skills into",
    accent: "steady income.",
    sub: "Priority onboarding, early verification, and a founding vendor badge.",
    footer: "Become a founding vendor · vendoh.io/vendors",
  },
];

export const CLIENT_OG: CardEntry = {
  bg: INK,
  dark: true,
  eyebrow: "AFRICA'S VOICE-POWERED SERVICE MARKETPLACE",
  headline: "Find trusted help —",
  accent: "just say it.",
  sub: "Verified vendors. Secure payments. In English or Pidgin.",
  footer: "vendoh.io",
};

export const VENDOR_OG: CardEntry = {
  bg: VIOLET,
  dark: true,
  eyebrow: "FOR VENDORS · VENDOH",
  headline: "Your skills deserve",
  accent: "more customers.",
  sub: "Get discovered nearby, get paid securely, build a verified reputation.",
  footer: "vendoh.io/vendors",
};

// Logo marks are cropped to artwork bounds (no transparent padding) so the V's
// visual left edge sits flush with the text below it. Aspect = 333/306.
const MARK_ASPECT = 333 / 306;

function VendohMark({ size, dark, logo }: { size: number; dark: boolean; logo: string }) {
  // Wordmark matches the logo mark and the headline: white on dark backgrounds,
  // deep indigo (#2A1F5C) on light/orange so it ties to the dark headline text.
  const wordColor = dark ? "#FFFFFF" : INK;
  const fontSize = size * 0.74;
  // Match the V mark's height to the wordmark cap-height (Inter ≈ 0.73em).
  const logoH = fontSize * 0.73;
  const logoW = logoH * MARK_ASPECT;
  const gap = size * 0.14;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} width={logoW} height={logoH} alt="Vendoh" />
      {/* Vertical divider bar */}
      <div
        style={{
          width: Math.max(2, size * 0.04),
          height: logoH * 1.04,
          backgroundColor: wordColor,
          borderRadius: 9999,
          marginLeft: gap,
          marginRight: gap,
        }}
      />
      <div style={{ fontSize, fontWeight: 800, color: wordColor, letterSpacing: -1 }}>
        Vendoh
      </div>
    </div>
  );
}

function Dots({ total, index, dark }: { total: number; index: number; dark: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === index ? 34 : 12,
            height: 12,
            borderRadius: 9999,
            marginLeft: i === 0 ? 0 : 10,
            backgroundColor:
              i === index
                ? dark
                  ? ORANGE_SOFT
                  : INK
                : dark
                ? "rgba(255,255,255,0.3)"
                : "rgba(42,31,92,0.25)",
          }}
        />
      ))}
    </div>
  );
}

/** Pixel dimensions for a format at a given scale (1× = base, 2×/3× = sharper). */
export function dims(sizeKey: SizeKey, scale = 1) {
  return { width: SIZES[sizeKey].width * scale, height: SIZES[sizeKey].height * scale };
}

export function cardElement(
  entry: CardEntry,
  sizeKey: SizeKey,
  logo: string,
  carousel?: { index: number; total: number },
  scale = 1
): ReactElement {
  const base = SIZES[sizeKey];
  const s = {
    width: base.width * scale,
    height: base.height * scale,
    pad: base.pad * scale,
    eyebrow: base.eyebrow * scale,
    headline: base.headline * scale,
    sub: base.sub * scale,
    footer: base.footer * scale,
    mark: base.mark * scale,
  };
  const headlineColor = entry.dark ? "#FFFFFF" : INK;
  const accentColor = entry.dark ? ORANGE_SOFT : "#FFFFFF";
  const eyebrowColor = entry.dark ? ORANGE_300 : "rgba(42,31,92,0.7)";
  const subColor = entry.dark ? "rgba(255,255,255,0.72)" : "rgba(42,31,92,0.82)";
  const footerColor = entry.dark ? "rgba(255,255,255,0.6)" : "rgba(42,31,92,0.7)";
  const blobColor = entry.dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.18)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: entry.bg,
        padding: s.pad,
        justifyContent: "space-between",
        fontFamily: "Inter",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: -s.width * 0.18,
          right: -s.width * 0.12,
          width: s.width * 0.55,
          height: s.width * 0.55,
          borderRadius: 9999,
          backgroundColor: blobColor,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -s.width * 0.2,
          left: -s.width * 0.16,
          width: s.width * 0.5,
          height: s.width * 0.5,
          borderRadius: 9999,
          backgroundColor: entry.dark ? "rgba(240,125,74,0.10)" : "rgba(42,31,92,0.06)",
        }}
      />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <VendohMark size={s.mark} dark={entry.dark} logo={logo} />
        {carousel ? (
          <Dots total={carousel.total} index={carousel.index} dark={entry.dark} />
        ) : (
          <div style={{ display: "flex" }} />
        )}
      </div>

      {/* Middle */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
        <div
          style={{
            fontSize: s.eyebrow,
            fontWeight: 700,
            letterSpacing: 4,
            color: eyebrowColor,
            marginBottom: s.pad * 0.4,
          }}
        >
          {entry.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.04 }}>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: headlineColor, letterSpacing: -2 }}>
            {entry.headline}
          </div>
          <div style={{ fontSize: s.headline, fontWeight: 800, color: accentColor, letterSpacing: -2 }}>
            {entry.accent}
          </div>
        </div>
        {entry.sub ? (
          <div
            style={{
              fontSize: s.sub,
              fontWeight: 500,
              color: subColor,
              marginTop: s.pad * 0.45,
              lineHeight: 1.35,
              whiteSpace: sizeKey === "og" ? "nowrap" : "normal",
              maxWidth: "100%",
            }}
          >
            {entry.sub}
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: entry.dark ? ORANGE : INK,
            color: "#FFFFFF",
            fontSize: s.footer,
            fontWeight: 700,
            padding: `${s.footer * 0.5}px ${s.footer * 0.9}px`,
            borderRadius: 9999,
          }}
        >
          {entry.footer}
        </div>
      </div>
    </div>
  );
}
