"use client";

import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { format } from "date-fns";
import * as React from "react";

interface RangeSliderProps {
  labelPosition?: "top" | "bottom";
  label?: (value: Date) => React.ReactNode;
  dateFormat?: string;
  value?: [Date, Date];
  defaultValue?: [Date, Date];
  min: Date;
  max: Date;
  step?: number; // in milliseconds
  className?: string;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  dir?: "ltr" | "rtl";
  onValueChange?: (value: [Date, Date]) => void;
}

const DateRangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(
  (
    {
      className,
      label,
      labelPosition = "top",
      dateFormat = "PP",
      min,
      max,
      value,
      defaultValue,
      step = 86400000,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    // Convert dates to timestamps for the slider
    const minTime = min.getTime();
    const maxTime = max.getTime();

    // Convert date values to numbers for the slider
    const convertedValue = value?.map((date) => date.getTime());
    const convertedDefaultValue = defaultValue?.map((date) => date.getTime());

    const initialValue = convertedValue ||
      convertedDefaultValue || [minTime, maxTime];

    // Create default label function if none provided
    const defaultLabel = (timestamp: number) => {
      const date = new Date(timestamp);
      return format(date, dateFormat);
    };

    const handleValueChange = React.useCallback(
      (values: number[]) => {
        if (onValueChange) {
          onValueChange(values.map((v) => new Date(v)) as [Date, Date]);
        }
      },
      [onValueChange],
    );

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none items-center select-none",
          className,
        )}
        min={minTime}
        max={maxTime}
        step={step}
        value={convertedValue}
        defaultValue={convertedDefaultValue}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className="bg-input relative h-2 w-full grow overflow-hidden rounded-full">
          <SliderPrimitive.Range className="bg-primary absolute h-full" />
        </SliderPrimitive.Track>
        {initialValue.map((timestamp, index) => (
          <React.Fragment key={index}>
            <SliderPrimitive.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring relative block h-4 w-4 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
              {label && (
                <span
                  className={cn(
                    "absolute flex w-full justify-center whitespace-nowrap",
                    labelPosition === "top" && "-top-7",
                    labelPosition === "bottom" && "top-4",
                  )}
                >
                  {label ? label(new Date(timestamp)) : defaultLabel(timestamp)}
                </span>
              )}
            </SliderPrimitive.Thumb>
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);
DateRangeSlider.displayName = "DateRangeSlider";

export { DateRangeSlider };
