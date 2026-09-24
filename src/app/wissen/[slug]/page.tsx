import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { featuredArticles } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = featuredArticles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = featuredArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            {article.topic} · {article.readingTime}
          </p>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell content-grid">
          <div>
            <p className="eyebrow">
              <span />
              Redaktionsstatus
            </p>
            <h2>Fachtext in Vorbereitung.</h2>
          </div>
          <div className="content-copy">
            <p>
              Diese Seite zeigt bereits die geplante Themen- und URL-Struktur.
              Der vollständige Inhalt wird auf Basis geprüfter Fachinformationen
              erstellt und vor Veröffentlichung durch KLOTZ freigegeben.
            </p>
            <p>
              Damit bleiben Aussagen korrekt, hilfreich und sowohl für
              klassische Suchmaschinen als auch für KI-Antwortsysteme eindeutig
              zitierbar.
            </p>
            <ButtonLink href="/projekt-anfragen">
              Frage zum Projekt stellen
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
