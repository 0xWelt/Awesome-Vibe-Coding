---
name: OpenClaw
link: https://openclaw.ai/
image: https://openclaw.ai/og-image.png
tags: [desktop, connectors, skills, routines]
---

OpenClaw is an open-source personal assistant that runs on a computer you control and stays reachable from the chat apps you already use.

**Runtime:** Mac, Windows, or Linux. A local Gateway stays up as a service: launchd, systemd, or a Windows Scheduled Task, as described in the [Gateway runbook](https://docs.openclaw.ai/gateway). You message it from WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and other channels (the product page says 29). The [January 29, 2026 post](https://openclaw.ai/blog/introducing-openclaw) also says it can run on a laptop, a homelab, or a VPS. There is no hosted tier and no paid product from the project.

**Acts on:** The product page describes inbox, email, calendar, and flight check-in work from chat, plus browsing the web and filling forms. The [personal-assistant setup](https://docs.openclaw.ai/start/openclaw) uses a dedicated chat account, an allowlist of who may message it, and mention rules in groups. Setup can add a proactive-check job; the docs say to review automations and keep tool policy tight until you trust it.

**Extensions:** Messaging channels, skills, and a model you bring (hosted, subscription, gateway, or local). The homepage says your memories, skills, models, machines, and data stay yours. Session state and the agent workspace live on the machine, under `~/.openclaw`.

**Notes:** MIT licensed, and stewarded by the OpenClaw Foundation, an independent US 501(c)(3), with no enterprise edition. The name post and the [lore page](https://docs.openclaw.ai/start/lore) record earlier names Warelay, Clawd, Clawdbot, and Moltbot. A macOS bridge doc also keeps a legacy socket name, clawdis. Those are the same project, not separate products. It can run shell and code on your machine; this list records the personal assistant, not a coding harness. Claude Code stays in [Harnesses](../../harnesses/).
