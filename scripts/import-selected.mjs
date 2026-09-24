import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";
const inventory = JSON.parse(
  await readFile("content/legacy/inventory.json", "utf8"),
);
const manifest = JSON.parse(
  await readFile("content/assets-manifest.json", "utf8"),
);
for (const [id, keyword] of [
  ["haustuer-detail", "MetallbauKlotz_Tueren_Haustueren_Klauke"],
  ["zaun-detail", "A_01sW2A"],
  ["standort", "Meuschau3"],
]) {
  const page = inventory.find((p) =>
    p.images.some((i) => i.url.includes(keyword)),
  );
  const source = page.images.find((i) => i.url.includes(keyword)).url;
  const response = await fetch(source);
  if (!response.ok) throw new Error(source);
  const bytes = Buffer.from(await response.arrayBuffer());
  const meta = await sharp(bytes).metadata();
  const result = await sharp(bytes)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toBuffer({ resolveWithObject: true });
  await writeFile("public/images/" + id + ".webp", result.data);
  await writeFile("content/legacy/originals/" + id + "." + meta.format, bytes);
  manifest.push({
    id,
    src: "/images/" + id + ".webp",
    sourceUrl: source,
    sourcePage: page.sourceUrl,
    width: result.info.width,
    height: result.info.height,
    bytes: result.data.length,
    originalSha256: createHash("sha256").update(bytes).digest("hex"),
    capturedAt: new Date().toISOString(),
    rightsStatus: "client-presentation-approved",
    factStatus: "legacy",
    rightsNote: "Client permission confirmed by user for presentation only.",
  });
  console.log(id, result.info.width, result.info.height);
}
await writeFile(
  "content/assets-manifest.json",
  JSON.stringify(manifest, null, 2),
);
