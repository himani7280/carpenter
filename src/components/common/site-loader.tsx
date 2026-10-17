"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Dismiss loader once page is fully loaded or after a brief safety timer
    const handleLoad = () => {
      // Small timeout to ensure fonts and critical assets have rendered smoothly
      const timer = setTimeout(() => {
        setLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Failsafe timer (max 2.5s) so loader never blocks the user
      const failsafe = setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(failsafe);
      };
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      // Unmount after fade transition finishes
      const timer = setTimeout(() => setHidden(true), 600);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={!loading}
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#181310] transition-opacity duration-500 ease-out ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      id="site-preloader"
    >
      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Soft radial golden glow behind logo */}
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgb(196_135_72/22%)_0%,transparent_70%)] blur-2xl" />

        {/* Logo / Timber Craft Icon */}
        <div className="relative mb-5 flex size-20 items-center justify-center rounded-2xl border border-[#c48748]/35 bg-[#251b14] shadow-[0_14px_40px_rgb(0_0_0/50%)]">
          <svg
            className="size-11 text-[#d49b5a] animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {/* Chisel & Square Woodworking Emblem */}
            <path
              d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-8h6v8M9 9h6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Brand Name with Open Sans font */}
        <h2 className="font-heading text-[25px] font-bold tracking-[3.5px] text-white uppercase sm:text-[28px]">
          Wood<span className="text-[#d49b5a]">Haus</span>
        </h2>

        {/* Tagline in Poppins font */}
        <p className="font-body mt-2 text-[12px] font-medium tracking-[2.5px] text-[#f2e8dd]/75 uppercase sm:text-[13px]">
          Handcrafted Woodwork &amp; Joinery
        </p>

        {/* Sleek Golden Progress Shimmer Bar */}
        <div className="relative mt-7 h-1 w-44 overflow-hidden rounded-full bg-white/10 sm:w-56">
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,transparent,#c48748,#e4b778,#c48748,transparent)] animate-[shimmer_1.4s_infinite]" />
        </div>

        <span className="font-body mt-3 text-[10px] tracking-[1.5px] text-white/40 uppercase">
          Crafting perfection...
        </span>
      </div>
    </div>
  );
}
