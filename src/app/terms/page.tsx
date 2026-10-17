import type { Metadata } from "next";
import { getPageMetadata } from "@/data";
import { PageBanner, SectionTitle } from "@/components/common/page-elements";
import { sectionSpace } from "@/components/common/styles";

export const metadata: Metadata = getPageMetadata("terms");

export default function TermsPage() {
  return (
    <>
      <PageBanner page="terms" />
      <section className={sectionSpace}>
        <div className="site-container">
          <SectionTitle eyebrow="Terms of Service" title="Terms & Conditions" />
          <div className="w-full">
            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">1. What are our Terms of Use?</h3>
              <p className="text-[15px] leading-relaxed text-body">
                By accessing this Website, accessible from woodhaus.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.
              </p>
            </div>
            
            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">2. Do we grant Use Licenses?</h3>
              <p className="text-[15px] leading-relaxed text-body">
                Permission is granted to temporarily download one copy of the materials on WoodHaus&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">3. What are the Disclaimers &amp; Limitations?</h3>
              <p className="text-[15px] leading-relaxed text-body">
                All the materials on WoodHaus’s Website are provided &quot;as is&quot;. WoodHaus makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, WoodHaus or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on WoodHaus’s Website.
              </p>
            </div>
            
            <div className="mb-6 rounded-xl border border-[#eee8e1] bg-white p-6 shadow-[0_4px_16px_rgb(40_30_20/4%)] max-[560px]:p-5">
              <h3 className="mb-4 inline-block rounded-md bg-[#f6dfc8] px-4 py-2 text-[17px] font-bold text-[#8c4a1c]">4. Will there be Revisions and Errata?</h3>
              <p className="text-[15px] leading-relaxed text-body">
                The materials appearing on WoodHaus’s Website may include technical, typographical, or photographic errors. WoodHaus will not promise that any of the materials in this Website are accurate, complete, or current.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
