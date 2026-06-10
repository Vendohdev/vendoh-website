import type { Metadata } from "next";
import { Inter, Bagel_Fat_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { organizationGraph } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vendoh.io"),
  title: {
    default: "Vendoh — Nigeria's Voice-Powered Service Marketplace | Coming Soon",
    template: "%s | Vendoh",
  },
  description:
    "Africa's first voice-powered service marketplace. Nigerian-founded, Africa-focused. Find verified plumbers, electricians, makeup artists, chefs and more, just say what you need, in English or Nigerian Pidgin. Join the waitlist for early access.",
  keywords: [
    // Brand
    "Vendoh",
    "Vendoh Nigeria",
    "Vendoh Africa",
    // Product category
    "service marketplace",
    "voice-powered marketplace",
    "voice-first marketplace",
    "voice AI marketplace",
    "AI-native service marketplace",
    "escrow service marketplace",
    // African continental positioning
    "Africa service marketplace",
    "African service marketplace app",
    "voice-powered app Africa",
    "voice AI startup Africa",
    "Nigerian startup building voice AI for Africa",
    "African voice AI",
    "African AI-native app",
    "African super app for local services",
    "marketplace for African informal economy",
    "Pidgin voice AI",
    "Nigerian Pidgin voice assistant",
    // Nigeria core
    "Nigeria",
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "home services Nigeria",
    // Intent / use cases
    "plumber Lagos",
    "electrician Lagos",
    "makeup artist Lagos",
    "AC repair Lagos",
    "private chef Lagos",
    "verified nanny Lagos",
    "Ankara tailor",
    "mobile mechanic Lagos",
    "find artisan Nigeria",
    "find artisan Africa",
  ],
  authors: [{ name: "Vendoh Limited", url: "https://www.vendoh.io/about" }],
  creator: "Vendoh Limited",
  publisher: "Vendoh Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vendoh — Africa's Voice-Powered Service Marketplace | Coming Soon",
    description:
      "Africa's first voice-powered service marketplace. Nigerian-founded, Africa-focused. Join the waitlist for early access.",
    url: "https://www.vendoh.io",
    siteName: "Vendoh",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vendoh — Africa's Voice-Powered Service Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendoh — Africa's Voice-Powered Service Marketplace | Coming Soon",
    description:
      "Africa's first voice-powered service marketplace. Nigerian-founded, Africa-focused. Join the waitlist for early access.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "yDzXpM4904ihXEhD_bcU_YrMYW3uttcVnrie4Dxtv2Q",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bagelFatOne.variable}`}>
      <body className="antialiased">
        {/* Global JSON-LD: Organization + WebSite + MobileApplication + Service + FAQPage + Person.
            Static, developer-authored content — serialized via JSON.stringify of a typed object
            imported from @/lib/schema. No user input flows into this node. */}
        <Script
          id="ld-org-graph"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationGraph)}
        </Script>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
