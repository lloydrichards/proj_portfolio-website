import { Either, Schema } from "effect";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useSchemaParams<A extends Record<string, unknown>, I>(
  schema: Schema.Schema<A, I, never>,
  defaultValue: A,
) {
  const params = useSearchParams();

  const paramResult = Schema.decodeUnknownEither(Schema.partial(schema))(
    groupParamsByKey(params),
  );

  const buildQueryString = useCallback(
    (partialParams: Partial<A>) => {
      const newParams = new URLSearchParams(params.toString());

      const encoded = Schema.encodeUnknownSync(Schema.partial(schema))({
        ...paramResult.pipe(
          Either.match({
            onLeft: () => ({}) as Record<string, unknown>,
            onRight: (p) => p,
          }),
        ),
        ...partialParams,
      });

      if (encoded && typeof encoded === "object") {
        Object.entries(encoded).forEach(([key, value]) => {
          if (value !== undefined) {
            newParams.set(key, String(value));
          }
        });
      }

      return newParams.toString();
    },
    [paramResult, schema, params],
  );

  return [
    Either.getOrElse(paramResult, () => defaultValue),
    buildQueryString,
  ] as const;
}

const groupParamsByKey = (params: ReadonlyURLSearchParams) =>
  [...params.entries()].reduce<Record<string, string | string[]>>(
    (acc, [key, val]) => {
      if (!acc.hasOwnProperty(key)) {
        acc[key] = val;
        return acc;
      }
      acc[key] = Array.isArray(acc[key]) ? [...acc[key], val] : [acc[key], val];
      return acc;
    },
    {},
  );
