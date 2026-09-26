import type {
  Article,
  NavigationItem,
  ProcessStep,
  Project,
  ServiceCategory,
  SiteSettings,
} from "@/domain/content/types";
import type {
  ArticleBody,
  CompanyPageContent,
  HomeContent,
  ServiceDetail,
  OverviewPageContent,
} from "@/domain/content/presentation";

export interface ContentRepository {
  getCompanyPageContent(): Promise<CompanyPageContent>;
  getHomeContent(): Promise<HomeContent>;
  getOverviewPages(): Promise<OverviewPageContent[]>;
  getServices(): Promise<ServiceDetail[]>;
  getArticleBody(slug: string): Promise<ArticleBody | undefined>;
  getSiteSettings(): Promise<SiteSettings>;
  getPrimaryNavigation(): Promise<NavigationItem[]>;
  getSecondaryNavigation(): Promise<NavigationItem[]>;
  getServiceCategories(): Promise<ServiceCategory[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getFeaturedArticles(): Promise<Article[]>;
  getProcessSteps(): Promise<ProcessStep[]>;
}
