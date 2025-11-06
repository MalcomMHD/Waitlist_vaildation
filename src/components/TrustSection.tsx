import { Star } from "lucide-react";
import { LogoCarousel } from "./LogoCarousel";

export const TrustSection = () => {
  return (
    <section className="bg-white text-black py-24 px-4">
      <div className="container max-w-6xl mx-auto space-y-16">
        {/* Logo carousel */}
        <div className="text-center space-y-6">
          <p className="text-sm text-neutral-500">Trusted by teams who live in their CRM.</p>
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/60 via-white to-blue-50/60 p-4">
            <LogoCarousel />
          </div>
        </div>

        {/* Minimal testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-blue-100 bg-white p-10 md:p-12 shadow-sm">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <span>5.0 average</span>
              <span className="text-blue-300">•</span>
              <span>Data hygiene wins</span>
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-blue-600 fill-blue-600" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed text-neutral-800">
              "We discovered <span className="font-semibold text-blue-700">3,000 duplicates</span> and <span className="font-semibold text-blue-700">15% dead leads</span> in our HubSpot. Fixed in <span className="font-semibold text-blue-700">48 hours</span>. Our sales team finally trusts the CRM again."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-lg font-semibold border border-neutral-200 ring-2 ring-blue-100">
                M
              </div>
              <div>
                <p className="font-medium">Michael R.</p>
                <p className="text-sm text-neutral-500">Sales Director, Cape Town SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
