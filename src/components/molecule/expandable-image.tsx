"use client";

import { Maximize2 } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import { type CSSProperties, useState } from "react";
import { buttonVariants } from "@/components/atom/button";

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
  previewCrop,
  ...props
}: ImageProps & {
  previewCrop?: {
    aspectRatio: string;
    width: string;
    transform: CSSProperties["transform"];
  };
}) {
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
            className="group/floating-action relative block w-full cursor-zoom-in rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={alt ? `Expand ${alt}` : "Expand image"}
          />
        }
      >
        <span
          className="block"
          style={
            previewCrop
              ? {
                  aspectRatio: previewCrop.aspectRatio,
                  overflow: "hidden",
                  borderRadius: "inherit",
                }
              : undefined
          }
        >
          <Image
            src={src}
            sizes="100vw"
            width={0}
            height={0}
            style={{
              width: previewCrop?.width ?? "100%",
              height: "auto",
              ...style,
              ...(previewCrop && {
                maxWidth: "none",
                transform: previewCrop.transform,
              }),
            }}
            {...props}
            className={className}
            alt={alt}
          />
        </span>
        <span
          className={cn(
            buttonVariants({ variant: "floating", size: "icon-sm" }),
          )}
          aria-hidden="true"
        >
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
