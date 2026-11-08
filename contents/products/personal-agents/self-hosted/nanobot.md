---
name: Nanobot
link: https://nanobot.wiki/
image: https://nanobot.wiki/assets/nanobot_social.png
tags: [desktop, connectors, skills, routines]
---

Nanobot is a lightweight open-source personal agent you host yourself. You bring the model, and a gateway on your machine keeps serving the WebUI, the terminal, and chat apps.

**Runtime:** Python 3.11 or newer, on a computer you control. The [repository README](https://github.com/HKUDS/nanobot) says a desktop install opens a WebUI for model setup, and that the gateway keeps running after the browser or terminal closes until you stop it. The same process can run as a long-running local or server-side gateway. The project site is [nanobot.wiki](https://nanobot.wiki/).

**Acts on:** Files, the web, and the chat channels you connect. The README lists built-in readers for PDF, Word, Excel, and PowerPoint, plus shell, web search and fetch, and image generation. Scheduled automations and long-horizon goals run on that gateway. The README says the gateway owns security policy for the WebUI, the terminal UI, and the chat apps.

**Extensions:** MCP integrations, skills, long-term memory, and multi-agent delegation. Channels named in the README include Telegram, Discord, Slack, WeChat, email, Feishu, Microsoft Teams, Mattermost, and Linear. Model access is an OpenAI-compatible API or a local model server. Nanobot does not supply a model account.

**Notes:** MIT licensed. Copyright in the [LICENSE](https://github.com/HKUDS/nanobot/blob/main/LICENSE) is held by Xubin Ren and the nanobot contributors. The code is [HKUDS/nanobot](https://github.com/HKUDS/nanobot). This entry is the self-hosted personal agent. It can run shell and code on your machine; coding harnesses stay in [Harnesses](../../harnesses/).
