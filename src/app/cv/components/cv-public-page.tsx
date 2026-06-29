import { utcFormat } from "d3";
import { Option, pipe } from "effect";
import Link from "next/link";
import { PersonJsonLd } from "@/components/organism/person-jsonld";
import {
  typefaceAnchor,
  typefaceBody,
  typefaceHeading1,
  typefaceHeading2,
  typefaceMeta,
} from "@/components/tokens/typeface";
import { EducationItem, VolunteerItem, WorkItem } from "../cv-items";
import type { CvData } from "../data/get-cv-data";
import { projectCvData } from "../data/project-cv-data";
import type { CvVariant } from "../data/variants";
import { CvMarkdownButton } from "./cv-markdown-button";
import { CvPdfButton } from "./cv-pdf-button";

type CvPublicPageProps = {
  data: CvData;
  markdownHref?: string;
  pdfHref?: string;
  variant: CvVariant;
};

const formatYear = (date?: Date) =>
  pipe(
    Option.fromNullishOr(date),
    Option.map(utcFormat("%Y")),
    Option.getOrUndefined,
  );

export function CvPublicPage({
  data,
  markdownHref,
  pdfHref,
  variant,
}: CvPublicPageProps) {
  const { education, projects, volunteering, workExperience } = projectCvData({
    data,
    variant,
  });

  return (
    <>
      <PersonJsonLd
        description={variant.schemaDescription}
        disambiguatingDescription={variant.summary}
        jobTitle={variant.schemaJobTitle}
        knowsAbout={variant.skillOrder}
      />
      <main className="col-span-full flex flex-col gap-4 p-4 cv-print-root">
        <header className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3 print:hidden">
            <p className={typefaceMeta("uppercase tracking-widest")}>
              Curriculum Vitae / {variant.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {pdfHref ? <CvPdfButton href={pdfHref} /> : null}
              {markdownHref ? <CvMarkdownButton href={markdownHref} /> : null}
            </div>
          </div>
          <section className="flex gap-4 flex-col">
            <h1 className={typefaceHeading1("grow")}>Lloyd Richards</h1>
            <p className={typefaceBody("max-w-4xl text-muted-foreground")}>
              {variant.headline}
            </p>
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
        </header>

        <section>
          <h2 className={typefaceHeading2("border-b pb-1")}>
            Executive Summary
          </h2>
          <p className={typefaceBody("mt-2")}>{variant.summary}</p>
          <ul className={typefaceBody()}>
            {variant.highlights.map((highlight) => (
              <li className="my-2 ml-6 list-disc" key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={typefaceHeading2("border-b pb-1")}>
            Technical Skills
          </h2>
          <p className={typefaceBody("mt-2")}>
            {variant.skillOrder.join(", ")}
          </p>
        </section>

        <section>
          <h2 className={typefaceHeading2("border-b pb-1")}>Experience</h2>
          {workExperience.map((work) => (
            <WorkItem key={work.id} mode="prod" occupation={work} />
          ))}
        </section>

        <section>
          <h2 className={typefaceHeading2("border-b pb-1")}>Key Projects</h2>
          <ul className={typefaceBody()}>
            {projects.map((project) => (
              <li className="my-4 break-inside-avoid" key={project.id}>
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
          <h2 className={typefaceHeading2("border-b pb-1")}>Education</h2>
          <ul className={typefaceBody()}>
            {education.map((item) => (
              <EducationItem key={item.id} mode="prod" occupation={item} />
            ))}
          </ul>
        </section>

        <section>
          <h2 className={typefaceHeading2("border-b pb-1")}>
            Community & Volunteering
          </h2>
          <ul className={typefaceBody()}>
            {volunteering.map((item) => (
              <VolunteerItem key={item.id} mode="prod" occupation={item} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
