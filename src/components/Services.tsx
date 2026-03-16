import Link from "next/link";
import servicesData from "@/data/services.json";

type ServiceItem = { slug: string; name: string };
type ServiceCategory = { id: string; title: string; services: ServiceItem[] };

const categories = servicesData as ServiceCategory[];

const descriptions: Record<string, string> = {
  "business-registration": "GST, MSME, PF, ESIC, FSSAI, trademark and other registrations to get your business compliant.",
  "company-formation": "Private limited, OPC, LLP, partnership, Section 8 and sole proprietorship formation.",
  "audit-assurance": "Statutory, tax, stock, LLP and GST audits for confidence and regulatory compliance.",
  "direct-tax": "ITR filing, notice reply, TDS returns and income tax consultancy.",
  "indirect-tax": "GST return filing, refunds, cancellation and GST advisory services.",
  "nri-tax-and-allied-services": "Residential status, NRI ITR, repatriation (15CA/15CB) and lower TDS certificates.",
  "corporate-laws": "Advisory and compliance under company law and related regulations.",
  "consultancy": "Tailored advisory for your business and compliance needs.",
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-surface scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="services-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-primary"
          >
            Services we offer
          </h2>
          <p className="mt-4 text-lg text-muted">
            End-to-end chartered accountancy and advisory tailored to your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/services/${category.id}`}
              className="group p-6 md:p-8 rounded-2xl border border-muted/20 bg-white hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 block"
            >
              <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">
                {descriptions[category.id] ?? "Expert support for your compliance and growth."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
