"use client";

import { type ReactNode, useRef } from "react";
import { CopyButton } from "@/components/atom/copy-button";

export function CopyableCodeBlock({ children }: { children: ReactNode }) {
  const block = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={block}
      className="group/floating-action relative min-w-0 pointer-coarse:pt-15"
    >
      <CopyButton
        label="Copy code"
        getText={() => block.current?.querySelector("pre code")?.textContent}
      />
      {children}
    </div>
  );
}
