import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-black py-16 px-4 border-t border-neutral-200">
      <div className="container max-w-4xl mx-auto text-center space-y-6">
        <p className="text-sm text-neutral-600">
          © 2025 Closed Analytics — CRM Data Hygiene Specialists.
        </p>
        <Button
          variant="outline"
          className="bg-white text-black border-neutral-300 hover:bg-neutral-50"
          onClick={scrollToForm}
        >
          Back to Waitlist Form ↑
        </Button>
      </div>
    </footer>
  );
};
