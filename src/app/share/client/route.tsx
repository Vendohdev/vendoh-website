import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  CLIENT_SLIDES,
  CLIENT_OG,
  cardElement,
  dims,
  type SizeKey,
} from "@/lib/social-cards";
import { interFonts, LOGO_WHITE_URI, LOGO_INK_URI } from "@/lib/social-assets";

export const runtime = "edge";

// Client-facing share assets.
//   /share/client?format=square&slide=0..4&scale=1|2|3   → carousel slides
//   /share/client?format=story&slide=0..4&scale=...        → vertical stories
//   /share/client?format=og&scale=...                       → link card
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";
  const scale = Math.min(Math.max(Number(searchParams.get("scale") ?? 1) || 1, 1), 3);
  const fonts = interFonts();
  const logoFor = (dark: boolean) => (dark ? LOGO_WHITE_URI : LOGO_INK_URI);

  if (sizeKey === "og") {
    return new ImageResponse(
      cardElement(CLIENT_OG, "og", logoFor(CLIENT_OG.dark), undefined, scale),
      { ...dims("og", scale), fonts }
    );
  }

  const slide = Math.min(
    Math.max(Number(searchParams.get("slide") ?? 0) || 0, 0),
    CLIENT_SLIDES.length - 1
  );
  const entry = CLIENT_SLIDES[slide];
  return new ImageResponse(
    cardElement(
      entry,
      sizeKey,
      logoFor(entry.dark),
      { index: slide, total: CLIENT_SLIDES.length },
      scale
    ),
    { ...dims(sizeKey, scale), fonts }
  );
}
