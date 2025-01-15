import { Lab, LabMeta } from "@/types/domain";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { failure } from "io-ts/lib/PathReporter";

type LabContent = {
  frontmatter: Lab;
};
export const getLab = async (slug: string): Promise<LabContent | null> =>
  pipe(
    await import(`@/app/labs/(content)/${slug}/page.mdx`),
    (d) => d.metadata,
    LabMeta.decode,
    E.fold(
      (errors) => {
        console.error(failure(errors).join("\n"));
        return null;
      },
      (metadata) => ({
        frontmatter: {
          ...metadata,
          pathname: `/labs/${slug}`,
          slug,
          lastModified: new Date(),
          isPublished: metadata.isPublished ?? true,
        },
      }),
    ),
  );
