import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { ProcessIcon } from "@/components/ui/icons";
import { ArticleCards, ContactPanel } from "@/components/sections/page-parts";
import { ProjectCards } from "@/components/sections/project-cards";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Bauelemente & Outdoor Living aus Merseburg",
  "Terrassenüberdachungen, Fenster, Türen, Zäune und Tore. Persönlich beraten, geplant und montiert – KLOTZ aus Merseburg.",
  "/",
);
export default async function HomePage() {
  const [services, projects, articles, steps] = await Promise.all([
    repository.getServiceCategories(),
    repository.getFeaturedProjects(),
    repository.getFeaturedArticles(),
    repository.getProcessSteps(),
  ]);
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">
            <span />
            KLOTZ · Merseburg / Meuschau
          </p>
          <h1>
            Bauelemente &<br />
            <em>Outdoor Living</em>
            <br />
            aus Merseburg.
          </h1>
          <p className="hero__lead">
            Mehr Raum für das, was Ihnen wichtig ist.
            <br />
            Persönlich beraten, präzise geplant und fachgerecht montiert.
          </p>
          <div className="hero__actions">
            <ButtonLink href="/projekt-anfragen">Projekt anfragen</ButtonLink>
            <Link className="text-link" href="/referenzen">
              Referenzen entdecken ↗
            </Link>
          </div>
          <div className="hero__region">
            <span>
              Für Ihr Zuhause.
              <br />
              Für Ihr Unternehmen.
            </span>
            <span>
              Merseburg · Halle
              <br />
              Leipzig · Saalekreis
            </span>
          </div>
        </div>
        <div className="hero__media">
          <Image
            src="/images/lamelle-detail-1.webp"
            alt="Lamellendach mit Sitzbereich aus der KLOTZ-Referenzgalerie"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width:760px) 100vw, 52vw"
          />
          <div className="hero__caption">
            <span>Ein neuer Blick nach draußen.</span>
            <Link
              href="/terrasse-garten/lamellendaecher"
              aria-label="Lamellendächer entdecken"
            >
              ↗
            </Link>
          </div>
        </div>
      </section>
      <div className="proof-line shell" aria-label="Unser Leistungsspektrum">
        {["Beratung", "Aufmaß", "Planung", "Montage", "Service"].map((v, i) => (
          <span key={v}>
            <small>0{i + 1}</small>
            {v}
          </span>
        ))}
      </div>
      <section className="section">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">
                <span />
                Rund um Ihr Vorhaben
              </p>
              <h2>
                Lösungen, die
                <br />
                zu Ihnen passen.
              </h2>
            </div>
            <p>
              Vom Lieblingsplatz im Garten bis zur Lösung für Ihr Objekt.
              Entdecken Sie, was mit guter Planung möglich wird.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <Link
                className={`service-card service-card--${i + 1}`}
                href={s.href}
                key={s.id}
              >
                <div className="service-card__media">
                  <Image
                    src={i === 0 ? "/images/glas-detail-1.webp" : s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width:760px) 100vw, 50vw"
                  />
                  <span className="service-card__number">0{i + 1}</span>
                </div>
                <div className="service-card__content">
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                  <span className="round-link" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section projects-section">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--light">
                <span />
                KLOTZ Einblicke
              </p>
              <h2>
                Gute Ideen.
                <br />
                Reale Ergebnisse.
              </h2>
            </div>
            <ButtonLink href="/referenzen" variant="light">
              Alle Referenzen
            </ButtonLink>
          </div>
          <ProjectCards
            projects={projects.filter((p) => p.id !== "stadtstadion-fence")}
          />
        </div>
      </section>
      <section className="section process-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span />
              Ein klarer Weg
            </p>
            <h2>
              Von der ersten Idee
              <br />
              bis zur Umsetzung.
            </h2>
          </div>
          <ol className="process-list">
            {steps.map((s) => (
              <li key={s.number}>
                <div className="process-list__top">
                  <span>{s.number}</span>
                  <ProcessIcon name={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="region-section">
        <div className="region-section__image">
          <Image
            src="/images/glas-detail-2.webp"
            alt="Glaselemente einer KLOTZ-Außenraumlösung"
            fill
            sizes="(max-width:760px) 100vw, 50vw"
          />
        </div>
        <div className="region-section__content">
          <p className="eyebrow">
            <span />
            Regional verwurzelt
          </p>
          <h2>
            Nähe schafft
            <br />
            Vertrauen.
          </h2>
          <p>
            In Meuschau zu Hause, in der Region im Einsatz. KLOTZ verbindet
            Fachberatung, technische Vorbereitung und Montage.
          </p>
          <p>
            In der Innen- und Außenausstellung am Standort können Sie
            Materialien und Möglichkeiten persönlich kennenlernen.
          </p>
          <ButtonLink href="/unternehmen">KLOTZ kennenlernen</ButtonLink>
        </div>
      </section>
      <section className="section">
        <div className="shell business-card">
          <div>
            <p className="eyebrow eyebrow--light">
              <span />
              Gewerbe & Wohnungswirtschaft
            </p>
            <h2>
              Ihr Objekt.
              <br />
              Unser gemeinsamer Plan.
            </h2>
            <p>
              Bauelemente, Grundstücksabschlüsse und Service für
              Hausverwaltungen und Unternehmen. Mit Blick auf Bestand, Nutzung
              und die Abläufe vor Ort.
            </p>
            <ButtonLink href="/gewerbekunden" variant="light">
              Für Geschäftskunden
            </ButtonLink>
          </div>
          <div className="business-card__image">
            <Image
              src="/images/gewerbe.webp"
              alt="Outdoor-Lösung aus dem KLOTZ-Portfolio für Gastronomie"
              fill
              sizes="(max-width:760px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>
      <section className="section knowledge-section">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">
                <span />
                Wissen & Orientierung
              </p>
              <h2>
                Gute Entscheidungen
                <br />
                beginnen mit Klarheit.
              </h2>
            </div>
            <Link className="text-link" href="/wissen">
              Alle Ratgeber ↗
            </Link>
          </div>
          <ArticleCards articles={articles.slice(1)} />
          <p className="source-caption">
            Redaktionelle Vorschau · Fachliche Freigabe durch KLOTZ steht aus.
          </p>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
