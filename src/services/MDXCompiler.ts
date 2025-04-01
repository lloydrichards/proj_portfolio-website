import { components } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";

import { Effect } from "effect";
import mdxMermaid from "mdx-mermaid";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

class MDXCompileError {
  readonly _tag = "MDXCompileError";
  constructor(readonly error: unknown) {}
}

export class MDXCompiler extends Effect.Service<MDXCompiler>()(
  "app/MDXCompiler",
  {
    dependencies: [],
    effect: Effect.Do.pipe(
      Effect.let("use", () =>
        Effect.fn(<T>(source: string) =>
          Effect.tryPromise({
            try: () =>
              compileMDX<T>({
                source,
                options: {
                  parseFrontmatter: true,
                  mdxOptions: {
                    remarkPlugins: [remarkGfm, mdxMermaid],
                    rehypePlugins: [
                      rehypeMdxImportMedia,
                      rehypeSlug,
                      [
                        rehypePrettyCode,
                        { keepBackground: false, theme: "synthwave-84" },
                      ],
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
              }),
            catch: (error) => new MDXCompileError(error),
          }).pipe(Effect.withSpan("createMDX", { attributes: { source } })),
        ),
      ),
    ),
  },
) {}
