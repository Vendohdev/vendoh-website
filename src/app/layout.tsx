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
  title: "Vendoh — Nigeria's Voice-Powered Service Marketplace | Coming Soon",
  description:
    "Nigeria's first voice-powered service marketplace. Find verified plumbers, electricians, makeup artists, chefs and more — just say what you need. Join the waitlist for early access.",
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
  authors: [{ name: "Vendoh Limited" }],
  openGraph: {
    title: "Vendoh — Nigeria's Voice-Powered Service Marketplace | Coming Soon",
    description:
      "Nigeria's first voice-powered service marketplace. Join the waitlist for early access.",
    url: "https://vendoh.io",
    siteName: "Vendoh",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendoh — Nigeria's Voice-Powered Service Marketplace | Coming Soon",
    description:
      "Nigeria's first voice-powered service marketplace. Join the waitlist for early access.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
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
