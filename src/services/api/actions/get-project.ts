import { ProjectMeta } from "@/types/domain";
import { ContentNotFoundError } from "@/types/errors";
import { Effect, pipe, Schema } from "effect";
import { ReactElement } from "react";
import { PROJECT_PATH } from "../../consts";
import { createMDX } from "../create-mdx";
import { getSource, makeOGImageURL } from "../utils";

export const getProject = (slug: string) =>
  pipe(
    getSource(PROJECT_PATH + `/${slug}.mdx`),
    Effect.flatMap(createMDX),
    Effect.flatMap(
      Schema.decodeUnknown(
        Schema.Struct({
          content: Schema.Unknown,
          frontmatter: ProjectMeta,
        }),
      ),
    ),
    Effect.andThen(
      ({ content, frontmatter }) =>
        [
          content as ReactElement,
          {
            ...frontmatter,
            slug,
            lastModified: new Date(),
            pathname: `/projects/${slug}`,
            ogImageURL: makeOGImageURL({
              title: frontmatter.title,
              description: frontmatter.description,
              tags: [...frontmatter.category],
              date: frontmatter.date,
            }),
            isPublished: frontmatter.isPublished ?? true,
          },
        ] as const,
    ),
    Effect.catchTag("FSReadDirError", () =>
      Effect.fail(new ContentNotFoundError({ slug })),
    ),
  );
