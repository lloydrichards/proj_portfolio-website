import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { getAllLabs } from "@/services/get-all-labs";
import { FC } from "react";

const LabOverviewPage: FC = async () => {
  const allLabs = await getAllLabs();
  return (
    <article className="mosaic-rows col-span-full grid grid-flow-dense grid-cols-subgrid">
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
