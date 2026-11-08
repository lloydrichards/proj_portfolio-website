import type { db } from "..";
import { journeyCity, journeyEvent, journeyPlace } from "../schema";
import { personalEvents } from "./events";
import { geographicPlaces } from "./geographic-places";
import { places } from "./places";

/** Explicit authoring seed. Never run while serving a page. */
export async function seedJourney(database: db) {
  await database.transaction(async (tx) => {
    await tx
      .insert(journeyCity)
      .values(
        geographicPlaces.map(({ coordinates, ...city }) => ({
          ...city,
          longitude: coordinates[0],
          latitude: coordinates[1],
          source: "GeoNames cities15000",
          sourceUrl: "https://www.geonames.org/",
          license: "CC BY 4.0",
          retrievedOn: "2026-11-08",
        })),
      )
      .onConflictDoNothing();
    await tx
      .insert(journeyPlace)
      .values(
        places.map(({ end: _end, ...place }) => ({
          ...place,
          geographicPlaceId: place.geographicPlaceId ?? null,
        })),
      )
      .onConflictDoNothing();
    await tx
      .insert(journeyEvent)
      .values(
        personalEvents.map(({ phaseLeadFor, afterRecordId, ...event }) => ({
          ...event,
          phaseLeadOccupationId: phaseLeadFor
            ? Number(phaseLeadFor.slice(3))
            : null,
          afterOccupationId: afterRecordId
            ? Number(afterRecordId.slice(3))
            : null,
        })),
      )
      .onConflictDoNothing();
  });
}
