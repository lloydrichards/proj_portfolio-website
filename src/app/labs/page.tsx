import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { typefaceHeading1 } from "@/components/tokens/typeface";
import { createPageMetadata } from "@/lib/seo";
import { getAllLabs } from "@/services/api/get-all-labs";
import { FC } from "react";

export const metadata = createPageMetadata({
  title: "Labs",
  description: "Rag tag collection of experiments and prototypes.",
});

const LabOverviewPage: FC = async () => {
  const allLabs = await getAllLabs();
  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
      <h1
        className={typefaceHeading1(
          "col-span-full row-span-2 flex items-center",
        )}
      >
        Lab Grid
      </h1>
      {allLabs.map(({ frontmatter }) => (
        <Tile
          key={frontmatter.slug}
          size={frontmatter.isFeatured ? "box-md" : "square-md"}
        >
          <LabCard lab={frontmatter} asLink />
        </Tile>
      ))}
    </article>
  );
};

export default LabOverviewPage;
