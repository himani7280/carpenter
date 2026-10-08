import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data";
import { Icon } from "@/components/common/icon";

export function BlogCard({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#e9e5df] bg-white shadow-[0_6px_20px_rgb(40_32_24/5%)]" data-motion-hover-flip={index % 2 ? "right" : "left"} data-motion-effect="zoom-in">
      <Link className="relative block h-[210px] overflow-hidden bg-[#e5d9cd] max-[560px]:h-[195px]" href={href}>
        <Image alt={post.title} className="object-cover transition-transform duration-[280ms] group-hover:scale-[1.04]" fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" src={post.image} />
        <span className="absolute top-0 left-[15px] grid min-h-[67px] w-[61px] content-center rounded-br-[14px] bg-white text-center"><strong className="text-[25px] leading-none">{post.day}</strong><i className="mx-auto mt-1 h-0.5 w-6 bg-accent" /><small className="mt-1 text-[9px] font-bold">{post.month} {post.year.slice(-2)}</small></span>
      </Link>
      <div className="px-5 pt-[17px] pb-5">
        <h3 className="mt-[9px] mb-2 text-[18px] leading-[1.35] max-[560px]:text-[17px]" data-motion-flip={index % 2 ? "right" : "left"}><Link href={href}>{post.title}</Link></h3>
        <p className="mb-3 line-clamp-2 text-[13px] leading-[1.6] text-[#544f4b]">{post.excerpt}</p>
        <Link className="inline-flex items-center gap-[9px] text-[11px] font-extrabold tracking-[1px] text-[#865326] uppercase [&_svg]:size-4" href={href}>Read More <Icon name="arrow" /><i className="h-px w-12 bg-[#c9a27c]" /></Link>
      </div>
      <span className="absolute right-3.5 bottom-[17px] text-[12px] text-[#c8b6a4]">0{index + 1}</span>
    </article>
  );
}

