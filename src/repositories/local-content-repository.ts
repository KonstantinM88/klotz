import {
  featuredArticles,
  featuredProjects,
  primaryNavigation,
  processSteps,
  secondaryNavigation,
  serviceCategories,
  siteSettings,
} from "@/content/site";
import type { ContentRepository } from "@/repositories/content-repository";
import { overviewPages } from "@/content/pages";
import { serviceDetails } from "@/content/services";
import { articleBodies } from "@/content/articles";
import assetManifest from "../../content/assets-manifest.json";

function withAsset<
  T extends {
    image: { src: string; width: number; height: number; rightsStatus: string };
  },
>(entity: T): T {
  const asset = assetManifest.find((a) => a.src === entity.image.src);
  return asset
    ? {
        ...entity,
        image: {
          ...entity.image,
          width: asset.width,
          height: asset.height,
          rightsStatus: "client-presentation-approved",
        },
      }
    : entity;
}

export const localContentRepository: ContentRepository = {
  async getOverviewPages() {
    return overviewPages;
  },
  async getServices() {
    return serviceDetails;
  },
  async getArticleBody(slug) {
    return articleBodies.find((a) => a.slug === slug);
  },
  async getSiteSettings() {
    return siteSettings;
  },
  async getPrimaryNavigation() {
    return primaryNavigation;
  },
  async getSecondaryNavigation() {
    return secondaryNavigation;
  },
  async getServiceCategories() {
    return serviceCategories.map(withAsset);
  },
  async getFeaturedProjects() {
    return featuredProjects.map(withAsset);
  },
  async getFeaturedArticles() {
    return featuredArticles;
  },
  async getProcessSteps() {
    return processSteps;
  },
};
