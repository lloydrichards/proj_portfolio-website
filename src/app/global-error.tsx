"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/atom/button";
import { Tile } from "@/components/atom/tile";
import { typefaceBody, typefaceHeading2 } from "@/components/tokens/typeface";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Tile size="unset" className="col-span-full p-6">
      <h2 className={typefaceHeading2()}>Something went wrong!</h2>
      <p className={typefaceBody("my-6")}>
        Sorry, we seem to have done something silly in the backend. Please try
        again, or go back to the previous page.
      </p>
      <Button onClick={reset}>Try again</Button>
    </Tile>
  );
}
