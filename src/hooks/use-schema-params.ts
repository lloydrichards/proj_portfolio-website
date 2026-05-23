import { Exit, Schema } from "effect";
import { type ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useSchemaParams<A extends Record<string, unknown>>(
  schema: Schema.Schema<A> & Schema.Decoder<unknown> & Schema.Encoder<unknown>,
  defaultValue: A,
) {
  const params = useSearchParams();

  const paramResult = Schema.decodeUnknownExit(schema)(
    groupParamsByKey(params),
  );

  const currentValue = Exit.match(paramResult, {
    onFailure: () => defaultValue,
    onSuccess: (p) => p as A,
  });

  const buildQueryString = useCallback(
    (partialParams: Partial<A>) => {
      const newParams = new URLSearchParams(params.toString());

      const merged = { ...currentValue, ...partialParams } as A;

      const encoded = Schema.encodeUnknownSync(schema)(merged);

      if (encoded && typeof encoded === "object") {
        Object.entries(encoded as object).forEach(([key, value]) => {
          if (value !== undefined) {
            newParams.set(key, String(value));
          }
        });
      }

      return newParams.toString();
    },
    [currentValue, schema, params],
  );

  return [currentValue, buildQueryString] as const;
}

const groupParamsByKey = (params: ReadonlyURLSearchParams) =>
  [...params.entries()].reduce<Record<string, string | string[]>>(
    (acc, [key, val]) => {
      if (!Object.hasOwn(acc, key)) {
        acc[key] = val;
        return acc;
      }
      acc[key] = Array.isArray(acc[key]) ? [...acc[key], val] : [acc[key], val];
      return acc;
    },
    {},
  );
