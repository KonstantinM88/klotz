export type ContentStatus =
  "verified" | "legacy" | "draft" | "demo" | "blocked";

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string;
  rightsStatus: "rights-check" | "approved" | "concept";
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteSettings = {
  name: string;
  legalName: string;
  tagline: string;
  canonicalUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    district: string;
  };
  serviceAreas: string[];
  status: ContentStatus;
};

export type ServiceCategory = {
  id: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  image: ImageAsset;
  status: ContentStatus;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  href: string;
  region?: string;
  summary: string;
  image: ImageAsset;
  status: ContentStatus;
  factCompleteness: "partial" | "reviewed";
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  href: string;
  topic: string;
  readingTime: string;
  updatedAt: string;
  status: ContentStatus;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "consulting" | "measure" | "planning" | "assembly" | "service";
};
