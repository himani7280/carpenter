"use client";

import { useState } from "react";
import { galleryContent, projectGallery } from "@/data";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { ProjectCard } from "@/components/gallery/project-card";
import { button, buttonGold, sectionSpace } from "@/components/common/styles";
import { Icon } from "@/components/common/icon";
import Image from "next/image";

export function ProjectGrid() {
  const [rowsToShow, setRowsToShow] = useState(2);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 2 rows = 7 items. 3 rows = 11 items.
  const itemsToShow = rowsToShow === 2 ? 7 : 11;
  const visibleProjects = projectGallery.slice(0, itemsToShow);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % projectGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + projectGallery.length) % projectGallery.length);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section className={`bg-[#fbfaf8] ${sectionSpace}`}>
      <div className="site-container">
        <SectionTitle eyebrow={galleryContent.eyebrow} title={<HighlightedTitle first={galleryContent.title} highlight={galleryContent.highlight} />} description={galleryContent.description} />
        <div className="grid grid-cols-12 auto-rows-[205px] gap-3 max-[560px]:grid-cols-2 max-[560px]:auto-rows-[70px] max-[560px]:gap-2.5">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              index={index} 
              key={project.title} 
              project={project} 
              total={projectGallery.length} 
              onClick={() => setLightboxIndex(index)} 
            />
          ))}
        </div>

        {rowsToShow === 2 && projectGallery.length > 7 && (
          <div className="mt-12 flex justify-center">
            <button className={`${button} ${buttonGold} uppercase tracking-[1px]`} onClick={() => setRowsToShow(3)} type="button">
              Show More <Icon name="arrow" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm" 
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          
          <button 
            className="absolute left-4 md:left-8 z-50 grid size-12 md:size-16 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" 
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <div className="relative h-[75vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={projectGallery[lightboxIndex].image} 
              alt={projectGallery[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
              <h3 className="text-[22px] font-bold tracking-tight">{projectGallery[lightboxIndex].title}</h3>
              <p className="mt-1 text-[13px] font-bold tracking-[1.4px] text-[#e4b778] uppercase">{projectGallery[lightboxIndex].category}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 md:right-8 z-50 grid size-12 md:size-16 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" 
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}
