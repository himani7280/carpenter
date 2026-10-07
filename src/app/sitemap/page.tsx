import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata, carpenterServices } from "@/data";
import { PageBanner, SectionTitle } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export const metadata: Metadata = getPageMetadata("sitemap");

export default function SitemapPage() {
  const mainPages = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/gallery" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <PageBanner page="sitemap" />
      <section className={`bg-white ${sectionSpace}`}>
        <div className="site-container">
          <SectionTitle eyebrow="Overview" title="Site Map" />
          <div className="mx-auto flex w-fit gap-[15vw] max-[800px]:gap-[10vw] max-[560px]:flex-col max-[560px]:gap-10">
            <div className="min-w-[140px]">
              <h3 className="mb-4 text-2xl font-bold text-[#8c4a1c]">Main Pages</h3>
              <ul className="grid gap-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link className="text-[16px] text-body transition-colors hover:text-[#c7863d]" href={page.href}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-[140px]">
              <h3 className="mb-4 text-2xl font-bold text-[#8c4a1c]">Our Services</h3>
              <ul className="grid gap-3">
                {carpenterServices.map((service) => (
                  <li key={service.href}>
                    <Link className="text-[16px] text-body transition-colors hover:text-[#c7863d]" href={service.href}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
