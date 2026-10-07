import { aboutBenefits, aboutContent } from "@/data";
import { AboutPhoto, HighlightedTitle } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";
import { aboutGrid, aboutText, aboutTitle, eyebrow, sectionSpace } from "@/components/common/styles";

export function AboutOverview() {
  const { overview } = aboutContent;

  return (
    <section className={`bg-white ${sectionSpace} !pt-10 max-[560px]:!pt-7`}>
      <div className={aboutGrid}>
        <div data-motion-effect="fade-up">
          <span className={`${eyebrow} text-[12px] tracking-[2px] text-[#98642f] max-[560px]:text-[9px] max-[560px]:tracking-[1.6px]`}>{overview.eyebrow}</span>
          <h2 className={aboutTitle}><HighlightedTitle first={overview.title} highlight={overview.highlight} breakBeforeHighlight /></h2>
          <p className={aboutText}>{overview.intro}</p>
          <span className="my-[21px] block h-0.5 w-[60px] bg-gold" />
          <p className={aboutText}>{overview.description}</p>
          <div className="mt-[27px] grid grid-cols-2 gap-x-[19px] gap-y-[17px] max-[800px]:gap-x-[25px] max-[800px]:gap-y-[15px] max-[560px]:grid-cols-1 max-[560px]:gap-[14px]">
            {aboutBenefits.map((benefit, index) => (
              <div className="group flex min-h-[82px] items-center gap-3 rounded-[5px] border border-[#eee8e1] bg-white p-[11px] transition duration-[220ms] hover:-translate-y-[3px] hover:border-[#c99662] hover:shadow-[0_9px_22px_rgb(43_32_23/8%)]" data-motion-hover-flip={index % 2 ? "right" : "left"} data-motion-effect="zoom-in" key={benefit.title}>
                <span className="grid size-[55px] flex-none place-items-center rounded-lg bg-[#f8f2eb] text-[#a36b36] [transition:background-color_240ms,color_240ms,transform_420ms] group-hover:rotate-y-180 group-hover:bg-accent group-hover:text-white max-[560px]:size-[46px] [&_svg]:size-[27px]"><Icon name={benefit.icon as IconName} /></span>
                <span><strong className="mb-[5px] block text-[13px] transition-colors duration-180 group-hover:text-bronze">{benefit.title}</strong><small className="block text-[11px] leading-[1.45] text-[#77716c]">{benefit.text}</small></span>
              </div>
            ))}
          </div>
        </div>
        <AboutPhoto alt={overview.imageAlt} />
      </div>
    </section>
  );
}
