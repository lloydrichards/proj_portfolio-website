import Link from "next/link";
import {
  FiChevronDown,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-base-300 p-10 text-base-content">
      <div>
        <span className="footer-title">Links</span>
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
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://www.instagram.com/lloyd_bydesign/">
            <FiInstagram />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/lloyddrichards/">
            <FiLinkedin />
          </a>
          <a target="_blank" href="https://github.com/lloydrichards">
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
