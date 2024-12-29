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
    <article
      className={cn(
        "col-span-full row-span-24 *:col-span-full md:col-[3/-1] lg:col-span-18 lg:row-span-24",
        className,
      )}
    >
      {children}
    </article>
  );
};
