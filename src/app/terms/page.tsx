import { LegalLayout } from "@/components/layout/LegalLayout";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Vendoh",
  description:
    "Vendoh Terms of Service. Read our terms and conditions for using the Vendoh platform.",
};

export default function TermsPage() {
  const content = readFileSync(
    join(process.cwd(), "src/content/terms.md"),
    "utf-8"
  );

  return (
    <LegalLayout
      title="Terms of Service"
      version="2.0"
      lastUpdated="March 2026"
      status="Subject to Legal Review"
    >
      <MarkdownRenderer content={content} />
    </LegalLayout>
  );
}
