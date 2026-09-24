import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ProcessIcon,
} from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { localContentRepository } from "@/repositories/local-content-repository";

const heroImage =
  "https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_Lammelle_20260221_2050x620_0.jpg?itok=XkNFM1IX";

export default async function HomePage() {
  const [site, services, projects, articles, steps] = await Promise.all([
    localContentRepository.getSiteSettings(),
    localContentRepository.getServiceCategories(),
    localContentRepository.getFeaturedProjects(),
    localContentRepository.getFeaturedArticles(),
    localContentRepository.getProcessSteps(),
  ]);
  const businessService = services.find(
    (service) => service.id === "business-housing",
  );

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.canonicalUrl}/#business`,
    name: site.legalName,
    url: site.canonicalUrl,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: "DE",
    },
    areaServed: site.serviceAreas,
  };

  return (
    <main id="main-content">
      <JsonLd data={localBusiness} />

      <section className="hero">
        <Image
          className="hero__image"
          src={heroImage}
          alt="Modernes Lamellendach an einem Wohnhaus"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__overlay" />
        <div className="shell hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">
              <span />
              Bauelemente & Outdoor Living
            </p>
            <h1>
              Räume,
              <br />
              die bleiben.
            </h1>
            <p className="hero__lead">
              Hochwertige Lösungen für Haus, Terrasse und Grundstück –
              persönlich beraten, präzise geplant und fachgerecht montiert.
            </p>
            <div className="hero__actions">
              <ButtonLink href="/projekt-anfragen" variant="light">
                Projekt anfragen
              </ButtonLink>
              <Link className="text-link text-link--light" href="/referenzen">
                Referenzen entdecken <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="hero__fact">
            <span className="hero__fact-line" />
            <p>
              Aus Merseburg.
              <br />
              Für die Region.
            </p>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span />
          Scroll
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">
                <span />
                Unsere Leistungen
              </p>
              <h2>
                Alles aus einer Hand.
                <br />
                Bis ins Detail.
              </h2>
            </div>
            <p>
              Von der ersten Idee bis zur Montage: Wir verbinden fachliche
              Beratung, hochwertige Systeme und saubere Umsetzung.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link
                className="service-card"
                href={service.href}
                key={service.id}
              >
                <div className="service-card__media">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <span className="service-card__number">0{index + 1}</span>
                </div>
                <div className="service-card__content">
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="round-link" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="shell">
          <div className="section-heading section-heading--split section-heading--light">
            <div>
              <p className="eyebrow eyebrow--light">
                <span />
                Ausgewählte Projekte
              </p>
              <h2>
                Ergebnisse, die
                <br />
                für sich sprechen.
              </h2>
            </div>
            <ButtonLink href="/referenzen" variant="secondary">
              Alle Referenzen
            </ButtonLink>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link
                className={`project-card project-card--${index + 1}`}
                href={project.href}
                key={project.id}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 66vw"
                />
                <div className="project-card__overlay" />
                <div className="project-card__content">
                  <p>
                    {project.category}
                    {project.region ? ` · ${project.region}` : ""}
                  </p>
                  <h3>{project.title}</h3>
                  <span>
                    Projekt ansehen <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading section-heading--centered">
            <p className="eyebrow">
              <span />
              So arbeiten wir
            </p>
            <h2>
              Ein klarer Weg.
              <br />
              Ein verlässliches Ergebnis.
            </h2>
          </div>
          <ol className="process-list">
            {steps.map((step) => (
              <li key={step.number}>
                <div className="process-list__top">
                  <span>{step.number}</span>
                  <ProcessIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="region-section">
        <div className="region-section__image">
          <Image
            src="https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_T%C3%9C_20260221_1.jpg?itok=DyKRGZhg"
            alt="Hochwertige Terrassenüberdachung mit Glasflächen"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
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
            Kurze Wege, persönliche Ansprechpartner und ein Blick für das Ganze:
            KLOTZ begleitet Projekte in Merseburg, Halle, Leipzig und im
            Saalekreis.
          </p>
          <ul className="region-list">
            {site.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <ButtonLink href="/unternehmen" variant="primary">
            KLOTZ kennenlernen
          </ButtonLink>
        </div>
      </section>

      <section className="section business-section">
        <div className="shell business-card">
          <div className="business-card__content">
            <p className="eyebrow eyebrow--light">
              <span />
              Für Unternehmen & Bestandshalter
            </p>
            <h2>
              Planbar. Verlässlich.
              <br />
              Objektgerecht.
            </h2>
            <p>
              Lösungen für Gewerbe, Wohnungswirtschaft und öffentliche
              Auftraggeber – mit klarer Abstimmung, dokumentierten Leistungen
              und festen Ansprechpartnern.
            </p>
            <ButtonLink href="/gewerbekunden" variant="light">
              Leistungen für Gewerbekunden
            </ButtonLink>
          </div>
          {businessService ? (
            <div className="business-card__image">
              <Image
                src={businessService.image.src}
                alt={businessService.image.alt}
                fill
                sizes="50vw"
              />
            </div>
          ) : null}
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
              Alle Ratgeber <ArrowRightIcon />
            </Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <Link
                className="article-card"
                href={article.href}
                key={article.id}
              >
                <div className="article-card__meta">
                  <span>{article.topic}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="article-card__link">
                  Weiterlesen <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner">
          <p className="eyebrow eyebrow--light">
            <span />
            Ihr nächster Schritt
          </p>
          <h2>
            Was dürfen wir
            <br />
            für Sie möglich machen?
          </h2>
          <p>
            Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns persönlich bei
            Ihnen.
          </p>
          <div className="final-cta__actions">
            <ButtonLink href="/projekt-anfragen" variant="light">
              Projekt anfragen
            </ButtonLink>
            <a className="text-link text-link--light" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
