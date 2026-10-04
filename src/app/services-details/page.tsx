import type { Metadata } from "next";
import { ServiceDetailsPage } from "@/components/service-details";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("services-details");

export default function ServiceDetails() {
  return <ServiceDetailsPage />;
}
