import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
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
                <FiInstagram />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lloyddrichards/"
              >
                <FiLinkedin />
              </a>
              <a target="_blank" href="https://github.com/lloydrichards">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
