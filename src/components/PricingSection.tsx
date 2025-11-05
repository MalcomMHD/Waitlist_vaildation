import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { pricingOptions, defaultCountry, formatPrice, detectDefaultCountry } from "@/lib/pricing";

export const PricingSection = () => {
  const [country, setCountry] = useState<string>(detectDefaultCountry() || defaultCountry);

  const selected = pricingOptions.find((p) => p.country === country) ?? pricingOptions[0];

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-gold">Beta Access</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">Limited validation spots available</p>
        </div>

        <div className="relative">
          {/* Subtle glow effect (toned down) */}
          <div className="absolute -inset-6 bg-gradient-to-r from-gold/15 to-gold/5 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative glass-card-gold rounded-3xl p-10 md:p-14 shadow-gold-strong">
            {/* Urgency badge - calmer, reduced motion */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-dark rounded-full shadow-md ring-1 ring-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-accent-foreground font-semibold text-xs">
                <Zap className="w-3.5 h-3.5" />
                <span>Limited beta • 5 spots left</span>
              </div>
            </div>

            <div className="mt-8 space-y-10">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Data Clean Sprint</h3>
                <p className="text-muted-foreground">Complete CRM transformation</p>
              </div>

              {/* Country selector and dynamic pricing */}
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-muted-foreground">Choose your country</label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    aria-label="Choose your country"
                    className="h-12 w-full rounded-xl glass-card border border-border/50 bg-transparent px-4 text-base focus:outline-none focus:ring-2 focus:ring-gold/30"
                  >
                    {pricingOptions.map((opt) => (
                      <option key={opt.country} value={opt.country} className="bg-background">
                        {opt.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center md:text-right" role="status" aria-live="polite" aria-describedby="price-desc">
                  <div className="text-5xl md:text-6xl font-bold tracking-tight">
                    {selected.symbol}{formatPrice(selected.amount)}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">{selected.currency}</span>
                  </div>
                  <p id="price-desc" className="mt-2 text-sm text-muted-foreground">One-time sprint • No hidden fees</p>
                </div>
              </div>

              <div className="space-y-4 py-6">
                <FeatureItem text="Deep clean & complete deduplication" />
                <FeatureItem text="AI-powered data enrichment" />
                <FeatureItem text="POPIA & GDPR compliance report" />
                <FeatureItem text="Revenue leakage analysis" />
              </div>

              <Button
                size="lg" 
                variant="gold" 
                className="w-full text-lg py-8 h-auto shadow-lg motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99] motion-reduce:transform-none"
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
