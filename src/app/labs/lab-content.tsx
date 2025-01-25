"use client";
import { cn } from "@/lib/utils";
import { Lab } from "@/types/domain";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface LabContentProps {
  children?: ReactNode;
  labs: Array<Lab>;
  className?: string;
}

export const LabContent: FC<LabContentProps> = ({
  children,
  labs,
  className,
}) => {
  const pathName = usePathname();
  const lab = labs.find((l) => l.pathname === pathName);

  if (!lab) {
    return <>{children}</>;
  }
  return (
    <article className={cn("col-span-full mt-8 mb-16", className)}>
      {children}
    </article>
  );
};
