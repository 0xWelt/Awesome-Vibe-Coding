---
name: "Carbon Forge"
link: "https://carbonforge.dev/docs/p/guides/mcp-anonymous-access"
---

Hosted remote MCP server for source control and a shared record: code, files and prose live in one record on the server, and a coding agent reads and writes it through the same tools a person uses. An agent opens a lane, a set of patches over the trunk, instead of cloning, and lands it as one all-or-nothing changeset; blame, grep, diff and history run on the server. Streamable HTTP at `https://carbonforge.dev/api/mcp`: public workspaces read without a token, writing needs a bearer token. Public workspaces are free and every account includes one free private workspace; pricing at [carbonforge.dev/pricing](https://carbonforge.dev/pricing).
