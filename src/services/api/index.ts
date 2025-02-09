import { Effect } from "effect";
import { getAllLabs } from "./actions/get-all-labs";
import { getAllOccupations } from "./actions/get-all-occupations";
import { getAllProjects } from "./actions/get-all-projects";
import { getFeaturedLabs } from "./actions/get-featured-labs";
import { getFeaturedProjects } from "./actions/get-featured-projects";
import { getLab } from "./actions/get-lab";
import { getProject } from "./actions/get-project";
import { getSkillData } from "./actions/get-skill-data";
import { getTeamMembers } from "./actions/get-team-members";

export const api = {
  labs: {
    fetchAllLabs: async () => Effect.runPromise(getAllLabs),
    fetchFeaturedLabs: async () => Effect.runPromise(getFeaturedLabs),
    queryLabBySlug: async (slug: string) =>
      Effect.runPromise(
        getLab(slug).pipe(Effect.catchAll(() => Effect.succeed(null))),
      ),
  },
  projects: {
    fetchAllProjects: async () => Effect.runPromise(getAllProjects),
    fetchFeaturedProjects: async () => Effect.runPromise(getFeaturedProjects),
    fetchProjectTeam: getTeamMembers,
    queryProjectBySlug: async (slug: string) =>
      Effect.runPromise(getProject(slug).pipe(Effect.either)),
    getProjectBySlug: async (slug: string) =>
      Effect.runPromise(getProject(slug)),
  },
  occupations: {
    fetchAllOccupations: async () => Effect.runPromise(getAllOccupations),
  },
  skills: {
    fetchSkillData: async () => Effect.runPromise(getSkillData),
  },
} as const;
