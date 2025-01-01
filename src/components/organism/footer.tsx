import { Github, Instagram, Linkedin } from "lucide-react";
import { Tile } from "../atom/tile";
export const Footer: React.FC = () => {
  return (
    <footer className="mosaic-rows col-span-full grid grid-cols-subgrid">
      <Tile
        size="unset"
        outline={false}
        className="col-[1/-4] grid items-center bg-transparent"
      >
        lloydrichards.dev
      </Tile>
      <Tile size="square-xxs">
        <a
          target="_blank"
          href="https://www.instagram.com/lloyd_bydesign/"
          className="flex size-full items-center justify-center"
        >
          <Instagram />
        </a>
      </Tile>
      <Tile size="square-xxs">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lloyddrichards/"
          className="flex size-full items-center justify-center"
        >
          <Linkedin />
        </a>
      </Tile>
      <Tile size="square-xxs">
        <a
          target="_blank"
          href="https://github.com/lloydrichards"
          className="flex size-full items-center justify-center"
        >
          <Github />
        </a>
      </Tile>
    </footer>
  );
};
