# CRUSH.md - Codebase Reference for Agents

## Content boundary

This repository is Awesome-Agent-Ecosystem (`https://github.com/0xWelt/Awesome-Agent-Ecosystem`), one English list. The live site is `https://0xwelt.github.io/Awesome-Agent-Ecosystem/`.

Three super-classes, plus thin Standards:

- `contents/products/` — Terminal Products, the products a person opens.
  - `contents/products/general-chat/` — user-facing conversation apps. The chat product itself, not a coding harness and not a named personal agent that acts over time. Do not list Claude Code, Gemini CLI, GitHub Copilot, Doubao Work, QwenWork, Kimi Work, or Nano Work here. GitHub Copilot stays in `contents/products/coding-agents/ide-extensions/github-copilot.md`. Doubao Work stays in `contents/products/personal-agents/doubao-work.md`. QwenWork stays in `contents/products/personal-agents/qwenwork.md`. Qwen Code stays in `contents/products/coding-agents/local-coding-agents/qwen-code.md`. Kimi Work stays in `contents/products/personal-agents/kimi-work.md`. Nano Work stays in `contents/products/personal-agents/nano-work.md`. If a vendor has officially merged chat and agent or work into one desktop app, list that unified desktop under `contents/products/personal-agents/` and keep the conversation product here. ChatGPT Desktop is `contents/products/personal-agents/chatgpt-desktop.md`, Claude Desktop is `contents/products/personal-agents/claude-desktop.md`, and Gemini for desktop is `contents/products/personal-agents/gemini-desktop.md`. If a vendor still splits a general-chat line from a separately named agent or work line, do not add a chat-client installer here. Personal Agents keeps only the named agent or work product. Do not add chat installers for Kimi, Doubao, Yuanbao, Qwen Chat, Wenxin Assistant, iFlytek Spark, Nano AI, the DeepSeek app, Grok, Meta AI, StepFun web chat, or WPS.
  - `contents/products/coding-agents/` — coding-primary products that run AI coding agents, including Lovable-style web builders. That covers local coding agents, standalone IDEs, IDE extensions, web builders (Bolt.new, Replit, Open Lovable, Firebase Studio, and similar), cloud-based coding agents, mobile apps, and agent SDKs. Local or self-hosted coding agents are filed in `contents/products/coding-agents/local-coding-agents/`. Interface surfaces there are category-scoped tags, not extra files. Do not flatten Coding Agents, and do not promote `standalone-ides`, `ide-extensions`, `web-based-ides`, `cloud-based-agents`, `mobile-harnesses`, or `agent-sdks`. Coding, cowork, and computer-use remain capabilities, not separate classes. Agent SDKs stay as a subclass here. Coding agents commonly offer plan mode, goals, compact, hooks, subagents, dynamic workflows, and programmatic tool calling (PTC); those are capabilities, not entries. Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot stay here. Do not add Supabase here; it is listed at `contents/agent-services/infrastructure/supabase.md`. Do not recreate `contents/harnesses/general-capabilities/` or `contents/products/coding-agents/general-capabilities/`.
  - `contents/products/vibe-coding-community/` — vibe coding communities. Do not fold these entries into `contents/products/coding-agents/web-based-ides/`.
  - `contents/products/personal-agents/` — named personal agents that act over time, filed directly as `contents/products/personal-agents/*.md`. Runtime and capability forms are category-scoped tags, not exclusive subfolders. A general chat assistant is not an entry here. Conversation apps stay in `contents/products/general-chat/`, including ChatGPT, Claude, Gemini, Microsoft Copilot, Doubao, Qwen Chat, and other consumer chat apps. That set is not a closed list. When a vendor has merged chat and agent or work into one official desktop app, that desktop is its own entry in this folder, and the conversation product stays in General Chat. ChatGPT Desktop is `contents/products/personal-agents/chatgpt-desktop.md`, Claude Desktop is `contents/products/personal-agents/claude-desktop.md`, and Gemini for desktop is `contents/products/personal-agents/gemini-desktop.md`. Vendors that still split chat from a named work line keep only the named work product here. Do not add a Microsoft Copilot desktop entry or a Zhipu or Qingyan desktop entry unless a later decision says so. Dots stays at `contents/products/personal-agents/dots.md` and Claude Duet stays at `contents/products/personal-agents/claude-duet.md`. Do not fold either into the unified desktop files. Do not list Claude Code, Codex, or Gemini CLI here. DeepSeek Harness stays in Coding Agents.
  - `contents/products/ai-enhanced-apps/` — independent terminals whose main form is a traditional category, with the interaction rebuilt around AI. The first entries are AI browsers, filed directly in this folder. A suite that merely added an AI button is not an entry here. Do not add Notion, Slack, DingTalk, WPS, or other suite-with-an-AI-button products; they stay in `contents/agent-services/`. Do not move headless or browser-infrastructure services such as Browserbase, browser-use, Browserless, or BrowserStack.
