import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { getOverviewPage, overviewPages } from "@/content/pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return overviewPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = getOverviewPage((await params).slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function OverviewPage({ params }: PageProps) {
  const page = getOverviewPage((await params).slug);
  if (!page) notFound();

  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            {page.eyebrow}
          </p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell content-grid">
          <div>
            <p className="eyebrow">
              <span />
              Im Überblick
            </p>
            <h2>{page.heading}</h2>
          </div>
          <div className="content-copy">
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="feature-list">
              {page.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div style={{ marginTop: 32 }}>
              <ButtonLink href="/projekt-anfragen">Projekt anfragen</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
