# Content source register

Дата первичной инвентаризации: 2026-09-24.

## Статусы

- `confirmed-request` — прямо указано заказчиком в письме/Lastenheft.
- `legacy-current-check` — найдено на действующем KLOTZ.mobi, но перед production нужно подтвердить актуальность.
- `rights-check` — материал существует, но права на перенос/редактирование должны быть подтверждены.
- `demo-placeholder` — допустим только для концепта и не считается фактом.
- `prohibited-invention` — нельзя публиковать без данных заказчика.

## Источники

| ID   | Источник                                                                        | Роль                                   |
| ---- | ------------------------------------------------------------------------------- | -------------------------------------- |
| S-01 | `C:/Users/user/Downloads/Lastenheft_Webrelaunch_KLOTZ_Kaffeehaus_Meuschau.docx` | основной источник требований заказчика |
| S-02 | https://www.klotz.mobi/                                                         | legacy-контент и изображения           |
| S-03 | https://www.klotz.mobi/ueber-uns                                                | история, команда, showroom             |
| S-04 | https://www.klotz.mobi/kontakt                                                  | NAP, часы работы, контактная форма     |
| S-05 | https://www.klotz.mobi/portfolio                                                | legacy-каталог услуг                   |
| S-06 | https://www.klotz.mobi/referenzen                                               | legacy-референсы                       |
| S-07 | https://www.klotz.mobi/jobs                                                     | legacy-вакансии                        |

## Подтверждённые требования к KLOTZ

| Данные               | Значение                                                                           | Статус            | Источник |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------- | -------- |
| Позиционирование     | `Bauelemente & Outdoor Living aus Merseburg`                                       | confirmed-request | S-01     |
| Основная конверсия   | `Projekt anfragen`                                                                 | confirmed-request | S-01     |
| Вторичная конверсия  | `Referenzen ansehen`                                                               | confirmed-request | S-01     |
| Приоритетные регионы | Merseburg, Halle (Saale), Leipzig, Saalekreis, релевантные части Mitteldeutschland | confirmed-request | S-01     |
| Основные группы      | Terrasse & Garten; Fenster & Türen; Zaun & Tor; Gewerbekunden                      | confirmed-request | S-01     |
| Главный proof        | реальные проекты, технические данные, регион, задача и решение                     | confirmed-request | S-01     |
| Целевая аудитория    | Privatkunden, Gewerbe, Wohnungswirtschaft/Hausverwaltungen                         | confirmed-request | S-01     |

## Legacy-факты, требующие подтверждения

| Данные          | Legacy-значение                                                                                    | Статус               | Источник   |
| --------------- | -------------------------------------------------------------------------------------------------- | -------------------- | ---------- |
| Название        | Firma Klotz / KLOTZ GmbH – Bauelemente, Interieur & Design                                         | legacy-current-check | S-02–S-04  |
| Адрес           | Zur Saale 16, 06217 Merseburg / Meuschau                                                           | legacy-current-check | S-04       |
| Телефон         | 03461 455-0                                                                                        | legacy-current-check | S-02, S-04 |
| WhatsApp        | 0172 6543432                                                                                       | legacy-current-check | S-02, S-04 |
| Email           | info@klotz.mobi                                                                                    | legacy-current-check | S-04       |
| Часы работы     | Mo–Fr 07:00–16:00 или по записи                                                                    | legacy-current-check | S-02, S-04 |
| Телефонные часы | Mo–Do 07:30–12:00 и 13:00–15:00                                                                    | legacy-current-check | S-02, S-04 |
| История         | имя KLOTZ почти 40 лет известно в регионе Halle/Leipzig; KLOTZ GmbH в текущей форме создана в 2017 | legacy-current-check | S-03       |
| Showroom        | внутренняя и наружная Musterausstellung на площадке компании                                       | legacy-current-check | S-03       |
| Команда         | 13 сотрудников, включая специалистов, монтажников и Azubi                                          | legacy-current-check | S-03       |

Legacy-факты разрешено использовать в демо с мягкой формулировкой только после повторной визуальной проверки источника. Для production нужна письменная/редакционная верификация заказчика.

## Legacy-структура и ссылки, которые нельзя потерять без решения

