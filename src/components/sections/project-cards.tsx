import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/domain/content/types";
export function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="reference-grid">
      {projects.map((p) => (
        <Link className="reference-card" href={p.href} key={p.id}>
          <div className="reference-card__image">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              sizes="(max-width:760px) 100vw, 50vw"
            />
          </div>
          <p className="eyebrow">
            {p.category}
            {p.region ? ` · ${p.region}` : ""}
          </p>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <span className="text-link">Einblicke ansehen ↗</span>
        </Link>
      ))}
    </div>
  );
}
