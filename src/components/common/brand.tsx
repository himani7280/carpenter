import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/data";

export function Brand({ imageClassName = "h-auto w-77.5 max-[1100px]:w-62.5 max-[800px]:w-45 max-[560px]:w-32.5" }: { imageClassName?: string }) {
  return (
    <Link aria-label={`${siteCopy.brand.name} home`} className="inline-flex flex-none items-center gap-[7px] text-brown" href="/">
      <Image
        alt={`${siteCopy.brand.name} ${siteCopy.brand.descriptor}`}
        className={imageClassName}
        height={107}
        src="/images/woodhaus-logo.png"
        width={320}
      />
    </Link>
  );
}
