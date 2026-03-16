import Link from "next/link";
import { notFound } from "next/navigation";
import servicesData from "@/data/services.json";
import CorporateLawsContent from "@/components/service-content/CorporateLawsContent";
import ConsultancyContent from "@/components/service-content/ConsultancyContent";

type ServiceItem = { slug: string; name: string };
type ServiceCategory = { id: string; title: string; services: ServiceItem[] };

const categories = servicesData as ServiceCategory[];

function getCategory(categoryId: string): ServiceCategory | undefined {
  return categories.find((c) => c.id === categoryId);
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) notFound();
  const hasServices = category.services.length > 0;

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-muted">
            <li>
              <Link href="/#services" className="hover:text-accent transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary font-medium" aria-current="page">
              {category.title}
            </li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-6">
          {category.title}
        </h1>

        {hasServices ? (
          <>
            <p className="text-muted leading-relaxed mb-8">
              We offer the following services under {category.title}. Select a service for more details.
            </p>
            <ul className="space-y-2" role="list">
              {category.services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${category.id}/${s.slug}`}
                    className="block py-3 px-4 rounded-xl border border-muted/20 bg-white hover:border-accent/40 hover:shadow-md transition-all text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : categoryId === "corporate-laws" ? (
          <CorporateLawsContent />
        ) : categoryId === "consultancy" ? (
          <ConsultancyContent />
        ) : (
          <div className="prose prose-lg text-muted max-w-none">
            <p className="leading-relaxed">
              Our {category.title} practice helps clients with compliance, advisory, and regulatory matters. To discuss your requirements, please get in touch.
            </p>
            <p className="mt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get in touch
              </Link>
            </p>
          </div>
        )}

        <p className="mt-10">
          <Link href="/services" className="text-muted hover:text-accent text-sm font-medium">
            ← View all services
          </Link>
        </p>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) return { title: "Services | HETAL J SHAH & Co." };
  const metaMap: Record<string, { title: string; description: string }> = {
    "corporate-laws": {
      title: "Corporate Laws & ROC Compliances | HETAL J SHAH & Co.",
      description: "Expert corporate law and ROC compliance services: annual filings, secretarial compliances, DIN KYC, share transfers, and company law advisory.",
    },
    "consultancy": {
      title: "Business Consultancy Services | HETAL J SHAH & Co.",
      description: "End-to-end business consultancy: accounting, payroll, FEMA compliance, project reports, management reporting, IND AS, and financial controls.",
    },
  };
  if (metaMap[categoryId]) return metaMap[categoryId];
  return {
    title: `${category.title} | HETAL J SHAH & Co.`,
    description: `${category.title} – Chartered accountancy services by HETAL J SHAH & Co., Ahmedabad.`,
  };
}
