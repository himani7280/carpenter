import Link from "next/link";
import type { homeContent } from "@/data";
import { Icon } from "@/components/common/icon";

type HeroSlide = (typeof homeContent.hero.slides)[number];

export function HomeHero({ slides, discoverLabel }: { slides: HeroSlide[]; discoverLabel: string }) {
  return (
    <>
      {slides.slice(0, 1).map((slide) => (
        <section className="relative flex min-h-(--hero-h) items-center overflow-hidden bg-[#211b17] [--hero-h:clamp(500px,40vw,720px)] text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgb(25_19_15/12%),transparent_70%)] max-[560px]:min-h-131.25 max-[560px]:items-end" data-hero key={slide.title}>
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[min(63%,calc(var(--hero-h)*1.3))] bg-[image:linear-gradient(90deg,#211b17_0%,rgb(33_27_23/82%)_6%,transparent_48%),var(--hero-image)] bg-position-[center,center_35%] bg-cover bg-no-repeat max-[800px]:w-[76%] max-[800px]:opacity-[0.78] max-[560px]:w-full max-[560px]:bg-[image:linear-gradient(90deg,rgb(29_21_16/94%)_0%,rgb(29_21_16/76%)_50%,rgb(29_21_16/20%)_100%),var(--hero-image)] max-[560px]:bg-position-[center,57%_center] max-[560px]:opacity-100" data-hero-photo style={{ "--hero-image": `url("${slide.image}")` } as React.CSSProperties} />
          <div className="site-container relative z-1 py-16 max-[800px]:py-12 max-[560px]:pb-10.75 max-[560px]:pt-13.25">
            <span className="flex items-center gap-3.5 text-[11px] font-bold tracking-[2.7px] text-[#f2e8df] uppercase max-[560px]:gap-2.25 max-[560px]:text-[9px] max-[560px]:tracking-[1.9px]" data-hero-eyebrow>{slide.eyebrow} <i className="h-px w-16.25 bg-[#d49b5a] max-[560px]:w-10.25" /></span>
            <h1 className="mb-3.5 mt-5 text-[clamp(55px,5.7vw,74px)] leading-[0.9] font-extrabold tracking-[-2.5px] max-[800px]:text-[clamp(53px,9vw,72px)] max-[560px]:mb-3 max-[560px]:mt-4 max-[560px]:text-[clamp(47px,13vw,66px)] max-[560px]:tracking-[-2.3px]">{slide.title}<br /><em className="text-[#d59a58] not-italic">{slide.highlight}</em></h1>
            <p className="mb-4 max-w-110 text-[16px] leading-normal text-[#f1e8e0] max-[560px]:text-[14px] max-[560px]:leading-[1.65]">{slide.description}</p>
            <Link className="inline-flex min-h-11.5 min-w-49.5 items-center justify-center gap-4.5 rounded-sm bg-[linear-gradient(110deg,#9e5928,#c48748)] px-5.25 text-[14px] font-bold text-white transition-colors hover:bg-none hover:bg-[#75421f] max-[560px]:min-w-45" href="/services">{discoverLabel} <Icon className="h-4.5 w-4.5" name="arrow" /></Link>
          </div>
        </section>
      ))}
    </>
  );
}
