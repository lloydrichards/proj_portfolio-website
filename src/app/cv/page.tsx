import { utcFormat } from "d3";
import { Effect } from "effect";
import Link from "next/link";
import {
  typefaceAnchor,
  typefaceBody,
  typefaceHeading1,
  typefaceHeading2,
  typefaceHeading4,
  typefaceMeta,
} from "@/components/tokens/typeface";
import { Dataset } from "@/services/Dataset/Dataset";
import { OccupationService } from "@/services/Dataset/OccupationService";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { CvSectionEditable } from "./cv-section-editable";

const isDev = process.env.NODE_ENV === "development";

const CVPage = async () => {
  const [allOccupations, projects] = await RuntimeServer.runPromise(
    Effect.all([Dataset.allOccupations(), Portfolio.featured]),
  );

  // In dev mode show all, in prod only featured
  const occupations = isDev
    ? allOccupations
    : allOccupations.filter((o) => o.isFeatures);

  const grouped = Object.groupBy(occupations, (o) => o.category);
  const workExperience = grouped.WORK ?? [];
  const volunteering = grouped.VOLUNTEER ?? [];
  const education = grouped.EDUCATION ?? [];

  // Fetch form options for dev mode
  const formOptions = isDev
    ? await RuntimeServer.runPromise(
        Effect.all([
          OccupationService.allCategories(),
          OccupationService.allSkills(),
          OccupationService.allAttributes(),
        ]),
      ).then(([categories, skills, attributes]) => ({
        categories,
        skills,
        attributes,
      }))
    : null;

  const formatDate = (date?: Date) => (date ? utcFormat("%b %Y")(date) : "");
  const formatYear = (date?: Date) => date && utcFormat("%Y")(date);

  // Serialize occupation data for client components
  const serializeOccupations = (occs: typeof workExperience) =>
    occs.map((o) => ({
      id: o.id,
      title: o.title,
      company: o.company,
      location: o.location,
      description: o.description,
      tasks: o.tasks,
      longDescription: o.longDescription,
      pensum: o.pensum,
      isFeatures: o.isFeatures,
      start_date: o.start_date,
      end_date: o.end_date,
      category: o.category,
      skills: o.skills,
      attributes: o.attributes,
    }));

  return (
    <main className="col-span-full flex flex-col gap-4 p-4">
      <p className={typefaceMeta("uppercase tracking-widest")}>
        Curriculum Vitae
      </p>
      <section className="flex items-center">
        <h1 className={typefaceHeading1("grow")}>Lloyd Richards</h1>
        <div>
          <ul className={typefaceMeta()}>
            <li>lloydrichards.dev</li>
            <li>lloyd.d.richards@gmail.com</li>
            <li>+41 77 97 30 938</li>
            <li>github.com/lloydrichards</li>
          </ul>
        </div>
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
            <strong>Other:</strong> Data Visualization, Design Systems, Flutter,
            Figma
          </li>
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Experience</h2>
        {isDev && formOptions ? (
          <CvSectionEditable
            occupations={serializeOccupations(workExperience)}
            categoryName="WORK"
            formOptions={formOptions}
          />
        ) : (
          workExperience.map((work) => (
            <article key={work.id} className="my-6 flex flex-col gap-2">
              <h3 className={typefaceHeading4()}>
                {work.company} – {work.title}
              </h3>
              <i className={typefaceMeta("text-muted-foreground")}>
                {formatDate(work.start_date)} →{" "}
                {work.end_date ? formatDate(work.end_date) : "Present"}
              </i>
              <p className={typefaceBody()}>{work.description}</p>
              <ul className={typefaceBody()}>
                {work.tasks?.map((task) => (
                  <li className="my-2 ml-6 list-disc" key={task}>
                    {task}
                  </li>
                ))}
              </ul>
            </article>
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
        {isDev && formOptions ? (
          <CvSectionEditable
            occupations={serializeOccupations(education)}
            categoryName="EDUCATION"
            formOptions={formOptions}
          />
        ) : (
          <ul className={typefaceBody()}>
            {education.map((e) => (
              <li className="my-2 ml-6 list-disc" key={e.id}>
                <strong>{e.title},</strong> {e.company} -{" "}
                {formatDate(e.start_date)} →{" "}
                {e.end_date ? formatDate(e.end_date) : "Present"}
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Community & Volunteering</h2>
        {isDev && formOptions ? (
          <CvSectionEditable
            occupations={serializeOccupations(volunteering)}
            categoryName="VOLUNTEER"
            formOptions={formOptions}
          />
        ) : (
          <ul className={typefaceBody()}>
            {volunteering.map((v) => (
              <li className="my-2 ml-6 list-disc" key={v.id}>
                <strong>{v.title},</strong>
                {v.company} - {formatDate(v.start_date)} →{" "}
                {v.end_date ? formatDate(v.end_date) : "Present"}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default CVPage;
