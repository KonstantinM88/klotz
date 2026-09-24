"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteSettings } from "@/domain/content/types";
export function MobileActionBar({ site }: { site: SiteSettings }) {
  const path = usePathname();
  const [nearFooter, setNearFooter] = useState(false);
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) =>
      setNearFooter(entry?.isIntersecting ?? false),
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  if (path === "/projekt-anfragen" || nearFooter) return null;
  return (
    <nav className="mobile-action-bar" aria-label="Schnellkontakt">
      <a href={site.phoneHref}>Anrufen</a>
      <Link href="/projekt-anfragen" prefetch={false}>
        Projekt anfragen ↗
      </Link>
    </nav>
  );
}
