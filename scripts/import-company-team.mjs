import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const sourcePage = "https://www.klotz.mobi/ueber-uns";
const folder =
  "https://www.klotz.mobi/sites/default/files/styles/employee_image_grid/public/";
const photos = [
  ["team-klotz", "Gesch%C3%A4ftsf%C3%BChrer_1_0.png?itok=1dPMvF1N"],
  ["team-shafiee", "IMG-20250612-WA0005.jpg?itok=WCKaJV8K"],
  ["team-walther", "Stefan%20Walther_0.jpg?itok=wLH4AxFT"],
  ["team-kimmel", "Andreas%20Kimmel%20944x944.jpg?itok=Xe9f0uYQ"],
  ["team-montage", "Team2.jpg?itok=I3D3apgk"],
  ["team-kriester", "Verena%20Kriester.jpg?itok=X7papq4n"],
  ["team-temgoua", "IMG_2289.jpg?itok=0WGuCHQ8"],
  ["team-degenhardt", "IMG_20250815_095440.jpg?itok=tS9TlhlP"],
];
const manifest = JSON.parse(
  await readFile("content/assets-manifest.json", "utf8"),
);

for (const [id, path] of photos) {
  const displaySourceUrl = folder + path;
  const originalUrl = displaySourceUrl
    .replace("/styles/employee_image_grid/public/", "/")
    .split("?")[0];
  let response = await fetch(originalUrl);
  const sourceUrl = response.ok ? originalUrl : displaySourceUrl;
  if (!response.ok) response = await fetch(displaySourceUrl);
  if (!response.ok) throw new Error(`${id}: ${response.status} ${sourceUrl}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(bytes).metadata();
  if (!metadata.format || !metadata.width || !metadata.height)
    throw new Error(`${id}: invalid image`);
  const result = await sharp(bytes)
    .rotate()
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toBuffer({ resolveWithObject: true });
  const src = `/images/${id}.webp`;
  await writeFile(`public${src}`, result.data);
  await writeFile(`content/legacy/originals/${id}.${metadata.format}`, bytes);
  const entry = {
    id,
    src,
    sourceUrl,
    displaySourceUrl,
    sourcePage,
    width: result.info.width,
    height: result.info.height,
    bytes: result.data.length,
    originalSha256: createHash("sha256").update(bytes).digest("hex"),
    capturedAt: new Date().toISOString(),
    rightsStatus: "client-presentation-approved",
    rightsNote:
      "User confirmed client permission for this presentation. Public reuse requires separate release.",
    factStatus: "legacy",
  };
  const index = manifest.findIndex((asset) => asset.id === id);
  if (index === -1) manifest.push(entry);
  else manifest[index] = entry;
  console.log(
    `${id}: ${metadata.width}x${metadata.height} ${metadata.format} -> ${result.info.width}x${result.info.height} ${result.data.length} bytes`,
  );
}

await writeFile(
  "content/assets-manifest.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
