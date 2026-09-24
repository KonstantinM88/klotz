# KLOTZ.mobi — визуальная концепция и главная страница

Статус: концепция для согласования до реализации<br>
Версия: 1.0<br>
Дата: 24 сентября 2026 года

## 1. Концепция в одном предложении

**KLOTZ превращает технически сложные решения вокруг дома в понятный, качественно спланированный и надёжно реализованный проект.**

Рабочее название визуального направления:

> Präzision. Raum. Vertrauen.

Это не предлагаемый рекламный слоган, а внутренний принцип дизайна:

- `Präzision` — архитектурная сетка, точная типографика, детали конструкций;
- `Raum` — крупные фотографии, свободное пространство, спокойный ритм;
- `Vertrauen` — реальные проекты, понятный процесс, региональность и прямой контакт.

## 2. Что показал обзор отрасли

### Solarlux

Сильные стороны:

- крупное качественное изображение продукта в контексте архитектуры;
- H1 сразу объясняет продукт;
- два понятных CTA;
- отдельные входы для целевых групп.

Не переносим:

- несколько плавающих contact-кнопок одновременно;
- большую модальную панель consent поверх hero;
- ощущение сайта международного производителя вместо локального Fachbetrieb.

### Renson

Сильные стороны:

- эмоциональные lifestyle-фотографии;
- продукт показывается как часть жилого пространства;
- преимущества объясняются через сценарии использования.

Не переносим:

- campaign pop-up сразу после consent;
- визуальный шум из боковых панелей и дополнительных промо;
- неподтверждённые product claims конкретных производителей.

### Schüco

Сильные стороны:

- архитектурная типографика и много белого пространства;
- референсы являются отдельным доказательным продуктом;
- фильтры и классификация проектов;
- хороший баланс крупного заголовка и поясняющего текста.

Не переносим:

- сложную корпоративную навигацию с выбором множества аудиторий;
- глубину и терминологию международной product ecosystem;
- крупные интерфейсные конструкции, не нужные региональному предприятию.

### Региональные конкуренты

Часто встречаются:

- длинные тексты, написанные прежде всего под поисковые фразы;
- ранний акцент на низкой цене;
- generic stock/AI images;
- слабое разделение продукта, монтажа и сервисной ответственности;
- отсутствие полноценных project detail pages.

Возможность KLOTZ: выглядеть заметно качественнее локального рынка, но оставаться ближе и понятнее международных производителей.

## 3. Визуальная позиция

### Характер

- современный;
- архитектурный;
- спокойный;
- технически точный;
- региональный, но не провинциальный;
- премиальный, но не недоступный;
- человеческий, но не фамильярный.

### Не должно выглядеть как

- интернет-магазин стандартных изделий;
- каталог производителя без монтажной компетенции;
- дешёвый lead-generation landing page;
- шаблон строительной фирмы с жёлто-чёрными полосами;
- luxury-сайт с чёрно-золотой стилизацией;
- AI-галерея несуществующих объектов.

## 4. Рабочая визуальная система

Финальные значения уточняются после получения оригинального SVG-логотипа. До этого используются следующие рабочие роли.

### Цвета

| Token          | Рабочее значение | Назначение                                    |
| -------------- | ---------------: | --------------------------------------------- |
| `ink`          |        `#11181C` | основной текст, тёмные секции                 |
| `brand`        |        `#0B5D7A` | основной KLOTZ blue, CTA и ссылки             |
| `brand-strong` |        `#073B4D` | header, hover, контрастные зоны               |
| `brand-soft`   |        `#D8EBF2` | спокойные информационные поверхности          |
| `paper`        |        `#F7F6F2` | основной тёплый фон                           |
| `surface`      |        `#FFFFFF` | карточки и формы                              |
| `stone`        |        `#E9E5DD` | разделители и материальные зоны               |
| `steel`        |        `#66747B` | вторичный текст                               |
| `copper`       |        `#B66A36` | редкий декоративный акцент, не основной текст |
| `error`        |        `#A62A2A` | ошибки формы                                  |

Правила:

