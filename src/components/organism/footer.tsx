import { Rss } from "lucide-react";
import Bluesky from "@/components/icons/bluesky";
import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";
import { siteMetadata } from "@/lib/metadata";
import { Button } from "../atom/button";
import { Tile } from "../atom/tile";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atom/tooltip";

export const Footer: React.FC = () => {
  return (
    <footer className="mosaic-rows col-span-full grid grid-cols-subgrid">
      <Tile
        size="unset"
        outline={false}
        className="col-span-full grid items-center bg-transparent md:col-span-11 lg:col-span-19"
      >
        lloydrichards.dev
      </Tile>
      <TileIcon icon={<Rss />} label="RSS" href="/api/rss" />
      <TileIcon
        icon={<Bluesky />}
        label="Bluesky"
        href={siteMetadata.social.bluesky}
      />
      <TileIcon
        icon={<Instagram />}
        label="Instagram"
        href={siteMetadata.social.instagram}
      />
      <TileIcon
        icon={<Linkedin />}
        label="LinkedIn"
        href={siteMetadata.social.linkedin}
      />
      <TileIcon
        icon={<Github />}
        label="GitHub"
        href={siteMetadata.social.github}
      />
    </footer>
  );
};

const TileIcon: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
}> = ({ href, icon, label }) => (
  <Tooltip>
    <TooltipTrigger render={<Tile size="square-xxs" />}>
      <Button
        variant="ghost"
        className="size-full p-0"
        render={<a target="_blank" href={href} rel="noopener" />}
      >
        <span className="sr-only">{label}</span>
        {icon}
      </Button>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);
