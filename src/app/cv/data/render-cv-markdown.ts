import { utcFormat } from "d3";
import { Option, pipe } from "effect";
import { siteMetadata } from "@/lib/metadata";
import type { Project } from "@/types/Project";
import type { OccupationData } from "../types";
import type { CvData } from "./get-cv-data";
import { projectCvData } from "./project-cv-data";
import type { CvVariant } from "./variants";

const formatDate = utcFormat("%b %Y");
const formatYear = utcFormat("%Y");

const formatEndDate = (date: Date | null) =>
  pipe(
    Option.fromNullishOr(date),
    Option.map(formatDate),
    Option.getOrElse(() => "Present"),
  );

const normalizeMarkdown = (markdown: string) =>
  markdown
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const textOrEmpty = (text: string | null | undefined) => text?.trim() ?? "";

const renderOccupation = (occupation: OccupationData) =>
  normalizeMarkdown(`
### ${occupation.company} - ${occupation.title}

_${formatDate(occupation.start_date)} - ${formatEndDate(occupation.end_date)}_

${textOrEmpty(occupation.longDescription) || textOrEmpty(occupation.description)}
`);

const renderListOccupation = (occupation: OccupationData) =>
  `- **${occupation.title},** ${occupation.company} (${formatDate(
    occupation.start_date,
  )} - ${formatEndDate(occupation.end_date)})`;

const renderProject = (project: Project) =>
  normalizeMarkdown(`
- **[${project.title}](${siteMetadata.siteUrl}/projects/${project.slug})** (${formatYear(
    project.date,
  )})
  ${project.description}
`);

export const renderCvMarkdown = ({
  data,
  variant,
}: {
  data: CvData;
  variant: CvVariant;
}) => {
  const { education, projects, volunteering, workExperience } = projectCvData({
    data,
    variant,
  });

  return normalizeMarkdown(`
# Lloyd Richards

${variant.headline}

[lloydrichards.dev](https://lloydrichards.dev) · [lloyd.d.richards@gmail.com](mailto:lloyd.d.richards@gmail.com) · [+41 77 97 30 938](tel:+41779730938) · [github.com/lloydrichards](https://github.com/lloydrichards)

## Executive Summary

${variant.summary}

${variant.highlights.map((highlight) => `- ${highlight}`).join("\n")}

## Technical Skills

${variant.skillOrder.join(", ")}

## Experience

${workExperience.map(renderOccupation).join("\n\n")}

## Key Projects

${projects.map(renderProject).join("\n")}

## Education

${education.map(renderListOccupation).join("\n")}

## Community & Volunteering

${volunteering.map(renderListOccupation).join("\n")}
`);
};
