import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            404
          </p>
          <h1>Diese Seite wurde nicht gefunden.</h1>
          <p>
            Der gewünschte Inhalt ist im aktuellen Konzeptstand nicht verfügbar.
          </p>
          <div style={{ marginTop: 34 }}>
            <ButtonLink href="/" variant="light">
              Zur Startseite
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
