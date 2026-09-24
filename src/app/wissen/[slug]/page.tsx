import Link from "next/link";
import { notFound } from "next/navigation";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { PageIntro, ContactPanel } from "@/components/sections/page-parts";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await repository.getFeaturedArticles()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = (await repository.getFeaturedArticles()).find(
    (a) => a.slug === slug,
  );
  return a ? pageMetadata(a.title, a.excerpt, a.href) : {};
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = (await repository.getFeaturedArticles()).find(
    (a) => a.slug === slug,
  );
  const body = await repository.getArticleBody(slug);
  if (!a || !body) notFound();
  return (
    <main id="main-content">
      <PageIntro
        title={a.title}
        intro={a.excerpt}
        eyebrow={a.topic + " · " + a.readingTime}
        path={a.href}
      />
      <section className="content-section">
        <div className="shell article-layout">
          <aside className="toc">
            <p className="eyebrow">In diesem Ratgeber</p>
            <ol>
              {body.sections.map((s, i) => (
                <li key={s.title}>
                  <a href={"#abschnitt-" + i}>{s.title}</a>
                </li>
              ))}
            </ol>
            <p>
              Redaktionelle Vorschau
              <br />
              Stand: <time dateTime={a.updatedAt}>24. September 2026</time>
            </p>
          </aside>
          <article className="article-body">
            <p className="editorial-note">
              Entwurf zur Kundenabstimmung · Fachliche Freigabe durch KLOTZ
              steht aus.
            </p>
            {body.sections.map((s, i) => (
              <section id={"abschnitt-" + i} key={s.title}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <div className="checklist">
              <h2>Ihre Checkliste</h2>
              <ul>
                {body.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <section>
              <h2>Quellen & weiterführende Informationen</h2>
              <ul>
                {body.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url}>{s.title} ↗</a>
                  </li>
                ))}
              </ul>
              <p>
                Die Hinweise ersetzen keine objektbezogene Beratung. Konkrete
                Produkte und Ausführungen werden anhand Ihres Vorhabens
                abgestimmt.
              </p>
              <Link className="text-link" href={body.servicePath}>
                Passende Leistung ansehen ↗
              </Link>
            </section>
          </article>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
