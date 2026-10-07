import Image from "next/image";
import { homeContent } from "@/data";
import { AutoCarousel } from "@/components/common/auto-carousel";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export function Testimonials() {
  return (
    <section className={`overflow-hidden bg-[#faf7f3] ${sectionSpace}`}>
      <div className="site-container">
        <SectionTitle
          description={homeContent.testimonial.description}
          eyebrow={homeContent.testimonial.eyebrow}
          title={<HighlightedTitle breakBeforeHighlight first={homeContent.testimonial.title} highlight={homeContent.testimonial.highlight} />}
        />
        <AutoCarousel className="block overflow-hidden [&_.swiper-slide]:h-auto!" controls slidesPerView={3}>
          {homeContent.testimonials.map((content) => (
            <article className="group grid h-full min-h-[284px] grid-cols-[minmax(110px,0.78fr)_minmax(0,1.22fr)] overflow-hidden rounded-lg border border-[#f0e9e1] bg-white text-left shadow-[0_10px_30px_rgb(64_45_27/5%)] max-[560px]:grid-cols-[minmax(108px,0.72fr)_minmax(0,1.28fr)]" data-motion-effect="zoom-in" key={content.author}>
              <div className="relative min-h-[284px] min-w-0 overflow-hidden">
                <Image alt={`Portrait of ${content.author}`} className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.045]" fill sizes="(max-width: 650px) 38vw, (max-width: 1000px) 24vw, 14vw" src={content.image} />
              </div>
              <div className="flex min-w-0 flex-col px-[15px] pt-3.5 pb-3 max-[800px]:p-3 max-[560px]:px-2.5 max-[560px]:py-[11px]">
                <span aria-hidden="true" className="font-[Georgia,serif] text-[48px] leading-[0.75] text-[#bd8740]">“</span>
                <p className="mt-1.5 mb-3 text-[14px] leading-[1.55] text-[#55525a] max-[560px]:text-[13px]" data-motion-flip="up">{content.quote}</p>
                <div aria-label={`${content.rating} out of 5 stars`} className="mt-auto text-[17px] leading-none tracking-[2px] text-[#c18435]">{"★".repeat(content.rating)}</div>
                <div className="mt-2.5 grid gap-[3px] border-t border-[#e8ded2] pt-[9px] text-left"><strong className="text-[13px] text-[#25252a]">{content.author}</strong><small className="text-[11px] text-[#7c7880]">{content.role}</small></div>
              </div>
            </article>
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}
