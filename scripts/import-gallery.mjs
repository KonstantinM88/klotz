import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { createHash } from "node:crypto";
const inventory = JSON.parse(
  await readFile("content/legacy/inventory.json", "utf8"),
);
const manifest = JSON.parse(
  await readFile("content/assets-manifest.json", "utf8"),
);
for (const [page, prefix, count] of [
  ["/lamellendach", "lamelle-detail", 3],
  ["/glasschiebew%C3%A4nde", "glas-detail", 3],
  ["/portfolio/fenster", "fenster", 1],
]) {
  const entry = inventory.find((item) => item.sourceUrl.endsWith(page));
  const images = entry.images
    .filter(
      (item) => item.url.includes("/styles/") && !item.url.includes("logo"),
    )
    .slice(0, count);
  for (const [i, img] of images.entries()) {
    const id = `${prefix}-${i + 1}`;
    const response = await fetch(img.url);
    if (!response.ok) throw new Error(`${id}: ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    const meta = await sharp(bytes).metadata();
    const output = await sharp(bytes)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toBuffer({ resolveWithObject: true });
    await writeFile(`public/images/${id}.webp`, output.data);
    await writeFile(`content/legacy/originals/${id}.${meta.format}`, bytes);
    manifest.push({
      id,
      src: `/images/${id}.webp`,
      sourceUrl: img.url,
      sourcePage: entry.sourceUrl,
      width: output.info.width,
      height: output.info.height,
      bytes: output.data.length,
      originalSha256: createHash("sha256").update(bytes).digest("hex"),
      capturedAt: new Date().toISOString(),
      rightsStatus: "client-presentation-approved",
      factStatus: "legacy",
      rightsNote: "Client permission confirmed by user for presentation only.",
    });
    console.log(id, output.info.width, output.info.height);
  }
}
await writeFile(
  "content/assets-manifest.json",
  JSON.stringify(manifest, null, 2),
);
