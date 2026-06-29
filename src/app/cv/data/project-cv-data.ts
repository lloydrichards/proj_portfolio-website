import { Array as A, Option, pipe } from "effect";
import type { Project } from "@/types/Project";
import type { OccupationData } from "../types";
import type { CvData } from "./get-cv-data";
import type { CvVariant } from "./variants";

export type ProjectedCvData = {
  workExperience: OccupationData[];
  education: OccupationData[];
  volunteering: OccupationData[];
  projects: Project[];
};

const orderedProjects = ({
  projects,
  projectIds,
}: {
  projects: readonly Project[];
  projectIds: readonly number[];
}) =>
  pipe(
    projectIds,
    A.flatMap((projectId) =>
      pipe(
        projects,
        A.findFirst((project) => project.id === projectId),
        Option.match({
          onNone: () => [],
          onSome: (project) => [project],
        }),
      ),
    ),
  );

const selectedOccupations = ({
  data,
  variant,
}: {
  data: CvData;
  variant: CvVariant;
}) =>
  variant.featuredOccupationIds
    ? pipe(
        variant.featuredOccupationIds,
        A.flatMap((occupationId) =>
          pipe(
            data.allOccupations,
            A.findFirst((occupation) => occupation.id === occupationId),
            Option.match({
              onNone: () => [],
              onSome: (occupation) => [occupation],
            }),
          ),
        ),
      )
    : pipe(
        data.allOccupations,
        A.filter((occupation) => occupation.isFeatures),
      );

export const projectCvData = ({
  data,
  variant,
}: {
  data: CvData;
  variant: CvVariant;
}): ProjectedCvData => {
  const grouped = A.groupBy(
    selectedOccupations({ data, variant }),
    (occupation) => occupation.category,
  );

  return {
    workExperience: grouped.WORK ?? [],
    education: grouped.EDUCATION ?? [],
    volunteering: grouped.VOLUNTEER ?? [],
    projects: orderedProjects({
      projects: data.visibleProjects,
      projectIds: variant.featuredProjectIds,
    }),
  };
};
