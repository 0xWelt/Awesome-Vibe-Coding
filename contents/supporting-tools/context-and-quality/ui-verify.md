---
name: "UI Verify"
link: "https://uiverify.ai/"
---

UI Verify is visual testing for coding agents: the agent sees every UI change it makes as a before-and-after screenshot, so visual bugs don't reach production. It reuses the tests a project already has (Storybook stories, Playwright, or Vitest browser tests), runs from a CLI in CI and snapshots only what changed. An AI judge labels each change as intended, a regression or flake, and a remote MCP server (`https://uiverify.ai/mcp`, browser login) lets Claude Code, Cursor or Codex look at the diffs and accept baselines. Agent skills install with `npx skills add uiverify/uiverify`. The free plan is 10,000 snapshots a month (50,000 for open source), no card.
