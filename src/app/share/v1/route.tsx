import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  dims,
  findCategory,
  cardElementV1,
  CATEGORIES,
  type SizeKey,
  type Mode,
} from "@/lib/social-cards-v1";
import { interFonts, LOGO_WHITE_URI, LOGO_INK_URI } from "@/lib/social-assets";

export const runtime = "edge";

// V1 category-targeted share cards.
//   /share/v1?mode=client|vendor&cat=<key>&variant=0|1&format=square|story|og&scale=1..3
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = (searchParams.get("mode") === "vendor" ? "vendor" : "client") as Mode;
  const catKey = searchParams.get("cat") ?? CATEGORIES[0].key;
  const cat = findCategory(catKey) ?? CATEGORIES[0];
  const variant = (Number(searchParams.get("variant") ?? 0) ? 1 : 0) as 0 | 1;
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";
  const scale = Math.min(Math.max(Number(searchParams.get("scale") ?? 1) || 1, 1), 3);

  const logo = mode === "client" ? LOGO_WHITE_URI : LOGO_INK_URI;

  return new ImageResponse(
    cardElementV1(cat, mode, variant, sizeKey, logo, scale),
    { ...dims(sizeKey, scale), fonts: interFonts(), emoji: "twemoji" }
  );
}
