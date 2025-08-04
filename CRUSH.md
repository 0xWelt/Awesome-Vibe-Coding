# CRUSH.md - Vibe Coding Repository Guide

## Build/Lint/Test Commands
- `pre-commit run --all-files` - Run all linting/formatting checks
- `pre-commit run <hook-id> --all-files` - Run specific hook (e.g., codespell, trailing-whitespace)
- `pre-commit run --files <file-pattern>` - Run checks on specific files
- `codespell --toml` - Spell check with toml support

## Code Style Guidelines
- **Markdown**: Use consistent formatting, trailing whitespace removed
- **YAML/TOML**: Valid syntax, proper indentation (2 spaces)
- **Links**: Use descriptive text, validate URLs are accessible
- **Lists**: Alphabetical ordering within categories
- **Icons**: Use established system: [OSS Icon], [Freeware Icon], [app-store Icon], [awesome-list Icon]

## File Organization
- **README.md**: Main documentation with categorized tool lists
- **CLAUDE.md**: Repository guidance for Claude Code
- **.pre-commit-config.yaml**: Linting/formatting configuration
- **LICENSE**: Creative Commons Attribution 4.0 International

## Content Standards
- Provide concise, accurate descriptions for all entries
- Include relevant links (official sites, GitHub repos)
- Follow existing categorization structure
- Ensure all contributions respect CC-BY-4.0 licensing

## Git Ignore
- Add `.crush/` directory to .gitignore for agent workspace files
