---
name: "Agent Skills"
link: "https://agentskills.io/"
image: "https://agent-skills.mintlify.site/_mintlify/api/og/v2?division=Documentation&title=Agent+Skills+Overview&description=A+standardized+way+to+give+AI+agents+new+capabilities+and+expertise.&theme=eceafe6c9bba4d39011a3a78&signature=f49b9582af9c7723bc252d6f293c7333b92eeb2853b625641b0f6bc444624ce9"
---

Agent Skills are a lightweight, open format for giving AI agents specialized knowledge and repeatable workflows. A skill is a folder containing a `SKILL.md` file — metadata (`name` and `description` at minimum) plus instructions — optionally bundled with scripts, references, and templates. Agents load skills through progressive disclosure: only each skill's name and description at startup, the full instructions when a task matches, and bundled resources as needed, so many skills can stay available with a small context footprint. Originally developed by Anthropic and since released as an open standard ([specification](https://github.com/agentskills/agentskills)), Agent Skills are supported by a growing number of harnesses, including Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot, VS Code, Cursor, OpenCode, Goose, and Amp.
