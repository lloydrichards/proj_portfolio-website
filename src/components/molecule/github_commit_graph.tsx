"use client";

import { useMemo } from "react";
import { Badge } from "@/components/atom/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atom/tooltip";
import SvgGithub from "@/components/icons/github";
import { typefaceMeta } from "@/components/tokens/typeface";
import { cn } from "@/lib/utils";
import type { GitHubCommit, GitHubCommitGraph } from "@/services/GitHub";

type GitHubCommitGraphCardProps = {
  graph?: GitHubCommitGraph | null;
  className?: string;
};

const formatCommitMessage = (message: string) =>
  message.length > 64 ? `${message.slice(0, 61)}...` : message;

const formatShortSha = (sha: string) => sha.slice(0, 7);

type CommitRowProps = {
  commit: GitHubCommit;
  tags: string[];
};

const CommitRow = ({ commit, tags }: CommitRowProps) => {
  const tooltipContent = (
    <div className="max-w-[240px] text-sm">
      <div className="font-medium">{formatCommitMessage(commit.message)}</div>
      <div className="text-xs opacity-80">{commit.shortSha}</div>
      {tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2 py-1 text-left transition-colors",
            "hover:bg-muted/40",
          )}
        >
          <span
            className={cn(
              "relative flex h-4 w-4 items-center justify-center rounded-full border text-xs",
              "border-muted-foreground/40 text-muted-foreground",
            )}
          >
            <span className="block h-2 w-2 rounded-full bg-current" />
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {commit.shortSha}
          </span>
          {tags.length > 0 && (
            <span className="flex items-center gap-1 overflow-hidden">
              {tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </span>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
};

export const GitHubCommitGraphCard = ({
  graph,
  className,
}: GitHubCommitGraphCardProps) => {
  const activeData = useMemo(() => {
    if (!graph) {
      return null;
    }

    return {
      label: graph.defaultBranch,
      commits: graph.commits,
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
          <SvgGithub className="text-muted-foreground size-5" />
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
          <CardTitle>GitHub activity</CardTitle>
          <CardDescription className="pt-1 text-xs">
            {graph.owner}/{graph.repo}
          </CardDescription>
        </div>
        <SvgGithub className="text-muted-foreground size-5" />
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" size="sm">
              {activeData.label}
            </Badge>
          </div>
          <Badge variant="secondary" size="sm" className="text-[10px]">
            {activeData.commits.length} commits
          </Badge>
        </div>

        <div className="bg-muted/20 flex-1 overflow-hidden rounded-md p-3">
          <div className="flex flex-col gap-1">
            {activeData.commits.map((commit) => {
              const tags = activeData.tagsBySha[commit.sha] || [];

              return (
                <CommitRow
                  key={commit.sha}
                  commit={{ ...commit, shortSha: formatShortSha(commit.sha) }}
                  tags={tags}
                />
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
