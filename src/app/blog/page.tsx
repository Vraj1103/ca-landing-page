import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/site";
import blogPosts from "@/data/blog.json";
import { blogCategories, getCategoryLabel } from "@/data/blogCategories";

export const metadata: Metadata = {
  title: "Blog | HETAL J SHAH & Co.",
  description:
    "Blog on GST, income tax, NRI tax, company formation, audit and business registration in India. CA insights from Ahmedabad, Gujarat—NRI ITR, 15CA 15CB, property sale TDS, Gujarat and pan-India compliance.",
  keywords: [
    "CA blog Ahmedabad",
    "tax blog Gujarat",
    "NRI tax blog India",
    "GST blog India",
    "chartered accountant blog",
  ],
  openGraph: {
    title: "Blog | CA Ahmedabad, Gujarat – Tax, NRI & Compliance Insights India",
    description: "Articles on GST, income tax, NRI tax, audit and company formation. CA firm Ahmedabad, Gujarat and India.",
    url: `${siteUrl}/blog`,
  },
  alternates: { canonical: `${siteUrl}/blog` },
};

type BlogPost = { slug: string; title: string; excerpt: string; date: string; category: string; readTime: string };
const posts = blogPosts as BlogPost[];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? "all";
  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

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
        <p className="text-muted text-lg mb-8">
          Updates and insights on tax, compliance, and business formation from our team.
        </p>

        <div className="mb-10" role="navigation" aria-label="Blog categories">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => {
              const isActive = cat.id === activeCategory;
              const href = cat.id === "all" ? "/blog" : `/blog?category=${cat.id}`;
              return (
                <Link
                  key={cat.id}
                  href={href}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    isActive
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-muted/15 text-muted hover:bg-muted/25 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>

        <ul className="space-y-8" role="list">
          {filteredPosts.length === 0 ? (
            <li className="py-12 text-center text-muted">
              No posts in this category yet. Try another category or check back later.
            </li>
          ) : (
            filteredPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-2xl border border-muted/20 bg-white hover:border-accent/40 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <span className="text-sm font-medium text-accent">{getCategoryLabel(post.category)}</span>
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
            ))
          )}
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
