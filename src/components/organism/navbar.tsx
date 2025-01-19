import { typefaceHeading3 } from "@/components/tokens/typeface";
import Link from "next/link";
import { tileVariants } from "../atom/tile";
import { FlaskConical, Layers, Ruler, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../atom/navigation-menu";
import { ThemeToggle } from "../molecule/theme-toggle";

export const Navbar: React.FC = () => {
  const routes = [
    { href: "/about", label: "About", icon: <User className="md:hidden" /> },
    {
      href: "/projects",
      label: "Projects",
      icon: <Layers className="md:hidden" />,
    },
    {
      href: "/labs",
      label: "Lab",
      icon: <FlaskConical className="md:hidden" />,
    },
    {
      href: "/timeline",
      label: "Timeline",
      icon: <Ruler className="md:hidden" />,
    },
  ];

  return (
    <header className="mosaic-rows col-span-full grid grid-cols-subgrid">
      <Link
        href="/"
        className={typefaceHeading3(
          "col-[1/-6] mt-0 overflow-clip md:col-[1/-10] lg:col-[1/-14]",
        )}
      >
        lloydrichards.dev
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="contents">
          {routes.map((route) => (
            <NavigationMenuItem
              key={route.href}
              className={tileVariants({ size: "box-xxs" })}
            >
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.icon}
                  <span className="hidden md:block">{route.label}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle className={tileVariants({ size: "unset" })} />
    </header>
  );
};
