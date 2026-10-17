import { homeContent, siteCopy } from "@/data";
import { BlogPreview } from "@/components/home/blog-preview";
import { HomeHero } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { Achievements } from "@/components/common/achievements";
import { AboutOverview } from "@/components/about/overview";
import { ServicesSection } from "@/components/services/services-section";
import { sectionSpace } from "@/components/common/styles";

export function HomePage() {
  const { hero, blog } = homeContent;

  return (
    <>
        <HomeHero discoverLabel={siteCopy.callsToAction.discoverLabel} slides={hero.slides} />
        <ServicesSection limit={3} />
        <AboutOverview className="pt-3 pb-15 max-[800px]:pt-2.5 max-[800px]:pb-12 max-[560px]:pt-2 max-[560px]:pb-9" />
        <Achievements />
        <Testimonials className={sectionSpace} />
        <BlogPreview content={blog} />
    </>
  );
}