- primary CTA — `brand-strong` с белым текстом;
- copper не используется для мелкого текста на светлом фоне;
- большие цветные секции занимают не более 20–25% главной;
- контраст проверяется после извлечения точного цвета логотипа.

### Типографика

Рабочая пара:

- заголовки: `Manrope Variable`, 550–700;
- текст: `Source Sans 3 Variable`, 400–600.

Альтернатива для большей производительности: одна `Manrope Variable` для всей системы.

Типографический характер:

- H1 крупный, но не закрывает фотографию;
- короткие строки — примерно 10–13 слов;
- body measure около 60–72 символов;
- технические labels — uppercase с умеренным letter spacing;
- никаких сверхтонких начертаний;
- немецкие составные слова не должны ломать mobile layout.

### Сетка и геометрия

- desktop: 12 колонок, content width около 1280–1360 px;
- tablet: 8 колонок;
- mobile: 4 колонки;
- section spacing задаётся fluid tokens;
- углы сдержанные: 0–12 px в зависимости от элемента;
- большие изображения могут быть прямоугольными без повсеместного скругления;
- тонкие линии и координатные marks допустимы как отсылка к планированию/Aufmaß.

### Изображения

Основной стиль:

- конструкция видна в контексте дома/террасы;
- дневной естественный свет;
- архитектура и монтажные детали;
- люди допустимы как масштаб/жизнь, но не как постановочная stock-сцена;
- real work имеет приоритет над идеальной 3D-визуализацией.

## 5. Header и навигация

### Desktop

Первая строка не нужна. Вместо старого длинного utility-текста:

- слева логотип;
- центр: основные разделы;
- справа: иконка/ссылка `03461 455-0` и primary CTA `Projekt anfragen`;
- часы работы находятся в contact panel/footer, не занимают header.

Header в начале прозрачный или `paper` в зависимости от hero crop. После прокрутки становится компактным solid header. Sticky поведение не должно создавать layout shift.

### Mobile

- логотип;
- `Menü` с текстовой меткой, не только hamburger;
- внизу экрана компактная sticky action bar:
  - `Anrufen`;
  - `Projekt anfragen`.
- action bar скрывается/сворачивается рядом с footer и не закрывает поля формы.

Основная навигация:

1. Terrasse & Garten
2. Fenster & Türen
3. Zaun & Tor
4. Gewerbekunden
5. Referenzen
6. Wissen
7. Unternehmen

`Angebote`, `Fundgrube`, `Jobs`, `Downloads`, `Nachhaltigkeit` и `Soziales` находятся в secondary navigation до решения заказчика.

## 6. Главная страница — структура и текст

Ниже приведён содержательный wireframe. Немецкий текст является качественным стартовым вариантом, но бизнес-факты из legacy должны пройти подтверждение.

### 6.1 Hero

Цель: за 5 секунд ответить, кто мы, что делаем, где работаем и что делать дальше.

Desktop composition:

- высота примерно 72–82 viewport units, но не более разумного первого экрана;
- реальная wide-фотография Lamellendach/Terrassenüberdachung;
- content panel занимает около 5 колонок и стоит на спокойной solid/blur-free поверхности;
- фотография остаётся главным visual proof;
- никакого carousel.

Mobile composition:

- сначала текст на `paper`, затем image ratio около 4:3 или 5:4;
- CTA видны без необходимости точно попадать по тексту поверх изображения;
- не использовать тяжёлый overlay.

Предлагаемый текст:

```text
Eyebrow:
KLOTZ · MERSEBURG / MEUSCHAU

H1:
Bauelemente & Outdoor Living aus Merseburg

Lead:
Individuell geplant, präzise aufgemessen und zuverlässig montiert –
für private Bauherren, Unternehmen und die Wohnungswirtschaft.

Primary CTA:
Projekt anfragen

Secondary CTA:
Referenzen entdecken
```

Короткая proof-line под hero:

```text
Beratung · Aufmaß · Planung · Montage · Service
```

Внутренняя пометка: `zuverlässig` и профессиональный монтаж допустимы как общее позиционирование; конкретные гарантии не добавлять.

### 6.2 Четыре главных входа

Цель: быстро распределить пользователя по намерению.

Заголовок:

```text
Lösungen, die zu Ihrem Projekt passen
```

