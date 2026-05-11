"use client";

import { useMemo } from "react";
import { CardContent } from "@/components/atom/card";
import { BeeSwarmChart } from "@/components/molecule/bee_swarm_chart";
import { SkillCard } from "@/components/molecule/skill_card";
import { cn } from "@/lib/utils";
import type { GitHubCommitGraph } from "@/services/GitHub";

type GitHubCommitCardProps = {
  graph?: GitHubCommitGraph | null;
  title?: string;
  className?: string;
};

const formatShortSha = (sha: string) => sha.slice(0, 7);

export const GitHubCommitCard = ({
  graph,
  title,
  className,
}: GitHubCommitCardProps) => {
  const activeData = useMemo(() => {
    if (!graph) {
      return null;
    }

    const commits = graph.commits.map((commit) => ({
      ...commit,
      shortSha: formatShortSha(commit.sha),
    }));

    return {
      label: graph.defaultBranch,
      commits,
      tagsBySha: graph.tagsBySha,
    };
  }, [graph]);

  if (!graph || !activeData) {
    return (
      <SkillCard
        title={title ?? "GitHub activity"}
        subtitle="Activity unavailable"
        className={cn("h-full", className)}
      >
        <CardContent className="text-muted-foreground text-sm pt-3">
          Unable to load recent commits right now.
        </CardContent>
      </SkillCard>
    );
  }

  const repoSlug = `${graph.owner}/${graph.repo}`;
  const repoUrl = `https://github.com/${repoSlug}`;

  return (
    <SkillCard
      title={title ?? "GitHub activity"}
      subtitle={
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {repoSlug}
        </a>
      }
      className={cn("h-full", className)}
    >
      <div className=" flex-1 overflow-hidden p-3">
        <BeeSwarmChart
          commits={activeData.commits}
          tagsBySha={activeData.tagsBySha}
        />
      </div>
    </SkillCard>
  );
};
