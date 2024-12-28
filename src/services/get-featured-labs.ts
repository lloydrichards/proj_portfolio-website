import { getAllLabs } from "./get-all-labs";

export const getFeaturedLabs = async () => {
  const allLabs = await getAllLabs();

  return allLabs.filter((lab) => lab.frontmatter.isFeatured);
};
