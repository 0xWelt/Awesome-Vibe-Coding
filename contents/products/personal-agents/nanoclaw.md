---
name: NanoClaw
link: https://nanoclaw.dev/
image: https://nanoclaw.dev/social-preview.jpg
tags: [desktop, remote, self-hosted, skills, routines, connectors]
---

NanoClaw is an open-source personal agent you run on your own machine. One host process routes messages, and every active session runs in its own Docker container.

**Runtime:** macOS, Linux, or Windows through WSL2, with Docker. The [product page](https://nanoclaw.dev/) says `bash nanoclaw.sh` after a clone installs dependencies, asks whether Claude or Codex powers the first agent, stores that credential, and pairs a channel. The code is [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw). A 60-second sweep on the host wakes due work.

**Acts on:** The messaging channels you add, and the files you mount into a container. The page says a container is unprivileged and sees only those mounts, so shell commands run inside the container. Scheduled jobs use the provider you choose and message you back. The page says egress lockdown, mount rules, sender policies, and human approvals can narrow what a session is allowed to do.

**Extensions:** Channels and providers are skills you add, so a fork keeps only the ones you want. The page lists WhatsApp, Telegram, Slack, Discord, Signal, and others, installed on demand. By default, outbound requests go through OneCLI's Agent Vault, which injects credentials at request time and applies per-agent policy and rate limits. The page says agents do not hold the raw API keys. Each agent group has its own instructions, memory, credentials, and mounts.

**Notes:** MIT licensed. Claude is the default provider; Codex can be selected at setup, and OpenCode or Ollama can be set per agent group. The project describes itself as a smaller, container-isolated alternative in the same personal-agent class as OpenClaw. Provider model fees are separate from the software.
