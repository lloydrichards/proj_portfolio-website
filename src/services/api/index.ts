import { BunContext } from "@effect/platform-bun";
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

const runEffect = <A, E>(effect: Effect.Effect<A, E, BunContext.BunContext>) =>
  Effect.runPromise(effect.pipe(Effect.provide(BunContext.layer)));

export const api = {
  labs: {
    fetchAllLabs: async () => runEffect(getAllLabs),
    fetchFeaturedLabs: async () => runEffect(getFeaturedLabs),
    queryLabBySlug: async (slug: string) =>
      runEffect(getLab(slug).pipe(Effect.catchAll(() => Effect.succeed(null)))),
  },
  projects: {
    fetchAllProjects: async () => runEffect(getAllProjects),
    fetchFeaturedProjects: async () => runEffect(getFeaturedProjects),
    fetchProjectTeam: getTeamMembers,
    queryProjectBySlug: async (slug: string) =>
      runEffect(getProject(slug).pipe(Effect.either)),
    getProjectBySlug: async (slug: string) => runEffect(getProject(slug)),
  },
  occupations: {
    fetchAllOccupations: async () => runEffect(getAllOccupations),
  },
  skills: {
    fetchSkillData: async () => runEffect(getSkillData),
  },
} as const;
