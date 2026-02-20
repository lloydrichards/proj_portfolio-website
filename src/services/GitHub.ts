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
  branches: GitHubBranchGraph[];
  branchRoots: Record<string, string[]>;
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
        branchLimit = 4,
        commitLimit = 20,
      }: {
        owner: string;
        repo: string;
        branchLimit?: number;
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

            const repoResponse = await fetch(
              `https://api.github.com/repos/${owner}/${repo}`,
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

            const [branchesResponse, tagsResponse] = await Promise.all([
              fetch(
                `https://api.github.com/repos/${owner}/${repo}/branches?per_page=${branchLimit}`,
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

            if (!branchesResponse.ok) {
              throw new GitHubAPIError({
                owner,
                repo,
                statusCode: branchesResponse.status,
                message: `GitHub API error: ${branchesResponse.status} ${branchesResponse.statusText}`,
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

            const branchesData: { name: string }[] =
              await branchesResponse.json();
            const tagsData: { name: string; commit: { sha: string } }[] =
              await tagsResponse.json();
            const branchNames = branchesData.map((branch) => branch.name);

            if (!branchNames.includes(defaultBranch)) {
              branchNames.push(defaultBranch);
            }

            const branchGraphs = await Promise.all(
              branchNames.map(async (branch) => {
                const commitsResponse = await fetch(
                  `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=${commitLimit}`,
                  {
                    headers,
                    next: { revalidate: 3600 },
                  },
                );

                if (!commitsResponse.ok) {
                  throw new GitHubAPIError({
                    owner,
                    repo,
                    statusCode: commitsResponse.status,
                    message: `GitHub API error: ${commitsResponse.status} ${commitsResponse.statusText}`,
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

                const commits = commitsData.map((commit) => {
                  const message = commit.commit.message.split("\n")[0] ?? "";
                  return {
                    sha: commit.sha,
                    shortSha: commit.sha.slice(0, 7),
                    message,
                    date:
                      commit.commit.committer?.date ||
                      commit.commit.author?.date,
                    url: commit.html_url,
                  } satisfies GitHubCommit;
                });

                let rootSha: string | undefined;
                if (branch !== defaultBranch) {
                  const compareResponse = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/compare/${defaultBranch}...${branch}`,
                    {
                      headers,
                      next: { revalidate: 3600 },
                    },
                  );

                  if (compareResponse.ok) {
                    const compareData: {
                      merge_base_commit?: { sha?: string };
                    } = await compareResponse.json();
                    rootSha = compareData.merge_base_commit?.sha;
                  }
                }

                return {
                  name: branch,
                  isDefault: branch === defaultBranch,
                  lastCommitDate: commits[0]?.date,
                  rootSha,
                  commits,
                } satisfies GitHubBranchGraph;
              }),
            );

            const defaultBranchGraph = branchGraphs.find(
              (branch) => branch.isDefault,
            );
            const sortedBranches = branchGraphs
              .filter((branch) => !branch.isDefault)
              .sort(
                (a, b) =>
                  new Date(b.lastCommitDate ?? 0).getTime() -
                  new Date(a.lastCommitDate ?? 0).getTime(),
              );
            const limitedBranches = sortedBranches.slice(
              0,
              Math.max(0, branchLimit - (defaultBranchGraph ? 1 : 0)),
            );

            const defaultCommits = defaultBranchGraph?.commits ?? [];
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
            const branchRoots = branchGraphs.reduce<Record<string, string[]>>(
              (acc, branch) => {
                if (!branch.rootSha || branch.isDefault) {
                  return acc;
                }
                if (!acc[branch.rootSha]) {
                  acc[branch.rootSha] = [];
                }
                acc[branch.rootSha].push(branch.name);
                return acc;
              },
              {},
            );

            return {
              owner,
              repo,
              defaultBranch,
              commits: defaultCommits,
              branches: defaultBranchGraph
                ? [...limitedBranches, defaultBranchGraph]
                : limitedBranches,
              branchRoots,
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
