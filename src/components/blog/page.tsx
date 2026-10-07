import { blogContent, blogPosts } from "@/data";
import { HighlightedTitle, PageBanner, SectionTitle } from "@/components/common/page-elements";
import { BlogCard } from "@/components/blog/blog-card";
import { sectionSpace } from "@/components/common/styles";

export function BlogPage() {
  const content = blogContent;

  return (
    <>
        <PageBanner page="blog" />
        <section className={`bg-[#fbfaf8] ${sectionSpace}`}>
          <div className="site-container">
            <SectionTitle eyebrow={content.eyebrow} title={<HighlightedTitle first={content.title} highlight={content.highlight} />} description={content.description} />
            <div className="grid grid-cols-3 gap-6 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-4">{blogPosts.map((post, index) => <BlogCard index={index} key={post.slug} post={post} />)}</div>
          </div>
        </section>
    </>
  );
}