Вводный текст:

```text
Vom geschützten Lieblingsplatz im Garten bis zur technisch sauberen Lösung
für Wohnungsbestand und Gewerbe: Wir verbinden Produkte, Planung und Montage.
```

Карточки:

1. `Terrasse & Garten`
   - `Terrassenüberdachungen, Lamellendächer, Pergolen und Glaslösungen.`
2. `Fenster & Türen`
   - `Komfort, Sicherheit und Energieeffizienz passend zum Gebäude.`
3. `Zaun & Tor`
   - `Sichtschutz, Grundstücksabschluss und komfortable Toranlagen.`
4. `Gewerbe & Wohnungswirtschaft`
   - `Planbare Leistungen für Bestand, Objekt und laufenden Service.`

Композиция не должна выглядеть как четыре одинаковые generic cards. Предпочтительно:

- одна крупная карточка 6×2 columns;
- две средние;
- одна широкая B2B-карточка с более техническим характером.

Каждая имеет реальное изображение, короткий текст и чёткую link label `Mehr erfahren`.

### 6.3 Референсы как центральное доказательство

Заголовок:

```text
Projekte aus der Region. Lösungen im Detail.
```

Текст:

```text
Gute Planung zeigt sich im Ergebnis. Entdecken Sie ausgewählte Projekte
und erfahren Sie, welche Aufgabe gelöst und wie die Ausführung umgesetzt wurde.
```

Показать 3–4 проекта из legacy-материалов, но только с подтверждаемыми полями.

Стартовые кандидаты:

- `Überdachung am Störmthaler See`;
- `Einzäunung Stadtstadion`;
- `Lamellendach` из существующего hero/photo set;
- `Terrassenüberdachung mit Glas/Sonnenschutz` из существующего photo set.

Если задача, размеры или год неизвестны, их не показывать. На карточке достаточно title/category/подтверждённого региона.

CTA:

```text
Alle Referenzen ansehen
```

Визуально: горизонтальный editorial grid, не autoplay-slider.

### 6.4 Процесс

Тёмная техническая секция `ink`/`brand-strong`.

Заголовок:

```text
Von der ersten Idee bis zur sauberen Abnahme
```

Шаги:

1. `Beratung` — `Wir klären Nutzung, Wünsche und Rahmenbedingungen.`
2. `Aufmaß` — `Die Situation vor Ort wird präzise aufgenommen.`
3. `Planung & Angebot` — `Sie erhalten eine nachvollziehbare Lösung für Ihr Projekt.`
4. `Montage` — `Unser Team koordiniert Lieferung und fachgerechten Einbau.`
5. `Service` — `Auch nach der Umsetzung bleiben wir Ihr Ansprechpartner.`

Визуально:

- тонкая линия/координатная система;
- оригинальные outline SVG;
- на mobile вертикальная последовательность;
- без сложной timeline animation.

Фраза `Unser Team` допустима; точный состав/размер команды не указывать до подтверждения.

### 6.5 Региональная история и showroom

Рабочий заголовок:

```text
In Meuschau zu Hause. In der Region im Einsatz.
```

Текст:

```text
KLOTZ steht in der Region Halle–Leipzig seit vielen Jahren für Lösungen rund
ums Haus. Am Standort in Merseburg-Meuschau können Materialien, Funktionen und
Ausführungsvarianten im persönlichen Gespräch verglichen werden.
```

Пока используется `seit vielen Jahren`. После подтверждения можно заменить на `seit fast 40 Jahren`.

Proof elements после подтверждения:

- `Beratung vor Ort`;
- `Innen- und Außenausstellung`;
- `Eigene Ansprechpartner von Aufmaß bis Abnahme`;
- приоритетные регионы Merseburg, Halle, Leipzig, Saalekreis.

CTA:

```text
Standort & Ausstellung
```

Фото: реальный showroom/команда/рабочий процесс. Если такого изображения нет, не генерировать фиктивную выставку — использовать деталь материала или схему до получения фотосъёмки.

### 6.6 B2B / Wohnungswirtschaft

Эта секция визуально отличается от private/lifestyle content: больше структуры, меньше эмоции.

Eyebrow:

