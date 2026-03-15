import { LegalLayout } from "@/components/layout/LegalLayout";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendor Agreement — Vendoh",
  description:
    "Vendoh Vendor Agreement. Terms and conditions for service providers on the Vendoh platform.",
};

export default function VendorAgreementPage() {
  const content = readFileSync(
    join(process.cwd(), "src/content/vendor-agreement.md"),
    "utf-8"
  );

  return (
    <LegalLayout
      title="Vendor Agreement"
      version="1.0"
      lastUpdated="March 2026"
      status="Draft"
    >
      <MarkdownRenderer content={content} />
    </LegalLayout>
  );
}
