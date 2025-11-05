export const TrustSection = () => {
  const platforms = [
    { name: "HubSpot", logo: "🔷" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Pipedrive", logo: "🟢" },
    { name: "Zoho", logo: "🔶" },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        {/* Platform logos */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-6">Trusted by teams using</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gold/30 bg-card/50 transition-all hover:border-gold hover:glow-gold"
              >
                <span className="text-2xl">{platform.logo}</span>
                <span className="font-medium text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-gold/50 rounded-xl p-8 md:p-10 glow-gold">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl mb-6 leading-relaxed">
              "We discovered <span className="text-gold font-semibold">3,000 duplicates</span> and{" "}
              <span className="text-gold font-semibold">15% dead leads</span> in our HubSpot data — 
              all fixed in <span className="text-gold font-semibold">48 hours</span>. 
              Our sales team finally trusts the CRM again."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-xl font-bold">
                M
              </div>
              <div>
                <p className="font-semibold">Michael R.</p>
                <p className="text-sm text-muted-foreground">Sales Director, Cape Town SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
