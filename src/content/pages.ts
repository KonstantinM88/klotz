export type OverviewPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  heading: string;
  body: string[];
  features: string[];
};

export const overviewPages: OverviewPageContent[] = [
  {
    slug: "terrasse-garten",
    eyebrow: "Outdoor Living",
    title: "Mehr Raum für das Leben draußen.",
    intro:
      "Terrassenüberdachungen, Lamellendächer, Pergolen und Glassysteme – passend zu Architektur, Nutzung und Grundstück.",
    heading: "Wetterschutz, Licht und Komfort im richtigen Verhältnis.",
    body: [
      "Eine gute Überdachung beginnt nicht beim Produkt, sondern bei der Frage, wie Sie Ihren Außenbereich nutzen möchten. KLOTZ verbindet persönliche Beratung, präzises Aufmaß und eine Lösung, die sich gestalterisch in Ihr Zuhause einfügt.",
      "Die Detailseiten und Produktdaten werden im nächsten Schritt anhand der freigegebenen Hersteller- und Projektdaten ausgebaut.",
    ],
    features: [
      "Terrassenüberdachungen",
      "Lamellendächer & Pergolen",
      "Glaselemente & Seitenschutz",
      "Sonnenschutz & Ausstattung",
    ],
  },
  {
    slug: "fenster-tueren",
    eyebrow: "Bauelemente",
    title: "Fenster und Türen, die zu Ihrem Gebäude passen.",
    intro:
      "Für Modernisierung, Neubau und Bestand: abgestimmt auf Gestaltung, Energieeffizienz, Komfort und Sicherheit.",
    heading: "Gute Bauelemente wirken jeden Tag.",
    body: [
      "Material, Verglasung, Beschläge und Montage entscheiden gemeinsam über das Ergebnis. Deshalb betrachtet KLOTZ nicht nur einzelne Produkte, sondern die jeweilige Einbausituation und Ihre Anforderungen.",
      "Konkrete Systeme, Hersteller und Leistungswerte werden nach Sichtung der freigegebenen Produktunterlagen ergänzt.",
    ],
    features: [
      "Fensterlösungen",
      "Haus- & Nebeneingangstüren",
      "Sicherheitsausstattung",
      "Aufmaß & fachgerechte Montage",
    ],
  },
  {
    slug: "zaun-tor",
    eyebrow: "Grundstück",
    title: "Klare Grenzen. Starke Gestaltung.",
    intro:
      "Zäune, Sichtschutz und Toranlagen für private, gewerbliche und öffentliche Grundstücke.",
    heading: "Funktion und Architektur zusammen gedacht.",
    body: [
      "Ein Zaun soll schützen, führen und zum Umfeld passen. KLOTZ plant Anlagen mit Blick auf Gelände, Zufahrt, Bedienkomfort und das gewünschte Maß an Privatsphäre.",
      "Die spätere Website kann Varianten, Materialien und Referenzen filterbar und verständlich gegenüberstellen.",
    ],
    features: [
      "Zaun- & Sichtschutzsysteme",
      "Dreh- & Schiebetore",
      "Antriebe & Zugangslösungen",
      "Montage & Service",
    ],
  },
  {
    slug: "gewerbekunden",
    eyebrow: "B2B & Wohnungswirtschaft",
    title: "Verlässlich für Objekt, Bestand und Betrieb.",
    intro:
      "Planbare Leistungen, klare Kommunikation und feste Ansprechpartner für professionelle Auftraggeber.",
    heading: "Komplexe Anforderungen strukturiert umsetzen.",
    body: [
      "Gewerbliche und institutionelle Projekte brauchen belastbare Abläufe. Die künftige Plattform schafft dafür eigene Leistungsseiten, strukturierte Projektanfragen und nachvollziehbare Referenzen.",
      "Ausschreibungsunterlagen, Objektlisten oder wiederkehrende Serviceanfragen lassen sich später über geschützte Workflows ergänzen.",
    ],
    features: [
      "Objektgeschäft & Bestand",
      "Wohnungswirtschaft",
      "Gewerbe & Gastronomie",
      "Öffentliche Auftraggeber",
    ],
  },
  {
    slug: "referenzen",
    eyebrow: "Projekte",
    title: "Umgesetzt. Erlebbar. Nachvollziehbar.",
    intro:
      "Ausgewählte Projekte aus dem bestehenden Auftritt – künftig ergänzt um Aufgabenstellung, Lösung, Produkte und Ergebnis.",
    heading: "Referenzen als überzeugender Leistungsnachweis.",
    body: [
      "Die neue Website macht aus einer Bildergalerie echte Projektgeschichten. So verstehen Interessenten nicht nur, was schön aussieht, sondern auch, welche Herausforderung KLOTZ gelöst hat.",
      "Für den vollständigen Ausbau benötigen wir zu den stärksten Projekten Ort, Zeitraum, Leistungsumfang, verwendete Systeme und freigegebene Originalbilder.",
    ],
    features: [
      "Filter nach Leistungsbereich",
      "Regionale Projektsignale",
      "Vorher-Nachher-Dokumentation",
      "Direkte Anfrage aus dem Projekt",
    ],
  },
  {
    slug: "wissen",
    eyebrow: "Ratgeber",
    title: "Orientierung vor der Entscheidung.",
    intro:
      "Klare Antworten auf Fragen zu Planung, Kosten, Material, Pflege und Genehmigung.",
    heading: "Hilfreiche Inhalte für Menschen und Suchsysteme.",
    body: [
      "Der Wissensbereich beantwortet konkrete Kundenfragen in verständlicher Sprache. Das stärkt klassische Suchmaschinenoptimierung und schafft zugleich klar strukturierte Quellen für KI-gestützte Suchsysteme.",
      "Alle Fachtexte werden vor Veröffentlichung fachlich durch KLOTZ geprüft; das Demo zeigt zunächst die geplante Themenarchitektur.",
    ],
    features: [
      "Kosten & Planung",
      "Produktvergleiche",
      "Genehmigung & Vorbereitung",
      "Pflege & Wartung",
    ],
  },
  {
    slug: "unternehmen",
    eyebrow: "KLOTZ aus Merseburg",
    title: "Persönlich vor Ort. Verlässlich im Projekt.",
    intro:
      "Ein regionaler Fachbetrieb für hochwertige Bauelemente und Außenräume.",
    heading: "Vertrauen entsteht durch Nähe und saubere Arbeit.",
    body: [
      "Die Unternehmensseite wird Herkunft, Haltung, Team und Arbeitsweise glaubwürdig verbinden. Für das Demo verwenden wir ausschließlich bestätigte Standort- und Leistungsdaten aus dem bestehenden Auftritt.",
      "Historie, Teamgröße, Zertifizierungen und Partner werden erst nach Freigabe ergänzt – ohne erfundene Werbeversprechen.",
    ],
    features: [
      "Persönliche Beratung",
      "Regionaler Ansprechpartner",
      "Planung & Aufmaß",
      "Montage & Service",
    ],
  },
  {
    slug: "angebote",
    eyebrow: "Aktuell",
    title: "Angebote mit echtem Mehrwert.",
    intro:
      "Aktionsangebote werden künftig aktuell, strukturiert und mit klarer Laufzeit dargestellt.",
    heading: "Noch keine freigegebenen Angebote.",
    body: [
      "Dieser Bereich ist technisch vorbereitet. Inhalte erscheinen erst, wenn Preis, Zeitraum, Verfügbarkeit und Bedingungen durch KLOTZ bestätigt sind.",
    ],
    features: [
      "Klare Laufzeiten",
      "Transparente Bedingungen",
      "Direkte Produktanfrage",
      "Messbare Kampagnen",
    ],
  },
  {
    slug: "fundgrube",
    eyebrow: "Fundgrube",
    title: "Einzelstücke und verfügbare Bauelemente.",
    intro:
      "Ein vorbereiteter Bereich für Restposten, Ausstellungsstücke und kurzfristig verfügbare Produkte.",
    heading: "Schnell auffindbar und einfach anfragbar.",
    body: [
      "Im späteren System können Artikel mit Zustand, Maßen, Preis und Verfügbarkeit gepflegt werden. Im Demo werden bewusst keine unbestätigten Produkte angeboten.",
    ],
    features: [
      "Verfügbarkeitsstatus",
      "Maße & technische Daten",
      "Reservierungsanfrage",
      "Automatische Deaktivierung",
    ],
  },
  {
    slug: "jobs",
    eyebrow: "Karriere",
    title: "Gemeinsam gute Arbeit leisten.",
    intro:
      "Stellenangebote und Einblicke in die Arbeit bei KLOTZ – nach inhaltlicher Freigabe.",
    heading: "Ein klarer Einstieg für Bewerberinnen und Bewerber.",
    body: [
      "Der Bereich kann offene Stellen, Ausbildungsplätze und Initiativbewerbungen aufnehmen. Konkrete Ausschreibungen werden erst nach Abstimmung veröffentlicht.",
    ],
    features: [
      "Stellenprofile",
      "Direkte Bewerbung",
      "Dokument-Upload",
      "Datenschutzkonformer Prozess",
    ],
  },
  {
    slug: "downloads",
    eyebrow: "Service",
    title: "Dokumente zentral an einem Ort.",
    intro:
      "Produktinformationen, Pflegehinweise und Unterlagen – versioniert und leicht auffindbar.",
    heading: "Vorbereitet für freigegebene Dokumente.",
    body: [
      "Aktuell liegen noch keine zur Veröffentlichung bestätigten Dateien vor. Die spätere Inhaltsverwaltung kann Downloads Produkten und Themen eindeutig zuordnen.",
    ],
    features: [
      "Produktdatenblätter",
      "Pflegehinweise",
      "Planungsunterlagen",
      "Versionierte Dateien",
    ],
  },
  {
    slug: "kontakt",
    eyebrow: "Kontakt",
    title: "Sprechen wir über Ihr Vorhaben.",
    intro:
      "KLOTZ GmbH · Zur Saale 16 · 06217 Merseburg / Meuschau · 03461 455-0 · info@klotz.mobi",
    heading: "Persönlich erreichbar in Merseburg-Meuschau.",
    body: [
      "Die Kontaktdaten stammen aus dem bestehenden Webauftritt und werden vor dem Livegang nochmals bestätigt. Für konkrete Vorhaben nutzen Sie am besten die strukturierte Projektanfrage.",
    ],
    features: [
      "Telefon: 03461 455-0",
      "E-Mail: info@klotz.mobi",
      "WhatsApp: 0172 6543432",
      "Projektanfrage online",
    ],
  },
  {
    slug: "impressum",
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro:
      "Rechtliche Pflichtangaben werden vor Veröffentlichung aus dem aktuellen, anwaltlich geprüften Bestand übernommen.",
    heading: "Noch nicht zur Veröffentlichung freigegeben.",
    body: [
      "Diese Demoseite ist nicht öffentlich indexiert. Vertretungsberechtigte, Registerdaten, Umsatzsteuer-ID und weitere Pflichtangaben müssen vor einem Livegang vollständig geprüft werden.",
    ],
    features: [
      "Firmenangaben prüfen",
      "Registerdaten bestätigen",
      "Verantwortlichkeit ergänzen",
      "Rechtliche Freigabe dokumentieren",
    ],
  },
  {
    slug: "datenschutz",
    eyebrow: "Rechtliches",
    title: "Datenschutz",
    intro:
      "Die finale Datenschutzerklärung richtet sich nach Hosting, Tracking, Formularen und eingebundenen Diensten.",
    heading: "Datenschutz wird technisch mitgedacht.",
    body: [
      "Das Demo lädt keine Analyse- oder Marketingdienste. Vor dem Livegang werden Datenflüsse, Aufbewahrungsfristen, Einwilligungen und Auftragsverarbeiter vollständig dokumentiert.",
    ],
    features: [
      "Datensparsame Technik",
      "Consent erst bei Bedarf",
      "Formularschutz",
      "Dokumentierte Datenflüsse",
    ],
  },
];

export function getOverviewPage(slug: string) {
  return overviewPages.find((page) => page.slug === slug);
}
