import { brandOgImage, OG_SIZE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Careers at Vendoh — build the future of service in Africa";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOgImage("Build the Future of Service in Africa", "Careers at Vendoh");
}
