# CRUSH.md - Codebase Reference for Agents

## Build/Lint/Test Commands

- `npm run dev` - Start development server with README parsing
- `npm run build` - Build production bundle with README parsing
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run type-check` - Type checking with TypeScript
- `npm run parse-readme` - Parse README.md to generate tool data
- `npm run prepare` - Install Husky git hooks

## Environment Configuration

**Unified environment detection in `lib/config.ts`:**

```typescript
import { config } from '@/lib/config';

// Environment checks
config.environment.isGitHubPages; // true on GitHub Pages
config.basePath; // '/Awesome-Vibe-Coding' or ''
config.dataPath.tools; // '/data/tools.json'
config.getFullPath('/path'); // returns correct path
```

## Code Style Guidelines

- **Imports**: Use TypeScript, no explicit import extensions needed
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas
- **Types**: Use TypeScript interfaces for props (e.g., `Tool`, `ToolCardProps`)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error handling**: Try-catch blocks with fallback values
- **Styling**: Tailwind CSS with custom components in `globals.css`
- **File structure**: `/app` for Next.js pages, `/components` for React components
- **Pre-commit**: Husky + lint-staged for automated code quality checks

## Project Structure

Next.js 15 app with TypeScript, Tailwind CSS, and static data parsing from README.md

## Configuration Files

- `.eslintrc.json` - ESLint configuration with Next.js and Prettier
- `.prettierrc.json` - Prettier formatting configuration
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Comprehensive git ignore patterns
- `.husky/pre-commit` - Pre-commit hooks for code quality
- `lib/config.ts` - Unified environment detection and path configuration
