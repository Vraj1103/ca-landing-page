import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import servicesData from "@/data/services.json";
import blogPosts from "@/data/blog.json";

type ServiceItem = { slug: string; name: string };
type ServiceCategory = { id: string; title: string; services: ServiceItem[] };
type BlogPost = { slug: string };

const categories = servicesData as ServiceCategory[];
const posts = blogPosts as BlogPost[];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/services/${cat.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    cat.services.map((s) => ({
      url: `${base}/services/${cat.id}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...servicePages, ...blogPages];
}
