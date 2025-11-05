import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 animate-fade-in">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full border border-gold text-gold text-sm font-medium glow-gold">
                Limited Validation Offer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your CRM Data Is{" "}
              <span className="text-gold">Lying to You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We uncover hidden duplicates, dead leads, and compliance risks — before they cost you clients.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="gold" 
                className="w-full lg:w-auto text-lg px-8 py-6 h-auto group"
                onClick={scrollToForm}
              >
                Run My Free CRM Cleanliness Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Takes 30 seconds. No credit card required.
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-xl p-8 glow-gold">
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold text-sm animate-glow-pulse">
                ⚠️ Critical Issues Found
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Duplicate Records</span>
                  <span className="text-xl font-bold text-destructive">3,247</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Dead Leads</span>
                  <span className="text-xl font-bold text-destructive">15%</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">Missing Data</span>
                  <span className="text-xl font-bold text-destructive">2,891</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-muted-foreground">Compliance Risk</span>
                  <span className="text-xl font-bold text-destructive">High</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-destructive/10 border border-destructive rounded-lg">
                <p className="text-sm text-destructive font-medium">
                  Estimated Revenue Leakage: <span className="text-lg font-bold">R 187,450/year</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
