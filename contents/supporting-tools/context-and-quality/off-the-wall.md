---
name: "Dude Toldya"
link: "https://github.com/toranalytics/dude-toldya"
---

Dude Toldya is a hooks plugin for Claude Code and Codex that keeps the messages in which you corrected the agent and quotes the most relevant ones back before it answers, so the next session sees your own words instead of a summarised rule. `duto report` shows what you correct most in your local history, and a routing rule makes the orchestrator name a model for each subagent so searches don't run on the largest one. Judging runs through the claude or codex CLI you already use, with no API key and no dependencies. Install it in Claude Code with `claude plugin marketplace add toranalytics/dude-toldya` and `claude plugin install dude-toldya@dude-toldya` (MIT, Node 18+).
