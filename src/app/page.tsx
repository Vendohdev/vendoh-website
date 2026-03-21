import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Categories } from "@/components/sections/Categories";
import { ForVendors } from "@/components/sections/ForVendors";
import { Trust } from "@/components/sections/Trust";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularServices />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Categories />
      <ForVendors />
      <Trust />
      <Testimonials />
      <DownloadCTA />
    </>
  );
}
