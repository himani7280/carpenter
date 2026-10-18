import Image from "next/image";
import { homeContent } from "@/data";
import { AutoCarousel } from "@/components/common/auto-carousel";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";

export function Testimonials({ className }: { className?: string } = {}) {
  return (
    <section className={`overflow-hidden ${className || "pt-3 pb-15 max-[800px]:pt-2.5 max-[800px]:pb-12 max-[560px]:pt-2 max-[560px]:pb-9"}`}>
      <div className="site-container">
        <SectionTitle
          description={homeContent.testimonial.description}
          eyebrow={homeContent.testimonial.eyebrow}
          title={<HighlightedTitle breakBeforeHighlight first={homeContent.testimonial.title} highlight={homeContent.testimonial.highlight} />}
        />
        <AutoCarousel className="block overflow-hidden [&_.swiper-slide]:h-auto!" controls slidesPerView={3}>
          {homeContent.testimonials.map((content) => (
            <article className="group grid h-full min-h-[145px] grid-cols-[minmax(110px,0.75fr)_minmax(0,1.25fr)] overflow-hidden rounded-xl border border-[#f0e9e1] bg-white text-left shadow-[0_10px_30px_rgb(64_45_27/5%)] max-[560px]:grid-cols-[minmax(100px,0.7fr)_minmax(0,1.3fr)]" data-motion-effect="zoom-in" key={content.author}>
              <div className="relative min-w-0 overflow-hidden rounded-xl">
                <Image alt={`Portrait of ${content.author}`} className="object-cover object-[center_20%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.045]" fill sizes="(max-width: 650px) 45vw, (max-width: 1000px) 30vw, 15vw" src={content.image} />
              </div>
              <div className="flex min-w-0 flex-col p-3.5">
                <span aria-hidden="true" className="font-heading text-[48px] font-bold leading-[0.7] text-[#bd8740]">“</span>
                <p className="mt-0.5 mb-2 text-[12px] leading-[1.55] text-[#3b393e] max-[560px]:text-[11.5px]" data-motion-flip="up">{content.quote}</p>
                <div aria-label={`${content.rating} out of 5 stars`} className="mt-auto text-[17px] leading-none tracking-[2px] text-[#c18435]">{"★".repeat(content.rating)}</div>
                <div className="mt-1.5 grid gap-0 border-t border-[#e8ded2] pt-1.5 text-left"><strong className="font-heading text-[14px] font-bold text-[#25252a]">{content.author}</strong><small className="font-body text-[11.5px] text-[#5b585e]">{content.role}</small></div>
              </div>
            </article>
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}
