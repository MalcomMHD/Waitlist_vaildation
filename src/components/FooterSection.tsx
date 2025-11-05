import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-4 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Still not sure? Try the audit — it's free, fast, and private.
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'll prove how much money your dirty CRM is costing you.
        </p>
        
        <Button 
          size="lg" 
          variant="gold-outline" 
          className="text-lg px-8 py-6 h-auto"
          onClick={scrollToForm}
        >
          Get My Free Audit →
        </Button>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>© 2025 CRM Clean Sprint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
