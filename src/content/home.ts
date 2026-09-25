import type { HomeContent } from "@/domain/content/presentation";

// Editorial demo copy. The service scope comes from the client's brief;
// individual project facts and prices still require client confirmation.
export const homeContent: HomeContent = {
  heroLead:
    "Terrassenüberdachungen, Fenster, Türen, Zäune und Tore. Beratung und Planung für Ihr Zuhause oder Ihr Objekt in Merseburg und der Region.",
  introCopy:
    "Mehr Wetterschutz auf der Terrasse, neue Fenster oder ein gut geplanter Grundstücksabschluss: Entscheidend ist, was zu Ihrem Gebäude und Ihrem Alltag passt. KLOTZ verbindet Gestaltung, Planung und Einbau.",
  expertiseLead:
    "Wählen Sie den Bereich, der Ihrem Vorhaben am nächsten kommt. Die Details lassen sich Schritt für Schritt klären.",
  projectsLead:
    "Wie wirken Glas, Lamellen und Überdachungen im gebauten Umfeld? Aufnahmen aus dem KLOTZ-Bildarchiv geben Einblicke in bestehende Projekte.",
  processLead:
    "Beratung, Aufmaß, Planung und Montage bauen aufeinander auf. So wird aus einer ersten Idee ein konkretes Vorhaben, das sich gemeinsam besprechen lässt.",
  businessLead:
    "Für Hausverwaltungen und Unternehmen zählen die passende Lösung und klare Abläufe. Entdecken Sie Bauelemente, Grundstücksabschlüsse sowie Wartung und Service für unterschiedliche Objektanforderungen.",
  faq: [
    {
      id: "terrace-choice",
      question: "Welche Lösung passt zu meiner Terrasse?",
      answer:
        "Ob Glasdach, Lamellendach oder Pergola infrage kommt, hängt davon ab, wie Sie den Platz nutzen möchten und welche baulichen Bedingungen vorliegen. Ein Vergleich hilft, die richtigen Fragen für die Beratung zu sammeln.",
      href: "/wissen/lamellendach-oder-glasdach",
      linkLabel: "Lamellendach und Glasdach vergleichen",
    },
    {
      id: "cost-factors",
      question: "Was beeinflusst die Kosten eines Projekts?",
      answer:
        "Maße, Ausführung, Einbausituation und gewünschte Funktionen beeinflussen den Aufwand. Ein belastbarer Preis setzt voraus, dass Anforderungen und Gegebenheiten für das konkrete Projekt geklärt sind.",
      href: "/wissen/was-kostet-eine-terrassenueberdachung",
      linkLabel: "Kostenfaktoren verstehen",
    },
    {
      id: "first-conversation",
      question: "Was sollte ich für ein erstes Gespräch vorbereiten?",
      answer:
        "Hilfreich sind die gewünschte Nutzung, der Projektort, Informationen zur bestehenden Situation und Ihre offenen Fragen. Sie müssen sich noch nicht auf ein Produkt festgelegt haben.",
      href: "/wissen/vom-aufmass-bis-zur-abnahme",
      linkLabel: "Den Ablauf kennenlernen",
    },
    {
      id: "commercial-projects",
      question: "Gibt es auch Lösungen für Unternehmen und Hausverwaltungen?",
      answer:
        "Ja. Der Bereich Gewerbekunden zeigt Leistungen für Wohnungswirtschaft, Betriebe sowie Hotellerie und Gastronomie. Welche Lösung sinnvoll ist, hängt vom Objekt und seiner Nutzung ab.",
      href: "/gewerbekunden",
      linkLabel: "Leistungen für Gewerbekunden ansehen",
    },
    {
      id: "references",
      question: "Wo kann ich bestehende Projekte ansehen?",
      answer:
        "In den Referenzen finden Sie reale Aufnahmen aus dem KLOTZ-Bildarchiv. Die Bilder zeigen unterschiedliche Lösungen; nicht bestätigte Angaben zu einzelnen Objekten werden im Demo bewusst nicht ergänzt.",
      href: "/referenzen",
      linkLabel: "Referenzen entdecken",
    },
  ],
  sourceRefs: ["S-01", "S-02", "S-05", "S-06"],
  status: "draft",
};
