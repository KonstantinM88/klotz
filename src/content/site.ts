import type {
  Article,
  NavigationItem,
  ProcessStep,
  Project,
  ServiceCategory,
  SiteSettings,
} from "@/domain/content/types";
import {
  articleSchema,
  projectSchema,
  serviceCategorySchema,
  siteSettingsSchema,
} from "@/content/schemas";
import { z } from "zod";

export const siteSettings: SiteSettings = siteSettingsSchema.parse({
  name: "KLOTZ",
  legalName: "KLOTZ GmbH",
  tagline: "Bauelemente & Outdoor Living aus Merseburg",
  canonicalUrl: "https://www.klotz.mobi",
  phoneDisplay: "03461 455-0",
  phoneHref: "tel:+4934614550",
  whatsappDisplay: "0172 6543432",
  whatsappHref: "https://wa.me/491726543432",
  email: "info@klotz.mobi",
  address: {
    street: "Zur Saale 16",
    postalCode: "06217",
    city: "Merseburg",
    district: "Meuschau",
  },
  serviceAreas: ["Merseburg", "Halle (Saale)", "Leipzig", "Saalekreis"],
  status: "legacy",
});

export const primaryNavigation: NavigationItem[] = [
  { label: "Terrasse & Garten", href: "/terrasse-garten" },
  { label: "Fenster & Türen", href: "/fenster-tueren" },
  { label: "Zaun & Tor", href: "/zaun-tor" },
  { label: "Gewerbekunden", href: "/gewerbekunden" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Wissen", href: "/wissen" },
  { label: "Unternehmen", href: "/unternehmen" },
];

export const secondaryNavigation: NavigationItem[] = [
  { label: "Angebote", href: "/angebote" },
  { label: "Fundgrube", href: "/fundgrube" },
  { label: "Jobs", href: "/jobs" },
  { label: "Downloads", href: "/downloads" },
];

const legacyBase = "https://www.klotz.mobi";

export const serviceCategories: ServiceCategory[] = z
  .array(serviceCategorySchema)
  .parse([
    {
      id: "terrace-garden",
      slug: "terrasse-garten",
      title: "Terrasse & Garten",
      description:
        "Terrassenüberdachungen, Lamellendächer, Pergolen und Glaslösungen.",
      href: "/terrasse-garten",
      image: {
        src: "/images/terrasse.webp",
        alt: "Terrassenüberdachung mit Glasdach und Sonnenschutz",
        width: 740,
        height: 588,
        sourceUrl: `${legacyBase}/`,
        rightsStatus: "rights-check",
      },
      status: "legacy",
    },
    {
      id: "windows-doors",
      slug: "fenster-tueren",
      title: "Fenster & Türen",
      description:
        "Komfort, Sicherheit und Energieeffizienz passend zum Gebäude.",
      href: "/fenster-tueren",
      image: {
        src: "/images/haustuer-detail.webp",
        alt: "Moderne Hauseingangstür mit Vordach",
        width: 4100,
        height: 1400,
        sourceUrl: `${legacyBase}/`,
        rightsStatus: "rights-check",
      },
      status: "legacy",
    },
    {
      id: "fence-gate",
      slug: "zaun-tor",
      title: "Zaun & Tor",
      description:
        "Sichtschutz, Grundstücksabschluss und komfortable Toranlagen.",
      href: "/zaun-tor",
      image: {
        src: "/images/zaun.webp",
        alt: "Moderner Zaun mit Sichtschutz und integrierter Multibox",
        width: 4100,
        height: 1400,
        sourceUrl: `${legacyBase}/`,
        rightsStatus: "rights-check",
      },
      status: "legacy",
    },
    {
      id: "business-housing",
      slug: "gewerbekunden",
      title: "Gewerbe & Wohnungswirtschaft",
      description:
        "Planbare Leistungen für Bestand, Objekt und laufenden Service.",
      href: "/gewerbekunden",
      image: {
        src: "/images/gewerbe.webp",
        alt: "Architektonische Outdoor-Lösung für Gewerbe und Gastronomie",
        width: 740,
        height: 588,
        sourceUrl: `${legacyBase}/`,
        rightsStatus: "rights-check",
      },
      status: "legacy",
    },
  ]);

export const featuredProjects: Project[] = z.array(projectSchema).parse([
  {
    id: "glass-walls",
    slug: "glasschiebewaende",
    title: "Glas, das Räume öffnet",
    category: "Terrasse & Garten",
    href: "/referenzen/glasschiebewaende",
    summary:
      "Transparente Seiten für den Außenbereich. Aufnahmen aus der KLOTZ-Galerie Glasschiebewände.",
    image: {
      src: "/images/glas-detail-1.webp",
      alt: "Glasgeschützter Sitzbereich am Haus bei Abendlicht",
      width: 1024,
      height: 768,
      sourceUrl: `${legacyBase}/glasschiebew%C3%A4nde`,
      rightsStatus: "client-presentation-approved",
    },
    status: "legacy",
    factCompleteness: "partial",
  },
  {
    id: "stormthaler-see",
    slug: "ueberdachung-stoermthaler-see",
    title: "Überdachung am Störmthaler See",
    category: "Terrasse & Garten",
    region: "Störmthaler See",
    summary:
      "Eine Überdachung am Störmthaler See – Einblicke aus dem KLOTZ-Bildarchiv.",
    href: "/referenzen/ueberdachung-stoermthaler-see",
    image: {
      src: "/images/stoermthaler-see.webp",
      alt: "Überdachung am Störmthaler See",
      width: 4100,
      height: 1400,
      sourceUrl: `${legacyBase}/%C3%BCberdachung-st%C3%B6rmthaler-see`,
      rightsStatus: "rights-check",
    },
    status: "legacy",
    factCompleteness: "partial",
  },
  {
    id: "stadtstadion-fence",
    slug: "einzaeunung-stadtstadion",
    title: "Einzäunung Stadtstadion",
    category: "Zaun & Tor",
    summary:
      "Einzäunung eines Stadtstadions: ein Beispiel für den Grundstücksabschluss im Objektbereich.",
    href: "/referenzen/einzaeunung-stadtstadion",
    image: {
      src: "/images/stadtstadion.webp",
      alt: "Einzäunung an einem Stadtstadion",
      width: 1540,
      height: 800,
      sourceUrl: `${legacyBase}/news/einz%C3%A4unung-stadtstadion`,
      rightsStatus: "rights-check",
    },
    status: "legacy",
    factCompleteness: "partial",
  },
  {
    id: "lamella-roof",
    slug: "lamellendach-referenz",
    title: "Lamellendach",
    category: "Terrasse & Garten",
    summary:
      "Licht, Schatten und klare Linien: Einblicke in Lamellendächer aus der KLOTZ-Referenzgalerie.",
    href: "/referenzen/lamellendach-referenz",
    image: {
      src: "/images/lamelle-detail-1.webp",
      alt: "Lamellendach an einem Wohnhaus",
      width: 4100,
      height: 1400,
      sourceUrl: `${legacyBase}/lamellendach`,
      rightsStatus: "rights-check",
    },
    status: "legacy",
    factCompleteness: "partial",
  },
]);

export const featuredArticles: Article[] = z.array(articleSchema).parse([
  {
    id: "project-process",
    slug: "vom-aufmass-bis-zur-abnahme",
    title: "Von der Idee bis zur Abnahme: So planen Sie Ihr Projekt.",
    excerpt:
      "Welche Angaben beim Einstieg helfen und worauf es bei Aufmaß, Angebot und Montage ankommt.",
    href: "/wissen/vom-aufmass-bis-zur-abnahme",
    topic: "Ablauf & Beratung",
    readingTime: "3 Min.",
    updatedAt: "2026-09-24",
    status: "draft",
  },
  {
    id: "terrace-costs",
    slug: "was-kostet-eine-terrassenueberdachung",
    title: "Was kostet eine Terrassenüberdachung mit Montage?",
    excerpt:
      "Welche Faktoren den Preis beeinflussen – von Konstruktion und Verglasung bis zu Fundament, Sonnenschutz und Montage.",
    href: "/wissen/was-kostet-eine-terrassenueberdachung",
    topic: "Kosten & Planung",
    readingTime: "3 Min.",
    updatedAt: "2026-09-24",
    status: "draft",
  },
  {
    id: "lamella-or-glass",
    slug: "lamellendach-oder-glasdach",
    title: "Lamellendach oder Glasdach – was passt wann?",
    excerpt:
      "Licht, Schatten, Wetterschutz und Architektur: die wichtigsten Unterschiede als Entscheidungshilfe.",
    href: "/wissen/lamellendach-oder-glasdach",
    topic: "Terrasse & Garten",
    readingTime: "3 Min.",
    updatedAt: "2026-09-24",
    status: "draft",
  },
  {
    id: "terrace-permit",
    slug: "genehmigung-terrassenueberdachung",
    title: "Brauche ich eine Genehmigung für eine Terrassenüberdachung?",
    excerpt:
      "Warum Standort, Größe und Landesrecht entscheidend sind und welche Fragen vor Projektstart geklärt werden sollten.",
    href: "/wissen/genehmigung-terrassenueberdachung",
    topic: "Genehmigung",
    readingTime: "3 Min.",
    updatedAt: "2026-09-24",
    status: "draft",
  },
]);

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Beratung",
    description: "Wir klären Nutzung, Wünsche und Rahmenbedingungen.",
    icon: "consulting",
  },
  {
    number: "02",
    title: "Aufmaß",
    description: "Die Situation vor Ort wird präzise aufgenommen.",
    icon: "measure",
  },
  {
    number: "03",
    title: "Planung & Angebot",
    description: "Sie erhalten eine nachvollziehbare Lösung für Ihr Projekt.",
    icon: "planning",
  },
  {
    number: "04",
    title: "Montage",
    description: "Lieferung und fachgerechter Einbau werden koordiniert.",
    icon: "assembly",
  },
  {
    number: "05",
    title: "Service",
    description: "Auch nach der Umsetzung bleibt KLOTZ Ansprechpartner.",
    icon: "service",
  },
];
