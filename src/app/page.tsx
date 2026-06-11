import { Effect, Option, Schema } from "effect";
import { Briefcase, FlaskConical, GitBranch, Star } from "lucide-react";
import { ExpandableTile } from "@/components/atom/expandable-tile";
import { Tile } from "@/components/atom/tile";
import { TileExpandButton } from "@/components/atom/tile-expand-button";
import { GitHubCommitCard } from "@/components/molecule/github_commit_card";
import { KPIStrip } from "@/components/molecule/kpi_strip";
import { LabCard } from "@/components/molecule/lab_card";
import { ProjectCard } from "@/components/molecule/project_card";
import { SkillCard } from "@/components/molecule/skill_card";
import { ThemeSwitcherTile } from "@/components/molecule/theme-switcher-tile";
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
          size="unset"
          className="col-span-4 row-span-4 md:col-span-4 md:row-span-5 lg:col-span-6 lg:row-span-6 bg-background overflow-clip group flex justify-center items-center"
        >
          <Logo className="text-primary scale-110 transition-transform hover:scale-115" />
        </Tile>
        {/* Compact stat strip */}
        <Tile size="full-xs">
          <KPIStrip
            stats={[
              {
                label: "Projects",
                value: allPortfolioProjects.length,
                icon: <Briefcase className="size-full" />,
              },
              {
                label: "Labs",
                value: allLabs.length,
                icon: <FlaskConical className="size-full" />,
              },
              {
                label: "Repos",
                value: githubStats.repos,
                icon: <GitBranch className="size-full" />,
              },
              {
                label: "Stars",
                value: githubStats.stars,
                icon: <Star className="size-full" />,
              },
            ]}
          />
        </Tile>
        <Tile
          size="unset"
          className="col-span-full row-span-1 grid items-end px-4 pb-1 md:col-span-12 md:row-span-2 md:px-8 lg:col-span-18 lg:row-span-2"
        >
          <h1 className={typefaceHeading1("mt-0")}>Hello, I&apos;m Lloyd</h1>
        </Tile>
        <Tile
          size="unset"
          className="col-span-full row-span-3 grid items-start p-4 md:col-span-12 md:row-span-3 lg:col-span-18 lg:row-span-4"
        >
          <p className={typefaceBody()}>
            Interaction engineer, building award-winning data platforms and
            interactive visualizations. This site runs on three complete themes
            to prove the system works.
          </p>
        </Tile>

        {/* Theme Switcher Tile */}
        <Tile size="square-md">
          <ThemeSwitcherTile />
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
        <ExpandableTile sizes={["square-lg", "tall-lg"]}>
          <SkillCard
            title="Skills"
            subtitle="Hours by occupation"
            className="h-full"
            action={<TileExpandButton />}
          >
            <SkillBarChart />
          </SkillCard>
        </ExpandableTile>

        <ExpandableTile sizes={["square-lg", "full-md"]}>
          <GitHubCommitCard
            graph={Option.getOrNull(githubCommitGraph)}
            title="Portfolio activity"
            expandable
          />
        </ExpandableTile>

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
