import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data";
import { HighlightedTitle } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";
import { button, buttonGold, eyebrow, sectionSpace } from "@/components/common/styles";

export function WhyChoose() {
  const { eyebrow: label, title, highlight, description, items } = aboutContent.whyChoose;

  return (
    <section className={`overflow-hidden bg-white ${sectionSpace}`}>
      <div className="site-container grid grid-cols-2 items-center gap-[clamp(40px,6vw,80px)] max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <div data-motion-effect="fade-up">
          <span className={`${eyebrow} text-[12px] tracking-[2px] text-[#98642f] before:h-px before:w-[33px] before:bg-[#ae773d] after:h-px after:w-[33px] after:bg-[#ae773d]`}>{label}</span>
          <h2 className="mt-3 mb-3 text-[clamp(30px,3.2vw,44px)] leading-[1.12] font-[750] tracking-[-1.25px] text-ink max-[560px]:text-[30px]"><HighlightedTitle first={title} highlight={highlight} breakBeforeHighlight /></h2>
          <p className="mb-6 text-[14px] leading-[1.7] text-body">{description}</p>
          <div>
            {items.map(([icon, itemTitle, text]) => (
              <div className="group flex items-start gap-4 rounded-[5px] border border-[#eee8e1] bg-white p-[15px] mb-4 last:mb-0 transition duration-[220ms] hover:-translate-y-[3px] hover:border-[#c99662] hover:shadow-[0_9px_22px_rgb(43_32_23/8%)]" key={itemTitle}>
                <span className="grid size-[66px] flex-none place-items-center rounded-full bg-[#f9ece0] text-bronze [transition:background-color_240ms,color_240ms,transform_420ms] group-hover:rotate-y-180 group-hover:bg-accent group-hover:text-white max-[560px]:size-14 [&_svg]:size-[30px]"><Icon name={icon as IconName} /></span>
                <span><strong className="mb-1 block text-[18px] text-ink transition-colors duration-180 group-hover:text-bronze max-[560px]:text-[16px]">{itemTitle}</strong><small className="block text-[13px] leading-[1.6] text-body">{text}</small></span>
              </div>
            ))}
          </div>
          <Link className={`${button} ${buttonGold} mt-6 min-h-11.5 uppercase`} href="/contact">Contact Us <Icon name="arrow" /></Link>
        </div>
        <div className="relative max-[800px]:order-first max-[800px]:px-3" data-motion-effect="zoom-out">
          <span aria-hidden="true" className="absolute -top-2 -left-3.5 h-[62%] w-9 rounded-[10px] bg-accent [clip-path:polygon(0_8%,100%_0,100%_100%,0_92%)]" />
          <span aria-hidden="true" className="absolute right-0 bottom-[22%] h-[44%] w-8 translate-x-3.5 rounded-[10px] bg-accent [clip-path:polygon(0_0,100%_10%,100%_90%,0_100%)] max-[800px]:translate-x-2" />
          <div className="relative grid grid-cols-[1.75fr_1fr] gap-3.5">
            <div className="relative h-[385px] overflow-hidden rounded-xl max-[560px]:h-[300px]"><Image alt="Smiling WoodHaus carpenter in a workshop" className="object-cover" fill sizes="(max-width: 800px) 60vw, 30vw" src="/images/why-main.jpg" /></div>
            <div className="grid grid-rows-[0.82fr_1fr] gap-3.5">
              <div className="relative overflow-hidden rounded-xl"><Image alt="Carpenter planing a timber board" className="object-cover" fill sizes="(max-width: 800px) 35vw, 18vw" src="/images/why-top.jpg" /></div>
              <div className="relative overflow-hidden rounded-xl"><Image alt="Carpenter marking a timber board with a pencil" className="object-cover" fill sizes="(max-width: 800px) 35vw, 18vw" src="/images/why-bottom.jpg" /></div>
            </div>
          </div>
          <div className="relative mt-3.5 flex items-center gap-6 rounded-xl bg-[linear-gradient(110deg,#9a5b28,#c48748)] px-8 py-5 text-white max-[560px]:gap-4 max-[560px]:px-5">
            <Icon className="size-[52px] flex-none max-[560px]:size-11" name="award" />
            <span className="h-14 w-px bg-white/40" />
            <span><strong className="block text-[44px] leading-none font-extrabold max-[560px]:text-[36px]">10+</strong><small className="mt-2 block text-[12px] font-semibold tracking-[1.5px] uppercase">Years of Experience</small><span className="mt-2 block h-0.5 w-12 bg-white/70" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
