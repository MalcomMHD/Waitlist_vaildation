import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-10 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-gold">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Limited Beta Access</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Your CRM Data Is{" "}
                <span className="text-gradient-gold">Lying to You</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Uncover hidden duplicates, dead leads, and compliance risks — before they cost you clients.
              </p>
            </div>
            
            <div className="space-y-5">
              <Button 
                size="lg" 
                variant="gold" 
                className="w-full lg:w-auto text-base px-10 py-7 h-auto group shadow-gold"
                onClick={scrollToForm}
              >
                Get Your Free CRM Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground/80">
                30 seconds • No credit card • Results in 24 hours
              </p>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-destructive/20 rounded-3xl blur-2xl opacity-30"></div>
            
            <div className="relative glass-card rounded-2xl p-10 shadow-lg">
              <div className="absolute -top-5 -right-5 px-5 py-3 bg-gradient-to-br from-destructive to-destructive/80 rounded-xl font-semibold text-sm shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Critical Issues Detected
                </div>
              </div>
              
              <div className="space-y-6 mt-4">
                <StatItem label="Duplicate Records" value="3,247" />
                <StatItem label="Dead Leads" value="15%" />
                <StatItem label="Missing Data Fields" value="2,891" />
                <StatItem label="Compliance Risk" value="High" isLast />
              </div>
              
              <div className="mt-8 p-6 glass-card-gold rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">Estimated Annual Impact</p>
                <p className="text-3xl font-bold text-gold">R 187,450</p>
                <p className="text-xs text-muted-foreground mt-1">in lost revenue & inefficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value, isLast = false }: { label: string; value: string; isLast?: boolean }) => (
  <div className={`flex items-center justify-between py-4 ${!isLast ? 'border-b border-border/30' : ''}`}>
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-2xl font-bold text-destructive">{value}</span>
  </div>
);
