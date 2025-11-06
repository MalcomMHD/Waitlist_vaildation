import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // CTA text variants with URL param support
  const ctaText = useMemo(() => {
    try {
      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : undefined;
      const explicit = params?.get("cta");
      if (explicit === "join") return "Join the Founding Waitlist →";
      if (explicit === "claim") return "Claim Founding Spot →";
    } catch {}
    return Math.random() < 0.5 ? "Join the Founding Waitlist →" : "Claim Founding Spot →";
  }, []);

  return (
    <section className="bg-white text-black py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-semibold">Founding Member Waitlist Offer</h2>
          <p className="text-sm text-neutral-600">Fast to scan, optimized to convert.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-neutral-300 ring-1 ring-blue-100 bg-white p-10 md:p-12 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                Only valid for the first 5 customers
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-500">Founding member pricing — limited to 5</p>

            <p className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-4">
              Free CRM Audit + <span className="text-blue-700 font-semibold">25% off</span> monthly hygiene service for life
            </p>
            <p className="text-sm text-neutral-600 mt-2">Limited founding offer, applied after audit.</p>

            {/* Compact benefits inside the card for clarity */}
            <div className="mt-6 space-y-3">
              <OfferItem text="Free Mini CRM Audit" />
              <OfferItem text="25% off monthly hygiene — lifetime" />
              <OfferItem text="Priority onboarding" />
            </div>

            {/* In-card CTA for higher conversion */}
            <Button
              size="lg"
              className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-7 h-auto font-semibold"
              onClick={scrollToForm}
            >
              {ctaText}
            </Button>
            <p className="mt-3 text-xs text-neutral-500 text-center">No credit card • 30 seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OfferItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center">
      <Check className="w-4 h-4 text-black" />
    </div>
    <span className="text-sm text-neutral-700">{text}</span>
  </div>
);
