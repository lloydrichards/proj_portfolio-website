import { Data } from "effect";

/**
 * Error thrown when content (project, lab, etc.) cannot be found
 */
export class MissingContentError extends Data.TaggedError(
  "MissingContentError",
)<{
  slug: string;
}> {}

/**
 * Error thrown when a dynamic import fails
 */
export class ImportError extends Data.TaggedError("ImportError")<{
  path: string;
  reason?: unknown;
}> {}

/**
 * Error thrown when MDX compilation fails
 */
export class MDXCompileError extends Data.TaggedError("MDXCompileError")<{
  source: string;
  originalError: Error;
}> {}

/**
 * Error thrown when database operations fail
 */
export class DatabaseError extends Data.TaggedError("DatabaseError")<{
  message: string;
  operation: string;
  cause?: unknown;
}> {}

/**
 * Error thrown when validation fails
 */
export class ValidationError extends Data.TaggedError("ValidationError")<{
  field: string;
  message: string;
}> {}

/**
 * Error thrown when a file system operation fails
 */
export class FileSystemError extends Data.TaggedError("FileSystemError")<{
  path: string;
  operation: string;
  cause?: unknown;
}> {}

/**
 * Error thrown when GitHub API requests fail
 */
export class GitHubAPIError extends Data.TaggedError("GitHubAPIError")<{
  username?: string;
  owner?: string;
  repo?: string;
  statusCode?: number;
  message: string;
  cause?: unknown;
}> {}
