"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { track } from "@vercel/analytics";

const SITE_URL = "https://www.vendoh.io";
const SHARE_TEXT =
  "I just joined the waitlist for Vendoh — Nigeria's first voice-powered service marketplace. Verified vendors, escrow payments, just say what you need. Join me:";

export function ReferralShare({ light = false }: { light?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      track("referral_share", { channel: "copy_link" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. http) — fall back to nothing visible
    }
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors";
  const subtle = light
    ? "border border-white/25 text-white hover:bg-white/10"
    : "border border-border text-foreground hover:bg-surface";

  return (
    <div className="mt-5">
      <p
        className={`text-xs font-bold uppercase tracking-wider mb-3 ${
          light ? "text-white/50" : "text-text-tertiary"
        }`}
      >
        Invite friends — help Vendoh reach your area faster
      </p>
      <div className="flex flex-wrap justify-center gap-2.5">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SITE_URL}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("referral_share", { channel: "whatsapp" })}
          className={`${base} bg-[#25D366] text-white hover:bg-[#1FBE5A]`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Share on WhatsApp
        </a>
        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("referral_share", { channel: "x" })}
          className={`${base} ${subtle}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Post on X
        </a>
        <button type="button" onClick={copyLink} className={`${base} ${subtle}`}>
          {copied ? <Check size={15} /> : <Link2 size={15} />}
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
