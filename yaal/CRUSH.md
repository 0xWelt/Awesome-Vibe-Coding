# CRUSH.md - Codebase Reference for Agents

## Build/Lint/Test Commands

- `npm run build` - Build production bundle (use this instead of dev)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run type-check` - TypeScript type checking
- `npm run parse-readme` - Parse README.md to generate tool data
- `npm run prepare` - Install Husky git hooks
- `node scripts/parse-readme.js` - Run single script directly

**Note**: Do not run `npm run dev` (hangs), use `npm run build` and inspect generated files instead

## Code Style Guidelines

- **Imports**: TypeScript, no extensions, use `@/` alias
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas
- **Types**: Interfaces for props (`Tool`, `ToolCardProps`), strict TypeScript
- **Naming**: PascalCase components, camelCase functions/variables
- **Error handling**: Try-catch with fallbacks, never throw in UI
- **Styling**: Tailwind CSS, custom components in `globals.css`
- **Structure**: `/app` Next.js pages, `/components` React components
- **Config**: Use `lib/config.ts` for environment detection
- **Pre-commit**: Husky + lint-staged runs automatically

## Communication Guidelines

- **Conversation language**: Use Chinese for user communication
- **Code language**: Use English for code, comments, and commit messages
