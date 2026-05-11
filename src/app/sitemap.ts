import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { isDraft } from "@/lib/blog-drafts";

const SITE = "https://www.vendoh.io";

// Generates https://vendoh.io/sitemap.xml
// Static routes are enumerated manually; blog posts are discovered by reading
// src/content/blog/*.md at build time so the sitemap stays in sync with
// whatever posts exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`,                priority: 1.0, changeFrequency: "weekly",  lastModified: now },
    { url: `${SITE}/about`,           priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${SITE}/careers`,         priority: 0.8, changeFrequency: "weekly",  lastModified: now },
    { url: `${SITE}/blog`,            priority: 0.9, changeFrequency: "weekly",  lastModified: now },
    { url: `${SITE}/terms`,           priority: 0.3, changeFrequency: "yearly",  lastModified: now },
    { url: `${SITE}/privacy`,         priority: 0.3, changeFrequency: "yearly",  lastModified: now },
    { url: `${SITE}/vendor-agreement`,priority: 0.3, changeFrequency: "yearly",  lastModified: now },
  ];

  // Discover blog posts from the filesystem at build time.
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogDir = join(process.cwd(), "src/content/blog");
    blogRoutes = readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
      .filter((slug) => !isDraft(slug))
      .map((slug) => ({
        url: `${SITE}/blog/${slug}`,
        priority: 0.7,
        changeFrequency: "monthly" as const,
        lastModified: now,
      }));
  } catch {
    // If the directory doesn't exist at build time, skip silently.
  }

  return [...staticRoutes, ...blogRoutes];
}
