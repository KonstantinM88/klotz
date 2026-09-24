import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { featuredProjects } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            {project.category}
          </p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>
      <section className="detail-media">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority
          sizes="100vw"
        />
      </section>
      <section className="content-section">
        <div className="shell content-grid">
          <div>
            <p className="eyebrow">
              <span />
              Projektprofil
            </p>
            <h2>Details folgen nach Kundenfreigabe.</h2>
          </div>
          <div className="content-copy">
            <p>
              Dieses Projekt stammt aus dem bestehenden KLOTZ-Webauftritt.
              Aufgabenstellung, System, Ausführung und technische Daten werden
              nicht erfunden, sondern gemeinsam mit KLOTZ ergänzt und geprüft.
            </p>
            <p>
              So entsteht später eine belastbare Referenzseite, die
              Interessenten überzeugt und für regionale sowie KI-gestützte Suche
              verständlich ist.
            </p>
            <ButtonLink href="/projekt-anfragen">
              Ähnliches Projekt anfragen
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
