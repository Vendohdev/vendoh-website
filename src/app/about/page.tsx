import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Vendoh — Empowering Nigeria's Service Economy",
  description:
    "Vendoh is building Africa's first voice-powered service marketplace. Learn about our mission to empower vendors, elevate the informal economy, and connect Nigerians with trusted services.",
  openGraph: {
    title: "About Vendoh — Empowering Nigeria's Service Economy",
    description:
      "Learn about our mission to empower vendors and elevate Nigeria's service sector.",
    url: "https://www.vendoh.io/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
