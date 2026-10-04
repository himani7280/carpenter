import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteMetadata, siteCopy } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.title} | ${siteCopy.brand.descriptor}`,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
