import { getAllLabs } from "@/services/get-all-labs";
import Link from "next/link";

export const LabList = async () => {
  const allLabs = await getAllLabs();

  return (
    <nav className="flex min-w-56 flex-col gap-2">
      <h1>Lab</h1>
      <hr />
      {allLabs.map(({ frontmatter }) => (
        <div key={frontmatter.slug}>
          <Link href={frontmatter.pathname}>
            {frontmatter.id} - {frontmatter.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};
