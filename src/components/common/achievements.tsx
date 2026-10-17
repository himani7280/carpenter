import { achievementsContent } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { Icon, type IconName } from "@/components/common/icon";

const statIcons: IconName[] = ["team", "craft", "award", "trophy"];

export function Achievements() {
  const { eyebrow, title, highlight, description, stats } = achievementsContent;

  return (
    <section className="relative overflow-hidden bg-[#2b1e16] bg-[url('/images/carpenter-hero.jpeg')] bg-position-[center_42%] bg-cover bg-no-repeat py-15 max-[800px]:py-12 max-[560px]:py-9 text-white before:absolute before:inset-0 before:bg-[rgb(31_21_15/80%)]">
      <div className="site-container relative">
        <SectionTitle light eyebrow={eyebrow} title={<HighlightedTitle first={title} highlight={highlight} breakBeforeHighlight />} description={description} />
        <div className="grid grid-cols-4 gap-y-8 max-[800px]:grid-cols-2">
          {stats.map(([value, label], index) => (
            <div className="relative grid justify-items-center px-3 text-center after:absolute after:top-14 after:right-0 after:h-24 after:w-px after:bg-gold/40 last:after:hidden max-[800px]:[&:nth-child(2)]:after:hidden" data-motion-effect="zoom-in" key={label}>
              <span className="grid size-15 place-items-center rounded-full bg-accent text-white outline-1 outline-offset-[4px] outline-accent/45 [&_svg]:size-7.5">
                <Icon name={statIcons[index % statIcons.length]} />
              </span>
              <strong className="font-heading mt-4 text-[42px] leading-none font-extrabold max-[560px]:text-[32px]" data-motion-counter>{value}</strong>
              <span className="font-body mt-3 max-w-[135px] text-[12.5px] leading-normal font-medium tracking-[1.8px] uppercase max-[560px]:text-[10.5px]">{label}</span>
              <span className="mt-4 h-0.5 w-8 bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
