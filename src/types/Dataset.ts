import { Schema } from "effect";

export class SkillData extends Schema.Class<SkillData>("SkillData")({
  type: Schema.String,
  name: Schema.String,
  description: Schema.String,
  pensum: Schema.Number,
  factor: Schema.Number,
  date: Schema.String,
}) {}
