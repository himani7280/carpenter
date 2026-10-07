"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Starting states for data-motion-effect values; each animates to its natural position.
// Starting states for data-motion-effect values; each animates to its natural position.
// Slide distances are capped so tall blocks don't sweep across the content above them.
const motionEffects: Record<string, (element: HTMLElement) => gsap.TweenVars> = {
  "fade-up": (element) => ({ y: -Math.min(element.offsetHeight, 140) }),
  "fade-down": (element) => ({ y: Math.min(element.offsetHeight, 140) }),
  "fade-left": (element) => ({ x: Math.min(element.offsetWidth, 160) }),
  "fade-right": (element) => ({ x: -Math.min(element.offsetWidth, 160) }),
  "zoom-in": () => ({ scale: 0.5 }),
  "zoom-out": () => ({ scale: 1.2 }),
};

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia();
    const hoverCleanup: (() => void)[] = [];

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const main = document.querySelector("main");
      if (!main) return;

      const context = gsap.context(() => {
        const header = document.querySelector("#site-header");
        if (header) gsap.fromTo(header, { y: -10 }, { y: 0, duration: 0.65, ease: "power3.out" });

        if (pathname === "/") {
          const hero = gsap.timeline({ defaults: { duration: 0.72, ease: "power3.out" } });
          hero.fromTo("[data-hero-eyebrow]", { y: 18 }, { y: 0 })
            .fromTo("[data-hero] h1", { y: 36 }, { y: 0 }, "-=0.42")
            .fromTo("[data-hero] p, [data-hero] a", { y: 22 }, { y: 0, stagger: 0.1 }, "-=0.35");
          gsap.fromTo("[data-hero-photo]", { scale: 1.08 }, { scale: 1, duration: 1.5, ease: "power2.out" });
        }

        gsap.utils.toArray<HTMLElement>("[data-motion-effect]", main).forEach((element) => {
          const effect = motionEffects[element.dataset.motionEffect ?? ""];
          if (!effect) return;

          const show = () => {
            if (document.visibilityState !== "visible") return;
            gsap.fromTo(element, { ...effect(element), autoAlpha: 0 }, { x: 0, y: 0, scale: 1, autoAlpha: 1, duration: 2, ease: "power2.out", overwrite: "auto" });
          };
          const hide = () => {
            if (document.visibilityState !== "visible") return;
            gsap.to(element, { ...effect(element), autoAlpha: 0, duration: 2, ease: "power2.in", overwrite: "auto" });
          };

          ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            onEnter: show,
            onEnterBack: show,
            onLeave: hide,
            onLeaveBack: hide,
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-motion-reveal]", main).forEach((element, index) => {
          gsap.fromTo(element, { y: 32 }, {
            y: 0,
            duration: 0.72,
            delay: (index % 3) * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-motion-gallery-flip]", main).forEach((image, index) => {
          const angle = image.dataset.motionGalleryFlip === "right" ? 90 : -90;
          const flipImage = () => {
            if (document.visibilityState !== "visible") return;
            gsap.fromTo(image, { rotationY: angle, transformPerspective: 700, transformOrigin: "50% 50%" }, {
              rotationY: 0,
              duration: 1.05,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          // Phones and tablets: a soft zoom-and-rise reveal instead of the 3D flip.
          if (window.matchMedia("(max-width: 800px), (hover: none)").matches) {
            gsap.fromTo(image, { scale: 1.25, y: 36, autoAlpha: 0 }, {
              scale: 1,
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              delay: (index % 2) * 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: { trigger: image.parentElement ?? image, start: "top 94%", once: true },
            });
            return;
          }

          gsap.fromTo(image, { scale: 1.12, clipPath: "inset(8% 0 0)", rotationY: angle, transformPerspective: 700 }, {
            scale: 1,
            clipPath: "inset(0% 0 0)",
            rotationY: 0,
            duration: 1.1,
            delay: (index % 4) * 0.08,
            ease: "power3.out",
            onComplete: () => gsap.set(image, { clearProps: "transform,clipPath" }),
            scrollTrigger: { trigger: image.parentElement ?? image, start: "top 92%", once: true },
          });

          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            image.addEventListener("pointerenter", flipImage);
            hoverCleanup.push(() => image.removeEventListener("pointerenter", flipImage));
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-motion-flip]", main).forEach((element) => {
          const direction = element.dataset.motionFlip;
          const axis = direction === "up" || direction === "down" ? "rotationX" : "rotationY";
          const angle = direction === "left" || direction === "up" ? -90 : 90;
          const flipFrom = axis === "rotationX" ? { rotationX: angle, rotationY: 0 } : { rotationX: 0, rotationY: angle };

          const flipIn = () => {
            if (document.visibilityState !== "visible") return;
            gsap.killTweensOf(element);
            gsap.fromTo(element, { ...flipFrom, autoAlpha: 0, transformPerspective: 400, transformOrigin: "50% 50%" }, {
              rotationX: 0,
              rotationY: 0,
              autoAlpha: 1,
              duration: 2,
              ease: "power2.out",
              overwrite: true,
            });
          };
          const flipOut = () => {
            if (document.visibilityState !== "visible") return;
            gsap.to(element, { ...flipFrom, autoAlpha: 0, duration: 2, ease: "power2.in", overwrite: true });
          };

          ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            onEnter: flipIn,
            onEnterBack: flipIn,
            onLeave: flipOut,
            onLeaveBack: flipOut,
          });
        });

        const interactiveCards = gsap.utils.toArray<HTMLElement>("[data-motion-hover-flip]", main);
        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
          && window.matchMedia("(min-width: 801px)").matches;

        interactiveCards.forEach((element) => {
          const angle = element.dataset.motionHoverFlip === "right" ? 90 : -90;
          const isFlipping = () => gsap.getTweensOf(element).some((tween) => tween.isActive() && "rotationY" in tween.vars);
          const flipToFace = (duration: number) => {
            // Ignore re-triggers while a flip is still running so quick mouse moves don't restart it.
            if (document.visibilityState !== "visible" || isFlipping()) return;
            gsap.fromTo(element, { rotationY: angle, transformPerspective: 700, transformOrigin: "50% 50%" }, {
              rotationY: 0,
              duration,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          // One slow flip as the card scrolls into view, on every device.
          ScrollTrigger.create({ trigger: element, start: "top 88%", once: true, onEnter: () => flipToFace(1.0) });

          if (canHover) {
            const flipOnHover = () => flipToFace(1.1);
            element.addEventListener("pointerenter", flipOnHover);
            element.addEventListener("focus", flipOnHover);
            hoverCleanup.push(() => {
              element.removeEventListener("pointerenter", flipOnHover);
              element.removeEventListener("focus", flipOnHover);
            });
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-motion-counter]", main).forEach((element) => {
          const [number, suffix = ""] = (element.textContent ?? "").trim().match(/^([\d,]+)(.*)$/)?.slice(1) ?? [];
          const target = Number(number?.replaceAll(",", ""));
          if (!Number.isFinite(target)) return;

          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.7,
            ease: "power2.out",
            onUpdate: () => {
              if (counter.value > 0) element.textContent = `${Math.floor(counter.value)}${suffix}`;
            },
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          });
        });
        ScrollTrigger.refresh();
      }, main);

      return () => {
        hoverCleanup.forEach((cleanup) => cleanup());
        context.revert();
      };
    });

    return () => {
      motion.revert();
    };
  }, [pathname]);

  return null;
}