"use client";

import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";

const CLIENT_SLIDE_COUNT = 5;
const VENDOR_SLIDE_COUNT = 5;

type Asset = { label: string; src: string; w: number; h: number; file: string };

function clientSquares(): Asset[] {
  return Array.from({ length: CLIENT_SLIDE_COUNT }, (_, i) => ({
    label: `Slide ${i + 1}`,
    src: `/share/client?format=square&slide=${i}`,
    w: 1080,
    h: 1080,
    file: `vendoh-client-carousel-${i + 1}.png`,
  }));
}
function vendorSquares(): Asset[] {
  return Array.from({ length: VENDOR_SLIDE_COUNT }, (_, i) => ({
    label: `Slide ${i + 1}`,
    src: `/share/vendor?format=square&slide=${i}`,
    w: 1080,
    h: 1080,
    file: `vendoh-vendor-carousel-${i + 1}.png`,
  }));
}

const OG_ASSETS: Asset[] = [
  { label: "Client link card", src: "/share/client?format=og", w: 1200, h: 630, file: "vendoh-client-og.png" },
  { label: "Vendor link card", src: "/share/vendor?format=og", w: 1200, h: 630, file: "vendoh-vendor-og.png" },
];

const STORY_ASSETS: Asset[] = [
  { label: "Client story (CTA)", src: "/share/client?format=story&slide=4", w: 1080, h: 1920, file: "vendoh-client-story.png" },
  { label: "Vendor story (CTA)", src: "/share/vendor?format=story&slide=4", w: 1080, h: 1920, file: "vendoh-vendor-story.png" },
];

const CAPTIONS: { platform: string; text: string }[] = [
  {
    platform: "LinkedIn (client + vendor)",
    text: `Finding trusted help in Lagos still means a WhatsApp scavenger hunt. We're changing that.\n\nVendoh is Africa's first voice-powered service marketplace — say what you need in English or Pidgin, and get matched with verified vendors near you. Secure payments, real reputations, one app for both clients and vendors.\n\nLaunching in Lagos, 2026. Join the waitlist 👉 vendoh.io\n\n#Vendoh #Nigeria #Lagos #Marketplace #VoiceAI #Startups`,
  },
  {
    platform: "X / Twitter",
    text: `No more "abeg who get good plumber?" broadcasts. 🙏\n\nVendoh: say what you need, get matched with verified vendors near you. English or Pidgin. Launching in Lagos 2026.\n\nJoin the waitlist 👉 vendoh.io`,
  },
  {
    platform: "WhatsApp / status",
    text: `Vendoh is coming 🇳🇬 — Nigeria's first voice-powered service marketplace. Find trusted plumbers, makeup artists, chefs & more, or earn as a vendor. Join the waitlist free: vendoh.io`,
  },
  {
    platform: "TikTok / Instagram",
    text: `POV: you need a plumber in Lekki and you just… say it. 🗣️\n\nVendoh matches you with verified vendors nearby. Launching Lagos 2026 — link in bio to join the waitlist.\n\n#Vendoh #Lagos #Naija #SmallBusiness #Owambe #LagosLife`,
  },
  {
    platform: "Vendor recruitment (LinkedIn/WhatsApp groups)",
    text: `Vendors — your skills deserve more customers. 💪\n\nVendoh matches you with clients within 5km who are ready to book. No cold calls, secure payouts, a verified badge that builds trust. Free to join, no shop required.\n\nBecome a founding vendor 👉 vendoh.io/vendors`,
  },
];

function AssetCard({ asset }: { asset: Asset }) {
  const portrait = asset.h > asset.w;
  // Link cards (OG) export at 2×; carousels & stories at 3× for max sharpness.
  const dlScale = asset.src.includes("format=og") ? 2 : 3;
  return (
    <div className="rounded-2xl border border-border-light bg-elevated overflow-hidden">
      <div className="bg-surface p-3 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={asset.label}
          className={`rounded-lg shadow-sm ${portrait ? "h-64 w-auto" : "w-full h-auto"}`}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{asset.label}</p>
          <p className="text-xs text-text-tertiary">
            {asset.w * dlScale}×{asset.h * dlScale} · {dlScale}×
          </p>
        </div>
        <a
          href={`${asset.src}&scale=${dlScale}`}
          download={asset.file}
          className="inline-flex items-center gap-1.5 rounded-full bg-vendoh-blue px-3.5 py-2 text-xs font-semibold text-white hover:bg-vendoh-blue-dark transition-colors"
        >
          <Download size={14} />
          Download
        </a>
      </div>
    </div>
  );
}

function CaptionBlock({ platform, text }: { platform: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="rounded-2xl border border-border-light bg-elevated p-5">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-sm font-bold text-foreground">{platform}</p>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-surface transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="text-[13px] text-text-secondary leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}

export default function ShareKitPage() {
  return (
    <main className="bg-background">
      <section className="bg-vendoh-ink pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-extrabold text-vendoh-orange-300 uppercase tracking-wider mb-4">
            Internal · Share kit
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Vendoh Share Kit
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Ready-to-post carousels, link cards and stories for LinkedIn, X,
            TikTok, Instagram and WhatsApp. Download, then drop in the matching
            caption below.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Client carousel */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Client carousel
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              5 square slides (1080×1080) — LinkedIn &amp; Instagram carousels.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {clientSquares().map((a) => (
                <AssetCard key={a.src} asset={a} />
              ))}
            </div>
          </div>

          {/* Vendor carousel */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Vendor carousel
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              5 square slides (1080×1080) — vendor recruitment posts.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {vendorSquares().map((a) => (
                <AssetCard key={a.src} asset={a} />
              ))}
            </div>
          </div>

          {/* OG link cards */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Link preview cards
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              1200×630 — how the link looks when pasted in X, WhatsApp, LinkedIn,
              Slack.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
              {OG_ASSETS.map((a) => (
                <AssetCard key={a.src} asset={a} />
              ))}
            </div>
          </div>

          {/* Stories */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Stories &amp; TikTok covers
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              1080×1920 vertical — WhatsApp status, IG/FB stories, TikTok.
            </p>
            <div className="flex flex-wrap gap-4">
              {STORY_ASSETS.map((a) => (
                <div key={a.src} className="w-48">
                  <AssetCard asset={a} />
                </div>
              ))}
            </div>
          </div>

          {/* Captions */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Ready-made captions
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              Tap copy, paste with the matching asset.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CAPTIONS.map((c) => (
                <CaptionBlock key={c.platform} platform={c.platform} text={c.text} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
