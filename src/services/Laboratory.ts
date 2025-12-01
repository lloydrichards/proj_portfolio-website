import { FileSystem } from "@effect/platform";
import { BunFileSystem } from "@effect/platform-bun";
import { Array, Effect, flow, Order, pipe, Schema } from "effect";
import { ImportError, ValidationError } from "@/types/Errors";
import { Lab, LabMeta } from "@/types/Lab";
import { LAB_PATH } from "./consts";
import { makeOGImageURL } from "./utils";

export class Laboratory extends Effect.Service<Laboratory>()("app/Laboratory", {
  dependencies: [BunFileSystem.layer],
  effect: Effect.gen(function* (_) {
    const fs = yield* FileSystem.FileSystem;
    const getLab = Effect.fn("Laboratory.getLab")((slug: string) =>
      pipe(
        // Validate slug format
        Effect.if(/^[\w-]+$/.test(slug), {
          onTrue: () => Effect.succeed(slug),
          onFalse: () =>
            Effect.fail(
              new ValidationError({
                field: "slug",
                message: `Invalid lab slug format: ${slug}`,
              }),
            ),
        }),
        // Import the MDX file
        Effect.flatMap((validSlug) =>
          Effect.tryPromise({
            try: () => import(`@/app/labs/(content)/${validSlug}/page.mdx`),
            catch: (error) =>
              new ImportError({
                path: `@/app/labs/(content)/${validSlug}/page.mdx`,
                reason: error,
              }),
          }),
        ),
        // Extract and validate metadata
        Effect.map((d) => d.metadata),
        Effect.flatMap(Schema.decodeUnknown(LabMeta)),
        // Transform to Lab instance
        Effect.map(
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
              status: metadata.status ?? "published",
            }),
        ),
        Effect.withSpan("getLab", { attributes: { slug } }),
      ),
    );

    const all = Effect.gen(function* () {
      const fileNames = yield* fs.readDirectory(LAB_PATH);

      return yield* Effect.all(
        pipe(
          fileNames,
          Array.filter((f) => !f.endsWith(".tsx")),
          Array.map((f) => getLab(f)),
        ),
        { concurrency: "unbounded" },
      ).pipe(
        Effect.map(
          flow(
            Array.sortBy(Order.mapInput(Order.number, (d) => +d.id)),
            Array.reverse,
          ),
        ),
      );
    });

    const visible = all.pipe(
      Effect.map((labs) => {
        if (process.env.NODE_ENV === "production") {
          // In production: show only published items
          return Array.filter(labs, (lab) => lab.status === "published");
        }
        // In development: show all items
        return labs;
      }),
    );

    const featured = visible.pipe(
      Effect.map((labs) =>
        Array.filter(labs, (lab) => lab.isFeatured === true),
      ),
    );

    return {
      getLab,
      all,
      visible,
      featured,
    };
  }),
  accessors: true,
}) {}
