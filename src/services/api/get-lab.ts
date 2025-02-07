import { Lab, LabMeta } from "@/types/domain";
import { Either, pipe, Schema } from "effect";
import { makeOGImageURL } from "./utils";

type LabContent = {
  frontmatter: Lab;
};
export const getLab = async (slug: string): Promise<LabContent | null> =>
  pipe(
    await import(`@/app/labs/(content)/${slug}/page.mdx`),
    (d) => d.metadata,
    Schema.decodeUnknownEither(LabMeta),
    Either.match({
      onLeft: (errors) => {
        console.error(errors);
        return null;
      },
      onRight: (metadata) => ({
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
      }),
    }),
  );
