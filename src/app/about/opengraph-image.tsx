import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "About Vendoh — empowering vendors, elevating an industry";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Empowering Vendors. Elevating an Industry.", "About Vendoh");
}
