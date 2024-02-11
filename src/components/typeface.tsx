import { cn } from "@/lib/utils";

// xs: ["0.75rem", "1rem"], // 12px - m2 | m2
// sm: ["0.875rem", "1.25rem"], // 14px - m1 | b2, m1
// base: ["1rem", "1.5rem"], // 16px - b2, h6 | h6, b1
// lg: ["1.125rem", "1.75rem"], // 18px - b1 | h5
// xl: ["1.25rem", "1.75"], // 20px - h5 | h4
// "2xl": ["1.5rem", "2rem"], // 24px - h4 | h3
// "3xl": ["1.75rem", "1"], // 28px - | h2
// "4xl": ["2rem", "1"], // 32px - h3 | h1
// "5xl": ["2.5rem", "1"], //40px - h2 |
// "6xl": ["2.625rem", "1"], // 42px | d2
// "7xl": ["3rem", "1"], // 48px -  h1 | d1
// "8xl": ["4rem", "1"], // 64px - d2 |
// "9xl": ["5rem", "1"], // 80px - d1 |

// Core Typefaces

export const typefaceDisplay1 = (className?: string) =>
  cn(
    "font-caecilia text-7xl font-normal leading-normal md:text-9xl",
    className,
  );

export const typefaceDisplay2 = (className?: string) =>
  cn(
    "font-caecilia text-6xl font-normal leading-normal md:text-8xl",
    className,
  );

export const typefaceHeading1 = (className?: string) =>
  cn(
    "font-caecilia text-4xl font-normal leading-normal md:text-7xl",
    className,
  );

export const typefaceHeading2 = (className?: string) =>
  cn(
    "font-caecilia text-3xl font-normal leading-normal md:text-4xl lg:text-5xl",
    className,
  );

export const typefaceHeading3 = (className?: string) =>
  cn(
    "font-caecilia text-2xl font-normal leading-normal md:text-4xl",
    className,
  );

export const typefaceHeading4 = (className?: string) =>
  cn("font-caecilia text-xl font-normal leading-normal md:text-2xl", className);

export const typefaceHeading5 = (className?: string) =>
  cn("font-caecilia text-lg font-normal leading-normal md:text-xl", className);

export const typefaceHeading6 = (className?: string) =>
  cn("font-caecilia text-base font-normal leading-normal", className);

export const typefaceBody1 = (className?: string) =>
  cn("font-bernini text-base font-normal md:text-lg", className);

export const typefaceBody2 = (className?: string) =>
  cn("font-bernini text-sm font-normal md:text-base", className);

export const typefaceMeta1 = (className?: string) =>
  cn("font-bernini text-sm font-normal", className);

export const typefaceMeta2 = (className?: string) =>
  cn("font-bernini text-xs font-normal", className);

// Component Typefaces

export const typefaceNavigation = (className?: string) =>
  cn("font-caecilia text-lg font-bold md:text-base", className);

export const typefaceNavigationSecondary = (className?: string) =>
  cn("font-bernini text-sm font-normal md:text-xs", className);

export const typefaceButton = (className?: string) =>
  cn("font-caecilia text-base font-normal", className);

export const typefaceBodyCard = (className?: string) =>
  cn("font-bernini text-base font-normal", className);

export const typefaceHeadingSubline = (className?: string) =>
  cn("font-bernini text-lg font-normal md:text-2xl", className);

export const typefaceValue1 = (className?: string) =>
  cn(
    "font-bernini text-3xl font-normal md:text-4xl lg:text-5xl",
    "leading-none",
    className,
  );

export const typefaceValue2 = (className?: string) =>
  cn(
    "font-bernini text-2xl font-normal md:text-3xl lg:text-4xl",
    "leading-none",
    className,
  );

export const typefaceValue3 = (className?: string) =>
  cn("font-bernini text-lg font-normal md:text-xl", "leading-none", className);

export const typefaceChapterNav = (className?: string) =>
  cn("font-caecilia text-base font-normal md:text-4xl", className);
