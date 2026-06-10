import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Vendoh FAQ — everything you need to know";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Frequently Asked Questions", "Got questions?");
}
