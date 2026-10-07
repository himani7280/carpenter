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
  phone: "+1 00000 00000",
  phoneLink: "+10000000000",
  email: "info@woodhaus.com",
  location: "New York, USA",
  address: "456 WoodCraft Avenue, Brooklyn, New York - 11201, USA",
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
    blogLabel: "Blogs",
    allBlogsLabel: "All Blogs",
    blogDetailsLabel: "Blog Details",
    enquireLabel: "Enquire Now",
    openMenuLabel: "Open navigation menu",
  },
  footer: {
    description:
      "At WoodHaus, we bring craftsmanship, creativity and precision to every project. From custom furniture to complete woodwork solutions, we transform your spaces with quality and care.",
    quickLinksTitle: "Quick Links",
    servicesTitle: "Our Services",
    usefulLinksTitle: "Useful Links",
    contactTitle: "Get in Touch",
    usefulLinks: ["FAQs", "Terms & Conditions", "Privacy Policy", "Disclaimer", "Sitemap"],
    copyright: "© 2026 WoodHaus. All Rights Reserved.",
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
    mapLabel: "WoodHaus · New York",
    mapCity: "New York",
    mapCountry: "USA",
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
    slides: [
      {
        eyebrow: "Quality Carpentry",
        title: "Carpenter",
        highlight: "And Servicing",
        description: "We provide a comprehensive range of carpentry services tailored to meet your needs. Our passion lies in delivering durable, functional and stylish woodwork for every space.",
        image: "/images/carpenter-hero.webp",
      },
      {
        eyebrow: "Custom Woodwork",
        title: "Designed",
        highlight: "For Your Space",
        description: "From custom furniture to thoughtful interior woodwork, we make each piece fit your space, routine and personal style.",
        image: "/images/service-furniture.webp",
      },
      {
        eyebrow: "Made To Last",
        title: "Crafted With",
        highlight: "Lasting Care",
        description: "Our experienced craftspeople bring careful detail and durable materials to every repair, renovation and new project.",
        image: "/images/custom-dining.webp",
      },
    ],
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
  gallery: {
    eyebrow: "Our Recent Work",
    title: "Crafted Spaces,",
    highlight: "Real Stories",
    description:
      "Explore our latest woodworking and carpentry projects. Each space showcases our craftsmanship, attention to detail, and passion for creating beautiful, functional interiors.",
  },
  testimonial: {
    eyebrow: "Reviews",
    title: "What Our Clients Say",
    highlight: "About Our Carpentry Services",
    description: "Real experiences from homeowners and businesses who trust our carpentry expertise.",
    quote: "Excellent craftsmanship and attention to detail. The team understood our requirements perfectly and delivered beyond our expectations. Highly recommended!",
    author: "Rohit Mehta",
    detail: "Homeowner",
    initial: "A",
  },
  testimonials: [
    {
      quote: "Excellent craftsmanship and attention to detail. The team understood our requirements perfectly and delivered beyond our expectations. Highly recommended!",
      author: "Rohit Mehta",
      role: "Homeowner",
      image: "/images/testimonial-rohit.jpg",
      rating: 5,
    },
    {
      quote: "They transformed our office space with custom wooden work that looks amazing. Professional team, timely delivery and great quality. Truly a reliable service!",
      author: "Priya Sharma",
      role: "Business Owner",
      image: "/images/testimonial-priya.jpg",
      rating: 5,
    },
    {
      quote: "Very professional and skilled team. The finishing and quality of work are top-notch. They completed the project on time and within budget. Will definitely work with them again.",
      author: "Amit Verma",
      role: "Interior Designer",
      image: "/images/testimonial-amit.jpg",
      rating: 5,
    },
  ],
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
  whyChoose: {
    eyebrow: "Why Choose Us",
    title: "Tailored Woodwork",
    highlight: "Crafted for Your Lifestyle",
    description:
      "We bring craftsmanship, creativity and attention to detail in every project, delivering woodwork solutions that perfectly match your style and needs.",
    items: [
      ["design", "Skilled Through Years", "Crafting timeless wooden masterpieces with skill and precision. Bringing elegance, strength, and style to every space we build."],
      ["award", "Qualified Experts", "Our experienced carpenters deliver custom woodwork with precision and passion, ensuring fine finishes that last for years."],
      ["dollar", "Budget-Friendly", "Quality craftsmanship at an affordable price. Skilled hands, fine details, and lasting woodwork built to perfection."],
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
    furnitureTypes: [
      ["Dining Tables", "Elegant and durable dining solutions for modern homes.", "/images/project-dining.webp"],
      ["Wardrobes", "Stylish and functional storage designed for your space.", "/images/project-wardrobe.webp"],
      ["TV Units", "Modern and space-saving designs for living rooms.", "/images/project-living.webp"],
      ["Beds", "Comfortable and stylish beds built for lasting quality.", "/images/project-bedroom.webp"],
    ],
    process: {
      eyebrow: "Our Process",
      title: "From Concept to Creation",
      description: "We follow a simple and transparent process to ensure your custom furniture is crafted exactly the way you envision.",
      steps: [
        ["chat", "Consultation", "Understand your needs and space."],
        ["pencil", "Design & Planning", "Create a custom design for approval."],
        ["craft", "Craftsmanship", "Skilled hands bring the design to life."],
        ["truck", "Delivery & Setup", "On-time delivery with perfect finishing."],
      ],
    },
    experience: {
      title: "More Than Furniture,",
      highlight: "A Lasting Experience",
      imageAlt: "Carpenter planing a wooden board by hand",
      points: [
        ["Tailored to Your Needs", "Custom designs that fit your space and lifestyle."],
        ["High-Quality Materials", "We use premium wood and long-lasting finishes."],
        ["Experienced Craftsmen", "Skilled professionals with years of expertise."],
        ["On-Time Delivery", "We value your time and ensure timely completion."],
        ["Complete Support", "From design to delivery, we're with you at every step."],
      ],
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
    types: {
      title: "Types of",
      highlight: "Custom Woodwork",
      intro: "Custom woodwork can be tailored for every room and requirement. Some popular options include:",
      items: ["Dining Tables & Chairs", "Wardrobes & Storage Units", "TV Units & Entertainment Centers", "Kitchen Cabinets", "Doors & Windows", "Modular Furniture", "Decorative Wall Panels"],
    },
    sustainable: {
      title: "A Sustainable and",
      highlight: "Long-Lasting Choice",
      body:
        "Wood is a durable and eco-friendly material that stands the test of time. With proper care, custom woodwork not only retains its charm but also becomes more valuable over the years, making it a worthwhile investment for your home or office.",
    },
    closingTitle: "Final Thoughts",
    closing:
      "Investing in custom woodwork is about creating spaces that reflect your taste, meet your needs, and stand the test of time. With the right design and craftsmanship, wood can transform any space into a beautiful, functional, and inspiring environment.",
    help: {
      title: "Need Help?",
      text: "Talk to our experts for personalized solutions.",
      cta: "Contact Us",
    },
    previousLabel: "Previous Post",
    nextLabel: "Next Post",
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
    slug: "house-renovation",
    title: "House Renovation",
    description:
      "Transform your home with custom carpentry solutions that add style, functionality and value.",
    image: "/images/service-renovation.webp",
    imageAlt: "Carpenter shaping a piece of wood in the workshop",
    href: "/services/house-renovation",
    detail: {
      eyebrow: "House Renovation",
      title: "Transform Your Home with",
      highlight: "Expert Carpentry",
      paragraphs: [
        "At WoodHaus, we specialise in complete house renovation services that breathe new life into your living spaces. From structural woodwork to detailed interior finishes, our team handles every aspect with precision and care.",
        "We work closely with homeowners to understand their vision and deliver results that exceed expectations. Whether you're updating a single room or renovating an entire property, our craftsmen bring skill, experience and the finest materials to every project.",
        "Our renovation services cover flooring, wall panelling, ceiling work, custom built-ins and much more — all delivered on time and within budget.",
      ],
      imageAlt: "Carpenter shaping a piece of wood in the workshop",
      image: "/images/service-renovation.webp",
    },
  },
  {
    number: "02",
    slug: "furniture-remodelling",
    title: "Furniture Remodelling",
    description:
      "Give your old furniture a fresh new look with expert remodelling and custom designs.",
    image: "/images/service-furniture.webp",
    imageAlt: "Woodworker assembling custom furniture",
    href: "/services/furniture-remodelling",
    detail: {
      eyebrow: "Furniture Remodelling",
      title: "Reimagine Your Furniture with",
      highlight: "Custom Designs",
      paragraphs: [
        "Our furniture remodelling service transforms your existing pieces into something fresh, functional and uniquely yours. We combine traditional craftsmanship with modern design to revive furniture that has lost its appeal.",
        "From refinishing and reupholstering to structural repairs and complete redesigns, our team handles every detail with skill and care. We use premium materials and techniques to ensure a finish that lasts.",
        "Whether it's a beloved heirloom or a worn-out wardrobe, we bring new life to your furniture and make it fit perfectly in your evolving home.",
      ],
      imageAlt: "Woodworker assembling custom furniture",
      image: "/images/service-furniture.webp",
    },
  },
  {
    number: "03",
    slug: "general-carpentry",
    title: "General Carpentry",
    description:
      "From custom woodwork to repairs, we deliver reliable carpentry services for every need.",
    image: "/images/service-carpentry.webp",
    imageAlt: "Craftsperson sanding a solid wood tabletop",
    href: "/services/general-carpentry",
    detail: {
      eyebrow: "General Carpentry",
      title: "Reliable Carpentry for",
      highlight: "Every Need",
      paragraphs: [
        "Our general carpentry services cover a wide range of woodwork needs, from small repairs to large custom builds. With years of experience across residential and commercial projects, our team delivers quality results every time.",
        "We offer everything from door and window fitting, shelving and storage solutions, to bespoke joinery and structural woodwork. No job is too big or too small for our skilled carpenters.",
        "We pride ourselves on reliability, transparency and attention to detail — ensuring that every project is completed to the highest standard and your complete satisfaction.",
      ],
      imageAlt: "Craftsperson sanding a solid wood tabletop",
      image: "/images/service-carpentry.webp",
    },
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
  { title: "Storage That Works", category: "Kitchen Drawers", image: "/images/project-kitchen.webp" },
] as const;

export const blogPosts = [
  {
    slug: "eco-smart-carpentry",
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
    slug: "wooden-furniture-must-haves",
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
    slug: "craft-of-custom-woodwork",
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
    slug: "wooden-interior-trends-2026",
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
    slug: "maintain-wooden-furniture",
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
    slug: "clever-storage-solutions",
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

export const achievementsContent = {
  eyebrow: "Our Achievements",
  title: "Numbers That Reflect",
  highlight: "Our Commitment",
  description: "Our journey is built on trust, quality and the satisfaction of clients who value exceptional carpentry work.",
  stats: [
    ["10+", "Years of Experience"],
    ["500+", "Projects Completed"],
    ["300+", "Happy Clients"],
    ["15+", "Expert Team Members"],
  ],
};
