import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata } from "@/data";
import { PageBanner } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export const metadata: Metadata = getPageMetadata("thank-you");

export default function ThankYouPage() {
  return (
    <>
      <PageBanner page="thank-you" />
      <section className={`bg-white text-center ${sectionSpace}`}>
        <div className="site-container max-w-2xl">
          <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-[#f6dfc8] text-[#8c4a1c]">
            <svg aria-hidden="true" className="size-12" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-ink">Thank You!</h2>
          <p className="mb-8 text-lg text-body">
            Your message has been successfully sent. Our team will get back to you shortly.
          </p>
          <Link
            className="inline-flex min-h-[50px] items-center justify-center rounded-sm bg-[#c7863d] px-8 text-[15px] font-bold text-white transition-colors hover:bg-[#a96e30]"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
