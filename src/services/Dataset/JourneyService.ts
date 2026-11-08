import { Context, Data, Effect, Layer } from "effect";
import type { JourneyPersonalData } from "@/types/Journey";
import { Database, DrizzleLive, type db } from "../db";
import { readJourney } from "../db/journey-data";

export class JourneyUnavailable extends Data.TaggedError("JourneyUnavailable")<{
  readonly operation: string;
  readonly cause: unknown;
}> {}

export async function loadJourney(database: db): Promise<JourneyPersonalData> {
  return database.transaction(async (tx) => {
    const data = await readJourney(tx);
    if (
      !data.geographicPlaces.length ||
      !data.places.length ||
      !data.events.length
    )
      throw new Error(
        "Timeline data is missing; run the explicit journey seed",
      );
    return data;
  });
}

export class JourneyService extends Context.Service<JourneyService>()(
  "app/JourneyService",
  {
    make: Effect.gen(function* () {
      const database = yield* Database;
      return {
        personalData: Effect.fn("JourneyService.personalData")(() =>
          Effect.tryPromise({
            try: () => loadJourney(database),
            catch: (cause) =>
              new JourneyUnavailable({ operation: "personalData", cause }),
          }),
        ),
      };
    }),
  },
) {
  static readonly layer = Layer.effect(this, this.make).pipe(
    Layer.provide(DrizzleLive),
  );
}
