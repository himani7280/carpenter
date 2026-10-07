"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/common/icon";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      setVisible(window.scrollY > 200);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 grid size-[50px] cursor-pointer place-items-center rounded-full bg-accent text-white shadow-[0_6px_18px_rgb(30_20_12/35%)] transition duration-300 hover:-translate-y-1 hover:bg-[#d08b3e] max-[560px]:right-4 max-[560px]:bottom-4 max-[560px]:size-11 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      tabIndex={visible ? 0 : -1}
      type="button"
    >
      <svg aria-hidden="true" className="absolute inset-0 size-full -rotate-90" fill="none" viewBox="0 0 50 50">
        <circle className="stroke-white/30" cx="25" cy="25" r={RADIUS} strokeWidth="2.5" />
        <circle className="stroke-white" cx="25" cy="25" r={RADIUS} strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE * (1 - progress)} strokeLinecap="round" strokeWidth="2.5" />
      </svg>
      <Icon className="size-[19px]" name="arrow-up" />
    </button>
  );
}
