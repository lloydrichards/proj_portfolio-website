import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const output = "../../public/labs/visx-timeline/timeline.js";
const { metafile } = await build({
  entryPoints: ["timeline.jsx"],
  outfile: output,
  bundle: true,
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
    throw new Error(`Missing license for ${name}`);
  }),
);
await writeFile(`${output}.LICENSE.txt`, `${notices.join("\n\n---\n\n")}\n`);
