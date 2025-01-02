"use client";
import { Lab } from "@/types/domain";
import React, { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <article className={cn("col-span-full mb-16", className)}>
      {children}
    </article>
  );
};
