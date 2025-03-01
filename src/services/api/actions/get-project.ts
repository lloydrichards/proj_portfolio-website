import { ProjectMeta } from "@/types/domain";
import { MissingContentError } from "@/types/errors";
import { FileSystem } from "@effect/platform";
import { Effect, pipe, Schema } from "effect";
import React from "react";
import { PROJECT_PATH } from "../../consts";
import { createMDX } from "../create-mdx";
import { makeOGImageURL } from "../utils";

const ProjectMdx = Schema.Struct({
  content: Schema.declare(React.isValidElement),
  frontmatter: ProjectMeta,
});

export const getProject = (slug: string) =>
  pipe(
    FileSystem.FileSystem,
    Effect.andThen((fs) => fs.readFileString(PROJECT_PATH + `/${slug}.mdx`)),
    Effect.flatMap(createMDX),
    Effect.flatMap(Schema.decodeUnknown(ProjectMdx)),
    Effect.andThen(
      ({ content, frontmatter }) =>
        [
          content,
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
    Effect.catchTag("BadArgument", () =>
      Effect.fail(new MissingContentError({ slug })),
    ),
    Effect.withSpan("getProject", { attributes: { slug } }),
  );
