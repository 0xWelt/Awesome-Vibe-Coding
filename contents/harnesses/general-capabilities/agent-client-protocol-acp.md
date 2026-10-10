---
name: "Agent Client Protocol (ACP)"
link: "https://agentclientprotocol.com/"
---

The Agent Client Protocol (ACP) is an open protocol, started by Zed Industries, that standardizes communication between code editors/IDEs and AI coding agents — much like the Language Server Protocol did for language servers. Local agents run as subprocesses of the editor and talk JSON-RPC over stdio (remote agents over HTTP or WebSocket), reusing MCP's JSON representations where possible and adding coding-specific UX types such as diffs. Any ACP-compatible agent (e.g. Gemini CLI, Kimi CLI, OpenCode, or Claude Code and Codex via adapters) works in any ACP client (e.g. Zed, JetBrains IDEs, Neovim, Toad), with official SDKs for TypeScript, Python, Rust, Kotlin, and Java ([GitHub](https://github.com/agentclientprotocol/agent-client-protocol), Apache-2.0). Not to be confused with the Agent Communication Protocol, which targets agent-to-agent interoperability.
