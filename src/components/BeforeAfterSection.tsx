import { Check } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="bg-white text-black py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-semibold">Why teams join the waitlist</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Cleaner data, faster decisions, and more revenue from what you already have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard title="Cleaner data, sharper decisions" />
          <BenefitCard title="More revenue from the leads you already have" />
          <BenefitCard title="Audit-ready & compliance aligned" />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ title }: { title: string }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-6 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center">
        <Check className="w-4 h-4 text-black" />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <p className="text-sm text-neutral-600">
      Reduce duplicates, enrich records, and keep your CRM clean and compliant.
    </p>
  </div>
);