```text
FÜR GEWERBE UND WOHNUNGSWIRTSCHAFT
```

H2:

```text
Planbare Leistungen für Bestand und Objekt
```

Текст:

```text
Von der Bestandsaufnahme über Angebot und Koordination bis zu Montage,
Wartung und Service: KLOTZ begleitet Projekte mit klaren Ansprechpartnern
und nachvollziehbaren Abläufen.
```

Три направления:

- `Wohnungswirtschaft & Hausverwaltungen`;
- `Industrie & Gewerbe`;
- `Hotellerie & Gastronomie`.

CTA:

```text
Leistungen für Gewerbekunden
```

Не добавлять SLA, response time, Hersteller или сертификаты без подтверждения.

### 6.7 KLOTZ Wissen

Заголовок:

```text
Gut entscheiden. Besser planen.
```

Текст:

```text
Praxiswissen zu Kostenfaktoren, Konstruktionen, Genehmigung und Ablauf –
verständlich erklärt und mit Erfahrung aus realen Projekten ergänzt.
```

Три карточки:

- `Was kostet eine Terrassenüberdachung mit Montage?`
- `Lamellendach oder Glasdach – welche Lösung passt wann?`
- `Brauche ich eine Genehmigung für eine Terrassenüberdachung?`

CTA:

```text
Alle Ratgeber ansehen
```

До экспертной проверки не использовать персональную авторскую атрибуцию и точные цены.

### 6.8 Регион и контакт

Заголовок:

```text
Ihr Projekt in Merseburg, Halle, Leipzig und im Saalekreis
```

Текст:

```text
Sie planen eine Überdachung, neue Bauelemente oder eine Lösung für Ihr Objekt?
Senden Sie uns die wichtigsten Eckdaten. Wir melden uns für die nächsten Schritte.
```

Локальные направления показываются одной полезной секцией с link to contact/route — не создавать keyword list из десятков населённых пунктов.

### 6.9 Финальный CTA

Крупная спокойная секция перед footer.

```text
H2:
Was möchten Sie realisieren?

Text:
Beschreiben Sie Ihr Vorhaben in wenigen Schritten – gern mit Fotos der
aktuellen Situation. So können wir Ihre Anfrage besser einordnen.

Primary:
Projekt anfragen

Secondary:
03461 455-0
```

Номер телефона остаётся legacy-data до подтверждения, но может использоваться в внутреннем демо.

### 6.10 Footer

Колонки:

- KLOTZ + краткое позиционирование;
- Leistungen;
- Unternehmen/Referenzen/Wissen;
- Kontakt/Showroom;
- secondary: Angebote, Fundgrube, Jobs, Downloads;
- legal/social.

Не повторять в footer весь mega-menu. NAP должен совпадать с contact page и JSON-LD.

## 7. Схематичный wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO       MAIN NAV                       TEL  [PROJEKT CTA] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [COPY PANEL 5 COL]           [REAL HERO IMAGE 7 COL]       │
│  Bauelemente & Outdoor Living                                │
│  aus Merseburg                                               │
│  [Projekt anfragen] [Referenzen]                             │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ Beratung · Aufmaß · Planung · Montage · Service              │
├──────────────────────────────────────────────────────────────┤
│ SOLUTIONS: ASYMMETRIC 4-ENTRY GRID                           │
├──────────────────────────────────────────────────────────────┤
│ SELECTED REFERENCES: LARGE IMAGE + TWO SUPPORTING PROJECTS   │
├──────────────────────────────────────────────────────────────┤
│ DARK PROCESS SECTION: 01 — 02 — 03 — 04 — 05                │
├──────────────────────────────────────────────────────────────┤
│ REGIONAL STORY / SHOWROOM IMAGE + TEXT                       │
├──────────────────────────────────────────────────────────────┤
│ B2B / WOHNUNGSWIRTSCHAFT                                    │
├──────────────────────────────────────────────────────────────┤
│ KLOTZ WISSEN: 3 EDITORIAL ARTICLES                           │
├──────────────────────────────────────────────────────────────┤
│ REGION + FINAL PROJECT CTA                                   │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

## 8. Mobile порядок

