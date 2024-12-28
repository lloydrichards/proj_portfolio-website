import { components } from "@/mdx-components";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { failure } from "io-ts/lib/PathReporter";
import { compileMDX } from "next-mdx-remote/rsc";
import { OCCUPATION_PATH } from "./consts";
import { getSource } from "./utils";
import { Occupation, OccupationMeta } from "@/types/domain";
import { ReactElement } from "react";

type OccupationContent = {
  content: ReactElement;
  frontmatter: Occupation;
};

export const getOccupation = async (
  slug: string,
): Promise<OccupationContent | null> => {
  const content = await getSource(OCCUPATION_PATH + `/${slug}.mdx`);
  if (!content) {
    return null;
  }
  return pipe(
    await compileMDX<OccupationMeta>({
      source: content,
      options: { parseFrontmatter: true },
      components: { ...components },
    }),
    E.right,
    E.chain(({ content, frontmatter }) =>
      pipe(
        OccupationMeta.decode(frontmatter),
        E.map((validatedFrontmatter) => ({
          content,
          frontmatter: {
            slug,
            lastModified: new Date(),
            ...validatedFrontmatter,
          },
        })),
      ),
    ),
    E.fold(
      (errors) => {
        console.error(failure(errors).join("\n"));
        return null;
      },
      (result) => result,
    ),
  );
};
