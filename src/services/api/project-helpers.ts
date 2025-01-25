import { Project, PROJECT_CATEGORY } from "@/types/domain";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

type SearchOptions = {
  isPublished?: boolean;
  category?: string | null;
};

export const publishedPredicate = (options?: SearchOptions) => (p: Project) =>
  options?.isPublished ? p.isPublished : true;

export const categoryPredicate = (options?: SearchOptions) => (p: Project) =>
  pipe(
    PROJECT_CATEGORY.decode(options?.category),
    E.fold(
      () => true,
      (category) => p.category.includes(category),
    ),
  );
