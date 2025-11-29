"use client";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Lab } from "@/types/Lab";

interface LabContentProps {
  children?: ReactNode;
  labs: typeof Lab.Array.Encoded;
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
