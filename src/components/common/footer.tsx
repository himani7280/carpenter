import Link from "next/link";
import { carpenterServices, serviceTypes, siteCopy, siteMetadata } from "@/data";
import { Brand } from "@/components/common/brand";
import { Icon, SocialIcon } from "@/components/common/icon";

const columnTitle = "relative mb-6 pb-3 text-[16px] font-semibold tracking-[1.5px] text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-[#c7863d] max-[560px]:text-[14px]";
const column = "grid content-start gap-3.5 max-[560px]:gap-[9px]";
const columnLink = "relative pl-6 text-[14px] text-[#f1ece7] transition duration-180 before:absolute before:left-0 before:text-[22px] before:leading-[18px] before:font-bold before:text-[#f0a04b] before:content-['›'] hover:translate-x-[3px] hover:text-[#f0a04b] max-[560px]:pl-4 max-[560px]:text-[12px]";
const socialLink = "grid size-[42px] place-items-center rounded-full border border-[#b7793d] text-white transition duration-180 hover:-translate-y-[3px] hover:bg-accent hover:border-accent [&_svg]:size-[18px]";
const contactItem = "grid grid-cols-[44px_minmax(0,1fr)] items-center gap-3.5";
const contactIcon = "grid size-11 place-items-center rounded-full bg-[#8c5a1f] text-white transition duration-200 hover:bg-accent [&_svg]:size-[19px]";
const contactTitle = "mb-0.5 block text-[14px] font-semibold text-[#e5a76a]";
const contactText = "block text-[14px] leading-normal [overflow-wrap:break-word] text-white max-[560px]:text-[12px]";
const legalLink = "text-[14px] whitespace-nowrap text-white max-[560px]:text-[11px]";
const legalDivided = `${legalLink} border-l border-white/50 pl-5 max-[767px]:border-0 max-[767px]:pl-0`;

export function SiteFooter() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0d0c0b] text-white">
      <div className="bg-[#130e0a] bg-[image:linear-gradient(#130e0a,rgb(19_14_10/0)_42%),url('/images/footer-top.jpg'),url('/images/footer-bottom.jpg')] bg-[length:100%_7.86vw,100%_auto,100%_auto] bg-position-[center_bottom,center_top,center_bottom] bg-no-repeat pt-[clamp(80px,8vw,115px)] pb-[clamp(90px,8.5vw,125px)] max-[560px]:pt-[70px] max-[560px]:pb-[80px]">

        {/* Responsive Grid Layout */}
        <div className="site-container grid grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-[767px]:grid-cols-1 max-[560px]:gap-y-8">

          {/* Column 1: Brand & Socials */}
          <div className="pr-4 max-[560px]:pr-0">
            <Brand imageClassName="h-auto w-[250px] max-[767px]:w-[200px] max-[560px]:w-[180px]" />
            <p className="mt-5 mb-6 text-[15px] leading-[1.55] text-[#f3eee9] max-[560px]:text-[13px]">{siteCopy.footer.description}</p>
            <div aria-label="Social media" className="flex gap-3.5">
              <a aria-label="Facebook" className={socialLink} href="https://www.facebook.com/" rel="noreferrer" target="_blank"><SocialIcon name="facebook" /></a>
              <a aria-label="Instagram" className={socialLink} href="https://www.instagram.com/" rel="noreferrer" target="_blank"><SocialIcon name="instagram" /></a>
              <a aria-label="LinkedIn" className={socialLink} href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><SocialIcon name="linkedin" /></a>
              <a aria-label="YouTube" className={socialLink} href="https://www.youtube.com/" rel="noreferrer" target="_blank"><SocialIcon name="youtube" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`${column} border-l border-white/17 pl-[30px] max-[767px]:border-0 max-[767px]:pl-0`}>
            <h2 className={columnTitle}>{siteCopy.footer.quickLinksTitle}</h2>
            {quickLinks.map((item) => (
              <Link className={columnLink} href={item.href} key={item.label} scroll={true}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Our Services */}
          <div className={`${column} border-l border-white/17 pl-[30px] max-[1100px]:border-0 max-[1100px]:pl-0`}>
            <h2 className={columnTitle}>{siteCopy.footer.servicesTitle}</h2>
            {carpenterServices.map((service) => (
              <Link className={columnLink} href={service.href} key={service.slug} scroll={true}>
                {service.title}
              </Link>
            ))}
          </div>

          {/* Column 4: Get In Touch */}
          <div className={`${column} gap-5 border-l border-white/17 pl-[30px] max-[767px]:border-0 max-[767px]:pl-0`}>
            <h2 className={`${columnTitle} mb-1`}>{siteCopy.footer.contactTitle}</h2>
            <div className={contactItem}>
              <span className={contactIcon}><Icon name="pin" /></span>
              <span><strong className={contactTitle}>Our Location</strong><small className={contactText}>{siteMetadata.address}</small></span>
            </div>
            <div className={contactItem}>
              <span className={contactIcon}><Icon name="phone" /></span>
              <span><strong className={contactTitle}>Call Us</strong><a className={contactText} href={`tel:${siteMetadata.phoneLink}`}>{siteMetadata.phone}</a></span>
            </div>
            <div className={contactItem}>
              <span className={contactIcon}><Icon name="mail" /></span>
              <span><strong className={contactTitle}>Email Us</strong><a className={contactText} href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a></span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="border-t border-[#b7793d]/70 bg-[#0d0c0b]">
        <div className="site-container flex min-h-[78px] flex-wrap items-center justify-between gap-y-4 py-4 max-[767px]:flex-col max-[767px]:justify-center">
          <span className="text-[14px] text-center max-[560px]:text-[12px]">{siteCopy.footer.copyright}</span>
          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-5 pr-[60px] max-[767px]:pr-0 max-[767px]:pb-6 max-[560px]:gap-[11px] max-[425px]:flex-col">
            <div className="flex items-center gap-5 max-[560px]:gap-[11px]">
              <Link className={legalLink} href="/privacy-policy">Privacy Policy</Link>
              <Link className={legalDivided} href="/terms">Terms &amp; Conditions</Link>
            </div>
            <div className="flex items-center gap-5 max-[560px]:gap-[11px]">
              <Link className={legalDivided} href="/sitemap">Sitemap</Link>
              <Link className={legalDivided} href="/thank-you">Thank You</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}