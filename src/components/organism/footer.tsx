import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";
import { siteMetadata } from "@/lib/metadata";
import { Rss } from "lucide-react";
import { Button } from "../atom/button";
import { Tile } from "../atom/tile";
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
            <span className="sr-only">RSS</span>
            <Rss />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.instagram}>
            <span className="sr-only">Instagram</span>
            <Instagram />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <Linkedin />
          </a>
        </Button>
      </Tile>
      <Tile size="square-xxs">
        <Button variant="ghost" size="unset" asChild>
          <a target="_blank" href={siteMetadata.social.github}>
            <span className="sr-only">GitHub</span>
            <Github />
          </a>
        </Button>
      </Tile>
    </footer>
  );
};
