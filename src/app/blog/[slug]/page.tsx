import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import blogPosts from "@/data/blog.json";
import { siteUrl, siteName } from "@/lib/site";
import { getCategoryLabel } from "@/data/blogCategories";
import GstReturnDueDatesPost from "@/components/blog/posts/GstReturnDueDatesPost";
import WhoShouldFileItrPost from "@/components/blog/posts/WhoShouldFileItrPost";
import NriWhenToFileItrPost from "@/components/blog/posts/NriWhenToFileItrPost";
import PvtLtdLlpOpcPost from "@/components/blog/posts/PvtLtdLlpOpcPost";
import TdsForm16Post from "@/components/blog/posts/TdsForm16Post";
import WhenIsGstRegistrationMandatoryPost from "@/components/blog/posts/WhenIsGstRegistrationMandatoryPost";
import HowToRespondIncomeTaxNoticePost from "@/components/blog/posts/HowToRespondIncomeTaxNoticePost";
import UdyamMsmeBenefitsPost from "@/components/blog/posts/UdyamMsmeBenefitsPost";
import TaxAudit44ABPost from "@/components/blog/posts/TaxAudit44ABPost";
import CapitalGains54_54FPost from "@/components/blog/posts/CapitalGains54_54FPost";
import Form15Ca15CbWhenPost from "@/components/blog/posts/Form15Ca15CbWhenPost";
import RocAnnualFilingPost from "@/components/blog/posts/RocAnnualFilingPost";
import NriPropertySaleTdsPost from "@/components/blog/posts/NriPropertySaleTdsPost";
import NriRepatriationNroNrePost from "@/components/blog/posts/NriRepatriationNroNrePost";
import FssaiLicenceWhenNeededPost from "@/components/blog/posts/FssaiLicenceWhenNeededPost";
import PfEsiRegistrationWhoMustPost from "@/components/blog/posts/PfEsiRegistrationWhoMustPost";
import StatutoryAuditPrivateCompaniesPost from "@/components/blog/posts/StatutoryAuditPrivateCompaniesPost";
import Gstr9Gstr9cChecklistPost from "@/components/blog/posts/Gstr9Gstr9cChecklistPost";

type BlogPost = { slug: string; title: string; excerpt: string; date: string; category: string; readTime: string };
const posts = blogPosts as BlogPost[];

function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

const postComponents: Record<string, React.ComponentType> = {
  "gst-return-filing-due-dates-and-common-mistakes": GstReturnDueDatesPost,
  "who-should-file-itr-and-key-due-dates": WhoShouldFileItrPost,
  "nri-when-to-file-income-tax-return-in-india": NriWhenToFileItrPost,
  "pvt-ltd-llp-or-opc-which-entity-to-choose": PvtLtdLlpOpcPost,
  "tds-for-salaried-employees-and-form-16": TdsForm16Post,
  "when-is-gst-registration-mandatory": WhenIsGstRegistrationMandatoryPost,
  "how-to-respond-to-income-tax-notice": HowToRespondIncomeTaxNoticePost,
  "udyam-msme-registration-benefits-for-small-business": UdyamMsmeBenefitsPost,
  "tax-audit-section-44ab-who-needs-it": TaxAudit44ABPost,
  "capital-gains-exemption-section-54-54f": CapitalGains54_54FPost,
  "form-15ca-15cb-when-do-you-need-it": Form15Ca15CbWhenPost,
  "roc-annual-filing-for-private-companies": RocAnnualFilingPost,
  "nri-property-sale-tds-capital-gains-india": NriPropertySaleTdsPost,
  "nri-repatriation-nro-nre-rules-limits": NriRepatriationNroNrePost,
  "fssai-licence-when-needed-food-business": FssaiLicenceWhenNeededPost,
  "pf-esi-registration-who-must-register": PfEsiRegistrationWhoMustPost,
  "statutory-audit-private-companies-when-mandatory": StatutoryAuditPrivateCompaniesPost,
  "gstr-9-gstr-9c-annual-return-checklist": Gstr9Gstr9cChecklistPost,
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post | HETAL J SHAH & Co." };
  const canonical = `${siteUrl}/blog/${slug}`;
  return {
    title: `${post.title} | HETAL J SHAH & Co.`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = postComponents[slug];
  if (!Content) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteName, url: siteUrl },
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    url: `${siteUrl}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${slug}` },
  };

  return (
    <main className="min-h-screen py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-muted">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li aria-hidden>/</li>
            <li className="text-primary font-medium truncate max-w-[180px] sm:max-w-none" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <Link
            href={post.category ? `/blog?category=${post.category}` : "/blog"}
            className="text-sm font-medium text-accent hover:underline"
          >
            {getCategoryLabel(post.category)}
          </Link>
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mt-2 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <time dateTime={post.date}>{dateFormatted}</time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <Content />

        <p className="mt-12">
          <Link href={`/blog${post.category ? `?category=${post.category}` : ""}`} className="text-muted hover:text-accent text-sm font-medium">
            ← {post.category ? `${getCategoryLabel(post.category)} posts` : "All blog posts"}
          </Link>
        </p>
      </div>
    </main>
  );
}
