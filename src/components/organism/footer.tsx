import { Rss } from "lucide-react";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import { Tile } from "../atom/tile";
import { siteMetadata } from "@/lib/metadata";
import { Button } from "../atom/button";
export const Footer: React.FC = () => {
  return (
    <footer className="mosaic-rows col-span-full grid grid-cols-subgrid">
      <Tile
        size="unset"
        outline={false}
        className="col-[1/-5] grid items-center bg-transparent"
      >
        lloydrichards.dev
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href="/api/rss">
            <Rss />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.instagram}>
            <Instagram />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.linkedin}>
            <Linkedin />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.github}>
            <Github />
          </a>
        </Button>
      </Tile>
    </footer>
  );
};
