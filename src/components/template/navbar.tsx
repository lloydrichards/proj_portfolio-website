import { buttonVariants } from "@/components/atom/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/atom/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atom/sheet";
import { typefaceHeading3 } from "@/components/tokens/typeface";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface NavRouteProps {
  vertical?: boolean;
}
const NavRoutes: FC<NavRouteProps> = ({ vertical }) => {
  const routes = [
    // { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/lab", label: "Lab" },
    { href: "/timeline", label: "Timeline" },
  ];

  return (
    <NavigationMenuList className={vertical ? "flex-col gap-4" : "flex-row"}>
      {routes.map((route) => (
        <NavigationMenuItem key={route.href}>
          <Link href={route.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {route.label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
      <NavigationMenuItem>
        <NavigationMenuTrigger>Social</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex w-72 flex-col gap-4 p-4">
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://www.instagram.com/lloyd_bydesign/"
            >
              <Instagram />
              Instagram
            </NavigationMenuLink>
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/lloyddrichards/"
            >
              <Linkedin />
              LinkedIn
            </NavigationMenuLink>
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://github.com/lloydrichards"
            >
              <Github />
              Github
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export const Navbar: React.FC = () => {
  return (
    <div className="col-span-full grid grid-cols-subgrid py-2">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <div className={buttonVariants({ variant: "ghost", size: "sm" })}>
            <Menu size={32} />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-[80vw] py-24">
          <NavigationMenu orientation="vertical">
            <NavRoutes vertical />
          </NavigationMenu>
        </SheetContent>
      </Sheet>

      <Link href="/" className={typefaceHeading3("col-span-6")}>
        Lloyd Richards .dev
      </Link>

      <NavigationMenu className="col-end-14 hidden justify-end md:flex">
        <NavRoutes />
      </NavigationMenu>
    </div>
  );
};
