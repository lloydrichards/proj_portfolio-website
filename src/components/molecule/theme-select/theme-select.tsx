"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/atom/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atom/dropdown-menu/dropdown-menu";

export const ThemeSelect = ({ onSelect }: { onSelect?: () => void }) => {
  const { setTheme } = useTheme();
  const handleSelect = (theme: string) => {
    setTheme(theme);
    onSelect?.();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSelect("light")}>
          Classic (Light)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("dark-classic")}>
          Classic (Dark)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSelect("light-professional")}>
          Professional
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("dark-professional")}>
          Professional (Dark)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("light-soft")}>
          Soft
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("light-acid")}>
          Acid
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect("dark-midnight")}>
          Midnight (Dark)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
