import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Vendoh for Vendors — your skills deserve more customers";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Your skills deserve more customers", "For vendors");
}
