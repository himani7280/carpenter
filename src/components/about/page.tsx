import { Achievements } from "@/components/common/achievements";
import { AboutOverview } from "@/components/about/overview";
import { WhyChoose } from "@/components/about/why-choose";
import { Testimonials } from "@/components/home/testimonials";
import { PageBanner } from "@/components/common/page-elements";

export function AboutPage() {
  return (
    <>
        <PageBanner page="about" />
        <AboutOverview />
        <Achievements />
        <WhyChoose />
        <Testimonials />
    </>
  );
}
