import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { TickerBand } from "@/components/sections/TickerBand";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Categories } from "@/components/sections/Categories";
import { Personas } from "@/components/sections/Personas";
import { ForVendors } from "@/components/sections/ForVendors";
import { Trust } from "@/components/sections/Trust";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TickerBand />
      <PopularServices />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Categories />
      <Personas />
      <ForVendors />
      <Trust />
      <Testimonials />
      <DownloadCTA />
    </>
  );
}
