import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  CLIENT_SLIDES,
  CLIENT_OG,
  cardElement,
  type SizeKey,
} from "@/lib/social-cards";
import { interFonts, LOGO_WHITE_URI, LOGO_INK_URI } from "@/lib/social-assets";

export const runtime = "edge";

// Client-facing share assets.
//   /share/client?format=square&slide=0..4   → carousel slides (1080×1080)
//   /share/client?format=story&slide=0..4     → vertical stories (1080×1920)
//   /share/client?format=og                    → link card (1200×630)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";
  const fonts = interFonts();
  const logoFor = (dark: boolean) => (dark ? LOGO_WHITE_URI : LOGO_INK_URI);

  if (sizeKey === "og") {
    return new ImageResponse(cardElement(CLIENT_OG, "og", logoFor(CLIENT_OG.dark)), {
      width: SIZES.og.width,
      height: SIZES.og.height,
      fonts,
    });
  }

  const slide = Math.min(
    Math.max(Number(searchParams.get("slide") ?? 0) || 0, 0),
    CLIENT_SLIDES.length - 1
  );
  const entry = CLIENT_SLIDES[slide];
  return new ImageResponse(
    cardElement(entry, sizeKey, logoFor(entry.dark), {
      index: slide,
      total: CLIENT_SLIDES.length,
    }),
    { width: SIZES[sizeKey].width, height: SIZES[sizeKey].height, fonts }
  );
}
