---
name: ZeroClaw
link: https://www.zeroclaw.com/
image: https://www.zeroclaw.com/images/og-card.jpg
tags: [desktop, connectors, skills, routines]
---

ZeroClaw is a personal agent you run as one Rust binary on a machine you control. It uses your keys or a local model, and there is no ZeroClaw cloud seat.

**Runtime:** The binary on Linux, macOS, Windows, or a small board such as a Raspberry Pi. The [product page](https://www.zeroclaw.com/) says you install a prebuilt binary, run `zeroclaw quickstart`, then start `zeroclaw gateway` and `zeroclaw daemon` for channels and webhooks. The [repository README](https://github.com/zeroclaw-labs/zeroclaw) says `zeroclaw service install` registers systemd, launchctl, or a Windows service so it stays up. Config lives in `~/.zeroclaw/config.toml`.

**Acts on:** Channels you connect and tools on that machine, including shell, browser, and HTTP. The product page says supervised autonomy is the default: medium-risk actions wait for approval, and high-risk actions are refused. YOLO mode is opt-in. Landlock, Bubblewrap, Seatbelt, or Docker can limit what the process touches. Optional HMAC tool receipts stamp each successful tool call.

**Extensions:** Skills that package a task and its tools, cron and webhook triggers, and the channels and providers you enable. The product page says 30+ channels, including Telegram, Discord, Slack, Signal, and email, and 70+ LLM providers, including a local model through Ollama, LM Studio, llama.cpp, or vLLM. The README describes the same pluggable provider and channel setup.

**Notes:** Dual-licensed MIT or Apache-2.0. The product page says you pay your model provider, or nothing extra when the model is local. The official code is [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw). This entry is the personal agent, not a coding harness.
