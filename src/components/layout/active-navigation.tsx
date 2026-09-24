"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/domain/content/types";
export function ActiveNavigation({ items }: { items: NavigationItem[] }) {
  const path = usePathname();
  return (
    <nav className="desktop-nav" aria-label="Hauptnavigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={path === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
