import type { ComponentProps, FC } from "react";
import MarkdownComp, { type Components } from "react-markdown";

import { proseComponents } from "@/components/tokens/prose_components";

type MarkdownProps = ComponentProps<"div"> & {
  markdown: string;
  components?: Components;
};

export const Markdown: FC<MarkdownProps> = ({
  markdown,
  components,
  ...rest
}) => {
  return (
    <div {...rest}>
      <MarkdownComp
        components={{
          ...(proseComponents as Components),
          ...components,
        }}
      >
        {markdown}
      </MarkdownComp>
    </div>
  );
};
