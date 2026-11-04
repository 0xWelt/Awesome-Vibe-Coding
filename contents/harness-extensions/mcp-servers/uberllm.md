---
name: "UberLLM"
link: "https://uberllm.dev/docs/mcp"
tags: [mcp]
---

Hosted remote MCP server (`https://api.uberllm.dev/mcp`, Streamable HTTP) for UberLLM, one OpenAI- and Anthropic-compatible API key for text, image, video, music and speech models. Nine tools let a coding agent list models with their current price, quote a request before spending, generate and edit images, start a video and wait for it, and check the balance: `list_models`, `get_model`, `quote`, `generate_image`, `edit_image`, `start_video`, `get_job`, `wait_job` and `balance`. Add it with `claude mcp add --transport http uberllm https://api.uberllm.dev/mcp --header "Authorization: Bearer $KEY"`; the same key also points Claude Code or Codex itself at other models. Prepaid credit from $5 by card or PayPal, no free tier; tool calls that make something are billed at what the provider charged. Listed in the official MCP Registry as `dev.uberllm/mcp`.
