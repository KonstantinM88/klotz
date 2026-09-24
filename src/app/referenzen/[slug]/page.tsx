import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { PageIntro, ContactPanel } from "@/components/sections/page-parts";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await repository.getFeaturedProjects()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = (await repository.getFeaturedProjects()).find(
    (p) => p.slug === slug,
  );
  return p ? pageMetadata(p.title, p.summary, p.href, p.image.src) : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = (await repository.getFeaturedProjects()).find(
    (p) => p.slug === slug,
  );
  if (!p) notFound();
  const gallery =
    slug === "lamellendach-referenz"
      ? [
          "/images/lamelle-detail-1.webp",
          "/images/lamelle-detail-2.webp",
          "/images/lamelle-detail-3.webp",
        ]
      : slug === "glasschiebewaende"
        ? [
            "/images/glas-detail-1.webp",
            "/images/glas-detail-2.webp",
            "/images/glas-detail-3.webp",
          ]
        : [p.image.src];
  return (
    <main id="main-content">
      <PageIntro
        title={p.title}
        intro={p.summary}
        eyebrow={p.category + (p.region ? " · " + p.region : "")}
        path={p.href}
      />
      <section className="project-gallery shell" aria-label="Bildergalerie">
        {gallery.map((src, i) => (
          <figure key={src}>
            <Image
              src={src}
              alt={p.image.alt + (i ? ` – Ansicht ${i + 1}` : "")}
              width={1200}
              height={900}
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              sizes="(max-width:760px) 100vw, 80vw"
            />
            <figcaption>
              0{i + 1} / {p.title} · KLOTZ-Bildarchiv
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="content-section">
        <div className="shell editorial-grid">
          <div>
            <p className="eyebrow">
              <span />
              Inspiration für Ihr Vorhaben
            </p>
            <h2>
              Was passt zu
              <br />
              Ihrem Zuhause?
            </h2>
          </div>
          <div className="content-copy">
            <p>
              {p.category === "Zaun & Tor"
                ? "Ein Grundstücksabschluss muss zum Gelände und zur täglichen Nutzung passen. Welche Zugänge, Höhen und Materialien sinnvoll sind, lässt sich an Ihrer konkreten Situation klären."
                : "Ein geschützter Außenbereich beginnt bei Ihrer Nutzung: ein heller Frühstücksplatz, Schatten am Nachmittag oder ein ruhiger Sitzbereich. Gemeinsam betrachten wir, welche Lösung zu Haus und Grundstück passt."}
            </p>
            <p>
              Die Aufnahmen stammen aus der bestehenden KLOTZ-Galerie. Sie
              zeigen Gestaltung und Ausführung; Maße, Termine und technische
              Leistungswerte werden daraus nicht abgeleitet.
            </p>
            <Link
              className="text-link"
              href={
                p.category === "Zaun & Tor"
                  ? "/zaun-tor/zaunanlagen"
                  : "/terrasse-garten/terrassenueberdachungen"
              }
            >
              Passende Lösungen entdecken ↗
            </Link>
            <p>
              <Link className="text-link" href="/referenzen">
                ← Alle Referenzen
              </Link>
            </p>
          </div>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
