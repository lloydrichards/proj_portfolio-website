import {
  typefaceAnchor,
  typefaceBody,
  typefaceHeading1,
  typefaceHeading2,
  typefaceHeading4,
} from "@/components/tokens/typeface";
import { Dataset } from "@/services/Dataset";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import { utcFormat } from "d3";
import { Effect } from "effect";
import Link from "next/link";

const CVPage = async () => {
  const [curriculumVitae, projects] = await RuntimeServer.runPromise(
    Effect.all([Dataset.currentCurriculumVitae(), Portfolio.featured]),
  );

  const workExperience = curriculumVitae["WORK"];
  const volunteering = curriculumVitae["VOLUNTEER"];
  const education = curriculumVitae["EDUCATION"];

  const formatDate = (date?: Date) => date && utcFormat("%b %Y")(date);
  const formatYear = (date?: Date) => date && utcFormat("%Y")(date);
  return (
    <main className="col-span-full flex flex-col gap-4 p-4">
      <p className={typefaceHeading4()}>Curriculum Vitae</p>
      <section className="flex items-center">
        <h1 className={typefaceHeading1("grow")}>Lloyd Richards</h1>
        <div>
          <ul>
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
          Multidisciplinary Fullstack Engineer with 5+ years of experience
          building data-rich, user-focused web applications. I bring a
          background in interaction design and a passion for sustainability,
          working end-to-end across design systems, APIs, and production
          infrastructure.
        </p>
        <ul className={typefaceBody()}>
          <li className="my-2 ml-6 list-disc">
            Strong in both modern frontend frameworks and scalable backend
            systems
          </li>
          <li className="my-2 ml-6 list-disc">
            Comfortable with rapid prototyping, iteration, and full product
            ownership
          </li>
          <li className="my-2 ml-6 list-disc">
            Excels in collaborative, cross-functional teams and client-facing
            environments
          </li>
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Technical Skills</h2>

        <ul className={typefaceBody()}>
          <li className="my-2">
            <strong>Frontend:</strong> TypeScript, React, Next.js, D3.js,
            Storybook, Tailwind, HTML/CSS, Figma, Web Components
          </li>
          <li className="my-2">
            <strong>Backend:</strong> Node.js, Go, GraphQL, REST APIs, Prisma,
            PostgreSQL, Firebase
          </li>
          <li className="my-2">
            <strong>Infra & Tooling:</strong> Docker, CI/CD (GitHub Actions),
            Terraform, Kubernetes, Vercel
          </li>
          <li className="my-2">
            <strong>Other:</strong> Data Visualization, Design Systems, Git,
            Flutter
          </li>
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Experience</h2>
        {workExperience.map((work) => (
          <article key={work.id} className="my-6 flex flex-col gap-2">
            <h3 className={typefaceHeading4()}>
              {work.company} – {work.title}
            </h3>
            <i>
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
        ))}
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
        <ul className={typefaceBody()}>
          {education.map((e) => (
            <li className="my-2 ml-6 list-disc" key={e.id}>
              <strong>{e.title},</strong> {e.company} -{" "}
              {formatDate(e.start_date)} →{" "}
              {e.end_date ? formatDate(e.end_date) : "Present"}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Community & Volunteering</h2>
        <ul className={typefaceBody()}>
          {volunteering.map((v) => (
            <li className="my-2 ml-6 list-disc" key={v.id}>
              <strong>{v.title},</strong>
              {v.company} - {formatDate(v.start_date)} →{" "}
              {v.end_date ? formatDate(v.end_date) : "Present"}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CVPage;
