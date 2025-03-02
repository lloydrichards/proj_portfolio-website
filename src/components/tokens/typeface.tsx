import { cn } from "@/lib/utils";

// Core Typefaces

// export const typefaceDisplay1 = (className?: string) =>
//   cn("text-9xl leading-normal font-normal", className);

// export const typefaceDisplay2 = (className?: string) =>
//   cn("text-8xl leading-normal font-normal", className);

export const typefaceHeading1 = (className?: string) =>
  cn("text-4xl font-bold tracking-tight", className);

export const typefaceHeading2 = (className?: string) =>
  cn("border-b pb-1 text-3xl font-semibold tracking-tight", className);

export const typefaceHeading3 = (className?: string) =>
  cn("text-2xl font-semibold tracking-tight", className);

export const typefaceHeading4 = (className?: string) =>
  cn("text-xl font-semibold tracking-tight", className);

export const typefaceHeading5 = (className?: string) =>
  cn("text-lg font-semibold tracking-tight", className);

export const typefaceHeading6 = (className?: string) =>
  cn("text-base font-semibold tracking-tight", className);

export const typefaceBody = (className?: string) => cn("leading-7", className);

export const typefaceMeta = (className?: string) =>
  cn("text-sm font-normal", className);

// Component Typefaces

export const typefaceAnchor = (className?: string) =>
  cn("font-medium underline underline-offset-4", className);

// export const typefaceValue1 = (className?: string) =>
//   cn("text-3xl font-normal", "leading-none", className);

// export const typefaceValue2 = (className?: string) =>
//   cn("text-2xl font-normal", "leading-none", className);

// export const typefaceValue3 = (className?: string) =>
//   cn("text-lg font-normal", "leading-none", className);
