import { Lab, LabMeta } from "@/types/domain";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { failure } from "io-ts/lib/PathReporter";

type LabContent = {
  frontmatter: Lab;
};
export const getLab = async (slug: string): Promise<LabContent | null> =>
  pipe(
    await import(`@/app/lab/${slug}/page.mdx`),
    (d) => d.metadata,
    LabMeta.decode,
    E.fold(
      (errors) => {
        console.error(failure(errors).join("\n"));
        return null;
      },
      (metadata) => ({
        frontmatter: {
          pathname: `/lab/${slug}`,
          slug,
          lastModified: new Date(),
          ...metadata,
        },
      }),
    ),
  );
