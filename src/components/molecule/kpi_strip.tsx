import { Briefcase, FlaskConical, GitBranch, Star } from "lucide-react";
import type { FC } from "react";
import { typefaceMeta } from "@/components/tokens/typeface";
import { cn } from "@/lib/utils";

type StatItem = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

type KPIStripProps = {
  stats: StatItem[];
  className?: string;
};

/**
 * Compact horizontal stat strip. Replaces 4 separate KPI tiles
 * with a single row that communicates the same data in less space.
 */
export const KPIStrip: FC<KPIStripProps> = ({ stats, className }) => {
  return (
    <div
      className={cn(
        "flex h-full items-center justify-between gap-2 px-3 md:gap-4 md:px-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-1.5 md:gap-2">
          <span className="text-muted-foreground/60 size-3.5 md:size-4">
            {stat.icon}
          </span>
          <span className="font-mono text-base font-semibold tabular-nums md:text-lg">
            {stat.value}
          </span>
          <span
            className={typefaceMeta(
              "text-muted-foreground hidden text-xs sm:inline",
            )}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};
