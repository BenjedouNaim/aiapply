import Image from "next/image";
import HeroSection from "../components/hero-section";
import FeaturesSection from "../components/features-8";
import FooterSection from "@/components/footer";
import Pricing from "@/components/pricing";
import WallOfLoveSection from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <WallOfLoveSection />
      <CallToAction />
      <FooterSection/>
    </div>
  );
}
