import Image from "next/image";
import Link from "next/link";
import { blogContent, blogPosts, pageContent } from "@/data";
import { PageBanner } from "@/components/common/page-elements";
import { Icon } from "@/components/common/icon";
import { sectionSpace } from "@/components/common/styles";

const articleText = "text-[14px] leading-[1.8] text-[#4c4844] max-[560px]:text-[13px]";
const articleTitle = "font-heading mt-6 text-[clamp(20px,2vw,26px)] leading-[1.22] font-bold tracking-[-0.5px] text-ink after:mt-2.5 after:mb-2.5 after:block after:h-0.5 after:w-14 after:bg-accent";
const panel = "rounded-[7px] border border-[#e9e5df] p-[19px]";
const panelTitle = "font-heading mb-3 text-[18px] font-bold after:mt-2 after:block after:h-0.5 after:w-12 after:bg-accent";

const Em = ({ children }: { children: string }) => <em className="not-italic text-bronze">{children}</em>;

type BlogPost = (typeof blogPosts)[number];

export function BlogDetailsPage({ post }: { post: BlogPost }) {
  const { article } = blogContent;
  const [first, second] = article.sections;

  return (
    <>
        <PageBanner
          page="blog-details"
          title={pageContent["blog-details"].title}
          customBreadcrumb={{ label: post.title, parent: { href: "/blog", label: "Blog" } }}
        />
        <section className={sectionSpace}>
          <div className="site-container grid grid-cols-[minmax(0,2fr)_minmax(260px,0.8fr)] items-start gap-10 max-[800px]:grid-cols-1 max-[560px]:gap-[25px]">
            <article>
              <Image alt={post.title} className="h-auto max-h-[470px] w-full rounded-md object-cover max-[560px]:max-h-[280px]" height={620} sizes="(max-width: 850px) 100vw, 65vw" src={post.image} width={1000} />
              <div className="mt-4 mb-3 flex flex-wrap items-center gap-3">
                <Link className="inline-block rounded-[3px] bg-[#f5eee6] px-2.5 py-1 text-[11px] font-bold tracking-[1px] text-[#885624] uppercase transition-all duration-200 hover:bg-accent hover:text-white" href="/blog">
                  {post.category}
                </Link>
                <span className="text-[13px] text-[#9d6937]">{post.date}</span>
              </div>
              <h1 className="font-heading mb-3.5 text-[clamp(28px,2.8vw,38px)] leading-[1.15] font-bold tracking-[-0.8px] text-ink">{post.title}</h1>
              <p className={`${articleText}`}>{article.lead}</p>

              <div data-motion-effect="fade-up">
                <h2 className={articleTitle}>{first.title} <Em>{first.highlight}</Em></h2>
                <p className={articleText}>{first.body}</p>
              </div>

              <div className="flow-root" data-motion-effect="fade-up">
                <h2 className={articleTitle}>{second.title} <Em>{second.highlight}</Em></h2>
                <div className="float-right mb-3 ml-6 w-[min(48%,390px)] max-[560px]:float-none max-[560px]:mx-0 max-[560px]:w-full"><Image alt="Handcrafted detail in a timber furniture project" className="h-auto w-full rounded-[5px]" height={360} src="/images/blog-detail-craft-hd.webp" width={480} /></div>
                <p className={articleText}>{second.body}</p>
              </div>

              <div data-motion-effect="fade-up">
                <h2 className={articleTitle}>{article.types.title} <Em>{article.types.highlight}</Em></h2>
                <p className={articleText}>{article.types.intro}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 max-[560px]:grid-cols-1">
                  {article.types.items.map((item) => (
                    <li className="flex items-center gap-2.5 text-[14px] text-ink" key={item}><span className="grid size-5.5 flex-none place-items-center rounded-full bg-accent text-white [&_svg]:size-3"><Icon name="check" /></span>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flow-root" data-motion-effect="fade-up">
                <h2 className={articleTitle}>{article.sustainable.title} <Em>{article.sustainable.highlight}</Em></h2>
                <div className="float-right mb-3 ml-6 w-[min(42%,340px)] max-[560px]:float-none max-[560px]:mx-0 max-[560px]:w-full"><Image alt="Wooden sideboard in a warm modern interior" className="h-auto w-full rounded-[5px]" height={360} src="/images/project-living-hd.webp" width={480} /></div>
                <p className={articleText}>{article.sustainable.body}</p>
              </div>

              <div data-motion-effect="fade-up">
                <h2 className={articleTitle}>{article.closingTitle}</h2>
                <p className={articleText}>{article.closing}</p>
              </div>

            </article>
            <aside className="min-[801px]:sticky min-[801px]:top-[134px] min-[801px]:self-start grid gap-5 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1">
              <div className={panel}>
                <h2 className={panelTitle}>{article.recentPostsTitle}</h2>
                {blogPosts.slice(0, 4).map((p) => (
                  <Link
                    className="group grid grid-cols-[76px_minmax(0,1fr)] gap-3 border-b border-[#eee9e4] py-2.5 last:border-0 last:pb-0 -mx-2 px-2 rounded-[6px] transition-all duration-200 hover:bg-[#fbf7f2]"
                    href={`/blog/${p.slug}`}
                    key={p.slug}
                  >
                    <div className="relative h-[68px] w-[76px] overflow-hidden rounded-[4px] bg-[#f0eae3]">
                      <Image
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-108"
                        height={80}
                        src={p.image}
                        width={90}
                      />
                    </div>
                    <span className="flex flex-col justify-center min-w-0">
                      <span className="mb-0.5 text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#9d6937] transition-colors duration-200 group-hover:text-accent truncate">
                        {p.category}
                      </span>
                      <strong className="block text-[13px] leading-[1.35] text-ink transition-colors duration-200 group-hover:text-[#9e5928] line-clamp-2">
                        {p.title}
                      </strong>
                      <small className="mt-1 block text-[11.5px] text-[#6e6862]">
                        {p.date}
                      </small>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[7px] bg-[#2b1e16] bg-[url('/images/carpenter-hero.jpeg')] bg-position-[center_40%] bg-cover p-7 py-8 text-white before:absolute before:inset-0 before:bg-[rgb(31_21_15/78%)] max-[800px]:col-span-full">
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-full bg-accent text-white outline-1 outline-offset-4 outline-accent/50 [&_svg]:size-7"><Icon name="headset" /></span>
                  <h2 className="font-heading mt-3.5 text-[22px] font-bold">{article.help.title}</h2>
                  <p className="mt-2.5 mb-6 max-w-[220px] text-[14px] leading-[1.6] text-white/90">{article.help.text}</p>
                  <Link className="inline-flex min-h-11.5 items-center gap-3 rounded-sm bg-[linear-gradient(110deg,#9e5928,#c48748)] px-5 text-[12px] font-bold tracking-[1px] uppercase transition-colors hover:bg-none hover:bg-[#75421f] [&_svg]:size-4" href="/contact">{article.help.cta} <Icon name="arrow" /></Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
    </>
  );
}
