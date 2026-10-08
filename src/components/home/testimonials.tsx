import Image from "next/image";
import { homeContent } from "@/data";
import { AutoCarousel } from "@/components/common/auto-carousel";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export function Testimonials() {
  return (
    <section className={`overflow-hidden ${sectionSpace} !pt-2 pb-10 max-[560px]:!pt-1 max-[560px]:pb-8`}>
      <div className="site-container">
        <SectionTitle
          description={homeContent.testimonial.description}
          eyebrow={homeContent.testimonial.eyebrow}
          title={<HighlightedTitle breakBeforeHighlight first={homeContent.testimonial.title} highlight={homeContent.testimonial.highlight} />}
        />
        <AutoCarousel className="block overflow-hidden [&_.swiper-slide]:h-auto!" controls slidesPerView={3}>
          {[...homeContent.testimonials, ...homeContent.testimonials].map((content, idx) => {
            const origIdx = idx % homeContent.testimonials.length;
            const images = ["/images/testimonial-1.png", "/images/testimonial-2.png", "/images/testimonial-3.png"];
            const imageUrl = images[origIdx % images.length];
            return (
            <article className="group grid h-full min-h-[145px] grid-cols-[minmax(110px,0.75fr)_minmax(0,1.25fr)] overflow-hidden rounded-xl border border-[#f0e9e1] bg-white text-left shadow-[0_10px_30px_rgb(64_45_27/5%)] max-[560px]:grid-cols-[minmax(100px,0.7fr)_minmax(0,1.3fr)]" data-motion-effect="zoom-in" key={idx}>
              <div className="relative min-w-0 overflow-hidden rounded-xl">
                <Image alt={`Portrait of ${content.author}`} className="object-cover object-[center_20%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.045]" fill sizes="(max-width: 650px) 45vw, (max-width: 1000px) 30vw, 15vw" src={imageUrl} />
              </div>
              <div className="flex min-w-0 flex-col p-3">
                <span aria-hidden="true" className="text-[56px] font-bold leading-[0.7] text-[#bd8740]">“</span>
                <p className="mt-0.5 mb-2 text-[11.5px] leading-[1.5] text-[#3b393e] max-[560px]:text-[11px]" data-motion-flip="up">{content.quote}</p>
                <div aria-label={`${content.rating} out of 5 stars`} className="mt-auto text-[18px] leading-none tracking-[2px] text-[#c18435]">{"★".repeat(content.rating)}</div>
                <div className="mt-1.5 grid gap-0 border-t border-[#e8ded2] pt-1.5 text-left"><strong className="text-[14px] font-bold text-[#25252a]">{content.author}</strong><small className="text-[11px] text-[#5b585e]">{content.role}</small></div>
              </div>
            </article>
          )})}
        </AutoCarousel>
      </div>
    </section>
  );
}
