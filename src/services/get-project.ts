import { components } from "@/mdx-components";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { failure } from "io-ts/lib/PathReporter";
import { compileMDX } from "next-mdx-remote/rsc";
import { PROJECT_PATH } from "./consts";
import { getSource } from "./utils";
import { Project, ProjectMeta } from "@/types/domain";
import { ReactElement } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import mdxMermaid from "mdx-mermaid";
import rehypeMdxImportMedia from "rehype-mdx-import-media";

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
  const { content, frontmatter } = await compileMDX<ProjectMeta>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, mdxMermaid],
        rehypePlugins: [
          rehypeMdxImportMedia,
          rehypeSlug,
          rehypePrettyCode,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
              },
            },
          ],
        ],
      },
    },
    components: { ...components },
  });

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
          pathname: `/project/${slug}`,
          isPublished: frontmatter.isPublished ?? true,
        },
      }),
    ),
  );
};
