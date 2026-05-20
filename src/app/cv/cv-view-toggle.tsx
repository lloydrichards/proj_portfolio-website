"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/atom/button";

export function CvViewToggle({ mode }: { mode: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 mb-4 p-2 border border-dashed border-muted-foreground/40 rounded-md bg-muted/30">
      <span className="text-xs text-muted-foreground font-mono">
        View mode:
      </span>
      <Button
        variant={mode === "edit" ? "default" : "outline"}
        size="sm"
        onClick={() => router.push(`${pathname}?view=edit`)}
      >
        Edit
      </Button>
      <Button
        variant={mode === "prod" ? "default" : "outline"}
        size="sm"
        onClick={() => router.push(`${pathname}?view=prod`)}
      >
        Prod
      </Button>
    </div>
  );
}
