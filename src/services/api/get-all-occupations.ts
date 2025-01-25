import { db } from "../db";

export const getAllOccupations = async () => {
  const occupations = await db.query.occupation.findMany({
    with: {
      category: true,
      skills: {
        with: {
          skill: true,
        },
      },
      attributes: {
        with: {
          attribute: true,
        },
      },
    },
  });
  return occupations
    .filter((o) => o !== null)
    .map((o) => ({
      ...o,
      description: o.jobDescription,
      start_date: new Date(o.startDate),
      end_date: o.endDate ? new Date(o.endDate) : null,
      category: o.category?.name.toUpperCase(),
      skills: o.skills.map((s) => s.skill.name),
      attributes: o.attributes.map((a) => a.attribute.name),
    }))
    .sort((a, b) => {
      if (!a.end_date) return -1;
      return b.start_date.getTime() - a.start_date.getTime();
    });
};
