import { Effect } from "effect";
import mdxMermaid from "mdx-mermaid";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { components } from "@/mdx-components";
import { MDXCompileError } from "@/types/Errors";

export class MDXCompiler extends Effect.Service<MDXCompiler>()(
  "app/MDXCompiler",
  {
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
            catch: (error) =>
              new MDXCompileError({
                source: source.substring(0, 100),
                originalError:
                  error instanceof Error ? error : new Error(String(error)),
              }),
          }).pipe(Effect.withSpan("createMDX", { attributes: { source } })),
        ),
      ),
    ),
  },
) {}
