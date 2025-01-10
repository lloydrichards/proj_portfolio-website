import { Button } from "@/components/atom/button";
import { Tile } from "@/components/atom/tile";
import { typefaceBody, typefaceHeading2 } from "@/components/tokens/typeface";
import Link from "next/link";

export default function NotFound() {
  return (
    <Tile size="unset" className="col-span-full p-6">
      <h2 className={typefaceHeading2()}>Page not found</h2>
      <p className={typefaceBody("my-6")}>
        Sorry, we seem to have gotten lost for a minute there. Try going back
        home and starting over.
      </p>
      <Button asChild>
        <Link href="/">Back Home</Link>
      </Button>
    </Tile>
  );
}
