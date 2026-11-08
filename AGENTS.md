# CRUSH.md - Codebase Reference for Agents

## Content boundary

This repository is Awesome-Agent-Ecosystem (`https://github.com/0xWelt/Awesome-Agent-Ecosystem`), one English list. The live site is `https://0xwelt.github.io/Awesome-Agent-Ecosystem/`.

Six terminal sections, plus Agent Services:

- `contents/general-chat/` — user-facing conversation apps. The chat product itself, not a coding harness and not a named personal agent that acts over time. Do not list Claude Code, Gemini CLI, GitHub Copilot, Doubao Work, or QwenWork here. GitHub Copilot stays in `contents/harnesses/ide-extensions/github-copilot.md`. Doubao Work stays in `contents/personal-agents/vendor-cloud/doubao-work.md`. QwenWork stays in `contents/personal-agents/vendor-cloud/qwenwork.md`. Qwen Code stays in `contents/harnesses/terminal-clis/qwen-code.md`.
- `contents/harnesses/` — coding harnesses and Lovable-style web builders. That covers terminal CLIs, standalone IDEs, IDE extensions, web builders (Bolt.new, Replit, Open Lovable, Firebase Studio, and similar), cloud-based coding agents, mobile harnesses, agent SDKs, and general capabilities. Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot stay here. Do not add Supabase here; it is listed at `contents/agent-services/infrastructure/supabase.md`.
- `contents/vibe-coding-community/` — vibe coding communities. Do not fold these entries into `contents/harnesses/web-based-ides/`.
- `contents/personal-agents/` — named personal agents. `vendor-cloud/` is a vendor product whose persistent runtime the vendor provides, including a desktop app or a separately named product. `self-hosted/` is an always-on agent you run on a machine or gateway you control. A general chat assistant is not an entry here. ChatGPT, Claude, Gemini, Microsoft Copilot, Doubao chat, and Qwen Chat stay in `contents/general-chat/`. Do not list Claude Code, Codex, or Gemini CLI here.
- `contents/ai-enhanced-apps/` — independent terminals whose main form is a traditional category, with the interaction rebuilt around AI. The first entries are AI browsers, filed directly in this folder. A suite that merely added an AI button is not an entry here. Do not add Notion, Slack, DingTalk, WPS, or other suite-with-an-AI-button products; they stay in `contents/agent-services/`. Do not move headless or browser-infrastructure services such as Browserbase, browser-use, Browserless, or BrowserStack.
- `contents/agent-services/` — supporting tools and services an agent can call. That includes fulfillment, infrastructure and code hosts (AWS, Azure, GCP, Vercel, Railway, Render, Netlify, Docker, GitHub, GitLab, Supabase, and similar) and their official CLIs, plus code-related tools such as observability, context, and skill directories.

The same product must not appear as two files. Do not add an `also:` field. Entries are the product. Do not add a second file for a protocol wrapper, CLI, or skill pack that only reaches a product already listed.

- General capabilities that ship with a harness — including the Model Context Protocol and the Agent Skills standard — stay under `contents/harnesses/general-capabilities/`.
- Omit `command` frontmatter. Strip UTM, referral, and affiliate parameters. Do not invent preview image URLs. When `image` is present, it is an absolute `https` URL of the product's official preview.
- On agent-service entries, optional `tags` record a verified connection method: `mcp`, `skill`, `grok-bot`, `cli`, or `chatgpt`. Tags do not decide the folder. A Grok Bot catalog connector is not automatically `mcp`.
- Every folder has `_meta.md` with YAML `title:` and a short English description in the body. Remove a category folder and its `_meta.md` when that category has no entries. Do not recreate `contents/platforms/` or `contents/harness-extensions/`.
- Agent-service entries live directly in the 17 category folders: `contents/agent-services/<category>/*.md`. The pinned `yaal` walker indexes markdown files one folder below each top-level section, so do not add another directory level under a category. Do not hand-bump the `yaal` submodule from a contents change.

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
