---
name: "AGENTS.md"
link: "https://agents.md/"
---

AGENTS.md is a simple, open format for guiding coding agents, used by over 20k open-source projects. Think of AGENTS.md as a **README for agents**: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project. It complements README.md by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren't relevant to human contributors. AGENTS.md works across many agents including OpenAI Codex, Jules from Google, Factory, Aider, Kilo Code, Phoenix, Semgrep, GitHub Copilot, Ona, UiPath, Amp, Cursor, Roo Code, Gemini CLI, OpenCode, Zed, Warp, VS Code, and Devin. Features include project overview sections, build and test commands, code style guidelines, testing instructions, security considerations, and support for nested AGENTS.md files in monorepos where agents automatically read the nearest file in the directory tree. AGENTS.md is just standard Markdown with no required fields, allowing you to use any headings you like.
