import { homeContent } from "@/data";
import { PageBanner } from "@/components/common/page-elements";
import { ServicesSection } from "@/components/services/services-section";

export function ServicesPage() {
  return (
    <>
        <PageBanner page="services" />
        <ServicesSection content={homeContent.services} rows={2} />
    </>
  );
}
