import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import blogPosts from "@/data/blog.json";
import { siteUrl } from "@/lib/site";
import GstReturnDueDatesPost from "@/components/blog/posts/GstReturnDueDatesPost";
import WhoShouldFileItrPost from "@/components/blog/posts/WhoShouldFileItrPost";
import NriWhenToFileItrPost from "@/components/blog/posts/NriWhenToFileItrPost";
import PvtLtdLlpOpcPost from "@/components/blog/posts/PvtLtdLlpOpcPost";

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

  return (
    <main className="min-h-screen py-16 md:py-24">
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
          <span className="text-sm font-medium text-accent">{post.category}</span>
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
          <Link href="/blog" className="text-muted hover:text-accent text-sm font-medium">
            ← All blog posts
          </Link>
        </p>
      </div>
    </main>
  );
}
