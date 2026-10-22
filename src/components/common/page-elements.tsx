import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { pageContent, type SitePageName } from "@/data";
import { aboutPhoto, aboutPhotoWrap, experienceBadge } from "@/components/common/styles";

// Detail pages show their listing page in the breadcrumb
const parentPages: Partial<Record<Exclude<SitePageName, "home">, Exclude<SitePageName, "home">>> = {
  "services-details": "services",
  "blog-details": "blog",
};

export function PageBanner({
  page,
  customBreadcrumb,
  title,
}: {
  page: Exclude<SitePageName, "home">;
  customBreadcrumb?: { label: string; parent?: { href: string; label: string } };
  title?: string;
}) {
  const content = pageContent[page];
  const parent = parentPages[page];

  // Build breadcrumb trail
  const trail: { href: string; label: string }[] = [{ href: "/", label: "Home" }];
  if (customBreadcrumb?.parent) {
    trail.push(customBreadcrumb.parent);
  } else if (parent) {
    trail.push({ href: `/${parent}`, label: pageContent[parent].breadcrumb });
  }
  const currentLabel = customBreadcrumb?.label ?? content.breadcrumb;
  const pageTitle = title ?? (page === "services-details" || page === "blog-details" ? content.title : (customBreadcrumb?.label ?? content.title));

  return (
    <section className="relative grid min-h-[270px] place-items-center overflow-hidden bg-[#30251e] bg-[url('/images/carpenter-hero.webp')] bg-position-[center_44%] bg-cover bg-no-repeat text-center text-white before:absolute before:inset-0 before:bg-[rgb(22_17_14/76%)] max-[560px]:min-h-[200px]">
      <div className="site-container relative z-1 py-10 max-[560px]:py-7">
        <h1 className="mb-3 font-heading text-[clamp(28px,3.2vw,40px)] font-bold tracking-[-1px] max-[560px]:mb-2" data-motion-effect="fade-down">{pageTitle}</h1>
        <nav aria-label="Breadcrumb" className="flex justify-center gap-[11px] text-[13.5px] text-white max-[560px]:text-[12px]" data-motion-flip="up">
          {trail.map((crumb) => (
            <Fragment key={crumb.href}>
              <Link className="text-[#d8a066]" href={crumb.href}>{crumb.label}</Link>
              <span aria-hidden="true" className="text-[18px] leading-[14px] text-[#d8a066]">›</span>
            </Fragment>
          ))}
          <span aria-current="page">{currentLabel}</span>
        </nav>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-8 max-w-[720px] text-center max-[560px]:mb-6" data-motion-effect="fade-up">
      <span className={`inline-flex items-center gap-2.5 text-[11.5px] font-extrabold tracking-[2px] ${light ? "text-[#d49b5a]" : "text-[#98642f]"} uppercase before:h-px before:w-7 before:bg-[#ae773d] after:h-px after:w-7 after:bg-[#ae773d] max-[560px]:gap-2 max-[560px]:text-[9.5px] max-[560px]:tracking-[1.5px] max-[560px]:before:w-5 max-[560px]:after:w-5`}>{eyebrow}</span>
      <h2 className={`mt-2.5 mb-3 font-heading text-[clamp(28px,2.8vw,38px)] leading-[1.15] font-bold tracking-[-0.8px] max-[560px]:my-2 ${light ? "text-white [&_em]:text-[#cf9647]" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mx-auto max-w-[650px] text-[14.5px] leading-[1.65] ${light ? "text-white/90" : "text-body"} max-[560px]:text-[13px]`}>{description}</p>}
    </div>
  );
}

export function HighlightedTitle({ first, highlight, breakBeforeHighlight = false }: { first: string; highlight: string; breakBeforeHighlight?: boolean }) {
  return <>{first}{breakBeforeHighlight && <br />} <em className="not-italic text-bronze">{highlight}</em></>;
}

export function AboutPhoto({ alt }: { alt: string }) {
  return (
    <div className={aboutPhotoWrap} data-motion-effect="zoom-out">
      <Image alt={alt} className={aboutPhoto} fill sizes="(max-width: 800px) 100vw, 50vw" src="/images/carpenter-hero.webp" />
      <div className={experienceBadge}>
        <strong className="font-heading text-[40px] leading-none max-[560px]:text-[30px]">10+</strong>
        <span className="mt-2 text-[11px] leading-[1.4] tracking-[1.8px] uppercase max-[560px]:text-[8.5px]">Years of<br />Experience</span>
      </div>
    </div>
  );
}
