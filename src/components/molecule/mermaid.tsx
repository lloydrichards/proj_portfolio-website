"use client";
import { Maximize2 } from "lucide-react";
import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";
import dynamic from "next/dynamic.js";
import { useState } from "react";
import { Button } from "@/components/atom/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/atom/dialog";

const MdxMermaid = dynamic(
  () => import("mdx-mermaid/lib/Mermaid").then((res) => res.Mermaid),
  { ssr: false },
);
// Workaround for https://github.com/vercel/next.js/discussions/36369
export const Mermaid: React.FC<MermaidProps> = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="group relative">
        <MdxMermaid
          config={{
            theme: {
              light: "neutral",
              dark: "dark",
            },
          }}
          {...props}
        />
        <DialogTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              className="absolute top-2 right-2 opacity-80 shadow-sm transition-opacity group-hover:opacity-100"
              aria-label="Expand diagram"
            />
          }
        >
          <Maximize2 />
        </DialogTrigger>
      </div>
      <DialogContent
        className="mermaid-dialog h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-auto bg-transparent p-0 ring-0 sm:max-w-[calc(100vw-2rem)] [&_[data-slot=dialog-close]]:bg-background/80 [&_[data-slot=dialog-close]]:shadow-sm [&_[data-slot=dialog-close]]:backdrop-blur-sm"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest(".mermaid")
          ) {
            return;
          }
          setOpen(false);
        }}
      >
        <DialogTitle className="sr-only">Expanded diagram</DialogTitle>
        <div className="flex min-h-full w-full items-center justify-center [&_.mermaid]:my-0">
          <div className="w-full">
            <MdxMermaid
              config={{
                theme: {
                  light: "neutral",
                  dark: "dark",
                },
              }}
              {...props}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