1. Header.
2. Hero copy.
3. Hero image.
4. Proof-line в горизонтальном scroll-free grid 2×3.
5. Четыре solution entries.
6. Два/три selected references.
7. Процесс.
8. Regional story/showroom.
9. B2B.
10. Wissen.
11. Final CTA.
12. Footer.
13. Sticky `Anrufen / Projekt anfragen`, не перекрывающий footer.

На mobile не переставлять B2B слишком далеко вниз в зависимости от аналитики можно позже; в демо он остаётся после доверительного блока.

## 9. Home SEO package

Рабочий title:

```text
Bauelemente & Outdoor Living in Merseburg | KLOTZ
```

Рабочая description:

```text
Terrassenüberdachungen, Lamellendächer, Fenster, Türen, Zäune und Tore:
KLOTZ plant und realisiert Projekte für Privatkunden, Gewerbe und
Wohnungswirtschaft in Merseburg, Halle, Leipzig und im Saalekreis.
```

Проверить длину по реальному snippet preview; не оптимизировать только по числу символов.

Главные entity signals:

- KLOTZ GmbH;
- Merseburg-Meuschau;
- Bauelemente;
- Outdoor Living;
- Montage/Service;
- private + Gewerbe + Wohnungswirtschaft;
- service area.

JSON-LD только с подтверждёнными полями:

- `Organization` / подходящий `LocalBusiness`;
- name, URL, logo;
- address/telephone/openingHours после проверки;
- service area;
- sameAs на реальные social profiles;
- без rating/review/award.

## 10. События аналитики главной

- `cta_click`: hero primary/secondary;
- `phone_click`: header/mobile/final CTA;
- `service_entry_click`: category + position;
- `reference_view` / `reference_click`;
- `process_view`;
- `b2b_entry_click`;
- `article_click`;
- `inquiry_start`.

Никаких PII в payload.

## 11. Performance budget главной

- один приоритетный hero image;
- no carousel/video;
- hero delivered variant ориентировочно до 350 KB;
- остальные изображения lazy-loaded;
- шрифты: не более 2 variable files или одна family;
- header/menu без тяжёлой UI library;
- процесс и иконки — SVG;
- animation только CSS/минимальный client code;
- карта и social embeds на главной отсутствуют;
- consent не блокирует основной контент и не вызывает CLS.

## 12. Необходимые изображения

### Уже обнаружены на legacy-сайте

- Lamellendach wide hero;
- Terrassenüberdachung wide hero;
- Störmthaler See project visual;
- Türen wide visual;
- Zaun wide visual;
- Stadtstadion Zaun project visual;
- несколько category images.

Все остаются `rights-check` до подтверждения.

### Нужно запросить у заказчика

- оригинальный SVG/PDF логотип;
- 8–12 лучших проектов в high resolution;
- showroom: exterior + interior + detail;
- консультация/Aufmaß;
- монтажный процесс и детали;
- команда в работе без обязательного группового портрета;
- B2B/Objekt reference;
- разрешённые данные по каждому изображённому проекту.

### Что можно создать самостоятельно

- абстрактные material textures;
- blueprint/measurement line graphics;
- оригинальные process icons;
- subtle map/region outline без сторонних tiles;
- OG composition из логотипа и проверенного изображения.

## 13. Что согласовать перед кодом

Критично подтвердить только три решения:

1. направление `architectural premium` с KLOTZ blue, warm white и graphite;
2. hero без слайдера: одно сильное изображение + два CTA;
3. главная сначала продаёт четыре направления и реальные референсы, а не показывает `Angebote/Fundgrube` в первом экране.

Остальные детали можно безопасно уточнять уже на первой визуальной реализации.

## 14. Источники исследования

- Solarlux Terrassenüberdachung: https://solarlux.com/de-de/produkte/terrassenueberdachung.html
- Renson Lamellendach: https://renson.net/de-de/produkte/terrassenuberdachung/lamellendach
- Schüco Referenzen: https://www.schueco.com/de/architekten/referenzen
- KLOTZ legacy site: https://www.klotz.mobi/

Источники используются для анализа отраслевых паттернов. Композиции, тексты, графика и элементы не должны копироваться.
