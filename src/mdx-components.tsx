import { GitHubCommitCardServer } from "./components/molecule/github_commit_card.server";
import { Mermaid } from "./components/molecule/mermaid";
import { proseComponents } from "./components/tokens/prose_components";

export const components = {
  ...proseComponents,
  Mermaid,
  mermaid: Mermaid,
  GitHubCommitCard: GitHubCommitCardServer,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
