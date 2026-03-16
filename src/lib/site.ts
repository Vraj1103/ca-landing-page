/**
 * Canonical site URL for SEO (metadata, sitemap, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in production or leave unset for Vercel auto URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.hetaljshahco.com");

export const siteName = "HETAL J SHAH & Co.";
export const siteTagline = "Chartered Accountants in Ahmedabad – Audit, Tax & Advisory";
export const defaultDescription =
  "Chartered accountants in Ahmedabad—audit, tax, and advisory. Maninagar, Gujarat. ICAI regulated. Call +91 98983 20491.";
export const phone = "+91 98983 20491";
export const email = "info@hetaljshahco.com";
export const address = {
  street: "309, Radhe Kishan Arista, Opposite Hirabhai Tower, Uttam Nagar Cross Road",
  city: "Maninagar",
  state: "Ahmedabad",
  postalCode: "380008",
  region: "Gujarat",
};
