import Link from "next/link";
import { blogPosts, homeContent } from "@/data";
import { AutoCarousel } from "@/components/common/auto-carousel";
import { HighlightedTitle, SectionTitle } from "@/components/common/page-elements";
import { BlogCard } from "@/components/blog/blog-card";
import { Icon } from "@/components/common/icon";
import { button, buttonOutline, sectionSpace } from "@/components/common/styles";

export function BlogPreview({ content = homeContent.blog }: { content?: typeof homeContent.blog }) {
  const posts = blogPosts.slice(0, 5);

  return (
    <section className={`bg-[#fbfaf8] ${sectionSpace}`}>
      <div className="site-container">
        <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
        <AutoCarousel className="block overflow-hidden [&_.swiper-slide]:h-auto! [&_article]:h-full" controls controlsLabel="article" slidesPerView={3}>
          {posts.map((post, index) => <BlogCard index={index} key={post.title} post={post} />)}
        </AutoCarousel>
        <div className="mt-[30px] flex justify-center max-[560px]:mt-[22px]"><Link className={`${button} ${buttonOutline}`} href="/blog">Explore All Articles <Icon name="arrow" /></Link></div>
      </div>
    </section>
  );
}
