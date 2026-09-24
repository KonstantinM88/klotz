import { z } from "zod";

const contentStatusSchema = z.enum([
  "verified",
  "legacy",
  "draft",
  "demo",
  "blocked",
]);

const imageSchema = z.object({
  src: z
    .string()
    .refine((value) => value.startsWith("/images/") || URL.canParse(value)),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  sourceUrl: z.string().url(),
  rightsStatus: z.enum([
    "rights-check",
    "approved",
    "concept",
    "client-presentation-approved",
  ]),
});

export const siteSettingsSchema = z.object({
  name: z.string().min(1),
  legalName: z.string().min(1),
  tagline: z.string().min(1),
  canonicalUrl: z.string().url(),
  phoneDisplay: z.string().min(1),
  phoneHref: z.string().startsWith("tel:"),
  whatsappDisplay: z.string().min(1),
  whatsappHref: z.string().url(),
  email: z.email(),
  address: z.object({
    street: z.string().min(1),
    postalCode: z.string().min(1),
    city: z.string().min(1),
    district: z.string().min(1),
  }),
  serviceAreas: z.array(z.string().min(1)).min(1),
  status: contentStatusSchema,
});

export const serviceCategorySchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().startsWith("/"),
  image: imageSchema,
  status: contentStatusSchema,
});

export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  category: z.string().min(1),
  href: z.string().startsWith("/"),
  region: z.string().min(1).optional(),
  summary: z.string().min(1),
  image: imageSchema,
  status: contentStatusSchema,
  factCompleteness: z.enum(["partial", "reviewed"]),
});

export const articleSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  href: z.string().startsWith("/"),
  topic: z.string().min(1),
  readingTime: z.string().min(1),
  updatedAt: z.iso.date(),
  status: contentStatusSchema,
});
