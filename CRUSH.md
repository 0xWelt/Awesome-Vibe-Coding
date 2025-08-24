# CRUSH.md - Codebase Reference for Agents

## Build/Lint/Test Commands
**First run:** `cd yaal`

- `npm run build` - Build production bundle (auto-detects config and README)
- `npm run dev` - Development server (auto-detects config and README)
- `npm run lint` - ESLint check
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Prettier formatting
- `npm run format:check` - Check Prettier formatting
- `npm run type-check` - TypeScript type checking
- `npm run parse-readme` - Parse README to generate tool data
- `npm run prepare` - Install Husky git hooks

## Code Style Guidelines
- **Imports**: TypeScript, no extensions, use `@/` alias for root
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas (es5)
- **Types**: Interfaces for props, strict TypeScript enabled
- **Naming**: PascalCase components, camelCase functions/variables
- **Error handling**: Try-catch with fallbacks, never throw in UI
- **Styling**: Tailwind CSS, custom classes in `globals.css`
- **Structure**: `/app` Next.js pages, `/components` React components
- **Config**: Use `lib/config.ts` for environment detection
- **Pre-commit**: Husky + lint-staged runs automatically

## Single Test/Script Commands
- `cd yaal && node scripts/parse-readme.js` - Run single script
- `cd yaal && node scripts/generate-github-config.js` - Generate GitHub config
- Use `cd yaal && npm run type-check` for quick type validation
- Use `cd yaal && npm run lint` for code quality checks