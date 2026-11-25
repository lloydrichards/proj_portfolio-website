"use client";
import "d3-transition";
import { Maximize2 } from "lucide-react";
import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";
import dynamic from "next/dynamic.js";
import { useState } from "react";
import { Button } from "@/components/atom/button";
import { CopyButton } from "@/components/atom/copy-button";
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
      <div className="group/floating-action relative">
        <MdxMermaid
          config={{
            theme: {
              light: "neutral",
              dark: "dark",
            },
          }}
          {...props}
        />
        <CopyButton
          label="Copy Mermaid source"
          getText={() => props.chart}
          className="right-12 pointer-coarse:right-14"
        />
        <DialogTrigger
          render={
            <Button
              type="button"
              variant="floating"
              size="icon-sm"
              aria-label="Expand diagram"
            />
          }
        >
          <Maximize2 aria-hidden="true" />
        </DialogTrigger>
      </div>
      <DialogContent
        className="mermaid-dialog max-md:grid-cols-1 h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] overflow-auto bg-transparent p-0 ring-0 sm:max-w-[calc(100vw-2rem)] [&_[data-slot=dialog-close]]:bg-background/80 [&_[data-slot=dialog-close]]:shadow-sm [&_[data-slot=dialog-close]]:backdrop-blur-sm"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("[data-mermaid-scroll]")
          ) {
            return;
          }
          setOpen(false);
        }}
      >
        <DialogTitle className="sr-only">Expanded diagram</DialogTitle>
        <div className="flex min-h-full w-full items-center justify-center [&_.mermaid]:my-0">
          <section
            data-mermaid-scroll=""
            aria-label="Scrollable diagram"
            // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need focus to scroll the diagram.
            tabIndex={0}
            className="w-full overflow-x-auto focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring [&_.mermaid]:overflow-visible! [&_.mermaid:has(g.tree-view)]:w-max! [&_.mermaid:has(g.tree-view)]:min-w-full max-md:[&_.mermaid:has(svg):not(:has(g.tree-view))]:min-w-[56rem] max-md:[&_.mermaid_svg]:max-h-none!"
          >
            <MdxMermaid
              config={{
                theme: {
                  light: "neutral",
                  dark: "dark",
                },
              }}
              {...props}
            />
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
