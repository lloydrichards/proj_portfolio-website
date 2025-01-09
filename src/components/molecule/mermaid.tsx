"use client";
import dynamic from "next/dynamic.js";
import type { MermaidProps } from "mdx-mermaid/lib/Mermaid";

const MdxMermaid = dynamic(
  () => import("mdx-mermaid/lib/Mermaid").then((res) => res.Mermaid),
  { ssr: false },
);
// Workaround for https://github.com/vercel/next.js/discussions/36369
export const Mermaid: React.FC<MermaidProps> = ({ ...props }) => {
  console.log(props);
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
