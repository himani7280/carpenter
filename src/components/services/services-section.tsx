import { carpenterServices, homeContent } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { ServiceCard } from "@/components/services/service-card";
import { sectionSpace } from "@/components/common/styles";

export function ServicesSection({ content = homeContent.services, limit }: { content?: typeof homeContent.services; limit?: number }) {
  const displayedServices = limit ? carpenterServices.slice(0, limit) : carpenterServices;

  return (
    <section className={`bg-[#fbfaf8] ${sectionSpace} pb-10 max-[560px]:pb-8`}>
      <div className="site-container">
        <SectionTitle description={content.description} eyebrow={content.eyebrow} title={<HighlightedTitle first={content.titleFirst} highlight={content.titleHighlight} breakBeforeHighlight />} />
        <div className="grid grid-cols-3 gap-7 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-4">
          {displayedServices.map((service) => <ServiceCard key={service.number} service={service} />)}
        </div>
      </div>
    </section>
  );
}
