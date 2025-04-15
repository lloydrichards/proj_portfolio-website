import { Schema } from "effect";

export class Occupation extends Schema.Class<Occupation>("Occupation")({
  id: Schema.Number,
  title: Schema.NonEmptyString,
  company: Schema.String,
  location: Schema.String,
  description: Schema.NullOr(Schema.String),
  tasks: Schema.Array(Schema.String),
  longDescription: Schema.NullOr(Schema.String),
  pensum: Schema.Number,
  isFeatures: Schema.Boolean,
  start_date: Schema.DateFromString,
  end_date: Schema.NullOr(Schema.DateFromString),
  category: Schema.String,
  skills: Schema.NullOr(Schema.Array(Schema.NonEmptyString)),
  attributes: Schema.NullOr(Schema.Array(Schema.NonEmptyString)),
}) {
  static readonly Array = Schema.Array(this);
}
