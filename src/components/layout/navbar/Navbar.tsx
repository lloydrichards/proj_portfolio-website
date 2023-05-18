import Link from "next/link";
import {
  FiChevronDown,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className=" text-xl normal-case">
          Lloyd Richards
        </Link>
      </div>
      <div className="flex-none pr-10">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Portfolio
              <FiChevronDown />
            </a>
            <ul className="bg-base-100 p-2">
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/timeline">Timeline</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Social
              <FiChevronDown />
            </a>
            <ul className="bg-base-100 p-2">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/lloyd_bydesign/"
                >
                  <FiInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lloyddrichards/"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/lloydrichards">
                  <FiGithub />
                  Github
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
