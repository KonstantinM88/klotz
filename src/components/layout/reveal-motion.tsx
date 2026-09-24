"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
/** Content stays visible before hydration and without JavaScript. */
export function RevealMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { transform: "translateY(24px)", opacity: 0.35 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            { duration: 650, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const stopMotion = () => {
      if (preference.matches) animations.forEach((a) => a.cancel());
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      preference.removeEventListener("change", stopMotion);
    };
  }, [pathname]);
  return null;
}
