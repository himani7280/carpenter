import { carpenterServices, homeContent } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { ServiceCard } from "@/components/services/service-card";
import { sectionSpace } from "@/components/common/styles";

export function ServicesSection({ content = homeContent.services, rows = 1 }: { content?: typeof homeContent.services; rows?: number }) {
  return (
    <section className={`bg-[#fbfaf8] ${sectionSpace}`}>
      <div className="site-container">
        <SectionTitle description={content.description} eyebrow={content.eyebrow} title={<HighlightedTitle first={content.titleFirst} highlight={content.titleHighlight} breakBeforeHighlight />} />
        <div className="grid grid-cols-3 gap-7 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-4">
          {Array.from({ length: rows }, (_, row) => carpenterServices.map((service) => <ServiceCard key={`${row}-${service.number}`} service={service} />))}
        </div>
      </div>
    </section>
  );
}
