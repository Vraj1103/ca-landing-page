import { siteUrl, siteName, defaultDescription, phone, email, address } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  description: defaultDescription,
  url: siteUrl,
  telephone: phone.replace(/\s/g, ""),
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.9899677,
    longitude: 72.5995532,
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "City", name: "Ahmedabad" },
  ],
  serviceType: [
    "Chartered Accountant",
    "Tax Consultant",
    "GST Registration and Filing",
    "Income Tax Return",
    "Audit and Assurance",
    "NRI Tax Consultant",
    "NRI Income Tax Return",
    "15CA 15CB Certificate",
    "Company Registration",
    "Business Registration Gujarat",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
