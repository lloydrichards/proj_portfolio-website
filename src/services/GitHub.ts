import { Effect } from "effect";
import { GitHubAPIError } from "@/types/Errors";

export type GitHubStats = {
  repos: number;
  stars: number;
  followers: number;
};

export type GitHubCommit = {
  sha: string;
  shortSha: string;
  message: string;
  date?: string;
  url: string;
};

export type GitHubBranchGraph = {
  name: string;
  isDefault: boolean;
  lastCommitDate?: string;
  rootSha?: string;
  commits: GitHubCommit[];
};

export type GitHubCommitGraph = {
  owner: string;
  repo: string;
  defaultBranch: string;
  commits: GitHubCommit[];
  tagsBySha: Record<string, string[]>;
};

export class GitHub extends Effect.Service<GitHub>()("app/GitHub", {
  effect: Effect.gen(function* () {
    const getStats = Effect.fn("GitHub.getStats")((username: string) =>
      Effect.tryPromise({
        try: async () => {
          const headers = {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          };

          const userResponse = await fetch(
            `https://api.github.com/users/${username}`,
            {
              headers,
              next: { revalidate: 3600 },
            },
          );

          if (!userResponse.ok) {
            throw new GitHubAPIError({
              username,
              statusCode: userResponse.status,
              message: `GitHub API error: ${userResponse.status} ${userResponse.statusText}`,
            });
          }

          const userData = await userResponse.json();

          const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            {
              headers,
              next: { revalidate: 3600 },
            },
          );

          if (!reposResponse.ok) {
            throw new GitHubAPIError({
              username,
              statusCode: reposResponse.status,
              message: `GitHub API error: ${reposResponse.status} ${reposResponse.statusText}`,
            });
          }

          const repos = await reposResponse.json();

          const stars = repos.reduce(
            (acc: number, repo: { stargazers_count: number }) =>
              acc + repo.stargazers_count,
            0,
          );

          return {
            repos: userData.public_repos,
            stars,
            followers: userData.followers,
          } satisfies GitHubStats;
        },
        catch: (error) => {
          if (error instanceof GitHubAPIError) {
            return error;
          }
          return new GitHubAPIError({
            username,
            message: "Failed to fetch GitHub stats",
            cause: error,
          });
        },
      }).pipe(Effect.withSpan("GitHub.getStats", { attributes: { username } })),
    );

    const getCommitGraph = Effect.fn("GitHub.getCommitGraph")(
      ({
        owner,
        repo,
        commitLimit = 20,
      }: {
        owner: string;
        repo: string;
        commitLimit?: number;
      }) =>
        Effect.tryPromise({
          try: async () => {
            const headers = {
              Accept: "application/vnd.github.v3+json",
              ...(process.env.GITHUB_TOKEN && {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              }),
            };

            const encodedOwner = encodeURIComponent(owner);
            const encodedRepo = encodeURIComponent(repo);

            const repoResponse = await fetch(
              `https://api.github.com/repos/${encodedOwner}/${encodedRepo}`,
              {
                headers,
                next: { revalidate: 3600 },
              },
            );

            if (!repoResponse.ok) {
              throw new GitHubAPIError({
                owner,
                repo,
                statusCode: repoResponse.status,
                message: `GitHub API error: ${repoResponse.status} ${repoResponse.statusText}`,
              });
            }

            const repoData = await repoResponse.json();
            const defaultBranch: string = repoData.default_branch;
            const encodedDefaultBranch = encodeURIComponent(defaultBranch);

            const [commitsResponse, tagsResponse] = await Promise.all([
              fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?sha=${defaultBranch}&per_page=${commitLimit}`,
                {
                  headers,
                  next: { revalidate: 3600 },
                },
              ),
              fetch(
                `https://api.github.com/repos/${owner}/${repo}/tags?per_page=50`,
                {
                  headers,
                  next: { revalidate: 3600 },
                },
              ),
            ]);

            if (!commitsResponse.ok) {
              throw new GitHubAPIError({
                owner,
                repo,
                statusCode: commitsResponse.status,
                message: `GitHub API error: ${commitsResponse.status} ${commitsResponse.statusText}`,
              });
            }

            if (!tagsResponse.ok) {
              throw new GitHubAPIError({
                owner,
                repo,
                statusCode: tagsResponse.status,
                message: `GitHub API error: ${tagsResponse.status} ${tagsResponse.statusText}`,
              });
            }

            const commitsData: {
              sha: string;
              html_url: string;
              commit: {
                message: string;
                committer?: { date?: string };
                author?: { date?: string };
              };
            }[] = await commitsResponse.json();
            const tagsData: { name: string; commit: { sha: string } }[] =
              await tagsResponse.json();

            const commits = commitsData.map((commit) => {
              const message = commit.commit.message.split("\n")[0] ?? "";
              return {
                sha: commit.sha,
                shortSha: commit.sha.slice(0, 7),
                message,
                date:
                  commit.commit.committer?.date || commit.commit.author?.date,
                url: commit.html_url,
              } satisfies GitHubCommit;
            });

            const tagsBySha = tagsData.reduce<Record<string, string[]>>(
              (acc, tag) => {
                if (!acc[tag.commit.sha]) {
                  acc[tag.commit.sha] = [];
                }
                acc[tag.commit.sha].push(tag.name);
                return acc;
              },
              {},
            );

            return {
              owner,
              repo,
              defaultBranch,
              commits,
              tagsBySha,
            } satisfies GitHubCommitGraph;
          },
          catch: (error) => {
            if (error instanceof GitHubAPIError) {
              return error;
            }
            return new GitHubAPIError({
              owner,
              repo,
              message: "Failed to fetch GitHub commit graph",
              cause: error,
            });
          },
        }).pipe(
          Effect.withSpan("GitHub.getCommitGraph", {
            attributes: { owner, repo },
          }),
        ),
    );

    return {
      getStats,
      getCommitGraph,
    };
  }),
  accessors: true,
}) {}
