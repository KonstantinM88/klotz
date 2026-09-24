import type { ServiceDetail } from "@/domain/content/presentation";

const terrace = "https://www.klotz.mobi/portfolio/terrassenueberdachung";
const windows = "https://www.klotz.mobi/portfolio/fenster";
const fence = "https://www.klotz.mobi/portfolio/zaeune";
const company = "https://www.klotz.mobi/ueber-uns";
type Seed = [string, string, string, string, string[], string[], string[]];
const seeds: Seed[] = [
  [
    "terrasse-garten/terrassenueberdachungen",
    "Terrassenüberdachungen",
    "Ein Lieblingsplatz. Bei mehr Wetter.",
    "Eine Überdachung macht die Terrasse unabhängiger vom Wetter. Entscheidend sind das Zusammenspiel von Dach, Beschattung und seitlichem Schutz sowie der Anschluss an Ihr Haus.",
    [
      "Glasdach für einen offenen Blick nach oben",
      "Aluminiumkonstruktion passend zur Fassade",
      "Beschattung und seitliche Glaselemente nach Bedarf",
    ],
    [
      "Wie fällt die Sonne auf Terrasse und Wohnräume?",
      "Wo können Stützen und Fundamente stehen?",
      "Wie werden Dachanschluss und Regenwasser geführt?",
    ],
    [
      "Breite, Tiefe und Tragkonstruktion",
      "Fundamente und Zustand der Hauswand",
      "Verglasung, Beschattung und Montagezugang",
    ],
  ],
  [
    "terrasse-garten/lamellendaecher",
    "Lamellendächer",
    "Schatten nach Ihrem Gefühl.",
    "Ein Lamellendach lässt sich an wechselndes Licht anpassen. Für die Planung zählen Standort, Bedienung und Entwässerung ebenso wie Farbe und Proportionen.",
    [
      "Freistehend als eigener Gartenraum",
      "An das Gebäude angebunden",
      "Ergänzbar um seitlichen Schutz je nach System",
    ],
    [
      "Wie soll das Dach im Alltag genutzt werden?",
      "Wo sind Stromanschluss und Entwässerung möglich?",
      "Welche Wind- und Schneelasten sind am Standort zu berücksichtigen?",
    ],
    [
      "Abmessungen und Systemwahl",
      "Antrieb und Steuerung",
      "Seitenelemente, Licht und Untergrund",
    ],
  ],
  [
    "terrasse-garten/pergolen",
    "Pergolen",
    "Ein neuer Rahmen für draußen.",
    "Pergolen gliedern den Außenbereich und bieten je nach Ausführung beweglichen Sonnenschutz. Das richtige Konzept beginnt bei Ihren Lieblingszeiten auf der Terrasse.",
    [
      "Textiler Sonnenschutz",
      "Freistehende oder wandgebundene Lösung",
      "Ergänzende seitliche Beschattung",
    ],
    [
      "Nutzung am Morgen oder Nachmittag",
      "Befestigung und Untergrund",
      "Umgang mit Wind und Wetter nach Herstellerangaben",
    ],
    [
      "Konstruktion und Tuchfläche",
      "Bedienung und Ausstattung",
      "Befestigung und Montage",
    ],
  ],
  [
    "terrasse-garten/sommer-wintergaerten",
    "Sommer- & Wintergärten",
    "Dem Garten ein Stück näher.",
    "Ein unbeheizter Sommergarten und ein beheizter Wintergarten erfüllen unterschiedliche Wünsche. Klären Sie zuerst die gewünschte Nutzung über das Jahr.",
    [
      "Unbeheizter geschützter Übergangsraum",
      "Ganzjährig genutzter Wintergarten",
      "Verglasung, Belüftung und Beschattung im Zusammenspiel",
    ],
    [
      "Saisonale oder ganzjährige Nutzung",
      "Wärmeschutz und Anschluss an das Gebäude",
      "Baurecht, Fundament und Lüftung",
    ],
    [
      "Nutzungsanforderungen und Größe",
      "Baukörper und Verglasung",
      "Heizung, Beschattung und Fundament",
    ],
  ],
  [
    "terrasse-garten/glasschiebewaende",
    "Glasschiebewände",
    "Offener Blick. Geschützter Platz.",
    "Seitliche Glaselemente können eine Überdachung ergänzen und Zugluft reduzieren. Öffnungsrichtung, Führung und die vorhandene Konstruktion bestimmen die passende Lösung.",
    [
      "Schiebbare Glasfelder",
      "Faltbare Elemente je nach System",
      "Kombination mit vorhandener Überdachung nach Prüfung",
    ],
    [
      "Tragfähigkeit der bestehenden Konstruktion",
      "Laufschienen und nutzbare Durchgänge",
      "Reinigung und Entwässerung",
    ],
    [
      "Anzahl und Größe der Glasfelder",
      "Schienen und Anschlussdetails",
      "Anpassung an den Bestand",
    ],
  ],
  [
    "terrasse-garten/sonnenschutz",
    "Sonnenschutz",
    "Licht genießen. Hitze mitdenken.",
    "Die wirksame Beschattung beginnt mit der Ausrichtung des Hauses. Markisen und seitlicher Sonnenschutz werden auf Sonnenstand, Dach und gewünschte Bedienung abgestimmt.",
    [
      "Gelenkarmmarkisen",
      "Unter- und Aufdachbeschattung",
      "Senkrechter Sonnen- und Sichtschutz",
    ],
    [
      "Sonnenverlauf und Schattenbedarf",
      "Montagepunkte und Stromversorgung",
      "Windempfindlichkeit und Steuerung",
    ],
    ["Tuchfläche und Bauart", "Antrieb und Sensorik", "Montageaufwand"],
  ],
  [
    "fenster-tueren/fenster",
    "Fenster",
    "Mehr Wohnqualität, jeden Tag.",
    "Neue Fenster verändern Licht, Komfort und die Wirkung der Fassade. Wir betrachten Material, Öffnung, Verglasung und Einbausituation als zusammenhängende Planung.",
    ["Kunststofffenster", "Aluminiumfenster", "Holzfenster"],
    [
      "Bestand, Anschlussfugen und Laibungen",
      "Wärme-, Schall- und Einbruchschutz nach Bedarf",
      "Lüftungskonzept und Sonnenschutz",
    ],
    [
      "Maße und Öffnungsarten",
      "Material, Verglasung und Beschläge",
      "Ausbau, Entsorgung und Anschlussarbeiten",
    ],
  ],
  [
    "fenster-tueren/haustueren",
    "Haustüren",
    "Ein Eingang mit Persönlichkeit.",
    "Ihre Haustür soll zum Haus passen und sich im Alltag gut anfühlen. Gestaltung, Bedienkomfort und gewünschter Schutz werden gemeinsam betrachtet.",
    [
      "Geschlossene oder verglaste Türfüllungen",
      "Seitenteile und Oberlichter",
      "Mechanische oder elektronische Bedienung nach System",
    ],
    [
      "Lichte Durchgangsbreite",
      "Schwelle und Anschlusshöhen",
      "Verriegelung und Nutzung",
    ],
    [
      "Material und Abmessungen",
      "Glas und Seitenteile",
      "Schließsystem und Montage",
    ],
  ],
  [
    "fenster-tueren/innentueren",
    "Innentüren",
    "Räume sinnvoll verbinden.",
    "Innentüren strukturieren den Grundriss. Neben Oberfläche und Stil zählen Öffnungsrichtung, Platzbedarf und die Anforderungen der einzelnen Räume.",
    [
      "Geschlossene Türblätter",
      "Glasausschnitte",
      "Dreh- oder Schiebelösungen nach Einbausituation",
    ],
    [
      "Wandstärke und Rohbaumaße",
      "Bodenaufbau und Anschlagrichtung",
      "Schallschutz und Feuchtraumeignung",
    ],
    [
      "Türblatt und Oberfläche",
      "Zarge und Beschläge",
      "Anpassung der Öffnungen",
    ],
  ],
  [
    "fenster-tueren/rolllaeden",
    "Rollläden",
    "Privatsphäre nach Bedarf.",
    "Rollläden ergänzen Fenster um Verdunkelung und Sichtschutz. Bei einer Nachrüstung sind Kasten, Führungsschienen und Bedienung frühzeitig abzustimmen.",
    [
      "Vorbau- oder Aufsatzlösung",
      "Manuelle Bedienung",
      "Motorisierung nach Ausführung",
    ],
    [
      "Platz für Kasten und Führung",
      "Zugang zur Wartung",
      "Stromversorgung bei Motorisierung",
    ],
    [
      "Elementgröße und Bauart",
      "Antrieb und Steuerung",
      "Einbindung in den Bestand",
    ],
  ],
  [
    "fenster-tueren/einbruchschutz",
    "Einbruchschutz",
    "Schwachstellen gemeinsam betrachten.",
    "Sicherheit entsteht aus aufeinander abgestimmten Bauteilen und fachgerechter Montage. Welche Maßnahmen sinnvoll sind, hängt von Gebäude und Nutzung ab.",
    [
      "Fenster- und Türbeschläge prüfen",
      "Verriegelung und Verglasung abstimmen",
      "Nachrüstung nach Bestandsaufnahme",
    ],
    [
      "Zugängliche Fenster und Nebentüren",
      "Zustand bestehender Bauteile",
      "Geeignete geprüfte Systeme",
    ],
    ["Bestandsaufnahme", "Ausgewählte Schutzmaßnahmen", "Bauliche Anpassungen"],
  ],
  [
    "zaun-tor/zaunanlagen",
    "Zaunanlagen",
    "Ein klarer Abschluss für Ihr Grundstück.",
    "Eine Zaunanlage verbindet Schutz und Gestaltung. Gelände, Grundstücksgrenzen und Zugang werden zusammen geplant, damit die Anlage im Alltag funktioniert.",
    [
      "Offene Metallzäune",
      "Doppelstabmatten",
      "Gestalterische Kombination mit Toren",
    ],
    [
      "Geländeverlauf und Grenzverlauf",
      "Pfosten, Fundamente und Leitungen",
      "Zugang, Pflege und spätere Nutzung",
    ],
    [
      "Länge, Höhe und Material",
      "Geländeanpassung und Fundamente",
      "Tore und Montagezugang",
    ],
  ],
  [
    "zaun-tor/sichtschutz",
    "Sichtschutz",
    "Mehr Ruhe im eigenen Garten.",
    "Sichtschutz schafft Rückzug. Höhe, Material und Offenheit sollten zur Umgebung passen und frühzeitig mit den örtlichen Vorgaben abgeglichen werden.",
    [
      "Geschlossene Zaunfelder",
      "Teilweise offene Gestaltung",
      "Kombination mit bestehendem Zaun",
    ],
    [
      "Blickrichtungen und Verschattung",
      "Windbelastung und Befestigung",
      "Grundstücksgrenzen und örtliche Regeln",
    ],
    [
      "Fläche und Material",
      "Pfosten und Fundamente",
      "Anschluss an bestehende Anlagen",
    ],
  ],
  [
    "zaun-tor/hoftore",
    "Hoftore",
    "Einladend. Und gut durchdacht.",
    "Ein Hoftor soll nicht nur gut aussehen, sondern zuverlässig in den Tagesablauf passen. Bewegungsflächen, Nutzung und Bedienung bestimmen die Konstruktion.",
    [
      "Ein- oder zweiflügelige Tore",
      "Separate Gehtür",
      "Motorisierung nach Planung",
    ],
    [
      "Freie Schwenkbereiche",
      "Gefälle in der Zufahrt",
      "Zugänge für Personen und Fahrzeuge",
    ],
    [
      "Torbreite und Füllung",
      "Pfosten und Gründung",
      "Antrieb und Sicherheitseinrichtungen",
    ],
  ],
  [
    "zaun-tor/schiebetore",
    "Schiebetore",
    "Platz für eine klare Zufahrt.",
    "Schiebetore benötigen seitlichen Freiraum. Bei der Planung werden Torlauf, Untergrund und die tägliche Nutzung gemeinsam betrachtet.",
    [
      "Freitragende Konstruktion",
      "Geführte Lösung nach Standort",
      "Abgestimmte Gehtür",
    ],
    [
      "Seitlicher Rücklaufbereich",
      "Fundament und Bodenbeschaffenheit",
      "Zufahrtsbreite und Nutzung",
    ],
    ["Torabmessungen", "Konstruktion und Fundament", "Bedienung und Sicherung"],
  ],
  [
    "zaun-tor/elektrische-toranlagen",
    "Elektrische Toranlagen",
    "Komfort beginnt an der Einfahrt.",
    "Automatisierte Tore erfordern eine abgestimmte Planung von Mechanik, Antrieb und Schutzfunktionen. Bestehende Tore werden vor einer Nachrüstung auf Eignung geprüft.",
    [
      "Automatisierte Dreh- oder Schiebetore",
      "Bedienung per Sender",
      "Zutrittslösungen nach Bedarf",
    ],
    [
      "Nutzungshäufigkeit und Torzustand",
      "Strom- und Leitungsführung",
      "Schutzfunktionen und Wartung",
    ],
    [
      "Antrieb und Steuerung",
      "Sicherheitskomponenten",
      "Elektro- und Montagearbeiten",
    ],
  ],
  [
    "zaun-tor/gelaender",
    "Geländer",
    "Sicherheit mit klarer Linie.",
    "Geländer begleiten Treppen, Balkone und Terrassen. Befestigung und Anforderungen an den jeweiligen Einsatzort stehen am Anfang der Gestaltung.",
    [
      "Metallgeländer",
      "Kombinationen mit Glas",
      "Handläufe und Treppengeländer",
    ],
    [
      "Befestigungsuntergrund",
      "Nutzung und erforderliche Nachweise",
      "Anschlüsse und Pflege",
    ],
    ["Länge und Geometrie", "Material und Füllung", "Befestigung und Montage"],
  ],
  [
    "gewerbekunden/wohnungswirtschaft",
    "Wohnungswirtschaft",
    "Bestand im Blick. Menschen im Mittelpunkt.",
    "Für Hausverwaltungen und Wohnungsgesellschaften zählen klare Abstimmungen. Fenster, Türen und Außenanlagen werden mit Blick auf Gebäude, Bewohner und Abläufe betrachtet.",
    [
      "Bauelemente im Gebäudebestand",
      "Reparatur und Instandsetzung",
      "Außenanlagen und Zugänge",
    ],
    [
      "Objektliste und Ansprechpartner",
      "Zutritt und Abstimmung mit Bewohnern",
      "Leistungsumfang je Objekt",
    ],
    [
      "Anzahl und Zustand der Elemente",
      "Zugänglichkeit im bewohnten Bestand",
      "Koordination und vereinbarter Leistungsumfang",
    ],
  ],
  [
    "gewerbekunden/industrie-gewerbe",
    "Industrie & Gewerbe",
    "Lösungen, die zum Betrieb passen.",
    "Gewerbliche Projekte beginnen mit dem Betriebsablauf. Zugänge, Bauelemente und Grundstücksabschlüsse müssen zur Nutzung und den Rahmenbedingungen vor Ort passen.",
    [
      "Fenster und Türen für den Bestand",
      "Zaun- und Toranlagen",
      "Instandsetzung nach Bestandsaufnahme",
    ],
    [
      "Betriebszeiten und Zugangswege",
      "Anforderungen aus der Nutzung",
      "Schnittstellen zu anderen Gewerken",
    ],
    [
      "Leistungsumfang und Stückzahlen",
      "Betriebliche Rahmenbedingungen",
      "Montage- und Abstimmungsaufwand",
    ],
  ],
  [
    "gewerbekunden/hotellerie-gastronomie",
    "Hotellerie & Gastronomie",
    "Draußen beginnt Gastlichkeit.",
    "Ein gut geplanter Außenbereich kann Sitzplätze angenehmer nutzbar machen. Beschattung, Laufwege und das Zusammenspiel mit dem Gebäude bestimmen das Konzept.",
    [
      "Überdachungen",
      "Lamellen- und Pergolasysteme",
      "Seitlicher Glas- und Sonnenschutz",
    ],
    [
      "Sitzordnung und Bedienwege",
      "Wind, Sonne und Wetter",
      "Genehmigung und Standortvorgaben",
    ],
    [
      "Abmessungen und System",
      "Ausstattung und Bedienung",
      "Untergrund und Montage",
    ],
  ],
  [
    "gewerbekunden/wartung-service",
    "Wartung & Service",
    "Bestehendes gut erhalten.",
    "Bei Störungen oder Verschleiß hilft zunächst eine genaue Beschreibung. KLOTZ bietet Wartung und Instandsetzung; die Möglichkeit einer Reparatur wird am jeweiligen Bauteil geprüft.",
    [
      "Fenster und Türen",
      "Tore und Beschläge",
      "Bestandsaufnahme für Reparaturen",
    ],
    [
      "Hersteller und Alter, soweit bekannt",
      "Fehlerbild und Fotos",
      "Zugänglichkeit und bisherige Wartung",
    ],
    [
      "Diagnose und Anfahrt",
      "Ersatzteile nach Verfügbarkeit",
      "Vereinbarte Reparaturarbeiten",
    ],
  ],
];

