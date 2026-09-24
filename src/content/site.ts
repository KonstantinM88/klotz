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
        src: `${legacyBase}/sites/default/files/styles/produkte_gallerie_hauptbild/public/T%C3%9C.JPG?itok=B-yHFG0J`,
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
        src: `${legacyBase}/sites/default/files/styles/flexslider_full/public/Slider_T%C3%BCren_20260221_2200x640px_1.jpg?itok=kIVEEKll`,
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
        src: `${legacyBase}/sites/default/files/styles/flexslider_full/public/Zaun%20mit%20Multibox_Wisniowski_2022.jpg?itok=4UyS3N6K`,
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
        src: `${legacyBase}/sites/default/files/styles/produkte_gallerie_hauptbild/public/IMG%20BRERA%20P_01.jpg?itok=tMc5mHoj`,
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
    id: "stormthaler-see",
    slug: "ueberdachung-stoermthaler-see",
    title: "Überdachung am Störmthaler See",
    category: "Terrasse & Garten",
    region: "Störmthaler See",
    summary:
      "Eine bestehende Referenz aus dem KLOTZ-Portfolio. Projektdetails werden mit dem Auftraggeber ergänzt.",
    href: "/referenzen/ueberdachung-stoermthaler-see",
    image: {
      src: `${legacyBase}/sites/default/files/styles/flexslider_full/public/Slider_St%C3%B6rmtaler_See_20260221_0.jpg?itok=I4LqzGfE`,
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
      "Ein Projekt aus dem bestehenden Webauftritt. Leistungsumfang und technische Angaben sind noch abzustimmen.",
    href: "/referenzen/einzaeunung-stadtstadion",
    image: {
      src: `${legacyBase}/sites/default/files/styles/full_post/public/Einz%C3%A4unung_Stadtstadion_02%202025_0.png?itok=jme98AgX`,
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
      "Ausgewähltes Bildmaterial aus dem bestehenden KLOTZ-Auftritt; konkrete Projektdaten folgen nach Freigabe.",
    href: "/referenzen/lamellendach-referenz",
    image: {
      src: `${legacyBase}/sites/default/files/styles/flexslider_full/public/Slider_Lammelle_20260221_2050x620_0.jpg?itok=XkNFM1IX`,
      alt: "Lamellendach an einem Wohnhaus",
      width: 4100,
      height: 1400,
      sourceUrl: `${legacyBase}/slide/lamellendach`,
      rightsStatus: "rights-check",
    },
    status: "legacy",
    factCompleteness: "partial",
  },
]);

export const featuredArticles: Article[] = z.array(articleSchema).parse([
  {
    id: "terrace-costs",
    slug: "was-kostet-eine-terrassenueberdachung",
    title: "Was kostet eine Terrassenüberdachung mit Montage?",
    excerpt:
      "Welche Faktoren den Preis beeinflussen – von Konstruktion und Verglasung bis zu Fundament, Sonnenschutz und Montage.",
    href: "/wissen/was-kostet-eine-terrassenueberdachung",
    topic: "Kosten & Planung",
    readingTime: "7 Min.",
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
    readingTime: "6 Min.",
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
    readingTime: "5 Min.",
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
