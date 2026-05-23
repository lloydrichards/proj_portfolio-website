import { Effect } from "effect";
import { GitHubCommitCard } from "@/components/molecule/github_commit_card";
import { GitHub } from "@/services/GitHub";
import { RuntimeServer } from "@/services/RuntimeServer";

type GitHubCommitCardServerProps = {
  owner: string;
  repo: string;
  title?: string;
  commitLimit?: number;
  className?: string;
};

export const GitHubCommitCardServer = async ({
  owner,
  repo,
  title,
  commitLimit = 100,
  className,
}: GitHubCommitCardServerProps) => {
  const graph = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const svc = yield* GitHub;
      return yield* svc.getCommitGraph({ owner, repo, commitLimit });
    }).pipe(Effect.catch(() => Effect.succeed(null))),
  );

  return <GitHubCommitCard graph={graph} title={title} className={className} />;
};
