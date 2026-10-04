import type { Metadata } from "next";
import { BlogDetailsPage } from "@/components/blog-details";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("blog-details");

export default function BlogDetails() {
  return <BlogDetailsPage />;
}
