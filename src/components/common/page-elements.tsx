import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { pageContent, type SitePageName } from "@/data";
import { aboutPhoto, aboutPhotoWrap, experienceBadge } from "@/components/common/styles";

// Detail pages show their listing page in the breadcrumb: Home › Services › Services Details.
const parentPages: Partial<Record<Exclude<SitePageName, "home">, Exclude<SitePageName, "home">>> = {
  "services-details": "services",
  "blog-details": "blog",
};

export function PageBanner({
  page,
  customBreadcrumb,
}: {
  page: Exclude<SitePageName, "home">;
  customBreadcrumb?: { label: string; parent?: { href: string; label: string } };
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
  const pageTitle = customBreadcrumb?.label ?? content.title;

  return (
    <section className="relative grid min-h-[330px] place-items-center overflow-hidden bg-[#30251e] bg-[url('/images/carpenter-hero.webp')] bg-position-[center_44%] bg-cover bg-no-repeat text-center text-white before:absolute before:inset-0 before:bg-[rgb(22_17_14/76%)] max-[560px]:min-h-[215px]">
      <div className="site-container relative z-1 py-[50px] max-[560px]:py-[35px]">
        <h1 className="font-banner mb-[21px] text-[clamp(38px,5vw,61px)] font-bold tracking-[-1.5px] max-[560px]:mb-[13px] max-[560px]:text-[38px]" data-motion-effect="fade-down">{pageTitle}</h1>
        <nav aria-label="Breadcrumb" className="font-banner flex justify-center gap-[11px] text-[14px] text-white max-[560px]:text-[12px]" data-motion-flip="up">
          {trail.map((crumb) => (
            <Fragment key={crumb.href}>
              <Link className="text-[#d8a066]" href={crumb.href}>{crumb.label}</Link>
              <span aria-hidden="true" className="text-[21px] leading-[14px] text-[#d8a066]">›</span>
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
    <div className="mx-auto mb-[34px] max-w-[740px] text-center max-[560px]:mb-[25px]" data-motion-effect="fade-up">
      <span className={`inline-flex items-center gap-[13px] text-[12px] font-extrabold tracking-[2px] ${light ? "text-[#d49b5a]" : "text-[#98642f]"} uppercase before:h-px before:w-[33px] before:bg-[#ae773d] after:h-px after:w-[33px] after:bg-[#ae773d] max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:tracking-[1.6px] max-[560px]:before:w-[21px] max-[560px]:after:w-[21px]`}>{eyebrow}</span>
      <h2 className={`mt-[11px] mb-3 text-[clamp(30px,3.2vw,44px)] leading-[1.12] font-[750] tracking-[-1.25px] max-[560px]:my-[9px] max-[560px]:text-[30px] max-[560px]:tracking-[-0.7px] ${light ? "text-white [&_em]:text-[#cf9647]" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mx-auto max-w-[670px] text-[14px] leading-[1.65] ${light ? "text-white/90" : "text-body"} max-[560px]:text-[12px]`}>{description}</p>}
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
        <strong className="text-[45px] leading-none max-[560px]:text-[33px]">10+</strong>
        <span className="mt-[9px] text-[11px] leading-[1.45] tracking-[2px] uppercase max-[560px]:text-[8px]">Years of<br />Experience</span>
      </div>
    </div>
  );
}
