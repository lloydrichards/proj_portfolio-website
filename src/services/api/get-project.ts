import { Project, ProjectMeta } from "@/types/domain";
import { Either, pipe, Schema } from "effect";
import { ReactElement } from "react";
import { PROJECT_PATH } from "../consts";
import { createMDX } from "./create-mdx";
import { getSource, makeOGImageURL } from "./utils";

type ProjectContent = {
  content: ReactElement;
  frontmatter: Project;
};

export const getProject = async (
  slug: string,
): Promise<ProjectContent | null> => {
  const source = await getSource(PROJECT_PATH + `/${slug}.mdx`);

  if (!source) {
    return null;
  }

  const { content, frontmatter } = await createMDX<ProjectMeta>(source);

  return pipe(
    frontmatter,
    Schema.decodeUnknownEither(ProjectMeta),
    Either.match({
      onLeft: (errors) => {
        console.error(errors);
        return null;
      },
      onRight: (frontmatter) => ({
        content,
        frontmatter: {
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
      }),
    }),
  );
};
