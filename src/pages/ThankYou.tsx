import { useMemo } from "react";

const ThankYou = () => {
  const params = new URLSearchParams(window.location.search);
  const email = useMemo(() => params.get("email") || "your email", []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-background">
      <div className="max-w-xl w-full glass-card-gold rounded-3xl p-10 md:p-14 shadow-gold-strong text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          You’re on the <span className="text-gradient-gold">Waitlist</span> 🎉
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Thanks for signing up. We’ve sent confirmation to <span className="font-medium">{email}</span>.
        </p>
        <p className="text-sm text-muted-foreground">
          Expect audit instructions within 24 hours. If you don’t see our email,
          check your spam folder or whitelist our domain.
        </p>
        <div className="mt-8">
          <a href="/" className="inline-block px-6 py-3 rounded-md bg-foreground text-background font-medium shadow-md hover:shadow-lg transition">Back to Home</a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;