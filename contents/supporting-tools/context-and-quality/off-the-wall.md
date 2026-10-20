---
name: "Off the Wall"
link: "https://github.com/toranalytics/off-the-wall"
---

Off the Wall is a hooks plugin for Claude Code and Codex that keeps the messages in which you corrected the agent and quotes the most relevant ones back before it answers, so the next session sees your own words instead of a summarised rule. `otw report` shows what you correct most in your local history, and a routing rule makes the orchestrator name a model for each subagent so searches don't run on the largest one. Judging runs through the claude or codex CLI you already use, with no API key and no dependencies. Install it in Claude Code with /plugin install off-the-wall --marketplace toranalytics/off-the-wall (MIT, Node 18+).
