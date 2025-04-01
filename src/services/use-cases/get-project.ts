import { ProjectMeta } from "@/types/domain";
import { MissingContentError } from "@/types/errors";
import { FileSystem } from "@effect/platform";
import { Effect, Schema } from "effect";
import React from "react";
import { PROJECT_PATH } from "../consts";
import { MDXCompiler } from "../MDXCompiler";
import { makeOGImageURL } from "../utils";

const ProjectMdx = Schema.Struct({
  content: Schema.declare(React.isValidElement),
  frontmatter: ProjectMeta,
});

export const getProject = (slug: string) =>
  Effect.Do.pipe(
    Effect.bind("fs", () => FileSystem.FileSystem),
    Effect.bind("mdx", () => MDXCompiler),
    Effect.bind("content", ({ fs }) =>
      fs.readFileString(PROJECT_PATH + `/${slug}.mdx`),
    ),
    Effect.flatMap(({ mdx, content }) => mdx.use(content)),
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
