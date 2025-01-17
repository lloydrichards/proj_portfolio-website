import { getAllOccupations } from "../api/get-all-occupations";
import { db } from "./index";
import { getTableName, sql, Table } from "drizzle-orm";
import {
  attribute,
  category,
  occupation,
  occupationToAttribute,
  occupationToSkill,
  skill,
} from "./schema";

async function resetTable(db: db, table: Table) {
  return db.run(
    sql.raw(
      `DELETE FROM ${getTableName(table)}; DELETE FROM sqlite_sequence WHERE name='${getTableName(table)}'`,
    ),
  );
}

const main = async () => {
  console.log("Resetting tables");
  for (const table of [
    occupation,
    occupationToAttribute,
    occupationToSkill,
    skill,
    attribute,
    category,
  ]) {
    await resetTable(db, table);
  }
  console.log("Seeding started");
  const allOccupations = (await getAllOccupations()).map(
    ({ frontmatter }) => frontmatter,
  );
  const categoryKeyMap = {
    WORK: "Work",
    EDUCATION: "Education",
    VOLUNTEER: "Volunteer",
  };
  const allSkills = [
    ...new Set(allOccupations.map((o) => o.skills).flat()),
  ].filter(Boolean) as string[];
  const allAttributes = [
    ...new Set(allOccupations.map((o) => o.characters).flat()),
  ].filter(Boolean) as string[];

  const attributeMap = await db
    .insert(attribute)
    .values(allAttributes.map((name) => ({ name: name })))
    .returning({ id: attribute.id, name: attribute.name });

  const skillMap = await db
    .insert(skill)
    .values(allSkills.map((name) => ({ name: name })))
    .returning({
      id: skill.id,
      name: skill.name,
    });

  const categoryMap = await db
    .insert(category)
    .values(Object.values(categoryKeyMap).map((name) => ({ name })))
    .returning({ id: category.id, name: category.name });

  for (const o of allOccupations) {
    const categoryId = categoryMap.find(
      (c) =>
        c.name === categoryKeyMap[o.category as keyof typeof categoryKeyMap],
    )?.id;

    const skillIds = (o.skills
      ?.map((skill) => skillMap.find((s) => s.name === skill)?.id)
      .filter(Boolean) || []) as number[];

    const attributeIds = (o.characters?.map(
      (attribute) => attributeMap.find((a) => a.name === attribute)?.id,
    ) || []) as number[];

    const result = await db
      .insert(occupation)
      .values({
        title: o.title,
        jobDescription: o.description || "",
        startDate: o.start_date.toISOString().split("T")[0],
        endDate: o.end_date?.toISOString().split("T")[0],
        category: categoryId || 1,
        company: o.company || "",
        location: o.location || "",
      })
      .returning({ id: occupation.id });

    if (skillIds.length > 0) {
      await db.insert(occupationToSkill).values(
        skillIds.map((skillId) => ({
          occupation: result[0].id,
          skill: skillId,
        })),
      );
    }

    if (attributeIds.length > 0) {
      await db.insert(occupationToAttribute).values(
        attributeIds.map((attributeId) => ({
          occupation: result[0].id,
          attribute: attributeId,
        })),
      );
    }
  }
};

main()
  .then(() => {
    console.log("Seed completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed failed", error);
    process.exit(1);
  });
