export default function rehypeCodeWrap() {
  return function markWrappedBlocks(node) {
    if (node.type === "element" && node.tagName === "pre") {
      const code = node.children[0];
      const meta = code?.data?.meta ?? code?.properties?.metastring;
      if (
        code?.tagName === "code" &&
        typeof meta === "string" &&
        meta
          .replace(/"[^"]*"|'[^']*'|\/[^/]*\//g, "")
          .split(/\s+/)
          .includes("wrap")
      ) {
        node.properties["data-code-wrap"] = "";
      }
    }

    for (const child of node.children ?? []) {
      markWrappedBlocks(child);
    }
  };
}
