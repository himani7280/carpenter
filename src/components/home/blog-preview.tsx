import { blogPosts, homeContent } from "@/data";
import { AutoCarousel } from "@/components/common/auto-carousel";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { BlogCard } from "@/components/blog/blog-card";

export function BlogPreview({ content = homeContent.blog, className }: { content?: typeof homeContent.blog; className?: string } = {}) {
  const posts = blogPosts.slice(0, 5);

  return (
    <section className={className || "pt-3 pb-15 max-[800px]:pt-2.5 max-[800px]:pb-12 max-[560px]:pt-2 max-[560px]:pb-9"}>
      <div className="site-container">
        <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
        <AutoCarousel className="block overflow-hidden [&_.swiper-slide]:h-auto! [&_article]:h-full" controls controlsLabel="article" slidesPerView={3}>
          {posts.map((post, index) => <BlogCard index={index} key={post.title} post={post} />)}
        </AutoCarousel>
      </div>
    </section>
  );
}
