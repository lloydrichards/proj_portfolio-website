import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { ProjectCard } from "@/components/molecule/project_card";
import { ThemeToggle } from "@/components/molecule/theme-toggle";
import { Logo } from "@/components/organism/logo";
import { Mosaic } from "@/components/template/mosaic";
import { typefaceBody, typefaceHeading1 } from "@/components/tokens/typeface";
import { getFeaturedLabs } from "@/services/api/get-featured-labs";
import { getFeaturedProjects } from "@/services/api/get-featured-projects";

const HomePage = async () => {
  const allProjects = await getFeaturedProjects();
  const allLabs = await getFeaturedLabs();

  return (
    <Mosaic>
      <Tile size="square-md" className="bg-background group grid items-center">
        <Logo className="text-primary scale-110 transition-transform hover:scale-115" />
      </Tile>
      <Tile
        size="unset"
        className="col-[1/-2] row-span-1 grid items-center px-8 md:col-span-10 md:row-span-2 lg:col-span-16 lg:row-span-2"
      >
        <h1 className={typefaceHeading1("mt-0")}>Hello, I&apos;m Lloyd</h1>
      </Tile>
      <Tile
        size="unset"
        className="col-span-full row-span-3 grid items-center p-4 md:col-span-12 lg:col-span-18 lg:row-span-4"
      >
        <p className={typefaceBody()}>
          This website is a personal portfolio and lab space where I can
          showcase my projects, experiment with new ideas, and share my thoughts
          and experiences through blogging. Please feel free to explore my
          recent projects, read my lab and blog posts, or connect with me
          through social media.
        </p>
      </Tile>
      {allProjects.map(({ frontmatter }) => (
        <Tile size="box-md" key={"project" + frontmatter.slug}>
          <ProjectCard
            key={"project" + frontmatter.slug}
            project={frontmatter}
            className="col-span-8 row-span-6"
          />
        </Tile>
      ))}
      {allLabs.map(({ frontmatter }) => (
        <Tile size="square-md" key={"lab" + frontmatter.slug}>
          <LabCard lab={frontmatter} />
        </Tile>
      ))}
      <Tile>
        <ThemeToggle />
      </Tile>
    </Mosaic>
  );
};

export default HomePage;
