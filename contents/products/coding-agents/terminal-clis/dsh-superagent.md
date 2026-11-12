---
name: "DeepSeek Super-agent (prototype)"
link: "https://github.com/deepseek-ai/dsh-superagent-prototype"
---

Research prototype for reference only, not an official DeepSeek product and not production-ready software. The published code was adapted and is not identical to the internal version or to everything in the article "Exploring Super-agent Design: Towards a More Autonomous Agent System"; some designs in that article are future work and are not implemented here.

dsh-superagent is a proactive coding agent for one GitHub repository, packaged as a bundle for DeepSeek Harness (https://github.com/deepseek-ai/deepseek-harness). Harness is the runtime, and this agent runs on it for a single repository. It listens to GitHub and optionally Feishu. When someone who is allowed asks it for work, it opens a work item, works in its own agent session and directory, and answers in the original conversation, for example with a pull request. A web panel shows what needs a person. It is meant to take as little human attention as possible and speak mainly when someone must act or can use a result. MIT licensed.
