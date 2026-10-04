import type { Metadata } from "next";
import { HomePage } from "@/components/home";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("home");

export default function Home() {
  return <HomePage />;
}
