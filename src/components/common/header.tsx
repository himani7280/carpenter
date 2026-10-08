"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteCopy, siteMetadata, siteNavigation } from "@/data";
import { Brand } from "@/components/common/brand";
import { Icon, SocialIcon } from "@/components/common/icon";

const navLink = "relative inline-flex h-full items-center whitespace-nowrap text-[15px] font-semibold after:absolute after:inset-x-0 after:bottom-[27px] after:h-0.5 after:scale-x-0 after:bg-gold after:transition-transform after:duration-180 hover:after:scale-x-100 max-[1100px]:text-[13px]";
const navLinkState = (active: boolean) => (active ? "text-brown after:scale-x-100" : "text-[#242229]");
const dropdownLink = "rounded-[3px] px-3 py-[11px] text-[13px] text-ink hover:bg-cream hover:text-gold";
const topbarLink = "flex items-center gap-[9px] [&_svg]:size-3.5";
const drawerLink = "flex items-center justify-between gap-4 border-b border-white/11 font-semibold transition-[color,padding] duration-180 hover:pl-[5px] hover:text-[#d59a58]";
const drawerSubLink = `min-h-[42px] border-white/8 text-[13px] text-[#e7d6c6] ${drawerLink}`;
const drawerContactLink = "flex items-center gap-[11px] text-[12px] text-[#e7d6c6] [&_svg]:size-[17px] [&_svg]:text-[#d59a58]";

const { header } = siteCopy;

// Nav items that open a dropdown: the listing page plus its details page.
const dropdownMenus: Record<string, { label: string; detailPage: string; links: { href: string; page: string; label: string }[] }> = {
};


