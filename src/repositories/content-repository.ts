import type {
  Article,
  NavigationItem,
  ProcessStep,
  Project,
  ServiceCategory,
  SiteSettings,
} from "@/domain/content/types";

export interface ContentRepository {
  getSiteSettings(): Promise<SiteSettings>;
  getPrimaryNavigation(): Promise<NavigationItem[]>;
  getSecondaryNavigation(): Promise<NavigationItem[]>;
  getServiceCategories(): Promise<ServiceCategory[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getFeaturedArticles(): Promise<Article[]>;
  getProcessSteps(): Promise<ProcessStep[]>;
}
