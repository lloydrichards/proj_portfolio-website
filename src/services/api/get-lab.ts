import { LabMeta } from "@/types/domain";
import { ContentNotFoundError, ImportError } from "@/types/errors";
import { Effect, pipe, Schema } from "effect";
import { makeOGImageURL } from "./utils";

const getLabMetadata = (slug: string) =>
  Effect.tryPromise({
    try: () => import(`@/app/labs/(content)/${slug}/page.mdx`),
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
    Effect.catchTag("FSReadDirError", () =>
      Effect.fail(new ContentNotFoundError(slug)),
    ),
  );
