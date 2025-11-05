import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

export const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-gold">Beta Access</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">Limited validation spots available</p>
        </div>

        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-gold/20 to-gold/10 rounded-3xl blur-3xl opacity-40"></div>
          
          <div className="relative glass-card-gold rounded-3xl p-10 md:p-14 shadow-gold-strong">
            {/* Urgency badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark rounded-full shadow-lg">
              <div className="flex items-center gap-2 text-accent-foreground font-semibold text-sm">
                <Zap className="w-4 h-4" />
                <span>5 spots left this week</span>
              </div>
            </div>

            <div className="mt-8 space-y-10">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Data Clean Sprint</h3>
                <p className="text-muted-foreground">Complete CRM transformation</p>
              </div>

              <div className="flex items-end justify-center gap-3">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through mb-1">R 9,999</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/20 rounded-full">
                    <span className="text-xs text-gold font-semibold">50% OFF</span>
                  </div>
                </div>
                <div>
                  <p className="text-6xl md:text-7xl font-bold text-gradient-gold">R 4,999</p>
                </div>
              </div>

              <div className="space-y-4 py-8 border-t border-b border-border/30">
                <FeatureItem text="Deep clean & complete deduplication" />
                <FeatureItem text="AI-powered data enrichment" />
                <FeatureItem text="POPIA & GDPR compliance report" />
                <FeatureItem text="Revenue leakage analysis" />
                <FeatureItem text="30-min strategy consultation (R 2,500 value)" highlight />
              </div>

              <Button 
                size="lg" 
                variant="gold" 
                className="w-full text-lg py-8 h-auto shadow-lg"
                onClick={scrollToForm}
              >
                Claim My Spot →
              </Button>

              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/70">
                <span>48h delivery</span>
                <span>•</span>
                <span>Money-back guarantee</span>
                <span>•</span>
                <span>No card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text, highlight = false }: { text: string; highlight?: boolean }) => (
  <div className="flex items-center gap-4">
    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
      highlight ? 'bg-gold/30' : 'bg-gold/10'
    }`}>
      <Check className={`w-4 h-4 ${highlight ? 'text-gold' : 'text-gold/70'}`} />
    </div>
    <span className={highlight ? 'font-medium text-gold' : 'text-muted-foreground'}>{text}</span>
  </div>
);