export const serviceDetails: ServiceDetail[] = seeds.map(
  ([slug, title, introHeading, intro, variants, planning, costs]) => {
    const category = slug.split("/")[0]!;
    const image =
      category === "fenster-tueren"
        ? slug.endsWith("/fenster")
          ? "/images/fenster-1.webp"
          : "/images/haustuer-detail.webp"
        : category === "zaun-tor"
          ? "/images/zaun.webp"
          : category === "gewerbekunden"
            ? "/images/gewerbe.webp"
            : slug.includes("glas") || slug.includes("winter")
              ? "/images/glas-detail-1.webp"
              : slug.endsWith("/terrassenueberdachungen")
                ? "/images/terrasse.webp"
                : "/images/lamelle-detail-1.webp";
    return {
      slug,
      category,
      title,
      intro: introHeading + " " + intro,
      image,
      variants,
      planning,
      costs,
      status: "draft",
      sourceRefs: [
        category === "fenster-tueren"
          ? windows
          : category === "zaun-tor"
            ? fence
            : category === "gewerbekunden"
              ? company
              : terrace,
      ],
      faq: [
        {
          question: "Was hilft bei der ersten Anfrage?",
          answer:
            "Nennen Sie den Projektort, die gewünschte Nutzung und einen groben Zeitrahmen. Fotos und ungefähre Maße helfen beim ersten Gespräch; das genaue Aufmaß erfolgt am Objekt.",
        },
        {
          question: "Wie entsteht ein passendes Angebot?",
          answer:
            "Nach Klärung Ihrer Wünsche und der Einbausituation werden Ausführung und Leistungsumfang abgestimmt. Erst daraus ergibt sich ein nachvollziehbares Angebot.",
        },
        {
          question: "Lässt sich eine bestehende Anlage ergänzen?",
          answer:
            "Das hängt von Zustand, Konstruktion und verfügbaren Komponenten ab. Eine Prüfung vor Ort zeigt, ob Ergänzung, Reparatur oder Austausch sinnvoll ist.",
        },
      ],
    };
  },
);
