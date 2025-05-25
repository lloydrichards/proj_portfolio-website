"use client";
import { Button } from "@/components/atom/button";
import { useSchemaParams } from "@/hooks/use-schema-params";
import { Schema } from "effect";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const ParamSchema = Schema.Struct({
  a: Schema.NumberFromString,
  factor: Schema.NumberFromString,
});

export const SchemaCounter = () => {
  const path = usePathname();
  const params = useSearchParams();
  const [data, createQueryString] = useSchemaParams(ParamSchema, {
    a: 0,
    factor: 1,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-4">
      <h1 className="text-2xl font-bold">Schema Counter Component</h1>
      <p className="text-lg">This is a counter component using params:</p>
      <p className="bg-card px-6 py-2">
        {path}?{params.toString()}
      </p>
      <div className="flex items-center gap-4">
        <Button variant="ghost" aria-label="Reset" asChild>
          <Link href={path} replace>
            Reset
          </Link>
        </Button>
        <Button variant="outline" aria-label="Decrement" asChild>
          <Link
            href={`?${createQueryString({
              a: (data.a ?? 0) - 1 * (data.factor ?? 1),
            })}`}
            replace
          >
            Decrement
          </Link>
        </Button>
        <span
          data-testid="count"
          className="w-20 rounded border text-center text-xl"
        >
          {data.a ?? 0}
        </span>
        <Button variant="outline" aria-label="Increment" asChild>
          <Link
            href={`?${createQueryString({
              a: (data.a ?? 0) + 1 * (data.factor ?? 1),
            })}`}
            replace
          >
            Increment
          </Link>
        </Button>
        <Button
          variant={(data.factor ?? 1) === 10 ? "default" : "secondary"}
          aria-label="factor-10"
          asChild
        >
          <Link
            href={`?${createQueryString({
              factor: (data.factor ?? 1) === 10 ? 1 : 10,
            })}`}
            replace
          >
            Factor 10
          </Link>
        </Button>
      </div>
    </div>
  );
};
