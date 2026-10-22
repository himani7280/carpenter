import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/data";

export function Brand({
  imageClassName = "h-auto w-[245px] max-[1100px]:w-[220px] max-[800px]:w-[195px] max-[560px]:w-[165px]",
  variant = "default",
}: {
  imageClassName?: string;
  variant?: "default" | "white";
}) {
  return (
    <Link aria-label={`${siteCopy.brand.name} home`} className="inline-flex flex-none items-center gap-[7px] text-brown" href="/">
      <Image
        alt={`${siteCopy.brand.name} ${siteCopy.brand.descriptor}`}
        className={imageClassName}
        height={107}
        src={variant === "white" ? "/images/woodhaus-logo-light.webp" : "/images/woodhaus-logo.webp"}
        width={320}
      />
    </Link>
  );
}
