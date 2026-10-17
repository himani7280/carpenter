import type { Metadata } from "next";
import { getPageMetadata } from "@/data";
import { PageBanner, SectionTitle } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export const metadata: Metadata = getPageMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner page="privacy-policy" />
      <section className={sectionSpace}>
        <div className="site-container">
          <SectionTitle eyebrow="Our Policies" title="Privacy Policy" />
          <div className="w-full">
            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">1. What is this Privacy Policy about?</h3>
              <p className="text-[15px] leading-relaxed text-body">
                Welcome to WoodHaus. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
              </p>
            </div>
            
            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">2. What Data Do We Collect?</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="grid gap-3 pl-5 text-[14.5px] leading-relaxed text-body list-disc marker:text-[#c7863d]">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>
            </div>

            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">3. How Do We Use Your Data?</h3>
              <p className="mb-4 text-[15px] leading-relaxed text-body">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="grid gap-3 pl-5 text-[14.5px] leading-relaxed text-body list-disc marker:text-[#c7863d]">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
