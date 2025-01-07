import { FC } from "react";
import { Lab } from "@/types/domain";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/atom/navigation-menu";
import { cn } from "@/lib/utils";
import { NavListItem } from "@/components/molecule/nav_list_item";
import { Badge } from "@/components/atom/badge";

interface LabNavigationProps {
  labs: Array<Lab>;
  className?: string;
}
export const LabNavigation: FC<LabNavigationProps> = ({ labs, className }) => {
  return (
    <NavigationMenu
      aria-label="Lab Navigation"
      orientation="vertical"
      className="hidden md:contents"
    >
      <NavigationMenuList className="contents">
        <NavListItem href="/labs" exact className={className}>
          All Labs
        </NavListItem>

        {labs
          .filter((d) => d.isPublished)
          .map((p) => (
            <NavListItem
              key={p.slug}
              href={p.pathname}
              className={cn("overflow-visible", className)}
            >
              <Badge variant="outline">{p.id}</Badge>
              <span className="hidden lg:line-clamp-1">{p.title}</span>
            </NavListItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
