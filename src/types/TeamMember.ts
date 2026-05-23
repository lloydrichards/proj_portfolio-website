import { Schema, SchemaTransformation } from "effect";

export const TeamMemberDTO = Schema.Tuple([Schema.String, Schema.String]).pipe(
  Schema.decodeTo(
    Schema.Struct({
      firstName: Schema.String,
      lastName: Schema.String,
      role: Schema.String,
    }),
    SchemaTransformation.transform({
      decode: ([name, role]) => ({
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
        role,
      }),
      encode: ({ firstName, lastName, role }) =>
        [`${firstName} ${lastName}`, role] as readonly [string, string],
    }),
  ),
);
