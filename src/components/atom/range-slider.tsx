"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { format } from "date-fns";
import * as React from "react";
import { cn } from "@/lib/utils";

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

const DateRangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
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
      disabled,
      orientation,
      dir,
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
        suppressHydrationWarning
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
        disabled={disabled}
        orientation={orientation}
        dir={dir}
        {...props}
      >
        <SliderPrimitive.Control className="grid grow data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2">
          <SliderPrimitive.Track className="bg-input relative overflow-hidden rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full">
            <SliderPrimitive.Indicator className="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
          </SliderPrimitive.Track>
          {initialValue.map((timestamp) => (
            <React.Fragment key={`range-slider-thumb-${timestamp}`}>
              <SliderPrimitive.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring relative block h-4 w-4 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                {label && (
                  <span
                    className={cn(
                      "absolute flex w-full justify-center whitespace-nowrap",
                      labelPosition === "top" && "-top-7",
                      labelPosition === "bottom" && "top-4",
                    )}
                  >
                    {label
                      ? label(new Date(timestamp))
                      : defaultLabel(timestamp)}
                  </span>
                )}
              </SliderPrimitive.Thumb>
            </React.Fragment>
          ))}
        </SliderPrimitive.Control>
      </SliderPrimitive.Root>
    );
  },
);
DateRangeSlider.displayName = "DateRangeSlider";

export { DateRangeSlider };
