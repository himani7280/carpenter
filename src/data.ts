export const pageNames = [
  "home",
  "about",
  "services",
  "services-details",
  "gallery",
  "blog",
  "blog-details",
  "contact",
] as const;

export type SitePageName = (typeof pageNames)[number];

export const siteNavigation = [
  { label: "Home", href: "/", page: "home" },
  { label: "About Us", href: "/about", page: "about" },
  { label: "Services", href: "/services", page: "services" },
  { label: "Gallery", href: "/gallery", page: "gallery" },
  { label: "Blogs", href: "/blog", page: "blog" },
  { label: "Contact Us", href: "/contact", page: "contact" },
] as const;

export const siteMetadata = {
  title: "WoodHaus",
  description: "Quality Carpentry for Better Living",
  phone: "+91 98765 43210",
  phoneLink: "+919876543210",
  email: "info@woodhaus.in",
  location: "New Delhi, India",
  address: "123 WoodCraft Street, New Delhi - 110001, India",
};

export const pageContent: Record<
  Exclude<SitePageName, "home">,
  { title: string; breadcrumb: string; eyebrow: string }
> = {
  about: {
    title: "About Us",
    breadcrumb: "About Us",
    eyebrow: "Who We Are",
  },
  services: {
    title: "Services",
    breadcrumb: "Services",
    eyebrow: "What We Do",
  },
  "services-details": {
    title: "Services Details",
    breadcrumb: "Services Details",
    eyebrow: "Service Overview",
  },
  gallery: {
    title: "Gallery",
    breadcrumb: "Gallery",
    eyebrow: "Our Gallery",
  },
  blog: {
    title: "Blogs",
    breadcrumb: "Blogs",
    eyebrow: "Our Blog",
  },
  "blog-details": {
    title: "Blogs Detail",
    breadcrumb: "Blogs Detail",
    eyebrow: "Carpentry Tips",
  },
  contact: {
    title: "Contact Us",
    breadcrumb: "Contact Us",
    eyebrow: "Get in Touch",
  },
};

export const pageSeo: Record<
  SitePageName,
  { title: string; description: string }
> = {
  home: {
    title: "Home",
    description:
      "Quality carpentry for better living. Explore WoodHaus carpentry, woodworking and home improvement.",
  },
  about: {
    title: "About Us",
    description:
      "Meet WoodHaus: experienced carpenters creating quality custom woodwork and lasting home solutions.",
  },
  services: {
    title: "Services",
    description:
      "Explore WoodHaus carpentry services, including home renovation, furniture remodelling and custom woodwork.",
  },
  "services-details": {
    title: "Services Details",
    description:
      "Learn about WoodHaus custom furniture, materials, finishes and carpentry craftsmanship.",
  },
  gallery: {
    title: "Gallery",
    description:
      "Browse WoodHaus carpentry, custom furniture, kitchen, wardrobe and interior woodwork projects.",
  },
  blog: {
    title: "Blogs",
    description:
      "Read WoodHaus carpentry tips, woodworking guides and home improvement ideas.",
  },
  "blog-details": {
    title: "Blog Details",
    description:
      "Ideas and advice for planning custom woodwork and choosing furniture for your home.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact WoodHaus for carpentry, custom furniture and woodworking projects in New Delhi.",
  },
};

export function getPageMetadata(page: SitePageName) {
  return pageSeo[page];
}

