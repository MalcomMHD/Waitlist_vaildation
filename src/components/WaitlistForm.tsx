import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "You're on the list! 🎉",
      description: "We'll send audit instructions within 24 hours. Check your email.",
    });

    setName("");
    setEmail("");
    setLoading(false);
  };

  return (
    <section id="waitlist-form" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-2xl mx-auto">
        <div className="bg-card border-2 border-gold rounded-xl p-8 md:p-12 glow-gold-strong">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Free Audit Availability</span>
              <span className="text-sm font-semibold text-gold">70% Claimed</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-gold animate-glow-pulse"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your <span className="text-gold">Free CRM Audit</span>
            </h2>
            <p className="text-muted-foreground">
              Discover exactly how much your dirty data is costing you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                required
                className="h-12 border-border focus:border-gold"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Work Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                required
                className="h-12 border-border focus:border-gold"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="gold"
              className="w-full text-lg py-6 h-auto"
              disabled={loading}
            >
              {loading ? "Reserving Your Spot..." : "Send Me My Free Audit →"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We'll send audit instructions within 24 hours. No spam. No upsell.
            </p>
          </form>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-gold">🔒</span>
                <span>POPIA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">⚡</span>
                <span>48h Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
