module.exports = {
  branches: [
    {name: 'master'},
    {name: 'develop', prerelease: 'develop'},
  ],
  ci: false,
  dryRun: true,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator"
  ]
};
