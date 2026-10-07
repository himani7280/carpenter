import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/page";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("services");

export default function Services() {
  return <ServicesPage />;
}
