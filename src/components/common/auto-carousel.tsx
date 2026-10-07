"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@/components/common/icon";
import "swiper/css";
import "swiper/css/effect-fade";

const arrow = "absolute top-[42%] z-10 max-[560px]:static grid size-[38px] cursor-pointer place-items-center rounded-full bg-[#a96f32] text-white transition duration-180 hover:scale-[1.08] hover:bg-[#75441f] [&_svg]:size-[17px]";

export function AutoCarousel({
  children,
  className,
  fade = false,
  slidesPerView = 3,
  speed = 1500,
  controls = false,
  controlsLabel = "testimonial",
}: {
  children: ReactNode[];
  className: string;
  fade?: boolean;
  slidesPerView?: number;
  speed?: number;
  controls?: boolean;
  controlsLabel?: string;
}) {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      const enabled = !motionPreference.matches;
      setAutoplayEnabled(enabled);
      if (children.length < 2 || !swiperRef.current) return;
      if (enabled) swiperRef.current.autoplay.start();
      else swiperRef.current.autoplay.stop();
    };
    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, [children.length]);

  return (
    <div className={controls ? "relative px-[46px] max-[560px]:px-0" : undefined}>
      <Swiper
        allowTouchMove={!fade}
        autoplay={autoplayEnabled && children.length > 1 ? { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false } : false}
        breakpoints={fade ? undefined : {
          0: { slidesPerView: 1, spaceBetween: 18 },
          650: { slidesPerView: Math.min(2, slidesPerView), spaceBetween: 22 },
          1000: { slidesPerView, spaceBetween: 28 },
        }}
        className={className}
        effect={fade ? "fade" : "slide"}
        fadeEffect={{ crossFade: true }}
        loop={children.length > 1}
        modules={[Autoplay, EffectFade]}
        onBeforeDestroy={(swiper) => { if (swiperRef.current === swiper) swiperRef.current = null; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveIndex(swiper.realIndex);
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) swiper.autoplay.stop();
        }}
        slidesPerView={fade ? 1 : slidesPerView}
        speed={speed}
      >
        {children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
      </Swiper>
      {controls && (
        <div className="mt-8 flex min-h-[34px] items-center justify-center gap-3" aria-label={`${controlsLabel} controls`}>
          <button aria-label={`Previous ${controlsLabel}`} className={`${arrow} left-0 [&_svg]:rotate-180`} onClick={() => swiperRef.current?.slidePrev()} type="button"><Icon name="arrow" /></button>
          <div className="flex items-center gap-2">
            {children.map((_, index) => (
              <button aria-label={`Show ${controlsLabel} ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} className={`size-[9px] cursor-pointer rounded-full border border-[#b88a58] p-0 transition duration-180 ${activeIndex === index ? "scale-[1.12] bg-accent" : "bg-transparent"}`} key={index} onClick={() => swiperRef.current?.slideToLoop(index)} type="button" />
            ))}
          </div>
          <button aria-label={`Next ${controlsLabel}`} className={`${arrow} right-0`} onClick={() => swiperRef.current?.slideNext()} type="button"><Icon name="arrow" /></button>
        </div>
      )}
    </div>
  );
}