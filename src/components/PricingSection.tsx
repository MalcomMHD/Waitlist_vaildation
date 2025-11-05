import { Button } from "@/components/ui/button";
import { Check, TrendingDown } from "lucide-react";

export const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Validation Offer: <span className="text-gold">Limited Spots Available</span>
          </h2>
        </div>

        <div className="bg-card border-2 border-gold rounded-xl p-8 md:p-12 glow-gold-strong relative overflow-hidden">
          {/* Urgency banner */}
          <div className="absolute top-0 left-0 right-0 bg-gold text-accent-foreground py-2 px-4 text-center font-semibold text-sm">
            🔥 Only 5 early validation spots available this week
          </div>

          <div className="mt-8 space-y-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Data Clean Sprint</h3>
              <p className="text-muted-foreground">Beta Validation Offer</p>
            </div>

            <div className="flex items-center justify-center gap-4 py-6">
              <div className="text-right">
                <p className="text-sm text-muted-foreground line-through">Normally R 9,999</p>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-gold" />
                  <span className="text-xs text-gold font-semibold">50% OFF</span>
                </div>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-bold text-gold">R 4,999</p>
              </div>
            </div>

            <div className="border-t border-b border-border py-6 space-y-4">
              <p className="font-semibold text-lg mb-4">What's included:</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Deep Clean & Deduplication</p>
                    <p className="text-sm text-muted-foreground">Remove all duplicate records and merge conflicting data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">AI Data Enrichment</p>
                    <p className="text-sm text-muted-foreground">Fill in missing fields with verified information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Compliance Report</p>
                    <p className="text-sm text-muted-foreground">Full POPIA & GDPR compliance audit</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Revenue Leakage Analysis</p>
                    <p className="text-sm text-muted-foreground">1-page report showing exact cost of dirty data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold rounded-lg p-4">
              <p className="text-sm font-semibold mb-1 text-gold">🎁 Validation Bonus:</p>
              <p className="text-sm text-muted-foreground">
                Free 30-minute data strategy consultation (Value: R 2,500)
              </p>
            </div>

            <Button 
              size="lg" 
              variant="gold" 
              className="w-full text-lg py-6 h-auto"
              onClick={scrollToForm}
            >
              Reserve My Audit Spot →
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              48-hour turnaround • Money-back guarantee • No credit card required to start
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
