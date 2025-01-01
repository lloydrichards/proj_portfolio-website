import { typefaceHeading3 } from "@/components/tokens/typeface";
import Link from "next/link";
import { Tile } from "../atom/tile";
import { FlaskConical, Layers, Ruler, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../atom/navigation-menu";

export const Navbar: React.FC = () => {
  const routes = [
    { href: "/about", label: "About", icon: <User className="md:hidden" /> },
    {
      href: "/project",
      label: "Projects",
      icon: <Layers className="md:hidden" />,
    },
    {
      href: "/lab",
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
    <section className="mosaic-rows col-span-full grid grid-cols-subgrid">
      <Link
        href="/"
        className={typefaceHeading3(
          "col-[1/-5] mt-0 md:col-[1/-9] lg:col-[1/-13]",
        )}
      >
        Lloyd Richards .dev
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="contents">
          {routes.map((route) => (
            <Tile key={route.href} size="box-xxs" className="overflow-visible">
              <NavigationMenuItem>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {route.icon}
                    <span className="hidden md:block">{route.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </Tile>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};
