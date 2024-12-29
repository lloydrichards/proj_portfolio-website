"use client";
import {
  typefaceHeading3,
  typefaceListItem,
} from "@/components/tokens/typeface";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tile } from "../atom/tile";
import { FlaskConical, Layers, Ruler, User } from "lucide-react";

const navLinkVariant = cva("flex size-full items-center justify-center", {
  variants: {
    active: {
      true: "bg-accent text-accent-foreground",
      false: "hover:bg-accent hover:text-accent-foreground",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const Navbar: React.FC = () => {
  const pathname = usePathname();
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
      {routes.map((route) => (
        <Tile key={route.href} size="box-xxs">
          <Link
            href={route.href}
            className={navLinkVariant({
              active: pathname.includes(route.href),
              className: typefaceListItem("mt-0 flex-col gap-2 uppercase"),
            })}
          >
            {route.icon}
            <span className="hidden md:block">{route.label}</span>
          </Link>
        </Tile>
      ))}
    </section>
  );
};
