import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/common/icon";

export function ContactInfo({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-[91px] items-center gap-[17px] rounded-md border border-[#ebe7e2] px-4 py-[13px] max-[560px]:min-h-[76px]" data-motion-effect="fade-right">
      <span className="grid size-[58px] flex-none place-items-center rounded-full bg-[#f7efe6] text-[#a06a36] max-[560px]:size-[47px] [&_svg]:size-[25px]"><Icon name={icon} /></span>
      <span><strong className="mb-1.5 block text-[14px]">{title}</strong><small className="block text-[11px] leading-[1.55] text-[#504c48] [&_a]:block">{children}</small></span>
    </div>
  );
}
