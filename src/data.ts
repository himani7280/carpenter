import rawData from "./data.json";

export const pageNames = rawData.pageNames as readonly [
  "home",
  "about",
  "services",
  "services-details",
  "gallery",
  "blog",
  "blog-details",
  "contact",
  "sitemap",
  "thank-you",
  "privacy-policy",
  "terms"
];

export type SitePageName = (typeof pageNames)[number];

export const siteNavigation = rawData.siteNavigation;
export const siteMetadata = rawData.siteMetadata;
export const pageContent = rawData.pageContent;
export const pageSeo = rawData.pageSeo;

export function getPageMetadata(page: SitePageName) {
  return (pageSeo as any)[page];
}

export const siteCopy = rawData.siteCopy;
export const homeContent = rawData.homeContent;
export const aboutContent = rawData.aboutContent;
export const servicesContent = rawData.servicesContent;
export const galleryContent = rawData.galleryContent;
export const blogContent = rawData.blogContent;
export const carpenterServices = rawData.carpenterServices;
export const serviceTypes = rawData.serviceTypes;
export const projectGallery = rawData.projectGallery;
export const blogPosts = rawData.blogPosts;
export const aboutBenefits = rawData.aboutBenefits;
export const achievementsContent = rawData.achievementsContent;
