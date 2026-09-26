import type { CompanyPageContent } from "@/domain/content/presentation";

export const companyPageContent: CompanyPageContent = {
  eyebrow: "KLOTZ / Über uns",
  title: "Aus Meuschau. Für Räume, die bleiben.",
  lead: "KLOTZ verbindet Bauelemente und Lösungen für den Außenbereich mit persönlicher Beratung, technischer Vorbereitung und Montage. Für Menschen, Gebäude und Anforderungen, die unterschiedlich sind.",
  history: {
    eyebrow: "Herkunft / Haltung",
    title: "Ein Name mit Geschichte. Ein Blick nach vorn.",
    paragraphs: [
      "Der Name KLOTZ ist in der Region Halle–Leipzig schon seit der Zeit vor der Wiedervereinigung bekannt. Der Standort in Merseburg-Meuschau ist bis heute der Ausgangspunkt für Projekte rund ums Haus.",
      "Nach Angaben des bisherigen Webauftritts wurde die KLOTZ GmbH 2017 in ihrer heutigen Form gegründet. Was geblieben ist: der Anspruch, Produkte, Beratung und handwerkliche Umsetzung sinnvoll miteinander zu verbinden.",
    ],
  },
  team: [
    {
      id: "team-klotz",
      kind: "person",
      name: "Herr Klotz",
      role: "Geschäftsführer",
      description: "Verantwortlich für die Geschäftsführung von KLOTZ.",
      image: {
        src: "/images/team-klotz.webp",
        alt: "Herr Klotz mit KLOTZ-Helm auf einer Baustelle",
        width: 960,
        height: 962,
      },
      status: "legacy",
    },
    {
      id: "team-shafiee",
      kind: "person",
      name: "Frau Shafiee",
      role: "Arbeitsvorbereitung / Kalkulation / Einkauf gewerbliche Kunden",
      description:
        "Arbeitsvorbereitung, Kalkulation und Einkauf für gewerbliche Kunden.",
      image: {
        src: "/images/team-shafiee.webp",
        alt: "Porträt von Frau Shafiee",
        width: 960,
        height: 1280,
      },
      status: "legacy",
    },
    {
      id: "team-walther",
      kind: "person",
      name: "Herr Walther",
      role: "Fachberater · Verkauf",
      description: "Fachberatung und Verkauf als Kontakt für Kundenanfragen.",
      image: {
        src: "/images/team-walther.webp",
        alt: "Porträt von Herrn Walther im Ausstellungsbereich",
        width: 960,
        height: 1029,
      },
      status: "legacy",
    },
    {
      id: "team-kimmel",
      kind: "person",
      name: "Herr Kimmel",
      role: "Fachberater · Verkauf",
      description: "Fachberatung und Verkauf rund um Kundenprojekte.",
      image: {
        src: "/images/team-kimmel.webp",
        alt: "Porträt von Herrn Kimmel in der Ausstellung",
        width: 944,
        height: 944,
      },
      status: "legacy",
    },
    {
      id: "team-montage",
      kind: "group",
      name: "Montageteam",
      role: "Montage",
      description:
        "Ein gemeinsames Foto aus der bisherigen Teamübersicht. Die Montage verbindet Planung und fertiges Ergebnis vor Ort.",
      image: {
        src: "/images/team-montage.webp",
        alt: "Gruppenfoto des KLOTZ-Teams zwischen zwei Firmenfahrzeugen",
        width: 960,
        height: 563,
      },
      status: "legacy",
    },
    {
      id: "team-kriester",
      kind: "person",
      name: "Frau Kriester",
      role: "Leiterin Innendienst Technik & Verkauf",
      description: "Leitung des Innendienstes für Technik und Verkauf.",
      image: {
        src: "/images/team-kriester.webp",
        alt: "Porträt von Frau Kriester",
        width: 767,
        height: 768,
      },
      status: "legacy",
    },
    {
      id: "team-temgoua",
      kind: "person",
      name: "Herr Temgoua",
      role: "Auszubildender 2. Lehrjahr Metallbauer",
      description:
        "Ausbildung zum Metallbauer, laut bisheriger Teamübersicht im zweiten Lehrjahr.",
      image: {
        src: "/images/team-temgoua.webp",
        alt: "Porträt von Herrn Temgoua in Arbeitskleidung",
        width: 960,
        height: 1280,
      },
      status: "legacy",
    },
    {
      id: "team-degenhardt",
      kind: "person",
      name: "Herr Degenhardt",
      role: "Auszubildender 1. Lehrjahr Metallbauer",
      description:
        "Ausbildung zum Metallbauer, laut bisheriger Teamübersicht im ersten Lehrjahr.",
      image: {
        src: "/images/team-degenhardt.webp",
        alt: "Porträt von Herrn Degenhardt in KLOTZ-Kleidung",
        width: 960,
        height: 1280,
      },
      status: "legacy",
    },
  ],
  audiences: [
    {
      title: "Für private Bauherren",
      text: "Terrassen, Fenster, Türen und Grundstückslösungen, die zur Nutzung und zum Gebäude passen.",
      href: "/terrasse-garten",
    },
    {
      title: "Für Wohnungswirtschaft",
      text: "Bauelemente, Instandsetzung und Service für Wohnungen und verwaltete Bestände.",
      href: "/gewerbekunden/wohnungswirtschaft",
    },
    {
      title: "Für Unternehmen",
      text: "Funktionale Lösungen für gewerblich genutzte Gebäude und Außenbereiche.",
      href: "/gewerbekunden",
    },
  ],
  process: [
    {
      title: "Zuhören & beraten",
      text: "Wir klären, was ein Bauelement oder Außenraum im Alltag leisten soll.",
    },
    {
      title: "Aufmaß & vorbereiten",
      text: "Die Situation vor Ort und die technischen Anforderungen fließen in die Planung ein.",
    },
    {
      title: "Angebot & abstimmen",
      text: "Material, Ausführung und Leistungsumfang werden gemeinsam besprochen.",
    },
    {
      title: "Montieren & übergeben",
      text: "Von der Realisierung bis zur Abnahme bleibt der Ablauf nachvollziehbar.",
    },
  ],
  showroom: {
    title: "Lösungen sehen. Materialien vergleichen.",
    paragraphs: [
      "Am Firmenstandort in Meuschau beschreibt KLOTZ eine Innen- und Außenausstellung. Sie bietet Gelegenheit, Ausführungen im persönlichen Gespräch kennenzulernen und Fragen direkt am Beispiel zu klären.",
      "Für einen ausführlichen Besuch vereinbaren Sie am besten vorab einen Termin.",
    ],
  },
  sourceRefs: ["S-03", "S-01"],
  status: "draft",
};
