---
name: Ironheights
link: https://github.com/Frank-Masciopinto/ironheights
---

Open-source (Apache-2.0) CLI and agent skill that statically scans agent skills (`SKILL.md` folders, OpenClaw/ClawHub) before you install them, flagging prompt injection, hidden text, credential reads, remote-exec installs and persistence, then pins installed skill files to a local integrity baseline so later changes are caught. Runs locally with `npx ironheights scan <path>`.
