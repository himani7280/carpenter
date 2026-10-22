import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data";
import { HighlightedTitle } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";
import { button, buttonGold, eyebrow, sectionSpace } from "@/components/common/styles";

export function WhyChoose() {
  const { eyebrow: label, title, highlight, description, items } = aboutContent.whyChoose;

  return (
    <section className={`overflow-hidden ${sectionSpace}`}>
      <div className="site-container grid grid-cols-2 items-center gap-[clamp(32px,5vw,60px)] max-[800px]:grid-cols-1 max-[800px]:gap-8">
        <div data-motion-effect="fade-up">
          <span className={`${eyebrow} text-[11px] tracking-[2px] text-[#98642f] before:h-px before:w-7 before:bg-[#ae773d] after:h-px after:w-7 after:bg-[#ae773d]`}>{label}</span>
          <h2 className="font-heading mt-2.5 mb-3 text-[clamp(28px,2.8vw,38px)] leading-[1.15] font-bold tracking-[-0.8px] text-ink"><HighlightedTitle first={title} highlight={highlight} breakBeforeHighlight /></h2>
          <p className="mb-5 text-[14.5px] leading-[1.65] text-body">{description}</p>
          <div>
            {items.map(([icon, itemTitle, text]) => (
              <div className="group flex items-start gap-3.5 rounded-[5px] border border-[#eee8e1] bg-white p-3.5 mb-3 last:mb-0 transition duration-[220ms] hover:-translate-y-[3px] hover:border-[#c99662] hover:shadow-[0_8px_20px_rgb(43_32_23/7%)]" key={itemTitle}>
                <span className="grid size-13.5 flex-none place-items-center rounded-full bg-[#f9ece0] text-bronze [transition:background-color_240ms,color_240ms,transform_420ms] group-hover:rotate-y-180 group-hover:bg-accent group-hover:text-white max-[560px]:size-11 [&_svg]:size-6.5"><Icon name={icon as IconName} /></span>
                <span><strong className="font-heading mb-1 block text-[16px] text-ink transition-colors duration-180 group-hover:text-bronze max-[560px]:text-[15px]">{itemTitle}</strong><small className="block text-[12.5px] leading-[1.55] text-body">{text}</small></span>
              </div>
            ))}
          </div>
          <Link className={`${button} ${buttonGold} mt-5 min-h-12 uppercase`} href="/contact">Contact Us <Icon name="arrow" /></Link>
        </div>
        <div className="relative max-[800px]:order-first max-[800px]:px-2" data-motion-effect="zoom-out">
          <span aria-hidden="true" className="absolute -top-2 -left-3 h-[62%] w-8 rounded-[10px] bg-accent [clip-path:polygon(0_8%,100%_0,100%_100%,0_92%)]" />
          <span aria-hidden="true" className="absolute right-0 bottom-[22%] h-[44%] w-7 translate-x-3 rounded-[10px] bg-accent [clip-path:polygon(0_0,100%_10%,100%_90%,0_100%)] max-[800px]:translate-x-2" />
          <div className="relative grid grid-cols-[1.75fr_1fr] gap-3">
            <div className="relative h-[360px] overflow-hidden rounded-xl max-[560px]:h-[270px]"><Image alt="Smiling WoodHaus carpenter in a workshop" className="object-cover" fill sizes="(max-width: 800px) 60vw, 30vw" src="/images/why-main-hd.webp" /></div>
            <div className="grid grid-rows-[0.82fr_1fr] gap-3">
              <div className="relative overflow-hidden rounded-xl"><Image alt="Carpenter planing a timber board" className="object-cover" fill sizes="(max-width: 800px) 35vw, 18vw" src="/images/why-top-hd.webp" /></div>
              <div className="relative overflow-hidden rounded-xl"><Image alt="Carpenter marking a timber board with a pencil" className="object-cover" fill sizes="(max-width: 800px) 35vw, 18vw" src="/images/why-bottom-hd.webp" /></div>
            </div>
          </div>
          <div className="relative mt-3 flex items-center gap-5 rounded-xl bg-[linear-gradient(110deg,#9a5b28,#c48748)] px-6 py-4 text-white max-[560px]:gap-3 max-[560px]:px-4">
            <Icon className="size-11 flex-none max-[560px]:size-9" name="award" />
            <span className="h-11 w-px bg-white/40" />
            <span><strong className="font-heading block text-[40px] leading-none font-extrabold max-[560px]:text-[30px]">10+</strong><small className="mt-1.5 block text-[11px] font-semibold tracking-[1.3px] uppercase">Years of Experience</small><span className="mt-1.5 block h-0.5 w-10 bg-white/70" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
