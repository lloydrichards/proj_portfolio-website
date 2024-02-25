"use client";
import { cn } from "@/lib/utils";

// Core Typefaces

export const typefaceDisplay1 = (className?: string) =>
  cn("text-9xl font-normal leading-normal", className);

export const typefaceDisplay2 = (className?: string) =>
  cn("text-8xl font-normal leading-normal", className);

export const typefaceHeading1 = (className?: string) =>
  cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className);

export const typefaceHeading2 = (className?: string) =>
  cn(
    "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
    className,
  );

export const typefaceHeading3 = (className?: string) =>
  cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className);

export const typefaceHeading4 = (className?: string) =>
  cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className);

export const typefaceHeading5 = (className?: string) =>
  cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className);

export const typefaceHeading6 = (className?: string) =>
  cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className);

export const typefaceBody1 = (className?: string) =>
  cn("leading-7 [&:not(:first-child)]:mt-6", className);

export const typefaceBody2 = (className?: string) =>
  cn("text-sm font-normal", className);

export const typefaceMeta1 = (className?: string) =>
  cn("text-sm font-normal", className);

export const typefaceMeta2 = (className?: string) =>
  cn("text-xs font-normal", className);

// Component Typefaces

export const typefaceBlockQuote = (className?: string) =>
  cn("mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground", className);

export const typefaceListItem = (className?: string) => cn("mt-2", className);

export const typefaceOList = (className?: string) =>
  cn("my-6 ml-6 list-decimal", className);

export const typefaceUList = (className?: string) =>
  cn("my-6 ml-6 list-disc", className);

export const typefaceAnchor = (className?: string) =>
  cn("font-medium underline underline-offset-4", className);

export const typefaceValue1 = (className?: string) =>
  cn("text-3xl font-normal", "leading-none", className);

export const typefaceValue2 = (className?: string) =>
  cn("text-2xl font-normal", "leading-none", className);

export const typefaceValue3 = (className?: string) =>
  cn("text-lg font-normal", "leading-none", className);
