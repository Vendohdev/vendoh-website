import {
  INTER_500,
  INTER_700,
  INTER_800,
  LOGO_WHITE,
  LOGO_PURPLE,
  LOGO_APP,
} from "@/lib/social-assets-data";

// Edge-safe base64 → ArrayBuffer (atob is available in the edge runtime).
function b64ToArrayBuffer(b64: string): ArrayBuffer {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

export function interFonts() {
  return [
    { name: "Inter", data: b64ToArrayBuffer(INTER_500), weight: 500 as const, style: "normal" as const },
    { name: "Inter", data: b64ToArrayBuffer(INTER_700), weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: b64ToArrayBuffer(INTER_800), weight: 800 as const, style: "normal" as const },
  ];
}

/** Data URIs for the Vendoh logo marks. */
export const LOGO_WHITE_URI = `data:image/png;base64,${LOGO_WHITE}`; // white V — dark backgrounds
export const LOGO_PURPLE_URI = `data:image/png;base64,${LOGO_PURPLE}`; // purple V — light/orange backgrounds
export const LOGO_APP_URI = `data:image/png;base64,${LOGO_APP}`; // purple app icon — avatars/standalone
