import { Data } from "effect";

export class FSReadDirError extends Data.TaggedError("FSReadDirError")<{
  path: string;
}> {}

export class ContentNotFoundError extends Data.TaggedError(
  "ContentNotFoundError",
)<{
  slug: string;
}> {}

export class ImportError extends Data.TaggedError("ImportError")<{
  path: string;
}> {}

export class DatabaseError extends Data.TaggedError("DatabaseError")<{
  error: unknown;
}> {}
