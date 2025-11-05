import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-4 border-t border-border/30">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Still not sure?<br />
            <span className="text-muted-foreground font-normal">The audit is free, fast, and private.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We'll prove exactly how much your dirty CRM is costing you.
          </p>
          
          <Button 
            size="lg" 
            variant="gold-outline" 
            className="text-base px-10 py-7 h-auto"
            onClick={scrollToForm}
          >
            Get My Free Audit →
          </Button>
        </div>

        <div className="pt-12 text-center text-sm text-muted-foreground/50">
          <p>© 2025 CRM Clean Sprint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
