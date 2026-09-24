import Link from "next/link";
import type { SiteSettings } from "@/domain/content/types";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/icons";

export function MobileActionBar({ site }: { site: SiteSettings }) {
  return (
    <div className="mobile-action-bar" aria-label="Schnellkontakt">
      <a href={site.phoneHref}>
        <PhoneIcon />
        <span>Anrufen</span>
      </a>
      <Link href="/projekt-anfragen">
        <span>Projekt anfragen</span>
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
