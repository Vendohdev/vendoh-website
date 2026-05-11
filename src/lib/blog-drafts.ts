// Posts that exist in src/content/blog/ but should NOT be published yet.
// The .md files stay in the repo; these slugs are filtered out of:
//   - the blog list (BlogContent.tsx)
//   - generateStaticParams in app/blog/[slug]/page.tsx (so the URL 404s)
//   - the sitemap (app/sitemap.ts)
//
// To publish one of these, simply delete it from this Set.
export const DRAFT_SLUGS: ReadonlySet<string> = new Set([
  "meet-the-vendors-lagos-service-providers",
  "building-vendoh-solo-in-lagos",
  "dirty-december-seasonal-demand",
  "then-vs-now-2019-to-2026",
  "why-a-gis-expert-built-nigerias-next-marketplace",
]);

export function isDraft(slug: string): boolean {
  return DRAFT_SLUGS.has(slug);
}
