const COMMIT_HASH_LENGTH = 7;

module.exports = {
  branches: [{ name: "main" }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          // User-facing changes that trigger releases
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "docs", release: "patch" },
          // Internal changes - no release
          { type: "test", release: false },
          { type: "build", release: false },
          { type: "ci", release: false },
          { type: "chore", release: false },
          { type: "style", release: false },
          { type: "revert", release: "false" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        writerOpts: {
          commitsSort: ["subject", "scope"],
          transform(commit, context) {
            // User-facing changes only
            const typeMap = {
              feat: "Features",
              fix: "Fixed",
              perf: "Improved",
              refactor: "Improved",
              docs: "Content",
            };

            // Skip unknown types
            if (!typeMap[commit.type]) return;

            const issues = [];
            let { subject } = commit;

            if (typeof subject === "string") {
              let url = context.repository
                ? `${context.host}/${context.owner}/${context.repository}`
                : context.repoUrl;

              if (url) {
                url = `${url}/issues/`;
                // Issue URLs.
                subject = subject.replace(/#([0-9]+)/g, (_, issue) => {
                  issues.push(issue);
                  return `[#${issue}](${url}${issue})`;
                });
              }
            }

            return {
              type: typeMap[commit.type],
              note: commit.notes,
              scope: commit.scope === "*" ? "" : commit.scope,
              shortHash:
                typeof commit.hash === "string"
                  ? commit.hash.substring(0, COMMIT_HASH_LENGTH)
                  : commit.shortHash,
              subject,
              // remove references that already appear in the subject
              references: commit.references.filter(
                (reference) => !issues.includes(reference.issue),
              ),
            };
          },
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message: "chore(release): v${nextRelease.version} [skip ci]",
      },
    ],
    "@semantic-release/github",
  ],
};
