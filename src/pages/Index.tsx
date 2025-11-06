import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { PricingSection } from "@/components/PricingSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <PricingSection />
      <BeforeAfterSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
