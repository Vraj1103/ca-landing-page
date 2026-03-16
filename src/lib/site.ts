/**
 * Canonical site URL for SEO (metadata, sitemap, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in production or leave unset for Vercel auto URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.hetaljshahco.com");

export const siteName = "HETAL J SHAH & Co.";
export const siteTagline = "Chartered Accountants in Ahmedabad, Gujarat – Audit, Tax & NRI Services";
export const defaultDescription =
  "Chartered accountants in Ahmedabad, Gujarat & pan-India—audit, tax, GST, company registration & NRI tax consultant. CA firm Maninagar, Ahmedabad. ICAI regulated. NRI ITR, 15CA/15CB, property sale TDS. Call +91 98983 20491.";
export const nriDescription =
  "NRI tax consultant India & Gujarat—ITR for NRIs, 15CA 15CB for repatriation, lower TDS certificate for property sale, NRO NRE advice. CA for NRIs in Ahmedabad serving clients across India and overseas.";
export const phone = "+91 98983 20491";
export const email = "info@hetaljshahco.com";
export const address = {
  street: "309, Radhe Kishan Arista, Opposite Hirabhai Tower, Uttam Nagar Cross Road",
  city: "Maninagar",
  state: "Ahmedabad",
  postalCode: "380008",
  region: "Gujarat",
};
