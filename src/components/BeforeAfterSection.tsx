import { Check, X } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Chaos to <span className="text-gold">Clarity</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Imagine your team trusting every record again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive animate-pulse"></div>
              <h3 className="text-xl font-bold text-destructive">Before: Messy CRM</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Multiple John Smiths</p>
                  <p className="text-sm text-muted-foreground">Can't tell which is which</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Missing email addresses</p>
                  <p className="text-sm text-muted-foreground">Can't reach 40% of contacts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Outdated information</p>
                  <p className="text-sm text-muted-foreground">Contacts left company 2 years ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">POPIA violations</p>
                  <p className="text-sm text-muted-foreground">Unsubscribed users still in system</p>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-card border-2 border-gold rounded-xl p-8 space-y-4 glow-gold">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse"></div>
              <h3 className="text-xl font-bold text-gold">After: Clean CRM</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gold/10 rounded-lg border border-gold/30">
                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Unique, verified contacts</p>
                  <p className="text-sm text-muted-foreground">One source of truth for each person</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gold/10 rounded-lg border border-gold/30">
                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Complete contact info</p>
                  <p className="text-sm text-muted-foreground">AI-enriched with missing data</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gold/10 rounded-lg border border-gold/30">
                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Current & accurate</p>
                  <p className="text-sm text-muted-foreground">Dead leads removed, data refreshed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gold/10 rounded-lg border border-gold/30">
                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Fully compliant</p>
                  <p className="text-sm text-muted-foreground">POPIA & GDPR ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
