import { Star } from "lucide-react";

export const TrustSection = () => {
  const platforms = [
    { name: "HubSpot", logo: "🔷" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Pipedrive", logo: "🟢" },
    { name: "Zoho", logo: "🔶" },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto space-y-16">
        {/* Platforms */}
        <div className="text-center space-y-8">
          <p className="text-sm text-muted-foreground/70 uppercase tracking-wider">Works with your CRM</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover:glass-card-gold transition-all duration-300"
              >
                <span className="text-xl">{platform.logo}</span>
                <span className="font-medium text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card-gold rounded-2xl p-10 md:p-12 shadow-gold">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
              "We discovered <span className="text-gold font-semibold">3,000 duplicates</span> and{" "}
              <span className="text-gold font-semibold">15% dead leads</span> in our HubSpot. 
              Fixed in <span className="text-gold font-semibold">48 hours</span>. 
              Our sales team finally trusts the CRM again."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-xl font-bold border border-gold/20">
                M
              </div>
              <div>
                <p className="font-semibold text-lg">Michael R.</p>
                <p className="text-sm text-muted-foreground">Sales Director, Cape Town SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
