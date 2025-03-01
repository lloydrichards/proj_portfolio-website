import { TeamMember } from "@/services/db/schema/team_member";
import { DatabaseError } from "@/types/errors";
import { Array, Effect, Option, Schema } from "effect";
import { pipe } from "fp-ts/lib/function";
import { db } from "../../db";

const TeamMemberDTO = Schema.transform(
  Schema.Tuple(Schema.String, Schema.String),
  Schema.Struct({
    firstName: Schema.String,
    lastName: Schema.String,
    role: Schema.String,
  }),
  {
    strict: true,

    decode: ([name, role]) => ({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      role,
    }),
    encode: ({ firstName, lastName, role }) =>
      [`${firstName} ${lastName}`, role] as const,
  },
);

export const getTeamMembers = (team?: readonly (readonly [string, string])[]) =>
  pipe(
    Effect.tryPromise({
      try: async () => await db.query.teamMember.findMany({}),
      catch: (error) => new DatabaseError({ error }),
    }),
    Effect.andThen((teamMembers) =>
      pipe(
        Option.fromNullable(team),
        Option.match({
          onNone: () => [],
          onSome: (team) => team,
        }),
        Array.map((v) => Schema.decodeUnknownSync(TeamMemberDTO)(v)),
        Array.map(({ firstName, lastName, role }) =>
          Array.findFirst(
            teamMembers,
            (m) =>
              m.firstName == firstName &&
              m.lastName == lastName &&
              m.role == role,
          ).pipe(
            Option.orElseSome(
              () =>
                ({
                  id: -Math.random(),
                  firstName,
                  lastName,
                  role,
                  imgUrl: null,
                }) as TeamMember,
            ),
          ),
        ),
        Array.getSomes,
      ),
    ),
    Effect.withSpan("getTeamMembers"),
  );
