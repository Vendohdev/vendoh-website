"use client";

import { useState, useEffect, ReactNode } from "react";
import { ArrowUp, Printer } from "lucide-react";
import Link from "next/link";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface LegalLayoutProps {
  title: string;
  version: string;
  lastUpdated: string;
  status?: string;
  children: ReactNode;
}

export function LegalLayout({
  title,
  version,
  lastUpdated,
  status,
  children,
}: LegalLayoutProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Build TOC from headings after render
  useEffect(() => {
    const headings = document.querySelectorAll(
      ".legal-content h2, .legal-content h3"
    );
    const items: TOCItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id =
        heading.id ||
        text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      heading.id = id;
      items.push({
        id,
        text: text.replace(/^\d+\.\s*/, ""), // Remove leading numbers
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setToc(items);
  }, []);

  // Track active heading on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    const headings = document.querySelectorAll(
      ".legal-content h2, .legal-content h3"
    );
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [toc]);

  // Show back-to-top after scroll
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-text-tertiary">
          <Link href="/" className="hover:text-vendoh-blue transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sidebar TOC — desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4">
                On this page
              </h4>
              <nav className="space-y-1 max-h-[calc(100vh-150px)] overflow-y-auto">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-1.5 transition-colors border-l-2 ${
                      item.level === 3 ? "pl-6" : "pl-3"
                    } ${
                      activeId === item.id
                        ? "border-vendoh-blue text-vendoh-blue font-medium"
                        : "border-transparent text-text-secondary hover:text-foreground hover:border-border"
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>

              {/* Print button */}
              <button
                onClick={() => window.print()}
                className="mt-6 flex items-center gap-2 text-xs text-text-tertiary hover:text-foreground transition-colors no-print"
              >
                <Printer size={14} />
                Print this document
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            {/* Document Header */}
            <header className="mb-10 pb-8 border-b border-border">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                {title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-vendoh-blue-light px-3 py-1 text-xs font-medium text-vendoh-blue">
                  Version {version}
                </span>
                <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
                  Last Updated: {lastUpdated}
                </span>
                {status && (
                  <span className="inline-flex items-center rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                    {status}
                  </span>
                )}
              </div>
            </header>

            {/* Legal Content with styled prose */}
            <div className="legal-content prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border-light prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-[1.8] prose-li:text-text-secondary prose-li:leading-[1.8] prose-strong:text-foreground prose-a:text-vendoh-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-vendoh-blue prose-blockquote:bg-vendoh-blue-light/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-table:border-collapse prose-th:bg-surface prose-th:text-foreground prose-th:font-semibold prose-th:p-3 prose-th:text-sm prose-td:p-3 prose-td:text-sm prose-td:border-b prose-td:border-border-light">
              {children}
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-border text-sm text-text-tertiary">
              <p>
                Last updated: {lastUpdated}. For questions about this document,
                contact{" "}
                <a
                  href="mailto:legal@vendoh.io"
                  className="text-vendoh-blue hover:underline"
                >
                  legal@vendoh.io
                </a>
              </p>
              <p className="mt-2">
                Vendoh Technologies Ltd &middot; RC 1815446 &middot; Lagos,
                Nigeria
              </p>
            </footer>
          </article>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-8 right-8 w-10 h-10 rounded-full bg-vendoh-blue text-white shadow-lg flex items-center justify-center hover:bg-vendoh-blue-dark transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
