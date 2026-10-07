import { galleryContent, projectGallery } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { ProjectCard } from "@/components/gallery/project-card";
import { sectionSpace } from "@/components/common/styles";

export function ProjectGrid() {
  return (
    <section className={`bg-[#fbfaf8] ${sectionSpace}`}>
      <div className="site-container">
        <SectionTitle eyebrow={galleryContent.eyebrow} title={<HighlightedTitle first={galleryContent.title} highlight={galleryContent.highlight} />} description={galleryContent.description} />
        <div className="grid grid-cols-12 auto-rows-[205px] gap-3 max-[560px]:grid-cols-2 max-[560px]:auto-rows-[70px] max-[560px]:gap-2.5">
          {projectGallery.map((project, index) => <ProjectCard index={index} key={project.title} project={project} total={projectGallery.length} />)}
        </div>
      </div>
    </section>
  );
}
