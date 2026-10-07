import Image from "next/image";
import Link from "next/link";
import { carpenterServices, serviceTypes, servicesContent } from "@/data";
import { HighlightedTitle, PageBanner } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";
import { eyebrow, sectionSpace } from "@/components/common/styles";

const leftEyebrow = `${eyebrow} text-[11px] tracking-[1.5px] text-[#98642f] before:h-px before:w-[33px] before:bg-[#ae773d] after:h-px after:w-[33px] after:bg-[#ae773d]`;
const blockTitle = "mt-2.5 mb-2 text-[clamp(26px,2.6vw,34px)] leading-[1.15] font-[750] tracking-[-0.8px] text-ink";

type ServiceType = (typeof carpenterServices)[number];

export function ServiceDetailsPage({ service }: { service: ServiceType }) {
  const { detail } = servicesContent;

  return (
    <>
        <PageBanner
          page="services-details"
          customBreadcrumb={{ label: service.title, parent: { href: "/services", label: "Services" } }}
        />
        <section className={`bg-white ${sectionSpace}`}>
          <div className="site-container">
            <div className="grid grid-cols-[minmax(0,1fr)_245px] items-start gap-[26px] max-[1100px]:grid-cols-1">
              <div>
                <div className="grid grid-cols-[1.4fr_1fr] items-start gap-6 max-[800px]:grid-cols-1">
                  <article data-motion-effect="fade-up">
                    <span className={`${eyebrow} text-[11px] tracking-[1.5px] text-[#8c4a1c] before:h-px before:w-[26px] before:bg-[#ae773d]`}>{service.detail.eyebrow}</span>
                    <h2 className="mt-3 mb-[17px] text-[clamp(29px,3vw,40px)] leading-[1.12] font-[750] tracking-[-1.25px] text-ink max-[560px]:text-[30px] max-[560px]:tracking-[-0.7px]"><HighlightedTitle first={service.detail.title} highlight={service.detail.highlight} breakBeforeHighlight /></h2>
                    {service.detail.paragraphs.map((paragraph) => <p className="mb-[14px] text-[13px] leading-[1.7] text-body" key={paragraph}>{paragraph}</p>)}
                  </article>
                  <div className="relative min-h-[405px] overflow-hidden rounded-[8px] max-[560px]:min-h-[280px]" data-motion-effect="zoom-out">
                    <Image alt={service.detail.imageAlt} className="object-cover" fill sizes="(max-width: 800px) 100vw, 30vw" src={service.detail.image} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-4 rounded-[8px] bg-[#faf1e8] px-3 py-[17px] max-[560px]:grid-cols-2 max-[560px]:gap-1.5 max-[560px]:p-2.5">
                  {detail.benefits.map(([icon, title, text]) => (
                    <div className="group grid justify-items-center border-r border-[#e8d9c9] px-[12px] py-[7px] text-center last:border-0 max-[560px]:px-[7px] max-[560px]:py-2.5 max-[560px]:[&:nth-child(2)]:border-r-0 max-[560px]:[&:nth-child(n+3)]:border-t" data-motion-effect="zoom-in" key={title}>
                      <Icon className="mb-[9px] size-12 rounded-full bg-[#f6dfc8] p-2.5 text-[#b8793e] transition duration-[220ms] group-hover:rotate-[44deg] group-hover:text-[#8c4a1c]" name={icon as IconName} />
                      <strong className="text-[13px] max-[560px]:text-[11px]">{title}</strong>
                      <span className="mt-[5px] text-[11px] leading-[1.5] text-[#736a62] max-[560px]:text-[10px]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="overflow-hidden rounded-[8px] border border-[#ece6df] bg-white shadow-[0_6px_20px_rgb(43_32_23/6%)]" data-motion-effect="fade-left">
                <h3 className="bg-[linear-gradient(110deg,#9a5b28,#c48748)] px-[18px] py-4 text-[18px] font-bold text-white">{detail.serviceListTitle}</h3>
                <div className="p-2">
                  {carpenterServices.map((s, index) => (
                    <Link
                      className={`flex min-h-[44px] items-center justify-between gap-2.5 rounded-[6px] border-b border-[#efeae5] px-3 py-[9px] text-[13px] last:border-b-0 hover:bg-[#fbeee0] hover:text-[#8a5429] ${s.slug === service.slug ? "border-transparent bg-[#fbeee0] text-[#8a5429]" : ""}`}
                      href={s.href}
                      key={s.slug}
                    >
                      {s.title}<span className="text-[18px] text-[#6b5b4f]">›</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-[#efeae5] p-2">
                  <p className="px-3 py-2 text-[11px] font-semibold tracking-[1px] uppercase text-[#9b6b3f]">More Services</p>
                  {serviceTypes.slice(0, 5).map((service) => (
                    <Link className="flex min-h-[40px] items-center justify-between gap-2.5 rounded-[6px] border-b border-[#efeae5] px-3 py-[7px] text-[13px] last:border-b-0 hover:bg-[#fbeee0] hover:text-[#8a5429]" href="/services" key={service}>
                      {service}<span className="text-[18px] text-[#6b5b4f]">›</span>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-14 max-[560px]:mt-10" data-motion-effect="fade-up">
              <span className={leftEyebrow}>{detail.related.eyebrow}</span>
              <h2 className={blockTitle}>{detail.related.title} {detail.related.highlight}</h2>
              <p className="text-[14px] text-body">{detail.related.description}</p>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-[22px] max-[800px]:grid-cols-2 max-[560px]:gap-4">
              {detail.furnitureTypes.map(([name, text, image]) => (
                <div data-motion-effect="zoom-in" key={name}>
                  <div className="relative h-[150px] overflow-hidden rounded-[10px] max-[560px]:h-[120px]"><Image alt={name} className="object-cover" fill sizes="(max-width: 800px) 50vw, 22vw" src={image} /></div>
                  <strong className="mt-3 block text-[15px]">{name}</strong>
                  <p className="mt-1 text-[13px] leading-[1.5] text-body">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 max-[560px]:mt-10" data-motion-effect="fade-up">
              <span className={leftEyebrow}>{detail.process.eyebrow}</span>
              <h2 className={blockTitle}>{detail.process.title}</h2>
              <p className="text-[14px] text-body">{detail.process.description}</p>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-6 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1">
              {detail.process.steps.map(([icon, title, text], index) => (
                <div className="flex items-center gap-3" data-motion-effect="zoom-in" key={title}>
                  <strong className="text-[24px] font-extrabold text-accent">{String(index + 1).padStart(2, "0")}</strong>
                  <span className="grid size-[60px] flex-none place-items-center rounded-full bg-[#f9ece0] text-bronze [&_svg]:size-7"><Icon name={icon as IconName} /></span>
                  <span><strong className="block text-[14px]">{title}</strong><small className="block text-[12px] leading-[1.5] text-body">{text}</small></span>
                  {index < 3 && <span aria-hidden="true" className="ml-auto text-[18px] text-accent max-[800px]:hidden">→</span>}
                </div>
              ))}
            </div>

            <h2 className={`${blockTitle} mt-16 max-[560px]:mt-10`} data-motion-effect="fade-up">{detail.experience.title} <em className="not-italic text-bronze">{detail.experience.highlight}</em></h2>
            <div className="mt-5 grid grid-cols-[1.05fr_0.95fr] items-center gap-8 max-[800px]:grid-cols-1">
              <div className="relative h-[290px] overflow-hidden rounded-[10px] max-[560px]:h-[220px]" data-motion-effect="zoom-out"><Image alt={detail.experience.imageAlt} className="object-cover" fill sizes="(max-width: 800px) 100vw, 50vw" src="/images/service-carpentry.webp" /></div>
              <ul className="grid gap-3.5" data-motion-effect="fade-left">
                {detail.experience.points.map(([title, text]) => (
                  <li className="flex items-start gap-3" key={title}>
                    <span className="mt-0.5 grid size-8 flex-none place-items-center rounded-full bg-accent text-white [&_svg]:size-4"><Icon name="check" /></span>
                    <span><strong className="block text-[15px]">{title}</strong><small className="block text-[13px] text-body">{text}</small></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
    </>
  );
}
