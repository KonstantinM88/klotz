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

export const localContentRepository: ContentRepository = {
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
    return serviceCategories;
  },
  async getFeaturedProjects() {
    return featuredProjects;
  },
  async getFeaturedArticles() {
    return featuredArticles;
  },
  async getProcessSteps() {
    return processSteps;
  },
};