export const siteCopy = {
  brand: {
    name: "WoodHaus",
    descriptor: "CARPENTRY & WOODWORKING",
    tagline: "Quality Carpentry for Better Living",
  },
  header: {
    navigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
    servicesLabel: "Services",
    allServicesLabel: "All Services",
    customFurnitureLabel: "Custom Furniture",
    detailsLabel: "Services Details",
    enquireLabel: "Enquire Now",
    openMenuLabel: "Open navigation menu",
  },
  footer: {
    description:
      "Thoughtful carpentry, custom woodwork and quality craftsmanship for better living.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Our Services",
    contactTitle: "Get in Touch",
    copyright: "© 2026 WoodHaus Carpentry & Woodworking. All rights reserved.",
    closing: "Crafted with care.",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  callsToAction: {
    buildEyebrow: "Let’s Build Something Great",
    projectTitle: "Have a project in mind?",
    projectDescription: "Tell us what you’re looking for. We’d love to help.",
    contactLabel: "Get in Touch",
    discoverLabel: "Discover More",
    moreAboutLabel: "More About Us",
    viewProjectsLabel: "View All Projects",
    exploreArticlesLabel: "Explore All Articles",
    readMoreLabel: "Read More",
    discussProjectLabel: "Discuss Your Project",
  },
  contact: {
    locationTitle: "Our Location",
    callTitle: "Call Us",
    emailTitle: "Email Us",
    workingHoursTitle: "Working Hours",
    supportEmail: "support@woodhaus.in",
    workingHours: "Mon – Sat: 9:00 AM – 6:00 PM",
    sundayHours: "Sunday: Closed",
    formEyebrow: "Send Us a Message",
    formTitle: "Get a Free Consultation",
    formDescription: "Fill out the form and our team will get back to you shortly.",
    namePlaceholder: "Your Name*",
    emailPlaceholder: "Your Email*",
    phonePlaceholder: "Your Phone*",
    subjectPlaceholder: "Subject*",
    messagePlaceholder: "Your Message*",
    nameLabel: "Your name",
    emailLabel: "Your email",
    phoneLabel: "Your phone",
    subjectLabel: "Subject",
    messageLabel: "Your message",
    submitLabel: "Send Message",
    mapLabel: "WoodHaus · New Delhi",
    mapCity: "New Delhi",
    mapCountry: "India",
    benefits: [
      ["chat", "Quick Response", "We usually respond within 24 hours."],
      ["shield", "Expert Guidance", "Get professional advice for your project."],
      ["team", "Personalized Solutions", "Tailored designs to match your needs."],
      ["craft", "Trusted Support", "We’re with you at every step."],
    ],
  },
};

export const homeContent = {
  hero: {
    eyebrow: "Quality Carpentry",
    title: "Carpenter",
    highlight: "And Servicing",
    description:
      "We provide a comprehensive range of carpentry services tailored to meet your needs. Our passion lies in delivering durable, functional and stylish woodwork for every space.",
  },
  services: {
    eyebrow: "What We Do",
    titleFirst: "We Offer Cost Efficient",
    titleHighlight: "Carpenter Services",
    description:
      "We provide high-quality carpentry solutions with precision, durability and modern design to enhance every space in your home or workplace.",
  },
  about: {
    eyebrow: "Who We Are",
    title: "Providing High Quality",
    highlight: "Carpenter Solution",
    intro:
      "Our operations span the globe and encompass diverse sectors within the carpentry industry.",
    description:
      "With years of specialized expertise in carpentry services, catering to residential, commercial and large-scale projects, we provide tailored end-to-end solutions crafted to enhance functionality, durability and style.",
    imageAlt: "WoodHaus carpenter carefully crafting a piece of furniture",
  },
  stats: [
    ["10+", "Years of Experience"],
    ["250+", "Projects Completed"],
    ["180+", "Happy Clients"],
    ["25+", "Expert Craftspeople"],
  ],
  gallery: {
    eyebrow: "Our Recent Work",
    title: "Crafted Spaces,",
    highlight: "Real Stories",
    description:
      "Explore our latest woodworking and carpentry projects. Each space showcases our craftsmanship, attention to detail, and passion for creating beautiful, functional interiors.",
  },
  testimonial: {
    eyebrow: "Kind Words",
    title: "Made with care,",
    highlight: "loved for years",
    quote:
      "WoodHaus listened to what we needed and built a beautiful dining table that fits our home perfectly. The quality and attention to detail are exceptional.",
    author: "Arjun Mehta",
    detail: "New Delhi · Custom dining furniture",
    initial: "A",
  },
  blog: {
    eyebrow: "Our Blog",
    title: "Latest News &",
    highlight: "Insights",
    description:
      "Tips, ideas and expert advice on carpentry, woodworking and home improvement.",
  },
};

export const aboutContent = {
  overview: {
    eyebrow: "Who We Are",
    title: "Providing High Quality",
    highlight: "Carpenter Solution",
    intro:
      "Our operations span the globe and encompass diverse sectors within the carpentry industry.",
    description:
      "With years of specialized expertise in carpentry services, catering to residential, commercial and large-scale projects, we provide tailored end-to-end solutions crafted to enhance functionality, durability and style.",
    imageAlt: "Woodworker shaping timber by hand",
  },
  achievements: {
    eyebrow: "Our Achievements",
    title: "Numbers That Reflect",
    highlight: "Our Commitment",
    stats: [
      ["10+", "Years of Experience"],
      ["250+", "Projects Completed"],
      ["180+", "Happy Clients"],
      ["25+", "Skilled Craftspeople"],
    ],
  },
};

export const servicesContent = {
  types: {
    eyebrow: "Complete Woodwork Solutions",
    title: "Carpentry for",
    highlight: "Every Corner",
    description:
      "One trusted team for all the woodwork that makes a house feel like home.",
  },
  detail: {
    eyebrow: "Service Overview",
    title: "Crafted Furniture",
    highlight: "That Feels Like Home",
    paragraphs: [
      "At WoodHaus, we design and build custom furniture that blends functionality, beauty and durability. Each piece is thoughtfully crafted to complement your space, lifestyle and personal taste.",
      "From modern minimal designs to classic wooden styles, our expert craftsmen work with precision and attention to detail, ensuring every piece is both visually stunning and built to last. We use high-quality wood, fine finishes and modern woodworking techniques to create furniture that enhances the comfort and elegance of your home or office.",
      "Whether you need a dining table, wardrobe, bed, TV unit or a completely custom design, we bring your ideas to life with craftsmanship you can trust.",
    ],
    imageAlt: "Custom wooden dining furniture in a bright home",
    serviceListTitle: "Our Services",
    benefits: [
      ["design", "Personalized Design", "Furniture tailored to your space, style and needs."],
      ["shield", "Premium Quality Wood", "Strong, durable and long-lasting materials."],
      ["craft", "Expert Craftsmanship", "Precision and attention to detail in every piece."],
      ["team", "Modern & Classic Styles", "A wide range of designs to match any décor."],
    ],
    related: {
      eyebrow: "What We Offer",
      title: "Types of",
      highlight: "Custom Furniture",
      description:
        "We create a wide range of custom wooden furniture to suit different spaces and requirements.",
    },
  },
};

export const galleryContent = {
  eyebrow: "Our Gallery",
  title: "Crafted Spaces,",
  highlight: "Real Stories",
  description:
    "Explore our latest woodworking and carpentry projects. Each space showcases our craftsmanship, attention to detail, and passion for creating beautiful, functional interiors.",
};

export const blogContent = {
  eyebrow: "Our Blog",
  title: "Latest News &",
  highlight: "Insights",
  description:
    "Tips, ideas and expert advice on carpentry, woodworking and home improvement.",
  article: {
    imageAlt: "Custom wooden dining room made by WoodHaus",
    lead:
      "Custom woodwork is more than just furniture or fixtures — it’s a way to bring personality, warmth, and functionality into your space. Whether you’re designing a cozy home or a professional workspace, custom woodwork allows you to create pieces that are uniquely yours, built with precision and crafted to last.",
    sections: [
      {
        title: "Why Choose",
        highlight: "Custom Woodwork?",
        body:
          "Unlike mass-produced furniture, custom woodwork is tailored to your specific needs, style, and space. It gives you the freedom to choose the design, wood type, finish, and functionality — ensuring that every piece complements your lifestyle and enhances the beauty of your interiors.",
      },
      {
        title: "The Perfect Blend of",
        highlight: "Aesthetics and Functionality",
        body:
          "Custom woodwork combines timeless beauty with practical design. From elegant dining tables to smart storage solutions, every piece is crafted to serve a purpose while adding character to your home.",
      },
    ],
    closing:
      "Our craftsmen bring care and precision to every stage, using quality materials and finishes to create work you can enjoy for years to come.",
    recentPostsTitle: "Recent Posts",
    categoriesTitle: "Categories",
    categories: [
      ["Carpentry Tips", "6"],
      ["Woodworking Guide", "8"],
      ["Home Improvement", "5"],
      ["Furniture Care", "4"],
    ],
  },
};

export const carpenterServices = [
  {
    number: "01",
    title: "House Renovation",
    description:
      "Transform your home with custom carpentry solutions that add style, functionality and value.",
    image: "/images/service-renovation.webp",
    imageAlt: "Carpenter shaping a piece of wood in the workshop",
    href: "/services-details",
  },
  {
    number: "02",
    title: "Furniture Remodelling",
    description:
      "Give your old furniture a fresh new look with expert remodelling and custom designs.",
    image: "/images/service-furniture.webp",
    imageAlt: "Woodworker assembling custom furniture",
    href: "/services-details",
  },
  {
    number: "03",
    title: "General Carpentry",
    description:
      "From custom woodwork to repairs, we deliver reliable carpentry services for every need.",
    image: "/images/service-carpentry.webp",
    imageAlt: "Craftsperson sanding a solid wood tabletop",
    href: "/services-details",
  },
] as const;

export const serviceTypes = [
  "Custom Furniture",
  "Interior Woodwork",
  "Home Renovation",
  "Modular Woodwork",
  "Doors & Windows",
  "Office Woodwork",
  "Wooden Flooring",
  "Kitchen Woodwork",
] as const;

export const projectGallery = [
  { title: "Made for Gatherings", category: "Dining Room", image: "/images/project-dining.webp" },
  { title: "A Place for Everything", category: "Fitted Wardrobe", image: "/images/project-wardrobe.webp" },
  { title: "The Heart of the Home", category: "Custom Kitchen", image: "/images/project-kitchen.webp" },
  { title: "A Better Start to Every Day", category: "Bedroom Furniture", image: "/images/project-bedroom.webp" },
  { title: "Room to Unwind", category: "Living Room", image: "/images/project-living.webp" },
  { title: "A Step Above", category: "Staircase", image: "/images/project-stairs.webp" },
  { title: "Everyday Retreat", category: "Bathroom Vanity", image: "/images/project-bathroom.webp" },
  { title: "Work, Well Organised", category: "Home Office", image: "/images/project-living.webp" },
  { title: "Outdoor Living", category: "Patio Woodwork", image: "/images/project-kitchen.webp" },
  { title: "Details That Welcome", category: "Entryway", image: "/images/project-wardrobe.webp" },
] as const;

export const blogPosts = [
  {
    day: "24",
    month: "APR",
    year: "2026",
    category: "Carpentry Tips",
    title: "Eco-Smart Carpentry: How Nature Inspires Design",
    excerpt:
      "Crafted with precision and passion, our expert carpenters turn wood into beautiful, functional spaces.",
    image: "/images/service-renovation.webp",
    date: "April 24, 2026",
  },
  {
    day: "20",
    month: "APR",
    year: "2026",
    category: "Home Improvement",
    title: "5 Elegant Wooden Furniture Must-Haves for Every Home",
    excerpt:
      "Discover the furniture pieces that bring warmth, balance and lasting character to your home.",
    image: "/images/service-furniture.webp",
    date: "April 20, 2026",
  },
  {
    day: "16",
    month: "APR",
    year: "2026",
    category: "Woodworking Guide",
    title: "The Craft of Custom Woodwork: Why Handmade Counts",
    excerpt:
      "A closer look at the care, patience and skill behind truly personal woodwork.",
    image: "/images/service-carpentry.webp",
    date: "April 16, 2026",
  },
  {
    day: "12",
    month: "APR",
    year: "2026",
    category: "Interior Design",
    title: "Wooden Interior Trends for Modern Homes in 2026",
    excerpt:
      "Natural materials and thoughtful details make a home feel calm, considered and welcoming.",
    image: "/images/project-bedroom.webp",
    date: "April 12, 2026",
  },
  {
    day: "08",
    month: "APR",
    year: "2026",
    category: "Furniture Care",
    title: "How to Maintain Your Wooden Furniture for Years",
    excerpt:
      "Simple, regular care helps your favourite timber pieces age beautifully.",
    image: "/images/project-living.webp",
    date: "April 8, 2026",
  },
  {
    day: "04",
    month: "APR",
    year: "2026",
    category: "Storage Ideas",
    title: "Clever Storage That Makes the Most of Your Space",
    excerpt:
      "Beautiful built-ins turn unused corners into useful, well-organised spaces.",
    image: "/images/project-wardrobe.webp",
    date: "April 4, 2026",
  },
] as const;

export const aboutBenefits = [
  {
    icon: "craft",
    title: "Quality Workmanship",
    text: "We focus on precision and detail in every project.",
  },
  {
    icon: "design",
    title: "Customized Solutions",
    text: "Tailored designs to match your space and needs.",
  },
  {
    icon: "shield",
    title: "Reliable & On Time",
    text: "We deliver quality work within the committed time.",
  },
  {
    icon: "team",
    title: "Experienced Team",
    text: "Skilled professionals with years of industry experience.",
  },
] as const;
