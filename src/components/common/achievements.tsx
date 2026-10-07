import { achievementsContent } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";

const statIcons: IconName[] = ["team", "craft", "award", "trophy"];

export function Achievements() {
  const { eyebrow, title, highlight, description, stats } = achievementsContent;

  return (
    <section className="relative overflow-hidden bg-[#2b1e16] bg-[url('/images/carpenter-hero.webp')] bg-position-[center_42%] bg-cover bg-no-repeat py-[62px] text-white before:absolute before:inset-0 before:bg-[rgb(31_21_15/80%)] max-[560px]:py-[43px]">
      <div className="site-container relative">
        <SectionTitle light eyebrow={eyebrow} title={<HighlightedTitle first={title} highlight={highlight} breakBeforeHighlight />} description={description} />
        <div className="grid grid-cols-4 gap-y-10 max-[800px]:grid-cols-2">
          {stats.map(([value, label], index) => (
            <div className="relative grid justify-items-center px-3 text-center after:absolute after:top-[68px] after:right-0 after:h-[112px] after:w-px after:bg-gold/40 last:after:hidden max-[800px]:[&:nth-child(2)]:after:hidden" data-motion-effect="zoom-in" key={label}>
              <span className="grid size-[74px] place-items-center rounded-full bg-accent text-white outline-1 outline-offset-[5px] outline-accent/45 [&_svg]:size-9">
                <Icon name={statIcons[index % statIcons.length]} />
              </span>
              <strong className="mt-5 text-[48px] leading-none font-extrabold max-[560px]:text-[36px]" data-motion-counter>{value}</strong>
              <span className="mt-4 max-w-[140px] text-[13px] leading-normal font-medium tracking-[2px] uppercase max-[560px]:text-[11px]">{label}</span>
              <span className="mt-5 h-0.5 w-10 bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
