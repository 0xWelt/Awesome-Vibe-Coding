---
name: "/call-me"
link: "https://github.com/radres/call-me"
tags: [mcp]
---

Hosted remote MCP server and Claude Code plugin that let a coding agent ring or text the developer's iPhone when a vibe coding session needs a decision, and read the spoken or typed reply back as text. The /call-me iPhone app gives the user a private 10-digit number, and the agent passes that number as a tool argument; the agent's question is read aloud on a real incoming-call screen, which also works in CarPlay and AirPods. Eight tools: `call`, `say`, `hang_up`, `text`, `wait_for_reply`, `poll_result`, `setup` and `set_thread_title`. Add it with `claude mcp add --transport http call-me https://callmemcp.com/mcp` (no credentials at the endpoint); the repo also has Codex, Gemini CLI and Grok Build entries. The iPhone app needs a paid subscription (weekly or yearly, no free tier).
