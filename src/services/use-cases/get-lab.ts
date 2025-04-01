import { ImportError } from "@/types/Errors";
import { Lab, LabMeta } from "@/types/Lab";
import { Effect, pipe, Schema } from "effect";
import { makeOGImageURL } from "../utils";

export const getLab = (slug: string) =>
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
    Effect.withSpan("getLab", { attributes: { slug } }),
  );
