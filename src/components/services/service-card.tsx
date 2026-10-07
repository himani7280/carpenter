import Image from "next/image";
import Link from "next/link";
import { carpenterServices } from "@/data";
import { Icon } from "@/components/common/icon";
import { roundArrow } from "@/components/common/styles";

export function ServiceCard({ service }: { service: (typeof carpenterServices)[number] }) {
  return (
    <article className="group overflow-hidden rounded-[10px] border border-[#ece8e2] bg-white shadow-[0_8px_24px_rgb(43_32_23/7%)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgb(43_32_23/12%)]" data-motion-hover-flip={Number(service.number) % 2 ? "left" : "right"} data-motion-effect="zoom-in">
      <div className="flex">
        <Link aria-label={`Read about ${service.title}`} className="relative block h-[180px] flex-1 overflow-hidden max-[560px]:h-[170px]" href={service.href}>
          <Image alt={service.imageAlt} className="object-cover transition-transform duration-300 group-hover:scale-[1.045]" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" src={service.image} />
        </Link>
        <Link aria-hidden="true" className="flex w-10 flex-none flex-col items-center justify-center gap-3 text-[10px] font-extrabold tracking-[1.5px] text-ink uppercase" href={service.href} tabIndex={-1}>
          <i className="h-7 w-px bg-[#d9d2ca]" />
          <span className="[writing-mode:vertical-rl]">Read More</span>
          <i className="h-7 w-px bg-accent" />
        </Link>
      </div>
      <div className="pb-5">
        <div className="flex min-h-[64px] items-center gap-4 pr-4">
          <span className="relative z-1 -mt-9 grid h-[78px] w-[88px] flex-none place-content-center justify-items-center bg-[linear-gradient(135deg,#6f4120,#b47a3f)] pr-4 text-white [clip-path:polygon(0_0,80%_0,100%_72%,0_100%)]">
            <strong className="text-[26px] leading-none font-extrabold">{service.number}</strong>
            <i className="mt-1.5 h-px w-5 bg-white/70" />
          </span>
          <h3 className="flex-1 text-[20px] leading-[1.15] font-bold group-hover:text-bronze max-[560px]:text-[18px]" data-motion-flip={Number(service.number) % 2 ? "left" : "right"}><Link href={service.href}>{service.title}</Link></h3>
          <Link aria-label={`Read about ${service.title}`} className={`${roundArrow} size-[39px] group-hover:bg-brown-dark group-hover:[&_svg]:-rotate-45 max-[560px]:size-[34px] [&_svg]:size-[19px]`} href={service.href}><Icon name="arrow" /></Link>
        </div>
        <p className="mt-1 pr-6 pl-[51px] text-[13px] leading-[1.6] text-[#77716c]">{service.description}</p>
      </div>
    </article>
  );
}
