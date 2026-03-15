import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vendoh — Find Trusted Vendors Near You",
  description:
    "Nigeria's service marketplace. Find verified plumbers, electricians, makeup artists, chefs and more — just say what you need. Voice search, secure payments, real-time tracking.",
  keywords: [
    "Vendoh",
    "service marketplace",
    "Nigeria",
    "vendors",
    "plumber",
    "electrician",
    "makeup artist",
    "Lagos",
    "Abuja",
    "home services",
  ],
  authors: [{ name: "Vendoh Technologies Ltd" }],
  openGraph: {
    title: "Vendoh — Find Trusted Vendors Near You",
    description:
      "Nigeria's service marketplace. Voice search, verified vendors, secure payments.",
    url: "https://vendoh.io",
    siteName: "Vendoh",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendoh — Find Trusted Vendors Near You",
    description:
      "Nigeria's service marketplace. Voice search, verified vendors, secure payments.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
