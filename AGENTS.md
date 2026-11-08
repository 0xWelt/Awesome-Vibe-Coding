# CRUSH.md - Codebase Reference for Agents

## Content boundary

This repository is one English list. Its public name is becoming Awesome Agent Ecosystem. The GitHub repository will be renamed after this structure lands. Until then, the git remote, GitHub Pages, and `yaal.config.yaml` stay on `https://github.com/0xWelt/Awesome-Vibe-Coding`.

Four top-level sections:

- `contents/harnesses/` — coding harnesses and Lovable-style web builders. That covers terminal CLIs, standalone IDEs, IDE extensions, web builders (Bolt.new, Replit, Open Lovable, Firebase Studio, and similar), cloud-based coding agents, mobile harnesses, agent SDKs, and general capabilities. Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot stay here. Do not add Supabase here; it is listed under `contents/agent-services/infrastructure/databases/`.
- `contents/vibe-coding-community/` — vibe coding communities. Do not fold these entries into `contents/harnesses/web-based-ides/`.
- `contents/personal-agents/` — named personal agents. `vendor-cloud/` is a vendor product whose persistent runtime the vendor provides, including a desktop app or a separately named product. `self-hosted/` is an always-on agent you run on a machine or gateway you control. A general chat assistant is not an entry. Do not list ChatGPT, Claude, Gemini, or Microsoft Copilot in place of that company's named agent. Do not list Claude Code, Codex, or Gemini CLI here.
- `contents/agent-services/` — supporting tools and services an agent can call. That includes fulfillment, infrastructure and code hosts (AWS, Azure, GCP, Vercel, Railway, Render, Netlify, Docker, GitHub, GitLab, Supabase, and similar) and their official CLIs, plus code-related tools such as observability, context, and skill directories.

The same product must not appear in more than one section. Entries are the product. Do not add a second file for a protocol wrapper, CLI, or skill pack that only reaches a product already listed.

- General capabilities that ship with a harness — including the Model Context Protocol and the Agent Skills standard — stay under `contents/harnesses/general-capabilities/`.
- Omit `command` frontmatter. Strip UTM, referral, and affiliate parameters. Do not invent preview image URLs. When `image` is present, it is an absolute `https` URL of the product's official preview.
- On agent-service entries, optional `tags` record a verified connection method: `mcp`, `skill`, `grok-bot`, `cli`, or `chatgpt`. Tags do not decide the folder. A Grok Bot catalog connector is not automatically `mcp`.
- Every folder has `_meta.md` with YAML `title:` and a short English description in the body. Remove a category folder and its `_meta.md` when that category has no entries. Do not recreate `contents/platforms/` or `contents/harness-extensions/`.
- Keep agent-service subcategory folders nested under `contents/agent-services/<category>/`. The pinned `yaal` walker indexes markdown files one folder below each top-level section. Deeper agent-service entries are still part of the list; do not flatten them, and do not hand-bump the `yaal` submodule from a contents change.

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
