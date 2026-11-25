import type { ComponentPropsWithoutRef } from "react";
import { AnsiTerminal } from "@/components/atom/ansi-terminal";
import { CopyableCodeBlock } from "./components/molecule/copyable-code-block";
import { ExpandableImage } from "./components/molecule/expandable-image";
import { GitHubCommitCardServer } from "./components/molecule/github_commit_card.server";
import { MdxMermaid } from "./components/molecule/mdx-mermaid";
import { proseComponents } from "./components/tokens/prose_components";

export const components = {
  ...proseComponents,
  pre: (
    props: ComponentPropsWithoutRef<"pre"> & { "data-language"?: string },
  ) => {
    const pre = <proseComponents.pre {...props} />;
    return props["data-language"] !== undefined ? (
      <CopyableCodeBlock>{pre}</CopyableCodeBlock>
    ) : (
      pre
    );
  },
  img: ExpandableImage,
  Mermaid: MdxMermaid,
  mermaid: MdxMermaid,
  AnsiTerminal,
  GitHubCommitCard: GitHubCommitCardServer,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
