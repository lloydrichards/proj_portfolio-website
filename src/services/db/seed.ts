import { db } from ".";
import { seedJourney } from "./seed/journey";

seedJourney(db).then(
  () => process.exit(0),
  (error) => {
    console.error("Journey seed failed; transaction rolled back", error);
    process.exit(1);
  },
);
