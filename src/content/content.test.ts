import { describe, expect, it } from "vitest";
import {
  featuredArticles,
  featuredProjects,
  primaryNavigation,
  serviceCategories,
} from "@/content/site";

function hasUniqueValues(values: string[]): boolean {
  return new Set(values).size === values.length;
}

describe("local content", () => {
  it("uses unique navigation paths", () => {
    expect(hasUniqueValues(primaryNavigation.map((item) => item.href))).toBe(
      true,
    );
  });

  it("uses unique service, project and article slugs", () => {
    expect(hasUniqueValues(serviceCategories.map((item) => item.slug))).toBe(
      true,
    );
    expect(hasUniqueValues(featuredProjects.map((item) => item.slug))).toBe(
      true,
    );
    expect(hasUniqueValues(featuredArticles.map((item) => item.slug))).toBe(
      true,
    );
  });

  it("does not mark partial legacy projects as reviewed", () => {
    for (const project of featuredProjects) {
      if (project.status === "legacy") {
        expect(project.factCompleteness).toBe("partial");
      }
    }
  });
});
