# Awesome-Vibe-Coding

[![Website](https://img.shields.io/website?url=https%3A%2F%2F0xWelt.github.io%2FAwesome-Vibe-Coding%2F&label=Live%20Site)](https://0xWelt.github.io/Awesome-Vibe-Coding/)
[![GitHub stars](https://img.shields.io/github/stars/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding)
[![GitHub forks](https://img.shields.io/github/forks/0xWelt/Awesome-Vibe-Coding?style=social)](https://github.com/0xWelt/Awesome-Vibe-Coding/fork)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A Curated List of Vibe Coding Open-Source Projects, Tools, and Learning Resources

🌐 **Live Website**: [https://0xWelt.github.io/Awesome-Vibe-Coding/](https://0xWelt.github.io/Awesome-Vibe-Coding/)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Development Toolkits](#development-toolkits)
  - [CLI Tools](#cli-tools)
    - [Claude Code](#claude-code)
    - [Gemini CLI](#gemini-cli)
    - [Crush](#crush)
    - [OpenCode](#opencode)
    - [Cursor CLI](#cursor-cli)
  - [Standalone IDEs](#standalone-ides)
    - [Cursor](#cursor)
    - [Windsurf Editor](#windsurf-editor)
    - [Void](#void)
    - [Trae](#trae)
    - [Dyad](#dyad)
  - [IDE Extensions](#ide-extensions)
    - [Github Copilot](#github-copilot)
    - [Continue](#continue)
    - [Windsurf Plugins](#windsurf-plugins)
  - [Web-based IDEs](#web-based-ides)
    - [Replit](#replit)
    - [Bolt.new](#boltnew)
    - [Firebase Studio](#firebase-studio)
    - [Supabase](#supabase)
    - [Capacity](#capacity)
    - [Command.new](#commandnew)
    - [Create.xyz](#createxyz)
    - [Tempo.new](#temponew)
    - [Softgen](#softgen)
    - [HeyBoss](#heyboss)
    - [Creatr](#creatr)
    - [Rork](#rork)
    - [Napkins.dev](#napkinsdev)
    - [Rocket.new](#rocketnew)
    - [HeroUI Chat](#heroui-chat)
    - [Open Lovable](#open-lovable)
    - [Lazy AI](#lazy-ai)
  - [Cloud-based Agents](#cloud-based-agents)
    - [Devin](#devin)
    - [Cursor Background Agents](#cursor-background-agents)
    - [Replit Ghostwriter](#replit-ghostwriter)
  - [Task Management](#task-management)
    - [Boomerang Tasks](#boomerang-tasks)
    - [Taskmaster AI](#taskmaster-ai)
  - [Vibe Coding Community](#vibe-coding-community)
    - [v0](#v0)
    - [Lovable](#lovable)
    - [YouWare](#youware)
    - [Trickle](#trickle)
  - [Mobile-first tools](#mobile-first-tools)
    - [vibecode](#vibecode)
- [MCP Servers](#mcp-servers)
  - [MCP Server Hub](#mcp-server-hub)
    - [Glama MCP Servers](#glama-mcp-servers)
    - [ModelScope MCP](#modelscope-mcp)
  - [GitHub MCP Server](#github-mcp-server)
  - [ArXiv MCP Server](#arxiv-mcp-server)
  - [Zotero MCP](#zotero-mcp)
- [Supporting Tools](#supporting-tools)
  - [Vercel](#vercel)
  - [Railway](#railway)
  - [Netlify](#netlify)
- [Vibe Coding Projects](#vibe-coding-projects)
  - [Awesome-Vibe-Coding](#awesome-vibe-coding-1)
  - [taxi_calculator](#taxi_calculator)
  - [VibeRL](#viberl)
- [Learning Resources](#learning-resources)
- [Star History](#star-history)
- [Contributors](#contributors)
- [License](#license)

## Development Toolkits

> Comprehensive collection of AI-powered development tools, IDEs, extensions, and platforms for modern software development.

### CLI Tools

> Integrate AI directly into your terminal.

#### [Claude Code](https://www.anthropic.com/claude-code)

Unleash Claude's raw power directly in your terminal. Search million-line
codebases instantly. Turn hours-long workflows into a single command. Your
tools. Your workflow. Your codebase, evolving at thought speed.

#### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

Gemini CLI empowers developers to query and edit large codebases beyond the 1M
token context window, generate apps from PDFs/sketches using multimodal
capabilities, automate operational tasks, integrate with MCP servers for media
generation, and ground queries with built-in Google Search.

#### [Crush](https://github.com/charmbracelet/crush)

The glamorous AI coding agent for your favourite terminal. Crush is your new
coding bestie that brings AI-powered development directly to your terminal. It
supports multiple AI providers including Anthropic, OpenAI, Groq, and
OpenRouter, with features like LSP integration, MCP server support, and
intelligent code assistance.

#### [OpenCode](https://github.com/sst/opencode)

OpenCode is a powerful AI coding agent built specifically for the terminal. It
provides developers with an intelligent coding assistant that can help with code
generation, debugging, refactoring, and more, all from the command line. With
over 18,000 stars on GitHub, OpenCode has become a popular alternative to Claude
Code, offering seamless integration with your existing development workflow and
terminal environment.

#### [Cursor CLI](https://docs.cursor.com/en/cli/overview)

Cursor CLI lets you interact with AI agents directly from your terminal to write, review, and modify code. Whether you prefer an interactive terminal interface or non-interactive automation for scripts and CI pipelines, the CLI provides powerful coding assistance right where you work. Features include interactive conversational sessions, non-interactive mode for automation, and session management to resume previous conversations with maintained context.

#### [Goose](https://block.github.io/goose/)

Goose is your local AI agent that automates engineering tasks seamlessly. Built with transparency and collaboration in mind, Goose runs locally to execute tasks efficiently while keeping control in your hands. It's extensible with any LLM and MCP servers, handles complex tasks autonomously from debugging to deployment, and is loved by engineers worldwide for its ability to turn hours-long workflows into simple commands.

#### [MyCoder.ai](https://github.com/drivecore/mycoder)

MyCoder is a powerful command-line AI agent system for coding tasks that leverages Anthropic's Claude, OpenAI models, and Ollama for intelligent assistance. It features an extensible tool system with modular architecture, parallel execution with sub-agents, self-modification capabilities, GitHub integration for issues and PRs, MCP server support, and interactive corrections during execution. With comprehensive browser automation and system browser detection, MyCoder provides a complete AI coding assistant experience directly from your terminal.

#### [RA.Aid](https://github.com/ai-christianson/RA.Aid)

RA.Aid (pronounced "raid") is a standalone coding agent built on LangGraph's agent-based task execution framework that helps you develop software autonomously. It provides an intelligent assistant for research, planning, and implementation of multi-step development tasks through a three-stage architecture: Research (analyzing codebases and gathering context), Planning (breaking down tasks into actionable steps), and Implementation (executing each planned step sequentially). RA.Aid can optionally integrate with aider for specialized code editing capabilities and features web research via Tavily API, human-in-the-loop interaction, chat mode, and a modern web interface with real-time streaming.

#### [CodeSelect](https://github.com/maynetee/codeselect)

CodeSelect is a lightweight CLI tool that helps developers share code with AI assistants like Claude or ChatGPT. It provides a simple interactive interface to select files from a project and exports them in an AI-friendly format with intelligent context about project structure and relationships between files. Features include visual file selection with checkboxes, intelligent code analysis that detects imports and file relationships, multi-language support, zero dependencies, clipboard integration, and AI-optimized output formats including LLM, Markdown, and plain text.

#### [OpenAI Codex](https://github.com/openai/codex)

OpenAI Codex CLI is a lightweight coding agent that runs locally in your terminal. It provides intelligent coding assistance with features like autonomous code generation, debugging, refactoring, and testing. Codex offers three levels of autonomy from read-only to full write access, runs in a secure sandbox environment, supports both interactive and non-interactive modes, integrates with ChatGPT plans for usage-based billing, and can work with open-source models via Ollama. With 34.5k+ stars, it's one of the most popular AI coding agents available.

#### [Qwen Code](https://github.com/QwenLM/qwen-code)

Qwen Code is a powerful command-line AI workflow tool adapted from Google Gemini CLI and optimized for Qwen3-Coder models. It provides intelligent coding assistance with features like code understanding and editing beyond traditional context windows, workflow automation for operational tasks, enhanced parser specifically optimized for Qwen-Coder models, and multiple free usage options including Qwen OAuth with 2,000 requests/day, Alibaba Cloud Bailian, ModelScope, and OpenRouter. With 9.2k+ stars, it offers comprehensive development acceleration capabilities including codebase exploration, refactoring, testing, and documentation generation.

### Standalone IDEs

> IDEs build for AI native experiences.

#### [Cursor](https://www.cursor.com/)

Cursor is the AI code editor used by millions of engineers worldwide, built to make you extraordinarily productive. Powered by a mix of purpose-built and frontier models, Cursor features intelligent tab completion that predicts your next edit, natural language code editing for updating entire classes or functions with simple prompts, and deep codebase understanding that lets you get answers from your codebase or refer to files and docs instantly. With seamless VS Code compatibility (import all extensions, themes, and keybindings in one click), privacy options including SOC 2 certification, and trusted by engineers at Samsung, Stripe, OpenAI, and other world-class companies, Cursor represents the best way to code with AI.

#### [Windsurf Editor](https://windsurf.com/)

Windsurf Editor is a purpose-built AI code editor designed to keep developers in flow state. It features Cascade, an agentic AI that remembers your codebase structure and workflow patterns, automatically fixes lint errors, supports MCP servers for enhanced capabilities, and offers Turbo mode for autonomous terminal command execution. With drag-and-drop image support for instant design implementation, sequential thinking for complex tasks, and seamless GitHub integration, Windsurf provides a truly magical coding experience trusted by over 1 million developers and 4,000+ enterprises worldwide.

#### [Void](https://github.com/voideditor/void)

Void is the open-source Cursor alternative. Use AI agents on your codebase,
checkpoint and visualize changes, and bring any model or host locally. Void
sends messages directly to providers without retaining your data.

#### [Trae](https://www.trae.com.cn/home)

Trae is committed to becoming a true AI engineer (The Real AI Engineer). Trae's
AI IDE product, with intelligent productivity at its core, seamlessly integrates
into your development process, working in perfect harmony with you to complete
every task with higher quality and greater efficiency.

#### [Dyad](https://www.dyad.sh/)

Dyad is a free, local, open-source AI app builder that serves as an alternative to cloud-based tools like Lovable and Bolt.new. It provides a visual interface for building full-stack applications with AI assistance while keeping all source code and data on your local machine. Features include drag-and-drop interface building, support for any AI model with your own API keys, Supabase integration for backend functionality, and complete freedom from vendor lock-in. Runs on macOS and Windows with no sign-up required.

#### [Kiro](https://kiro.dev)

Kiro is an AI IDE designed for taking projects from prototype to production through spec-driven development. It transforms prompts into clear requirements, system design, and discrete tasks while enabling collaboration on specifications and architecture. Features include agent hooks for automated task execution on events like file saves, multimodal chat support, native MCP integration for connecting to docs, databases, and APIs, autopilot mode for autonomous large task execution, VS Code compatibility with Open VSX plugins and themes, and enterprise-grade security. Currently in beta with waitlist access, Kiro helps structure AI coding with mature engineering practices.

### IDE Extensions

> Integrate AI into your existing IDEs.

#### [Github Copilot](https://code.visualstudio.com/docs/copilot/overview)

Copilot is your AI pair programmer tool in Visual Studio Code. Get code
suggestions as you type in the editor, or use natural language chat to ask about
your code or start an editing session for implementing new feature and fixing
bugs.

#### [Continue](https://github.com/continuedev/continue)

Continue enables developers to create, share, and use custom AI code assistants
with our open-source
[VS Code](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
and [JetBrains](https://plugins.jetbrains.com/plugin/22707-continue-extension)
extensions and hub of models, rules, prompts, docs, and other building blocks。

#### [Windsurf Plugins](https://windsurf.com/plugins)

Windsurf Plugins bring AI-powered coding assistance to JetBrains, VS Code, and 40+ other editors. Features intelligent autocomplete, Cascade agent for multi-file editing, and support for 70+ programming languages. Trusted by 5.5M+ developers worldwide.

#### [Amazon Q Developer](https://aws.amazon.com/q/developer)

Amazon Q Developer is the most capable generative AI-powered assistant for software development. It provides real-time code suggestions, vulnerability scanning, and agentic capabilities that can autonomously perform tasks like implementing features, documenting code, testing, and refactoring. Available for JetBrains, VS Code, Visual Studio, Eclipse, and command line with 50 free agentic chat interactions per month.

#### [Superdesign.dev](https://www.superdesign.dev/)

The first open-source design agent that lives inside your IDE. Generate multiple UI mocks, components, and wireframes in parallel. Seamlessly integrates with Cursor, Windsurf, VS Code, and Claude Code. Features include product mock generation, UI component design, wireframing, and easy forking for design iterations.

Windsurf Plugins autocompletes your code with AI in all major IDEs. We
[launched](https://www.windsurf.com/blog/codeium-copilot-alternative-in-vim)
this implementation of the Windsurf plugin for Vim and Neovim to bring this
modern coding superpower to more developers. Check out our
[playground](https://www.windsurf.com/playground) if you want to quickly try out
Windsurf online.

#### [Roo Code](https://github.com/RooVetGit/Roo-Code)

Roo Code gives you a whole dev team of AI agents in your code editor. It's an AI-powered autonomous coding agent that lives in VS Code, capable of communicating in natural language, reading and writing files directly in your workspace, running terminal commands, automating browser actions, and integrating with any OpenAI-compatible or custom API/model. Features include multiple specialized modes (Code, Architect, Ask, Debug), custom modes for specialized tasks, smart tools for file operations and terminal commands, MCP (Model Context Protocol) integration for unlimited custom tools, and extensive customization options. With 18.4k+ stars, it's one of the most popular AI coding extensions available.

#### [Avante.nvim](https://github.com/yetone/avante.nvim)

Avante.nvim is a Neovim plugin designed to emulate the behavior of the Cursor AI IDE, providing AI-driven code suggestions and the ability to apply recommendations directly to source files. Features include AI-powered code assistance with natural language interaction, one-click application of AI suggestions, support for multiple AI providers (Claude, OpenAI, Gemini, etc.), Fast Apply functionality for instant code edits with 96-98% accuracy, RAG (Retrieval-Augmented Generation) service for enhanced context, web search integration, custom tools support, and comprehensive key bindings. With 15.5k+ stars, it's the most popular AI coding plugin for Neovim.

#### [Prompt Tower](https://github.com/backnotprop/prompt-tower)

Prompt Tower is a VS Code extension for context management with long-context LLMs, agents, and vibe coding. It instantly builds context for entire repositories, selected files, folders, and GitHub issues to generate structured AI-XML context with real-time token counting. Features include visual file selection with checkboxes, smart context packaging with project structure, context control with `.towerignore` files, GitHub issues integration, token intelligence for model limits, and one-click context copying. Perfect for developers using Gemini's 1M context, Cursor's agent, Claude Code, or any AI assistant.

#### [Augment Code](https://www.augmentcode.com/)

Augment Code is the most powerful AI software development platform backed by an industry-leading context engine. It provides autonomous software agents that can plan, build, and open PRs end-to-end, both locally and in the cloud. Features include cutting-edge context retrieval that understands codebases of any size, support for VS Code, JetBrains IDEs, Vim and Neovim, native integrations with essential development tools, terminal command execution with approval controls, MCP support for 100+ external tools, CLI and TUI interfaces, smart apply functionality for one-click code changes, enterprise-grade security and privacy, and leading performance on SWE-Bench Verified. Trusted by engineers at major companies worldwide.

### Web-based IDEs

> Create APPs directly in the browser.

#### [Replit](https://replit.com/)

Replit is a browser-based platform where you can effortlessly create and share
apps without installation or setup. The platform provides all the tools you must
create amazing applications from one browser tab—no installation required.
Replit includes AI coding tools, real-time collaboration, and project sharing to
give you a head start on your app creation journey.

#### [Bolt.new](https://bolt.new)

Bolt.new is an in-browser AI web development agent that leverages StackBlitz’s
WebContainers to allow for full stack application development. The application
presents users with a simple, chat-based environment in which one prompts an
agent to make code changes that are updated in real time in the WebContainers
dev environment. Bolt supports many of the most popular web languages and
frameworks, as well as integration with Netlify for deployment and hosting;
Supabase for database, auth, and file storage; and Expo for mobile application
development.

#### [Firebase Studio](https://studio.firebase.google.com)

Firebase Studio is an agentic cloud-based development environment that helps you
build and ship production-quality full-stack AI apps, including APIs, backends,
frontends, mobile, and more. Firebase Studio unifies Project IDX with
specialized AI agents and assistance from Gemini in Firebase to provide a
collaborative workspace accessible from anywhere, containing everything you need
to develop an application. You can import your existing projects or start
something new with templates supporting variety of languages and frameworks.

#### [Capacity](https://capacity.so/)

Capacity is an AI-powered platform that turns any idea into a working web app using agentic coding. Features true agentic coding with global codebase understanding, multi-file refactoring, 90% fewer errors, and adaptive pricing. Build 20x faster than traditional methods with full-stack Next.js, Tailwind CSS, and TypeScript applications ready for deployment.

#### [Command.new](https://chai.new)

Command.new (formerly chai.new) is a platform for vibe coding any AI agent. Turn prompts into production-ready agents with support for email agents, support agents, research agents, and more. Features a community hub with 36K+ developers sharing pre-built agents for various use cases including cold email writing, resume generation, social media management, and productivity automation.

#### [Create.xyz](https://www.create.xyz)

Create is a free-to-use AI app builder that turns your words into sites, tools, apps and products built with code. Add GPT-4o and 40+ integrations instantly. Build AI tools and automations without writing any code using latest AI models like Claude 3.5 Sonnet, GPT-4o, and Stable Diffusion.

#### [Tempo.new](https://www.tempo.new)

Tempo is where designers and developers collaborate on React apps 10x faster with AI. Features a drag-and-drop visual editor for editing React code, works with any existing React codebase, includes hundreds of components and templates, and offers GitHub integration. Backed by Y Combinator with plans from free to $4,000/month for agent-driven development.

#### [Softgen](https://softgen.ai)

Softgen is an AI web app builder that turns your ideas into stunning web applications with no coding required. Features AI-powered code generation, full-stack development with modern tech stack, built-in integrations for emails, payments, authentication, database, and cloud storage. Users report 800% productivity increase and can go from concept to revenue-generating product in days.

#### [HeyBoss](https://www.heyboss.xyz)

HeyBoss AI is the easiest no-code AI builder for sites and apps where everyone can vibe code. Create apps and websites by simply chatting with AI. Features include built-in database, AI app store, payment acceptance, visual editor, and SEO optimization. Free plan available with community support.

#### [Creatr](https://getcreatr.com)

Creatr is a deep build platform that goes beyond vibe coding to create real apps for real users. Features one-prompt development that asks the right questions and builds exactly what you meant in one go. Used by 1000+ teams and 40k+ happy builders to go from idea to fully-functional web apps in 12-14 hours with zero bugs and no errors.

#### [Rork](https://rork.app)

Rork builds complete, cross-platform mobile apps using AI and React Native. Create native mobile apps in minutes with full cross-platform compatibility, leveraging React Native for iOS and Android deployment.

#### [Napkins.dev](https://www.napkins.dev)

Napkins.dev turns your wireframes into working apps by uploading an image of your website design. Uses AI to build React + Tailwind applications from screenshots or design images, powered by Together AI and Llama 4.

#### [Rocket.new](https://www.rocket.new)

Rocket.new helps build web and mobile apps 10x faster without code. Create applications quickly using AI-powered development tools for both web and mobile platforms.

#### [Supabase](https://supabase.com)

Supabase is an open source Firebase alternative. Start your project with a
Postgres database, Authentication, instant APIs, Edge Functions, Realtime
subscriptions, Storage, and Vector embeddings.

#### [HeroUI Chat](https://heroui.chat/)

HeroUI Chat is an AI-powered web development platform that creates beautiful, responsive web applications using natural language. Built specifically for modern React and Next.js development, it generates production-ready code with HeroUI components, Tailwind CSS styling, and best practices. Features include instant app generation from text prompts, built-in HeroUI component library integration, automatic responsive design, real-time preview and editing, and seamless deployment options.

#### [Open Lovable](https://github.com/mendableai/open-lovable)

Open Lovable is an open-source AI-powered React app builder that lets you chat with AI to build modern web applications instantly. Created by the Firecrawl team, it provides a complete local development environment for AI-assisted app creation. Features include real-time AI chat interface for app building, React/Next.js code generation, integration with multiple AI providers (Anthropic, OpenAI, Gemini, Groq), sandboxed code execution with E2B, web scraping capabilities with Firecrawl, and full TypeScript support. Perfect for developers who want the power of Lovable.dev in an open-source, self-hosted solution.

#### [Lazy AI](https://getlazy.ai/)

Lazy AI is a prompt-to-app platform that enables users to create full-stack web applications and prototypes for various purposes, including SaaS apps, APIs, and internal tools. It leverages advanced AI models to facilitate the development process, making it accessible for product managers, developers, and marketers. Features include instant full-stack app generation from natural language prompts, support for complex SaaS applications and APIs, built-in database and authentication systems, deployment-ready code generation, and collaborative tools for teams.

### Cloud-based Agents

> AI software engineers that work autonomously in the cloud.

#### [Devin](https://www.cognition-labs.com/introducing-devin)

Devin is the world's first fully autonomous AI software engineer developed by Cognition Labs that can plan, execute, and complete complex engineering tasks independently, from building and deploying applications to debugging code and training AI models. Devin operates in a sandboxed cloud environment with access to standard developer tools including a shell, code editor, and browser, allowing it to work just like a human engineer but with superhuman speed and accuracy. Key capabilities include autonomous planning that breaks down complex tasks into manageable steps, code generation that writes, tests, and debugs code across multiple languages, deployment that builds and deploys applications to production, learning that adapts and learns from new technologies and frameworks, and collaboration that works alongside human developers as a teammate.

#### [Cursor Background Agents](https://docs.cursor.com/en/background-agent)

Cursor Background Agents are asynchronous remote agents that run in isolated Ubuntu-based cloud environments and can edit and run code autonomously while you continue working on other tasks, providing a true background coding experience. These agents feature asynchronous operation that spawns agents working independently while you focus on other tasks, remote environment execution in isolated VMs with internet access and package installation capabilities, GitHub integration that automatically clones repos, works on separate branches, and pushes changes, environment customization via `.cursor/environment.json` with custom Docker setups, terminal management with persistent tmux sessions for running background processes, and privacy mode availability to ensure code isn't used for training. Background agents support Max Mode-compatible models and can be accessed via the sidebar or `Ctrl+E` shortcut, requiring GitHub read-write access and storing encrypted secrets for development environments.

#### [Replit Ghostwriter](https://replit.com/learn/intro-to-ghostwriter)

Ghostwriter is Replit's AI-powered coding assistant that serves as your partner in code. Features complete code completion, explain code functionality in plain English, transform and refactor code between languages and styles, and generate complete programs from simple prompts. Includes a 5-day beginner-friendly course to master AI-assisted programming.

### Task Management

> AI-powered project management tools for breaking down complex development tasks.

#### [Boomerang Tasks](https://github.com/RooCodeInc/Roo-Code)

Boomerang Tasks is Roo Code's built-in orchestration system that breaks complex projects into manageable subtasks using specialized AI modes. It features an Orchestrator mode that automatically delegates work to appropriate specialized modes (Code, Architect, Debug), maintains isolated contexts for each subtask, and provides seamless workflow coordination. Each subtask runs independently with its own conversation history, preventing context overload while enabling complex multi-step development workflows.

#### [Taskmaster AI](https://github.com/eyaltoledano/claude-task-master)

Taskmaster AI is a free, open-source project management system that acts as a PM for your AI agent. It breaks down complex projects into manageable tasks that AI can complete in single shots, eliminating context overload and preventing good code from being broken. Features include intelligent task decomposition, progress tracking, and seamless integration with existing AI coding workflows while keeping your API keys and remaining completely free to use.

### Vibe Coding Community

> Create APPs with AI and share with the community.

#### [v0](https://v0.dev/)

v0 is a web-based platform provided by Vercel that allows users to quickly
build, prototype, and share web projects. It provides a variety of project
templates and examples, supports modern web development frameworks, and
integrates with other services. The platform is designed to be user-friendly and
encourages community contributions and collaboration.

#### [Lovable](https://lovable.dev/)

Lovable is an AI-powered platform that enables users of any skill level to
create full-stack web applications without requiring coding expertise by simply
describing what they want in plain English. Instead of hiring developers, users
can generate web apps or websites instantly. - taking you from idea to app as
fast as possible.

#### [YouWare](https://www.youware.com/)

YouWare is an innovative coding community specifically designed for AI creators.
It offers a platform where users can create, upload, and share their code
projects. Users also have the ability to remix existing projects, building on
the work of others to enhance collaboration and creativity.

#### [Trickle](https://trickle.so/)

Trickle is an AI-powered platform that transforms your ideas into production-ready web applications through natural language. Simply describe what you want to build, and Trickle generates complete full-stack applications with modern frameworks, responsive design, and deployment-ready code. Features include instant app generation from text prompts, support for complex multi-page applications, built-in database integration, automatic responsive design, and one-click deployment to the cloud.

### Mobile-first tools

> Create Apps directly on your phone

#### [vibecode](https://www.vibecodeapp.com)

Vibecode is the mobile app that builds mobile apps. You can simply download
Vibecode from the App Store, enter your idea, and within minutes you'll have
your fully native iOS app running on your phone. You can then share this app
with your friends in 1 click, and they can use the app without downloading
anything.

## MCP Servers

> Model Context Protocol (MCP) servers that extend AI capabilities with external
> data and tools.

### MCP Server Hub

> Discover and explore MCP servers from various platforms and communities.

#### [Glama MCP Servers](https://glama.ai/mcp/servers)

Glama provides a comprehensive collection of production-ready MCP servers that
extend AI capabilities through file access, database connections, API
integrations, and other contextual services. The platform features over 7,700
servers across various categories including Remote, Python, TypeScript,
Developer Tools, Databases, RAG Systems, and more. Each server is rated for
security, license, and quality, making it easy to find reliable MCP solutions
for your AI applications.

#### [ModelScope MCP](https://modelscope.cn/mcp)

ModelScope offers a curated selection of MCP servers designed to enhance AI
model capabilities with specialized tools and integrations. The platform
provides access to various MCP servers that can extend the functionality of AI
assistants and applications through standardized protocols.

### [GitHub MCP Server](https://github.com/github/github-mcp-server)

GitHub's official MCP server that provides comprehensive access to GitHub
repositories, issues, pull requests, actions, code security, and more. Features
include repository management, issue tracking, pull request operations, workflow
automation, and Copilot coding agent integration. Supports both GitHub.com and
GitHub Enterprise Server with configurable toolsets and read-only mode.

### [ArXiv MCP Server](https://github.com/blazickjp/arxiv-mcp-server)

A specialized MCP server for searching and analyzing arXiv papers, providing AI
assistants with direct access to academic research. Features include paper
search with date and category filters, paper download and storage, content
reading, and specialized research prompts for deep paper analysis. Includes
local storage for faster access and comprehensive paper analysis workflows.

### [Zotero MCP](https://github.com/54yyyu/zotero-mcp)

A powerful MCP server that seamlessly connects your Zotero research library with
Claude and other AI assistants. Features include AI-powered semantic search with
vector-based similarity matching, comprehensive library search, PDF annotation
extraction, metadata retrieval, and BibTeX export. Supports both local Zotero
API and web API with configurable embedding models (OpenAI, Gemini, or default).

## Supporting Tools

> Essential tools that enhance your vibe coding workflow.

### [Vercel](https://vercel.com)

Vercel is a cloud platform for static sites and Serverless Functions that fits
perfectly with vibe coding. It offers seamless deployment, automatic HTTPS,
continuous deployment from Git, and preview deployments for all your changes.
Perfect for deploying your AI-generated applications quickly and efficiently.

### [Railway](https://railway.app)

Railway is a modern platform that makes it easy to deploy your applications. It
provides a simple way to deploy your applications with automatic deployments,
preview environments, and easy scaling. Perfect for deploying your vibe-coded
applications with minimal configuration.

### [Netlify](https://www.netlify.com)

Netlify is a platform that automates your code to create high-performant,
easily-maintainable sites and web applications. It provides continuous
deployment from Git, serverless functions, and edge functions. Ideal for
deploying and hosting your vibe-coded web applications.

## Vibe Coding Projects

> Projects created through vibe coding.

### [Awesome-Vibe-Coding](https://github.com/0xWelt/Awesome-Vibe-Coding)

This very project - a comprehensive directory of vibe coding tools and resources built entirely through vibe coding practices using Next.js 14 with TypeScript, Tailwind CSS, automated README parsing, GitHub Actions CI/CD and GitHub Pages deployment, covering Development Toolkits, Web-based IDEs, Cloud Agents, Community Tools, MCP Servers, Deployment Platforms, Vibe Coding Projects and Learning Resources.

### [taxi_calculator](https://github.com/0xWelt/taxi_calculator)

A Japanese taxi fare calculator web application created entirely with Cursor AI using vibe coding principles. Features interactive OpenStreetMap integration, real-time route planning with OSRM, intelligent location search supporting Chinese/Japanese/English, and accurate fare calculations based on Tokyo taxi rates (410 yen base + 80 yen per 237m + night surcharge). Built with Python Flask backend and responsive frontend, deployed on Vercel with one-click setup.

### [VibeRL](https://github.com/0xWelt/VibeRL)

A modern reinforcement learning framework built through vibe coding with Kimi K2 and Claude Code. Features REINFORCE, PPO, and DQN algorithms with Gymnasium integration, async vector environments for parallel training, comprehensive testing with 50+ unit tests, and modern Python tooling including UV package management, Ruff linting, and Weights & Biases integration. Includes Snake Game environment and supports TensorBoard visualization for educational RL research.

## Learning Resources

> Essential courses and educational resources to master vibe coding and AI-assisted development.

### DeepLearning.AI

> The premier AI education platform founded by Andrew Ng, offering comprehensive courses that bridge the gap between AI theory and practical application.

#### [Vibe Coding 101 with Replit](https://learn.deeplearning.ai/courses/vibe-coding-101-with-replit)

Master the art of vibe coding with this hands-on course created in partnership with Replit. Learn how to leverage AI coding agents to build and deploy web applications without traditional programming barriers. This 1-hour intensive covers agentic code development principles, practical SEO analyzer creation, and voting app implementation using Replit's cloud environment.

#### [MCP: Build Rich Context AI Apps with Anthropic](https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic)

Dive deep into the Model Context Protocol (MCP) with this comprehensive 1-hour 38-minute course developed with Anthropic. Learn to build standardized AI applications that seamlessly connect to external tools and data sources. Master MCP server creation, client implementation, and deployment strategies for building rich-context AI applications with minimal integration overhead.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=0xWelt/Awesome-Vibe-Coding&type=Date)](https://star-history.com/#0xWelt/Awesome-Vibe-Coding&Date)

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/0xWelt/Awesome-Vibe-Coding/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=0xWelt/Awesome-Vibe-Coding" />
</a>

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a
[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[OSS Icon]: https://jaywcjlove.github.io/sb/ico/min-oss.svg 'Open Source Software'
[Freeware Icon]: https://jaywcjlove.github.io/sb/ico/min-free.svg 'Freeware'
[app-store Icon]: https://jaywcjlove.github.io/sb/ico/min-app-store.svg 'App Store Software'
[awesome-list Icon]: https://jaywcjlove.github.io/sb/ico/min-awesome.svg 'Awesome List'
