---
name: "Maat Agent (molt)"
link: "https://github.com/solvyxtech/molt"
command: molt
---

Maat Agent (molt) is an open-source coding agent written in TypeScript, with a terminal CLI/TUI and an Electron desktop app for macOS, Windows and Linux. When the model says a task is done, it runs the checks listed in the project's `done.yml` (tests, type checks, build commands and similar) against the real files on disk, and if any fail the claim is refused and the failure goes back to the model. Every file write is recorded with before and after hashes, each attempt gets a receipt whether it was accepted or refused, and `maat verify` recomputes the hash-chained journal. It works with your own API key on any OpenAI-compatible endpoint (OpenAI, OpenRouter, Groq, Mistral, local Ollama, llama.cpp or vLLM) or on Anthropic's API, and can also run on a Grok plan through xAI's Grok Build CLI. Apache-2.0 licensed. Install the desktop app or CLI from the [GitHub releases](https://github.com/solvyxtech/molt/releases/latest), or build from source with `git clone https://github.com/solvyxtech/molt && cd molt && npm install && npm run build`.
