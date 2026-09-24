"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/domain/content/types";
export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  function close() {
    dialogRef.current?.close();
  }
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onClose() {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        onClick={() => {
          dialogRef.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        Menü <span aria-hidden="true">☰</span>
      </button>
      <dialog
        id="mobile-navigation"
        ref={dialogRef}
        className="mobile-menu"
        aria-label="Hauptmenü"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="mobile-menu__header">
          <span>KLOTZ</span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Menü schließen"
            type="button"
          >
            ×
          </button>
        </div>
        <nav aria-label="Mobile Hauptnavigation">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <small>0{i + 1}</small>
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" onClick={close}>
            Kontakt
          </Link>
        </nav>
        <Link
          className="button button--light"
          href="/projekt-anfragen"
          prefetch={false}
          onClick={close}
        >
          Projekt anfragen ↗
        </Link>
      </dialog>
    </>
  );
}
