---
name: Hermes Agent
link: https://hermes-agent.nousresearch.com/
image: https://web-assets.nousresearch.com/marketing/80a6b1a7becc8b947717934e1a02410b2a48850e/assets/hermes-agent/og-image.png
tags: [desktop, connectors, skills, routines]
---

Hermes Agent is Nous Research's free, open-source personal agent. You install it on a computer you control, and a gateway process keeps serving your chat channels after you quit the app.

**Runtime:** Hermes Desktop for macOS, Windows, and Linux, plus a CLI that uses the same data directory (`~/.hermes`, or `%LOCALAPPDATA%\hermes` on Windows). The [desktop guide](https://hermes-agent.nousresearch.com/docs/user-guide/desktop) says the gateway is not tied to the app: it keeps running after you quit, with no idle shutdown, until you stop it. Channels on the product page include Telegram, Discord, Slack, WhatsApp, Signal, and email. It can also run on a VPS. Nous Portal offers optional cloud hosting; the agent itself is the product you run.

**Acts on:** The chat channels the gateway serves, and scheduled jobs such as reports, backups, and briefings, which the product page says run unattended through the gateway. Work can stay on the local machine or move to a sandbox you choose (Docker, SSH, Singularity, or Modal). Telegram setup in the desktop app saves your user ID on an allowlist.

**Extensions:** Built-in cron, persistent memory, and a learning loop that writes skills. The desktop app lists installed skills, a built-in catalog, and Skills Hub installs that wait for you to confirm. Isolated subagents can take separate tasks. You connect your own model provider, or optional Nous Portal credits.

**Notes:** MIT license. Nous Portal plans price models, hosted tools, and optional cloud hosting; they are not required to run Hermes Agent. This entry is the personal agent, not a coding harness. Codex and Claude Code stay in [Coding Agents](../../coding-agents/).
