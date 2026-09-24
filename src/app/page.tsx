import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { ArticleCards, ContactPanel } from "@/components/sections/page-parts";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Bauelemente & Outdoor Living aus Merseburg",
  "Terrassenüberdachungen, Fenster, Türen, Zäune und Tore. Persönlich beraten, geplant und montiert – KLOTZ aus Merseburg.",
  "/",
  "/images/glas-detail-1.webp",
);
export default async function HomePage() {
  const [services, projects, articles, steps] = await Promise.all([
    repository.getServiceCategories(),
    repository.getFeaturedProjects(),
    repository.getFeaturedArticles(),
    repository.getProcessSteps(),
  ]);
  const selected = projects.filter((p) => p.id !== "stadtstadion-fence");
  return (
    <main id="main-content" className="atelier-home">
      <section className="atelier-hero" aria-labelledby="hero-title">
        <Image
          src="/images/glas-detail-1.webp"
          alt="Glasgeschützter Sitzbereich aus dem KLOTZ-Bildarchiv bei Abendlicht"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="atelier-hero__image"
        />
        <div className="atelier-hero__shade" />
        <div className="atelier-hero__grid" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="atelier-hero__top shell">
          <p>Bauelemente & Outdoor Living</p>
          <span>Merseburg / Meuschau</span>
        </div>
        <div className="atelier-hero__body shell">
          <p className="edition-label">
            <span /> Für das Leben. Für Ihr Zuhause.
          </p>
          <h1 id="hero-title">
            Raum für
            <br />
            <em>mehr Leben.</em>
          </h1>
          <div className="atelier-hero__actions">
            <ButtonLink href="/projekt-anfragen">
              Ihr Projekt beginnt hier
            </ButtonLink>
            <Link className="hero-discover" href="/referenzen">
              Unsere Referenzen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="atelier-hero__bottom shell">
          <p>
            Persönlich beraten. Präzise geplant.
            <br />
            Fachgerecht montiert.
          </p>
          <Link href="/referenzen/glasschiebewaende" className="hero-project">
            <span>Einblicke / 01</span>Glas, das Räume öffnet{" "}
            <b aria-hidden="true">↗</b>
          </Link>
          <a
            href="#entdecken"
            className="scroll-cue"
            aria-label="Leistungen entdecken"
          >
            Entdecken <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="atelier-intro shell" id="entdecken" data-reveal>
        <p className="index-label">
          <span>01 / KLOTZ</span> Gute Räume verändern den Alltag.
        </p>
        <div>
          <h2>
            Das Zuhause endet
            <br />
            nicht an der <em>Haustür.</em>
          </h2>
          <div className="atelier-intro__copy">
            <p>
              Ein Lieblingsplatz im Freien. Fenster, die Licht hereinlassen. Ein
              Eingang, der zu Ihnen passt. Wir verbinden Ihre Ideen mit
              durchdachten Lösungen.
            </p>
            <Link className="editorial-link" href="/unternehmen">
              KLOTZ kennenlernen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="atelier-expertise" aria-labelledby="expertise-title">
        <div className="shell expertise-heading" data-reveal>
          <p className="index-label">02 / Unsere Möglichkeiten</p>
          <h2 id="expertise-title">
            Vier Perspektiven.
            <br />
            <em>Ihr Projekt.</em>
          </h2>
        </div>
        <div className="shell expertise-grid">
          {services.map((s, i) => (
            <Link
              key={s.id}
              href={s.href}
              className={`expertise-card expertise-card--${i + 1}`}
              data-reveal
            >
              <div className="expertise-card__image">
                <Image
                  src={i === 0 ? "/images/lamelle-detail-1.webp" : s.image.src}
                  alt={
                    i === 0
                      ? "Lamellen einer Terrassenüberdachung aus dem KLOTZ-Archiv"
                      : s.image.alt
                  }
                  fill
                  sizes="(max-width:760px) 90vw, 45vw"
                />
                <span className="image-index">0{i + 1}</span>
                <span className="image-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="expertise-card__text">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="atelier-projects" aria-labelledby="projects-title">
        <div className="shell projects-heading" data-reveal>
          <p className="index-label">03 / Aus dem KLOTZ-Archiv</p>
          <h2 id="projects-title">
            Nicht nur geplant.
            <br />
            <em>Erlebbar gemacht.</em>
          </h2>
          <Link className="editorial-link" href="/referenzen">
            Alle Referenzen <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="shell project-stories">
          {selected.map((p, i) => (
            <Link
              key={p.id}
              href={p.href}
              className={`project-story project-story--${i + 1}`}
              data-reveal
            >
              <div className="project-story__image">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width:760px) 90vw, 85vw"
                      : "(max-width:760px) 90vw, 43vw"
                  }
                />
                <span className="image-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-story__caption">
                <span className="project-number">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>
                    {p.category}
                    {p.region ? ` / ${p.region}` : ""}
                  </p>
                </div>
                <span className="project-detail">Einblicke ansehen ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section
        className="atelier-process shell"
        aria-labelledby="process-title"
      >
        <div className="process-intro" data-reveal>
          <p className="index-label">04 / Gemeinsam weiterdenken</p>
          <h2 id="process-title">
            Eine Idee.
            <br />
            Ein klarer Weg.
            <br />
            <em>Ein gutes Gefühl.</em>
          </h2>
          <p>
            Von der ersten Frage bis zum letzten Detail. Wir begleiten Ihr
            Vorhaben Schritt für Schritt.
          </p>
          <ButtonLink href="/projekt-anfragen">
            Lassen Sie uns sprechen
          </ButtonLink>
        </div>
        <ol className="atelier-steps">
          {steps.map((s) => (
            <li key={s.number} data-reveal>
              <span className="step-index">{s.number}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <span className="step-mark" aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
      </section>
      <section className="atelier-local" aria-labelledby="local-title">
        <div className="atelier-local__photo">
          <Image
            src="/images/glas-detail-3.webp"
            alt="Licht und transparente Glaselemente einer KLOTZ-Außenraumlösung"
            fill
            sizes="(max-width:760px) 100vw, 60vw"
          />
        </div>
        <div className="atelier-local__panel" data-reveal>
          <p className="index-label">05 / Hier zu Hause</p>
          <h2 id="local-title">
            Nah dran.
            <br />
            <em>Von Anfang an.</em>
          </h2>
          <p>
            In Meuschau zu Hause, in der Region im Einsatz. Lernen Sie
            Materialien und Möglichkeiten in unserer Innen- und Außenausstellung
            kennen.
          </p>
          <p className="local-cities">
            Merseburg · Halle · Leipzig · Saalekreis
          </p>
          <Link className="editorial-link" href="/kontakt">
            Standort & Kontakt <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="atelier-business shell" data-reveal>
        <p className="index-label">06 / Gewerbe & Wohnungswirtschaft</p>
        <div>
          <h2>
            Groß denken.
            <br />
            <em>Im Detail planen.</em>
          </h2>
          <p>
            Bauelemente, Grundstücksabschlüsse und Service für Hausverwaltungen
            und Unternehmen. Mit Blick auf Bestand, Nutzung und die Abläufe vor
            Ort.
          </p>
          <Link className="editorial-link" href="/gewerbekunden">
            Lösungen für Ihr Unternehmen <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="business-sculpture" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </section>
      <section className="atelier-journal" aria-labelledby="journal-title">
        <div className="shell">
          <div className="journal-heading" data-reveal>
            <p className="index-label">07 / KLOTZ Wissen</p>
            <h2 id="journal-title">
              Gute Fragen.
              <br />
              <em>Klare Perspektiven.</em>
            </h2>
            <Link className="editorial-link" href="/wissen">
              Zum Ratgeber <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div data-reveal>
            <ArticleCards articles={articles.slice(1)} />
          </div>
          <p className="source-caption">
            Redaktionelle Vorschau · Fachliche Freigabe durch KLOTZ steht aus.
          </p>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
