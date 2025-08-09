# CRUSH.md - Codebase Reference for Agents

## Build/Lint/Test Commands

- `npm run dev` - Start development server with README parsing
- `npm run build` - Build production bundle with README parsing
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run parse-readme` - Parse README.md to generate tool data

## Code Style Guidelines

- **Imports**: Use TypeScript, no explicit import extensions needed
- **Formatting**: 2 spaces, single quotes, semicolons, trailing commas
- **Types**: Use TypeScript interfaces for props (e.g., `Tool`, `ToolCardProps`)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error handling**: Try-catch blocks with fallback values
- **Styling**: Tailwind CSS with custom components in `globals.css`
- **File structure**: `/app` for Next.js pages, `/components` for React components

## Project Structure

Next.js 15 app with TypeScript, Tailwind CSS, and static data parsing from README.md
