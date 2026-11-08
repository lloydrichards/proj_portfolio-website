import { createHash } from "node:crypto";
import {
  mkdir,
  readdir,
  readFile,
  realpath,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import sharp from "sharp";
import { normalizeJourneyRecords } from "../src/components/organism/journey_dashboard/data/records";
import { prepareLifetimeGlobeData } from "../src/components/organism/journey_dashboard/globe/globe-data";
import JourneyGlobe from "../src/components/organism/journey_dashboard/globe/journey-globe";
import { db } from "../src/services/db";
import { readJourney } from "../src/services/db/journey-data";

const root = process.cwd();
const assetDirectory = path.join(root, "public/images/social");
await mkdir(path.join(assetDirectory, "artwork"), { recursive: true });
const artwork: Record<string, string> = {};
const labs: Record<string, string> = {};
const counts = { labs: 0, projects: 0 };

// Metadata values here are literal strings. Never execute article code to inspect it.
function stringField(source: string, key: string) {
  return source.match(
    new RegExp(`(?:^|\\n|[,{}])\\s*${key}\\s*:\\s*["']([^"']+)["']`, "m"),
  )?.[1];
}
function frontmatterField(source: string, key: string) {
  return source
    .match(new RegExp(`^${key}:\\s*["']?([^\\r\\n"']+)`, "m"))?.[1]
    ?.trim();
}
async function prepareArtwork(key: string, file: string) {
  try {
    const resolved = await realpath(file);
    if (
      !resolved.startsWith(`${root}/public/`) &&
      !resolved.startsWith(`${root}/src/app/labs/(content)/`)
    )
      return;
    const original = await readFile(resolved);
    const hash = createHash("sha256")
      .update(original)
      .digest("hex")
      .slice(0, 16);
    const url = `/images/social/artwork/${hash}.png`;
    if (!(await Bun.file(path.join(root, "public", url)).exists())) {
      await sharp(original, { limitInputPixels: 40_000_000 })
        .rotate()
        .resize({
          width: 1200,
          height: 900,
          fit: "inside",
          withoutEnlargement: true,
        })
        .png()
        .toFile(path.join(root, "public", url));
    }
    artwork[key] = url;
  } catch (error) {
    console.warn(
      `Social artwork unavailable: ${key}. Using generated fallback.`,
      String(error),
    );
  }
}
const projectRoot = path.join(root, "src/app/projects/content");
for (const filename of (await readdir(projectRoot))
  .filter((name) => name.endsWith(".mdx"))
  .sort()) {
  const source = await readFile(path.join(projectRoot, filename), "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
  if (!frontmatter) throw new Error(`Missing frontmatter: ${filename}`);
  if ((frontmatterField(frontmatter, "status") ?? "published") === "published")
    counts.projects++;
  const image =
    frontmatterField(frontmatter, "socialImage") ??
    frontmatterField(frontmatter, "image");
  if (image?.startsWith("/images/") && !image.endsWith("thumb_missing.webp")) {
    await prepareArtwork(image, path.join(root, "public", image));
  }
}
const labRoot = path.join(root, "src/app/labs/(content)");
for (const directory of (await readdir(labRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))) {
  const file = path.join(labRoot, directory.name, "page.mdx");
  if (!(await Bun.file(file).exists())) continue;
  const source = await readFile(file, "utf8");
  const metadata = source.match(
    /export const metadata = createOGImageMetadata\(\{([\s\S]*?)\}\);/,
  )?.[1];
  if (!metadata) throw new Error(`Unrecognized metadata: ${file}`);
  if ((stringField(metadata, "status") ?? "published") === "published")
    counts.labs++;
  const id = stringField(metadata, "id");
  const image =
    stringField(metadata, "socialImage") ??
    source.match(/^!\[[^\]]*\]\(([^)]+\.(?:png|jpe?g|webp|gif))\)/m)?.[1];
  if (!id || !image) continue;
  const key = image.startsWith("/images/")
    ? image
    : `/labs/${directory.name}/${image.replace(/^\.\//, "")}`;
  await prepareArtwork(
    key,
    image.startsWith("/images/")
      ? path.join(root, "public", image)
      : path.resolve(labRoot, directory.name, image),
  );
  if (artwork[key]) labs[id] = key;
}

// Snapshot the existing homepage component and authored journey at build time.
const personalData = await readJourney(db);
const data = prepareLifetimeGlobeData(
  normalizeJourneyRecords([], personalData),
  personalData.geographicPlaces,
  new Date().toISOString(),
);
const markup = renderToStaticMarkup(
  <JourneyGlobe data={data} variant="standalone" />,
);
let sphere = 0;
const globe = markup
  .slice(markup.indexOf("<svg"), markup.indexOf("</svg>") + 6)
  .replace(/class="[^"]*"/g, "")
  .replace(/ tabindex="[^"]*"/g, "")
  .replace(
    /aria-label="[^"]*"/,
    'aria-label="Countries Lloyd has lived in and visited"',
  )
  .replace(
    /<svg /,
    '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960" ',
  )
  .replace(/<path\b[^>]*>/g, (element) => {
    if (element.includes("data-known=")) {
      const fill = element.includes('data-active="lived"')
        ? "#10b981"
        : element.includes('data-active="visited"')
          ? "#247d68"
          : "#354158";
      return element.replace(
        "<path",
        `<path fill="${fill}" stroke="#1a2234" stroke-width="0.6"`,
      );
    }
    sphere++;
    return element.replace(
      "<path",
      sphere === 1
        ? '<path fill="#1a2234"'
        : '<path fill="none" stroke="#526078" stroke-width="0.7"',
    );
  });
await writeFile(path.join(assetDirectory, "globe.svg"), globe);
await writeFile(
  path.join(root, "src/lib/social-assets.json"),
  `${JSON.stringify({ counts, artwork, labs }, null, 2)}\n`,
);
console.log(
  `Prepared social cards: ${counts.projects} projects, ${counts.labs} labs, ${Object.keys(artwork).length} artwork assets.`,
);
