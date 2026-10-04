import Image from "next/image";
import Link from "next/link";
import {
  aboutBenefits,
  blogPosts,
  blogContent,
  aboutContent,
  carpenterServices,
  galleryContent,
  homeContent,
  pageContent,
  projectGallery,
  siteNavigation,
  siteCopy,
  serviceTypes,
  servicesContent,
  siteMetadata,
  type SitePageName,
} from "@/data";

type IconName = "pin" | "phone" | "mail" | "clock" | "craft" | "design" | "shield" | "team" | "arrow" | "chat";

const iconPaths: Record<IconName, string> = {
  pin: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.7L7.2 10a16 16 0 0 0 6 6l1.5-1.8a2 2 0 0 1 1.7-.6l3.1.5a2 2 0 0 1 1.7 1.8Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 3-10 7L2 7",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2",
  craft: "m14.7 6.3 3 3M3 21l8.5-8.5m-1.8-1.8 7.8-7.8a2.1 2.1 0 0 1 3 3l-7.8 7.8m-4.1-4.1 3.1 3.1-3.2 3.2-3.1-3.1 3.2-3.2ZM3 21l4.7-1.2",
  design: "M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5M12 12v9",
  shield: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-4-11 3 3 5-5",
  team: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9m-1-12.1a4 4 0 0 1 0 7.8",
  arrow: "M5 12h14m-7-7 7 7-7 7",
  chat: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z",
};

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function Brand() {
  return (
    <Link aria-label={`${siteCopy.brand.name} home`} className="brand" href="/">
      <svg aria-hidden="true" className="brand-mark" viewBox="0 0 58 58">
        <path d="M5 28 28 7l24 21v24H5z" fill="#53321f" />
        <path d="M10 27 28 11l19 17v20H10z" fill="#fff" />
        <path d="m18 27 10-9 11 10v8H18z" fill="#bc7b3d" />
        <path d="M24 46V34h9v12M6 50h46" fill="none" stroke="#53321f" strokeWidth="4" />
        <path d="m3 28 25-23 27 24" fill="none" stroke="#bc7b3d" strokeWidth="5" />
      </svg>
      <span className="brand-wordmark">
        <strong>{siteCopy.brand.name}</strong>
        <small>{siteCopy.brand.descriptor}</small>
      </span>
    </Link>
  );
}

