---
name: "Open Walnut"
link: "https://github.com/EvanZhang008/open-walnut"
---

Open Walnut is a self-hosted, MIT-licensed web console for Claude Code on your laptop and remote dev boxes. A small daemon on each machine owns the `claude` processes, so sessions keep running when SSH drops or the laptop sleeps (no tmux), and Walnut installs that daemon over SSH. One browser page, on desktop or phone, shows every session on every machine and which ones wait for you, and each session gets its own diff of the files it changed, even when several sessions share one repo. Tasks, notes and memory sit next to the sessions. It also runs Codex, OpenCode and Goose on the local machine over the Agent Client Protocol (ACP). Local-first with no telemetry, TypeScript, macOS and Linux; install with `curl -fsSL https://github.com/EvanZhang008/open-walnut/releases/latest/download/install.sh | sh`, then run `walnut web`.
