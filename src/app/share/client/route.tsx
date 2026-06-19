import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  CLIENT_SLIDES,
  CLIENT_OG,
  cardElement,
  type SizeKey,
} from "@/lib/social-cards";

export const runtime = "edge";

// Client-facing share assets.
//   /share/client?format=square&slide=0..4   → carousel slides (1080×1080)
//   /share/client?format=story&slide=0..4     → vertical stories (1080×1920)
//   /share/client?format=og                    → link card (1200×630)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";

  if (sizeKey === "og") {
    return new ImageResponse(cardElement(CLIENT_OG, "og"), {
      width: SIZES.og.width,
      height: SIZES.og.height,
    });
  }

  const slide = Math.min(
    Math.max(Number(searchParams.get("slide") ?? 0) || 0, 0),
    CLIENT_SLIDES.length - 1
  );
  return new ImageResponse(
    cardElement(CLIENT_SLIDES[slide], sizeKey, {
      index: slide,
      total: CLIENT_SLIDES.length,
    }),
    { width: SIZES[sizeKey].width, height: SIZES[sizeKey].height }
  );
}
