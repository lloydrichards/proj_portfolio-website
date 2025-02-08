import { LabMeta } from "@/types/domain";
import { Effect, pipe, Schema } from "effect";
import { makeOGImageURL } from "./utils";

class ImportError {
  _tag = "ImportError";
  constructor(readonly slug: unknown) {}
}

const getLabMetadata = (slug: string) =>
  Effect.tryPromise({
    try: async () => await import(`@/app/labs/(content)/${slug}/page.mdx`),
    catch: () => new ImportError(slug),
  }).pipe(
    Effect.map((d) => d.metadata),
    Effect.andThen(Schema.decodeUnknown(LabMeta)),
  );

export const getLab = (slug: string) =>
  pipe(
    getLabMetadata(slug),
    Effect.andThen((metadata) => ({
      frontmatter: {
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
      },
    })),
  );
