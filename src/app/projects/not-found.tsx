import Link from "next/link";
import { Button } from "@/components/atom/button";
import { Tile } from "@/components/atom/tile";
import { typefaceBody, typefaceHeading2 } from "@/components/tokens/typeface";

export default function NotFound() {
  return (
    <Tile size="unset" className="col-span-full p-6">
      <h2 className={typefaceHeading2()}>Project not found</h2>
      <p className={typefaceBody("my-6")}>
        Sorry, we don&apos;t seem to have what you&apos;re looking for. Try
        going to the Project overview and browsing other interesting projects.
      </p>
      <Button asChild>
        <Link href="/projects">All Projects</Link>
      </Button>
    </Tile>
  );
}
