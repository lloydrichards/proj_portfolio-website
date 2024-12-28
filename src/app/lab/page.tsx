import { PostCard } from "@/components/molecule/post_card";
import { getAllLabs } from "@/services/get-all-labs";
import { FC } from "react";

const LabOverviewPage: FC = async () => {
  const allLabs = await getAllLabs();
  return (
    <section className="grid grid-cols-subgrid gap-2">
      <h1 className="col-span-full">Welcome to the Lab overview page</h1>
      {allLabs.map(({ frontmatter }) => (
        <PostCard
          key={frontmatter.slug}
          post={frontmatter}
          className="col-span-4"
        />
      ))}
    </section>
  );
};

export default LabOverviewPage;
