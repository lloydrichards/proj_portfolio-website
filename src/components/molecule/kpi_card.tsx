"use client";
import { type FC, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atom/card";
import { typefaceMeta } from "@/components/tokens/typeface";
import { cn } from "@/lib/utils";

type KPICardProps = {
  label: string;
  value: number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
};

export const KPICard: FC<KPICardProps> = ({
  label,
  value,
  subtitle,
  icon,
  className = "",
}) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (value === 0) return;

    const totalDuration = 2500; // Total animation duration in ms
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / totalDuration, 1);
      const easedProgress = 1 - (1 - rawProgress) ** 3; // Ease-out cubic

      setTick(Math.floor(easedProgress * value));

      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTick(value);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <Card className={cn("relative flex h-full flex-col border", className)}>
      <CardHeader className="flex-row items-start justify-between space-y-0 px-2 pt-1 pb-1 md:px-3">
        <p
          className={typefaceMeta(
            "text-muted-foreground text-xs uppercase md:text-sm",
          )}
        >
          {label}
        </p>
        {icon && (
          <div className="text-muted-foreground size-4 opacity-40 md:size-5">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center">
        <span
          className={cn(
            tick !== value ? " text-foreground" : " text-secondary",
            `font-mono duration-500 transition-colors tracking-wider text-5xl tabular-nums md:text-7xl lg:text-8xl`,
          )}
        >
          {tick}
        </span>
      </CardContent>
      {subtitle && (
        <CardFooter className="justify-center px-2 pb-1 md:px-3">
          <p
            className={typefaceMeta(
              "text-muted-foreground text-xs opacity-60 uppercase md:text-sm",
            )}
          >
            {subtitle}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};
