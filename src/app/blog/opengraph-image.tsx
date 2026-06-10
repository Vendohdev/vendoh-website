import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Vendoh Journal — stories from Africa's service economy";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Stories from the frontlines of Africa's service economy", "Vendoh Journal");
}
