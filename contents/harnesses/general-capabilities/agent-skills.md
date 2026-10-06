---
name: "Agent Skills"
link: "https://agentskills.io/"
---

Agent Skills are a lightweight, open format for giving AI agents specialized knowledge and repeatable workflows. A skill is a folder containing a `SKILL.md` file — metadata (`name` and `description` at minimum) plus instructions — optionally bundled with scripts, references, and templates. Agents load skills through progressive disclosure: only each skill's name and description at startup, the full instructions when a task matches, and bundled resources as needed, so many skills can stay available with a small context footprint. Originally developed by Anthropic and since released as an open standard ([specification](https://github.com/agentskills/agentskills)), Agent Skills are supported by a growing number of harnesses, including Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot, VS Code, Cursor, OpenCode, Goose, and Amp.
