export type PricingOption = {
  country: string;
  currency: string;
  symbol: string;
  amount: number;
};

// Static pricing by country. Adjust amounts as your business needs.
export const pricingOptions: PricingOption[] = [
  { country: "South Africa", currency: "ZAR", symbol: "R", amount: 4999 },
  { country: "United States", currency: "USD", symbol: "$", amount: 299 },
  { country: "United Kingdom", currency: "GBP", symbol: "£", amount: 249 },
  { country: "European Union", currency: "EUR", symbol: "€", amount: 279 },
  { country: "Canada", currency: "CAD", symbol: "$", amount: 399 },
  { country: "Australia", currency: "AUD", symbol: "$", amount: 449 },
  { country: "India", currency: "INR", symbol: "₹", amount: 14999 },
  { country: "Nigeria", currency: "NGN", symbol: "₦", amount: 349000 },
];

export const defaultCountry = "South Africa";

export const formatPrice = (amount: number) => {
  return amount.toLocaleString(undefined, { maximumFractionDigits: 0 });
};

// Detect country from browser locale to set a sensible default
export const detectDefaultCountry = (): string => {
  try {
    const locale = typeof navigator !== 'undefined' ? navigator.language : 'en-US';
    const region = locale.split('-')[1]?.toUpperCase();
    const regionToCountry: Record<string, string> = {
      ZA: 'South Africa',
      US: 'United States',
      GB: 'United Kingdom',
      AU: 'Australia',
      CA: 'Canada',
      IN: 'India',
      NG: 'Nigeria',
      // Common EU regions mapped to EU pricing
      IE: 'European Union',
      FR: 'European Union',
      DE: 'European Union',
      ES: 'European Union',
      IT: 'European Union',
      NL: 'European Union',
      SE: 'European Union',
      PT: 'European Union',
      PL: 'European Union',
    };
    const detected = region ? regionToCountry[region] : undefined;
    return detected ?? defaultCountry;
  } catch {
    return defaultCountry;
  }
};