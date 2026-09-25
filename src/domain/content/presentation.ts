import type { ContentStatus } from "./types";
export type OverviewPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  heading: string;
  body: string[];
  features: string[];
};
export type ContentSection = { title: string; paragraphs: string[] };
export type HomeFaqItem = {
  id: string;
  question: string;
  answer: string;
  href: string;
  linkLabel: string;
};
export type HomeContent = {
  heroLead: string;
  introCopy: string;
  expertiseLead: string;
  projectsLead: string;
  processLead: string;
  businessLead: string;
  faq: HomeFaqItem[];
  sourceRefs: string[];
  status: ContentStatus;
};
export type ServiceDetail = {
  slug: string;
  category: string;
  title: string;
  intro: string;
  image: string;
  variants: string[];
  planning: string[];
  costs: string[];
  faq: { question: string; answer: string }[];
  sourceRefs: string[];
  status: ContentStatus;
};
export type ArticleBody = {
  slug: string;
  sections: ContentSection[];
  checklist: string[];
  sources: { title: string; url: string }[];
  servicePath: string;
};
