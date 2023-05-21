import Link from "next/link";
import { FC } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiMenu,
} from "react-icons/fi";

interface NavRouteProps {
  vertical?: boolean;
}
const NavRoutes: FC<NavRouteProps> = ({ vertical }) => {
  return (
    <ul
      tabIndex={vertical ? 0 : undefined}
      className={`menu ${
        vertical
          ? "dropdown-content menu-normal mt-3 w-52 rounded-md bg-base-100 shadow"
          : "menu-horizontal"
      } px-1`}
    >
      <li>
        <Link href="/about">About</Link>
      </li>
      <li tabIndex={0}>
        <a>
          Portfolio
          {vertical ? <FiChevronRight /> : <FiChevronDown />}
        </a>
        <ul className="bg-base-100 p-2 shadow">
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
          {vertical ? <FiChevronRight /> : <FiChevronDown />}
        </a>
        <ul className="bg-base-100 p-2 shadow">
          <li>
            <a target="_blank" href="https://www.instagram.com/lloyd_bydesign/">
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
  );
};

export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn md:hidden">
            <FiMenu size={32} />
          </label>
          <NavRoutes vertical />
        </div>
        <Link href="/" className=" text-xl normal-case">
          Lloyd Richards Design
        </Link>
      </div>
      <div className="z-10 mr-8 hidden md:flex">
        <NavRoutes />
      </div>
    </div>
  );
};
