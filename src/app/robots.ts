import type { MetadataRoute } from "next";

// Generates https://vendoh.io/robots.txt
// Strategy: explicitly allow every major AI crawler so Vendoh can surface
// in ChatGPT, Claude, Perplexity, Google AI Overviews, Gemini and Copilot
// answers, while keeping admin/api paths disallowed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/share-kit"],
      },
      // --- Generative AI / LLM crawlers (explicit allow) ---
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "Diffbot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "Timpibot", allow: "/" },
      { userAgent: "omgilibot", allow: "/" },
    ],
    sitemap: "https://www.vendoh.io/sitemap.xml",
    host: "https://www.vendoh.io",
  };
}
