import { notFound } from "next/navigation";
import Link from "next/link";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import {
  PageIntro,
  ContactPanel,
  ArticleCards,
} from "@/components/sections/page-parts";
import { ProjectFilter } from "@/features/references/project-filter";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button-link";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await repository.getOverviewPages()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = (await repository.getOverviewPages()).find(
    (p) => p.slug === slug,
  );
  return page ? pageMetadata(page.title, page.intro, "/" + slug) : {};
}
export default async function OverviewPage({ params }: Props) {
  const { slug } = await params;
  const [pages, services, categories, projects, articles, site] =
    await Promise.all([
      repository.getOverviewPages(),
      repository.getServices(),
      repository.getServiceCategories(),
      repository.getFeaturedProjects(),
      repository.getFeaturedArticles(),
      repository.getSiteSettings(),
    ]);
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();
  const category = categories.find((c) => c.slug === slug);
  const intros: Record<string, { title: string; intro: string }> = {
    referenzen: {
      title: "Ideen werden Wirklichkeit.",
      intro:
        "Überdachungen, Glaslösungen und Grundstücksabschlüsse: Entdecken Sie Einblicke aus dem KLOTZ-Projektarchiv.",
    },
    wissen: {
      title: "Gut entscheiden. Besser planen.",
      intro:
        "Orientierung für Ihr Vorhaben: verständliche Antworten zu Dachlösungen, Kostenfaktoren und den nächsten Schritten.",
    },
    unternehmen: {
      title: "In Meuschau zu Hause.",
      intro:
        "Bauelemente, Außenräume und persönliche Beratung. KLOTZ begleitet private Bauherren, Unternehmen und die Wohnungswirtschaft in der Region Halle–Leipzig.",
    },
    kontakt: {
      title: "Lernen wir Ihr Projekt kennen.",
      intro:
        "Am Telefon, vor Ort oder im persönlichen Gespräch: Wir freuen uns auf Ihre Idee.",
    },
  };
  const intro = intros[slug] ?? {
    title: category?.title ?? page.title,
    intro: category?.description ?? page.intro,
  };
  return (
    <main id="main-content">
      <PageIntro
        {...intro}
        eyebrow={page.eyebrow}
        path={"/" + slug}
        image={category?.image.src}
      />
      {category ? (
        <>
          <section className="content-section">
            <div className="shell">
              <p className="eyebrow">
                <span />
                Unsere Lösungen
              </p>
              <h2>Was haben Sie vor?</h2>
              <div className="service-detail-grid">
                {services
                  .filter((s) => s.category === slug)
                  .map((s, i) => (
                    <Link key={s.slug} href={"/" + s.slug}>
                      <span className="service-index">0{i + 1}</span>
                      <h3>{s.title}</h3>
                      <p>{s.intro}</p>
                      <span className="text-link">Lösung entdecken ↗</span>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
          <section className="planning-section">
            <div className="shell editorial-grid">
              <div>
                <p className="eyebrow">
                  <span />
                  Persönlich geplant
                </p>
                <h2>
                  Vom ersten Gespräch
                  <br />
                  zum passenden Ergebnis.
                </h2>
              </div>
              <div className="content-copy">
                <p>
                  Jedes Gebäude und jedes Grundstück bringt eigene
                  Voraussetzungen mit. Deshalb beginnen wir mit Ihren Wünschen
                  und der Situation vor Ort.
                </p>
                <p>
                  Beratung, Aufmaß und ein abgestimmtes Angebot schaffen die
                  Grundlage für die Ausführung. Beschreiben Sie uns Ihr Vorhaben
                  – auch wenn noch nicht jedes Detail feststeht.
                </p>
                <ButtonLink href="/projekt-anfragen">
                  Beratung anfragen
                </ButtonLink>
              </div>
            </div>
          </section>
        </>
      ) : null}
      {slug === "referenzen" ? (
        <section className="content-section">
          <div className="shell">
            <ProjectFilter projects={projects} />
            <p className="source-caption">
              Reale Aufnahmen aus dem KLOTZ-Archiv. Einzelne Galerien zeigen
              mehrere Ausführungen; nicht belegte Projektmaße und Termine werden
              nicht angegeben.
            </p>
          </div>
        </section>
      ) : null}
      {slug === "wissen" ? (
        <section className="content-section">
          <div className="shell">
            <p className="editorial-note">
              Redaktionelle Vorschau zur Kundenabstimmung. Fachliche Freigabe
              durch KLOTZ steht noch aus.
            </p>
            <ArticleCards articles={articles} />
            <div className="topic-panel">
              <p className="eyebrow">
                <span />
                Weitere Themen in Vorbereitung
              </p>
              <h2>Was Sie außerdem beschäftigt.</h2>
              <ul className="topic-list">
                {[
                  "Glasdach richtig pflegen",
                  "Beschattung frühzeitig planen",
                  "Sommergarten oder Wintergarten",
                  "Fenster im Bestand austauschen",
                  "Haustür und Seitenteil abstimmen",
                  "Sichtschutz zum Grundstück wählen",
                  "Dreh- oder Schiebetor",
                  "Wartung von Toranlagen",
                  "Lüften nach dem Fenstertausch",
                  "Materialien für Außengeländer",
                  "Außenbereiche für Gastronomie",
                  "Bauelemente für die Wohnungswirtschaft",
                ].map((t) => (
                  <li key={t}>
                    {t}
                    <small>Redaktionell in Vorbereitung</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
      {slug === "unternehmen" ? (
        <>
          <section className="content-section">
            <div className="shell editorial-grid">
              <div>
                <p className="eyebrow">
                  <span />
                  Regional verwurzelt
                </p>
                <h2>
                  Kurze Wege.
                  <br />
                  Ein gemeinsamer Blick.
                </h2>
              </div>
              <div className="content-copy">
                <p>
                  Der Standort von KLOTZ liegt in Merseburg-Meuschau. Von hier
                  aus verbindet das Unternehmen Fachberatung, technische
                  Vorbereitung und Montage für Projekte rund ums Haus.
                </p>
                <p>
                  Zum Kundenkreis gehören Privatkunden, Hausverwaltungen,
                  Wohnungsgesellschaften und mittelständische Unternehmen. Die
                  Innen- und Außenausstellung am Firmenstandort bietet Raum,
                  Materialien und Ausführungen im persönlichen Gespräch zu
                  vergleichen.
                </p>
                <p>
                  Ob einzelne Bauelemente oder ein neuer Außenbereich: Am Anfang
                  stehen Ihre Anforderungen und die Gegebenheiten vor Ort.
                </p>
                <ButtonLink href="/kontakt">Standort & Kontakt</ButtonLink>
              </div>
            </div>
          </section>
          <section className="planning-section">
            <div className="shell">
              <p className="eyebrow">
                <span />
                Zusammenarbeit
              </p>
              <h2>Von der Idee bis zur Ausführung.</h2>
              <div className="service-detail-grid">
                {[
                  "Beratung & Auswahl",
                  "Aufmaß & Vorbereitung",
                  "Montage & Übergabe",
                ].map((t, i) => (
                  <div key={t}>
                    <span className="service-index">0{i + 1}</span>
                    <h3>{t}</h3>
                    <p>
                      {
                        [
                          "Nutzung, Gestaltung und Rahmenbedingungen gemeinsam klären.",
                          "Die Einbausituation aufnehmen und den Leistungsumfang abstimmen.",
                          "Ausführung, Bedienung und weitere Pflege persönlich besprechen.",
                        ][i]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}
      {slug === "kontakt" ? (
        <section className="content-section">
          <div className="shell contact-grid">
            <div className="address-card">
              <p className="eyebrow">
                <span />
                Merseburg / Meuschau
              </p>
              <h2>{site.legalName}</h2>
              <address>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city} /{" "}
                {site.address.district}
              </address>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsappHref}>WhatsApp: {site.whatsappDisplay} ↗</a>
              <a
                className="text-link"
                href="https://www.google.com/maps/search/?api=1&query=Zur+Saale+16+06217+Merseburg"
              >
                Route im Kartendienst öffnen ↗
              </a>
            </div>
            <div>
              <p className="eyebrow">
                <span />
                Besuch & Beratung
              </p>
              <h2>
                Sehen, vergleichen,
                <br />
                gemeinsam planen.
              </h2>
              <p>
                Besuchen Sie die Innen- und Außenausstellung am Standort.
                Stimmen Sie für ein ausführliches Beratungsgespräch am besten
                einen Termin ab.
              </p>
              <dl className="hours">
                <dt>Öffnungszeiten</dt>
                <dd>
                  Montag–Freitag, 07:00–16:00 Uhr
                  <br />
                  oder nach Terminabsprache
                </dd>
                <dt>Telefonsprechzeiten</dt>
                <dd>
                  Montag–Donnerstag
                  <br />
                  07:30–12:00 und 13:00–15:00 Uhr
                </dd>
              </dl>
              <p className="source-caption">
                Kontaktdaten und Öffnungszeiten: bestehender KLOTZ-Webauftritt,
                Stand September 2026. Für die Veröffentlichung nochmals
                abzustimmen.
              </p>
              <ButtonLink href="/projekt-anfragen">
                Projekt beschreiben
              </ButtonLink>
            </div>
          </div>
        </section>
      ) : null}
      {!category &&
      !["referenzen", "wissen", "unternehmen", "kontakt"].includes(slug) ? (
        <section className="content-section">
          <div className="shell narrow">
            <p className="eyebrow">
              <span />
              {["impressum", "datenschutz"].includes(slug)
                ? "Präsentationsdemo"
                : "Aktueller Stand"}
            </p>
            <h2>{page.heading}</h2>
            <div className="content-copy">
              {page.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ButtonLink href="/kontakt">Kontakt aufnehmen</ButtonLink>
          </div>
        </section>
      ) : null}
      {!["impressum", "datenschutz"].includes(slug) ? <ContactPanel /> : null}
    </main>
  );
}
