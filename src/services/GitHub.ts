import { Effect } from "effect";
import { GitHubAPIError } from "@/types/Errors";

export type GitHubStats = {
  repos: number;
  stars: number;
  followers: number;
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

    return {
      getStats,
    };
  }),
  accessors: true,
}) {}
