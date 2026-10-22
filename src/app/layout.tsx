import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteMetadata, siteCopy } from "@/data";
import { SiteFooter } from "@/components/common/footer";
import { SiteHeader } from "@/components/common/header";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { SiteMotion } from "@/components/common/site-motion";
import { SiteLoader } from "@/components/common/site-loader";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

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
    <html className={`${openSans.variable} ${poppins.variable} min-h-full`} lang="en">
      <body className="min-h-screen bg-white text-ink antialiased font-body">
        <SiteLoader />
        <SiteMotion />
        
        <div className="overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
