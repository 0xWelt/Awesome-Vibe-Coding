---
name: "Ponder"
link: "https://github.com/Quinnod345/ponder"
---

Ponder is a zero-dependency Node.js CLI, skill, and append-only review ledger (`.ponder/<slug>/ledger.jsonl`) for Claude Code, OpenAI Codex, Cursor, Gemini CLI, and OpenClaw. Each review pass walks a fixed seven-step state machine (`predict`, `units`, `grade`, `deliberate`, `delta`, `judge`, `decide`) across four roles (`skeptic`, `builder`, `dreamer`, `empath`), and the CLI refuses `ponder decide stop` until every declared file or unit is graded and finding churn converges to zero. Install it with `npx skills add quinnod345/ponder` or `npm install -g @quinnod345/ponder` (MIT, Node.js 18+).
