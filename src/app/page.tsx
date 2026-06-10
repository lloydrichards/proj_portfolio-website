import { Effect, Option, Schema } from "effect";
import { Briefcase, FlaskConical, Star } from "lucide-react";
import { ExpandableTile } from "@/components/atom/expandable-tile";
import { Tile } from "@/components/atom/tile";
import SvgGithub from "@/components/icons/github";
import { GitHubCommitCard } from "@/components/molecule/github_commit_card";
import { KPICard } from "@/components/molecule/kpi_card";
import { LabCard } from "@/components/molecule/lab_card";
import { ProjectCard } from "@/components/molecule/project_card";
import { SkillCard } from "@/components/molecule/skill_card";
import { ThemeToggle } from "@/components/molecule/theme-toggle";
import { Logo } from "@/components/organism/logo";
import { PersonJsonLd } from "@/components/organism/person-jsonld";
import { SkillBarChart } from "@/components/organism/skill_bar_chart/skill_bar_chart.server";
import { Mosaic } from "@/components/template/mosaic";
import { typefaceBody, typefaceHeading1 } from "@/components/tokens/typeface";
import { siteMetadata } from "@/lib/metadata";
import { GitHub } from "@/services/GitHub";
import { Laboratory } from "@/services/Laboratory";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Lab } from "@/types/Lab";
import { Project } from "@/types/Project";

const HomePage = async () => {
  const repoUrl = new URL(siteMetadata.siteRepo);
  const [owner, repo] = repoUrl.pathname.replace(/^\/+/, "").split("/");

  const [
    featuredLabs,
    allProjects,
    allLabs,
    allPortfolioProjects,
    githubStats,
    githubCommitGraph,
  ] = await RuntimeServer.runPromise(
    Effect.all(
      [
        Effect.gen(function* () {
          const svc = yield* Laboratory;
          return yield* svc.featured;
        }).pipe(Effect.andThen(Schema.encodeEffect(Lab.Array))),
        Effect.gen(function* () {
          const svc = yield* Portfolio;
          return yield* svc.featured;
        }).pipe(Effect.andThen(Schema.encodeEffect(Project.Array))),
        Effect.gen(function* () {
          const svc = yield* Laboratory;
          return yield* svc.all;
        }).pipe(Effect.andThen(Schema.encodeEffect(Lab.Array))),
        Effect.gen(function* () {
          const svc = yield* Portfolio;
          return yield* svc.all;
        }),
        Effect.gen(function* () {
          const svc = yield* GitHub;
          return yield* svc.getStats("lloydrichards");
        }),
        Effect.gen(function* () {
          const svc = yield* GitHub;
          return yield* svc.getCommitGraph({
            owner,
            repo,
            commitLimit: 300,
          });
        }).pipe(Effect.option),
      ],
      { concurrency: "unbounded" },
    ),
  );

  return (
    <>
      <PersonJsonLd />
      <Mosaic>
        <Tile
          size="square-md"
          className="bg-background overflow-clip group grid items-center"
        >
          <Logo className="text-primary scale-110 transition-transform hover:scale-115" />
        </Tile>
        <Tile
          size="unset"
          className="col-span-full row-span-1 grid items-center px-8 md:col-span-12 md:row-span-2 lg:col-span-16 lg:row-span-2"
        >
          <h1 className={typefaceHeading1("mt-0")}>Hello, I&apos;m Lloyd</h1>
        </Tile>
        <Tile
          size="unset"
          className="col-span-full row-span-4 grid items-center p-4 md:col-span-12 lg:col-span-18 lg:row-span-4"
        >
          <p className={typefaceBody()}>
            This website is a personal portfolio and lab space where I can
            showcase my projects, experiment with new ideas, and share my
            thoughts and experiences through blogging. Please feel free to
            explore my recent projects, read my lab and blog posts, or connect
            with me through social media.
          </p>
        </Tile>

        {/* KPI Cards Section - Grouped together for better visual cohesion */}
        <Tile size="box-sm">
          <KPICard
            label="Projects"
            value={allPortfolioProjects.length}
            subtitle="Total Articles"
            icon={<Briefcase className="size-5" />}
          />
        </Tile>

        <Tile size="box-sm">
          <KPICard
            label="Labs"
            value={allLabs.length}
            subtitle="Total Published"
            icon={<FlaskConical className="size-5" />}
          />
        </Tile>

        <Tile size="box-sm">
          <KPICard
            label="Github"
            value={githubStats.repos}
            subtitle="Total Repos"
            icon={<SvgGithub className="size-5" />}
          />
        </Tile>

        <Tile size="box-sm">
          <KPICard
            label="GitHub"
            value={githubStats.stars}
            subtitle="Total Stars"
            icon={<Star className="size-5" />}
          />
        </Tile>

        {/* Projects Section */}
        {allProjects.map((project) => (
          <ExpandableTile
            sizes={["box-md", "square-lg"]}
            key={`project${project.slug}`}
          >
            <ProjectCard project={project} />
          </ExpandableTile>
        ))}

        {/* Skills Chart */}
        <Tile size="square-lg" className="group grid items-center">
          <SkillCard
            title="Skills"
            subtitle="Hours by occupation"
            className="h-full"
          >
            <SkillBarChart />
          </SkillCard>
        </Tile>

        <Tile size="unset" className="col-span-full row-span-6 md:row-span-8">
          <GitHubCommitCard
            graph={Option.getOrNull(githubCommitGraph)}
            title="Portfolio activity"
          />
        </Tile>

        {/* Labs Section */}
        {featuredLabs.map((lab) => (
          <ExpandableTile
            sizes={["square-md", "box-md"]}
            key={`lab${lab.slug}`}
          >
            <LabCard lab={lab} expandable />
          </ExpandableTile>
        ))}
      </Mosaic>
    </>
  );
};

export default HomePage;