function Header({ page }: { page: SitePageName }) {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="site-container topbar-inner">
          <span className="topbar-tag"><Icon name="pin" /> {siteCopy.brand.tagline}</span>
          <div className="topbar-contact">
            <a href={`tel:${siteMetadata.phoneLink}`}><Icon name="phone" />{siteMetadata.phone}</a>
            <a href={`mailto:${siteMetadata.email}`}><Icon name="mail" />{siteMetadata.email}</a>
            <span className="social-links" aria-label="Social media">f&nbsp;&nbsp;◎&nbsp;&nbsp;▶</span>
          </div>
        </div>
      </div>
      <div className="navigation-wrap">
        <div className="site-container main-navigation">
          <Brand />
          <nav className="desktop-nav" aria-label={siteCopy.header.navigationLabel}>
            {siteNavigation.map((item) => (
              item.page === "services" ? (
                <div className="nav-dropdown" key={item.href}>
                  <Link
                    aria-current={page === item.page ? "page" : undefined}
                    className={page === item.page || page === "services-details" ? "active" : ""}
                    href={item.href}
                  >
                    {siteCopy.header.servicesLabel} <span aria-hidden="true">⌄</span>
                  </Link>
                  <div className="nav-dropdown-menu">
                    <Link href="/services">{siteCopy.header.allServicesLabel}</Link>
                    <Link href="/services-details">{siteCopy.header.customFurnitureLabel}</Link>
                  </div>
                </div>
              ) : (
                <Link
                  aria-current={page === item.page ? "page" : undefined}
                  className={page === item.page ? "active" : ""}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          <Link className="nav-cta" href="/contact">{siteCopy.header.enquireLabel} <Icon name="arrow" /></Link>
          <details className="mobile-menu">
            <summary aria-label={siteCopy.header.openMenuLabel}><span></span><span></span><span></span></summary>
            <nav aria-label={siteCopy.header.mobileNavigationLabel}>
              {siteNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              <Link href="/services-details">{siteCopy.header.detailsLabel}</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function PageBanner({ page }: { page: Exclude<SitePageName, "home"> }) {
  const content = pageContent[page];
  return (
    <section className="page-banner">
      <div className="site-container page-banner-content">
        <h1>{content.title}</h1>
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link><span aria-hidden="true">›</span><span>{content.breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-title">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HighlightedTitle({
  first,
  highlight,
  breakBeforeHighlight = false,
}: {
  first: string;
  highlight: string;
  breakBeforeHighlight?: boolean;
}) {
  return <>{first}{breakBeforeHighlight && <br />} <em>{highlight}</em></>;
}

function ServiceCard({ service }: { service: (typeof carpenterServices)[number] }) {
  return (
    <article className="service-card">
      <Link aria-label={`Read about ${service.title}`} className="service-photo" href={service.href}>
        <Image alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" src={service.image} />
      </Link>
      <div className="service-card-body">
        <span className="service-number">{service.number}</span>
        <div className="service-card-copy">
          <h3><Link href={service.href}>{service.title}</Link></h3>
          <p>{service.description}</p>
        </div>
        <Link aria-label={`Read about ${service.title}`} className="round-arrow" href={service.href}><Icon name="arrow" /></Link>
      </div>
    </article>
  );
}

function ServicesSection({
  compact = false,
  content = homeContent.services,
}: {
  compact?: boolean;
  content?: typeof homeContent.services;
}) {
  return (
    <section className={`services-section section-space ${compact ? "services-compact" : ""}`}>
      <div className="site-container">
        <SectionTitle
          description={content.description}
          eyebrow={content.eyebrow}
          title={<HighlightedTitle first={content.titleFirst} highlight={content.titleHighlight} breakBeforeHighlight />}
        />
        <div className="services-grid">
          {carpenterServices.map((service) => <ServiceCard key={service.number} service={service} />)}
        </div>
      </div>
    </section>
  );
}

function HomePageContent() {
  const { hero, about, stats, gallery, testimonial, blog } = homeContent;
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo" />
        <div className="site-container hero-content">
          <span className="hero-eyebrow">{hero.eyebrow} <i /></span>
          <h1>{hero.title}<br /><em>{hero.highlight}</em></h1>
          <p>{hero.description}</p>
          <Link className="button button-gold" href="/services">{siteCopy.callsToAction.discoverLabel} <Icon name="arrow" /></Link>
        </div>
      </section>
      <ServicesSection />
      <section className="home-about section-space">
        <div className="site-container about-grid">
          <div className="about-copy">
            <span className="section-eyebrow section-eyebrow-left">{about.eyebrow}</span>
            <h2><HighlightedTitle first={about.title} highlight={about.highlight} /></h2>
            <p>{about.intro}</p>
            <p>{about.description}</p>
            <Link className="text-link" href="/about">{siteCopy.callsToAction.moreAboutLabel} <Icon name="arrow" /></Link>
          </div>
          <div className="about-photo-wrap">
            <Image alt={about.imageAlt} className="about-photo" fill sizes="(max-width: 800px) 100vw, 50vw" src="/images/carpenter-hero.webp" />
            <div className="experience-badge"><strong>10+</strong><span>Years of<br />Experience</span></div>
          </div>
        </div>
      </section>
      <section className="stats-band">
        <div className="site-container stats-grid">
          {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>
      <GalleryPreview content={gallery} />
      <Testimonials content={testimonial} />
      <BlogPreview content={blog} />
      <CallToAction />
    </>
  );
}

function AboutContent() {
  const { overview, achievements } = aboutContent;
  return (
    <>
      <PageBanner page="about" />
      <section className="about-page-section section-space">
        <div className="site-container about-grid">
          <div className="about-copy">
            <span className="section-eyebrow section-eyebrow-left">{overview.eyebrow}</span>
            <h2><HighlightedTitle first={overview.title} highlight={overview.highlight} /></h2>
            <p>{overview.intro}</p>
            <span className="short-rule" />
            <p>{overview.description}</p>
            <div className="benefits-grid">
              {aboutBenefits.map((benefit) => (
                <div className="benefit-item" key={benefit.title}>
                  <span className="benefit-icon"><Icon name={benefit.icon} /></span>
                  <span><strong>{benefit.title}</strong><small>{benefit.text}</small></span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-photo-wrap">
            <Image alt={overview.imageAlt} className="about-photo" fill sizes="(max-width: 800px) 100vw, 50vw" src="/images/carpenter-hero.webp" />
            <div className="experience-badge"><strong>10+</strong><span>Years of<br />Experience</span></div>
          </div>
        </div>
      </section>
      <section className="stats-band stats-band-image">
        <div className="site-container">
          <SectionTitle eyebrow={achievements.eyebrow} title={<HighlightedTitle first={achievements.title} highlight={achievements.highlight} breakBeforeHighlight />} />
          <div className="stats-grid">
            {achievements.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

function ServicesContent() {
  const content = servicesContent.types;
  return (
    <>
      <PageBanner page="services" />
      <ServicesSection compact content={homeContent.services} />
      <section className="service-types-section section-space">
        <div className="site-container">
          <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
          <div className="service-type-grid">
            {serviceTypes.map((service, index) => (
              <Link className="service-type-card" href="/services-details" key={service}>
                <span className="type-icon"><Icon name={index % 2 ? "design" : "craft"} /></span>
                <strong>{service}</strong><Icon className="type-arrow" name="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

function ServicesDetailContent() {
  const { detail } = servicesContent;
  return (
    <>
      <PageBanner page="services-details" />
      <section className="detail-section section-space">
        <div className="site-container">
          <div className="detail-top-grid">
            <article className="detail-copy">
              <span className="section-eyebrow section-eyebrow-left">{detail.eyebrow}</span>
              <h2><HighlightedTitle first={detail.title} highlight={detail.highlight} breakBeforeHighlight /></h2>
              {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
            <div className="detail-photo">
              <Image alt={detail.imageAlt} fill sizes="(max-width: 760px) 100vw, 35vw" src="/images/custom-dining.webp" />
            </div>
            <aside className="service-sidebar">
              <h3>{detail.serviceListTitle}</h3>
              {serviceTypes.map((service) => <Link href="/services-details" key={service}>{service}<span>›</span></Link>)}
            </aside>
          </div>
          <div className="detail-benefits">
            {detail.benefits.map(([icon, title, text]) => (
              <div className="detail-benefit" key={title}><Icon name={icon as IconName} /><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="related-services section-space">
        <div className="site-container">
          <SectionTitle eyebrow={detail.related.eyebrow} title={<HighlightedTitle first={detail.related.title} highlight={detail.related.highlight} />} description={detail.related.description} />
          <div className="services-grid">{carpenterServices.map((service) => <ServiceCard key={service.number} service={service} />)}</div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

function GalleryPreview({
  preview = false,
  content = galleryContent,
}: {
  preview?: boolean;
  content?: typeof galleryContent;
}) {
  const projects = preview ? projectGallery.slice(0, 4) : projectGallery;
  return (
    <section className="gallery-section section-space">
      <div className="site-container">
        <SectionTitle
          description={content.description}
          eyebrow={content.eyebrow}
          title={<HighlightedTitle first={content.title} highlight={content.highlight} />}
        />
        <div className={`gallery-grid ${preview ? "gallery-preview-grid" : ""}`}>
          {projects.map((project, index) => (
            <Link className={`gallery-item gallery-item-${index + 1}`} href="/contact" key={project.title}>
              <Image alt={`${project.title} custom carpentry project`} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw" src={project.image} />
              <span className="gallery-overlay"><small>{project.category}</small><strong>{project.title}</strong><span className="round-arrow"><Icon name="arrow" /></span></span>
            </Link>
          ))}
        </div>
        {preview && <div className="center-action"><Link className="button button-outline" href="/gallery">{siteCopy.callsToAction.viewProjectsLabel} <Icon name="arrow" /></Link></div>}
      </div>
    </section>
  );
}

function GalleryContent() {
  return <><PageBanner page="gallery" /><GalleryPreview /><CallToAction /></>;
}

function BlogCard({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  return (
    <article className="blog-card">
      <Link className="blog-card-image" href="/blog-details">
        <Image alt={post.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" src={post.image} />
        <span className="date-badge"><strong>{post.day}</strong><small>{post.month} {post.year.slice(-2)}</small></span>
      </Link>
      <div className="blog-card-body">
        <span className="blog-category">{post.category}</span>
        <h3><Link href="/blog-details">{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="read-more" href="/blog-details">{siteCopy.callsToAction.readMoreLabel} <Icon name="arrow" /></Link>
      </div>
      <span className="blog-index">0{index + 1}</span>
    </article>
  );
}

function BlogPreview({ content = homeContent.blog }: { content?: typeof homeContent.blog }) {
  return (
    <section className="blog-section section-space">
      <div className="site-container">
        <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
        <div className="blog-grid">{blogPosts.slice(0, 3).map((post, index) => <BlogCard index={index} key={post.title} post={post} />)}</div>
        <div className="center-action"><Link className="button button-outline" href="/blog">{siteCopy.callsToAction.exploreArticlesLabel} <Icon name="arrow" /></Link></div>
      </div>
    </section>
  );
}

function BlogContent() {
  const content = blogContent;
  return (
    <>
      <PageBanner page="blog" />
      <section className="blog-section section-space">
        <div className="site-container">
          <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
          <div className="blog-grid">{blogPosts.map((post, index) => <BlogCard index={index} key={post.title} post={post} />)}</div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

function BlogDetailContent() {
  const { article } = blogContent;
  return (
    <>
      <PageBanner page="blog-details" />
      <section className="article-section section-space">
        <div className="site-container article-layout">
          <article className="article-content">
            <Image alt={article.imageAlt} className="article-cover" height={620} sizes="(max-width: 850px) 100vw, 65vw" src="/images/project-dining.webp" width={1000} />
            <p className="article-lead">{article.lead}</p>
            {article.sections.map((section, index) => (
              <div key={section.title}>
                <h2>{section.title} <em>{section.highlight}</em></h2>
                <p>{section.body}</p>
                {index === 0 && <div className="article-inline-image"><Image alt="Handcrafted detail in a timber furniture project" height={360} src="/images/service-renovation.webp" width={480} /></div>}
              </div>
            ))}
            <p>{article.closing}</p>
            <Link className="button button-gold" href="/contact">{siteCopy.callsToAction.discussProjectLabel} <Icon name="arrow" /></Link>
          </article>
          <aside className="article-sidebar">
            <div className="sidebar-panel">
              <h2>{article.recentPostsTitle}</h2>
              {blogPosts.slice(1, 5).map((post) => (
                <Link className="recent-post" href="/blog-details" key={post.title}>
                  <Image alt="" height={80} src={post.image} width={90} />
                  <span><strong>{post.title}</strong><small>{post.date}</small></span>
                </Link>
              ))}
            </div>
            <div className="sidebar-panel category-panel">
              <h2>{article.categoriesTitle}</h2>
              {article.categories.map(([category, count]) => (
                <Link href="/blog" key={category}>{category}<span>{count}</span><span>›</span></Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactContent() {
  const content = siteCopy.contact;
  return (
    <>
      <PageBanner page="contact" />
      <section className="contact-section section-space">
        <div className="site-container">
          <div className="contact-layout">
            <div className="contact-details">
              <ContactInfo icon="pin" title={content.locationTitle}>{siteMetadata.address}</ContactInfo>
              <ContactInfo icon="phone" title={content.callTitle}><a href={`tel:${siteMetadata.phoneLink}`}>{siteMetadata.phone}</a><a href={`tel:${siteMetadata.phoneLink}`}>{siteMetadata.phone}</a></ContactInfo>
              <ContactInfo icon="mail" title={content.emailTitle}><a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a><a href={`mailto:${siteMetadata.email}`}>{content.supportEmail}</a></ContactInfo>
              <ContactInfo icon="clock" title={content.workingHoursTitle}>{content.workingHours}<br />{content.sundayHours}</ContactInfo>
            </div>
            <form action={`mailto:${siteMetadata.email}`} className="contact-form" encType="text/plain" method="post">
              <span className="section-eyebrow section-eyebrow-left">{content.formEyebrow}</span>
              <h2>{content.formTitle}</h2>
              <p>{content.formDescription}</p>
              <div className="form-grid">
                <label><span className="sr-only">{content.nameLabel}</span><input autoComplete="name" name="Name" placeholder={content.namePlaceholder} required /></label>
                <label><span className="sr-only">{content.emailLabel}</span><input autoComplete="email" name="Email" placeholder={content.emailPlaceholder} required type="email" /></label>
                <label><span className="sr-only">{content.phoneLabel}</span><input autoComplete="tel" name="Phone" placeholder={content.phonePlaceholder} required type="tel" /></label>
                <label><span className="sr-only">{content.subjectLabel}</span><input name="Subject" placeholder={content.subjectPlaceholder} required /></label>
                <label className="form-message"><span className="sr-only">{content.messageLabel}</span><textarea name="Message" placeholder={content.messagePlaceholder} required rows={4} /></label>
              </div>
              <button className="button button-gold" type="submit">{content.submitLabel} <Icon name="arrow" /></button>
            </form>
            <div className="store-photo">
              <Image alt="The WoodHaus carpentry and woodworking studio" fill sizes="(max-width: 800px) 100vw, 30vw" src="/images/workshop-store.webp" />
            </div>
          </div>
          <div className="contact-bottom-grid">
            <div className="map-card"><span className="map-label">{content.mapLabel}</span><span className="map-road map-road-one" /><span className="map-road map-road-two" /><span className="map-pin"><Icon name="pin" /></span><strong>{content.mapCity}</strong><small>{content.mapCountry}</small></div>
            <div className="contact-promises">
              {content.benefits.map(([icon, title, text]) => <div className="promise-item" key={title}><Icon name={icon as IconName} /><span><strong>{title}</strong><small>{text}</small></span></div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return <div className="contact-info"><span className="contact-info-icon"><Icon name={icon} /></span><span><strong>{title}</strong><small>{children}</small></span></div>;
}

function Testimonials({ content = homeContent.testimonial }: { content?: typeof homeContent.testimonial }) {
  return (
    <section className="testimonial-section section-space">
      <div className="site-container">
        <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} />
        <div className="testimonial-card">
          <span aria-hidden="true" className="quote-mark">“</span>
          <p>{content.quote}</p>
          <div className="testimonial-author"><span className="author-avatar">{content.initial}</span><span><strong>{content.author}</strong><small>{content.detail}</small></span></div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="site-container cta-content">
        <div><span className="section-eyebrow">{siteCopy.callsToAction.buildEyebrow}</span><h2>{siteCopy.callsToAction.projectTitle}</h2><p>{siteCopy.callsToAction.projectDescription}</p></div>
        <Link className="button button-gold" href="/contact">{siteCopy.callsToAction.contactLabel} <Icon name="arrow" /></Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-about"><Brand /><p>{siteCopy.footer.description}</p><a href={`tel:${siteMetadata.phoneLink}`}><Icon name="phone" /> {siteMetadata.phone}</a></div>
        <div className="footer-links"><h2>{siteCopy.footer.quickLinksTitle}</h2>{siteNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
        <div className="footer-links"><h2>{siteCopy.footer.servicesTitle}</h2>{serviceTypes.slice(0, 5).map((service) => <Link href="/services-details" key={service}>{service}</Link>)}</div>
        <div className="footer-contact"><h2>{siteCopy.footer.contactTitle}</h2><p><Icon name="pin" />{siteMetadata.address}</p><a href={`mailto:${siteMetadata.email}`}><Icon name="mail" />{siteMetadata.email}</a><span><Icon name="clock" />{siteCopy.contact.workingHours}</span></div>
      </div>
      <div className="footer-bottom"><div className="site-container">{siteCopy.footer.copyright}<span>{siteCopy.footer.closing}</span></div></div>
    </footer>
  );
}

export function WoodHausSite({ page }: { page: SitePageName }) {
  let content: React.ReactNode;
  switch (page) {
    case "home": content = <HomePageContent />; break;
    case "about": content = <AboutContent />; break;
    case "services": content = <ServicesContent />; break;
    case "services-details": content = <ServicesDetailContent />; break;
    case "gallery": content = <GalleryContent />; break;
    case "blog": content = <BlogContent />; break;
    case "blog-details": content = <BlogDetailContent />; break;
    case "contact": content = <ContactContent />; break;
  }

  return <><Header page={page} /><main>{content}</main><Footer /></>;
}
