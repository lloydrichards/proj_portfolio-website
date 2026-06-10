import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/atom/card";
import { typefaceMeta } from "@/components/tokens/typeface";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  title: string;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export const SkillCard = ({
  title,
  subtitle,
  action,
  className,
  children,
}: SkillCardProps) => {
  return (
    <Card className={cn("relative flex h-full min-w-0 flex-col", className)}>
      <CardHeader className="flex-row items-start justify-between space-y-0 px-2 pt-1 pb-1 md:px-3">
        <div className="flex flex-col">
          <p
            className={typefaceMeta(
              "text-muted-foreground text-xs uppercase md:text-sm",
            )}
          >
            {title}
          </p>
          {subtitle ? (
            <p className={typefaceMeta("text-muted-foreground text-xs")}>
              {subtitle}
            </p>
          ) : null}
        </div>
      </CardHeader>
      {action && <div className="absolute top-1 right-1 z-20">{action}</div>}
      <CardContent className="flex flex-1 min-h-0 min-w-0 flex-col">
        {children}
      </CardContent>
    </Card>
  );
};
