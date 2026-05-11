import type { Metadata } from "next";
import { CareersContent } from "@/components/sections/CareersContent";

export const metadata: Metadata = {
  title: "Careers at Vendoh — Join the Team Building Africa's Service Marketplace",
  description:
    "We're hiring soon. Join the team building Nigeria's first voice-powered service marketplace. Explore open roles and join our talent waitlist.",
  openGraph: {
    title: "Careers at Vendoh — Join the Team",
    description:
      "We're hiring soon. Explore roles and join our talent waitlist.",
    url: "https://www.vendoh.io/careers",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
