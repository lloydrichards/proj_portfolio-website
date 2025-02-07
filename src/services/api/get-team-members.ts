import { db } from "../db";
import { TeamMember } from "../db/schema/team_member";

export const getTeamMembers = async (
  team?: readonly (readonly string[])[],
): Promise<Array<TeamMember>> => {
  if (!team) {
    return [];
  }
  const teamMembers = await db.query.teamMember.findMany({});

  return team
    ?.map(([name, role]) => {
      const member = teamMembers.find(
        (member) =>
          member.firstName === name.split(" ")[0] &&
          member.lastName === name.split(" ")[1] &&
          member.role === role,
      );

      return (
        member ?? {
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          role,
          id: Infinity,
          imgUrl: null,
        }
      );
    })
    .filter(Boolean);
};