export function SiteHeader() {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "home" : pathname.split("/")[1];
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30" id="site-header">
      <div className="relative h-[38px] bg-brown-dark text-[12px] text-white max-[800px]:hidden overflow-hidden">
        <div className="site-container flex h-full items-center justify-between">
          <span className={topbarLink}><Icon name="pin" /> {siteCopy.brand.tagline}</span>
          <div className="flex h-full items-center">
            <a className={topbarLink} href={`tel:${siteMetadata.phoneLink}`}><Icon name="phone" />{siteMetadata.phone}</a>
            <span className="mx-4 text-white/30">|</span>
            <a className={topbarLink} href={`mailto:${siteMetadata.email}`}><Icon name="mail" />{siteMetadata.email}</a>
            <span aria-label="Social media" className="ml-[35px] flex h-full items-center gap-5 bg-[linear-gradient(110deg,#c48748,#9e5928)] pl-[35px] pr-[100vw] -mr-[100vw] text-white [clip-path:polygon(15px_0,100%_0,100%_100%,0_100%)]">
              <a aria-label="Facebook" className="transition-colors hover:text-white/80" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><SocialIcon className="size-4" name="facebook" /></a>
              <a aria-label="Instagram" className="transition-colors hover:text-white/80" href="https://www.instagram.com/" rel="noreferrer" target="_blank"><SocialIcon className="size-4" name="instagram" /></a>
              <a aria-label="YouTube" className="transition-colors hover:text-white/80" href="https://www.youtube.com/" rel="noreferrer" target="_blank"><SocialIcon className="size-4" name="youtube" /></a>
            </span>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-white shadow-[0_2px_12px_rgb(36_27_20/5%)]">
        <div className="site-container flex h-[85px] items-center justify-start gap-[30px] max-[1100px]:gap-[18px] max-[800px]:h-[70px] max-[800px]:gap-3 max-[560px]:h-[60px]">
          <Brand imageClassName="h-auto w-[250px] max-[800px]:w-[200px] max-[560px]:w-[180px]" />
          <nav className="ml-0.5 flex h-full translate-y-1.5 items-center gap-[clamp(17px,2.75vw,34px)] max-[1100px]:gap-3.5 max-[800px]:hidden" aria-label={siteCopy.header.navigationLabel}>
            {siteNavigation.map((item) => {
              const menu = dropdownMenus[item.page];
              const isActive = currentPage === item.page || (!!menu && currentPage === menu.detailPage);

              return menu ? (
                <div className="group/dropdown relative h-full" key={item.href}>
                  <Link aria-current={isActive ? "page" : undefined} className={`${navLink} gap-[5px] ${navLinkState(isActive)}`} href={item.href}>
                    {menu.label} <span aria-hidden="true">⌄</span>
                  </Link>
                  <div className="pointer-events-none absolute top-[78%] -left-3.5 grid min-w-[190px] translate-y-[7px] rounded-[4px] border border-line bg-white p-2 opacity-0 shadow-[0_12px_30px_rgb(44_31_21/12%)] transition-all duration-180 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-0 group-focus-within/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100">
                    {menu.links.map((link) => <Link className={dropdownLink} href={link.href} key={link.href}>{link.label}</Link>)}
                  </div>
                </div>
              ) : (
                <Link aria-current={currentPage === item.page ? "page" : undefined} className={`${navLink} ${navLinkState(currentPage === item.page)}`} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link className="ml-auto inline-flex min-h-[54px] translate-y-2 flex-none items-center justify-center gap-5.5 rounded-sm border border-transparent bg-[linear-gradient(110deg,#9e5928,#c48748)] px-5.25 text-[14px] font-bold text-white transition-colors duration-180 hover:bg-none hover:bg-[#75421f] max-[1100px]:gap-3 max-[1100px]:px-3.5 max-[1100px]:text-[12px] max-[800px]:hidden [&_svg]:size-4.5" href="/contact">{siteCopy.header.enquireLabel} <Icon name="arrow" /></Link>
          <button
            aria-controls="mobile-site-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : siteCopy.header.openMenuLabel}
            className="ml-auto hidden h-[43px] w-[43px] flex-none cursor-pointer place-items-center rounded-[4px] border border-line bg-white text-brown max-[800px]:grid max-[560px]:h-[39px] max-[560px]:w-[38px]"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon className="h-5 w-5" name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <button
        aria-hidden={!menuOpen}
        aria-label="Close navigation menu"
        className={`fixed inset-0 z-49 hidden cursor-pointer border-0 bg-[rgb(20_14_10/58%)] backdrop-blur-[3px] transition-[opacity,visibility] duration-300 max-[800px]:block ${menuOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
        onClick={closeMenu}
        disabled={!menuOpen}
        type="button"
      />
      <aside
        aria-hidden={!menuOpen}
        aria-modal={menuOpen}
        className={`fixed inset-y-0 left-0 z-50 hidden h-dvh w-[min(350px,calc(100vw-40px))] flex-col overflow-y-auto bg-[#382719] px-4 pt-4.5 pb-6 text-white shadow-[20px_0_50px_rgb(20_14_10/25%)] transition-[transform,visibility] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-[800px]:flex ${menuOpen ? "visible translate-x-0" : "invisible -translate-x-[102%]"}`}
        id="mobile-site-menu"
        inert={!menuOpen}
        role="dialog"
      >
        <div className="flex min-h-[70px] items-center justify-between gap-4 border-b border-white/13 pb-[17px]">
          <Brand imageClassName="h-auto w-[250px] max-[800px]:w-[200px] max-[560px]:w-[180px]" />
          <button aria-label="Close navigation menu" className="grid h-[42px] w-[42px] flex-none cursor-pointer place-items-center border-0 bg-transparent text-white [&_svg]:size-[22px]" onClick={closeMenu} type="button"><Icon name="close" /></button>
        </div>
        <nav aria-label={siteCopy.header.mobileNavigationLabel} className="grid pt-2">
          {siteNavigation.map((item) => dropdownMenus[item.page] ? (
            <div key={item.href}>
              <button aria-expanded={openGroup === item.page} className={`flex min-h-14 w-full cursor-pointer items-center justify-between border-0 border-b border-white/11 bg-transparent text-left text-[16px] font-semibold ${openGroup === item.page || currentPage === item.page || currentPage === dropdownMenus[item.page].detailPage ? "text-[#d59a58]" : "text-white"}`} onClick={() => setOpenGroup((open) => (open === item.page ? null : item.page))} type="button">
                {dropdownMenus[item.page].label}<span aria-hidden="true" className={`text-[#d59a58] transition-transform duration-220 ${openGroup === item.page ? "rotate-180" : ""}`}>⌄</span>
              </button>
              <div className={`grid overflow-hidden pl-3 transition-[max-height,opacity] duration-300 ${openGroup === item.page ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"}`}>
                {dropdownMenus[item.page].links.map((link) => <Link aria-current={currentPage === link.page ? "page" : undefined} className={drawerSubLink} href={link.href} key={link.href} onClick={closeMenu}>{link.label}</Link>)}
              </div>
            </div>
          ) : (
            <Link aria-current={currentPage === item.page ? "page" : undefined} className={`min-h-14 text-[16px] ${drawerLink} ${currentPage === item.page ? "pl-[5px] text-[#d59a58]" : "text-white"}`} href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}<span aria-hidden="true" className="text-[24px] font-normal text-[#d59a58]">›</span>
            </Link>
          ))}
        </nav>
        <Link className="mt-[18px] inline-flex min-h-[50px] w-full flex-none items-center justify-between gap-5.5 rounded-sm border border-transparent bg-[linear-gradient(110deg,#9e5928,#c48748)] px-5.25 text-[14px] font-bold text-white transition-colors duration-180 hover:bg-none hover:bg-[#75421f] [&_svg]:size-4.5" href="/contact" onClick={closeMenu}>
          {siteCopy.header.enquireLabel} <Icon name="arrow" />
        </Link>
        <div className="mt-auto grid gap-[15px] pt-6">
          <a className={drawerContactLink} href={`tel:${siteMetadata.phoneLink}`}><Icon name="phone" />{siteMetadata.phone}</a>
          <a className={drawerContactLink} href={`mailto:${siteMetadata.email}`}><Icon name="mail" />{siteMetadata.email}</a>
        </div>
      </aside>
    </header>
  );
}