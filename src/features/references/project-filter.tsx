"use client";
import { useState } from "react";
import type { Project } from "@/domain/content/types";
import { ProjectCards } from "@/components/sections/project-cards";
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("Alle Projekte");
  const categories = [
    "Alle Projekte",
    ...new Set(projects.map((p) => p.category)),
  ];
  const visible = projects.filter(
    (p) => category === "Alle Projekte" || p.category === category,
  );
  return (
    <>
      <div
        className="filter-bar"
        aria-label="Projekte nach Leistungsbereich filtern"
      >
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="filter-count" role="status">
        {visible.length} Einblicke
      </p>
      <ProjectCards projects={visible} />
    </>
  );
}
