---
name: "OrcaReplay"
link: "https://github.com/Continuum-AI-Corp/OrcaReplay"
command: "orca"
---

OrcaReplay records a coding-agent session below the harness, at the process and socket boundary, so the model traffic, the shell commands with their exit codes, the per-turn file changes and the MCP calls all land on one timeline. The recording then replays offline with the network off, so the recorded decisions are served back rather than re-asked — or forks from a chosen checkpoint onto a different model. Works with Claude Code, Codex, opencode, Qwen Code, Cursor and others, including harnesses that read no base-URL variable at all.
