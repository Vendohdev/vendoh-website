import type { Metadata } from "next";
import { FeaturesContent } from "@/components/sections/FeaturesContent";

export const metadata: Metadata = {
  title: "Features — Voice Search, Verified Vendors & Secure Payments",
  description:
    "Explore everything Vendoh can do: voice search in English and Pidgin, three-tier vendor verification, secure payments, real-time tracking, dual-role accounts, and 5km nearby matching.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Vendoh Features — Built for How Nigerians Actually Connect",
    description:
      "Voice search, verified vendors, secure payments, real-time tracking, dual-role accounts, and hyperlocal matching — explore the full Vendoh platform.",
    url: "https://www.vendoh.io/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
