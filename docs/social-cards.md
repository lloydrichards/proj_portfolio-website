# Add artwork to social preview cards

Social preview cards render at 1200 × 630 pixels through `/api/og`. They use the site's dark slate, emerald, and Roboto Mono identity. A visitor's selected theme does not affect the cards.

Image metadata uses absolute URLs on `https://www.lloydrichards.dev`, the final serving host. Keep images on this host: Vercel’s Open Graph inspector returned 503 when its image proxy fetched the redirect from the non-www domain.

## Page-specific layouts

The `kind` parameter selects the card layout:

- `timeline` puts the prepared journey globe on the left, alongside the page description and Work, Learning, Community, and Places tiles.
- `projects` and `labs` show a curated artwork collage and their own published content count from `src/lib/social-assets.json`.
- `cv` shows Lloyd Richards, the CV variant's role, its first four skills, and its existing `headline`. The headline supplies image copy only. The page's description and Open Graph description keep their original text.
- `project` and `lab` show the section and year above the heading when artwork is available. Cards without artwork keep the title and available metadata rather than adding unrelated site counts.

The overview collages each use three sources from `collectionArtwork` in `src/lib/social-card.ts`. Projects currently select SME Policy Index, Cancer Monitoring Dashboard, and IPEN Plastic Map artwork. Labs select Mosaic Design, RAG Chunker, and LLM Memory Filesystem artwork. To change a collage, update that collection's source list and run asset preparation. A source must have a prepared entry in the manifest. Missing artwork leaves a text tile in its place.

Generated image URLs include the version parameter `v=3` so existing previews request the updated layouts.

## Choose project artwork

Projects use their frontmatter `image` by default. To choose different artwork for the social card, add `socialImage` to the project's file in `src/app/projects/content/`:

```yaml
image: /images/projects/2601/thumb_sme-policy-index.webp
socialImage: /images/projects/2601/sme-policy-index-01.png
```

Put the artwork in `public/images/` and use its `/images/` URL. The override affects the social card without changing the project thumbnail. The `thumb_missing.webp` placeholder produces a generated fallback.

## Choose lab artwork

Labs use the first standalone Markdown image with a `.png`, `.jpg`, `.jpeg`, `.webp`, or `.gif` extension. Imported React images and images inside components do not supply this default.

To choose artwork explicitly, add a literal `socialImage` string to the existing `createOGImageMetadata` call in the lab's `page.mdx`:

```tsx
export const metadata = createOGImageMetadata({
  id: "063",
  title: "Human in the loop: Building a filesystem with LLMs",
  description: "A case study in building a filesystem with LLMs.",
  tags: ["effect", "llm", "filesystem"],
  date: "2026-08-11",
  socialImage: "./stack-effect-recipe-builder.png",
});
```

Use a path relative to the lab directory for nearby artwork. You can also use an `/images/` URL for a file in `public/images/`. Keep the lab's `id` as a literal string. Asset preparation reads these values without executing the article.

Remote artwork URLs are unsupported. Missing or unreadable artwork uses the generated fallback card, which keeps the title and metadata.

## Prepare and check the cards

After changing artwork or metadata, run:

```sh
bun run social:prepare
```

The command prepares optimized PNG artwork, updates published project and lab counts, and snapshots the existing homepage globe using the authored journey data. It prints the current counts and the number of prepared artwork assets.

Both `bun run dev` and `bun run build` run this preparation step automatically. If the development server is already running, rerun preparation and restart it before checking changed artwork.

Open the page's `og:image` URL from its HTML metadata to inspect the complete card. For a generated fallback preview, open:

```text
http://localhost:3000/api/og?kind=project&title=Example%20project
```

Include `public/images/social/` and `src/lib/social-assets.json` with the change. These generated files are checked in and are not ignored. The manifest connects source artwork to prepared files and supplies the content counts.

Keep the local fonts in `public/fonts/roboto-mono/` and their `OFL.txt` license. The image route loads the regular and bold font files locally.
