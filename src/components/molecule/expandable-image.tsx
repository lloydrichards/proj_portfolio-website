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
  style,
  ...props
}: ImageProps) {
  const [open, setOpen] = useState(false);
  const accessibleName = alt || "Image";

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
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto", ...style }}
          {...props}
          className={className}
          alt={alt}
        />
        <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-md bg-background/80 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 aria-hidden="true" />
        </span>
      </DialogTrigger>
      <DialogContent
        className="h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-auto bg-transparent p-0 ring-0 sm:max-w-[calc(100vw-2rem)] [&_[data-slot=dialog-close]]:bg-background/80 [&_[data-slot=dialog-close]]:shadow-sm [&_[data-slot=dialog-close]]:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("img")) {
            return;
          }
          setOpen(false);
        }}
      >
        <DialogTitle className="sr-only">{accessibleName}</DialogTitle>
        <div className="flex min-h-full items-center justify-center">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            style={{ ...style, width: "auto", height: "auto" }}
            {...props}
            className={cn(
              "max-h-[calc(100vh-4rem)] max-w-full object-contain",
              className,
            )}
            alt={alt}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
