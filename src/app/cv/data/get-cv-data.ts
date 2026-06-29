import { Effect } from "effect";
import { Dataset } from "@/services/Dataset/Dataset";
import { Portfolio } from "@/services/Portfolio";
import { RuntimeServer } from "@/services/RuntimeServer";
import type { Project } from "@/types/Project";
import type { OccupationData } from "../types";

export type CvData = {
  allOccupations: OccupationData[];
  visibleProjects: Project[];
};

const serializeOccupation = (occupation: OccupationData): OccupationData => ({
  ...occupation,
});

export const getCvData = async (): Promise<CvData> => {
  const [allOccupations, visibleProjects] = await RuntimeServer.runPromise(
    Effect.all([
      Effect.gen(function* () {
        const svc = yield* Dataset;
        return yield* svc.allOccupations();
      }),
      Effect.gen(function* () {
        const svc = yield* Portfolio;
        return yield* svc.visible;
      }),
    ]),
  );

  return {
    allOccupations: allOccupations.map(serializeOccupation),
    visibleProjects,
  };
};
