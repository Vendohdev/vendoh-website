import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { blogPostingGraph, SITE_URL } from "@/lib/schema";
import { isDraft } from "@/lib/blog-drafts";

// Static-generate every blog post at build time so every URL is a real,
// crawlable HTML document — this is the fix for the #1 critical finding
// in the SEO/GEO audit (blog posts were previously list items only).
// Drafts listed in src/lib/blog-drafts.ts are excluded.
export async function generateStaticParams() {
  return getAllPostSlugs()
    .filter((slug) => !isDraft(slug))
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (isDraft(slug)) {
    return { title: "Post not found", robots: { index: false, follow: false } };
  }
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.datePublishedISO,
      authors: [post.author],
      tags: [post.tag],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (isDraft(slug)) notFound();
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ld = blogPostingGraph({
    slug,
    title: post.title,
    description: post.description,
    datePublished: post.datePublishedISO,
    author: post.author,
    readTimeMinutes: post.readTimeMinutes,
  });

  return (
    <>
      <Script
        id={`ld-article-${slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(ld)}
      </Script>

      <article className="pt-28 pb-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-text-tertiary">
            <Link href="/" className="hover:text-vendoh-blue transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-vendoh-blue transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-border">
            <span className="text-sm font-extrabold uppercase tracking-wider text-vendoh-blue">
              {post.tag}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span className="font-medium text-foreground">{post.author}</span>
              <span className="text-text-tertiary">&middot;</span>
              <time dateTime={post.datePublishedISO}>{post.published}</time>
              <span className="text-text-tertiary">&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-[1.8] prose-li:text-text-secondary prose-li:leading-[1.8] prose-strong:text-foreground prose-a:text-vendoh-blue prose-a:no-underline hover:prose-a:underline">
            <MarkdownRenderer content={post.raw} />
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-10 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-vendoh-blue hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Vendoh Journal
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