- `contents/agent-services/` — supporting tools and services an agent can call. That includes fulfillment, infrastructure and code hosts (AWS, Azure, GCP, Vercel, Railway, Render, Netlify, Docker, GitHub, GitLab, Supabase, and similar) and their official CLIs, plus code-related tools such as observability, context, and skill directories. OpenRouter, Ollama, vLLM, and similar inference hosts stay here. Do not lift `contents/agent-services/agent-orchestration/` into a terminal section.
- `contents/llms/<company>/<model>.md` — models that drive agents, one file per model, under the company that trains it. Not chat apps and not inference infrastructure. Do not add Azure OpenAI, Amazon Bedrock, or other hosted copies. Do not move ChatGPT, Claude, Gemini, Qwen Chat, Kimi, or other conversation apps here.
- `contents/standards/` — open protocols and formats, a thin sibling of the three super-classes, not inside `contents/products/`. The Model Context Protocol, Agent Skills, AGENTS.md, the Agent Client Protocol, and the Agent Communication Protocol live here.

Cowork, coding, and computer-use are capabilities, not top-level classes. Coding-primary products stay in Coding Agents.

The same product must not appear as two files, except a vendor whose official desktop app has merged chat and agent or work: the conversation product stays in General Chat and that desktop is also listed under `contents/products/personal-agents/`. Do not add an `also:` field. Entries are the product. Do not add a second file for a protocol wrapper, CLI, or skill pack that only reaches a product already listed.

- Omit `command` frontmatter. Strip UTM, referral, and affiliate parameters. Do not invent preview image URLs. When `image` is present, it is an absolute `https` URL of the product's official preview.
- Tags are not a global vocabulary. They belong to one category. General Chat, Vibe Coding Communities, AI-enhanced Apps, LLMs, and Standards do not use `tags` frontmatter. Coding Agents tags are allowed only on entries in `contents/products/coding-agents/local-coding-agents/`. The other Coding Agents subclasses do not use `tags`.
- On agent-service entries, optional `tags` record a verified connection method only: `mcp`, `skill`, `grok-bot`, `cli`, or `chatgpt`. Do not rename `skill` to `skills` in this section. Tags do not decide the folder. A Grok Bot catalog connector is not automatically `mcp`. Remove any agent-service tag outside that set.
- On personal-agent entries, optional `tags` record capability and runtime forms, and they combine freely. Interaction surfaces are `desktop` (official desktop or on-device app), `web` (official web app), and `mobile` (official mobile app). `remote` means a phone or a chat channel can dispatch or control work on a connected computer. Execution locus is `local` (work runs on a computer the user provides; scheduled or overnight work typically needs that machine awake), `cloud` (work runs on vendor infrastructure and can continue after a local client is closed), or `self-hosted` (the user runs the agent runtime or gateway). Capabilities already used on an entry stay valid: `computer-use`, `skills`, `routines`, and `connectors`. `skills` here means the product supports agent skills. That is separate from the Agent Services connection tag `skill`. Do not add industry or vertical tags.
- On local-coding-agent entries, optional `tags` record official interface surfaces, and they combine freely: `cli` (official terminal, TUI, or CLI), `web` (official web UI, whether local or hosted), `desktop` (official standalone desktop app), `ide` (official IDE extension or first-party IDE companion, including official ACP or IDE integrations; unofficial third-party plugins are not `ide`), and `mobile` (official mobile app, including a public TestFlight when it is official). Do not add tags outside that set. One product line stays one file in this folder. Do not copy the file into `ide-extensions/` or `mobile-harnesses/` because it also has those surfaces. The Agent Services connection tag `cli` is a different category scope.
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
