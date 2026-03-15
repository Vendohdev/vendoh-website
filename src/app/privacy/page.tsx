import { LegalLayout } from "@/components/layout/LegalLayout";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Vendoh",
  description:
    "Vendoh Privacy Policy. Learn how we collect, use, and protect your data on the Vendoh platform.",
};

export default function PrivacyPage() {
  const content = readFileSync(
    join(process.cwd(), "src/content/privacy.md"),
    "utf-8"
  );

  return (
    <LegalLayout
      title="Privacy Policy"
      version="1.0"
      lastUpdated="March 2026"
      status="Draft"
    >
      <MarkdownRenderer content={content} />
    </LegalLayout>
  );
}
