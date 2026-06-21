import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  VENDOR_SLIDES,
  VENDOR_OG,
  cardElement,
  dims,
  type SizeKey,
} from "@/lib/social-cards";
import { interFonts, LOGO_WHITE_URI, LOGO_INK_URI } from "@/lib/social-assets";

export const runtime = "edge";

// Vendor-facing share assets.
//   /share/vendor?format=square&slide=0..4&scale=1|2|3   → carousel slides
//   /share/vendor?format=story&slide=0..4&scale=...        → vertical stories
//   /share/vendor?format=og&scale=...                       → link card
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";
  const scale = Math.min(Math.max(Number(searchParams.get("scale") ?? 1) || 1, 1), 3);
  const fonts = interFonts();
  const logoFor = (dark: boolean) => (dark ? LOGO_WHITE_URI : LOGO_INK_URI);

  if (sizeKey === "og") {
    return new ImageResponse(
      cardElement(VENDOR_OG, "og", logoFor(VENDOR_OG.dark), undefined, scale),
      { ...dims("og", scale), fonts }
    );
  }

  const slide = Math.min(
    Math.max(Number(searchParams.get("slide") ?? 0) || 0, 0),
    VENDOR_SLIDES.length - 1
  );
  const entry = VENDOR_SLIDES[slide];
  return new ImageResponse(
    cardElement(
      entry,
      sizeKey,
      logoFor(entry.dark),
      { index: slide, total: VENDOR_SLIDES.length },
      scale
    ),
    { ...dims(sizeKey, scale), fonts }
  );
}
