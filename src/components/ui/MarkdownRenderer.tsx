"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Strip the frontmatter (everything before and including the first ---)
  const stripped = content.replace(
    /^#\s+.*?\n(?:.*?\n)*?---\n/,
    ""
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Custom heading with auto-id for TOC linking
        h2: ({ children, ...props }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <h2 id={id} {...props}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...props }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <h3 id={id} {...props}>
              {children}
            </h3>
          );
        },
        // Style blockquotes as callout boxes
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-vendoh-blue bg-vendoh-blue-light/30 py-3 px-5 rounded-r-lg my-4 not-italic">
            {children}
          </blockquote>
        ),
        // Style tables
        table: ({ children }) => (
          <div className="overflow-x-auto my-6 rounded-lg border border-border-light">
            <table className="w-full">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="bg-surface text-foreground font-semibold text-sm p-3 text-left border-b border-border">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="p-3 text-sm text-text-secondary border-b border-border-light">
            {children}
          </td>
        ),
      }}
    >
      {stripped}
    </ReactMarkdown>
  );
}
