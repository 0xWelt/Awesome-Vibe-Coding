# CRUSH.md - Codebase Reference for Agents

## Content boundary

Awesome-Vibe-Coding lists coding harnesses, Lovable-style vibe-coding web builders, the vibe coding community, learning resources, and projects.

- Keep `contents/harnesses/` except `contents/harnesses/web-based-ides/supabase.md`. That covers terminal CLIs, standalone IDEs, IDE extensions, web builders (Bolt.new, Replit, Open Lovable, Firebase Studio, and similar), cloud-based coding agents, mobile harnesses, agent SDKs, and general capabilities. Claude Code, Cursor, Codex, Gemini CLI, and GitHub Copilot stay here.
- Keep `contents/vibe-coding-community/`, `contents/awesome-learning-resources/`, and `contents/awesome-projects/`.
- Put infrastructure platforms and supporting tools and services in [Awesome-Agent-Services](https://github.com/0xWelt/Awesome-Agent-Services): AWS, Azure, GCP, Vercel, Railway, Render, Netlify, Docker, GitHub, GitLab, Supabase, other hosting and backend services, MCP servers, agent skills, Slack, Lark, Linear, task tools, and observability. List each product in one repository.
- General capabilities that ship with a harness — including the Model Context Protocol and the Agent Skills standard — stay under `contents/harnesses/general-capabilities/`.
- Omit `command` frontmatter.
- Remove a category folder and its `_meta.md` when that category has no entries. Do not recreate `contents/platforms/` or `contents/harness-extensions/`.

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
