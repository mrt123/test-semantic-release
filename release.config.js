module.exports = {
  repositoryUrl: "https://github.com/mrt123/test-semantic-release",
  branches: [
    {name: 'master'},
    {name: 'develop', prerelease: 'develop'},
  ],
  ci: false,
  dryRun: false,  // Dry-run mode, skip publishing, print next version and release notes
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator"
  ]
};
