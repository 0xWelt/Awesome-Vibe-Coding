---
name: "BrewPage"
link: "https://brewpage.app"
---

BrewPage gives an AI-generated HTML page, Markdown document, report, small static site or file a public HTTPS link in one request, with no signup and no API key. An agent sends one `POST` and gets back a link plus an owner token that updates or deletes the content at the same URL. It ships as an MCP server (`npx -y brewpage-mcp` or the remote endpoint `https://brewpage.app/mcp`), a Claude Code skill and a GitHub Action, with `llms.txt` and an OpenAPI contract. Free; hosting is temporary: content expires after 15 days by default, up to 30 days (90 with a free profile).
