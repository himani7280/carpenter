import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/page";
import { getPageMetadata } from "@/data";

export const metadata: Metadata = getPageMetadata("contact");

export default function Contact() {
  return <ContactPage />;
}
