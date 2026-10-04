import type { Metadata } from "next";
import { BlogPage } from "@/components/blog";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("blog");

export default function Blog() {
  return <BlogPage />;
}
