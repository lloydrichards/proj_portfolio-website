import { Tile } from "@/components/atom/tile";
import { LabCard } from "@/components/molecule/lab_card";
import { ProjectCard } from "@/components/molecule/project_card";
import { ThemeToggle } from "@/components/molecule/theme-toggle";
import { Logo } from "@/components/organism/logo";
import { SkillBarChart } from "@/components/organism/skill_bar_chart/skill_bar_chart.server";
import { Mosaic } from "@/components/template/mosaic";
import { typefaceBody, typefaceHeading1 } from "@/components/tokens/typeface";
import { LabApi } from "@/services/LabApi";
import { ProjectApi } from "@/services/ProjectApi";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Effect } from "effect";

const HomePage = async () => {
  const [featuredLabs, allProjects] = await RuntimeServer.runPromise(
    Effect.all(
      [
        LabApi.pipe(Effect.andThen(({ featured }) => featured)),
        ProjectApi.pipe(Effect.andThen(({ featured }) => featured)),
      ],
      { concurrency: "unbounded" },
    ),
  );

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
        className="col-span-full row-span-4 grid items-center p-4 md:col-span-12 lg:col-span-18 lg:row-span-4"
      >
        <p className={typefaceBody()}>
          This website is a personal portfolio and lab space where I can
          showcase my projects, experiment with new ideas, and share my thoughts
          and experiences through blogging. Please feel free to explore my
          recent projects, read my lab and blog posts, or connect with me
          through social media.
        </p>
      </Tile>
      {allProjects.map((project) => (
        <Tile size="box-md" key={"project" + project.slug}>
          <ProjectCard
            key={"project" + project.slug}
            project={project}
            className="col-span-8 row-span-6"
          />
        </Tile>
      ))}
      <Tile size="square-lg" className="bg-background group grid items-center">
        <SkillBarChart />
      </Tile>
      {featuredLabs.map((lab) => (
        <Tile size="square-md" key={"lab" + lab.slug}>
          <LabCard lab={lab} />
        </Tile>
      ))}
      <Tile>
        <ThemeToggle />
      </Tile>
    </Mosaic>
  );
};

export default HomePage;
