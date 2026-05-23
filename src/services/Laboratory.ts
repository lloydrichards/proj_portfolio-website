import { BunFileSystem } from "@effect/platform-bun";
import { Array, Context, Effect, FileSystem, flow, Layer, Order, pipe, Schema } from "effect";
import { ImportError, ValidationError } from "@/types/Errors";
import { Lab, LabMeta } from "@/types/Lab";
import { LAB_PATH } from "./consts";
import { makeOGImageURL } from "./utils";

export class Laboratory extends Context.Service<Laboratory>()("app/Laboratory", {
  make: Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;

    const getLab = Effect.fn("Laboratory.getLab")((slug: string) =>
      pipe(
        Effect.succeed(slug),
        Effect.filterOrFail(
          (s) => /^[\w-]+$/.test(s),
          () =>
            new ValidationError({
              field: "slug",
              message: `Invalid lab slug format: ${slug}`,
            }),
        ),
        // Import the MDX file
        Effect.flatMap((validSlug) =>
          Effect.tryPromise({
            try: () => import(`@/app/labs/(content)/${validSlug}/page.mdx`),
            catch: (error) => {
              console.error(`[Laboratory] Failed to import lab "${validSlug}":`, error);
              return new ImportError({
                path: `@/app/labs/(content)/${validSlug}/page.mdx`,
                reason: error,
              });
            },
          }),
        ),
        // Extract and validate metadata
        Effect.map((d) => d.metadata),
        Effect.flatMap(Schema.decodeUnknownEffect(LabMeta)),
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
            Array.sortBy(Order.mapInput(Order.Number, (d: Lab) => +d.id)),
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
}) {
  static readonly layer = Layer.effect(this, this.make).pipe(
    Layer.provide(BunFileSystem.layer),
  );
}
