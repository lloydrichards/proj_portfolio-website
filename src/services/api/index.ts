import { BunContext } from "@effect/platform-bun";
import { Effect, Layer, ManagedRuntime } from "effect";
import { getAllLabs } from "./actions/get-all-labs";
import { getAllOccupations } from "./actions/get-all-occupations";
import { getAllProjects } from "./actions/get-all-projects";
import { getFeaturedLabs } from "./actions/get-featured-labs";
import { getFeaturedProjects } from "./actions/get-featured-projects";
import { getProject } from "./actions/get-project";
import { getSkillData } from "./actions/get-skill-data";
import { getTeamMembers } from "./actions/get-team-members";

const ApiRuntime = ManagedRuntime.make(Layer.mergeAll(BunContext.layer));

export const api = {
  labs: {
    fetchAllLabs: async () => ApiRuntime.runPromise(getAllLabs),
    fetchFeaturedLabs: async () => ApiRuntime.runPromise(getFeaturedLabs),
  },
  projects: {
    fetchAllProjects: async () => ApiRuntime.runPromise(getAllProjects),
    fetchFeaturedProjects: async () =>
      ApiRuntime.runPromise(getFeaturedProjects),
    fetchProjectTeam: getTeamMembers,
    queryProjectBySlug: async (slug: string) =>
      ApiRuntime.runPromise(getProject(slug).pipe(Effect.either)),
    getProjectBySlug: async (slug: string) =>
      ApiRuntime.runPromise(getProject(slug)),
  },
  occupations: {
    fetchAllOccupations: async () => ApiRuntime.runPromise(getAllOccupations),
  },
  skills: {
    fetchSkillData: async () => ApiRuntime.runPromise(getSkillData),
  },
} as const;
