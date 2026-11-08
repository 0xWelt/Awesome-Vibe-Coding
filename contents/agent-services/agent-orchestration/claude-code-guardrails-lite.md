---
name: "claude-code-guardrails-lite"
link: "https://github.com/edtrackai/claude-code-guardrails-lite"
image: "https://opengraph.githubassets.com/48af7225ac9a554c69140252a17ff48ea9c615f1c5462810377198aedcc8e747/edtrackai/claude-code-guardrails-lite"
---

claude-code-guardrails-lite is a small Claude Code plugin (2.1.287+) that checks each tool call and denies three kinds before they run: reading secret `.env` files (`.env.example` is allowed), git force pushes, and recursive `rm` on `/`, `~` or `$HOME`. It is about 75 lines of dependency-free, pattern-based JavaScript, so rephrased or indirect commands can get past it.
