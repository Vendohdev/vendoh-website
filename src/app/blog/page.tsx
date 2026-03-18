import type { Metadata } from "next";
import { BlogContent } from "@/components/sections/BlogContent";

export const metadata: Metadata = {
  title: "Vendoh Journal — Stories from the Frontlines of Africa's Service Economy",
  description:
    "Insights, stories, and perspectives from the team building Nigeria's first voice-powered service marketplace.",
  openGraph: {
    title: "Vendoh Journal — Stories from Africa's Service Economy",
    description:
      "Insights and stories from the team building Nigeria's service marketplace.",
    url: "https://vendoh.io/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
