import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Vendoh Features — voice search, verification, secure payments";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Everything you need, from “hello” to job done", "Platform features");
}
