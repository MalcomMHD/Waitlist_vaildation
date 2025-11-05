type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/logos/64px-HubSpot_Logo.svg.png", alt: "HubSpot" },
  { src: "/logos/512px-Salesforce.com_logo.svg.png", alt: "Salesforce" },
  { src: "/logos/512px-Pipedrive_Logo.svg.png", alt: "Pipedrive" },
  { src: "/logos/512px-ZOHO_logo_2023.svg.png", alt: "Zoho" },
  { src: "/logos/256px-Monday_logo.svg.png", alt: "Monday.com" },
];

export const LogoCarousel = () => {
  // Duplicate the list to create a seamless loop
  const loopLogos = [...logos, ...logos];

  return (
    <div className="logo-marquee relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent"></div>

      <div className="logo-track flex items-center gap-10">
        {loopLogos.map((logo, i) => (
          <div key={i} className="shrink-0 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};