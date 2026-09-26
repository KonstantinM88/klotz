import Image from "next/image";
import Link from "next/link";
import type {
  CompanyPageContent,
  CompanyTeamEntry,
} from "@/domain/content/presentation";
import { Breadcrumbs, ContactPanel } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import "@/styles/company.css";

function TeamPortrait({ member }: { member: CompanyTeamEntry }) {
  return (
    <figure className="company-team__card" data-reveal>
      <div className="company-team__photo">
        <Image
          src={member.image.src}
          alt={member.image.alt}
          width={member.image.width}
          height={member.image.height}
          sizes="(max-width: 620px) 100vw, (max-width: 1050px) 45vw, 23vw"
        />
      </div>
      <figcaption>
        <h3>{member.name}</h3>
        <p className="company-team__role">{member.role}</p>
        <p className="company-team__description">{member.description}</p>
      </figcaption>
    </figure>
  );
}

export function CompanyPage({ content }: { content: CompanyPageContent }) {
  const portraits = content.team.filter((member) => member.kind === "person");
  const montage = content.team.find((member) => member.kind === "group");
  return (
    <main id="main-content" className="company-page">
      <section className="company-hero" aria-labelledby="company-title">
        <div className="shell company-hero__crumbs">
          <Breadcrumbs items={[{ label: "Über uns", href: "/unternehmen" }]} />
        </div>
        <div className="shell company-hero__grid">
          <div className="company-hero__copy">
            <p className="index-label">01 / {content.eyebrow}</p>
            <h1 id="company-title">{content.title}</h1>
            <p className="company-hero__lead">{content.lead}</p>
            <div className="company-hero__actions">
              <ButtonLink href="/projekt-anfragen">Projekt anfragen</ButtonLink>
              <Link className="editorial-link" href="#geschichte">
                KLOTZ kennenlernen <span aria-hidden="true">↘</span>
              </Link>
            </div>
          </div>
          <div className="company-hero__visual">
            <Image
              src="/images/lamelle-detail-1.webp"
              alt="Lamellendach aus dem KLOTZ-Bildarchiv"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <span className="company-hero__image-label">
              Raum / Licht / Material
            </span>
          </div>
        </div>
        <div className="shell company-hero__baseline" aria-hidden="true">
          <span>Merseburg / Meuschau</span>
          <span>Beratung · Aufmaß · Montage · Service</span>
        </div>
      </section>

      <section
        className="company-history"
        id="geschichte"
        aria-labelledby="company-history-title"
      >
        <div className="shell company-history__grid">
          <p className="index-label" data-reveal>
            02 / {content.history.eyebrow}
          </p>
          <div data-reveal>
            <h2 id="company-history-title">{content.history.title}</h2>
            <div className="company-history__body">
              {content.history.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="company-team" aria-labelledby="company-team-title">
        <div className="shell">
          <div className="company-team__heading" data-reveal>
            <p className="index-label">03 / Menschen bei KLOTZ</p>
            <h2 id="company-team-title">
              Unser Team. <em>Viele Perspektiven, ein Projekt.</em>
            </h2>
            <p>
              Beratung, Vorbereitung, Verkauf und Montage greifen bei KLOTZ
              ineinander. Lernen Sie die Menschen aus der bisherigen
              Teamübersicht kennen.
            </p>
          </div>
          <p className="company-team__status">
            Demo / noch abzustimmen: Namen, Funktionen und Ausbildungsjahre
            stammen vom bisherigen Webauftritt. Ihre Aktualität muss vor einer
            Veröffentlichung bestätigt werden.
          </p>
          <div className="company-team__grid company-team__grid--intro">
            {portraits.slice(0, 4).map((member) => (
              <TeamPortrait key={member.id} member={member} />
            ))}
          </div>
          {montage ? (
            <figure className="company-team__group" data-reveal>
              <div className="company-team__group-photo">
                <Image
                  src={montage.image.src}
                  alt={montage.image.alt}
                  width={montage.image.width}
                  height={montage.image.height}
                  sizes="(max-width: 760px) 100vw, 62vw"
                />
              </div>
              <figcaption>
                <span className="company-team__group-label">
                  Gemeinsam vor Ort
                </span>
                <h3>{montage.name}</h3>
                <p className="company-team__role">{montage.role}</p>
                <p>{montage.description}</p>
              </figcaption>
            </figure>
          ) : null}
          <div className="company-team__grid company-team__grid--continuation">
            {portraits.slice(4).map((member) => (
              <TeamPortrait key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="company-scope" aria-labelledby="company-scope-title">
        <div className="shell">
          <div className="company-scope__heading" data-reveal>
            <p className="index-label">04 / Für wen wir arbeiten</p>
            <h2 id="company-scope-title">
              Unterschiedliche Vorhaben. <em>Ein klarer Weg.</em>
            </h2>
            <p>
              Vom privaten Zuhause bis zum verwalteten Bestand: Die passende
              Lösung beginnt mit dem Blick auf Nutzung, Gebäude und Menschen.
            </p>
          </div>
          <div className="company-scope__grid">
            {content.audiences.map((audience, index) => (
              <Link
                href={audience.href}
                className="company-scope__item"
                key={audience.title}
                data-reveal
              >
                <span className="company-scope__index">0{index + 1}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <span className="company-scope__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="company-process"
        aria-labelledby="company-process-title"
      >
        <div className="shell company-process__layout">
          <div className="company-process__intro" data-reveal>
            <p className="index-label">05 / Arbeitsweise</p>
            <h2 id="company-process-title">
              Ein Projekt. <em>Viele gute Entscheidungen.</em>
            </h2>
            <p>
              Auf dem bisherigen Webauftritt beschreibt KLOTZ einen Ablauf von
              Aufmaß und Angebot bis zu Realisierung und Abnahme. Wir zeigen ihn
              hier als verständlichen Weg durch das Projekt.
            </p>
          </div>
          <ol className="company-process__steps">
            {content.process.map((step, index) => (
              <li key={step.title} data-reveal>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="company-showroom"
        aria-labelledby="company-showroom-title"
      >
        <div className="shell company-showroom__grid">
          <div className="company-showroom__drawing" aria-hidden="true">
            <span className="company-showroom__drawing-label">
              Raum / Material / Idee
            </span>
            <svg viewBox="0 0 640 430" fill="none" focusable="false">
              <path d="M55 335H585M110 334V167L315 77L530 167V334M110 168H530M315 77V335M110 261H530M180 261V335M458 261V335" />
              <path
                className="company-showroom__accent"
                d="M315 168H458V261H315M180 168H315V261H180"
              />
              <circle cx="315" cy="77" r="5" />
              <circle cx="110" cy="335" r="5" />
              <circle cx="530" cy="335" r="5" />
            </svg>
            <span className="company-showroom__drawing-foot">
              Schematische Illustration
            </span>
          </div>
          <div className="company-showroom__copy" data-reveal>
            <p className="index-label">06 / Vor Ort</p>
            <h2 id="company-showroom-title">{content.showroom.title}</h2>
            {content.showroom.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link className="editorial-link" href="/kontakt">
              Standort & Kontakt <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactPanel />
    </main>
  );
}
