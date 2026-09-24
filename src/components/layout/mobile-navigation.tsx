"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "@/domain/content/types";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="mobile-menu-trigger"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
        <span>Menü</span>
      </button>

      <div
        className="mobile-menu"
        data-open={isOpen ? "true" : "false"}
        id="mobile-navigation"
      >
        <div className="mobile-menu__header">
          <span className="wordmark" aria-hidden="true">
            KLOTZ
          </span>
          <button
            ref={closeRef}
            aria-label="Menü schließen"
            className="icon-button"
            type="button"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile Hauptnavigation" className="mobile-menu__nav">
          {items.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>
              <span className="mobile-menu__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <Link href="/projekt-anfragen" onClick={closeMenu}>
            Projekt anfragen
          </Link>
        </div>
      </div>
    </>
  );
}
