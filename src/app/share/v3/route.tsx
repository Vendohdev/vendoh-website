import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import {
  SIZES,
  dims,
  findCategory,
  photoFile,
  cardElementV2,
  CATEGORIES,
  type SizeKey,
  type Mode,
} from "@/lib/social-cards-v3";
import { interFonts, LOGO_WHITE_URI } from "@/lib/social-assets";

export const runtime = "edge";

// V2 photo-forward category cards.
//   /share/v2?mode=client|vendor&cat=<key>&variant=0|1&format=square|story|og&scale=1..3
export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const mode = (searchParams.get("mode") === "vendor" ? "vendor" : "client") as Mode;
  const cat = findCategory(searchParams.get("cat") ?? "") ?? CATEGORIES[0];
  const variant = (Number(searchParams.get("variant") ?? 0) ? 1 : 0) as 0 | 1;
  const format = (searchParams.get("format") ?? "square") as SizeKey;
  const sizeKey: SizeKey = format in SIZES ? format : "square";
  const scale = Math.min(Math.max(Number(searchParams.get("scale") ?? 1) || 1, 1), 3);

  const photoUrl = `${origin}${photoFile(cat.key, mode, variant)}`;

  return new ImageResponse(
    cardElementV2(cat, mode, variant, sizeKey, photoUrl, LOGO_WHITE_URI, scale),
    { ...dims(sizeKey, scale), fonts: interFonts(), emoji: "twemoji" }
  );
}
