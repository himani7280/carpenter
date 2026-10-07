import { PageBanner } from "@/components/common/page-elements";
import { ProjectGrid } from "@/components/gallery/project-grid";

export function GalleryPage() {
  return (
    <>
      <PageBanner page="gallery" />
      <ProjectGrid />
    </>
  );
}
