import { Project, ProjectMeta } from "@/types/domain";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { failure } from "io-ts/lib/PathReporter";
import { ReactElement } from "react";
import { PROJECT_PATH } from "../consts";
import { createMDX } from "./create-mdx";
import { getSource } from "./utils";

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
    ProjectMeta.decode(frontmatter),
    E.fold(
      (errors) => {
        console.error(failure(errors).join("\n"));
        return null;
      },
      (frontmatter) => ({
        content,
        frontmatter: {
          ...frontmatter,
          slug,
          lastModified: new Date(),
          pathname: `/projects/${slug}`,
          isPublished: frontmatter.isPublished ?? true,
        },
      }),
    ),
  );
};