- `/Nachhaltigkeit`
- `/soziales`
- `/portfolio` и вложенные услуги
- `/fundgrube`
- `/angebote`
- `/referenzen`
- `/neuigkeiten`
- `/trendmaterial`
- `/jobs`
- `/kontakt`
- `/downloads`
- `http://konfigurator.klotz.mobi/` — Haustürkonfigurator
- `/energiesparrechner`
- Facebook: `https://www.facebook.com/klotz.bauelemente/`
- Instagram: `https://www.instagram.com/klotz.interieur.design/`
- YouTube: `https://www.youtube.com/channel/UC4EykGIYdQxi-KqSJ8-UoCA/videos`

Это не готовая redirect matrix. Перед production нужен полный crawl с решением `keep / merge / update / archive / 301` для каждой индексируемой URL.

## Обнаруженные legacy-изображения

Ниже — примеры, а не полный inventory. Все имеют статус `rights-check`.

| Назначение                | URL источника                                                                                                                        | Наблюдаемое разрешение |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------: |
| Логотип                   | `https://www.klotz.mobi/sites/default/files/logo%20neu%20200x107_0.png`                                                              |                400×214 |
| Lamellendächer hero       | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_Lammelle_20260221_2050x620_0.jpg?itok=XkNFM1IX`     |              4100×1400 |
| Störmthaler See hero      | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_St%C3%B6rmtaler_See_20260221_0.jpg?itok=I4LqzGfE`   |              4100×1400 |
| Terrassenüberdachung hero | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_T%C3%9C_20260221_1.jpg?itok=DyKRGZhg`               |              4100×1400 |
| Türen hero                | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Slider_T%C3%BCren_20260221_2200x640px_1.jpg?itok=kIVEEKll` |              4100×1400 |
| Zaun hero                 | `https://www.klotz.mobi/sites/default/files/styles/flexslider_full/public/Zaun%20mit%20Multibox_Wisniowski_2022.jpg?itok=4UyS3N6K`   |              4100×1400 |
| Gelenkarmmarkise          | `https://www.klotz.mobi/sites/default/files/styles/full_post/public/Gelenkarmmarkise%20%281850%20x%201000%20px%29.png?itok=dJa2FFfP` |               1540×800 |
| Stadtstadion Zaun         | `https://www.klotz.mobi/sites/default/files/styles/full_post/public/Einz%C3%A4unung_Stadtstadion_02%202025_0.png?itok=jme98AgX`      |               1540×800 |

Не использовать производные Drupal thumbnails как единственный архив. По возможности получить оригиналы у заказчика. Изображение с именем `AdobeStock_...` не переносить, пока не подтверждена лицензия.

## Контентные запреты

Без подтверждения заказчика запрещено придумывать:

- отзывы и рейтинги;
- названия клиентов и точные адреса проектов;
- стоимость реализованных объектов;
- размеры, сроки и технические характеристики референсов;
- сертификации, гарантийные сроки и партнёрские статусы;
- точное число лет/сотрудников как актуальный факт;
- конкретные субсидии/льготы;
- доступность товара из `Fundgrube`;
- текущие вакансии;
- заявленные зоны выезда за пределами новых приоритетных регионов.

## Правила для AI-изображений и векторной графики

- AI допускается для абстрактной материал-фактуры, ненавязчивого background или явно обозначенного `Konzeptbild`.
- AI запрещён для карточек реальных референсов, портретов команды, showroom и доказательств выполненных работ.
- Генерируемые SVG должны быть оригинальными, простыми, доступными, без встроенного текста и без копирования чужих фирменных знаков.
- Каждому созданному asset присваиваются назначение, prompt/source, авторство, дата, alt и статус прав.
- На клиентском демо должна быть прозрачная пометка, если видимые concept visuals не являются реальными фотографиями KLOTZ.

## Что создать при реализации

После старта реализации преобразовать этот документ в машинно-проверяемые файлы, не удаляя человекочитаемый реестр:

- `content/source-manifest.json` или `.ts`;
- `content/legacy-url-inventory.csv`;
- `content/redirects-draft.csv`;
- `content/assets-manifest.csv`;
- `content/content-status.csv`.

Каждая запись должна содержать `sourceUrl`, `sourceType`, `capturedAt`, `rightsStatus`, `factStatus`, `newRoute`, `notes`.
