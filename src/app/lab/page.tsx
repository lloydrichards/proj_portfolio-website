import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { getAllLabs } from "@/services/get-all-labs";
import { FC } from "react";

const LabOverviewPage: FC = async () => {
  const allLabs = await getAllLabs();
  return (
    <>
      {allLabs.map(({ frontmatter }) => (
        <Tile
          key={frontmatter.slug}
          size={frontmatter.isFeatured ? "box-md" : "square-md"}
        >
          <LabCard lab={frontmatter} asLink />
        </Tile>
      ))}
    </>
  );
};

export default LabOverviewPage;
