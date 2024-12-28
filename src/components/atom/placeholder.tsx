import { cn } from "@/lib/utils";
import { Apple, LineChart, TentTree, Text } from "lucide-react";
import React from "react";
import { typefaceValue2 } from "../tokens/typeface/typeface";

const PlaceholderIcon = {
  image: (
    <TentTree className="text-destructive size-full max-h-24 max-w-24 p-1" />
  ),
  icon: <Apple className="text-destructive size-full max-h-24 max-w-24 p-1" />,
  text: <Text className="text-destructive size-full max-h-24 max-w-24 p-1" />,
  chart: (
    <LineChart className="text-destructive size-full max-h-24 max-w-24 p-1" />
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
        "prototype relative flex size-full items-center justify-center",
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
