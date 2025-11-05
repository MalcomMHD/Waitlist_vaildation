import { Check, X } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            From Chaos to <span className="text-gradient-gold">Clarity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Imagine your team trusting every record again
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="glass-card rounded-2xl p-8 space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 pb-4 border-b border-border/30">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse"></div>
              <h3 className="text-xl font-semibold">Before: Messy CRM</h3>
            </div>
            
            <div className="space-y-4">
              <IssueItem 
                icon={<X className="w-4 h-4" />}
                title="Multiple duplicates"
                description="Can't identify the real contact"
              />
              <IssueItem 
                icon={<X className="w-4 h-4" />}
                title="Missing information"
                description="40% of contacts unreachable"
              />
              <IssueItem 
                icon={<X className="w-4 h-4" />}
                title="Outdated records"
                description="Contacts left company years ago"
              />
              <IssueItem 
                icon={<X className="w-4 h-4" />}
                title="Compliance violations"
                description="Unsubscribed users still active"
              />
            </div>
          </div>

          {/* After */}
          <div className="glass-card-gold rounded-2xl p-8 space-y-6 shadow-gold hover:shadow-gold-strong transition-shadow">
            <div className="flex items-center gap-3 pb-4 border-b border-gold/20">
              <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></div>
              <h3 className="text-xl font-semibold text-gold">After: Clean CRM</h3>
            </div>
            
            <div className="space-y-4">
              <SolutionItem 
                icon={<Check className="w-4 h-4" />}
                title="Unique contacts"
                description="One verified record per person"
              />
              <SolutionItem 
                icon={<Check className="w-4 h-4" />}
                title="Complete profiles"
                description="AI-enriched with missing data"
              />
              <SolutionItem 
                icon={<Check className="w-4 h-4" />}
                title="Current & accurate"
                description="Dead leads removed, data fresh"
              />
              <SolutionItem 
                icon={<Check className="w-4 h-4" />}
                title="Fully compliant"
                description="POPIA & GDPR certified"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IssueItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10 hover:bg-destructive/10 transition-colors">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center text-destructive mt-0.5">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-medium text-sm mb-1">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const SolutionItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-gold/5 border border-gold/10 hover:bg-gold/10 transition-colors">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold mt-0.5">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-medium text-sm mb-1">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);
