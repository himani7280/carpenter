import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("gallery");

export default function Gallery() {
  return <GalleryPage />;
}
