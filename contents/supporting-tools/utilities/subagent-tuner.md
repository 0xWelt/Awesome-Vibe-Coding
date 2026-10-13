---
name: "subagent-tuner"
link: "https://github.com/Kruhlikau/subagent-tuner"
---

subagent-tuner is a Claude Code mod for people who delegate to many subagents. It decides which model and reasoning effort each subagent runs on: it can ask you first, suggest values by the kind of task (review on a strong model, search on a small one), or apply a saved default over what the agent requested. Scripted runs (`claude -p`, SDK) are left untouched and nothing goes over the network.
