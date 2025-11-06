import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const AboutSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white text-black py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: About copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold">About Closed Analytics</h2>
            <p className="text-lg text-neutral-700">
              We’re a specialist team focused on CRM Data Hygiene, Enrichment, and Governance. No websites. No
              marketing retainers. Just data clarity that fuels growth.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-auto"
              onClick={scrollToForm}
            >
              Join the CRM Cleanliness Waitlist
            </Button>
          </div>

          {/* Right: Two minimalist boxes */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What we don’t do</h3>
              <ul className="space-y-3">
                <ListItem type="x">Build websites</ListItem>
                <ListItem type="x">Run ads or retainers</ListItem>
                <ListItem type="x">Generic CRM setups</ListItem>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What we actually do</h3>
              <ul className="space-y-3">
                <ListItem type="check">Clean, deduplicate, and enrich CRM data</ListItem>
                <ListItem type="check">Governance for POPIA & GDPR compliance</ListItem>
                <ListItem type="check">Scorecards, metrics, and QA workflows</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ children, type }: { children: React.ReactNode; type: "check" | "x" }) => (
  <li className="flex items-center gap-3 text-neutral-800">
    <div className="w-6 h-6 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center">
      {type === "check" ? <Check className="w-4 h-4 text-black" /> : <X className="w-4 h-4 text-black" />}
    </div>
    <span>{children}</span>
  </li>
);