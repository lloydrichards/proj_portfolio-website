import { Schema } from "effect";

/** Fix this type, preferably before accepting the PR */
export type $FixMe = any; // eslint-disable-line @typescript-eslint/no-explicit-any

/** This `any` is intentional => never has to be fixed */
export type $IntentionalAny = any; // eslint-disable-line @typescript-eslint/no-explicit-any

/** TS cannot express the proper type atm */
export type $Unexpressable = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export const ContentStatus = Schema.Literal(
  "draft",
  "unpublished",
  "published",
);
export type ContentStatus = typeof ContentStatus.Type;
