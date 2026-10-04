import type { Metadata } from "next";
import { AboutPage } from "@/components/about";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("about");

export default function About() {
  return <AboutPage />;
}
