import { cn } from "@/lib/utils";

// Core Typefaces
// Font-family is inherited from the global theme (font-sans = Roboto Mono).
// Theme variants (e.g. nerdy) override via CSS custom properties.

export const typefaceHeading1 = (className?: string) =>
  cn("text-4xl font-bold tracking-tight", className);

export const typefaceHeading2 = (className?: string) =>
  cn("text-3xl font-semibold tracking-tight", className);

export const typefaceHeading3 = (className?: string) =>
  cn("text-2xl font-semibold tracking-tight", className);

export const typefaceHeading4 = (className?: string) =>
  cn("text-xl font-semibold tracking-tight", className);

export const typefaceHeading5 = (className?: string) =>
  cn("text-lg font-medium tracking-normal", className);

export const typefaceHeading6 = (className?: string) =>
  cn("text-base font-medium tracking-normal", className);

export const typefaceBody = (className?: string) =>
  cn("text-base leading-7", className);

export const typefaceMeta = (className?: string) =>
  cn("text-sm font-normal leading-normal", className);

// Component Typefaces

export const typefaceAnchor = (className?: string) =>
  cn("font-medium underline underline-offset-4", className);
