import { Effect } from "effect";

export type GitHubStats = {
  repos: number;
  stars: number;
  followers: number;
};

export class GitHub extends Effect.Service<GitHub>()("app/GitHub", {
  effect: Effect.Do.pipe(
    Effect.let("getStats", () =>
      Effect.fn("GitHub.getStats")((username: string) =>
        Effect.tryPromise({
          try: async () => {
            const userResponse = await fetch(
              `https://api.github.com/users/${username}`,
              {
                headers: {
                  Accept: "application/vnd.github.v3+json",
                  ...(process.env.GITHUB_TOKEN && {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                  }),
                },
                next: { revalidate: 3600 },
              },
            );

            if (!userResponse.ok) {
              throw new Error(
                `GitHub API error: ${userResponse.status} ${userResponse.statusText}`,
              );
            }

            const userData = await userResponse.json();

            const reposResponse = await fetch(
              `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
              {
                headers: {
                  Accept: "application/vnd.github.v3+json",
                  ...(process.env.GITHUB_TOKEN && {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                  }),
                },
                next: { revalidate: 3600 },
              },
            );

            if (!reposResponse.ok) {
              throw new Error(
                `GitHub API error: ${reposResponse.status} ${reposResponse.statusText}`,
              );
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
            };
          },
          catch: (error) => {
            console.error("Failed to fetch GitHub stats:", error);
            return {
              repos: 0,
              stars: 0,
              followers: 0,
            };
          },
        }),
      ),
    ),
  ),
  accessors: true,
}) {}
