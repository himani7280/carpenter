import Image from "next/image";
import { siteCopy, siteMetadata } from "@/data";
import { ContactInfo } from "@/components/contact/contact-info";
import { PageBanner } from "@/components/common/page-elements";
import { Icon } from "@/components/common/icon";
import { buttonGold, eyebrow, sectionSpace } from "@/components/common/styles";

const field = "min-h-[43px] w-full rounded-[4px] border border-[#e7e3df] bg-white px-3 py-[11px] text-[12px] text-ink outline-0 focus:border-[#b88350] focus:shadow-[0_0_0_3px_rgb(184_121_62/12%)]";

export function ContactPage() {
  const content = siteCopy.contact;

  return (
    <>
        <PageBanner page="contact" />
        <section className={`bg-white ${sectionSpace}`}>
          <div className="site-container">
            <div className="grid grid-cols-[0.88fr_1.16fr_1fr] items-stretch gap-[17px] max-[1100px]:grid-cols-[1fr_1.25fr] max-[560px]:grid-cols-1 max-[560px]:gap-3">
              <div className="grid content-start gap-[9px]">
                <ContactInfo icon="pin" title={content.locationTitle}>{siteMetadata.address}</ContactInfo>
                <ContactInfo icon="phone" title={content.callTitle}><a href={`tel:${siteMetadata.phoneLink}`}>{siteMetadata.phone}</a></ContactInfo>
                <ContactInfo icon="mail" title={content.emailTitle}><a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a></ContactInfo>
              </div>
              <form action={`mailto:${siteMetadata.email}`} className="rounded-md border border-[#e9e5df] px-5 py-[19px] max-[560px]:px-3.5 max-[560px]:py-[17px]" data-motion-effect="fade-up" encType="text/plain" method="post">
                <span className={`${eyebrow} text-[10px] tracking-[1px] text-[#98642f]`}>{content.formEyebrow}</span>
                <h2 className="mt-2 mb-[5px] text-[25px] tracking-[-0.5px] max-[560px]:text-[22px]">{content.formTitle}</h2>
                <p className="mb-[15px] text-[12px] text-[#544f4b]">{content.formDescription}</p>
                <div className="grid grid-cols-2 gap-2.5">
                  <label className="relative block"><span className="sr-only">{content.nameLabel}</span><Icon className="pointer-events-none absolute top-[13px] left-3 size-4 text-[#9b642e]" name="user" /><input autoComplete="name" className={`${field} pl-9`} name="Name" placeholder={content.namePlaceholder} required /></label>
                  <label className="relative block"><span className="sr-only">{content.emailLabel}</span><Icon className="pointer-events-none absolute top-[13px] left-3 size-4 text-[#9b642e]" name="mail" /><input autoComplete="email" className={`${field} pl-9`} name="Email" placeholder={content.emailPlaceholder} required type="email" /></label>
                  <label className="relative block"><span className="sr-only">{content.phoneLabel}</span><Icon className="pointer-events-none absolute top-[13px] left-3 size-4 text-[#9b642e]" name="phone" /><input autoComplete="tel" className={`${field} pl-9`} name="Phone" placeholder={content.phonePlaceholder} required type="tel" /></label>
                  <label className="relative block"><span className="sr-only">{content.subjectLabel}</span><Icon className="pointer-events-none absolute top-[13px] left-3 size-4 text-[#9b642e]" name="file" /><input className={`${field} pl-9`} name="Subject" placeholder={content.subjectPlaceholder} required /></label>
                  <label className="col-span-full relative block"><span className="sr-only">{content.messageLabel}</span><Icon className="pointer-events-none absolute top-[13px] left-3 size-4 text-[#9b642e]" name="chat" /><textarea className={`${field} min-h-28 resize-y pl-9`} name="Message" placeholder={content.messagePlaceholder} required rows={4} /></label>
                </div>
                <button className={`${buttonGold} mt-[11px] inline-flex min-h-[45px] flex-none cursor-pointer items-center justify-center gap-5.5 rounded-sm border border-transparent px-[18px] text-[11px] font-bold uppercase transition-colors duration-180 [&_svg]:size-4.5`} type="submit">{content.submitLabel} <Icon name="arrow" /></button>
              </form>
              <div className="relative min-h-[365px] overflow-hidden rounded-[7px] max-[1100px]:col-[1/-1] max-[1100px]:min-h-[300px] max-[560px]:col-auto max-[560px]:min-h-[260px]" data-motion-effect="zoom-out">
                <Image alt="The WoodHaus carpentry and woodworking studio" className="object-cover" fill sizes="(max-width: 800px) 100vw, 30vw" src="/images/workshop-store.webp" />
              </div>
            </div>
            <div className="mt-[17px] grid grid-cols-[1.2fr_1fr] gap-[17px] max-[560px]:grid-cols-1 max-[560px]:gap-3">
              <div className="relative min-h-[215px] overflow-hidden rounded-[7px] max-[560px]:min-h-[185px]" data-motion-effect="zoom-out">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteMetadata.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="grid grid-cols-2 content-center gap-2.5 rounded-[7px] bg-[#f8f3ed] p-[18px] max-[560px]:gap-0.5 max-[560px]:p-2.5">
                {content.benefits.map(([icon, title, text]) => (
                  <div className="flex items-start gap-[11px] p-2.5 max-[560px]:gap-[7px] max-[560px]:px-1 max-[560px]:py-2" data-motion-effect="zoom-in" key={title}>
                    <Icon className="size-8 flex-none rounded-full bg-[#f0e3d4] p-1.5 text-[#9b642e] max-[560px]:size-[27px]" name={icon as Parameters<typeof Icon>[0]["name"]} />
                    <span><strong className="mb-[5px] block text-[12px] max-[560px]:text-[10px]">{title}</strong><small className="block text-[10px] leading-[1.45] text-[#524c47] max-[560px]:text-[9px]">{text}</small></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
