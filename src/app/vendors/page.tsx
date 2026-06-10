import type { Metadata } from "next";
import { VendorsContent } from "@/components/sections/VendorsContent";

export const metadata: Metadata = {
  title: "For Vendors — Get Discovered, Get Booked, Get Paid",
  description:
    "Join Vendoh as a vendor: get matched with clients within 5km, earn your verified badge, and get paid securely through the app. Free to join — no signup fees, no monthly fees.",
  alternates: {
    canonical: "/vendors",
  },
  openGraph: {
    title: "Vendoh for Vendors — Your Skills Deserve More Customers",
    description:
      "Get discovered by nearby clients, build a verified reputation, and get paid securely. Join the founding vendor waitlist.",
    url: "https://www.vendoh.io/vendors",
  },
};

export default function VendorsPage() {
  return <VendorsContent />;
}
