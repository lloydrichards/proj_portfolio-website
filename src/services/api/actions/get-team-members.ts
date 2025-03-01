import { DatabaseError } from "@/types/errors";
import { Array, Effect, Option } from "effect";
import { pipe } from "fp-ts/lib/function";
import { db } from "../../db";

export const getTeamMembers = async (team?: readonly (readonly string[])[]) =>
  pipe(
    Effect.tryPromise({
      try: () => db.query.teamMember.findMany({}),
      catch: (error) => new DatabaseError({ error }),
    }),
    Effect.andThen((teamMembers) =>
      pipe(
        Option.fromNullable(team),
        Option.match({
          onNone: () => [],
          onSome: (team) => team,
        }),
        Array.map(([name, role]) =>
          Array.findFirst(
            teamMembers,
            (m) =>
              m.firstName === name.split(" ")[0] &&
              m.lastName === name.split(" ")[1] &&
              m.role === role,
          ).pipe(
            Option.orElseSome(() => ({
              id: -Math.random(),
              firstName: name.split(" ")[0],
              lastName: name.split(" ")[1],
              role,
              imgUrl: null,
            })),
          ),
        ),
        Array.getSomes,
      ),
    ),
    Effect.withSpan("getTeamMembers"),
  );
