"use client";

import { Maximize2 } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/atom/dialog";
import { cn } from "@/lib/utils";

export function ExpandableImage({
  alt = "",
  className,
  src,
  style,
  ...props
}: ImageProps) {
  const [open, setOpen] = useState(false);
  const accessibleName = alt || "Image";
  const originalSrc =
    typeof src === "string"
      ? src
      : "default" in src
        ? src.default.src
        : src.src;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            type="button"
            className="group relative block w-full cursor-zoom-in rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={alt ? `Expand ${alt}` : "Expand image"}
          />
        }
      >
        <Image
          src={src}
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto", ...style }}
          {...props}
          className={className}
          alt={alt}
        />
        <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-md bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-opacity pointer-fine:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 aria-hidden="true" />
        </span>
      </DialogTrigger>
      <DialogContent
        className="h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-auto bg-transparent p-0 ring-0 sm:max-w-[calc(100vw-2rem)] [&_[data-slot=dialog-close]]:bg-background/80 [&_[data-slot=dialog-close]]:shadow-sm [&_[data-slot=dialog-close]]:backdrop-blur-sm"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("img, a")
          ) {
            return;
          }
          setOpen(false);
        }}
      >
        <DialogTitle className="sr-only">{accessibleName}</DialogTitle>
        <div className="flex min-h-full flex-col items-center justify-center gap-2 pt-14 pb-3">
          <Image
            src={src}
            sizes="100vw"
            width={0}
            height={0}
            style={{ ...style, width: "auto", height: "auto" }}
            {...props}
            className={cn(
              "max-h-[calc(100dvh-10rem)] max-w-full object-contain",
              className,
            )}
            alt={alt}
          />
          <a
            href={originalSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-background px-4 text-foreground underline underline-offset-4"
          >
            Open full-resolution image
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
