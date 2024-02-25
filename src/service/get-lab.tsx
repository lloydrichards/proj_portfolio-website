import { allLabs } from "@generated";
import { notFound } from "next/navigation";

export const getLab = async (slug: string) => {
  const lab = allLabs.find((lab) => lab.slugAsParams === slug);
  if (!lab) notFound();
  return lab;
};
