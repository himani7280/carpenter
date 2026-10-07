import Image from "next/image";
import Link from "next/link";
import { projectGallery } from "@/data";
import { Icon } from "@/components/common/icon";
import { roundArrow } from "@/components/common/styles";

export function ProjectCard({ project, index, total }: { project: (typeof projectGallery)[number]; index: number; total: number }) {
  // Tablet/desktop rows are 3 + 4 + 4 cards (12-column grid: 4 columns each for the first three, 3 for the rest).
  const rowSpan = index < 3 ? "min-[561px]:col-span-4" : "min-[561px]:col-span-3";
  // On phones the grid becomes a mosaic: every third card (and a lone last one) is a tall full-width feature, the rest sit in pairs.
  const feature = index % 3 === 0 || (index === total - 1 && index % 3 === 1);
  const mosaic = feature ? "max-[560px]:col-span-2 max-[560px]:row-span-3" : "max-[560px]:row-span-2";

  return (
    <Link
      aria-label={`View ${project.title}`}
      className={`group relative block h-full min-w-0 overflow-hidden rounded-[5px] bg-[#ede3d7] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgb(35_23_15/18%)] focus-visible:-translate-y-1 focus-visible:shadow-[0_14px_28px_rgb(35_23_15/18%)] max-[560px]:rounded-lg max-[560px]:shadow-[0_6px_16px_rgb(35_23_15/14%)] max-[560px]:active:scale-[0.98] ${rowSpan} ${mosaic}`}
      data-motion-reveal
      href="/contact"
      key={project.title}
    >
      <div className="absolute inset-0 overflow-hidden transform-3d" data-motion-gallery-flip={index % 2 ? "right" : "left"}>
        <Image alt={`${project.title} custom carpentry project`} className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.07] group-focus-visible:scale-[1.07] group-active:scale-[1.06]" fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw" src={project.image} />
      </div>
      <span className="absolute inset-0 flex flex-col items-start justify-end gap-1 bg-[linear-gradient(0deg,rgb(25_18_13/78%),transparent_78%)] p-[17px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 max-[560px]:gap-0.5 max-[560px]:bg-[linear-gradient(0deg,rgb(25_18_13/88%),rgb(25_18_13/30%)_52%,transparent_78%)] max-[560px]:p-3 max-[560px]:opacity-100">
        <small className="translate-y-2 text-[10px] font-bold tracking-[1.4px] text-[#e4b778] uppercase transition-transform duration-240 group-hover:translate-y-0 group-focus-visible:translate-y-0 max-[560px]:translate-y-0 max-[560px]:text-[9px] max-[560px]:tracking-[1.2px]">{project.category}</small>
        <strong className="translate-y-3 pr-[37px] text-[16px] transition-transform duration-[280ms] group-hover:translate-y-0 group-focus-visible:translate-y-0 max-[560px]:translate-y-0 max-[560px]:pr-9 max-[560px]:text-[14px] max-[560px]:leading-[1.25]">{project.title}</strong>
        <span className={`${roundArrow} absolute right-[13px] bottom-[13px] size-[31px] hover:bg-brown group-hover:[&_svg]:rotate-[44deg] group-focus-visible:[&_svg]:rotate-[44deg] max-[560px]:right-2.5 max-[560px]:bottom-2.5 max-[560px]:size-8 [&_svg]:size-[15px]`}><Icon name="arrow" /></span>
      </span>
    </Link>
  );
}
