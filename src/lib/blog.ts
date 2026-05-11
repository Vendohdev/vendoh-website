import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Each post in src/content/blog/*.md starts with a markdown-style header:
//   # Title
//   **Published:** March 21, 2026
//   **Author:** Alex Nwoko
//   **Tag:** Market Insight
//   **Read Time:** 9 min read
//   ---
//   ...body...
//
// This lib parses that minimal frontmatter without needing gray-matter.

export interface BlogPostMeta {
  slug: string;
  title: string;
  published: string; // human string as written, e.g. "March 21, 2026"
  datePublishedISO: string; // ISO string for JSON-LD + sitemap
  author: string;
  tag: string;
  readTime: string;
  readTimeMinutes: number;
  description: string; // first paragraph after the frontmatter divider
}

export interface BlogPost extends BlogPostMeta {
  body: string; // everything after the frontmatter divider
  raw: string;
}

const BLOG_DIR = join(process.cwd(), "src/content/blog");

function parseDate(input: string): string {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) {
    return new Date().toISOString();
  }
  return d.toISOString();
}

function extractField(raw: string, label: string): string {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`);
  const m = raw.match(re);
  return m ? m[1].trim() : "";
}

function extractTitle(raw: string): string {
  const m = raw.match(/^#\s+(.+)/m);
  return m ? m[1].trim() : "";
}

function extractBody(raw: string): string {
  // Everything after the first '---' divider line
  const idx = raw.indexOf("\n---\n");
  return idx >= 0 ? raw.slice(idx + 5).trim() : raw;
}

function extractDescription(body: string): string {
  // First non-heading paragraph in the body
  const paragraphs = body.split(/\n\s*\n/);
  for (const p of paragraphs) {
    const trimmed = p.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("#")) continue;
    // Strip basic markdown
    const clean = trimmed
      .replace(/[*_`]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    if (clean.length < 40) continue;
    return clean.length > 280 ? clean.slice(0, 277) + "..." : clean;
  }
  return "";
}

function parseReadMinutes(readTime: string): number {
  const m = readTime.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 5;
}

export function getAllPostSlugs(): string[] {
  try {
    return readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const raw = readFileSync(join(BLOG_DIR, `${slug}.md`), "utf-8");
    const title = extractTitle(raw);
    const published = extractField(raw, "Published");
    const author = extractField(raw, "Author") || "Alex Nwoko";
    const tag = extractField(raw, "Tag") || "Vendoh Journal";
    const readTime = extractField(raw, "Read Time") || "5 min read";
    const body = extractBody(raw);
    const description = extractDescription(body);
    return {
      slug,
      title,
      published,
      datePublishedISO: parseDate(published),
      author,
      tag,
      readTime,
      readTimeMinutes: parseReadMinutes(readTime),
      description,
      body,
      raw,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .map(({ body: _body, raw: _raw, ...meta }) => meta)
    .sort((a, b) => (b.datePublishedISO > a.datePublishedISO ? 1 : -1));
}
