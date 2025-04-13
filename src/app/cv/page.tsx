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

  const formatDate = (date?: Date) => date && utcFormat("%m.%Y")(date);
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
          Zurich-based Fullstack Engineer with a background in interaction
          design and a passion for sustainability, systems thinking, and data
          visualization. I bring a multidisciplinary mindset and years of
          real-world experience across design, development, and problem-solving
          to build impactful, user-centered web applications.
        </p>
        <ul className={typefaceBody()}>
          <li className="my-2 ml-6 list-disc">
            Strong focus on data-driven, sustainable digital solutions
          </li>
          <li className="my-2 ml-6 list-disc">
            Constantly learning and experimenting across disciplines
          </li>
          <li className="my-2 ml-6 list-disc">
            Experienced in full project lifecycles, from concept to deployment
          </li>
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Work Experience</h2>
        {workExperience.map((work) => (
          <div key={work.id} className="my-4 flex flex-col gap-2">
            <h3 className={typefaceHeading4()}>
              {work.company} ({work.title}, {formatDate(work.start_date)} -{" "}
              {work.end_date ? formatDate(work.end_date) : "Present"})
            </h3>
            <p>{work.description}</p>
            <p>
              <strong>Skills:</strong> {work.skills?.join(", ")}
            </p>
          </div>
        ))}
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Projects</h2>
        <ul className={typefaceBody()}>
          {projects.map((project) => (
            <li className="my-4 ml-6 list-disc" key={project.id}>
              <Link
                className={typefaceAnchor()}
                href={`/projects/${project.slug}`}
              >
                <strong>{project.title}</strong>
              </Link>{" "}
              ({formatDate(project.date)})<p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Education</h2>
        <ul className={typefaceBody()}>
          {education.map((e) => (
            <li className="my-2 ml-6 list-disc" key={e.id}>
              <strong>
                {e.title} from {e.company}
              </strong>{" "}
              {formatDate(e.start_date)} -{" "}
              {e.end_date ? formatDate(e.end_date) : "Present"}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={typefaceHeading2()}>Volunteering</h2>
        <ul className={typefaceBody()}>
          {volunteering.map((v) => (
            <li className="my-2 ml-6 list-disc" key={v.id}>
              <strong>
                {v.title} at {v.company}
              </strong>{" "}
              {formatDate(v.start_date)} -{" "}
              {v.end_date ? formatDate(v.end_date) : "Present"}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default CVPage;
