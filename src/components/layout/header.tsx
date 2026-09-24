import Image from "next/image";
import Link from "next/link";
import type { NavigationItem, SiteSettings } from "@/domain/content/types";
import { MobileNavigation } from "./mobile-navigation";
import { ActiveNavigation } from "./active-navigation";
export function Header({
  items,
  site,
}: {
  items: NavigationItem[];
  site: SiteSettings;
}) {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="KLOTZ Startseite">
          <Image
            src="/images/logo.webp"
            alt="KLOTZ Bauelemente – Interieur & Design"
            width={400}
            height={214}
            priority
            sizes="130px"
          />
        </Link>
        <ActiveNavigation items={items} />
        <div className="site-header__actions">
          <a className="header-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <Link
            className="header-cta"
            href="/projekt-anfragen"
            prefetch={false}
          >
            Projekt anfragen <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <MobileNavigation items={items} />
      </div>
    </header>
  );
}
