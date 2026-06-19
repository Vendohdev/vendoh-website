import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  VENDOR_SLIDES,
  VENDOR_OG,
  cardElement,
  type SizeKey,
} from "@/lib/social-cards";

export const runtime = "edge";

// Vendor-facing share assets.
//   /share/vendor?format=square&slide=0..4   → carousel slides (1080×1080)
//   /share/vendor?format=story&slide=0..4     → vertical stories (1080×1920)
//   /share/vendor?format=og                    → link card (1200×630)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";

  if (sizeKey === "og") {
    return new ImageResponse(cardElement(VENDOR_OG, "og"), {
      width: SIZES.og.width,
      height: SIZES.og.height,
    });
  }

  const slide = Math.min(
    Math.max(Number(searchParams.get("slide") ?? 0) || 0, 0),
    VENDOR_SLIDES.length - 1
  );
  return new ImageResponse(
    cardElement(VENDOR_SLIDES[slide], sizeKey, {
      index: slide,
      total: VENDOR_SLIDES.length,
    }),
    { width: SIZES[sizeKey].width, height: SIZES[sizeKey].height }
  );
}
