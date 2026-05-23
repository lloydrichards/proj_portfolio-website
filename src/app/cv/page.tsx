import { utcFormat } from "d3";
import { Array as A, Effect, Match, Option, pipe } from "effect";
import Link from "next/link";
import { PersonJsonLd } from "@/components/organism/person-jsonld";
import {
  typefaceAnchor,
  typefaceBody,
  typefaceHeading1,
  typefaceHeading2,
  typefaceMeta,
} from "@/components/tokens/typeface";
import { Dataset } from "@/services/Dataset/Dataset";
import { OccupationService } from "@/services/Dataset/OccupationService";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { EducationItem, VolunteerItem, WorkItem } from "./cv-items";
import { CvSectionEditable } from "./cv-section-editable";
import { CvViewToggle } from "./cv-view-toggle";
import type { OccupationData } from "./types";

const isDev = process.env.NODE_ENV === "development";

const CVPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) => {
  const { view } = await searchParams;
  const mode = Match.value({ isDev, view }).pipe(
    Match.when({ isDev: false }, () => "prod" as const),
    Match.when({ view: "prod" }, () => "prod" as const),
    Match.orElse(() => "edit" as const),
  );
  const [allOccupations, projects] = await RuntimeServer.runPromise(
    Effect.all([
      Effect.gen(function* () {
        const svc = yield* Dataset;
        return yield* svc.allOccupations();
      }),
      Effect.gen(function* () {
        const svc = yield* Portfolio;
        return yield* svc.featured;
      }),
    ]),
  );

  // In edit mode show all, in prod mode only featured
  const occupations =
    mode === "edit"
      ? allOccupations
      : A.filter(allOccupations, (o) => o.isFeatures);

  const grouped = A.groupBy(occupations, (o) => o.category);
  const workExperience = grouped.WORK ?? [];
  const volunteering = grouped.VOLUNTEER ?? [];
  const education = grouped.EDUCATION ?? [];

  // Fetch form options for dev mode
  const formOptions = isDev
    ? await RuntimeServer.runPromise(
        Effect.all([
          Effect.gen(function* () {
            const svc = yield* OccupationService;
            return yield* svc.allCategories();
          }),
          Effect.gen(function* () {
            const svc = yield* OccupationService;
            return yield* svc.allSkills();
          }),
          Effect.gen(function* () {
            const svc = yield* OccupationService;
            return yield* svc.allAttributes();
          }),
        ]),
      ).then(([categories, skills, attributes]) => ({
        categories,
        skills,
        attributes,
      }))
    : null;

  const formatYear = (date?: Date) =>
    pipe(
      Option.fromNullishOr(date),
      Option.map(utcFormat("%Y")),
      Option.getOrUndefined,
    );

  // Convert Schema class instances to plain objects for client components
  const serialize = (o: (typeof occupations)[number]): OccupationData => ({
    ...o,
  });

  return (
    <>
      <PersonJsonLd />
      <main className="col-span-full flex flex-col gap-4 p-4">
        <p className={typefaceMeta("uppercase tracking-widest")}>
          Curriculum Vitae
        </p>
        {isDev && <CvViewToggle mode={mode} />}
        <section className="flex gap-8 flex-col">
          <h1 className={typefaceHeading1("grow")}>Lloyd Richards</h1>
          <ul
            className={typefaceMeta(
              "inline-flex list-none flex-wrap gap-2 p-0 [&>li:not(:first-child)]:before:mr-2 [&>li:not(:first-child)]:before:content-['·']",
            )}
          >
            <li>
              <a
                className={typefaceAnchor("no-underline hover:underline")}
                href="https://lloydrichards.dev"
                rel="noopener"
                target="_blank"
              >
                lloydrichards.dev
              </a>
            </li>
            <li>
              <a
                className={typefaceAnchor("no-underline hover:underline")}
                href="mailto:lloyd.d.richards@gmail.com"
                rel="noopener"
                target="_blank"
              >
                lloyd.d.richards@gmail.com
              </a>
            </li>
            <li>
              <a
                className={typefaceAnchor("no-underline hover:underline")}
                href="tel:+41779730938"
              >
                +41 77 97 30 938
              </a>
            </li>
            <li>
              <a
                className={typefaceAnchor("no-underline hover:underline")}
                href="https://github.com/lloydrichards"
                rel="noopener"
                target="_blank"
              >
                github.com/lloydrichards
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Executive Summary</h2>
          <p className={typefaceBody("mt-2")}>
            Multidisciplinary Fullstack Engineer with 6+ years of experience
            building award-winning, data-rich web applications for public sector
            and Fortune 500 clients. Background in interaction design and data
            visualization, working end-to-end across data pipelines, component
            libraries, and production infrastructure.
          </p>
          <ul className={typefaceBody()}>
            <li className="my-2 ml-6 list-disc">
              Award-winning work (Swiss Viz Awards, German Design Awards) across
              interactive data platforms
            </li>
            <li className="my-2 ml-6 list-disc">
              End-to-end ownership from data architecture through to D3
              visualizations and CMS-driven sites
            </li>
            <li className="my-2 ml-6 list-disc">
              Experienced in cross-functional collaboration with designers,
              researchers, and stakeholders
            </li>
          </ul>
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Technical Skills</h2>

          <ul className={typefaceBody()}>
            <li className="my-2">
              <strong>Frontend:</strong> TypeScript, React, Next.js, D3.js,
              Storybook, Tailwind, Web Components
            </li>
            <li className="my-2">
              <strong>Backend:</strong> Node.js, GraphQL, REST APIs, Prisma,
              PostgreSQL, Snowflake, Firebase
            </li>
            <li className="my-2">
              <strong>Infra & Tooling:</strong> Docker, CI/CD (GitHub Actions),
              Terraform, Kubernetes, Vercel
            </li>
            <li className="my-2">
              <strong>Other:</strong> Data Visualization, Design Systems,
              Flutter, Figma
            </li>
          </ul>
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Experience</h2>
          {mode === "edit" && formOptions ? (
            <CvSectionEditable
              occupations={A.map(workExperience, serialize)}
              categoryName="WORK"
              formOptions={formOptions}
            />
          ) : (
            workExperience.map((work) => (
              <WorkItem
                key={work.id}
                occupation={serialize(work)}
                mode="prod"
              />
            ))
          )}
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Key Projects</h2>
          <ul className={typefaceBody()}>
            {projects.map((project) => (
              <li className="my-4" key={project.id}>
                <Link
                  className={typefaceAnchor()}
                  href={`/projects/${project.slug}`}
                >
                  <strong>{project.title}</strong>
                </Link>{" "}
                ({formatYear(project.date)})<p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Education</h2>
          {mode === "edit" && formOptions ? (
            <CvSectionEditable
              occupations={A.map(education, serialize)}
              categoryName="EDUCATION"
              formOptions={formOptions}
            />
          ) : (
            <ul className={typefaceBody()}>
              {education.map((e) => (
                <EducationItem
                  key={e.id}
                  occupation={serialize(e)}
                  mode="prod"
                />
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className={typefaceHeading2()}>Community & Volunteering</h2>
          {mode === "edit" && formOptions ? (
            <CvSectionEditable
              occupations={A.map(volunteering, serialize)}
              categoryName="VOLUNTEER"
              formOptions={formOptions}
            />
          ) : (
            <ul className={typefaceBody()}>
              {volunteering.map((v) => (
                <VolunteerItem
                  key={v.id}
                  occupation={serialize(v)}
                  mode="prod"
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default CVPage;
