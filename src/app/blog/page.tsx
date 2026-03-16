import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";
import blogPosts from "@/data/blog.json";

export const metadata: Metadata = {
  title: "Blog | HETAL J SHAH & Co.",
  description:
    "Articles on GST, income tax, NRI tax, company formation, and compliance. Insights from chartered accountants in Ahmedabad.",
  openGraph: {
    title: "Blog | HETAL J SHAH & Co.",
    description: "Articles on GST, income tax, NRI tax, company formation, and compliance.",
    url: `${siteUrl}/blog`,
  },
  alternates: { canonical: `${siteUrl}/blog` },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-primary font-medium" aria-current="page">Blog</li>
          </ol>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-4">
          Blog
        </h1>
        <p className="text-muted text-lg mb-12">
          Updates and insights on tax, compliance, and business formation from our team.
        </p>

        <ul className="space-y-8" role="list">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-2xl border border-muted/20 bg-white hover:border-accent/40 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <span className="text-sm font-medium text-accent">{post.category}</span>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-primary mt-2 mb-2 hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12">
          <Link href="/" className="text-muted hover:text-accent text-sm font-medium">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
