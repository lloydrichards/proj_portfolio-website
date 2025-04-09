import { ImportError } from "@/types/Errors";
import { Lab, LabMeta } from "@/types/Lab";
import { FileSystem } from "@effect/platform";
import { BunFileSystem } from "@effect/platform-bun";
import { Array, Effect, flow, Order, pipe, Schema } from "effect";
import { LAB_PATH } from "./consts";
import { makeOGImageURL } from "./utils";

export class Laboratory extends Effect.Service<Laboratory>()("app/Laboratory", {
  dependencies: [BunFileSystem.layer],
  effect: Effect.Do.pipe(
    Effect.let("getLab", () =>
      Effect.fn("Laboratory.getLab")((slug: string) =>
        pipe(
          Effect.tryPromise({
            try: () => import(`@/app/labs/(content)/${slug}/page.mdx`),
            catch: () =>
              new ImportError({
                path: `@/app/labs/(content)/${slug}/page.mdx`,
              }),
          }),
          Effect.map((d) => d.metadata),
          Effect.andThen(Schema.decodeUnknown(LabMeta)),
          Effect.andThen(
            (metadata) =>
              new Lab({
                ...metadata,
                pathname: `/labs/${slug}`,
                slug,
                lastModified: new Date(),
                ogImageURL: makeOGImageURL({
                  title: metadata.title,
                  description: metadata.description,
                  tags: [...metadata.tags],
                  date: metadata.date,
                }),
                isPublished: metadata.isPublished ?? true,
              }),
          ),
        ),
      ),
    ),
    Effect.bind("all", ({ getLab }) =>
      pipe(
        FileSystem.FileSystem,
        Effect.andThen((fs) => fs.readDirectory(LAB_PATH)),
        Effect.andThen((fileNames) =>
          Effect.all(
            pipe(
              fileNames,
              Array.filter((f) => !f.endsWith(".tsx")),
              Array.map((f) => getLab(f)),
            ),
            { concurrency: "unbounded" },
          ),
        ),
        Effect.map(
          flow(
            Array.sortBy(Order.mapInput(Order.number, (d) => +d.id)),
            Array.reverse,
          ),
        ),
      ),
    ),
    Effect.let("featured", ({ all }) =>
      Array.filter(all, (lab) => lab.isFeatured === true),
    ),
  ),
  accessors: true,
}) {}
