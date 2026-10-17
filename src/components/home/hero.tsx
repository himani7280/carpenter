import Link from "next/link";
import type { homeContent } from "@/data";
import { Icon } from "@/components/common/icon";

type HeroSlide = (typeof homeContent.hero.slides)[number];

export function HomeHero({ slides, discoverLabel }: { slides: HeroSlide[]; discoverLabel: string }) {
  return (
    <>
      {slides.slice(0, 1).map((slide) => (
        <section className="relative flex min-h-(--hero-h) items-center overflow-hidden bg-[#282320] [--hero-h:clamp(460px,38vw,600px)] text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgb(40_35_32/12%),transparent_70%)] max-[560px]:min-h-115 max-[560px]:items-end" data-hero key={slide.title}>
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[min(63%,calc(var(--hero-h)*1.3))] bg-[image:linear-gradient(90deg,#282320_0%,rgb(40_35_32/90%)_15%,rgb(40_35_32/65%)_40%,rgb(40_35_32/30%)_70%,transparent_100%),var(--hero-image)] bg-position-[center,center_35%] bg-cover bg-no-repeat max-[800px]:w-[76%] max-[800px]:opacity-[0.78] max-[560px]:w-full max-[560px]:bg-[image:linear-gradient(90deg,#282320_0%,rgb(40_35_32/85%)_20%,rgb(40_35_32/50%)_50%,rgb(40_35_32/15%)_80%,transparent_100%),var(--hero-image)] max-[560px]:bg-position-[center,57%_center] max-[560px]:opacity-100" data-hero-photo style={{ "--hero-image": `url("${slide.image}")` } as React.CSSProperties} />
          <div className="site-container relative z-1 py-12 max-[800px]:py-9 max-[560px]:py-8">
            <span className="flex items-center gap-3 text-[11px] font-bold tracking-[2.4px] text-[#f2e8df] uppercase max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:tracking-[1.8px]" data-hero-eyebrow>{slide.eyebrow} <i className="h-px w-14 bg-[#d49b5a] max-[560px]:w-9" /></span>
            <h1 className="font-heading mb-3.5 mt-4 text-[clamp(36px,4.4vw,54px)] leading-[1.05] font-extrabold tracking-[-1.5px] max-[800px]:text-[clamp(30px,5vw,44px)] max-[560px]:mb-2.5 max-[560px]:mt-3 max-[560px]:text-[clamp(28px,7.5vw,36px)] max-[560px]:tracking-[-0.8px]">{slide.title}<br /><em className="text-[#d59a58] not-italic">{slide.highlight}</em></h1>
            <p className="mb-5.5 max-w-110 text-[15px] leading-relaxed text-[#f1e8e0] max-[560px]:text-[13.5px] max-[560px]:leading-normal">{slide.description}</p>
            <Link className="inline-flex min-h-12 min-w-46 items-center justify-center gap-4 rounded-sm bg-[linear-gradient(110deg,#9e5928,#c48748)] px-5.5 text-[14px] font-bold text-white transition-colors hover:bg-none hover:bg-[#75421f] max-[560px]:min-w-42" href="/services">{discoverLabel} <Icon className="h-4.5 w-4.5" name="arrow" /></Link>
          </div>
        </section>
      ))}
    </>
  );
}
