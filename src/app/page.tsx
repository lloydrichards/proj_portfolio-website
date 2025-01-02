import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { ProjectCard } from "@/components/molecule/project_card";
import { ThemeToggle } from "@/components/molecule/theme-toggle";
import { Mosaic } from "@/components/template/mosaic";
import { typefaceBody1, typefaceHeading1 } from "@/components/tokens/typeface";
import { getFeaturedLabs } from "@/services/get-featured-labs";
import { getFeaturedProjects } from "@/services/get-featured-projects";
import Image from "next/image";

const HomePage = async () => {
  const allProjects = await getFeaturedProjects();
  const allLabs = await getFeaturedLabs();

  return (
    <Mosaic>
      <Image
        className="col-span-full row-span-2 rounded-md md:col-span-4 md:row-span-6 lg:col-span-6 lg:row-span-8"
        src="/images/lloyd_richards_portrait.png"
        alt="Half body head shot of Lloyd Richards"
        width={400}
        height={600}
        priority
      />
      <Tile
        size="unset"
        className="col-[1/-2] row-span-1 grid items-center px-8 md:col-span-10 md:row-span-2 lg:col-span-16 lg:row-span-2"
      >
        <h1 className={typefaceHeading1("mt-0")}>Hello, I&apos;m Lloyd</h1>
      </Tile>
      <Tile
        size="unset"
        className="col-span-full row-span-4 grid items-center p-4 md:col-span-12 lg:col-span-18 lg:row-span-6"
      >
        <p className={typefaceBody1()}>
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
