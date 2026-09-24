import type { Metadata } from "next";
import { ProjectRequestForm } from "@/components/forms/project-request-form";

export const metadata: Metadata = {
  title: "Projekt anfragen",
  description:
    "Beschreiben Sie Ihr Vorhaben. KLOTZ meldet sich persönlich bei Ihnen.",
  alternates: { canonical: "/projekt-anfragen" },
};

export default function RequestPage() {
  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            Projektanfrage
          </p>
          <h1>Erzählen Sie uns, was Sie vorhaben.</h1>
          <p>
            Ein paar Angaben genügen für den Anfang. Im Demo können Sie den
            vorgesehenen Ablauf unverbindlich testen.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell request-layout">
          <div>
            <p className="eyebrow">
              <span />
              Der erste Schritt
            </p>
            <h2>Persönlich beraten. Klar geplant.</h2>
            <div className="content-copy">
              <p>
                Nach Ihrer Anfrage klärt KLOTZ Bedarf, Einbausituation und
                nächste Schritte persönlich mit Ihnen. Im späteren System können
                Dateien und Fotos sicher ergänzt werden.
              </p>
            </div>
          </div>
          <ProjectRequestForm />
        </div>
      </section>
    </main>
  );
}
