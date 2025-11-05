// At top-level imports of WaitlistForm component
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Lock, Zap, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

export const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // GA4: moved to success branch (fire only after successful insert)

    try {
      // Basic client-side validation
      const trimmedName = name.trim();
      const trimmedEmail = email.trim().toLowerCase();
      if (!trimmedName || !trimmedEmail) {
        throw new Error("Please fill in your name and email.");
      }

      if (!supabase) {
        throw new Error(
          "Signup service not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY."
        );
      }

      // Optional: capture traffic source (path + UTM params)
      const url = new URL(window.location.href);
      const source = [
        window.location.pathname,
        url.searchParams.get("utm_source"),
        url.searchParams.get("utm_medium"),
        url.searchParams.get("utm_campaign"),
      ]
        .filter(Boolean)
        .join("|");

      // Insert into Supabase
      const { error } = await supabase
        .from("waitlist_submissions")
        .insert([{ name: trimmedName, email: trimmedEmail, source }]);

      if (error) {
        // Postgres duplicate error code
        if (error.code === "23505") {
          toast({
            title: "You’re already on the list",
            description: "We’ll send audit instructions shortly.",
            duration: 5000,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Spot secured 🎉",
          description: `We’ve added ${trimmedEmail}. Expect audit instructions within 24 hours.`,
          duration: 6000,
        });
        setName("");
        setEmail("");
        // GA4: fire form_submit only after successful Supabase insert
        try {
          const w = window as any;
          if (typeof w.gtag === "function") {
            w.gtag("event", "form_submit", {
              event_category: "engagement",
              event_label: "CRM Validation Form",
              value: 1,
            });
          } else {
            trackEvent("form_submit", {
              event_category: "engagement",
              event_label: "CRM Validation Form",
              value: 1,
            });
          }
        } catch {}
      }
    } catch (err: any) {
      console.error("Waitlist submit error:", err);
      toast({
        title: "Something went wrong",
        description: err?.message ?? "Please try again or contact support.",
        duration: 6000,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist-form" className="py-32 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="container max-w-2xl mx-auto relative z-10">
        <div className="glass-card-gold rounded-3xl p-10 md:p-14 shadow-gold-strong">
          {/* Config warning when Supabase is not set up */}
          {!supabase && (
            <div className="mb-8 p-4 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive">
              <p className="font-semibold mb-1">Signup service not configured</p>
              <p className="text-sm text-muted-foreground">
                Set <code className="font-mono">VITE_SUPABASE_URL</code> and <code className="font-mono">VITE_SUPABASE_PUBLISHABLE_KEY</code> in a <code className="font-mono">.env.local</code> file to enable submissions.
              </p>
            </div>
          )}
          {/* Progress bar */}
          <div className="mb-10 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Audit spots remaining</span>
              <span className="font-semibold text-gold">30% left</span>
            </div>
            <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full w-[70%] bg-gradient-to-r from-gold to-gold-dark rounded-full shadow-gold"></div>
            </div>
          </div>

          <div className="text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get Your <span className="text-gradient-gold">Free Audit</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See exactly what your dirty data is costing you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => trackEvent("form_start", { event_category: "engagement", event_label: "CRM Validation Form" })}
                placeholder="John Smith"
                required
                className="h-14 glass-card border-border/50 focus:border-gold/50 focus:ring-gold/20 text-base rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Work Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                required
                className="h-14 glass-card border-border/50 focus:border-gold/50 focus:ring-gold/20 text-base rounded-xl"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="gold"
              className="w-full text-lg py-7 h-auto shadow-lg mt-8"
              disabled={loading || !supabase}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2"></div>
                  Securing your spot...
                </>
              ) : (
                !supabase ? "Configure Supabase to enable signup" : "Get My Free Audit →"
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground/70">
              Instructions sent within 24 hours • No spam • No upsell
            </p>
          </form>

          {/* Removed confirmation dialog as requested */}

          {/* Trust badges */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <TrustBadge icon={<Lock className="w-4 h-4" />} text="POPIA Compliant" />
              <TrustBadge icon={<Check className="w-4 h-4" />} text="GDPR Ready" />
              <TrustBadge icon={<Zap className="w-4 h-4" />} text="48h Delivery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-muted-foreground/70">
    <div className="text-gold/70">{icon}</div>
    <span>{text}</span>
  </div>
);
