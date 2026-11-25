import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";
import { proseComponents } from "@/components/tokens/prose_components";
import { Mermaid } from "./mermaid";

export function MdxMermaid(props: MermaidProps) {
  const isTreeView = /^\s*treeView-beta\s*$/m.test(props.chart);

  return (
    <>
      <Mermaid {...props} />
      {isTreeView && (
        <details className="mb-6">
          <summary>View Mermaid source</summary>
          <proseComponents.pre className="mt-2">
            <code>{props.chart}</code>
          </proseComponents.pre>
        </details>
      )}
    </>
  );
}
