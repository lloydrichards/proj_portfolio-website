import { cn } from "@/lib/utils";
import { Apple, LineChart, TentTree, Text } from "lucide-react";
import React from "react";
import { typefaceValue2 } from "../typeface";

const PlaceholderIcon = {
  image: (
    <TentTree className="h-full max-h-24 w-full max-w-24 p-1 text-destructive" />
  ),
  icon: (
    <Apple className="h-full max-h-24 w-full max-w-24 p-1 text-destructive" />
  ),
  text: (
    <Text className="h-full max-h-24 w-full max-w-24 p-1 text-destructive" />
  ),
  chart: (
    <LineChart className="h-full max-h-24 w-full max-w-24 p-1 text-destructive" />
  ),
};
export const Placeholder = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    type?: keyof typeof PlaceholderIcon;
  }
>(({ className, type, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "prototype relative flex h-full w-full items-center justify-center",
        typefaceValue2("text-destructive"),
        className,
      )}
      {...props}
    >
      {type && PlaceholderIcon[type]}
      {children}
    </div>
  );
});
Placeholder.displayName = "Placeholder";
