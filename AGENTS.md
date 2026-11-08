# CRUSH.md - Codebase Reference for Agents

## Content boundary

This repository is Awesome-Agent-Ecosystem (`https://github.com/0xWelt/Awesome-Agent-Ecosystem`), one English list. The live site is `https://0xwelt.github.io/Awesome-Agent-Ecosystem/`.

Three super-classes, plus thin Standards:

- `contents/products/` — Terminal Products, the products a person opens.
  - `contents/products/general-chat/` — user-facing conversation apps. The chat product itself, not a coding harness and not a named personal agent that acts over time. Do not list Claude Code, Gemini CLI, GitHub Copilot, Doubao Work, QwenWork, Kimi Work, or Nano Work here. GitHub Copilot stays in `contents/products/coding-agents/ide-extensions/github-copilot.md`. Doubao Work stays in `contents/products/personal-agents/desktop/doubao-work.md`. QwenWork stays in `contents/products/personal-agents/cloud-computer/qwenwork.md`. Qwen Code stays in `contents/products/coding-agents/terminal-clis/qwen-code.md`. Kimi Work stays in `contents/products/personal-agents/desktop/kimi-work.md`. Nano Work stays in `contents/products/personal-agents/cloud-computer/nano-work.md`. A desktop client of the same conversation product stays in that one General Chat file. Mention the desktop app in the body. Do not add a second file, and do not copy that desktop client into Personal Agents.
  - `contents/products/coding-agents/` — coding-primary products that run AI coding agents, including Lovable-style web builders. That covers terminal CLIs, standalone IDEs, IDE extensions, web builders (Bolt.new, Replit, Open Lovable, Firebase Studio, and similar), cloud-based coding agents, mobile apps, and agent SDKs. Coding, cowork, and computer-use remain capabilities, not separate classes. Agent SDKs stay as a subclass here. Coding agents commonly offer plan mode, goals, compact, hooks, subagents, dynamic workflows, and programmatic tool calling (PTC); those are capabilities, not entries. Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot stay here. Do not add Supabase here; it is listed at `contents/agent-services/infrastructure/supabase.md`. Do not recreate `contents/harnesses/general-capabilities/` or `contents/products/coding-agents/general-capabilities/`.
  - `contents/products/vibe-coding-community/` — vibe coding communities. Do not fold these entries into `contents/products/coding-agents/web-based-ides/`.
  - `contents/products/personal-agents/` — named personal agents, grouped by where the persistent runtime lives. `cloud-computer/` is a vendor-provided cloud computer or vendor-side workers; long-running work can continue after a local client is closed. `desktop/` is a vendor desktop or on-device app on the user's machine; scheduled or overnight work typically needs that computer to stay on. `self-hosted/` is an agent the user runs on a machine or gateway they control. A hybrid that keeps working on vendor infrastructure after the client is closed is Cloud Computer. A hybrid whose scheduled jobs need the local machine awake is Desktop. A general chat assistant is not an entry here. Conversation apps stay in `contents/products/general-chat/`, including ChatGPT, Claude, Gemini, Microsoft Copilot, Doubao, Qwen Chat, and other consumer chat apps. That set is not a closed list. A desktop client of the same chat brand stays in that one General Chat file. Do not list Claude Code, Codex, or Gemini CLI here. Only a separately named task-execution product belongs here, such as Doubao Work, Kimi Work, Claude Duet, QwenWork, or Nano Work.
  - `contents/products/ai-enhanced-apps/` — independent terminals whose main form is a traditional category, with the interaction rebuilt around AI. The first entries are AI browsers, filed directly in this folder. A suite that merely added an AI button is not an entry here. Do not add Notion, Slack, DingTalk, WPS, or other suite-with-an-AI-button products; they stay in `contents/agent-services/`. Do not move headless or browser-infrastructure services such as Browserbase, browser-use, Browserless, or BrowserStack.
- `contents/agent-services/` — supporting tools and services an agent can call. That includes fulfillment, infrastructure and code hosts (AWS, Azure, GCP, Vercel, Railway, Render, Netlify, Docker, GitHub, GitLab, Supabase, and similar) and their official CLIs, plus code-related tools such as observability, context, and skill directories. OpenRouter, Ollama, vLLM, and similar inference hosts stay here. Do not lift `contents/agent-services/agent-orchestration/` into a terminal section.
- `contents/llms/<company>/<model>.md` — models that drive agents, one file per model, under the company that trains it. Not chat apps and not inference infrastructure. Do not add Azure OpenAI, Amazon Bedrock, or other hosted copies. Do not move ChatGPT, Claude, Gemini, Qwen Chat, Kimi, or other conversation apps here.
- `contents/standards/` — open protocols and formats, a thin sibling of the three super-classes, not inside `contents/products/`. The Model Context Protocol, Agent Skills, AGENTS.md, the Agent Client Protocol, and the Agent Communication Protocol live here.

Cowork, coding, and computer-use are capabilities, not top-level classes. Coding-primary products stay in Coding Agents.

The same product must not appear as two files. Do not add an `also:` field. Entries are the product. Do not add a second file for a protocol wrapper, CLI, or skill pack that only reaches a product already listed.

- Omit `command` frontmatter. Strip UTM, referral, and affiliate parameters. Do not invent preview image URLs. When `image` is present, it is an absolute `https` URL of the product's official preview.
- On agent-service entries, optional `tags` record a verified connection method: `mcp`, `skill`, `grok-bot`, `cli`, or `chatgpt`. Tags do not decide the folder. A Grok Bot catalog connector is not automatically `mcp`.
- Every folder has `_meta.md` with YAML `title:` and a short English description in the body. Remove a category folder and its `_meta.md` when that category has no entries. Do not recreate `contents/platforms/` or `contents/harness-extensions/`.
- yaal indexes `contents/` at whatever depth exists. Agent-service entries still live directly in the 17 category folders: `contents/agent-services/<category>/*.md`. Do not add another directory level under an agent-service category. Terminal sections may be deeper under `contents/products/`. LLM entries are `contents/llms/<company>/<model>.md`. Do not hand-bump the `yaal` submodule from a contents change.

## Toolchain

This project consumes the [yaal](yaal/) submodule (Vite+ powered). Use
[Vite+](https://viteplus.dev) (`vp`) as the unified command entry point; ESLint,
Prettier, Husky, and lint-staged are no longer used.

## Build/Lint/Test Commands
**First run:** `cd yaal`

- `vp run build` - Build production bundle (auto-detects config and README)
- `vp run dev` - Development server (auto-detects config and README)
- `vp check` - Format, lint, and type-check in one pass (use `--fix` to auto-fix)
- `vp fmt` - Format only
- `vp lint` - Lint only
- `vp run parse-readme` - Parse README to generate tool data
- `vp install` - Install dependencies

## Code Style Guidelines
- **Imports**: TypeScript, no extensions, use `@/` alias for root
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas (Oxfmt)
- **Types**: Interfaces for props, strict TypeScript enabled
- **Naming**: PascalCase components, camelCase functions/variables
- **Error handling**: Try-catch with fallbacks, never throw in UI
- **Styling**: Tailwind CSS, custom classes in `globals.css`
- **Structure**: `/app` Next.js pages, `/components` React components
- **Config**: Use `lib/config.ts` for environment detection
- **Pre-commit**: `vp staged` runs automatically via `.vite-hooks/pre-commit`

## Single Test/Script Commands
- `cd yaal && vp node scripts/parse-readme.js` - Run single script
- `cd yaal && vp node scripts/generate-github-config.js` - Generate GitHub config
- Use `cd yaal && vp check` for quick quality validation
