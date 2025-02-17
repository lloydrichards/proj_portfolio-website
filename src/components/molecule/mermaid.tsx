"use client";
import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";
import dynamic from "next/dynamic.js";

const MdxMermaid = dynamic(
  () => import("mdx-mermaid/lib/Mermaid").then((res) => res.Mermaid),
  { ssr: false },
);
// Workaround for https://github.com/vercel/next.js/discussions/36369
export const Mermaid: React.FC<MermaidProps> = ({ ...props }) => {
  return (
    <MdxMermaid
      config={{
        theme: {
          light: "dark",
          dark: "dark",
        },
      }}
      {...props}
    />
  );
};
