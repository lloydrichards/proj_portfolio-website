import { useMemo } from "react";

type TimelineItem = {
  start_date: Date;
  end_date: Date | null;
  category: string;
};

type TimelineItemWithChannel = TimelineItem & {
  channel: number;
};

export const useChannels = (
  data: TimelineItem[],
): TimelineItemWithChannel[] => {
  return useMemo(() => {
    // Sort items by start date to process them in chronological order
    const sortedData = [...data].sort(
      (a, b) => a.start_date.getTime() - b.start_date.getTime(),
    );

    const result: TimelineItemWithChannel[] = [];

    // Process each item
    sortedData.forEach((item) => {
      const itemStart = item.start_date.getTime();
      const itemEnd = item.end_date ? item.end_date.getTime() : Date.now();

      // Find the first available channel
      let channel = 0;
      let channelFound = false;

      while (!channelFound) {
        channelFound = true;

        // Check if current channel is available
        for (const existingItem of result) {
          if (existingItem.channel === channel) {
            const existingStart = existingItem.start_date.getTime();
            const existingEnd = existingItem.end_date
              ? existingItem.end_date.getTime()
              : Date.now();

            // Check for overlap
            if (itemStart <= existingEnd && itemEnd >= existingStart) {
              channelFound = false;
              channel++;
              break;
            }
          }
        }
      }

      result.push({ ...item, channel });
    });

    return result;
  }, [data]);
};
