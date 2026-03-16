"use client";

import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { BeeSwarmChart } from "@/components/molecule/bee_swarm_chart";
import { cn } from "@/lib/utils";
import type { GitHubCommitGraph } from "@/services/GitHub";

type GitHubCommitCardProps = {
  graph?: GitHubCommitGraph | null;
  className?: string;
};

const formatShortSha = (sha: string) => sha.slice(0, 7);

export const GitHubCommitCard = ({
  graph,
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
      <Card className={cn("flex h-full flex-col", className)}>
        <CardHeader className="flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle>GitHub activity</CardTitle>
            <CardDescription className="pt-1 text-xs">
              Activity unavailable
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Unable to load recent commits right now.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("flex h-full flex-col", className)}>
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>Portfolio activity</CardTitle>
          <CardDescription className="pt-1 text-xs">
            {graph.owner}/{graph.repo}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex h-full min-h-0 flex-col gap-3">
        <div className="bg-muted/20 flex-1 min-h-0 overflow-hidden rounded-md p-3">
          <BeeSwarmChart
            commits={activeData.commits}
            tagsBySha={activeData.tagsBySha}
          />
        </div>
      </CardContent>
    </Card>
  );
};
