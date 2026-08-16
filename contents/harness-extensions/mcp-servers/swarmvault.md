---
name: "SwarmVault"
link: "https://github.com/swarmclawai/swarmvault"
---

Local-first RAG knowledge vault and MCP server. Compiles raw sources (books, notes, transcripts, exports, datasets, slide decks, files, URLs, code) into a durable markdown wiki with a knowledge graph and a hybrid SQLite FTS plus embeddings index. The bundled MCP server (`npx -y @swarmvaultai/cli mcp`) exposes page search, page reads, source listing, query, ingest, compile, and lint tools. Designed to cut token usage in vibe coding workflows by serving compact wiki summaries instead of raw source files. Works with Claude Code, Codex, OpenCode, Cursor, and any MCP client. MIT, runs entirely on your machine.
