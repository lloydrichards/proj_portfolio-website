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
          <SunIcon className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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
