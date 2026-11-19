import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const output = "../../public/labs/article-demos";
const names = ["nested-bubbles", "bee-swarm", "shopping-cart", "shopping-task"];
const { metafile } = await build({
  entryPoints: Object.fromEntries(
    names.map((name) => [name, `${name}.entry.tsx`]),
  ),
  outdir: output,
  bundle: true,
  alias: { sonner: path.resolve("node_modules/sonner") },
  jsx: "automatic",
  tsconfigRaw: { compilerOptions: { alwaysStrict: true } },
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
  legalComments: "external",
  metafile: true,
});

const packages = new Set();
for (const input of Object.keys(metafile.inputs)) {
  const match = input.match(/^node_modules\/((?:@[^/]+\/)?[^/]+)\//);
  if (match) packages.add(match[1]);
}
const unpackagedLicenses = new Map([
  ["@stitches/react", "stitches-LICENSE.txt"],
  ["dequal", "dequal-LICENSE.txt"],
]);
const notices = await Promise.all(
  [...packages].sort().map(async (name) => {
    const directory = path.join("node_modules", name);
    for (const filename of [
      "LICENSE",
      "LICENSE.md",
      "LICENSE.txt",
      "COPYING",
    ]) {
      try {
        return `${name}\n\n${await readFile(path.join(directory, filename), "utf8")}`;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    const license = unpackagedLicenses.get(name);
    if (license) {
      return `${name}\n\n${await readFile(license, "utf8")}`;
    }
    throw new Error(`Missing license for ${name}`);
  }),
);
await writeFile(
  path.join(output, "LICENSES.txt"),
  `${notices.join("\n\n---\n\n")}\n`,
);
