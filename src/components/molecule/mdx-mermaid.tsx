import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";
import { Mermaid } from "./mermaid";

type TreeNode = {
  id: number;
  label: string;
  description: string;
  children: TreeNode[];
};

function TreeList({ nodes }: { nodes: TreeNode[] }) {
  return (
    <ul>
      {nodes.map(({ id, label, description, children }) => (
        <li key={id}>
          <code>{label}</code>
          {description && <> {description}</>}
          {children.length > 0 && <TreeList nodes={children} />}
        </li>
      ))}
    </ul>
  );
}

export function MdxMermaid(props: MermaidProps) {
  const lines = props.chart.split("\n");
  const header = lines.findIndex((line) => line.trim() === "treeView-beta");

  if (header === -1) return <Mermaid {...props} />;

  const nodes: TreeNode[] = [];
  const parents = [{ indent: -1, children: nodes }];

  for (const [id, line] of lines.slice(header + 1).entries()) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("%%")) continue;

    const indent = line.replaceAll("\t", "    ").search(/\S/);
    const [name, ...annotation] = trimmed.split("##");
    const label = name.split(":::")[0].trim();
    const description = annotation.join("##").trim();
    const node = { id, label, description, children: [] };

    let parent = parents[parents.length - 1];
    while (parent.indent >= indent) {
      parents.pop();
      parent = parents[parents.length - 1];
    }
    parent.children.push(node);
    parents.push({ indent, children: node.children });
  }

  return (
    <>
      <Mermaid {...props} />
      <details className="mb-6">
        <summary>Directory structure as text</summary>
        <TreeList nodes={nodes} />
      </details>
    </>
  );
}
