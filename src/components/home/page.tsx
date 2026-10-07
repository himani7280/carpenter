import { homeContent, siteCopy } from "@/data";
import { BlogPreview } from "@/components/home/blog-preview";
import { HomeHero } from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import { Achievements } from "@/components/common/achievements";
import { AboutOverview } from "@/components/about/overview";
import { ServicesSection } from "@/components/services/services-section";

export function HomePage() {
  const { hero, blog } = homeContent;

  return (
    <>
        <HomeHero discoverLabel={siteCopy.callsToAction.discoverLabel} slides={hero.slides} />
        <ServicesSection limit={3} />
        <AboutOverview />
        <Achievements />
        <Testimonials />
        <BlogPreview content={blog} />
    </>
  );
}
