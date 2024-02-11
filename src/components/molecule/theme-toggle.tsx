"use client";

import { Button } from "@/components/atom/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atom/dropdown-menu/dropdown-menu";
import { useColor } from "@/hooks/use-theme";

export function ThemeToggle() {
  const [_, setTheme] = useColor();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="size-6 rounded-full bg-primary" />
          <span className="sr-only">Toggle color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme(undefined)}>
          Default
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("lime")}>
          <div className="size-4 rounded-full bg-[#bef264]" /> Lime
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("sky")}>
          <div className="size-4 rounded-full bg-[#60a5fa]" /> Sky Pro
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("rose")}>
          <div className="size-4 rounded-full bg-[#f87171]" /> Soft Rose
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
