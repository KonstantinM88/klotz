import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import type { Article } from "@/domain/content/types";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const all = [{ label: "Startseite", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label="Brotkrumennavigation">
        <ol>
          {all.map((item, i) => (
            <li key={item.href}>
              {i === all.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: new URL(item.href, getSiteUrl()).href,
          })),
        }}
      />
    </>
  );
}
export function PageIntro({
  title,
  intro,
  eyebrow,
  path,
  image,
  parents = [],
}: {
  title: string;
  intro: string;
  eyebrow: string;
  path: string;
  image?: string;
  parents?: { label: string; href: string }[];
}) {
  return (
    <section className={image ? "page-intro page-intro--image" : "page-intro"}>
      <div className="shell">
        <Breadcrumbs items={[...parents, { label: title, href: path }]} />
        <div className="page-intro__grid">
          <div>
            <p className="eyebrow">
              <span />
              {eyebrow}
            </p>
            <h1>{title}</h1>
            <p className="page-lead">{intro}</p>
            {image ? (
              <ButtonLink href="/projekt-anfragen">
                Projekt besprechen
              </ButtonLink>
            ) : null}
          </div>
          {image ? (
            <div className="page-intro__media">
              <Image
                src={image}
                alt={title}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 760px) 100vw, 45vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
export function ContactPanel() {
  return (
    <section className="contact-panel">
      <div className="shell contact-panel__inner">
        <div>
          <p className="eyebrow eyebrow--light">
            <span />
            Gemeinsam weiterdenken
          </p>
          <h2>
            Ihre Idee verdient
            <br />
            einen guten Anfang.
          </h2>
          <p>
            Erzählen Sie uns, was Sie vorhaben. Wir besprechen die nächsten
            Schritte.
          </p>
        </div>
        <ButtonLink href="/projekt-anfragen" variant="light">
          Projekt anfragen
        </ButtonLink>
      </div>
    </section>
  );
}
export function ArticleCards({ articles }: { articles: Article[] }) {
  return (
    <div className="article-grid">
      {articles.map((a, i) => (
        <Link className="article-card" href={a.href} key={a.id}>
          <div className="article-card__meta">
            <span>
              0{i + 1} / {a.topic}
            </span>
            <span>{a.readingTime}</span>
          </div>
          <h3>{a.title}</h3>
          <p>{a.excerpt}</p>
          <span className="article-card__link">Ratgeber lesen ↗</span>
        </Link>
      ))}
    </div>
  );
}
