import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("waitlist-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white text-black min-h-screen flex items-center px-4 py-24">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline + Subheadline + CTA */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Turn your dirty CRM into a clean, revenue-ready machine.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              Join the early access waitlist for our CRM Data Hygiene Service — built to clean, de-duplicate,
              enrich, and unlock the true value of your HubSpot, Salesforce, and Pipedrive data.
            </p>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-auto"
                onClick={scrollToForm}
              >
                Join the Waitlist →
                <ArrowRight className="ml-2" />
              </Button>
              <span className="text-sm text-neutral-500">No credit card • 30 seconds</span>
            </div>
          </div>

          {/* Right: Inline form */}
          <div className="">
            <WaitlistForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
};
