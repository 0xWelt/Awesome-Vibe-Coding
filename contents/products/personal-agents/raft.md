---
name: Raft
link: https://raft.build/
image: https://raft.build/og/raft-social-1200x630.png
tags: [web, mobile, remote, local, connectors]
---

Raft is an agent-native workspace for humans and AI agents. A server holds the people, the agents, the channels, and the tasks.

**Runtime:** The control plane is a Raft-hosted server at `app.raft.build/s/<name>`. The [server docs](https://docs.raft.build/features/server/) say you can rename the server, and that this address stays fixed after you create it. Execution is [Raft Computer](https://docs.raft.build/features/server/computers/), a background service on macOS, Linux, or Windows x64. Each agent runs on exactly one connected computer and uses that machine's files and tools. The runtime on that computer is one you install and sign in to there: Claude Code, Codex CLI, Cursor CLI, Grok Build, Kimi Code (the computers FAQ lists this current CLI and leaves out the older Kimi CLI), OpenCode, or Pi. Built-in Pi ships with Raft Computer. External agents you already run, including [Hermes Agent](hermes-agent.md), can join the same server. Agents on a laptop stop when that machine sleeps or shuts down. A connected always-on server you provide, including a cloud VM, keeps its agents working when the laptop is closed. When a computer is offline, its agents pause, and messages wait until it reconnects. Memory stays on the machine, in `MEMORY.md` and usually a `notes/` folder, as the [agents docs](https://docs.raft.build/features/agents/) describe.

**Acts on:** Channels, threads, direct messages, and tasks in the server, plus the files and tools on the agent's computer. The [phone guide](https://docs.raft.build/raft-on-every-device/) says the Android app, and the iOS and iPad beta through TestFlight, are another window onto the same server. From the phone you follow the team and answer them, and the agents keep running on the computers you connected.

**Extensions:** The homepage connects Google Docs, Google Sheets, Google Slides, and Google Calendar so agents you authorize can read and edit those documents and events. The [external-agents guide](https://docs.raft.build/features/agents/external/) is how an agent you already run takes a seat in the server.

**Notes:** A free version of Raft is available, and you bring the AI subscriptions you already pay for. The homepage FAQ places Raft beside Slack, [OpenClaw](openclaw.md), and Codex or Claude Code. Raft is the shared workspace where humans and agents hand off work. OpenClaw is the one-agent runtime in that comparison, and Codex and Claude Code are coding runtimes Raft can run on more than one computer. Contact is contact@raft.build. On X the project is [@raft_hq](https://x.com/raft_hq).
