import { Schema } from "effect";

export const TeamMemberDTO = Schema.transform(
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
