import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
export const Footer: React.FC = () => {
  return (
    <footer className=" bg-accent text-accent-foreground">
      <div className="mx-auto w-[65ch] max-w-screen-xl">
        <div className="grid  grid-cols-1 gap-8 px-4 py-6 md:grid-cols-2 lg:py-8">
          <div className="flex flex-col gap-2">
            <h2 className=" font-bold uppercase text-muted-foreground">
              Links
            </h2>
            <Link href="/about" className="link-hover link">
              About
            </Link>
            <Link href="/posts" className="link-hover link">
              Posts
            </Link>
            <Link href="/projects" className="link-hover link">
              Projects
            </Link>
            <Link href="/timeline" className="link-hover link">
              Timeline
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold uppercase text-muted-foreground">
              Social
            </h2>
            <div className="grid grid-flow-col gap-4">
              <a
                target="_blank"
                href="https://www.instagram.com/lloyd_bydesign/"
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lloyddrichards/"
              >
                <Linkedin />
              </a>
              <a target="_blank" href="https://github.com/lloydrichards">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
