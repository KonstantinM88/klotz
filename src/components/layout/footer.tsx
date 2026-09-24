import Link from "next/link";
import type { NavigationItem, SiteSettings } from "@/domain/content/types";

type FooterProps = {
  primaryItems: NavigationItem[];
  secondaryItems: NavigationItem[];
  site: SiteSettings;
};

export function Footer({ primaryItems, secondaryItems, site }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Link
            aria-label="KLOTZ Startseite"
            className="brand brand--footer"
            href="/"
          >
            <span className="brand__kicker">Bauelemente</span>
            <span className="wordmark">KLOTZ</span>
          </Link>
          <p>{site.tagline}</p>
          <p className="legacy-note">
            Konzeptstand · Kontaktdaten und Bildrechte werden vor
            Veröffentlichung final bestätigt.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Leistungen</h2>
          <ul className="footer-links">
            {primaryItems.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Entdecken</h2>
          <ul className="footer-links">
            {primaryItems.slice(4).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            {secondaryItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Kontakt</h2>
          <address className="footer-contact">
            <span>{site.legalName}</span>
            <span>{site.address.street}</span>
            <span>
              {site.address.postalCode} {site.address.city} /{" "}
              {site.address.district}
            </span>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
      </div>

      <div className="shell site-footer__legal">
        <span>© {new Date().getFullYear()} KLOTZ GmbH</span>
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
