import { HeroSection } from "@/components/HeroSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { PricingSection } from "@/components/PricingSection";
import { TrustSection } from "@/components/TrustSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BeforeAfterSection />
      <PricingSection />
      <TrustSection />
      <WaitlistForm />
      <FooterSection />
    </div>
  );
};

export default Index;
