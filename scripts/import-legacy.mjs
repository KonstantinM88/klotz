import { mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

const base = "https://www.klotz.mobi";
const pages = [
  "/",
  "/ueber-uns",
  "/kontakt",
  "/referenzen",
  "/lamellendach",
  "/glasschiebew%C3%A4nde",
  "/portfolio/terrassenueberdachung",
  "/portfolio/fenster",
  "/portfolio/z%C3%A4une",
  "/news/einz%C3%A4unung-stadtstadion",
];
await mkdir("content/legacy", { recursive: true });
await mkdir("public/images", { recursive: true });
const inventory = [];
for (const path of pages) {
  const response = await fetch(base + path);
  const html = await response.text();
  const images = [...html.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)].map(
    (m) => ({
      url: new URL(m[1].replaceAll("&amp;", "&"), base).href,
      alt: m[0].match(/alt="([^"]*)"/)?.[1] ?? "",
    }),
  );
  const links = [
    ...new Set(
      [...html.matchAll(/href="([^"]+)"/g)].map(
        (m) => new URL(m[1].replaceAll("&amp;", "&"), base).href,
      ),
    ),
  ];
  inventory.push({
    sourceUrl: base + path,
    finalUrl: response.url,
    status: response.status,
    capturedAt: new Date().toISOString(),
    title: html.match(/<title>(.*?)<\/title>/s)?.[1],
    images,
    links,
  });
  console.log(path, response.status, images.length);
}
await writeFile(
  "content/legacy/inventory.json",
  JSON.stringify(inventory, null, 2),
);
const assets = [
  ["logo", "/sites/default/files/logo%20neu%20200x107_0.png", "/"],
  [
    "lamellendach",
    "/sites/default/files/styles/flexslider_full/public/Slider_Lammelle_20260221_2050x620_0.jpg?itok=XkNFM1IX",
    "/",
  ],
  [
    "terrasse",
    "/sites/default/files/styles/produkte_gallerie_hauptbild/public/T%C3%9C.JPG?itok=B-yHFG0J",
    "/portfolio/terrassenueberdachung",
  ],
  [
    "terrassendach",
    "/sites/default/files/styles/flexslider_full/public/Slider_T%C3%9C_20260221_1.jpg?itok=DyKRGZhg",
    "/",
  ],
  [
    "haustuer",
    "/sites/default/files/styles/flexslider_full/public/Slider_T%C3%BCren_20260221_2200x640px_1.jpg?itok=kIVEEKll",
    "/",
  ],
  [
    "zaun",
    "/sites/default/files/styles/flexslider_full/public/Zaun%20mit%20Multibox_Wisniowski_2022.jpg?itok=4UyS3N6K",
    "/",
  ],
  [
    "gewerbe",
    "/sites/default/files/styles/produkte_gallerie_hauptbild/public/IMG%20BRERA%20P_01.jpg?itok=tMc5mHoj",
    "/",
  ],
  [
    "stoermthaler-see",
    "/sites/default/files/styles/flexslider_full/public/Slider_St%C3%B6rmtaler_See_20260221_0.jpg?itok=I4LqzGfE",
    "/",
  ],
  [
    "stadtstadion",
    "/sites/default/files/styles/full_post/public/Einz%C3%A4unung_Stadtstadion_02%202025_0.png?itok=jme98AgX",
    "/news/einz%C3%A4unung-stadtstadion",
  ],
];
const manifest = [];
for (const [id, path, page] of assets) {
  const response = await fetch(base + path);
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  const original = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(original).metadata();
  const output = await sharp(original)
    .rotate()
    .resize({ width: id === "logo" ? 400 : 1920, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toBuffer({ resolveWithObject: true });
  await writeFile(`public/images/${id}.webp`, output.data);
  await mkdir("content/legacy/originals", { recursive: true });
  await writeFile(
    `content/legacy/originals/${id}.${metadata.format}`,
    original,
  );
  manifest.push({
    id,
    sourceUrl: base + path,
    sourcePage: base + page,
    src: `/images/${id}.webp`,
    width: output.info.width,
    height: output.info.height,
    bytes: output.data.length,
    originalSha256: createHash("sha256").update(original).digest("hex"),
    capturedAt: new Date().toISOString(),
    rightsStatus: "client-presentation-approved",
    rightsNote:
      "User confirmed client permission for this presentation. Public reuse requires separate release.",
    factStatus: "legacy",
  });
  console.log(id, output.info.width, output.info.height, output.data.length);
}
await writeFile(
  "content/assets-manifest.json",
  JSON.stringify(manifest, null, 2),
);
