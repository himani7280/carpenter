import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteMetadata, siteCopy } from "@/data";
import { SiteFooter } from "@/components/common/footer";
import { SiteHeader } from "@/components/common/header";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { SiteMotion } from "@/components/common/site-motion";
import { Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ display: "swap", subsets: ["latin"], variable: "--font-montserrat-next" });
const poppins = Poppins({ display: "swap", subsets: ["latin"], variable: "--font-poppins-next", weight: ["400", "500", "600"] });
const roboto = Roboto({ display: "swap", subsets: ["latin"], variable: "--font-roboto-next", weight: ["500", "700"] });

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
    <html className={`${montserrat.variable} ${poppins.variable} ${roboto.variable} min-h-full`} lang="en">
      <body className="min-h-screen bg-white text-ink antialiased">
        <SiteMotion />
        {/* overflow-x-clip lives on this wrapper (not <body>, whose overflow is applied to the viewport) so slide-in animations can't widen the page on phones; clip keeps the sticky header working. */}
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
