import Link from "next/link";
import type { NavigationItem, SiteSettings } from "@/domain/content/types";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/icons";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

type HeaderProps = {
  items: NavigationItem[];
  site: SiteSettings;
};

export function Header({ items, site }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link aria-label="KLOTZ Startseite" className="brand" href="/">
          <span className="brand__kicker">Bauelemente</span>
          <span className="wordmark">KLOTZ</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="desktop-nav">
          {items.slice(0, 6).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href={site.phoneHref}>
            <PhoneIcon />
            <span>{site.phoneDisplay}</span>
          </a>
          <Link className="header-cta" href="/projekt-anfragen">
            <span>Projekt anfragen</span>
            <ArrowRightIcon />
          </Link>
        </div>

        <MobileNavigation items={items} />
      </div>
    </header>
  );
}
